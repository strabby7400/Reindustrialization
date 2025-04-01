/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/sta/sta_genericStatus");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(sta) {
      PARENT.setStats(sta);
    };
    exports.setStats = setStats;


    const update = function(sta, unit, time) {
      PARENT.update(sta, unit, time);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: sta_liquidStatus.js loaded.");
});
