/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/wea/wea_genericWeather");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const update = function(wea, state) {
      PARENT.update(wea, state);
    };
    exports.update = update;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: wea_decorativeWeather.js loaded.");
});
