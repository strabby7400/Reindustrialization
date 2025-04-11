/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const lib_base = require("reind/lib/lib_base");
    const lib_tmi = lib_base.hasTmi ? require("reind/lib/lib_tmi") : null;

    const PARENT = require("reind/blk/blk_genericFactory");

    const frag_faci = require("reind/frag/frag_faci");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_dialog = require("reind/db/db_dialog");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Auxiliary
    function ax_buildStats(cts) {
      return function(tb) {
        mdl_table.setContentRowDisplay(tb, cts);
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.targetBlock, ax_buildStats(frag_faci._structPair(blk)[0]));
    };


    function updateComp(b) {
      if(b.needCheck) {
        b.plan = frag_faci._structPair(b.block)[1];

        b.needCheck = false;
      };

      if(b.cd > 0.0) {b.cd -= 1.0} else {b.cd = 0.0};
    };


    function initComp(blk) {
      if(lib_base.hasTmi) {
        Events.run(MusicRegisterEvent, () => lib_tmi.register_structureCore(blk));
      };
    };


    function buildConfigurationComp(b, tb) {
      var vec2 = new Vec2();

      db_table.__toggle(tb, b, b.showPlan, "eye");

      mdl_table.setTrigger(tb, function() {
        if(Vars.state.paused) {
          mdl_ui.showInfoFade("large-building-paused");
        } else {
          if(!frag_faci.isStructureComplete(b.tile, b.plan)) {
            mdl_ui.showInfoFade("large-building-incomplete");
          } else {
            if(b.cd > 0.0) {
              mdl_ui.showInfoFade("large-building-cooldown");
            } else {
              Call.tileConfig(Vars.player, b, vec2.set(1, -2));
            };
          };
        };
      }, Icon.hammer, mdl_text._info("large-building"), 72.0);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[0] > -2) {
        var blk_tg = frag_faci._structPair(b.block)[0];
        mdl_effect.showAt(mdl_game._pos(b.tile, blk_tg.offset), db_effect._recipeChange(blk_tg.size, b.team.color), 0.0);
        b.tile.setBlock(blk_tg, b.team);
      };

      if(tup[1] > -2) {
        b.showPlan = Boolean(tup[1]);
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var plan = frag_faci._structPair(blk)[1];
      frag_faci.draw_structure(Vars.world.tile(tx, ty), plan);
    };


    function drawComp(b) {
      if(b.showPlan) frag_faci.draw_structure(b.tile, b.plan);
    };


    function drawSelectComp(b) {
      var cond1 = b.cd < 0.0001;
      var cond2 = frag_faci.isStructureComplete(b.tile, b.plan);
      var valid = false;
      var str = "";
      if(!cond1) {
        str = mdl_text._info("structure-cooldown");
      } else if(!cond2) {
        str = mdl_text._info("structure-incomplete");
      } else {
        valid = true;
        str = mdl_text._info("structure-complete");
      };

      mdl_draw.drawSelectText(b, valid, str);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateComp(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_structureCore.js loaded.");
});
