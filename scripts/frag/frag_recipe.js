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
      var ci = [];

      // Input
      var arr = mdl_recipe._inputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(arr[i]);
          if(liq == null) continue;
          var amt = arr[i + 1];

          ci.push(liq);
          ci.push(amt);
        };
      };

      // Optional Fluid Input
      // TODO

      return ci;
    };
    exports._ci = _ci;


    const _bi = function(rcFi, id_rc) {
      var bi = [];

      // Input
      var arr = mdl_recipe._inputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var itm = Vars.content.item(arr[i]);
          if(itm == null) continue;
          var amt = arr[i + 1];

          bi.push(itm);
          bi.push(amt);
          bi.push(1.0);
        };
      };

      // Random Input
      var arr = mdl_recipe._randInputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var itm = Vars.content.item(arr[i]);
          if(itm == null) continue;
          var amt = arr[i + 1];
          var p = arr[i + 2];

          bi.push(itm);
          bi.push(amt);
          bi.push(p);
        };
      };

      // Batch Fluid Input
      var arr = mdl_recipe._bfInputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(arr[i]);
          if(liq == null) continue;
          var amt = arr[i + 1];

          bi.push(liq);
          bi.push(amt);
          bi.push(1.0);
        };
      };

      return bi;
    };
    exports._bi = _bi;


    const _opt = function(rcFi, id_rc) {
      var opt = [];

      // Optional Input
      var arr = mdl_recipe._optInputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 4) {
          var itm = Vars.content.item(arr[i]);
          if(itm == null) continue;
          var amt = arr[i + 1];
          var p = arr[i + 2];
          var mtp = arr[i + 3];

          opt.push(itm);
          opt.push(amt);
          opt.push(p);
          opt.push(mtp);
        };
      };

      return opt;
    };
    exports._opt = _opt;


    const _optCur = function(b, opt) {
      var optCur = null;
      var tmpMtp = 0.0;

      var arr = opt;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 4) {
          var ct = arr[i];
          var amt = arr[i + 1];
          var p = arr[i + 2];
          var mtp = arr[i + 3];

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
      var co = [];

      // Output
      var arr = mdl_recipe._outputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(arr[i]);
          if(liq == null) continue;
          var amt = arr[i + 1];

          co.push(liq);
          co.push(amt);
        };
      };

      return co;
    };
    exports._co = _co;


    const _bo = function(rcFi, id_rc) {
      var bo = [];

      // Input
      var arr = mdl_recipe._outputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var itm = Vars.content.item(arr[i]);
          if(itm == null) continue;
          var amt = arr[i + 1];

          bo.push(itm);
          bo.push(amt);
          bo.push(1.0);
        };
      };

      // Random Output
      var arr = mdl_recipe._randOutputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var itm = Vars.content.item(arr[i]);
          if(itm == null) continue;
          var amt = arr[i + 1];
          var p = arr[i + 2];

          bo.push(itm);
          bo.push(amt);
          bo.push(p);
        };
      };

      // Batch Fluid Output
      var arr = mdl_recipe._bfOutputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var liq = Vars.content.liquid(arr[i]);
          if(liq == null) continue;
          var amt = arr[i + 1];

          bo.push(liq);
          bo.push(amt);
          bo.push(1.0);
        };
      };
      return bo;
    };
    exports._bo = _bo;


    const _fo = function(rcFi, id_rc) {
      var fo = [];

      // Fail Outputs
      var arr = mdl_recipe._failOutputs(rcFi, id_rc);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var itm = Vars.content.item(arr[i]);
          if(itm == null) continue;
          var amt = arr[i + 1];

          fo.push(itm);
          fo.push(amt);
        };
      };

      return fo;
    };
    exports._fo = _fo;


    const _dTup = function(b, bo, fo) {
      var itms = [];
      var liqs = [];
      bo.forEach(i => {
        if(b.items != null && i instanceof Item && !itms.includes(i)) itms.push(i);
        if(b.liquids != null && i instanceof Liquid && !liqs.includes(i)) liqs.push(i);
      });
      fo.forEach(i => {if(b.items != null && i instanceof Item && !itms.includes(i)) itms.push(i)});

      return [itms, liqs];
    };
    exports._dTup = _dTup
  // End


  // Part: Cond
    const outputsItem = function(bo, fo) {
      var cond = false;
      bo.forEach(i => {if(i instanceof Item) cond = true});
      if(fo.length > 0) cond = true;

      return cond;
    };
    exports.outputsItem = outputsItem;


    const outputsLiquid = function(co) {
      var cond = false;
      co.forEach(i => {if(i instanceof Liquid) cond = true});

      return cond;
    };
    exports.outputsLiquid = outputsLiquid;


    const hasInput = function(ci, bi, opt, nm_ct) {
      if(nm_ct == null) return false;

      var cond = false;
      ci.forEach(i => {if(i instanceof Liquid && i.name == nm_ct) cond = true});
      bi.forEach(i => {if((i instanceof Item && i.name == nm_ct) || (i instanceof Liquid && i.name == nm_ct)) cond = true});
      opt.forEach(i => {if(i instanceof Item && i.name == nm_ct) cond = true});

      return cond;
    };
    exports.hasInput = hasInput;


    const hasOutput = function(co, bo, fo, nm_ct) {
      if(nm_ct == null) return false;

      var cond = false;
      co.forEach(i => {if(i instanceof Liquid && i.name == nm_ct) cond = true});
      bo.forEach(i => {if((i instanceof Item && i.name == nm_ct) || (i instanceof Liquid && i.name == nm_ct)) cond = true});
      fo.forEach(i => {if(i instanceof Item && i.name == nm_ct) cond = true});

      return cond;
    };
    exports.hasOutput = hasOutput;


    const canAddResource = function(b, co, bo, fo) {
      var cond = true;

      // CO
      if(b.liquids != null) {
        var arr = co;
        var cap = arr.length;
        if(cap > 0) {
          var allFull = true;
          for(let i = 0; i < cap; i += 2) {
            var ct = arr[i];
            var amt = arr[i + 1];

            if(b.liquids.get(ct) < b.block.liquidCapacity) {allFull = false} else {if(!b.block.ignoreLiquidFullness && !b.block.dumpExtraLiquid) cond = false};
          };

          if(allFull && outputsLiquid(co) && !b.block.ignoreLiquidFullness) cond = false;
        };
      };

      // BO
      var arr = bo;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = arr[i];
          var amt = arr[i + 1];
          var p = arr[i + 2];

          if(b.items != null && ct instanceof Item) {
            if(b.items.get(ct) > b.block.itemCapacity - amt * p) cond = false;
          };

          if(b.liquids != null && ct instanceof Liquid) {
            if(!b.block.ignoreLiquidFullness && b.liquids.get(ct) / b.block.liquidCapacity > 0.98) cond = false;
          };
        };
      };

      // FO
      var arr = fo;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = arr[i];
          var amt = arr[i + 1];

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
      if(b.liquids != null) {
        var arr = ci;
        var cap = arr.length;
        if(cap > 0) {
          for(let i = 0; i < cap; i += 2) {
            var ct = arr[i];
            var amt = arr[i + 1];

            mtp = b.edelta() * b.efficiencyScale() < 0.0001 ? 0.0 : Math.min(b.liquids.get(ct) / amt * b.edelta() * b.efficiencyScale(), 1.0);
            val *= mtp;
          };
        };
      };

      // BI
      var arr = bi;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = arr[i];
          var amt = arr[i + 1];
          var p = arr[i + 2];

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
      var arr = bi;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = arr[i];
          var amt = arr[i + 1];
          var p = arr[i + 2];

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


    const consumeLiquids = function(b, ci, progInc, timeScale, mtp) {
      if(b.liquids == null) return;

      // CI
      var arr = ci;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = arr[i];
          var amt = arr[i + 1];

          b.liquids.remove(ct, Math.min(amt * progInc * timeScale * mtp, b.liquids.get(ct)));
        };
      };
    };
    exports.consumeLiquids = consumeLiquids;


    const addItems = function(b, bo, fo, failP) {
      var failed = Mathf.chance(failP);

      // BO
      var arr = bo;
      var cap = arr.length;
      if(!failed && cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var ct = arr[i];
          var amt = arr[i + 1];
          var p = arr[i + 2];

          if(b.items != null && ct instanceof Item) {
            for(let j = 0; j < amt; j++) {if(Mathf.chance(p)) b.offload(ct)};
          };

          if(b.liquids != null && ct instanceof Liquid) {
            b.handleLiquid(b, ct, Math.min(amt, b.block.liquidCapacity - b.liquids.get(ct)));
          };
        };
      };

      // FO
      var arr = fo;
      var cap = arr.length;
      if(failed) {
        for(let i = 0; i < 6; i++) {mdl_effect.showAt(b, db_effect._craftBlackSmog())};

        if(cap > 0) {
          for(let i = 0; i < cap; i += 2) {
            var ct = arr[i];
            var amt = arr[i + 1];

            if(b.items != null) {
              for(let j = 0; j < amt; j++) {b.offload(ct)};
            };
          };
        };
      };
    };
    exports.addItems = addItems;


    const addLiquids = function(b, co, progInc1, timeScale, mtp) {
      if(b.liquids == null) return;

      // CO
      var arr = co;
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var ct = arr[i];
          var amt = arr[i + 1];

          b.handleLiquid(b, ct, Math.min(amt * progInc1 * timeScale * mtp, b.block.liquidCapacity - b.liquids.get(ct)));
        };
      };
    };
    exports.addLiquids = addLiquids;


    const dumpResource = function(b, co, dTup) {
      if(b.liquids != null) {
        var arr = co;
        var cap = arr.length;
        if(cap > 0) {
          for(let i = 0; i < cap; i += 2) {
            var ct = arr[i];
            var dir = (b.block.liquidOutputDirections.length > i / 2) ? b.block.liquidOutputDirections[i / 2] : -1;

            b.dumpLiquid(ct, 2.0, dir);
          };
        };
      };

      dTup[0].forEach(itm => b.dump(itm));
      dTup[1].forEach(liq => b.dumpLiquid(liq, 2.0));
    };
    exports.dumpResource = dumpResource;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_recipe.js loaded.");
});
