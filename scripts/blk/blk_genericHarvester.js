/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericMiner = require("reind/blk/blk_genericMiner");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericMiner.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericMiner.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericHarvester.js loaded.");
});
