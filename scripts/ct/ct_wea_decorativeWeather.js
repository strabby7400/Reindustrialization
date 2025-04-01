/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/wea/wea_decorativeWeather");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: wea-deco[rain]
    const weaDeco_heavyRain = extend(RainWeather, "wea-deco-heavy-rain", {
      update(state) {
        this.super$update(state);
        TEMPLATE.update(this, state);
      },
    });
    const we_weaDeco_heavyRain = new Weather.WeatherEntry(weaDeco_heavyRain);
    we_weaDeco_heavyRain.always = true;
    exports.weaDeco_heavyRain = weaDeco_heavyRain;
    exports.we_weaDeco_heavyRain = we_weaDeco_heavyRain;
  // End


  // Part: wea-deco[particle]
    const weaDeco_steamFlow = extend(ParticleWeather, "wea-deco-steam-flow", {
      update(state) {
        this.super$update(state);
        TEMPLATE.update(this, state);
      },
    });
    const we_weaDeco_steamFlow = new Weather.WeatherEntry(weaDeco_steamFlow);
    we_weaDeco_steamFlow.always = true;
    exports.weaDeco_steamFlow = weaDeco_steamFlow;
    exports.we_weaDeco_steamFlow = we_weaDeco_steamFlow;


    const weaDeco_flyingLeaves = extend(ParticleWeather, "wea-deco-flying-leaves", {
      update(state) {
        this.super$update(state);
        TEMPLATE.update(this, state);
      },
    });
    const we_weaDeco_flyingLeaves = new Weather.WeatherEntry(weaDeco_flyingLeaves);
    we_weaDeco_flyingLeaves.always = true;
    exports.weaDeco_flyingLeaves = weaDeco_flyingLeaves;
    exports.we_weaDeco_flyingLeaves = we_weaDeco_flyingLeaves;


    const weaDeco_carnageStorm = extend(ParticleWeather, "wea-deco-carnage-storm", {
      update(state) {
        this.super$update(state);
        TEMPLATE.update(this, state);
      },
    });
    const we_weaDeco_carnageStorm = new Weather.WeatherEntry(weaDeco_carnageStorm);
    we_weaDeco_carnageStorm.always = true;
    exports.weaDeco_carnageStorm = weaDeco_carnageStorm;
    exports.we_weaDeco_carnageStorm = we_weaDeco_carnageStorm;
  // End


  // Part: wea-deco[fog]
    const weaDeco_fogBlack = extend(ParticleWeather, "wea-deco-fog-black", {
      update(state) {
        this.super$update(state);
        TEMPLATE.update(this, state);
      },
    });
    const we_weaDeco_fogBlack = new Weather.WeatherEntry(weaDeco_fogBlack);
    we_weaDeco_fogBlack.always = true;
    exports.weaDeco_fogBlack = weaDeco_fogBlack;
    exports.we_weaDeco_fogBlack = we_weaDeco_fogBlack;


    const weaDeco_fogRed = extend(ParticleWeather, "wea-deco-fog-red", {
      update(state) {
        this.super$update(state);
        TEMPLATE.update(this, state);
      },
    });
    const we_weaDeco_fogRed = new Weather.WeatherEntry(weaDeco_fogRed);
    we_weaDeco_fogRed.always = true;
    exports.weaDeco_fogRed = weaDeco_fogRed;
    exports.we_weaDeco_fogRed = we_weaDeco_fogRed;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_wea_decorativeWeather.js loaded.");
});
