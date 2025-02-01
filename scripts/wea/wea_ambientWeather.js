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
    const update_ambientWeather = function(wea, state) {
      wea_genericWeather.update(wea, state);
    };
    exports.update = update_ambientWeather;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:wea_ambientWeather.js loaded.");
});
