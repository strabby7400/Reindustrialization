/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Block Heat
    const _heatReg = function(size) {
      if(Vars.headless) return;

      return Core.atlas.find("reind-ast-generic-block-heat-" + size + "x", Core.atlas.find("reind-ast-generic-block-heat-1x"));
    };
    exports._heatReg = _heatReg;


    const _heat = function(b) {
      if(b.liquids == null) return 0.0;

      var heat = b.liquids.get(Vars.content.liquid("reind-effc-cond-heat"));

      return heat;
    };
    exports._heat = _heat;


    const _sHeat = function(b) {
      var sHeat = 0.0;

      b.proximity.each(ob => {
        var cond = true;
        mdl_game._tsRot(b.tile, b.rotation, b.block.size).forEach(ot => {
          if(ot.build == ob) cond = false;
        });
        if(cond) sHeat += _heat(ob) * mdl_game._fracSide(ob, b);
      });

      return sHeat;
    };
    exports._sHeat = _sHeat;


    const _tHeat = function(b) {
      return _heat(b) + _sHeat(b);
    };
    exports._tHeat = _tHeat;


    const _heatLimit = function(blk) {
      return mdl_data.read_1n1v(db_block.db["heat"]["limit"], blk.name, 30.0);
    };
    exports._heatLimit = _heatLimit;


    const _heatLoss = function(blk) {
      return mdl_data.read_1n1v(db_block.db["heat"]["loss"], blk.name, 0.01);
    };
    exports._heatLoss = _heatLoss;


    const _heatFrac = function(b) {
      return Mathf.clamp(_tHeat(b) / _heatLimit(b.block));
    };
    exports._heatFrac = _heatFrac;


    const _transferCoef = function(blk) {
      return mdl_data.read_1n1v(db_block.db["heat"]["transCoef"], blk.name, 1.0);
    };
    exports._transferCoef = _transferCoef;


    const _transferRate = function(heat_f, heat_t, coef) {
      return (heat_f - heat_t) * coef / 60.0;
    };
    exports._transferRate = _transferRate;
  // End


  // Part: Fluid Heat
    const _fHeat = function(b) {
      if(b.liquids == null) return 0.0;

      var liq = b.liquids.current();
      if(liq == null) return 0.0;
      var amt = b.liquids.get(liq);
      if(amt < 0.01) return 0.0;
      var cap = b.block.liquidCapacity;
      var fHeat = mdl_data.read_1n1v(db_fluid.db["param"]["fHeat"], liq.name);
      var heat = fHeat * (amt / cap * 0.75 + 0.75) * (cap / 300.0 * 0.15 + 0.75);

      return heat;
    };
    exports._fHeat = _fHeat;
  // End


  // Part: Range Heat
    const _rangeHeat = function(t) {
      var heat = 0.0;
      mdl_game._tsRect(t, 1).forEach(ot => {
        // Get floor heat
        heat += ot.floor().attributes.get(Attribute.get("reind-attr-env-heat")) * 16.0;

        // Get fluid heat
        if(ot.build != null) heat += _fHeat(ot.build) * 0.05;

        // Get block heat
        if(ot.build != null) heat += _heat(ot.build) * 1.5;
      });
      heat /= 6.0;

      return heat;
    };
    exports._rangeHeat = _rangeHeat;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_heat.js loaded.");
});
