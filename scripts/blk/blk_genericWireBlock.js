/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericPowerBlock = require("reind/blk/blk_genericPowerBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericPowerBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericPowerBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericWireBlock.js loaded.");
});
