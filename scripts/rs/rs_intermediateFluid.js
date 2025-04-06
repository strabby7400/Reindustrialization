/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericFluid");

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
      PARENT.setStats(liq);

      setStatsComp(liq);
    };
    exports.setStats = setStats;


    const update = function(liq, puddle) {
      PARENT.update(liq, puddle);
    };
    exports.update = update;


    const loadIcon = function(liq) {
      PARENT.loadIcon(liq);
    };
    exports.loadIcon = loadIcon


    const createIcons = function(liq, packer) {
      PARENT.createIcons(liq, packer);
    };
    exports.createIcons = createIcons;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_intermediateFluid.js loaded.");
});
