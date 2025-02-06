/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericItem = require("reind/rs/rs_genericItem");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.transportable, false);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(itm) {
      rs_genericItem.setStats(itm);

      setStatsComp(itm);
    };
    exports.setStats = setStats;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_virtualItem.js loaded.");
});
