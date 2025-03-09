/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_heater = require("reind/blk/blk_heater");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_heater.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_heater.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      blk_heater.setBars(blk);
    };
    exports.setBars = setBars;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_attributeHeater.js loaded.");
});
