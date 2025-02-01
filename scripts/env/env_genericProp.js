/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericBlock = require("reind/env/env_genericBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericBlock.setStats(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_genericProp.js loaded.");
});
