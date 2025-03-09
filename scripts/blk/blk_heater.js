/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericHeatBlock = require("reind/blk/blk_genericHeatBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericHeatBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericHeatBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      blk_genericHeatBlock.setBars(blk);
    };
    exports.setBars = setBars;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_heater.js loaded.");
});
