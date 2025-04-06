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
      var arr = arr_fGrp;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(obj["group"][arr[i]].contains(nm)) {
          val = arr[i];
          break;
        };
      };

      return val;
    };
    exports._fGrp = _fGrp;


    const _fGrpVal_grp = function(grp) {
      if(Vars.headless) return;

      var val = null;
      var arr = arr_fGrp;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(grp == arr[i]) {
          val = Core.bundle.get("term.reind-term-" + arr[i + 1] + ".name");
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
      var arr = arr_matGrp;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(obj["group"][arr[i]].contains(nm)) {
          val = arr[i];
          break;
        };
      };

      return val;
    };
    exports._matGrp = _matGrp;


    const _matGrpVal_grp = function(matGrp) {
      if(Vars.headless) return;

      var val = null;
      var arr = arr_matGrp;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(matGrp == arr[i]) {
          val = Core.bundle.get("term.reind-term-" + arr[i + 1] + ".name");
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


    const li_94077784 = new Seq();
    const _liFTag = function(liq) {
      var li = li_94077784.clear();

      var nm = liq.name;
      var obj = db_fluid.db;
      var arr = arr_fTag;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(obj["fTag"][arr[i]].contains(nm)) {
          li.add(arr[i]);
          break;
        };
      };

      return li;
    };
    exports._liFTag = _liFTag;


    const _fTagVal_tag = function(tag) {
      if(Vars.headless) return;

      var val = null;
      var arr = arr_fTag;
      var cap = arr.length;

      for(let i = 0; i < cap; i += 2) {
        if(tag == arr[i]) {
          val = Core.bundle.get("term.reind-term-" + arr[i + 1] + ".name");
          break;
        };
      };

      return val;
    };
    exports._fTagVal_tag = _fTagVal_tag;


    const li_99387709 = new Seq();
    const _fTagVal = function(liq) {
      var li = li_99387709.clear();

      _liFTag(liq).each(tag => li.add(_fTagVal_tag(tag)));

      return mdl_text._tagText(li);
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
        _liFTag(liq).each(tag => {
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
