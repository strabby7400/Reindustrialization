/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const wea_genericWeather = require("reind/wea/wea_genericWeather");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const update_eventWeather = function(wea, state) {
      wea_genericWeather.update(wea, state);
    };
    exports.update = update_eventWeather;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:wea_eventWeather.js loaded.");
});
