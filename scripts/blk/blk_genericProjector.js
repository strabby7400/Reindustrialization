/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDefenseBlock = require("reind/blk/blk_genericDefenseBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDefenseBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDefenseBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericProjector.js loaded.");
});
