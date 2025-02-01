/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const ct_wea_ambientWeather = require("reind/ct/ct_wea_ambientWeather");
    const ct_wea_decorativeWeather = require("reind/ct/ct_wea_decorativeWeather");
  // End


  // Part: LDM
    var ldm = false;
    const setup_ldm = function(bool) {
      ldm = bool;
    };
    exports.setup_ldm = setup_ldm;
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
        var list_we;

        if(pla == "reind-pla-ter-aerth") {
          switch(id) {
            case 0 :
              // Sector Alpha
              list_we = ldm ? wp_aerthStormLeaves_ldm : wp_aerthStormLeaves;
              break;
            case 94 :
              // Crab Cliff
              list_we = ldm ? wp_aerthStorm_ldm : wp_aerthStorm;
              break;
            default :
              list_we = ldm ? wp_aerthStorm_ldm : wp_aerthStorm;
          };
        };

        Vars.state.rules.weather = list_we;
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
  Log.info("REIND:cfg_sector.js loaded.");
});
