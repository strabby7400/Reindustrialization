// Checked on 11-2-2024


// Start: Import
  const ct_weather = require("ct/ct_weather");
// End


// Start: Weather Entries
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
// End


// Start: Weather Presets
  var wp_aerthStorm = new Seq([
    we_steamFlow,
    we_heavyRain,
    we_fogBlack,
  ]);
  var wp_aerthStormLDM = new Seq([
    we_heavyRain,
  ]);


  var wp_aerthStormLeaves = new Seq([
    we_steamFlow,
    we_heavyRain,
    we_flyingLeaves,
    we_fogBlack,
  ]);
  var wp_aerthStormLeavesLDM = new Seq([
    we_heavyRain,
    we_flyingLeaves,
  ]);


  var wp_aerthStormCarnage = new Seq([
    we_steamFlow,
    we_heavyRain,
    we_carnage,
    we_fogRed,
  ]);
  var wp_aerthStormCarnageLDM = new Seq([
    we_heavyRain,
    we_carnage,
  ]);
// End


// Start: Low Detail
  var low_detail = false;
  const setLDM_weatherPreset = function(bool) {
    low_detail = bool;
  };
  exports.setLDM_weatherPreset = setLDM_weatherPreset;


  function setup_weatherPreset(ldm) {
    if(ldm) {
      wp_aerthStorm = wp_aerthStormLDM;
      wp_aerthStormLeaves = wp_aerthStormLeavesLDM;
      wp_aerthStormCarnage = wp_aerthStormCarnageLDM;
    };
  };
// End


// Start: Sector
  var wp_needUpdate = false;


  Events.run(Trigger.update, () => {
      if(Vars.state.sector == null) {
        wp_needUpdate = true;
      };
      if(Vars.state.sector != null && wp_needUpdate) {
        setup_weatherPreset(low_detail);
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
          default :
            Vars.state.rules.weather = wp_aerthStorm;
        };
      };
  });
// End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:cfg_sector.js loaded.");
});
