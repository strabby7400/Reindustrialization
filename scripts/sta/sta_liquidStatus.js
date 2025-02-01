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
    const setStats_liquidStatus = function(sta) {
      sta_genericStatus.setStats(sta);
    };
    exports.setStats = setStats_liquidStatus;


    const update_liquidStatus = function(sta, unit, time) {
      sta_genericStatus.update(sta, unit, time);
    };
    exports.update = update_liquidStatus;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:sta_liquidStatus.js loaded.");
});
