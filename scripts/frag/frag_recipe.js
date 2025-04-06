/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_recipe = require("reind/mdl/mdl_recipe");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Parse
    const _ci = function(rcFi, id_rc) {
      var ci = new Seq();

      // Input
      var li = mdl_recipe._inputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(li.get(i));
          if(liq == null) continue;
          var amt = li.get(i + 1);

          ci.add(liq);
          ci.add(amt);
        };
      };

      // Optional Fluid Input
      // TODO

      return ci;
    };
    exports._ci = _ci;


    const _bi = function(rcFi, id_rc) {
      var bi = new Seq();

      // Input
      var li = mdl_recipe._inputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var itm = Vars.content.item(li.get(i));
          if(itm == null) continue;
          var amt = li.get(i + 1);

          bi.add(itm);
          bi.add(amt);
          bi.add(1.0);
        };
      };

      // Random Input
      var li = mdl_recipe._randInputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var itm = Vars.content.item(li.get(i));
          if(itm == null) continue;
          var amt = li.get(i + 1);
          var p = li.get(i + 2);

          bi.add(itm);
          bi.add(amt);
          bi.add(p);
        };
      };

      // Batch Fluid Input
      var li = mdl_recipe._bfInputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(li.get(i));
          if(liq == null) continue;
          var amt = li.get(i + 1);

          bi.add(liq);
          bi.add(amt);
          bi.add(1.0);
        };
      };

      return bi;
    };
    exports._bi = _bi;


    const _opt = function(rcFi, id_rc) {
      var opt = new Seq();

      // Optional Input
      var li = mdl_recipe._optInputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 4) {
          var itm = Vars.content.item(li.get(i));
          if(itm == null) continue;
          var amt = li.get(i + 1);
          var p = li.get(i + 2);
          var mtp = li.get(i + 3);

          opt.add(itm);
          opt.add(amt);
          opt.add(p);
          opt.add(mtp);
        };
      };

      return opt;
    };
    exports._opt = _opt;


    const _optCur = function(b, opt) {
      var optCur = null;
      var tmpMtp = 0.0;

      var li = opt;
      var cap = opt.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 4) {
          var ct = opt.get(i);
          var amt = opt.get(i + 1);
          var p = opt.get(i + 2);
          var mtp = opt.get(i + 3);

          if(b.items != null && b.items.get(ct) >= amt && mtp >= tmpMtp) {
            tmpMtp = mtp;
            optCur = [ct, amt, p, mtp];
          };
        };
      };

      return optCur;
    };
    exports._optCur = _optCur;


    const _co = function(rcFi, id_rc) {
      var co = new Seq();

      // Output
      var li = mdl_recipe._outputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(li.get(i));
          if(liq == null) continue;
          var amt = li.get(i + 1);

          co.add(liq);
          co.add(amt);
        };
      };

      return co;
    };
    exports._co = _co;


    const _bo = function(rcFi, id_rc) {
      var bo = new Seq();

      // Input
      var li = mdl_recipe._outputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var itm = Vars.content.item(li.get(i));
          if(itm == null) continue;
          var amt = li.get(i + 1);

          bo.add(itm);
          bo.add(amt);
          bo.add(1.0);
        };
      };

      // Random Output
      var li = mdl_recipe._randOutputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var itm = Vars.content.item(li.get(i));
          if(itm == null) continue;
          var amt = li.get(i + 1);
          var p = li.get(i + 2);

          bo.add(itm);
          bo.add(amt);
          bo.add(p);
        };
      };

      // Batch Fluid Output
      var li = mdl_recipe._bfOutputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(li.get(i));
          if(liq == null) continue;
          var amt = li.get(i + 1);

          bo.add(liq);
          bo.add(amt);
          bo.add(1.0);
        };
      };
      return bo;
    };
    exports._bo = _bo;


    const _fo = function(rcFi, id_rc) {
      var fo = new Seq();

      // Fail Outputs
      var li = mdl_recipe._failOutputs(rcFi, id_rc);
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var itm = Vars.content.item(li.get(i));
          if(itm == null) continue;
          var amt = li.get(i + 1);

          fo.add(itm);
          fo.add(amt);
        };
      };

      return fo;
    };
    exports._fo = _fo;
  // End


  // Part: Cond
    const outputsItem = function(bo, fo) {
      var cond = false;
      bo.each(i => {if(i instanceof Item) cond = true});
      if(fo.size > 0) cond = true;

      return cond;
    };
    exports.outputsItem = outputsItem;


    const outputsLiquid = function(co) {
      var cond = false;
      co.each(i => {if(i instanceof Liquid) cond = true});

      return cond;
    };
    exports.outputsLiquid = outputsLiquid;


    const hasInput = function(ci, bi, opt, nm_ct) {
      if(nm_ct == null) return false;

      var cond = false;
      ci.each(i => {if(i instanceof Liquid && i.name == nm_ct) cond = true});
      bi.each(i => {if((i instanceof Item && i.name == nm_ct) || (i instanceof Liquid && i.name == nm_ct)) cond = true});
      opt.each(i => {if(i instanceof Item && i.name == nm_ct) cond = true});

      return cond;
    };
    exports.hasInput = hasInput;


    const hasOutput = function(co, bo, fo, nm_ct) {
      if(nm_ct == null) return false;

      var cond = false;
      co.each(i => {if(i instanceof Liquid && i.name == nm_ct) cond = true});
      bo.each(i => {if((i instanceof Item && i.name == nm_ct) || (i instanceof Liquid && i.name == nm_ct)) cond = true});
      fo.each(i => {if(i instanceof Item && i.name == nm_ct) cond = true});

      return cond;
    };
    exports.hasOutput = hasOutput;


    const canAddResource = function(b, co, bo, fo) {
      var cond = true;

      // CO
      var li = co;
      var cap = li.size;
      if(cap > 0) {
        var allFull = true;
        for(let i = 0; i < cap; i += 2) {
          var ct = li.get(i);
          var amt = li.get(i + 1);

          if(b.liquids != null) {
            if(b.liquids.get(ct) < b.block.liquidCapacity) {allFull = false} else {if(!b.block.ignoreLiquidFullness && !b.block.dumpExtraLiquid) cond = false};
          };
        };

        if(allFull && outputsLiquid(co) && !b.block.ignoreLiquidFullness) cond = false;
      };

      // BO
      var li = bo;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = li.get(i);
          var amt = li.get(i + 1);
          var p = li.get(i + 2);

          if(b.items != null && ct instanceof Item) {
            if(b.items.get(ct) > b.block.itemCapacity - amt * p) cond = false;
          };

          if(b.liquids != null && ct instanceof Liquid) {
            if(!b.block.ignoreLiquidFullness && b.liquids.get(ct) / b.block.liquidCapacity > 0.98) cond = false;
          };
        };
      };

      // FO
      var li = fo;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = li.get(i);
          var amt = li.get(i + 1);

          if(b.items != null) {
            if(b.items.get(ct) > b.block.itemCapacity - amt) cond = false;
          };
        };
      };

      return cond;
    };
    exports.canAddResource = canAddResource;
  // End


  // Part: Craft
    const sumEfficiency = function(b, ci, bi, opt, reqOpt) {
      var val = 1.0;
      var mtp = 1.0;
      if(b.power != null) val *= b.power.status;

      // CI
      var li = ci;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = li.get(i);
          var amt = li.get(i + 1);

          if(b.liquids != null) {
            mtp = b.edelta() * b.efficiencyScale() < 0.0001 ? 0.0 : Math.min(b.liquids.get(ct) / amt * b.edelta() * b.efficiencyScale(), 1.0);
            val *= mtp;
          };
        };
      };

      // BI
      var li = bi;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = li.get(i);
          var amt = li.get(i + 1);
          var p = li.get(i + 2);

          if(b.items != null && ct instanceof Item) {
            if(b.items.get(ct) < amt) val = 0.0;
          };

          if(b.liquids != null && ct instanceof Liquid) {
            if(b.liquids.get(ct) < amt) val = 0.0;
          };
        };
      };

      // Opt
      var optCur = _optCur(b, opt);
      if(reqOpt && optCur == null) val = 0.0;
      if(optCur != null) {
        val *= optCur[3];
      };

      if(val < 0.0) val = 0.0;

      return val;
    };
    exports.sumEfficiency = sumEfficiency;


    const consumeItems = function(b, bi, opt) {
      // BI
      var li = bi;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = li.get(i);
          var amt = li.get(i + 1);
          var p = li.get(i + 2);

          if(b.items != null && ct instanceof Item) {
            if(p > 0.9999) {
              b.items.remove(ct, amt);
            } else {
              for(let j = 0; j < amt; j++) {if(Mathf.chance(p)) b.items.remove(ct, 1)};
            };
          };

          if(b.liquids != null && ct instanceof Liquid) {
            b.liquids.remove(ct, amt);
          };
        };
      };

      // Opt
      var optCur = _optCur(b, opt);
      if(b.items != null && optCur != null) {
        var ct = optCur[0];
        var amt = optCur[1];
        var p = optCur[2];

        if(p > 0.9999) {
          b.items.remove(ct, amt);
        } else {
          for(let i = 0; i < amt; i++) {if(Mathf.chance(p)) b.items.remove(ct, 1)};
        };
      };
    };
    exports.consumeItems = consumeItems;


    const consumeLiquids = function(b, ci, progInc, timeScale) {
      // CI
      var li = ci;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = li.get(i);
          var amt = li.get(i + 1);

          if(b.liquids != null) {
            b.liquids.remove(ct, Math.min(amt * progInc * timeScale, b.liquids.get(ct)));
          };
        };
      };
    };
    exports.consumeLiquids = consumeLiquids;


    const addItems = function(b, bo, fo, failP) {
      var failed = Mathf.chance(failP);

      // BO
      var li = bo;
      var cap = li.size;
      if(!failed && cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = li.get(i);
          var amt = li.get(i + 1);
          var p = li.get(i + 2);

          if(b.items != null && ct instanceof Item) {
            for(let j = 0; j < amt; j++) {if(Mathf.chance(p)) b.offload(ct)};
          };

          if(b.liquids != null && ct instanceof Liquid) {
            b.handleLiquid(b, ct, Math.min(amt, b.block.liquidCapacity - b.liquids.get(ct)));
          };
        };
      };

      // FO
      var li = fo;
      var cap = li.size;
      if(failed) {
        for(let i = 0; i < 6; i++) {mdl_effect.showAt(b, db_effect._craftBlackSmog())};

        if(cap > 0) {
          for(let i = 0; i < cap; i += 2) {
            var ct = li.get(i);
            var amt = li.get(i + 1);

            if(b.items != null) {
              for(let j = 0; j < amt; j++) {b.offload(ct)};
            };
          };
        };
      };
    };
    exports.addItems = addItems;


    const addLiquids = function(b, co, progInc1, timeScale) {
      // CO
      var li = co;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = li.get(i);
          var amt = li.get(i + 1);

          if(b.liquids != null) {
            b.handleLiquid(b, ct, Math.min(amt * progInc1 * timeScale, b.block.liquidCapacity - b.liquids.get(ct)));
          };
        };
      };
    };
    exports.addLiquids = addLiquids;


    const dumpResource = function(b, co, bo, fo) {
      var li = co;
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = li.get(i);
          var dir = (b.block.liquidOutputDirections.length > i / 2) ? b.block.liquidOutputDirections[i / 2] : -1;

          if(b.liquids != null) b.dumpLiquid(ct, 2.0, dir);
        };
      };

      var li_itm = new Seq();
      var li_liq = new Seq();
      bo.each(i => {
        if(i instanceof Item && !li_itm.contains(i)) li_itm.add(i);
        if(i instanceof Liquid && !li_liq.contains(i)) li_liq.add(i);
      });
      fo.each(i => {if(i instanceof Item && !li_itm.contains(i)) li_itm.add(i)});

      if(b.items != null) li_itm.each(itm => b.dump(itm));
      if(b.liquids != null) li_liq.each(liq => b.dumpLiquid(liq, 2.0));
    };
    exports.dumpResource = dumpResource;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_recipe.js loaded.");
});
