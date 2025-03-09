/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidDistributionBlock = require("reind/blk/blk_genericLiquidDistributionBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericLiquidDistributionBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidDistributionBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const acceptLiquid = function(b, ob, liq) {
      if(!blk_genericLiquidDistributionBlock.acceptLiquid(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const moveLiquid = function(b, ob, liq) {
      return blk_genericLiquidDistributionBlock.moveLiquid(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      blk_genericLiquidDistributionBlock.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericLiquidDistributionBlock.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fluidPipeBridge.js loaded.");
});
