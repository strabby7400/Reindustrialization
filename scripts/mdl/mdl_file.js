/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Directory
    const _root = function(nm_mod) {
      if(nm_mod == null) nm_mod = "reind";

      return Vars.mods.getMod(nm_mod).root;
    };
    exports._root = _root;


    const _script = function(nm_mod) {
      if(nm_mod == null) nm_mod = "reind";

      return _root(nm_mod).child("scripts");
    };
    exports._script = _script;


    const _fi = function(dir, nmFi) {
      return dir.child(nmFi);
    };
    exports._fi = _fi;
  // End


  // Part: Name
    const isReindName = function(nm) {
      return /\S+-reind-\S+/.test(nm) || nm.startsWith("reind-");
    };
    exports.isReindName = isReindName;


    /*
     * NOTE:
     *
     * Removes the mod prefix from {nm}.
     * If {noBar} is {true}, {"-"} will be deleted and the following letter will be capitalized.
     * Use {ids_space} to convert {"-"} to {"_"}.
     * Example: "test-reind-item-misc-test-item" => "itemMisc_testItem" ({noBar = true, ids_space = [1]}).
     */
    const parseName = function(nm, noBar, ids_space) {
      if(noBar == null) noBar = false;

      var val = "";

      var cap = nm.length;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i++) {
        if(nm.slice(i, i + 6) == "reind-") val = nm.slice(i + 6);
      };

      if(noBar) {
        var tmpVal = "";
        var shouldUpper = false;
        var id = 0;
        var cap1 = val.length;
        if(cap1 == 0) return val;
        for(let i = 0; i < cap1; i++) {
          if(val[i] != "-") {
            if(!shouldUpper) {
              tmpVal += val[i];
            } else {
              tmpVal += val[i].toUpperCase();
              shouldUpper = false;
            };
          } else {
            if(ids_space == null) {
              shouldUpper = true;
            } else {
              if(!ids_space.includes(id)) {shouldUpper = true} else {
                tmpVal += "_";
              };
            };

            id++;
          };
        };

        val = tmpVal;
      };

      return val;
    };
    exports.parseName = parseName;
  // End
