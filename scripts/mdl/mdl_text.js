/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Space
    /*
     * NOTE:
     *
     * Adds a space character base on current language.
     */
    const arr_noSpace = [
      "zh_CN",
      "zh_TW",
      "ja",
      "ko",
    ];


    const _space = function() {
      var lang = Core.settings.getString("locale");

      return arr_noSpace.includes(lang) ? "" : " ";
    };
    exports._space = _space;
  // End


  // Part: Condition
    const includes_ex = function() {
      var nm_tg;
      var cap = arguments.length;
      for(let i = 0; i < cap; i++) {
        if(i == 0) {
          nm_tg = arguments[i];
        } else {
          if(nm_tg.includes(arguments[i])) return true;
        };
      };

      return false;
    };
    exports.includes_ex = includes_ex;
  // End


  // Part: Bundle
    const _info = function(bundle) {
      return Vars.headless ? "" : Core.bundle.get("info.reind-info-" + bundle + ".name");
    };
    exports._info = _info;


    const _infoDes = function(bundle) {
      return Vars.headless ? "" : Core.bundle.get("info.reind-info-" + bundle + ".description");
    };
    exports._infoDes = _infoDes;


    const _term = function(bundle) {
      return Vars.headless ? "" : Core.bundle.get("term.reind-term-" + bundle + ".name");
    };
    exports._term = _term;
  // End


  // Part: Stat
    const _statText = function(str_tg, str_val, str_unit) {
      var str1 = (str_tg == null) ? "" : ("[lightgray]" + str_tg + ": []");
      var str2 = (str_val == null) ? "" : str_val;
      var str3 = (str_unit == null) ? "" : (" " + str_unit);
      var str_fi = str1 + str2 + str3;

      return str_fi;
    };
    exports._statText = _statText;


    const _statMtpText = function(str_tg, mtp, rev) {
      if(rev == null) rev = false;

      return _statText(
        str_tg,
        (mtp < 1.0 ? (rev ? "[green]" : "[red]") : (rev ? "[red]" : "[green]")) + Strings.autoFixed(mtp * 100.0, 2) + "%[]",
      );
    };
    exports._statMtpText = _statMtpText;


    const _tagText = function(strs) {
      var str_fi = "";
      strs.forEach(str => str_fi += str + "; ");

      if(str_fi == "") return null;
      return str_fi;
    };
    exports._tagText = _tagText;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_text.js loaded.");
});
