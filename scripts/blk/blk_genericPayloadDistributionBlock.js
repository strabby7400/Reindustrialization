/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericPayloadBlock = require("reind/blk/blk_genericPayloadBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericPayloadBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericPayloadBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericPayloadDistributionBlock.js loaded.");
});
