/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericFactory = require("reind/blk/blk_genericFactory");

    const ct_blk_structureCore = require("reind/ct/ct_blk_structureCore");

    const frag_facility = require("reind/frag/frag_facility");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_dialog = require("reind/db/db_dialog");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(li_ct) {
      return function(tb) {
        mdl_table.setContentRowDisplay(tb, li_ct);
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.targetBlock, ax_buildStats(frag_facility.getStructurePair(blk)[0]));
    };


    function updateComp(b) {
      var needCheck = ct_blk_structureCore.accB_needCheck(b, "r");

      if(needCheck) {
        var plan = frag_facility.getStructurePair(b.block)[1];
        ct_blk_structureCore.accB_plan(b, "w", plan);

        ct_blk_structureCore.accB_needCheck(b, "w", false);
      } else {
        if(Mathf.chance(0.01)) ct_blk_structureCore.accB_needCheck(b, "w", true);
      };
    };


    function buildConfigurationComp(b, tb, plan) {
      mdl_table.setTrigger(tb, function() {
        if(Vars.state.paused) {
          mdl_ui.showInfoFade(Core.bundle.get("info.reind-info-large-building-paused.name"));
        } else {
          if(frag_facility.isStructureComplete(b.tile, plan)) Call.tileConfig(Vars.player, b, new Vec2(1, 0));
        };
      }, Icon.hammer, Core.bundle.get("info.reind-info-large-building.name"), Tex.button, 72.0);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      if(builder != null && builder.isPlayer()) b.lastAccessed = builder.getPlayer().coloredName();
      var val_fi = 0.0;
      if(val instanceof Vec2) val_fi = val.x;
      if(val instanceof Building) val_fi = val.config();

      if(Math.abs(val_fi - 1.0) < 0.0001) {
        var blk_tg = frag_facility.getStructurePair(b.block)[0];
        mdl_effect.showAt(b, db_effect._recipeChange(blk_tg.size, b.team.color), 0.0);
        b.tile.setBlock(blk_tg, b.team);
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t != null) {
        var plan = frag_facility.getStructurePair(blk)[1];
        frag_facility.draw_structure(t, plan);
      };
    };


    function drawComp(b, plan) {
      frag_facility.draw_structure(b.tile, plan);
    };


    function drawSelectComp(b, plan) {
      var cond = frag_facility.isStructureComplete(b.tile, plan);
      var str = cond ? Core.bundle.get("info.reind-info-structure-complete.name") : Core.bundle.get("info.reind-info-structure-incomplete.name");

      mdl_draw.drawSelectText(b, cond, str);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericFactory.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericFactory.updateTile(b);

      updateComp(b);
    };
    exports.updateTile = updateTile;


    const buildConfiguration = function(b, tb, plan) {
      buildConfigurationComp(b, tb, plan);
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


    const draw = function(b, plan) {
      drawComp(b, plan);
    };
    exports.draw = draw;


    const drawSelect = function(b, plan) {
      drawSelectComp(b, plan);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_structureCore.js loaded.");
});
