/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_mapBlock");

    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");

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
      blk.stats.add(db_stat.mapNote, ax_buildStats(mdl_text._term("note-ruin-wall")));
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


    const updateTile = function(b) {

    };
    exports.update = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_ruin.js loaded.");
});
