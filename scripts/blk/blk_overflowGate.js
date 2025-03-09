/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDistributionGate = require("reind/blk/blk_genericDistributionGate");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDistributionGate.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDistributionGate.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_overflowGate.js loaded.");
});
