/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericHarvester = require("reind/blk/blk_genericHarvester");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericHarvester.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericHarvester.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_wallHarvester.js loaded.");
});
