/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const lib_base = require("reind/lib/lib_base");
    const lib_tmi = lib_base.hasTmi ? require("reind/lib/lib_tmi") : null;

    const PARENT = require("reind/blk/blk_genericFactory");

    const cfg_update = require("reind/cfg/cfg_update");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_faci = require("reind/frag/frag_faci");
    const frag_recipe = require("reind/frag/frag_recipe");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_recipe = require("reind/mdl/mdl_recipe");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Setting
    var efficiencyUpdateInterval = 90.0;
    const set_efficiencyUpdateInterval = function(val) {
      efficiencyUpdateInterval = val;
    };
    exports.set_efficiencyUpdateInterval = set_efficiencyUpdateInterval;
  // End


  // Part: Auxiliary
    function ax_buildStats(rcFi) {
      return function(tb) {mdl_table.setRecipeDisplay(tb, rcFi)};
    };


    function ax_getProgressIncrease(b, time) {
      var val_fi = 1.0;

      if(b.block.ignoreLiquidFullness) {
        val_fi = b.edelta() / time / b.rcTimeScale;
      } else {
        var val = 1.0;
        var scl = 1.0;
        var hasLiquidOutput = false;
        var arr = b.co;
        var cap = arr.length;
        if(b.liquids != null && cap > 0) {
          val = 0.0;
          for(let i = 0; i < cap; i += 2) {
            var liq = Vars.content.liquid(arr[i]);
            if(liq == null) continue;
            var amt = arr[i + 1];
            var tmpVal = (b.block.liquidCapacity - b.liquids.get(liq)) / (amt * b.edelta());
            val = Math.max(val, tmpVal);
            scl = Math.min(scl, tmpVal);
            hasLiquidOutput = true;
          };
        };

        if(!hasLiquidOutput) val = 1.0;
        val_fi = b.edelta() / time * (b.block.dumpExtraLiquid ? Math.min(val, 1.0) : scl) / b.rcTimeScale;
      };

      return val_fi;
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.productionTime);
      blk.stats.add(Stat.productionTime, blk.craftTime / 60.0, StatUnit.seconds);

      blk.stats.add(db_stat.recipes, ax_buildStats(blk.rcFi));
    };


    function updateTileComp(b) {
      var isManual = b.tag.includes("<manual>");
      var isImpact = b.tag.includes("<impact>");

      // Prevents invalid recipe
      if(mdl_recipe._rcSize(b.rcFi) < b.id_rc + 0.9999) {
        b.id_rc = 0;
        return;
      };

      // Initialize
      if(b.needCheck) {
        b.param = 0.0;
        b.param1 = 0.0;
        b.param2 = 0.0;

        b.id_rc = mdl_data._config(b, 0);

        b.craftSound = mdl_data.read_1n1v(db_block.db["param"]["sound"]["craft"], b.block.name, null);

        b.rcTimeScale = mdl_recipe._timeScale(b.rcFi, b.id_rc);
        b.ci = frag_recipe._ci(b.rcFi, b.id_rc);
        b.bi = frag_recipe._bi(b.rcFi, b.id_rc);
        b.opt = frag_recipe._opt(b.rcFi, b.id_rc);
        b.co = frag_recipe._co(b.rcFi, b.id_rc);
        b.bo = frag_recipe._bo(b.rcFi, b.id_rc);
        b.fo = frag_recipe._fo(b.rcFi, b.id_rc);

        if(isImpact) {
          b.param1 = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], b.block.name, 40.0)
        };

        b.needCheck = false;
      };

      // Update some params occasionally
      if(b.timerEffc.get(isManual ? 3.0 : efficiencyUpdateInterval)) {
        b.efficiency = frag_recipe.sumEfficiency(b, b.ci, b.bi, b.opt, mdl_recipe._reqOpt(b.rcFi, b.id_rc));
        b.tmpEffc = b.efficiency;
        b.progInc = ax_getProgressIncrease(b, b.block.craftTime);
        b.progInc1 = ax_getProgressIncrease(b, 1.0);
        b.canAdd = frag_recipe.canAddResource(b, b.co, b.bo, b.fo);
        b.dTup = frag_recipe._dTup(b, b.bo, b.fo);
      } else {
        b.efficiency = b.tmpEffc;
      };

      // Extra: manual
      if(isManual) {
        b.efficiency *= Mathf.clamp(b.param * 1.25);
        b.param -= Math.min(0.002, b.param);
      };

      mdl_recipe._script(b.rcFi, b.id_rc).call(b);

      if(b.efficiency < 0.0001 || !b.shouldConsume()) {
        // Cools down
        b.warmup = Mathf.approachDelta(b.warmup, 0.0, b.block.warmupSpeed);
      } else {
        // Warms up
        b.warmup = Mathf.approachDelta(b.warmup, b.warmupTarget(), b.block.warmupSpeed);

        b.progress += b.progInc;
        if(b.progress > 1.0) {
          // Finish crafting
          b.progress %= 1.0;

          frag_recipe.addItems(b, b.bo, b.fo, mdl_recipe._failP(b.rcFi, b.id_rc));
          frag_recipe.consumeItems(b, b.bi, b.opt);

          mdl_effect.showAt(b, b.block.craftEffect, 0.0);
          mdl_effect.playAt(b, b.craftSound, Math.min(b.block.ambientSoundVolume * 2.0, 1.0), 1.0, 0.1);

          mdl_recipe._craftScript(b.rcFi, b.id_rc).call(b);

          // Extra: Impact
          if(isImpact) {
            var size = b.block.size;
            var time = b.block.craftTime;

            frag_attack.atk_impact(b, b.param1, frag_attack._impactDmg(size, time), frag_attack._impactDur(time), mdl_data.read_1n1v(db_block.db["param"]["shake"], b.block.name, 0.0));

            var cap = Math.pow(size, 2);
            for(let i = 0; i < cap; i++) {mdl_effect.dustAt_ldm(b, frag_attack._impactDustRad(size))};
          };
        };

        if(b.timerLiq.get(6.0)) {
          frag_recipe.addLiquids(b, b.co, b.progInc1, b.rcTimeScale, 6.0);
          frag_recipe.consumeLiquids(b, b.ci, b.progInc1, b.rcTimeScale, 6.0);
        };

        mdl_effect.showAroundP(b.block.updateEffectChance, b, b.block.updateEffect, b.block.size * Vars.tilesize * 0.5, 0.0);

        mdl_recipe._updateScript(b.rcFi, b.id_rc).call(b);
      };

      b.totalProgress += b.warmup * b.edelta();

      frag_recipe.dumpResource(b, b.co, b.dTup);
    };


    function initComp(blk) {
      var cap = mdl_recipe._rcSize(blk.rcFi);
      var cond_liq = false;
      for(let i = 0; i < cap; i++) {
        var co = frag_recipe._co(blk.rcFi, i);
        if(frag_recipe.outputsLiquid(co)) cond_liq = true;
      };
      if(cond_liq) blk.outputsLiquid = true;

      blk.hasConsumers = true;

      if(lib_base.hasTmi) {
        Events.run(MusicRegisterEvent, () => lib_tmi.register_recipeFactory(blk, blk.rcFi));
      };
    };


    function setBarsComp(blk) {
      blk.removeBar("liquid");

      frag_faci.setBars_was(blk, blk.rcFi);

      blk.addBar("reind-prog", b => new Bar(
        mdl_text._term("recipe-progress"),
        Pal.ammo,
        () => Math.min(b.progress, 1.0),
      ));
    };


    function buildConfigurationComp(b, tb) {
      var vec2 = new Vec2();

      var isManual = b.tag.includes("<manual>");

      if(isManual) {
        mdl_table.setTrigger(tb, function() {
          if(Vars.state.paused) {
            mdl_ui.showInfoFade("manual-generator-paused");
          } else {
            var param = Mathf.lerpDelta(b.param, 1.0, 0.135);
            Call.tileConfig(Vars.player, b, vec2.set(-2, param));
          };
        }, Icon.crafting, mdl_text._info("manual-crafter"), 72.0);
        mdl_table.__breakHalf(tb);
      };

      mdl_table.setRecipeSelector(tb, b.rcFi, b.id_rc, b, function() {
        b.block.lastConfig = new Point2(this, 0).x;
        Call.tileConfig(Vars.player, b, vec2.set(this, -2));
        b.deselect();
      }, 7);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[0] > -2) {
        b.id_rc = tup[0];
        b.needCheck = true;
        b.progress = 0.0;
        b.efficiency = 0.0;

        mdl_effect.showAt(b, db_effect._recipeChange(b.block.size, b.team.color), 0.0);
      };

      if(tup[1] > -2) {
        b.param = tup[1];

        mdl_effect.showAt(b, b.block.updateEffect);
      };
    };


    function acceptItemComp(b, ob, itm) {
      if(b.items == null) return false;
      if(b.items.get(itm) >= b.getMaximumAccepted(itm)) return false;
      if(!frag_recipe.hasInput(b.ci, b.bi, b.opt, itm.name)) return false;

      return true;
    };


    function acceptLiquidComp(b, ob, liq) {
      if(b.liquids == null) return false;
      if(b.liquids.get(liq) > b.block.liquidCapacity) return false;
      if(!frag_recipe.hasInput(b.ci, b.bi, b.opt, liq.name)) return false;

      return true;
    };


    function outputsItemsComp(blk) {
      var cap = mdl_recipe._rcSize(blk.rcFi);
      var cond = false;
      for(let i = 0; i < cap; i++) {
        var bo = frag_recipe._bo(blk.rcFi, i);
        var fo = frag_recipe._fo(blk.rcFi, i);
        if(frag_recipe.outputsItem(bo, fo)) cond = true;
      };

      return cond;
    };


    function shouldConsumeComp(b) {
      if(!b.canAdd) return false;
      if(!b.enabled) return false;

      return true;
    };


    function consumesLiquidComp(blk, liq) {
      var cap = mdl_recipe._rcSize(blk.rcFi);
      var cond = false;
      for(let i = 0; i < cap; i++) {
        var ci = frag_recipe._ci(blk.rcFi, i);
        var bi = frag_recipe._bi(blk.rcFi, i);
        var opt = frag_recipe._opt(blk.rcFi, i);
        if(frag_recipe.hasInput(ci, bi, opt, liq.name)) cond = true;
      };

      return cond;
    };


    function drawSelectComp(b) {
      var isImpact = b.tag.includes("<impact>");

      var ct = mdl_content._ct_nm(mdl_recipe._iconNm(b.rcFi, b.id_rc));
      mdl_draw.drawContentIcon(b, ct, b.block.size);

      var tt = mdl_recipe._rawTooltip(b.rcFi, b.id_rc);
      if(tt == "overdriven") mdl_draw.drawRectPulse(b, b.block.size * 0.5 * Vars.tilesize, Pal.remove);

      if(isImpact) mdl_draw.drawCirclePulse(b, b.param1);
    };


    function drawStatusComp(b) {
      var isManual = b.tag.includes("<manual>");

      var color = b.status().color;
      if(isManual && b.efficiency > 0.75) color = BlockStatus.active.color;

      if(b.block.enableDrawStatus) mdl_draw.drawBlockStatus(b, color);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      if(cfg_update.isSuppressed()) return;

      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;


    const setBars = function(blk) {
      setBarsComp(blk);
    };
    exports.setBars = setBars;


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;


    const acceptItem = function(b, ob, itm) {
      if(!acceptItemComp(b, ob, itm)) return false;

      return true;
    };
    exports.acceptItem = acceptItem;


    const acceptLiquid = function(b, ob, liq) {
      if(!acceptLiquidComp(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const outputsItems = function(blk) {
      return outputsItemsComp(blk);
    };
    exports.outputsItems = outputsItems;


    const shouldConsume = function(b) {
      if(!shouldConsumeComp(b)) return false;

      return true;
    };
    exports.shouldConsume = shouldConsume;


    const consumesLiquid = function(blk, liq) {
      return consumesLiquidComp(blk, liq);
    };
    exports.consumesLiquid = consumesLiquid;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const drawStatus = function(b) {
      drawStatusComp(b);
    };
    exports.drawStatus = drawStatus;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_recipeFactory.js loaded.");
});
