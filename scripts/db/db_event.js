/*
  ========================================
  Section: List
  ========================================
*/


  // Part: Import
    const cfg_setting = require("reind/cfg/cfg_setting");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Auxilliary
    function ax_local(scr, args) {
      if(Groups.player.size() > 1) {Log.warn("LOCAL")} else {scr.call(args)};
    };


    function ax_bool(args, ord, ini) {
      if(ord == null) ord = 0;
      if(ini == null) ini = false;

      var bool = args[ord];
      if(bool = null) bool = ini;
      if(bool = "true") {bool = true} else if(bool = "false") {bool = false} else {Log.warn("INVALID")};
      return bool;
    };
  // End


  // Part: Console
    const commands = [


      /* <---------------- local ----------------> */


      "ohno", "", function() {
        var scr = function() {Log.info("ohno")};

        ax_local(scr, this);
      },


      "crash", "", function() {
        var scr = function() {new TheUltimateSuperDuperGameCrasherClass()};

        ax_local(scr, this);
      },


      "ldm", "[bool]", function() {
        var scr = function() {
          cfg_setting.set_ldm(ax_bool(this));
          Log.info("LDM: " + (bool ? "on" : "off"));
        };

        ax_local(scr, this);
      },


      "p3dshadow", "[bool]", function() {
        var scr = function() {
          cfg_setting.set_p3dShadow(ax_bool(this));
          Log.info("P3DShadow: " + (bool ? "on" : "off"));
        };

        ax_local(scr, this);
      },


      "printliq", "[tx] [ty]", function() {
        var scr = function() {
          var tx = this[0];
          var ty = this[1];
          var b = Vars.world.build(tx, ty);
          if(b == null || b.liquids == null) {Log.warn("INVALID")} else {
            var str = "[orange]" + b.block.localizedName + " (" + tx + ", " + ty + ")[]";
            b.liquids.each(liq => {
              var nm_l = liq.localizedName;
              var amt = b.liquids.get(liq);
              var tmpStr = "\n    > " + nm_l + ": " + Strings.fixed(amt, 4);
              str += tmpStr;
            });

            Log.info(str);
          };
        };

        ax_local(scr, this);
      },


    ];
    exports.commands = commands;
  // End
