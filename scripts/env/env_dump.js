/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericWall = require("reind/env/env_genericWall");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericWall.setStats(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_dump.js loaded.");
});
