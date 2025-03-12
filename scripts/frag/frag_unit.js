/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_env = require("reind/db/db_env");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Surrounding
    const update_surrounding = function(utp, unit) {
      if(Mathf.chance(0.98)) return;
      var t = unit.tileOn();
      if(t == null) return;

      var cond_onFloor = !unit.flying;
      var cond_hidable = !unit.flying && utp.hitSize < 28.0;
      var cond_standing = !unit.flying && !(unit instanceof Legsc);
      var count_wall = 0.0;
      var staTime = 240.0;

      // Beneath
      if(cond_onFloor) {
        if(db_env.quicksand.contains(t.floor().name)) unit.apply(Vars.content.statusEffect("reind-sta-spec-quicksand"), staTime);
        if(db_env.parasiteFluids.contains(t.floor().name)) /*unit.apply(Vars.content.statusEffect("reind-sta-spec-parasite"), 1800.0)*/;
      };

      // Range
      var li_ot = mdl_game._liTileRect(t, 5);

      li_ot.each(ot => {
        var d = mdl_game._dst(mdl_game._pos(1, t), mdl_game._pos(2, ot));
        var oblk = ot.block();
        var ob = ot.build;

        if(cond_hidable && oblk.name.includes("reind-env-tree-")) {
          var z = mdl_data.read_1n1v(db_env.treeLayers, ot.block().name);
          if(z > 76.0 && z < 80.0 && d < oblk.region.width * 0.15) {
            unit.apply(Vars.content.statusEffect("reind-sta-spec-hidden-well"), staTime);
            ot.block().drawBase(ot);
          };
        };

        if(oblk instanceof CoreBlock && ob.team == unit.team) unit.apply(Vars.content.statusEffect("reind-sta-spec-core-overdrive"), staTime);

        if(utp.name.includes("reind-unit-core-") && ob != null && ob.team != Team.derelict && ob.team != unit.team && !oblk.name.includes("reind-map-")) unit.apply(Vars.content.statusEffect("reind-sta-spec-attack-suppression"), staTime);

        if(cond_standing && oblk.name.includes("reind-def-wall-") && ob.team == unit.team) count_wall += 8.0 / d;
      });

      // Post-detection
      if(count_wall > glb_vars.wall_penaltyLimit) unit.apply(Vars.content.statusEffect("reind-sta-spec-over-protected"), staTime);
    };
    exports.update_surrounding = update_surrounding;
  // End


  // Part: Player
    const update_mouse = function(utp, unit) {
      if(unit != Vars.player.unit()) return;

      var ot = mdl_game._tileMouse();
      if(ot == null) return;

      var ui = new UI();
      var nm_flr = ot.floor().name;
      var nm_blk = ot.block().name;

      if(Core.input.touched) {
        if(nm_flr == "reind-map-misc-restriction-zone") ui.showInfoFade("@info.reind-info-restriction-zone.name", 2.0);
      };
    };
    exports.update_mouse = update_mouse;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_unit.js loaded.");
});
