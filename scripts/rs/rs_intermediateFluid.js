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
    function setStatsComp(liq) {
      liq.stats.add(db_stat.isIntermediate, true);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(liq) {
      rs_genericFluid.setStats(liq);

      setStatsComp(liq);
    };
    exports.setStats = setStats;


    const update = function(liq, puddle) {
      rs_genericFluid.update(liq, puddle);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_intermediateFluid.js loaded.");
});
