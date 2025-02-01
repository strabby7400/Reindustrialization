/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const wea_ambientWeather = require("reind/wea/wea_ambientWeather");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: wea-amb
    const weaAmb_aerthNormal = extend(Weather, "wea-amb-aerth-normal", {
      update(state) {
        this.super$update(state);
        wea_ambientWeather.update(this, state);
      },
    });
    const we_weaAmb_aerthNormal = new Weather.WeatherEntry(weaAmb_aerthNormal);
    we_weaAmb_aerthNormal.always = true;
    exports.weaAmb_aerthNormal = weaAmb_aerthNormal;
    exports.we_weaAmb_aerthNormal = we_weaAmb_aerthNormal;


    const weaAmb_aerthParasite = extend(Weather, "wea-amb-aerth-parasite", {
      update(state) {
        this.super$update(state);
        wea_ambientWeather.update(this, state);
      },
    });
    const we_weaAmb_aerthParasite = new Weather.WeatherEntry(weaAmb_aerthParasite);
    we_weaAmb_aerthParasite.always = true;
    exports.weaAmb_aerthParasite = weaAmb_aerthParasite;
    exports.we_weaAmb_aerthParasite = we_weaAmb_aerthParasite;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_wea_ambientWeather.js loaded.");
});
