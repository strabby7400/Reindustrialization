/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_mapFloor = require("reind/env/env_mapFloor");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.mapNote, "@info.reind-info-note-non-build-zone.name");
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_mapFloor.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_nonBuildZone.js loaded.");
});
