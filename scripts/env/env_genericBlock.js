/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_data = require("reind/mdl/mdl_data");

    const mdl_table = require("reind/mdl/mdl_table");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(cts) {
      return function(tb) {
        mdl_table.setContentRowDisplay(tb, cts);
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      if(blk.itemDrop != null) {
        blk.stats.add(db_stat.resourceRelated, ax_buildStats(blk.itemDrop));
      };

      if(blk.liquidDrop != null) {
        blk.stats.add(db_stat.resourceRelated, ax_buildStats(blk.liquidDrop));
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      setStatsComp(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_genericBlock.js loaded.");
});
