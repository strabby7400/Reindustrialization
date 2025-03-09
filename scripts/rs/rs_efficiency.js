/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericResource = require("reind/rs/rs_genericResource");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(effc) {
      effc.stats.remove(Stat.explosiveness);
      effc.stats.remove(Stat.flammability);
      effc.stats.remove(Stat.temperature);
      effc.stats.remove(Stat.heatCapacity);
      effc.stats.remove(Stat.viscosity);

      effc.stats.add(db_stat.transportable, false);
    };


    function updateComp_efficiency(effc, puddle) {

    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(effc) {
      rs_genericResource.setStats(effc);

      setStatsComp(effc);
    };
    exports.setStats = setStats;


    const update = function(effc, puddle) {
      updateComp(effc);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_efficiency.js loaded.");
});
