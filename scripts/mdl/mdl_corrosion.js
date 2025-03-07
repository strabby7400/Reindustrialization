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
    const getGroup = function(liq) {
      var nm = liq.name;

      if(db_fluid.grp_brine.contains(nm)) return "brine";
      if(db_fluid.grp_basicAq.contains(nm)) return "basicAq";
      if(db_fluid.grp_acidicAq.contains(nm)) return "acidicAq";
      if(db_fluid.grp_basicOil.contains(nm)) return "basicOil";
      if(db_fluid.grp_acidicOil.contains(nm)) return "acidicOil";
      if(db_fluid.grp_basicSub.contains(nm)) return "basicSub";
      if(db_fluid.grp_acidicSub.contains(nm)) return "acidicSub";
      if(db_fluid.grp_basicGas.contains(nm)) return "basicGas";
      if(db_fluid.grp_acidicGas.contains(nm)) return "acidicGas";
      if(db_fluid.grp_slurry.contains(nm)) return "slurry";
      if(db_fluid.grp_melt.contains(nm)) return "melt";
      if(db_fluid.grp_stickyMelt.contains(nm)) return "stickyMelt";
      return null;
    };
    exports.getGroup = getGroup;


    const groupToValue = function(grp) {
      if(Vars.headless) return;

      var grpVal = null;

      switch(grp) {
        case "brine" :
          grpVal = Core.bundle.get("term.reind-term-brine.name");
          break;
        case "basicAq" :
          grpVal = Core.bundle.get("term.reind-term-basic-solution.name");
          break;
        case "acidicAq" :
          grpVal = Core.bundle.get("term.reind-term-acidic-solution.name");
          break;
        case "basicOil" :
          grpVal = Core.bundle.get("term.reind-term-basic-oil.name");
          break;
        case "acidicOil" :
          grpVal = Core.bundle.get("term.reind-term-acidic-oil.name");
          break;
        case "basicSub" :
          grpVal = Core.bundle.get("term.reind-term-basic-substance.name");
          break;
        case "acidicSub" :
          grpVal = Core.bundle.get("term.reind-term-acidic-substance.name");
          break;
        case "basicGas" :
          grpVal = Core.bundle.get("term.reind-term-basic-gas.name");
          break;
        case "acidicGas" :
          grpVal = Core.bundle.get("term.reind-term-acidic-gas.name");
          break;
        case "slurry" :
          grpVal = Core.bundle.get("term.reind-term-slurry.name");
          break;
        case "melt" :
          grpVal = Core.bundle.get("term.reind-term-melt.name");
          break;
        case "stickyMelt" :
          grpVal = Core.bundle.get("term.reind-term-sticky-melt.name");
          break;
      };

      return grpVal;
    };
    exports.groupToValue = groupToValue;


    const getGroupValue = function(liq) {
      var grp = getGroup(liq);
      var grpVal = groupToValue(grp);
      return grpVal;
    };
    exports.getGroupValue = getGroupValue;


    const getMaterialGroup = function(blk) {
      var nm = blk.name;

      if(db_block.grp_wood.contains(nm)) return "wood";
      if(db_block.grp_copper.contains(nm)) return "copper";
      if(db_block.grp_steel.contains(nm)) return "steel";
      if(db_block.grp_stainlessSteel.contains(nm)) return "stainlessSteel";
      if(db_block.grp_glass.contains(nm)) return "glass";
      return null;
    };
    exports.getMaterialGroup = getMaterialGroup;


    const materialGroupToValue = function(matGrp) {
      var matGrpVal;

      switch(matGrp) {
        case "wood" :
          matGrpVal = Core.bundle.get("term.reind-term-wood.name");
          break;
        case "copper" :
          matGrpVal = Core.bundle.get("term.reind-term-copper.name");
          break;
        case "steel" :
          matGrpVal = Core.bundle.get("term.reind-term-steel.name");
          break;
        case "stainlessSteel" :
          matGrpVal = Core.bundle.get("term.reind-term-stainless-steel.name");
          break;
        case "glass" :
          matGrpVal = Core.bundle.get("term.reind-term-glass.name");
          break;
        default:
          matGrpVal = null;
      };

      return matGrpVal;
    };
    exports.materialGroupToValue = materialGroupToValue;


    const getMaterialGroupValue = function(blk) {
      var matGrp = getMaterialGroup(blk);
      var matGrpVal = materialGroupToValue(matGrp);
      return matGrpVal;
    };
    exports.getMaterialGroupValue = getMaterialGroupValue;


    const getTags = function(liq) {
      var tags = new Seq();
      var nm = liq.name;

      if(db_fluid.tag_ammoniacal.contains(nm)) tags.add("ammoniacal");
      if(db_fluid.tag_chloric.contains(nm)) tags.add("chloric");
      if(db_fluid.tag_fluoric.contains(nm)) tags.add("fluoric");
      if(db_fluid.tag_oxidative.contains(nm)) tags.add("oxidative");

      return tags;
    };
    exports.getTags = getTags;


    const tagToValue = function(tag) {
      var tagVal;

      switch(tag) {
        case "ammoniacal" :
          tagVal = Core.bundle.get("term.reind-term-ammoniacal.name");
          break;
        case "chloric" :
          tagVal = Core.bundle.get("term.reind-term-chloric.name");
          break;
        case "fluoric" :
          tagVal = Core.bundle.get("term.reind-term-fluoric.name");
          break;
        case "oil" :
          tagVal = Core.bundle.get("term.reind-term-oil.name");
          break;
        case "oxidative" :
          tagVal = Core.bundle.get("term.reind-term-oxidative.name");
          break;
        default:
          tagVal = null;
      };

      return tagVal;
    };
    exports.tagToValue = tagToValue;


    const getTagValue = function(liq) {
      var tags = getTags(liq);
      var temp_tags = new Seq();
      tags.each(tag => temp_tags.add(tagToValue(tag)));
      var tagVal = mdl_text.getTagText(temp_tags);

      return tagVal;
    };
    exports.getTagValue = getTagValue;


    const getCorrosion = function(liq) {
      if(liq == null) return 0.0;

      var cor = mdl_data.read_1n1v(db_fluid.specificCorrosion, liq.name);
      if(cor == null) {
        var grp = getGroup(liq);
        if(grp != null) cor = mdl_data.read_1n1v(db_fluid.baseCorrosion, grp);
      };
      if(cor == null) return 0.0;

      return cor;
    };
    exports.getCorrosion = getCorrosion;


    const getCorrosionScale = function(blk, liq) {
      if(blk == null || liq == null) return 1.0;

      var grp = getGroup(liq);
      var matGrp = getMaterialGroup(blk);

      var corScl = 1.0;
      if(grp != null && matGrp != null) {
        var corSclTemp = mdl_data.read_2n1v(db_fluid.corrosionScale, matGrp, grp);
        if(corSclTemp != null) corScl = corSclTemp;
      };

      if(matGrp != null) {
        var tags = getTags(liq);
        tags.each(tag => {
          var tagScl = mdl_data.read_2n1v(db_fluid.specificCorrosionScale, matGrp, tag);
          if(tagScl != null) corScl *= tagScl;
        });
      };

      return corScl;
    };
    exports.getCorrosionScale = getCorrosionScale;


    const getCorrosionResistence = function(blk) {
      if(blk == null) return 1.0;

      var corRes = mdl_data.read_1n1v(db_block.specificCorrosionResistence, blk.name);
      if(corRes == null) {
        var grp = getMaterialGroup(blk);
        if(grp != null) corRes = mdl_data.read_1n1v(db_block.baseCorrosionResistence, grp);
      };
      if(corRes == null) return 1.0;

      return corRes;
    };
    exports.getCorrosionResistence = getCorrosionResistence;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_corrosion.js loaded.");
});
