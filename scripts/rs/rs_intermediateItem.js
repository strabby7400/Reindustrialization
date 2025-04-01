/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericItem");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.isIntermediate, true);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(itm) {
      PARENT.setStats(itm);

      setStatsComp(itm);
    };
    exports.setStats = setStats;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_intermediateItem.js loaded.");
});
