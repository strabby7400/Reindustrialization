/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericProp = require("reind/env/env_genericProp");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericProp.setStats(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_genericWall.js loaded.");
});
