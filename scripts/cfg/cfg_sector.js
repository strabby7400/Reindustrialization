/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const ct_wea_ambientWeather = require("reind/ct/ct_wea_ambientWeather");
    const ct_wea_decorativeWeather = require("reind/ct/ct_wea_decorativeWeather");
  // End


  // Part: Weather Presets
    const wp_aerthStorm = new Seq([
      ct_wea_ambientWeather.we_weaAmb_aerthNormal,
      ct_wea_decorativeWeather.we_weaDeco_heavyRain,
      ct_wea_decorativeWeather.we_weaDeco_steamFlow,
      ct_wea_decorativeWeather.we_weaDeco_fogBlack,
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
    var needCheck = false;
    const timerCall = new Interval(1);
    function update_sector() {
      var sector = Vars.state.sector;

      if(sector == null) needCheck = true;
      if(sector != null && needCheck) {
        Groups.weather.clear();

        var rules = Vars.state.rules;
        rules.derelictRepair = false;
        rules.coreDestroyClear = false;

        needCheck = false;
      };

      if(sector != null && timerCall.get(300.0)) {
        var id = sector.id;
        var pla = Vars.state.planet.name;
        var li_we = null;

        if(pla == "reind-pla-ter-aerth") {
          switch(id) {

            case 0 :
              // 001: Sector Alpha
              li_we = wp_aerthStormLeaves;
              break;

            case 94 :
              // 002: Crab Cliff
              li_we = wp_aerthStorm;
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
