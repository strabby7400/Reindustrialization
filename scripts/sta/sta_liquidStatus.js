/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const sta_genericStatus = require("reind/sta/sta_genericStatus");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(sta) {
      sta_genericStatus.setStats(sta);
    };
    exports.setStats = setStats;


    const update = function(sta, unit, time) {
      sta_genericStatus.update(sta, unit, time);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:sta_liquidStatus.js loaded.");
});
