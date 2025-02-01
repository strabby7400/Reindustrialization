/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericItemBlock = require("reind/blk/blk_genericItemBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericItemBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericItemBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericDistributionBlock.js loaded.");
});
