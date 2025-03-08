/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_text = require("reind/mdl/mdl_text");
  // End


  // Part: Parser
    /* NOTE: Gets a recipe according to {id_rc}. */
    const getRecipe = function(rcFi, id_rc) {
      if(rcFi == null || id_rc == null) return;

      var li_rc = rcFi.rc["recipes"];
      if(id_rc >= li_rc.size) return;

      return li_rc.get(id_rc);
    };
    exports.getRecipe = getRecipe;


    /* NOTE: Gets size of the recipe list. */
    const getRecipeSize = function(rcFi) {
      if(rcFi == null) return;

      return rcFi.rc["recipes"].size;
    };
    exports.getRecipeSize = getRecipeSize;


    /* NOTE: Gets a value in a recipe. */
    const getRecipeValue = function(rcFi, id_rc, str_val) {
      var rc = getRecipe(rcFi, id_rc);
      return rc[str_val];
    };
    exports.getRecipeValue = getRecipeValue;


    /* NOTE: Gets the name used for icon. */
    const getIconName = function(rcFi, id_rc) {
      return getRecipeValue(rcFi, id_rc, "icon");
    };
    exports.getIconName = getIconName;


    /* NOTE: Gets a drawable icon that is used in tables. */
    const getIcon = function(rcFi, id_rc) {
      var ct = mdl_content.getContent_nm(getIconName(rcFi, id_rc));
      return (ct == null) ? null : new TextureRegionDrawable(ct.uiIcon);
    };
    exports.getIcon = getIcon;


    /* NOTE: Gets the category for the recipe. */
    const getCategory = function(rcFi, id_rc) {
      return getRecipeValue(rcFi, id_rc, "category");
    };
    exports.getCategory = getCategory;


    /* NOTE: Gets the category name in bundle. */
    const getCategoryValue = function(rcFi, id_rc) {
      var cat = getCategory(rcFi, id_rc);
      return (Vars.headless || cat == null) ? "UNDEFINED" : Core.bundle.get("term.reind-term-" + cat + ".name");
    };
    exports.getCategoryValue = getCategoryValue;


    /* NOTE: Gets a list of inputs for the recipe. */
    const getInputs = function(rcFi, id_rc) {
      var inputs = getRecipeValue(rcFi, id_rc, "inputs");
      return (inputs == null) ? new Seq() : inputs;
    };
    exports.getInputs = getInputs;


    /* NOTE: Gets a list of outputs for the recipe. */
    const getOutputs = function(rcFi, id_rc) {
      var outputs = getRecipeValue(rcFi, id_rc, "outputs");
      return (outputs == null) ? new Seq() : outputs;
    };
    exports.getOutputs = getOutputs;


    /* NOTE: Gets a list of random inputs for the recipe. */
    const getRandInputs = function(rcFi, id_rc) {
      var inputs = getRecipeValue(rcFi, id_rc, "randInputs");
      return (inputs == null) ? new Seq() : inputs;
    };
    exports.getRandInputs = getRandInputs;


    /* NOTE: Gets a list of random outputs for the recipe. */
    const getRandOutputs = function(rcFi, id_rc) {
      var outputs = getRecipeValue(rcFi, id_rc, "randOutputs");
      return (outputs == null) ? new Seq() : outputs;
    };
    exports.getRandOutputs = getRandOutputs;


    /* NOTE: Gets a list of batch fluid inputs for the recipe. These are consumed once the building finishes crafting. */
    const getBatchFluidInputs = function(rcFi, id_rc) {
      var bfInputs = getRecipeValue(rcFi, id_rc, "bfInputs");
      return (bfInputs == null) ? new Seq() : bfInputs;
    };
    exports.getBatchFluidInputs = getBatchFluidInputs;


    /* NOTE: Gets a list of batch fluid outputs for the recipe. These are added once the building finishes crafting. */
    const getBatchFluidOutputs = function(rcFi, id_rc) {
      var bfOutputs = getRecipeValue(rcFi, id_rc, "bfOutputs");
      return (bfOutputs == null) ? new Seq() : bfOutputs;
    };
    exports.getBatchFluidOutputs = getBatchFluidOutputs;


    /* NOTE: Gets wether the optional input is required (at least one is required for the factory to run). */
    const getRequireOptional = function(rcFi, id_rc) {
      var requireOptional = getRecipeValue(rcFi, id_rc, "requireOptional");
      return (requireOptional == null) ? false : requireOptional;
    };
    exports.getRequireOptional = getRequireOptional;


    /* NOTE: Gets a list of optional item inputs for the recipe. */
    const getOptionalInputs = function(rcFi, id_rc) {
      var optInputs = getRecipeValue(rcFi, id_rc, "optInputs");
      return (optInputs == null) ? new Seq() : optInputs;
    };
    exports.getOptionalInputs = getOptionalInputs;


    /* NOTE: Gets the probability of failure. This only applys for item outputs. */
    const getFailProbability = function(rcFi, id_rc) {
      var p = getRecipeValue(rcFi, id_rc, "failProbability");
      return (p == null) ? 0.0 : p;
    };
    exports.getFailProbability = getFailProbability;


    /* NOTE: Gets a list of outputs that is used when crafting fails. */
    const getFailOutputs = function(rcFi, id_rc) {
      var outputs = getRecipeValue(rcFi, id_rc, "failOutputs");
      return (outputs == null) ? new Seq() : outputs;
    };
    exports.getFailOutputs = getFailOutputs;


    const getRawTooltip = function(rcFi, id_rc) {
      return getRecipeValue(rcFi, id_rc, "tooltip");
    };
    exports.getRawTooltip = getRawTooltip;


    /* NOTE: Gets the tooltip text that is used in configuration table. */
    const getTooltip = function(rcFi, id_rc) {
      if(Vars.headless) return "";

      var str_cat = getCategoryValue(rcFi, id_rc);

      var ct = mdl_content.getContent_nm(getIconName(rcFi, id_rc));
      var str_ct = (ct == null) ? "-" : ct.localizedName;

      var failP = getFailProbability(rcFi, id_rc);
      var str_fail = (failP > 0.0001) ? mdl_text.getStatText(Core.bundle.get("term.reind-term-chance-to-fail.name"), Strings.fixed(failP * 100.0, 1) + "%") : null;

      var tt = getRawTooltip(rcFi, id_rc);
      var str_tt = (tt == null) ? null : Core.bundle.get("info.reind-info-tt-" + tt + ".name");

      var str_fi =  "[accent]<" + str_cat + " [" + Strings.fixed(id_rc + 1.0, 0) + "]" + ">[]\n" + str_ct +
      ((str_fail == null) ? "" : ("\n\n" + str_fail)) +
      ((str_tt == null) ? "" : ("\n\n[gray]" + str_tt + "[]"));
      return str_fi;
    };
    exports.getTooltip = getTooltip;


    /* NOTE: Gets the multiplier for craft time. */
    const getTimeScale = function(rcFi, id_rc) {
      var scl = getRecipeValue(rcFi, id_rc, "timeScale");
      return (scl == null) ? 1.0 : scl;
    };
    exports.getTimeScale = getTimeScale;


    /* NOTE: Gets a script that runs when the recipe is choosen. This is called after efficiency calculation. */
    const getScript = function(rcFi, id_rc) {
      var scr = getRecipeValue(rcFi, id_rc, "script");
      return (scr == null) ? function() {} : scr;
    };
    exports.getScript = getScript;


    /* NOTE: Gets a script that runs when the recipe is choosen and the factory is active. */
    const getUpdateScript = function(rcFi, id_rc) {
      var scr = getRecipeValue(rcFi, id_rc, "updateScript");
      return (scr == null) ? function() {} : scr;
    };
    exports.getUpdateScript = getUpdateScript;


    /* NOTE: Gets a script that runs when the recipe is choosen and the factory finishes a round. */
    const getCraftScript = function(rcFi, id_rc) {
      var scr = getRecipeValue(rcFi, id_rc, "craftScript");
      return (scr == null) ? function() {} : scr;
    };
    exports.getCraftScript = getCraftScript;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_pollution.js loaded.");
});
