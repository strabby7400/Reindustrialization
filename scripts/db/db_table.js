/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Config
    const __contentSelected_liquid = function(tb, id) {
      var liq = Vars.content.liquids().get(id);
      var nm_liq = (liq == Liquids.water) ? "-" : liq.localizedName;

      tb.table(Tex.button, tb_rt => {
        tb_rt.add(Core.bundle.get("term.reind-term-selected.name") + " : " + nm_liq).update(tb_temp => {
          tb_temp.setText(Core.bundle.get("term.reind-term-selected.name") + " : " + nm_liq);
        });
      }).left();
    };
    exports.__contentSelected_liquid = __contentSelected_liquid;


    const __contentSelector_liquid = function(tb, id, btnGrp, scr, col) {
      if(col == null) col = 4;

      tb.table(Tex.button, tb_rt => {
        var list_liq = Vars.content.liquids();
        for(let i = 0, j = 0; i < list_liq.size; i++) {
          if(list_liq.get(i).hidden || !list_liq.get(i).name.includes("reind-") || mdl_content.isEffc(list_liq.get(i))) continue;

          (function(i) {
            var btn = tb_rt.button(Tex.pane, 32.0, () => {
              (i == id) ? (scr.call(0)) : (scr.call(i));
            }).pad(4.0).tooltip(list_liq.get(i).localizedName).group(btnGrp).get();

            btn.getStyle().up = Styles.black3;
            btn.getStyle().down = Styles.black3;
            btn.getStyle().over = Styles.flatOver;
            btn.getStyle().checked = Styles.accentDrawable;
            btn.getStyle().imageUp = new TextureRegionDrawable(list_liq.get(i).uiIcon);
            btn.update(() => btn.setChecked(i == id));
          })(i);
          if(j % col == col - 1) tb_rt.row();
          j++;
        };
      });
    };
    exports.__contentSelector_liquid = __contentSelector_liquid;
  // End
