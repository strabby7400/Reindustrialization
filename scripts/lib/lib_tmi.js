/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const lib_base = require("reind/lib/lib_base");

    const frag_recipe = require("reind/frag/frag_recipe");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_recipe = require("reind/mdl/mdl_recipe");
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
    const getType = function(tp) {
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
    exports.getType = getType;


    const getContent = function(ct_gn) {
      var ct = (typeof ct_gn == "string") ? mdl_content.getContent_nm(ct_gn) : ct_gn;
      return Tmi.itemsManager.getItem(ct);
    };
    exports.getContent = getContent;


    const getRawRecipe = function(tp, ct_gn, time) {
      return new TmiRecipe(getType(tp), getContent(ct_gn), time);
    };
    exports.getRawRecipe = getRawRecipe;
  // End


  // Part: Apply
    const addRaw = function(rawRc, ct_gn, amt) {
      rawRc.addMaterialFloat(getContent(ct_gn), amt);
    };
    exports.addRaw = addRaw;


    const addRawPersec = function(rawRc, ct_gn, amt) {
      rawRc.addMaterialPersec(getContent(ct_gn), amt);
    };
    exports.addRawPersec = addRawPersec;


    const addProd = function(rawRc, ct_gn, amt) {
      rawRc.addProductionFloat(getContent(ct_gn), amt);
    };
    exports.addProd = addProd;


    const addProdPersec = function(rawRc, ct_gn, amt) {
      rawRc.addProductionPersec(getContent(ct_gn), amt);
    };
    exports.addProdPersec = addProdPersec;


    const register = function(rawRc) {
      Tmi.recipesManager.addRecipe(rawRc);
    };
    exports.register = register;
  // End


  // Part: Recipe
    const register_recipeFactory = function(blk, rcFi) {
      var cap0 = mdl_recipe.getRecipeSize(rcFi);
      if(cap0 == 0) return;

      var li_ct = new Seq();
      Vars.content.items().each(itm => {if(mdl_content.isReind(itm)) li_ct.add(itm)});
      Vars.content.liquids().each(liq => {if(mdl_content.isReind(liq)) li_ct.add(liq)});

      for(let i = 0; i < cap0; i++) {
        var ci = frag_recipe.getCI(rcFi, i);
        var bi = frag_recipe.getBI(rcFi, i);
        var opt = frag_recipe.getOpt(rcFi, i);
        var co = frag_recipe.getCO(rcFi, i);
        var bo = frag_recipe.getBO(rcFi, i);
        var fo = frag_recipe.getFO(rcFi, i);
        var failP = mdl_recipe.getFailProbability(rcFi, i);
        var rawRc = getRawRecipe("factory", blk, blk.craftTime);

        li_ct.each(ct0 => {
          var amt_ci = 0.0;
          var amt_bi = 0.0;
          var amt_co = 0.0;
          var amt_bo = 0.0;

          // CI
          var li = ci;
          var cap = li.size;
          if(cap > 0) {
            for(let j = 0; j < cap; j++) {
              if(j % 2 != 0) continue;

              var ct = li.get(j);
              var amt = li.get(j + 1);

              if(ct0 == ct) amt_ci += amt;
            };
          };

          // BI
          var li = bi;
          var cap = li.size;
          if(cap > 0) {
            for(let j = 0; j < cap; j++) {
              if(j % 3 != 0) continue;

              var ct = li.get(j);
              var amt = li.get(j + 1);
              var p = li.get(j + 2);

              if(ct0 == ct) amt_bi += amt * p;
            };
          };

          // Opt
          var li = opt;
          var cap = li.size;
          if(cap > 0) {
            for(let j = 0; j < cap; j++) {
              if(j % 4 != 0) continue;

              var ct = li.get(j);
              var amt = li.get(j + 1);
              var p = li.get(j + 2);

              if(ct0 == ct) amt_bi += amt * p;
            };
          };

          // CO
          var li = co;
          var cap = li.size;
          if(cap > 0) {
            for(let j = 0; j < cap; j++) {
              if(j % 2 != 0) continue;

              var ct = li.get(j);
              var amt = li.get(j + 1);

              if(ct0 == ct) amt_co += amt;
            };
          };

          // BO
          var li = bo;
          var cap = li.size;
          if(cap > 0) {
            for(let j = 0; j < cap; j++) {
              if(j % 3 != 0) continue;

              var ct = li.get(j);
              var amt = li.get(j + 1);
              var p = li.get(j + 2);

              if(ct0 == ct) amt_bo += amt * p * (1.0 - failP);
            };
          };


          // FO
          var li = fo;
          var cap = li.size;
          if(cap > 0) {
            for(let j = 0; j < cap; j++) {
              if(j % 2 != 0) continue;

              var ct = li.get(j);
              var amt = li.get(j + 1);

              if(ct0 == ct) amt_bo += amt * failP;
            };
          };

          if(amt_ci > 0.0) addRawPersec(rawRc, ct0, amt_ci);
          if(amt_bi > 0.0) addRaw(rawRc, ct0, amt_bi);
          if(amt_co > 0.0) addProdPersec(rawRc, ct0, amt_co);
          if(amt_bo > 0.0) addProd(rawRc, ct0, amt_bo);
        });

        register(rawRc);
      };
    };
    exports.register_recipeFactory = register_recipeFactory;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:lib_tmi.js loaded.");
});
