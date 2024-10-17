// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/




/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function update_extra(obj, state) {

    };
  // End


  // Start: Region
    /* wea-part */
    const weaPart_fogBlack = extend(ParticleWeather, "wea-part-fog-black", {
      update(state) {
        this.super$update(state);
        update_extra(this, state);
      },
    });
    exports.weaPart_fogBlack = weaPart_fogBlack;


    const weaPart_fogRed = extend(ParticleWeather, "wea-part-fog-red", {
      update(state) {
        this.super$update(state);
        update_extra(this, state);
      },
    });
    exports.weaPart_fogRed = weaPart_fogRed;


    const weaPart_steamFlow = extend(ParticleWeather, "wea-part-steam-flow", {
      update(state) {
        this.super$update(state);
        update_extra(this, state);
      },
    });
    exports.weaPart_steamFlow = weaPart_steamFlow;


    const weaPart_carnage = extend(ParticleWeather, "wea-part-carnage", {
      update(state) {
        this.super$update(state);
        update_extra(this, state);
      },
    });
    exports.weaPart_carnage = weaPart_carnage;


    /* wea-rain */
    const weaRain_heavyRain = extend(RainWeather, "wea-rain-heavy-rain", {
      update(state) {
        this.super$update(state);
        update_extra(this, state);
      },
    });
    exports.weaRain_heavyRain = weaRain_heavyRain;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_weather.js loaded.");
});
