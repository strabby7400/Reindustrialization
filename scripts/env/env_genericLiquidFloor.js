/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericFloor = require("reind/env/env_genericFloor");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericFloor.setStats(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_genericLiquidFloor.js loaded.");
});
