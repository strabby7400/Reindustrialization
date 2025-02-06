/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_attack = require("reind/frag/frag_attack");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_flow = require("reind/mdl/mdl_flow");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
    const mdl_heat = require("reind/mdl/mdl_heat");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_fluid = require("reind/db/db_fluid");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Puddle
    /* NOTE: Fixes puddles with invalid amount value. */
    const update_fix = function(liq, puddle) {
      if(isNaN(puddle.amount)) puddle.remove();
    };
    exports.update_fix = update_fix;


    /* NOTE: Used by some liquids like fuming sulfuric acid. */
    const update_fuming = function(liq, puddle) {
      if(liq.gas) return;
      if(!Mathf.chance(mdl_effect.getP_frac(0.03, puddle.amount / 24.0))) return;

      mdl_effect.showAt(puddle, db_effect._heatSmog());
    };
    exports.update_fuming = update_fuming;


    /* NOTE: If the liquid is marked as conductive, damage some blocks in contact with the puddle. */
    const update_shortCircuit = function(liq, puddle) {
      if(liq.gas || !mdl_content.isConductive(liq)) return;

      var t = puddle.tile;
      var b = t.build;
      var li_ot = mdl_geometry.getTiles_rect(t, 1);
      li_ot.each(ot => {
        var ob = ot.build;

        // Spread
        if(ob != null && mdl_content.canShortCircuit(ob.block) && ob.power.status > 0.0) Puddles.deposit(ot, liq, Time.delta * 0.05);

        // Damage
        if(b != null && mdl_content.canShortCircuit(b.block) && b.power.status > 0.0) {
          var dmg = Time.delta * b.maxHealth * 0.01 / 60.0;
          b.damage(dmg);

          mdl_effect.showAtP(0.005, b, db_effect._heatSmog());
          if(Mathf.chanceDelta(0.001)) frag_attack.attack_lightning(mdl_geometry.poser_1b(b), Team.derelict, 1, 6, 4, glb_vars.shortCircuit_lightningDamage, Pal.accent);
        };
      });
    };
    exports.update_shortCircuit = update_shortCircuit;
  // End


  // Part: Transport
    /* NOTE: Changes the amount of assigned liquid in the building. */
    const addLiquid = function(b, liq, amt) {
      if(b == null) return;

      var amt_0 = b.liquids.get(liq);
      var cap = b.block.liquidCapacity;
      var amt_trans = 0.0;
      if(amt > 0.0) {
        amt_trans = Math.min(amt, cap - amt_0);
      } else {
        amt_trans = Math.min(amt * -1, amt_0) * -1;
      };

      b.liquids.add(liq, amt_trans);
      return amt_trans;
    };
    exports.addLiquid = addLiquid;


    /*
      NOTE:
      Called to balance the liquid amounts between b_f and b_t.
      Set {forced} to true to ignore the amount in b_t.
    */
    const transferLiquid = function(b_f, b_t, liq, forced) {
      if(forced == null) forced = false;
      if(b_f == null || b_t == null || b_f.liquids == null || b_t.liquids == null) return;

      var amt_f = b_f.liquids.get(liq);
      var amt_t = b_t.liquids.get(liq);
      var temp_amt_t = forced ? 0.0 : amt_t;
      var cap_t = b_t.block.liquidCapacity;
      var pres = (b_f.block.liquidPressure + b_t.block.liquidPressure) / 2.0;
      var visc = liq.viscosity;
      var rate = Time.delta * mdl_flow.getFlowRate(amt_f, temp_amt_t, pres, visc);
      var amt_trans = Math.min(rate, cap_t - amt_t);

      if(amt_f > 0.0001) {
        b_t.handleLiquid(b_f, liq, amt_trans);
        b_f.liquids.remove(liq, amt_trans);

        return amt_trans;
      };

      return 0.0;
    };
    exports.transferLiquid = transferLiquid;


    /* NOTE: For junctions. {b} should be the pipe, and {ob} is to be tested. */
    const getJunctionEnd = function(b, ob) {
      if(b == null || ob == null) return;
      if(!(ob.block instanceof LiquidJunction)) return ob;

      var ob_fi = "pending";
      var ot = ob.tile;
      while(ob_fi == "pending") {
        ob_fi = (ot == null) ? null : ot.build;
        if(ob_fi != null && ob_fi.block instanceof LiquidJunction) {
          ot = ob_fi.tile.nearby(b.rotation);
          ob_fi = "pending";
        };
      };

      return ob_fi;
    };
    exports.getJunctionEnd = getJunctionEnd;


    /* NOTE: An overhaul to vanilla moveLiquid method. Reaction is disabled. */
    const moveLiquid_pipe = function(b, ob, liq) {
      if(b == null || ob == null) return 0.0;

      var ob_fi = getJunctionEnd(b, ob);
      if(ob_fi == null) return 0.0;

      if(b.team == ob_fi.team && b.liquids != null && ob_fi.liquids != null && ob_fi.acceptLiquid(b, liq)) {
        return transferLiquid(b, ob_fi, liq, !mdl_content.isConduit(ob_fi.block));
      };

      return 0.0;
    };
    exports.moveLiquid_pipe = moveLiquid_pipe;
  // End


  // Start: Efficiency
    /* NOTE: Kills blocks with efficiency stored. Can be skipped if contained in {db_fluid.effcWhitelist}. */
    const updateTile_efficiency = function(b) {
      if(db_fluid.effcWhitelist.contains(b.block.name)) return;

      var invalid = false;
      var liq = b.liquids.current();
      if(mdl_content.isEffc(liq)) invalid = true;

      if(invalid) {
        b.kill();
        mdl_effect.showAt(b, db_effect._invalidPlacement(), 0.0);
        mdl_ui.showInfoFade("@info.reind-info-efficiency.name");
      };
    };
    exports.updateTile_efficiency = updateTile_efficiency;


    /* NOTE: Used by cores, simply outputs core effc. */
    const updateTile_coreEffc = function(b, rate) {
      var effc = Vars.content.liquid("reind-effc-effc-core");

      addLiquid(b, effc, rate);
      b.dumpLiquid(effc);
    };
    exports.updateTile_coreEffc = updateTile_coreEffc;
  // End


  // Part: Durability
    /* NOTE: Sticky fluids can damage some blocks that are vulnerable to clogging. */
    const updateTile_sticky = function(b) {
      if(!Mathf.chanceDelta(0.02)) return;
      if(b.liquids == null) return;
      if(!mdl_content.vulnerableToClogging(b.block)) return;

      var liq = b.liquids.current();
      if(!mdl_content.isReind(liq)) return;
      var visc = liq.viscosity;
      var visc_clog = glb_vars.clogging_viscosity;
      if(visc < visc_clog) return;
      var amt = b.liquids.get(liq);
      if(amt < 0.5) return;
      var cap = b.block.liquidCapacity;

      var dmg = Time.delta * (b.maxHealth * glb_vars.clogging_damageRatio + glb_vars.clogging_minDamage) * Mathf.lerp(0.5, 1.0, amt / cap) * Mathf.lerp(0.5, 1.0, (visc - visc_clog) / 0.25);
      b.damage(dmg);

      mdl_effect.showAtP(0.5, b, db_effect._cloggingParticles(b.block, liq));
    };
    exports.updateTile_sticky = updateTile_sticky;


    /* NOTE: Corrosive fluids can damage some blocks. */
    const updateTile_corrosion = function(b) {
      if(!Mathf.chanceDelta(0.02)) return;
      var liq = b.liquids.current();
      if(!mdl_content.isReind(liq)) return;
      var amt = b.liquids.get(liq);
      if(amt < 0.5) return;

      var cor = mdl_corrosion.getCorrosion(liq);
      var corScl = mdl_corrosion.getCorrosionScale(b.block, liq);
      if(cor < 0.01 && corScl > 1.0) cor = 1.0;        // No corrosion power but has effective fluid tags
      if(cor < 0.01) return;
      var corRes = mdl_corrosion.getCorrosionResistence(b.block);

      var dmg = Time.delta * b.maxHealth * glb_vars.corrosion_damageRatio * cor * corScl / corRes;
      b.damage(dmg);

      mdl_effect.showAtP(0.5, b, db_effect._corrosionParticles(b.block, liq));
    };
    exports.updateTile_corrosion = updateTile_corrosion;
  // End


  // Part: Misc
    /* NOTE: The assigned liquid can spill if the building is full of it. */
    const updateTile_overflow = function(b, liq) {
      if(!b.block.hasLiquids || b.efficiency < 0.0001) return;
      if(!Mathf.chanceDelta(0.04)) return;

      var amt = b.liquids.get(liq);
      var cap = b.block.liquidCapacity;
      if(amt / cap < 0.98) return;

      var li_ot = mdl_geometry.getTiles_edgeIns(b.tile, b.block.size);
      li_ot.each(ot => {
        if(Mathf.chance(0.5)) Puddles.deposit(ot, liq, 8.0);
      });
    };
    exports.updateTile_overflow = updateTile_overflow;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_fluid.js loaded.");
});
