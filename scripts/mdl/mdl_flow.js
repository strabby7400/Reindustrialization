/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_database = require("reind/mdl/mdl_database");

    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Methods
    /* NOTE: Reads density of the assigned liquid. The two default values are densities of water and air. */
    const getDensity = function(liq) {
      var dens = mdl_database.read_1n1v(db_fluid.density, liq.name);
      if(dens != null) return dens;

      var grp = mdl_corrosion.getGroup(liq);
      switch(grp) {
        case "brine" :
          dens = 1.0;
          break;
        case "basicAq" :
          dens = 1.0;
          break;
        case "acidicAq" :
          dens = 1.0;
          break;
        case "basicOil" :
          dens = 0.7;
          break;
        case "acidicOil" :
          dens = 0.7;
          break;
        case "basicSub" :
          dens = 1.2;
          break;
        case "acidicSub" :
          dens = 1.2;
          break;
        case "basicGas" :
          dens = 0.00121;
          break;
        case "acidicGas" :
          dens = 0.00121;
          break;
        case "slurry" :
          dens = 1.5;
          break;
        case "melt" :
          dens = 4.0;
          break;
        case "stickyMelt" :
          dens = 4.0;
        default :
          dens = liq.gas ? 0.00121 : 1.0;
      };

      return dens;
    };
    exports.getDensity = getDensity;


    /* Note: Reads viscosity of the assigned liquid, which is based on real data. */
    const getViscosity = function(liq) {
      var visc = mdl_database.read_1n1v(db_fluid.viscosity, liq.name);
      var visc_fi;
      if(visc != null) {
        var visc_water = mdl_database.read_1n1v(db_fluid.viscosity, "reind-liq-ore-water");
        var visc_pitch = mdl_database.read_1n1v(db_fluid.viscosity, "reind-liq-was-pitch");
        visc_fi = 1.0 - 0.5 * (Math.log(visc_pitch + 1.0) - Math.log(visc + 1.0)) / (Math.log(visc_pitch + 1.0) - Math.log(visc_water + 1.0));
      } else if(liq.gas) {
        visc_fi = 0.15;
      } else {
        var grp = mdl_corrosion.getGroup(liq);
        switch(grp) {
          case "slurry" :
            visc_fi = 0.7710;
            break;
          case "melt" :
            visc_fi = 0.6421;
            break;
          case "stickyMelt" :
            visc_fi = 0.8814;
            break;
          default :
            visc_fi = 0.5;
        };
      };

      return visc_fi;
    };
    exports.getViscosity = getViscosity;


    /* NOTE: A better rate based on real flow rate formula. */
    const getFlowRate = function(amt_f, amt_t, pres, visc) {
      var rate = Time.delta * (1.0 - visc) * (amt_f - amt_t) * pres;
      if(rate < 0.0) rate = 0.0;
      return rate;
    };
    exports.getFlowRate = getFlowRate;


    /* NOTE: Calculates Reynold's number of the flow. I don't know what this can do. */
    const getReynoldsNumber = function(rate, dens, cap, visc) {
      var param = 85.5821;
      var renum = rate * dens * Math.pow(cap, 0.5) * param / visc;
      return renum;
    };
    exports.getReynoldsNumber = getReynoldsNumber;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_flow.js loaded.");
});
