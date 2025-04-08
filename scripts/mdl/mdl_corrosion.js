/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Methods
    const arr_fGrp = [
      "brine", "brine",
      "basicAq", "basic-solution",
      "acidicAq", "acidic-solution",
      "alcohol", "alcohol",
      "basicAlc", "basic-alcohol",
      "acidicAlc", "acidic-alcohol",
      "oil", "oil",
      "basicOil", "basic-oil",
      "acidicOil", "acidic-oil",
      "basicSub", "basic-substance",
      "acidicSub", "acidic-substance",
      "basicGas", "basic-gas",
      "acidicGas", "acidic-gas",
      "slurry", "slurry",
      "melt", "melt",
      "stickyMelt", "sticky-melt",
    ];


    const _fGrp = function(liq) {
      var nm = liq.name;
      var val = null;
      var obj = db_fluid.db;
      var cap = arr_fGrp.length;

      for(let i = 0; i < cap; i += 2) {
        if(obj["group"][arr_fGrp[i]].includes(nm)) {
          val = arr_fGrp[i];
          break;
        };
      };

      return val;
    };
    exports._fGrp = _fGrp;


    const _fGrpVal_grp = function(grp) {
      if(Vars.headless) return;

      var val = null;
      var cap = arr_fGrp.length;

      for(let i = 0; i < cap; i += 2) {
        if(grp == arr_fGrp[i]) {
          val = mdl_text._term(arr_fGrp[i + 1]);
          break;
        };
      };

      return val;
    };
    exports._fGrpVal_grp = _fGrpVal_grp;


    const _fGrpVal = function(liq) {
      return _fGrpVal_grp(_fGrp(liq));
    };
    exports._fGrpVal = _fGrpVal;


    const arr_matGrp = [
      "wood", "wood",
      "copper", "copper",
      "lead", "lead",
      "iron", "iron",
      "steel", "steel",
      "galvanizedSteel", "galvanized-steel",
      "stainlessSteel", "stainless-steel",
      "glass", "glass",
      "cement", "cement",
      "rubber", "rubber",
    ];


    const _matGrp = function(blk) {
      var nm = blk.name;
      var val = null;
      var obj = db_block.db;
      var cap = arr_matGrp.length;

      for(let i = 0; i < cap; i += 2) {
        if(obj["group"][arr_matGrp[i]].includes(nm)) {
          val = arr_matGrp[i];
          break;
        };
      };

      return val;
    };
    exports._matGrp = _matGrp;


    const _matGrpVal_grp = function(matGrp) {
      if(Vars.headless) return;

      var val = null;
      var cap = arr_matGrp.length;

      for(let i = 0; i < cap; i += 2) {
        if(matGrp == arr_matGrp[i]) {
          val = mdl_text._term(arr_matGrp[i + 1]);
          break;
        };
      };

      return val;
    };
    exports._matGrpVal_grp = _matGrpVal_grp;


    const _matGrpVal = function(blk) {
      return _matGrpVal_grp(_matGrp(blk));
    };
    exports._matGrpVal = _matGrpVal;


    const arr_fTag = [
      "ammoniacal", "ammoniacal",
      "chloric", "chloric",
      "fluoric", "fluoric",
      "oxidative", "oxidative",
      "dehydrative", "dehydrative",
      "oil", "oil",
    ];


    const _fTags = function(liq) {
      var arr = [];

      var nm = liq.name;
      var obj = db_fluid.db;
      var cap = arr_fTag.length;

      for(let i = 0; i < cap; i += 2) {
        if(obj["fTag"][arr_fTag[i]].includes(nm)) {
          arr.push(arr_fTag[i]);
          break;
        };
      };

      return arr;
    };
    exports._fTags = _fTags;


    const _fTagVal_tag = function(tag) {
      if(Vars.headless) return;

      var val = null;
      var arr = arr_fTag;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(tag == arr[i]) {
          val = mdl_text._term(arr[i + 1]);
          break;
        };
      };

      return val;
    };
    exports._fTagVal_tag = _fTagVal_tag;


    const _fTagVal = function(liq) {
      return mdl_text._tagText(_fTags(liq).map(tag => _fTagVal_tag(tag)));
    };
    exports._fTagVal = _fTagVal;


    const _cor = function(liq) {
      if(liq == null) return 0.0;

      var obj = db_fluid.db["corrosion"];

      var cor = mdl_data.read_1n1v(obj["specific"], liq.name);
      if(cor == null) {
        var grp = _fGrp(liq);
        if(grp != null) cor = mdl_data.read_1n1v(obj["base"], grp);
      };

      return (cor == null) ? 0.0 : cor;
    };
    exports._cor = _cor;


    const _corScl = function(blk, liq) {
      if(blk == null || liq == null) return 1.0;

      var obj = db_fluid.db["corrosion"];
      var grp = _fGrp(liq);
      var matGrp = _matGrp(blk);
      var corScl = 1.0;

      if(grp != null && matGrp != null) {
        var tmpCorScl = mdl_data.read_2n1v(obj["scale"], matGrp, grp);
        if(tmpCorScl != null) corScl = tmpCorScl;
      };

      if(matGrp != null) {
        _fTags(liq).forEach(tag => {
          var tagScl = mdl_data.read_2n1v(obj["tagScale"], matGrp, tag);
          if(tagScl != null) corScl *= tagScl;
        });
      };

      return corScl;
    };
    exports._corScl = _corScl;


    const _corRes = function(blk) {
      if(blk == null) return 1.0;

      var obj = db_block.db["durability"]["corrosion"];

      var corRes = mdl_data.read_1n1v(obj["specific"], blk.name);
      if(corRes == null) {
        var grp = _matGrp(blk);
        if(grp != null) corRes = mdl_data.read_1n1v(obj["base"], grp);
      };

      return (corRes == null) ? 1.0 : corRes;
    };
    exports._corRes = _corRes;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_corrosion.js loaded.");
});
