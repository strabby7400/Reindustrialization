/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_math = require("reind/mdl/mdl_math");

    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Methods
    const _dens = function(liq) {
      var dens = mdl_data.read_1n1v(db_fluid.db["param"]["density"], liq.name);
      if(dens != null) return dens;

      var grp = mdl_corrosion._fGrp(liq);
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
        case "oil" :
          dens = 0.7;
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
    exports._dens = _dens;


    const _temp = function(liq) {
      var fHeat = mdl_data.read_1n1v(db_fluid.db["param"]["fHeat"], liq.name);
      var temp;

      if(fHeat != null) {
        temp = mdl_math._interpHalf_log(fHeat, 26.0, 1500.0);
      } else {
        temp = 0.5;
      };

      return temp;
    };
    exports._temp = _temp;


    const _visc = function(liq) {
      var visc = mdl_data.read_1n1v(db_fluid.db["param"]["viscosity"], liq.name);
      var visc_fi;

      if(visc != null) {
        var visc_water = mdl_data.read_1n1v(db_fluid.db["param"]["viscosity"], "reind-liq-ore-water");
        var visc_pitch = mdl_data.read_1n1v(db_fluid.db["param"]["viscosity"], "reind-liq-was-pitch");

        visc_fi = mdl_math._interpHalf_log(visc, visc_water, visc_pitch);
      } else if(liq.gas) {
        visc_fi = 0.15;
      } else {
        var grp = mdl_corrosion._fGrp(liq);
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
    exports._visc = _visc;


    const _flowRate = function(amt_f, amt_t, pres, visc) {
      var rate = Time.delta * (1.0 - visc) * (amt_f - amt_t) * pres;
      if(rate < 0.0) rate = 0.0;
      return rate;
    };
    exports._flowRate = _flowRate;


    /*
     * NOTE:
     *
     * See Reynold's Number for more info.
     * I don't know what this can do.
     */
    const _reynoldsNum = function(rate, dens, cap, visc) {
      var param = 85.5821;
      var renum = rate * dens * Math.pow(cap, 0.5) * param / visc;
      return renum;
    };
    exports._reynoldsNum = _reynoldsNum;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_flow.js loaded.");
});
