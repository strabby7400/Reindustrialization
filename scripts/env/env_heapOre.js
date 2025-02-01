/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericOre = require("reind/env/env_genericOre");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericOre.setStats(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_heapOre.js loaded.");
});
