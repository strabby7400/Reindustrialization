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
    const _rc = function(rcFi, id_rc) {
      if(rcFi == null || id_rc == null) return;

      var li_rc = rcFi.rc["recipes"];
      if(id_rc >= li_rc.size) return;

      return li_rc.get(id_rc);
    };
    exports._rc = _rc;


    const _rcSize = function(rcFi) {
      if(rcFi == null) return;

      return rcFi.rc["recipes"].size;
    };
    exports._rcSize = _rcSize;


    const _rcVal = function(rcFi, id_rc, str_val) {
      var rc = _rc(rcFi, id_rc);
      return rc[str_val];
    };
    exports._rcVal = _rcVal;


    const _iconNm = function(rcFi, id_rc) {
      return _rcVal(rcFi, id_rc, "icon");
    };
    exports._iconNm = _iconNm;


    const _icon = function(rcFi, id_rc) {
      var ct = mdl_content._ct_nm(_iconNm(rcFi, id_rc));
      return (ct == null) ? null : new TextureRegionDrawable(ct.uiIcon);
    };
    exports._icon = _icon;


    const _cat = function(rcFi, id_rc) {
      return _rcVal(rcFi, id_rc, "category");
    };
    exports._cat = _cat;


    const _catVal = function(rcFi, id_rc) {
      var cat = _cat(rcFi, id_rc);
      return (Vars.headless || cat == null) ? "UNDEFINED" : Core.bundle.get("term.reind-term-" + cat + ".name");
    };
    exports._catVal = _catVal;


    const _inputs = function(rcFi, id_rc) {
      var inputs = _rcVal(rcFi, id_rc, "inputs");
      return (inputs == null) ? new Seq() : inputs;
    };
    exports._inputs = _inputs;


    const _outputs = function(rcFi, id_rc) {
      var outputs = _rcVal(rcFi, id_rc, "outputs");
      return (outputs == null) ? new Seq() : outputs;
    };
    exports._outputs = _outputs;


    const _randInputs = function(rcFi, id_rc) {
      var inputs = _rcVal(rcFi, id_rc, "randInputs");
      return (inputs == null) ? new Seq() : inputs;
    };
    exports._randInputs = _randInputs;


    const _randOutputs = function(rcFi, id_rc) {
      var outputs = _rcVal(rcFi, id_rc, "randOutputs");
      return (outputs == null) ? new Seq() : outputs;
    };
    exports._randOutputs = _randOutputs;


    const _bfInputs = function(rcFi, id_rc) {
      var bfInputs = _rcVal(rcFi, id_rc, "bfInputs");
      return (bfInputs == null) ? new Seq() : bfInputs;
    };
    exports._bfInputs = _bfInputs;


    const _bfOutputs = function(rcFi, id_rc) {
      var bfOutputs = _rcVal(rcFi, id_rc, "bfOutputs");
      return (bfOutputs == null) ? new Seq() : bfOutputs;
    };
    exports._bfOutputs = _bfOutputs;


    const _reqOpt = function(rcFi, id_rc) {
      var reqOpt = _rcVal(rcFi, id_rc, "requireOptional");
      return (reqOpt == null) ? false : reqOpt;
    };
    exports._reqOpt = _reqOpt;


    const _optInputs = function(rcFi, id_rc) {
      var optInputs = _rcVal(rcFi, id_rc, "optInputs");
      return (optInputs == null) ? new Seq() : optInputs;
    };
    exports._optInputs = _optInputs;


    const _failP = function(rcFi, id_rc) {
      var p = _rcVal(rcFi, id_rc, "failProbability");
      return (p == null) ? 0.0 : p;
    };
    exports._failP = _failP;


    const _failOutputs = function(rcFi, id_rc) {
      var outputs = _rcVal(rcFi, id_rc, "failOutputs");
      return (outputs == null) ? new Seq() : outputs;
    };
    exports._failOutputs = _failOutputs;


    const _rawTooltip = function(rcFi, id_rc) {
      return _rcVal(rcFi, id_rc, "tooltip");
    };
    exports._rawTooltip = _rawTooltip;


    const _tooltip = function(rcFi, id_rc) {
      if(Vars.headless) return "";

      var str_cat = _catVal(rcFi, id_rc);

      var ct = mdl_content._ct_nm(_iconNm(rcFi, id_rc));
      var str_ct = (ct == null) ? "-" : ct.localizedName;

      var failP = _failP(rcFi, id_rc);
      var str_fail = (failP > 0.0001) ? mdl_text._statText(Core.bundle.get("term.reind-term-chance-to-fail.name"), Strings.fixed(failP * 100.0, 1) + "%") : null;

      var tt = _rawTooltip(rcFi, id_rc);
      var str_tt = (tt == null) ? null : Core.bundle.get("info.reind-info-tt-" + tt + ".name");

      var str_fi =  "[accent]<" + str_cat + " [" + Strings.fixed(id_rc + 1.0, 0) + "]" + ">[]\n" + str_ct +
      ((str_fail == null) ? "" : ("\n\n" + str_fail)) +
      ((str_tt == null) ? "" : ("\n\n[gray]" + str_tt + "[]"));
      return str_fi;
    };
    exports._tooltip = _tooltip;


    const _timeScale = function(rcFi, id_rc) {
      var scl = _rcVal(rcFi, id_rc, "timeScale");
      return (scl == null) ? 1.0 : scl;
    };
    exports._timeScale = _timeScale;


    const _script = function(rcFi, id_rc) {
      var scr = _rcVal(rcFi, id_rc, "script");
      return (scr == null) ? function() {} : scr;
    };
    exports._script = _script;


    const _updateScript = function(rcFi, id_rc) {
      var scr = _rcVal(rcFi, id_rc, "updateScript");
      return (scr == null) ? function() {} : scr;
    };
    exports._updateScript = _updateScript;


    const _craftScript = function(rcFi, id_rc) {
      var scr = _rcVal(rcFi, id_rc, "craftScript");
      return (scr == null) ? function() {} : scr;
    };
    exports._craftScript = _craftScript;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_pollution.js loaded.");
});
