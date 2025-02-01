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
    function setStatsComp_wasteItem(itm) {
      itm.stats.add(db_stat.isWaste, true);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_wasteItem = function(itm) {
      rs_genericItem.setStats(itm);

      setStatsComp_wasteItem(itm);
    };
    exports.setStats = setStats_wasteItem;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_wasteItem.js loaded.");
});
