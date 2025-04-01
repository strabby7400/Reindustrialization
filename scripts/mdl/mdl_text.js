/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Space
    const li_removeSpace = new Seq([
      "zh_CN",
      "zh_TW",
      "ja",
      "ko",
    ]);


    /*
     * NOTE:
     *
     * Adds a space character base on current language.
     */
    const _space = function() {
      var lang = Core.settings.getString("locale");

      if(li_removeSpace.contains(lang)) return "";

      return " ";
    };
    exports._space = _space;
  // End


  // Part: Condition
    const includes_ex = function() {
      var nm_tg;
      for(let i = 0; i < arguments.length; i++) {
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


  // Part: Stat
    const _statText = function(str_tg, str_val, str_unit) {
      var str1 = (str_tg == null) ? "" : ("[lightgray]" + str_tg + ": []");
      var str2 = (str_val == null) ? "" : str_val;
      var str3 = (str_unit == null) ? "" : (" " + str_unit);
      var str_fi = str1 + str2 + str3;

      return str_fi;
    };
    exports._statText = _statText;


    const _tagText = function(li_str) {
      var str_fi = "";
      li_str.each(str => str_fi += str + "; ");

      if(str_fi == "") return null;
      return str_fi;
    };
    exports._tagText = _tagText;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_text.js loaded.");
});
