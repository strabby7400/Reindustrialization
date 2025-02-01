/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDrill = require("reind/blk/blk_genericDrill");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDrill.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDrill.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_wallDrill.js loaded.");
});
