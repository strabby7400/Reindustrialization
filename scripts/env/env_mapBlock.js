/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericBlock = require("reind/env/env_genericBlock");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get map only
      blk.stats.add(db_stat.mapOnly, true);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_mapBlock.js loaded.");
});
