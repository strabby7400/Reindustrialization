/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericPowerBlock = require("reind/blk/blk_genericPowerBlock");

    const frag_heat = require("reind/frag/frag_heat");

    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get explosion stats
      if(blk.explosionDamage != null && blk.explosionDamage > 0) {
        blk.stats.add(db_stat.canExplode, true);
        blk.stats.add(db_stat.explosionRadius, blk.explosionRadius, StatUnit.blocks);
        if(blk.explosionPuddleLiquid != null) blk.stats.add(db_stat.spreadLiquid, StatValues.content(new Seq([blk.explosionPuddleLiquid])));
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      // Draw explosion range
      if(blk.explosionDamage != null && blk.explosionDamage > 0) mdl_draw.drawWarningDisk_1blk(blk, Vars.world.tile(tx, ty), blk.explosionRadius * Vars.tilesize);
    };


    function drawComp(b) {
      // Draw fluid heat
      frag_heat.draw_fluidHeat(b);
    };


    function drawSelectComp(b) {
      // Draw explosion range
      if(b.block.explosionDamage != null && b.block.explosionDamage > 0) mdl_draw.drawWarningDisk_1b(b, b.block.explosionRadius * Vars.tilesize);

      // Draw fluid heat
      frag_heat.drawSelect_fluidHeat(b);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericPowerBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericPowerBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


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
  Log.info("REIND:blk_genericGenerator.js loaded.");
});
