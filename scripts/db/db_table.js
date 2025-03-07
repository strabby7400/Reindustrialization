/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_table = require("reind/mdl/mdl_table");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Content
    /* NOTE: Displays the name of currently selected content. */
    const __contentSelected = function(tb, tp_ct, id_sel) {
      var ct_sel = mdl_content.getContent_id(tp_ct, id_sel);
      var str_ct = (ct_sel == null) ? "-" : ct_sel.localizedName;

      mdl_table.setHeadline(tb, Core.bundle.get("term.reind-term-selected.name") + ": " + str_ct);
    };
    exports.__contentSelected = __contentSelected;


    /* NOTE: A selector UI for Reind contents. */
    const __contentSelector = function(tb, tp_ct, id_sel, scr, col) {
      var li_ct = new Seq();
      switch(tp_ct) {
        case "item" :
          Vars.content.items().each(itm => {
            if(!itm.hidden && mdl_content.isReind(itm) && !mdl_content.isVirt(itm)) li_ct.add(itm);
          });
          break;
        case "fluid" :
          Vars.content.liquids().each(liq => {
            if(!liq.hidden && mdl_content.isReind(liq) && !mdl_content.isEffc(liq)) li_ct.add(liq);
          });
          break;
      };

      mdl_table.setContentSelector(tb, li_ct, id_sel, scr, col);
    };
    exports.__contentSelector = __contentSelector;
  // End


  // Part: Special
    const __timeController = function(tb, b) {
      var delta_max = glb_vars.time_maxTimeDelta / 0.5 - 1.0;
      var delta_cur = Time.delta / 0.5 - 1.0;

      mdl_table.setHeadline(tb, Core.bundle.get("term.reind-term-time-controller.name"));
      tb.row();

      tb.table(Tex.button, tb1 => {
        mdl_table.setSlider(tb1, function() {
          var val = (this + 1.0) * 0.5;
          Call.tileConfig(Vars.player, b, new Vec2(val, 0));
        }, 0.0, delta_max, 1.0, delta_cur);
      });
    };
    exports.__timeController = __timeController;
  // End
