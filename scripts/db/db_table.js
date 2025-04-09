/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const cfg_update = require("reind/cfg/cfg_update");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_math = require("reind/mdl/mdl_math");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");
  // End


  // Part: Control
    const __toggle = function(tb, b, bool, icon_gn) {
      var icon;
      if(icon_gn == null) icon = Icon.cancel;
      if(icon_gn == "eye") icon = bool ? Icon.eyeOff : Icon.eye;
      if(icon_gn == "lock") icon = bool ? Icon.lock : Icon.lockOpen;

      tb.button(icon, 24.0, run(() => {
        Call.tileConfig(Vars.player, b, new Vec2(-2, Number(bool.flip())));
        b.deselect();
      })).left().row();
    };
    exports.__toggle = __toggle;
  // End


  // Part: Content
    const __contentSelected = function(tb, tp_ct, id_sel) {
      var ct_sel = mdl_content._ct_id(tp_ct, id_sel);
      var str_ct = (ct_sel == null) ? "-" : ct_sel.localizedName;

      mdl_table.setHeadline(tb, mdl_text._info("selected") + " " + str_ct);
    };
    exports.__contentSelected = __contentSelected;


    const __contentSelector = function(tb, tp_ct, id_sel, scr, col) {
      var cts = [];

      switch(tp_ct) {
        case "item" :
          Vars.content.items().each(itm => {
            if(!itm.hidden && mdl_content.isReind(itm) && !mdl_content.isVirt(itm)) arr.push(itm);
          });
          break;
        case "fluid" :
          Vars.content.liquids().each(liq => {
            if(!liq.hidden && mdl_content.isReind(liq) && !mdl_content.isEffc(liq)) arr.push(liq);
          });
          break;
      };

      mdl_table.setContentSelector(tb, cts, id_sel, scr, col);
    };
    exports.__contentSelector = __contentSelector;
  // End


  // Part: Special
    const __timeController = function(tb, b) {
      var vec2 = new Vec2();

      var valMax = VAR.time_maxTimeDelta * 4.0 - 1.0;
      var valCur = cfg_update.timeMtp * 4.0 - 1.0;

      mdl_table.setHeadline(tb, mdl_text._term("time-controller"));

      tb.table(Tex.button, tb1 => {
        var scr = function() {
          cfg_update.set_timeMtp((this + 1.0) * 0.25);
          Call.tileConfig(Vars.player, b, vec2.set(cfg_update.timeMtp, -2));
        };

        mdl_table.__slider(tb1, scr, 0, valMax, 1, valCur);
      });
    };
    exports.__timeController = __timeController;
  // End
