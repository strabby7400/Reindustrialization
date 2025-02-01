/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Block Heat
    /* NOTE: If no specific regions provided, use these. */
    const getHeatRegion = function(size) {
      var reg;

      switch(size) {
        case 1 :
          reg = Core.atlas.find("reind-ast-generic-block-heat-1x");
          break;
        case 2 :
          reg = Core.atlas.find("reind-ast-generic-block-heat-2x");
          break;
        case 3 :
          reg = Core.atlas.find("reind-ast-generic-block-heat-3x");
          break;
        case 4 :
          reg = Core.atlas.find("reind-ast-generic-block-heat-4x");
          break;
        default :
          reg = Core.atlas.find("reind-ast-generic-block-heat-1x");
      };

      return reg;
    };
    exports.getHeatRegion = getHeatRegion;


    /* NOTE: If I continue using vanilla heat mechanics, multi-crafters will break the game. */
    const getHeat = function(b) {
      if(b.liquids == null) return 0.0;

      var heat = b.liquids.get(Vars.content.liquid("reind-effc-cond-heat"));

      return heat;
    };
    exports.getHeat = getHeat;


    /* NOTE: Heat from nearby buildings, not accepted yet. */
    const getSparedHeat = function(b) {
      var sheat = 0.0;

      b.proximity.each(ob => sheat += getHeat(ob) * mdl_geometry.getFrac_side(ob, b));

      return sheat;
    };
    exports.getSparedHeat = getSparedHeat;


    /* NOTE: No need to note. */
    const getTotalHeat = function(b) {
      return getHeat(b) + getSparedHeat(b);
    };
    exports.getTotalHeat = getTotalHeat;


    /* NOTE: A limit over which the block melts. */
    const getHeatLimit = function(blk) {
      var limit = mdl_database.read_1n1v(db_block.heatLimit, blk.name);
      if(limit == null) limit = 30.0;

      return limit;
    };
    exports.getHeatLimit = getHeatLimit;


    /* NOTE: The rate at which heat dissipates. */
    const getHeatLoss = function(blk) {
      var loss = mdl_database.read_1n1v(db_block.heatLoss, blk.name);
      if(loss == null) loss = 0.01;

      return loss;
    };
    exports.getHeatLoss = getHeatLoss;


    /* NOTE: Fraction of the heat to limit. Mostly used for visual effects. */
    const getHeatFrac = function(b) {
      return Math.min(getTotalHeat(b) / getHeatLimit(b.block), 1.0);
    };
    exports.getHeatFrac = getHeatFrac;


    /* NOTE: The param k in heat transfer formula. */
    const getHeatTransferCoefficient = function(blk) {
      var coef = mdl_database.read_1n1v(db_block.heatTransferCoefficient, blk.name);
      if(coef == null) coef = 1.0;

      return coef;
    };
    exports.getHeatTransferCoefficient = getHeatTransferCoefficient;


    /* NOTE: Actually another flow rate. */
    const getHeatTransferRate = function(heat_f, heat_t, coef) {
      var rate = Time.delta * (heat_f - heat_t) * coef / 60.0;

      return rate;
    };
    exports.getHeatTransferRate = getHeatTransferRate;
  // End


  // Part: Fluid Heat
    /* NOTE: The total heat carried by the stored fluid. */
    const getFluidHeat = function(b) {
      if(b.liquids == null) return 0.0;

      var liq = b.liquids.current();
      if(liq == null) return 0.0;
      var amt = b.liquids.get(liq);
      if(amt < 0.01) return 0.0;
      var cap = b.block.liquidCapacity;
      var fheat = mdl_database.read_1n1v(db_fluid.fluidHeat, liq.name);

      var heat = fheat * (amt / cap * 0.75 + 0.75) * (cap / 300.0 * 0.15 + 0.75);
      return heat;
    };
    exports.getFluidHeat = getFluidHeat;
  // End


  // Part: Range Heat
    /* NOTE: Average heat in the 3*3 range. */
    const getRangeHeat = function(t) {
      var heat = 0.0;
      var list_ot = mdl_geometry.getTiles_rect(t, 1);
      list_ot.each(ot => {
        // Get floor heat
        heat += ot.floor().attributes.get(Attribute.get("reind-attr-env-heat")) * 16.0;

        // Get fluid heat
        if(ot.build != null) heat += getFluidHeat(ot.build) * 0.05;

        // Get block heat
        if(ot.build != null) heat += getHeat(ot.build);
      });
      heat /= 6.0;
      return heat;
    };
    exports.getRangeHeat = getRangeHeat;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_heat.js loaded.");
});
