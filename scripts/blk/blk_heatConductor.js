/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericHeatDistributionBlock = require("reind/blk/blk_genericHeatDistributionBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericHeatDistributionBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericHeatDistributionBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      blk_genericHeatDistributionBlock.setBars(blk);
    };
    exports.setBars = setBars;


    const acceptLiquid = function(b, ob, liq) {
      if(!blk_genericHeatDistributionBlock.acceptLiquid(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const moveLiquid = function(b, ob, liq) {
      return blk_genericHeatDistributionBlock.moveLiquid(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      blk_genericHeatDistributionBlock.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericHeatDistributionBlock.drawSelect(b);
    };
    exports.drawSelect = drawSelect;


    const onDestroyed = function(b) {
      blk_genericHeatDistributionBlock.onDestroyed(b);
    };
    exports.onDestroyed = onDestroyed;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_heatConductor.js loaded.");
});
