/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const ct_wea_ambientWeather = require("reind/ct/ct_wea_ambientWeather");
    const ct_wea_decorativeWeather = require("reind/ct/ct_wea_decorativeWeather");
  // End


  // Part: Setting
    var ldm = false;
    const set_ldm = function(bool) {
      ldm = bool;
    };
    exports.set_ldm = set_ldm;
  // End


  // Part: Weather Presets
    const wp_aerthStorm_ldm = new Seq([
      ct_wea_ambientWeather.we_weaAmb_aerthNormal,
    ]);

    const wp_aerthStorm = new Seq([
      ct_wea_ambientWeather.we_weaAmb_aerthNormal,
      ct_wea_decorativeWeather.we_weaDeco_heavyRain,
      ct_wea_decorativeWeather.we_weaDeco_steamFlow,
      ct_wea_decorativeWeather.we_weaDeco_fogBlack,
    ]);

    const wp_aerthStormLeaves_ldm = new Seq([
      ct_wea_ambientWeather.we_weaAmb_aerthNormal,
    ]);

    const wp_aerthStormLeaves = new Seq([
      ct_wea_ambientWeather.we_weaAmb_aerthNormal,
      ct_wea_decorativeWeather.we_weaDeco_heavyRain,
      ct_wea_decorativeWeather.we_weaDeco_flyingLeaves,
      ct_wea_decorativeWeather.we_weaDeco_steamFlow,
      ct_wea_decorativeWeather.we_weaDeco_fogBlack,
    ]);
  // End


  // Part: Methods
    var needUpdate = false;
    function update_sector() {
      var sector = Vars.state.sector;

      if(sector == null) needUpdate = true;
      if(sector != null && needUpdate) {
        Groups.weather.clear();
        needUpdate = false;
      };

      if(sector != null) {
        var id = sector.id;
        var pla = Vars.state.planet.name;
        var li_we = null;

        if(pla == "reind-pla-ter-aerth") {
          switch(id) {
            case 0 :
              // Sector Alpha
              li_we = ldm ? wp_aerthStormLeaves_ldm : wp_aerthStormLeaves;
              break;
            case 94 :
              // Crab Cliff
              li_we = ldm ? wp_aerthStorm_ldm : wp_aerthStorm;
              break;
          };
        };

        if(li_we != null) Vars.state.rules.weather = li_we;
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Event
    Events.run(Trigger.update, () => {
      update_sector();
    });
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_sector.js loaded.");
});
