/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_mapBlock = require("reind/env/env_mapBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_mapBlock.setStats(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_mapFloor.js loaded.");
});
