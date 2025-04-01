/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericFactory");
    const PARENT_A = require("reind/blk/blk_genericHeatBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      PARENT_A.setBars(blk);
    };
    exports.setBars = setBars;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_heatFactory.js loaded.");
});
