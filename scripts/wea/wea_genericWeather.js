/*
  ========================================
  Section: Definition
  ========================================
*/




/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const update = function(wea, state) {

    };
    exports.update = update;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: wea_genericWeather.js loaded.");
});
