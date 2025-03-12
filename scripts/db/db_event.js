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


  // Part: Console
    const li_commands = new Seq([

      /* <---------------- local ----------------> */

      "ohno", "", function() {
        if(Groups.player.size() > 1) {
          Log.warn("LOCAL");
        } else {
          Log.info("ohno");
        };
      },

      "crash", "", function() {
        if(Groups.player.size() > 1) {
          Log.warn("LOCAL");
        } else {
          new TheUltimateSuperDuperGameCrasherClass();
        };
      },

      "ldm", "[bool]", function() {
        if(Groups.player.size() > 1) {
          Log.warn("LOCAL");
        } else {
          var bool = this[0];
          if(bool == null) bool = "true";
          if(bool == "true") {bool = true}
          else if(bool == "false") {bool = false}
          else {Log.warn("INVALID")};
          if(typeof bool != "boolean") return;
          cfg_setting.set_ldm(bool);
          Log.info("LDM: " + (bool ? "on" : "off"));
        };
      },

      "p3dshadow", "[bool]", function() {
        if(Groups.player.size() > 1) {
          Log.warn("LOCAL");
        } else {
          var bool = this[0];
          if(bool == null) bool = "true";
          if(bool == "true") {bool = true}
          else if(bool == "false") {bool = false}
          else {Log.warn("INVALID")};
          if(typeof bool != "boolean") return;
          cfg_setting.set_p3dShadow(bool);
          Log.info("P3dShadow: " + (bool ? "on" : "off"));
        };
      },

      "printliq", "[tx] [ty]", function() {
        if(Groups.player.size() > 1) {
          Log.warn("LOCAL");
        } else {
          var tx = this[0];
          var ty = this[1];
          var b = Vars.world.build(tx, ty);
          if(b == null || b.liquids == null) {
            Log.warn("INVALID");
          } else {
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
      },

    ]);
    exports.commands = li_commands;
  // End
