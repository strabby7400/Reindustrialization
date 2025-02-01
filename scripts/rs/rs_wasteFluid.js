/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericFluid = require("reind/rs/rs_genericFluid");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp_wasteFluid(liq) {
      // Get is waste
      liq.stats.add(db_stat.isWaste, true);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_wasteFluid = function(liq) {
      rs_genericFluid.setStats(liq);

      setStatsComp_wasteFluid(liq);
    };
    exports.setStats = setStats_wasteFluid;


    const update_wasteFluid = function(liq, puddle) {
      rs_genericFluid.update(liq, puddle);
    };
    exports.update = update_wasteFluid;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_wasteFluid.js loaded.");
});
