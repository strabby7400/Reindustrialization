/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericStorageBlock = require("reind/blk/blk_genericStorageBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericStorageBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericStorageBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_container.js loaded.");
});
