/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: Text
    const setHeadline = function(tb, str, style) {
      if(style == null) style = Tex.button;
      if(tb == null || str == null) return;

      tb.table(style, tb1 => {
        tb1.add(str).update(tb2 => tb2.setText(str));
      }).left();
    };
    exports.setHeadline = setHeadline;
  // End


  // Part: Content
    const setContentSelector = function(tb, li_ct, id_sel, scr, col, style) {
      if(col == null) col = 4;
      if(style == null) style = Tex.button;
      if(tb == null || li_ct == null || id_sel == null || scr == null || li_ct.size == 0) return;

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);

      tb.table(style, tb1 => {
        for(let i = 0, j = 0; i < li_ct.size; i++) {
          (function(i) {
            var ct = li_ct.get(i);
            var id = ct.id;

            var btn = tb1.button(Tex.pane, 32.0, () => {
              (id == id_sel) ? scr.call(-1) : scr.call(id);
            }).pad(4.0).tooltip(ct.localizedName).group(btnGrp).get();

            var btnStyle = btn.getStyle();
            btnStyle.up = Styles.black3;
            btnStyle.down = Styles.black3;
            btnStyle.over = Styles.flatOver;
            btnStyle.checked = Styles.accentDrawable;
            btnStyle.imageUp = new TextureRegionDrawable(ct.uiIcon);
            btn.update(() => btn.setChecked(id == id_sel));
          })(i);

          if(j % col == col - 1) tb1.row();
          j++;
        };
      });
    };
    exports.setContentSelector = setContentSelector;
  // End


  // Part: Event
    const setTrigger = function(tb, scr, icon, str_tt, style, size) {
      if(icon == null) icon = Icon.cross;
      if(style == null) style = Tex.button;
      if(size == null) size = 32.0;
      if(tb == null || scr == null) return;

      var btn = tb.button(icon, size, () => {
        scr.call();
      });
      if(str_tt != null) btn.tooltip(str_tt);
    };
    exports.setTrigger = setTrigger;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_table.js loaded.");
});
