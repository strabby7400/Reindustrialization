/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
    const mdl_heat = require("reind/mdl/mdl_heat");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Block Heat
    const heatEffc = Vars.content.liquid("reind-effc-cond-heat");


    /*
      NOTE:
      Called to balance the heat from b_f to b_t.
      Set {forced} to true to ignore the heat in b_t.
      Set {noSide} to true to ignore actually number of sides that are in contact, in case of remote heat transfer.
    */
    const transferHeat = function(b_f, b_t, forced, noSide) {
      if(forced == null) forced = false;
      if(noSide == null) noSide = false;
      if(b_f == null || b_t == null) return;

      var heat_f = mdl_heat.getHeat(b_f);
      var heat_t = mdl_heat.getHeat(b_t);
      var temp_heat_t = forced ? 0.0 : heat_t;
      var coef = (mdl_heat.getHeatTransferCoefficient(b_f.block) + mdl_heat.getHeatTransferCoefficient(b_t.block)) / 2.0;
      var rate = Time.delta * mdl_heat.getHeatTransferRate(heat_f, temp_heat_t, coef) * (noSide ? 1.0 : mdl_geometry.getFrac_side(b_f, b_t)) * glb_vars.heat_transferMultiplier;
      var heat_trans = Math.min(rate, heat_f, 3.0);

      if(heat_f > 0.0001) {
        b_t.handleLiquid(b_f, heatEffc, heat_trans);
        b_f.liquids.remove(heatEffc, heat_trans);

        return heat_trans;
      };

      return 0.0;
    };
    exports.transferHeat = transferHeat;


    /* NOTE: Called for spontaneous heat decay, automatically reads loss if not assigned. */
    const dissipateHeat = function(b, loss) {
      if(b == null) return;
      if(loss == null) loss = mdl_heat.getHeatLoss(b.block);

      var heat = mdl_heat.getHeat(b);
      var param = 0.06;
      if(heat < 1000.0) {param = 0.06}
      else if(heat < 2000.0) {param = 0.12}
      else if(heat < 3000.0) {param = 0.18}
      else if(heat < 4000.0) {param = 0.24}
      else if(heat < 5000.0) {param = 0.3}
      else if(heat < 6000.0) {param = 0.36}
      else if(heat < 7000.0) {param = 0.42}
      else if(heat < 8000.0) {param = 0.48}
      else if(heat < 9000.0) {param = 0.54}
      else {param = 0.6};

      var heat_l = Time.delta * heat * loss * param;
      b.liquids.remove(heatEffc, heat_l);

      return heat_l;
    };
    exports.dissipateHeat = dissipateHeat;


    /* NOTE: Damages the block if too much heat is stored. The cap is stored in {db_block.heatLimit}. */
    const updateTile_heat = function(b) {
      if(Mathf.chance(0.02)) {
        var theat = mdl_heat.getTotalHeat(b);
        var limit = mdl_heat.getHeatLimit(b.block);

        if(theat > limit && mdl_content.isHcond(b.block)) {
          var dmg = Time.delta * b.maxHealth * glb_vars.overheat_damageRatio * (theat - limit) * glb_vars.overheat_damageScale;
          var dmg_fi = Math.min(dmg, 4.0);
          b.damage(dmg_fi);

          mdl_effect.atP_1pos(0.5, b, db_effect._heatSmog());
        };
      };

      dissipateHeat(b);
    };
    exports.updateTile_heat = updateTile_heat;


    /* NOTE: Actively fetch heat from a building that is not a heat conductor. */
    const updateTile_heatInput = function(b, ob) {
      if(b == null || ob == null || b.liquids == null || ob.liquids == null) return;
      if(mdl_content.isHcond(ob.block)) return;

      transferHeat(ob, b, true);
    };
    exports.updateTile_heatInput = updateTile_heatInput;


    /* NOTE: Yet another customized DrawHeatRegion. {reg} is optional. */
    const draw_heat = function(b, reg) {
      var a = mdl_heat.getHeatFrac(b);

      mdl_draw.drawGenericHeatRegion(b, a);
    };
    exports.draw_heat = draw_heat;


    /* NOTE: Displays the efficiency heat amount in a building. */
    const drawSelect_heat = function(b) {
      var heat = mdl_heat.getHeat(b);
      var theat = mdl_heat.getTotalHeat(b);
      if(theat < 0.01) return;

      mdl_draw.drawSelectText(b, Core.bundle.get("bar.heat") + ": " + Strings.autoFixed(heat, 2), 1);
      mdl_draw.drawSelectText(b, Core.bundle.get("term.reind-term-total-heat.name") + ": " + Strings.autoFixed(theat, 2), 0);
    };
    exports.drawSelect_heat = drawSelect_heat;


    /* NOTE: The building will gather heat from proximity and move it forward. */
    const updateTile_hcond = function(b) {
      b.proximity.each(ob => {if(!ob.acceptLiquid(b, heatEffc)) updateTile_heatInput(b, ob)});
      if(mdl_heat.getHeat(b) > 0.01) b.moveLiquidForward(false, heatEffc);
    };
    exports.updateTile_hcond = updateTile_hcond;


    /* NOTE: Only accepts heat. */
    const acceptLiquid_hcond = function(b, ob, liq) {
      if(liq != heatEffc) return false;

      return true;
    };
    exports.acceptLiquid_hcond = acceptLiquid_hcond;


    /* NOTE: Something like regular fluid, but not a fluid. */
    const moveLiquid_hcond = function(b, ob) {
      if(b == null || ob == null) return 0.0;
      if(b.team != ob.team || b.liquids == null || ob.liquids == null) return 0.0;
      if(!ob.acceptLiquid(b, heatEffc) || mdl_content.isConduit(ob.block) || mdl_content.isTank(ob.block)) return 0.0;

      return transferHeat(b, ob, !mdl_content.isHcond(ob.block));
    };
    exports.moveLiquid_hcond = moveLiquid_hcond;
  // End


  // Start: Fluid Heat
    /* NOTE: Damages the block if total fluid heat surpasses the capacity. The cap is stored in {db_block.fluidHeatCapacity}. */
    const updateTile_fluidHeat = function(b) {
      var fheatCap = mdl_database.read_1n1v(db_block.fluidHeatCapacity, b.block.name);
      if(fheatCap == null) return;
      var heat = mdl_heat.getFluidHeat(b);
      if(heat <= fheatCap) return;

      var dmg = Time.delta * 0.04 * heat / fheatCap;
      b.damage(dmg);

      mdl_effect.atP_1pos(0.06, b, db_effect._heatSmog());
    };
    exports.updateTile_fluidHeat = updateTile_fluidHeat;


    /* NOTE: Draw glow region if fluid heat exists. {reg} is optional. */
    const draw_fluidHeat = function(b, reg) {
      var fheatCap = mdl_database.read_1n1v(db_block.fluidHeatCapacity, b.block.name);
      if(fheatCap == null) fheatCap = 120.0;
      var heat = mdl_heat.getFluidHeat(b);
      if(heat < 0.01) return;

      mdl_draw.drawGenericHeatRegion(b, Math.min(heat * 1.2 / fheatCap, 1.0), reg);
    };
    exports.draw_fluidHeat = draw_fluidHeat;


    /* NOTE: Displays the fluid heat in a block. */
    const drawSelect_fluidHeat = function(b) {
      var heat = mdl_heat.getFluidHeat(b);
      if(heat < 0.01) return;

      mdl_draw.drawSelectText(b, Core.bundle.get("term.reind-term-fluid-heat.name") + ": " + Strings.autoFixed(heat, 2), 0);
    };
    exports.drawSelect_fluidHeat = drawSelect_fluidHeat;
  // End


  // Part: Unit Heat
    /* NOTE: Damages the unit based on range heat calculation. */
    const update_unitHeat = function(utp, unit) {
      if(unit.flying || unit.type.naval) return;

      var t = unit.tileOn();
      if(t == null) return;
      var heat = mdl_heat.getRangeHeat(t);
      if(heat < 10.0) return;

      var dmg = Time.delta * (75.0 + unit.maxHealth * 0.03 / 60.0) * heat / 60.0;
      var dmgScl = 1.0;
      if(unit instanceof Legsc || utp.hovering) dmgScl *= glb_vars.unitHeat_hoveringMultiplier;
      unit.damage(dmg * dmgScl, false);

      var meltThr = unit.maxHealth / 200.0 + 10.0;
      if(heat > meltThr) {
        var sta = StatusEffects.melting;
        var staTime = Math.min(((heat - meltThr) / meltThr * 8.0 + 2.5) * 60.0, 600.0);
        unit.apply(sta, staTime);

        mdl_effect.atP_1pos(0.08, unit, db_effect._heatSmog());
      };
    };
    exports.update_unitHeat = update_unitHeat;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_heat.js loaded.");
});
