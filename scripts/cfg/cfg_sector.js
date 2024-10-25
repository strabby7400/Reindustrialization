// Checked on 10-10-2024


const ct_weather = require("ct/ct_weather");


// Register weather entries
const we_fogBlack = new Weather.WeatherEntry(ct_weather.weaPart_fogBlack);
we_fogBlack.always = true;
const we_fogRed = new Weather.WeatherEntry(ct_weather.weaPart_fogRed);
we_fogRed.always = true;
const we_steamFlow = new Weather.WeatherEntry(ct_weather.weaPart_steamFlow);
we_steamFlow.always = true;
const we_flyingLeaves = new Weather.WeatherEntry(ct_weather.weaPart_flyingLeaves);
we_flyingLeaves.always = true;
const we_carnage = new Weather.WeatherEntry(ct_weather.weaPart_carnage);
we_carnage.always = true;
const we_heavyRain = new Weather.WeatherEntry(ct_weather.weaRain_heavyRain);
we_heavyRain.always = true;


// Weather presets
var wp_aerthStorm;
var wp_aerthStormLeaves;
var wp_aerthStormCarnage;

var low_detail = false;
const wp_ldm = function(ldm) {
  low_detail = ldm;
};
exports.wp_ldm = wp_ldm;

function wp_update(ldm) {
  if(ldm) {
    wp_aerthStorm = new Seq([
      we_heavyRain,
    ]);

    wp_aerthStormLeaves = new Seq([
      we_heavyRain,
      we_flyingLeaves,
    ]);

    wp_aerthStormCarnage = new Seq([
      we_heavyRain,
      we_carnage,
    ]);
  } else {
    wp_aerthStorm = new Seq([
      we_steamFlow,
      we_heavyRain,
      we_fogBlack,
    ]);

    wp_aerthStormLeaves = new Seq([
      we_steamFlow,
      we_heavyRain,
      we_flyingLeaves,
      we_fogBlack,
    ]);

    wp_aerthStormCarnage = new Seq([
      we_steamFlow,
      we_heavyRain,
      we_carnage,
      we_fogRed,
    ]);
  };
};


// Lock sector states
var wp_needUpdate = false;
Events.run(Trigger.update, () => {
    if(Vars.state.sector == null) {
      wp_needUpdate = true;
    };
    if(Vars.state.sector != null && wp_needUpdate) {
      wp_update(low_detail);
      Groups.weather.clear();
      wp_needUpdate = false;
    };
    if(Vars.state.sector != null && Mathf.chance(0.1)) {
      var id = Vars.state.sector.id;
      switch(id) {
        case 0 :
          // Shelter Cave
          Vars.state.rules.weather = wp_aerthStorm;
          break;
        case 93 :
          // Rim Marsh
          Vars.state.rules.weather = wp_aerthStormLeaves;
          break;
      };
    };
});




Events.run(ClientLoadEvent, () => {
    Log.info("reind:cfg_sector.js loaded.");
});
