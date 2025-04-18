/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const ct_rs_efficiency = require("reind/ct/ct_rs_efficiency");

    const cfg_update = require("reind/cfg/cfg_update");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_heat = require("reind/mdl/mdl_heat");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Block Heat
    const heatEffc = ct_rs_efficiency.effcCond_heat;


    const transferHeat = function(b_f, b_t, forced, noSide) {
      if(forced == null) forced = false;
      if(noSide == null) noSide = false;
      if(b_f == null || b_f.liquids == null || b_t == null || b_t.liquids == null) return;

      var isHcond = mdl_content.isHcond(b_t.block);
      var heat_f = mdl_heat._heat(b_f);
      var heat_t = mdl_heat._heat(b_t);
      var heat_trans = 0.0;

      if(heat_f > 0.0001) {
        if(isHcond) {
          var tmpHeat_t = forced ? 0.0 : heat_t;
          var coef = (mdl_heat._transferCoef(b_f.block) + mdl_heat._transferCoef(b_t.block)) / 2.0;
          var rate = b_f.edelta() * mdl_heat._transferRate(heat_f, tmpHeat_t, coef) * (noSide ? 1.0 : mdl_game._fracSide(b_f, b_t)) * VAR.heat_transferMultiplier;
          heat_trans = Math.max(Math.min(rate, heat_f, mdl_heat._sHeat(b_t) - mdl_heat._heat(b_t)), 0.0);

          b_t.handleLiquid(b_f, heatEffc, heat_trans);
          b_f.liquids.remove(heatEffc, heat_trans);
        } else {
          heat_trans = Math.min(heat_f / 60.0, b_t.block.liquidCapacity - heat_t);
          b_t.handleLiquid(b_f, heatEffc, heat_trans);
        };

        return heat_trans;
      };

      return 0.0;
    };
    exports.transferHeat = transferHeat;


    const dissipateHeat = function(b, loss) {
      if(b == null || b.liquids == null) return;
      if(loss == null) loss = mdl_heat._heatLoss(b.block);

      var heat = mdl_heat._heat(b);
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
      var paramScl = VAR.heat_lossMultiplier;

      var heat_l = b.edelta() * heat * loss * param * paramScl;
      b.liquids.remove(heatEffc, heat_l);

      return heat_l;
    };
    exports.dissipateHeat = dissipateHeat;


    const updateTile_heat = function(b) {
      if(Mathf.chance(0.02)) {
        var tHeat = mdl_heat._tHeat(b);
        var limit = mdl_heat._heatLimit(b.block);

        if(tHeat > limit && mdl_content.isHcond(b.block)) {
          var dmg = b.edelta() * b.maxHealth * VAR.overheat_damageRatio * (tHeat - limit) * VAR.overheat_damageScale;
          var dmg_fi = Math.min(dmg, 6.0);
          b.damage(dmg_fi);

          mdl_effect.showAtP(0.5, b, VAR.eff_heatSmog);
        };
      };

      dissipateHeat(b);
    };
    exports.updateTile_heat = updateTile_heat;


    const updateTile_heatInput = function(b, ob) {
      if(ob == null || b.liquids == null || ob.liquids == null) return;
      if(mdl_content.isHcond(ob.block)) return;

      transferHeat(ob, b, true);
    };
    exports.updateTile_heatInput = updateTile_heatInput;


    const draw_heat = function(b, reg) {
      var frac = mdl_heat._heatFrac(b, true);
      mdl_draw.drawHeatRegion(b, frac, reg, b.block.size);
    };
    exports.draw_heat = draw_heat;


    const drawSelect_heat = function(b) {
      var heat = mdl_heat._heat(b);
      var tHeat = mdl_heat._tHeat(b);
      if(tHeat < 0.01) return;

      mdl_draw.drawSelectText(b, true, Core.bundle.get("bar.heat") + ": " + Strings.autoFixed(heat, 2), 1);
      mdl_draw.drawSelectText(b, true, mdl_text._term("total-heat") + ": " + Strings.autoFixed(tHeat, 2), 0);
    };
    exports.drawSelect_heat = drawSelect_heat;


    const updateTile_hcond = function(b) {
      if(cfg_update.isSuppressed()) return;

      b.proximity.each(ob => {if(!ob.acceptLiquid(b, heatEffc)) updateTile_heatInput(b, ob)});
      if(mdl_heat._heat(b) > 0.01) b.moveLiquidForward(false, heatEffc);
    };
    exports.updateTile_hcond = updateTile_hcond;


    const acceptLiquid_hcond = function(b, ob, liq) {
      if(cfg_update.isSuppressed()) return false;
      if(liq != heatEffc) return false;

      return true;
    };
    exports.acceptLiquid_hcond = acceptLiquid_hcond;


    const moveLiquid_hcond = function(b, ob) {
      if(b == null || ob == null) return 0.0;
      if(b.team != ob.team || b.liquids == null || ob.liquids == null) return 0.0;
      if(!ob.acceptLiquid(b, heatEffc) || mdl_content.isCond(ob.block) || mdl_content.isTank(ob.block)) return 0.0;

      return transferHeat(b, ob, !mdl_content.isHcond(ob.block));
    };
    exports.moveLiquid_hcond = moveLiquid_hcond;
  // End


  // Start: Fluid Heat
    const updateTile_fluidHeat = function(b) {
      if(Mathf.chance(0.98)) return;

      var fheatCap = mdl_data.read_1n1v(db_block.db["heat"]["fHeatCapacity"], b.block.name);
      if(fheatCap == null) return;
      var heat = mdl_heat._fHeat(b);
      if(heat <= fheatCap) return;

      var dmg = b.edelta() * 2.0 * heat / fheatCap;
      b.damage(dmg);

      mdl_effect.showAt(b, VAR.eff_heatSmog);
    };
    exports.updateTile_fluidHeat = updateTile_fluidHeat;


    const draw_fluidHeat = function(b, reg) {
      var heat = mdl_heat._fHeat(b);
      if(heat < 0.01) return;
      var fheatCap = mdl_data.read_1n1v(db_block.db["heat"]["fHeatCapacity"], b.block.name, 120.0);

      mdl_draw.drawHeatRegion(b, Math.min(heat * 1.2 / fheatCap, 1.0), reg, b.block.size);
    };
    exports.draw_fluidHeat = draw_fluidHeat;


    const drawSelect_fluidHeat = function(b) {
      var heat = mdl_heat._fHeat(b);
      if(heat < 0.01) return;

      mdl_draw.drawSelectText(b, true, mdl_text._term("fluid-heat") + ": " + Strings.autoFixed(heat, 2), 0);
    };
    exports.drawSelect_fluidHeat = drawSelect_fluidHeat;
  // End


  // Part: Unit Heat
    const _meltTime = function(unit, rHeat) {
      var rHeat_fi = (rHeat != null) ? rHeat : mdl_heat._rHeat(unit.tileOn());
      var thr = unit.maxHealth / 350.0 + 10.0;
      return (rHeat_fi < thr) ? 0.0 : Math.min(((rHeat - thr) / thr * 8.0 + 2.5) * 60.0, 600.0);
    };
    exports._meltTime = _meltTime;


    const update_unitHeat = function(utp, unit) {
      if(Mathf.chance(0.9)) return;
      if(!mdl_content.isHeatDamageable(unit)) return;

      var t = unit.tileOn();
      if(t == null) return;
      var rHeat = mdl_heat._rHeat(t);
      if(rHeat < 10.0) return;

      var meltTime = _meltTime(unit, rHeat);
      if(meltTime > 0.0) {
        unit.apply(StatusEffects.melting, meltTime);
        mdl_effect.showAt(unit, VAR.eff_heatSmog);
      };

      var dmg = Time.delta * (75.0 + unit.maxHealth * 0.03 / 60.0) * rHeat * 0.15;
      var dmgScl = 1.0;
      if(unit instanceof Legsc || utp.hovering) dmgScl *= VAR.unitHeat_hoveringMultiplier;
      var dmg_fi = dmg * dmgScl;
      unit.damagePierce(dmg_fi, false);
      mdl_effect.damageAt(unit, dmg_fi);
    };
    exports.update_unitHeat = update_unitHeat;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_heat.js loaded.");
});
