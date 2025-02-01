/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericFactory = require("reind/blk/blk_genericFactory");
    const blk_genericHeatBlock = require("reind/blk/blk_genericHeatBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericFactory.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericFactory.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      blk_genericHeatBlock.setBars(blk);
    };
    exports.setBars = setBars;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_heatFactory.js loaded.");
});
