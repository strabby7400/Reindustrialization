/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidDistributionGate = require("reind/blk/blk_genericLiquidDistributionBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericLiquidDistributionGate.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidDistributionGate.updateTile(b);
    };
    exports.updateTile = updateTile;


    const drawSelect = function(b) {
      blk_genericLiquidDistributionGate.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fluidJunction.js loaded.");
});
