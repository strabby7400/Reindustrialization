/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const lib_base = require("reind/lib/lib_base");

    const frag_faci = require("reind/frag/frag_faci");
    const frag_recipe = require("reind/frag/frag_recipe");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_recipe = require("reind/mdl/mdl_recipe");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");
  // End


  // Part: Class
    const Tmi = lib_base.loadClass("tmi.TooManyItems");
    exports.Tmi = Tmi;

    const TmiRecipe = lib_base.loadClass("tmi.recipe.Recipe");
    exports.TmiRecipe = TmiRecipe;

    const TmiRecipeType = lib_base.loadClass("tmi.recipe.RecipeType");
    exports.TmiRecipeType = TmiRecipeType;
  // End


  // Part: Get
    const _tmiTp = function(tp) {
      var val = null;
      switch(tp) {
        case "factory" :
          val = TmiRecipeType.factory;
          break;
        case "building" :
          val = TmiRecipeType.building;
          break;
        case "collecting" :
          val = TmiRecipeType.collecting;
          break;
        case "generator" :
          val = TmiRecipeType.generator;
          break;
      };

      return val;
    };
    exports._tmiTp = _tmiTp;


    const _tmiCt = function(ct_gn) {
      return Tmi.itemsManager.getItem(mdl_content._ct_gn(ct_gn));
    };
    exports._tmiCt = _tmiCt;


    const _tmiRawRc = function(tp, ct_gn, time) {
      return new TmiRecipe(_tmiTp(tp), _tmiCt(ct_gn), time);
    };
    exports._tmiRawRc = _tmiRawRc;
  // End


  // Part: Apply
    const addRaw = function(rawRc, ct_gn, amt) {
      rawRc.addMaterialFloat(_tmiCt(ct_gn), amt);
    };
    exports.addRaw = addRaw;


    const addRawPersec = function(rawRc, ct_gn, amt) {
      rawRc.addMaterialPersec(_tmiCt(ct_gn), amt);
    };
    exports.addRawPersec = addRawPersec;


    const addProd = function(rawRc, ct_gn, amt) {
      rawRc.addProductionFloat(_tmiCt(ct_gn), amt);
    };
    exports.addProd = addProd;


    const addProdPersec = function(rawRc, ct_gn, amt) {
      rawRc.addProductionPersec(_tmiCt(ct_gn), amt);
    };
    exports.addProdPersec = addProdPersec;


    const addSubInfo = function(rawRc, str) {
      rawRc.appendSubInfo(tb => {
        tb.row();
        tb.add(str).left();
      });
    };
    exports.addSubInfo = addSubInfo;


    const register = function(rawRc) {
      try {Tmi.recipesManager.addRecipe(rawRc, true)} catch(err) {Tmi.recipesManager.addRecipe(rawRc)};
    };
    exports.register = register;


    const addOptInputs = function(rawRc, opt) {
      if(opt == null || opt.length == 0) return;

      rawRc.appendSubInfo(tb => {
        tb.row();

        tb.table(Styles.none, tb1 => {
          var cap = opt.length;
          for(let i = 0; i < cap; i += 4) {
            var ct = opt[i];
            var amt = opt[i + 1];
            var p = opt[i + 2];
            var mtp = opt[i + 3];

            tb1.add("[" + Strings.fixed(i / 4.0 + 1.0, 0) + "]").center().color(Pal.accent).padRight(36.0);
            mdl_table.__recipeItem(tb1, ct, amt, p).padRight(72.0);
            tb1.add(mdl_text._statText(mdl_text._term("efficiency-multiplier"), Strings.fixed(mtp * 100.0, 0) + "%")).center().padRight(6.0);
            tb1.row();
          };
        }).row();

        mdl_table.__break(tb);
      });
    };
  // End


  // Part: Recipe
    const register_crop = function(blk) {
      var tup = frag_faci._cropTuple(blk);
      var growTime = tup[0];
      var growStages = tup[1];
      var cropYield = tup[2];

      var arr = cropYield;
      var cap = arr.length;
      if(cap == 0) return;
      for(let i = 0; i < cap; i += 4) {
        var stage = arr[i];
        var batch = arr[i + 2];
        var growTime_fi = stage / growStages * growTime;
        var rawRc = _tmiRawRc("factory", blk, growTime_fi);

        var cap1 = batch.length;
        if(cap1 == 0) continue;
        for(let j = 0; j < cap1; j += 3) {
          var itm = mdl_content._ct_gn(batch[j]);
          if(itm == null) continue;
          var amt = batch[j + 1];
          var p = batch[j + 2];

          addProd(rawRc, itm, amt * p);
        };

        register(rawRc);
      };
    };
    exports.register_crop = register_crop;


    const register_structureCore = function(blk) {
      var pair = frag_faci._structPair(blk);
      var blk_tg = pair[0];
      var plan = pair[1];
      var rawRc = _tmiRawRc("building", blk_tg, 0.0);

      addRaw(rawRc, blk, 1);
      var arr = frag_faci._structPlanReq(plan);
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var blk1 = arr[i];
          var amt = arr[i + 1];

          addRaw(rawRc, blk1, amt);
        };
      };

      register(rawRc);
    };
    exports.register_structureCore = register_structureCore;


    const tmpSeq_recipeFactory = new Seq();
    const register_recipeFactory = function(blk, rcFi) {
      var li = tmpSeq_recipeFactory;
      if(li.size == 0) {
        Vars.content.items().each(itm => li.add(itm));
        Vars.content.liquids().each(liq => li.add(liq));
      };

      var cap0 = mdl_recipe._rcSize(rcFi);
      if(cap0 == 0) return;

      for(let i = 0; i < cap0; i++) {
        var ci = frag_recipe._ci(rcFi, i);
        var bi = frag_recipe._bi(rcFi, i);
        var opt = frag_recipe._opt(rcFi, i);
        var co = frag_recipe._co(rcFi, i);
        var bo = frag_recipe._bo(rcFi, i);
        var fo = frag_recipe._fo(rcFi, i);
        var reqOpt = mdl_recipe._reqOpt(rcFi, i);
        var failP = mdl_recipe._failP(rcFi, i);
        var tt = mdl_recipe._rawTooltip(rcFi, i)
        var rawRc = _tmiRawRc("factory", blk, blk.craftTime);

        li.each(ct0 => {
          var amt_ci = 0.0;
          var amt_bi = 0.0;
          var amt_co = 0.0;
          var amt_bo = 0.0;

          // CI
          var arr = ci;
          var cap = arr.length;
          if(cap > 0) {
            for(let j = 0; j < cap; j += 2) {
              var ct = arr[j];
              var amt = arr[j + 1];

              if(ct0 == ct) amt_ci += amt;
            };
          };

          // BI
          var arr = bi;
          var cap = arr.length;
          if(cap > 0) {
            for(let j = 0; j < cap; j += 3) {
              var ct = arr[j];
              var amt = arr[j + 1];
              var p = arr[j + 2];

              if(ct0 == ct) amt_bi += amt * p;
            };
          };

          // CO
          var arr = co;
          var cap = arr.length;
          if(cap > 0) {
            for(let j = 0; j < cap; j += 2) {
              var ct = arr[j];
              var amt = arr[j + 1];

              if(ct0 == ct) amt_co += amt;
            };
          };

          // BO
          var arr = bo;
          var cap = arr.length;
          if(cap > 0) {
            for(let j = 0; j < cap; j += 3) {
              var ct = arr[j];
              var amt = arr[j + 1];
              var p = arr[j + 2];

              if(ct0 == ct) amt_bo += amt * p * (1.0 - failP);
            };
          };


          // FO
          var arr = fo;
          var cap = arr.length;
          if(cap > 0) {
            for(let j = 0; j < cap; j += 2) {
              var ct = arr[j];
              var amt = arr[j + 1];

              if(ct0 == ct) amt_bo += amt * failP;
            };
          };

          if(amt_ci > 0.0) addRawPersec(rawRc, ct0, amt_ci);
          if(amt_bi > 0.0) addRaw(rawRc, ct0, amt_bi);
          if(amt_co > 0.0) addProdPersec(rawRc, ct0, amt_co);
          if(amt_bo > 0.0) addProd(rawRc, ct0, amt_bo);

        });

        // Optional Inputs
        addOptInputs(rawRc, opt);

        // Require Optional
        if(reqOpt) addSubInfo(rawRc, mdl_text._statText(mdl_text._term("require-optional"), Core.bundle.get("yes")));

        // Fail Probability
        if(failP > 0.0) addSubInfo(rawRc, mdl_text._statText(mdl_text._term("chance-to-fail"), Strings.fixed(failP * 100.0, 1) + "%"));

        // Is Manual
        if(blk.tag.includes("<manual>")) addSubInfo(rawRc, mdl_text._statText(mdl_text._term("is-manual"), Core.bundle.get("yes")));

        // Overdriven
        if(tt == "overdriven") addSubInfo(rawRc, mdl_text._info("tt-overdriven"));

        register(rawRc);
      };
    };
    exports.register_recipeFactory = register_recipeFactory;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: lib_tmi.js loaded.");
});
