/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_block = require("reind/db/db_block");
    const db_env = require("reind/db/db_env");
  // End


  // Part: Status
    const update_health = function(utp, unit) {
      if(unit.dead || Mathf.chance(0.9)) return;

      var frac = Mathf.clamp(unit.health / unit.maxHealth);

      if(mdl_content.isNonRobot(utp)) {
        // TODO: Non-robot behavior
      } else {
        var sta_d = Vars.content.statusEffect("reind-sta-spec-damaged");
        var sta_sd = Vars.content.statusEffect("reind-sta-spec-severely-damaged");
        var staTime = 60.0;
        if(frac < 0.25) {
          unit.apply(sta_sd, staTime);
          unit.unapply(sta_d);
        } else if(frac < 0.5) {
          unit.apply(sta_d, staTime);
          unit.unapply(sta_sd);
        } else {
          unit.unapply(sta_d);
          unit.unapply(sta_sd);
        };
      };
    };
    exports.update_health = update_health;


    const update_surrounding = function(utp, unit) {
      if(Mathf.chance(0.96)) return;
      var t = unit.tileOn();
      if(t == null) return;

      var count_wall = 0.0;
      var staTime = 150.0;

      // Beneath
      if(mdl_content.isOnFloor(unit)) {
        if(db_env.db["type"]["quicksand"].includes(t.floor().name)) unit.apply(Vars.content.statusEffect("reind-sta-spec-quicksand"), staTime);
        if(db_env.db["type"]["parasiteFluid"].includes(t.floor().name)) /*unit.apply(Vars.content.statusEffect("reind-sta-spec-parasite"), 1800.0)*/;
      };

      // Range
      var ts = mdl_game._tsRect(t, 5);

      ts.forEach(ot => {
        var d = mdl_game._dst(t, ot);
        var oblk = ot.block();
        var ob = ot.build;

        if(mdl_content.isCoverable(unit, true) && mdl_content.isTree(oblk)) {
          var z = oblk.armor;
          if(z > 75.9999 && z < 80.0001 && d < oblk.region.width * 0.15) {
            unit.apply(Vars.content.statusEffect("reind-sta-spec-hidden-well"), staTime);
            ot.block().drawBase(ot);
          };
        };

        if(mdl_content.isCore(oblk) && ob.team == unit.team) unit.apply(Vars.content.statusEffect("reind-sta-spec-core-overdrive"), staTime);

        if(mdl_content.isCoreUnit(utp) && mdl_content.isEnemy(ob, unit.team) && !mdl_content.isMap(oblk)) unit.apply(Vars.content.statusEffect("reind-sta-spec-attack-suppression"), staTime);

        if(mdl_content.isLowGround(unit) && mdl_content.isWall(oblk) && ob.team == unit.team) count_wall += 8.0 / d;
      });

      // Post-detection
      if(count_wall > VAR.wall_penaltyLimit) unit.apply(Vars.content.statusEffect("reind-sta-spec-over-protected"), staTime);
    };
    exports.update_surrounding = update_surrounding;
  // End


  // Part: Player
    const update_player = function(utp, unit) {
      if(unit != Vars.player.unit()) return;

      // Mouse
      var ot = mdl_game._tMouse();
      if(ot != null) {
        var nm_flr = ot.floor().name;
        var nm_blk = ot.block().name;

        if(Core.input.touched) {
          if(nm_flr == "reind-map-misc-restriction-zone") mdl_ui.showInfoFade("restriction-zone");
        };
      };
    };
    exports.update_player = update_player;


    const draw_player = function(utp, unit) {
      if(unit != Vars.player.unit()) return;

      // Heat
      if(Core.settings.getBool("reind-mark-heated-block", false)) mdl_game._heatBlocks(unit, 120.0, unit.team).forEach(b => {mdl_draw.drawBuildArea(b, Pal.lightOrange, 0.3)});
    };
    exports.draw_player = draw_player;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_unit.js loaded.");
});
