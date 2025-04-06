/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_math = require("reind/mdl/mdl_math");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Property (Block)
    /*
     * NOTE:
     *
     * Roughness of the pipe.
     * Increases when the pipe gets more severely damaged.
     */
    const _rough = function(blk_gn) {
      if(blk_gn instanceof Building) {
        var matGrp = mdl_corrosion._matGrp(blk_gn.block);
        var rough = mdl_data.read_1n1v(db_block.db["durability"]["roughness"], matGrp, 0.5);
        return Mathf.lerp(rough, rough + 1.5, Mathf.clamp(1.0 - blk_gn.health / blk_gn.maxHealth));
      } else {
        var matGrp = mdl_corrosion._matGrp(blk_gn);
        return mdl_data.read_1n1v(db_block.db["durability"]["roughness"], matGrp, 0.5);
      };
    };
    exports._rough = _rough;


    /*
     * NOTE:
     *
     * Diameter param of the pipe.
     * Not related to block size. It's just set manually.
     */
    const _pipeDm = function(blk) {
      return mdl_data.read_1n1v(db_block.db["map"]["diameter"], blk.name, 1.0) * VAR.flow_pipeDiameter;
    };
    exports._pipeDm = _pipeDm;
  // End


  // Part: Property (Fluid)
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
  // End


  // Part: Calculation
    const condFricCoef = 0.12;
    const _condFric = function(b_f, b_t) {
      return ((_pipeDm(b_f.block) != _pipeDm(b_t.block)) ? condFricCoef : 0.0) / 60.0;
    };
    exports._condFric = _condFric;


    const cornerFricCoef = 0.07;
    const _cornerFric = function(b_f, b_t) {
      return ((b_f.rotation != b_t.rotation) ? cornerFricCoef : 0.0) / 60.0;
    };
    exports._condFric = _condFric;


    const _lineFricCoef = function(rough, pipeDm) {
      return 0.125 * 0.5 / Math.sqrt(pipeDm * (1.74 - 2.0 * Mathf.log(10, 2.0 * rough / pipeDm)));
    };
    exports._lineFricCoef = _lineFricCoef;


    const _lineFric = function(rate, rough, pipeDm) {
      var speed = rate * 60.0;
      var lineFricCoef = _lineFricCoef(rough, pipeDm);
      var param1 = (1.0 - condFricCoef - cornerFricCoef) / 2.0 / lineFricCoef;
      var param2 = Math.pow(1.0 - condFricCoef - cornerFricCoef, 2) / 4.0 / lineFricCoef;

      if(speed > param1) {
        return (speed - param1 + param2) / 60.0;
      } else {
        return Math.pow(speed, 2) * lineFricCoef / 60.0;
      }
    };
    exports._lineFric = _lineFric;


    const _totalFric = function(b_f, b_t, rate) {
      if(!mdl_content.isCond(b_f.block) || !mdl_content.isCond(b_t.block)) return 0.0;

      return _condFric(b_f, b_t) + _cornerFric(b_f, b_t) + _lineFric(rate, _rough(b_t), _pipeDm(b_t.block));
    };
    exports._totalFric = _totalFric;


    const _flowRate = function(b_f, b_t, amt_f, amt_t, pres, visc) {
      var rate = Math.max((1.0 - visc) * (amt_f - amt_t) * pres, 0.0);
      var rate_fi = Math.max(rate - _totalFric(b_f, b_t, rate), 0.0);
      return rate_fi;
    };
    exports._flowRate = _flowRate;


    /*
     * NOTE:
     *
     * See Reynold's Number for more info.
     * I don't know what this can do.
     */
    const _reynoldsNum = function(rate, dens, visc) {
      return VAR.flow_pipeDiameter * 980.0 * rate * dens / visc;
    };
    exports._reynoldsNum = _reynoldsNum;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_flow.js loaded.");
});
