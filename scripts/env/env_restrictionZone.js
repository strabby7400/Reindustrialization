/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_mapFloor");

    const mdl_table = require("reind/mdl/mdl_table");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(str) {
      return function(tb) {
        mdl_table.setNoteStat(tb, str);
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.mapNote, ax_buildStats(Core.bundle.get("info.reind-info-note-restriction-zone.name")));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_restrictionZone.js loaded.");
});
