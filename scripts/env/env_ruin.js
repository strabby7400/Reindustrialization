/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_mapBlock = require("reind/env/env_mapBlock");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.mapNote, "@info.reind-info-note-ruin-wall.name");
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_mapBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {

    };
    exports.update = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_ruin.js loaded.");
});
