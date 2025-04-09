/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_recipe = require("reind/mdl/mdl_recipe");
    const mdl_text = require("reind/mdl/mdl_text");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_dialog = require("reind/db/db_dialog");
  // End


  // Part: Element


    /* <---------------- spacing ----------------> */


    const __margin = function(tb, scl) {
      if(scl == null) scl = 1.0;

      tb.marginLeft(12.0 * scl).marginRight(12.0 * scl).marginTop(15.0 * scl).marginBottom(15.0 * scl);
    };
    exports.__margin = __margin;


    /* <---------------- new line ----------------> */


    const __break = function(tb) {
      tb.add("").row();
      tb.add("").row();
    };
    exports.__break = __break;


    const __breakHalf = function(tb) {
      tb.add("").row();
    };
    exports.__breakHalf = __breakHalf;


    const __breakQuad = function(tb) {
      tb.add("").row();
      tb.add("").row();
      tb.add("").row();
      tb.add("").row();
    };
    exports.__breakQuad = __breakQuad;


    const __bar = function(tb, color, w) {
      if(color == null) color = Color.darkGray;

      if(w == null) {
        tb.image().color(color).height(4.0).pad(0.0).growX().fillX().row();
      } else {
        tb.image().color(color).width(w).height(4.0).pad(0.0).fillX().row();
      };
    };
    exports.__bar = __bar;


    const __barV = function(tb, color, h) {
      if(color == null) color = Color.darkGray;

      if(h == null) {
        return tb.image().color(color).width(4.0).pad(0.0).growY().fillY();
      } else {
        return tb.image().color(color).width(4.0).height(h).pad(0.0).fillY();
      };
    };
    exports.__barV = __barV;


    /* <---------------- text ----------------> */


    const __wrapLine = function(tb, str, align, order, padLeft) {
      if(align == null) align = Align.left;
      if(order == null) order = 0;
      if(padLeft == null) padLeft = 0.0;

      tb.add(str).center().labelAlign(align).wrap().width(mdl_ui._sizePair(null, null, order * 120.0)[0]).padLeft(padLeft).row();
    };
    exports.__wrapLine = __wrapLine;


    /* <---------------- input ----------------> */


    const __slider = function(tb, scr, min, max, step, ini) {
      if(min == null) min = 0;
      if(max == null) max = 2;
      if(step == null) step = 1;
      if(ini == null) ini = min;
      if(scr == null) return;

      tb.slider(min, max, step, ini, val => scr.call(val)).row();
    };
    exports.__slider = __slider;


    /* <---------------- content ----------------> */


    const __recipeItem = function(tb, ct, amt, p, cancelLiq) {
      if(p == null) p = 1.0;
      if(cancelLiq == null) cancelLiq = false;

      // Use {-1} as amount to hide the label
      var str = (amt < 0) ? " " : ((ct instanceof Liquid && !cancelLiq) ? Strings.autoFixed(amt * 60.0, 2) + "/s" : Strings.autoFixed(amt, 0));

      return tb.table(Styles.none, tb1 => {
        tb1.left();

        tb1.table(Styles.none, tb2 => {
          tb2.left();

          var btn = tb2.button(new TextureRegionDrawable(ct.uiIcon), 32.0, db_dialog._content(ct)).tooltip(ct.localizedName).padRight(-4.0).get();
          tb2.add(str).bottom().fontScale(0.85).style(Styles.outlineLabel);

          btn.margin(0.0);
          var btnStyle = btn.getStyle();
          btnStyle.up = Styles.none;
          btnStyle.down = Styles.none;
          btnStyle.over = Styles.flatOver;
        }).padRight(6.0);

        if(Math.abs(p - 1.0) > 0.0001) tb1.add(Strings.autoFixed(p * 100.0, 2) + "%").color(Color.gray).padRight(4.0);
      }).left().padRight(12.0).padTop(4.0).padBottom(4.0);
    };
    exports.__recipeItem = __recipeItem;


  // End


  // Part: Text
    const setHeadline = function(tb, str) {
      if(tb == null || str == null) return;

      tb.table(Tex.button, tb1 => {
        tb1.left();

        tb1.add(str);
      }).left().row();
    };
    exports.setHeadline = setHeadline;


    const setNoteStat = function(tb, str, order, padLeft) {
      if(order == null) order = 1;
      if(padLeft == null) padLeft = 0.0;
      if(tb == null || str == null) return;

      tb.row();

      tb.table(Tex.whiteui, tb1 => {
        tb1.center().setColor(Pal.darkestGray);
        __margin(tb1);

        __wrapLine(tb1, str, Align.center, order, padLeft);
      }).padTop(8.0).padBottom(8.0).growX().row();
    };
    exports.setNoteStat = setNoteStat;
  // End


  // Part: Content
    const setContentRowDisplay = function(tb, cts_gn, showOrder) {
      var arr;
      if(showOrder == null) showOrder = false;
      if(cts_gn instanceof Array) {
        arr = cts_gn;
      } else {
        arr = [cts_gn];
        showOrder = false;
      };

      var ord = 0;

      tb.row();
      __breakHalf(tb);
      arr.forEach(ct => {
        if(typeof ct == "string") ct = mdl_content._ct_nm(ct);
        if(ct != null) {
          tb.table(Tex.whiteui, tb1 => {
            tb1.left().setColor(Pal.darkestGray);
            __margin(tb1);

            if(showOrder) tb1.table(Styles.none, tb2 => {
              tb2.left();

              tb2.table(Styles.none, tb3 => {
                tb3.center();

                tb3.add("[" + Strings.fixed(ord + 1.0, 0) + "]").color(Pal.accent);
              }).width(48.0);
            }).marginRight(18.0).growY();

            tb1.table(Styles.none, tb_l => {
              tb_l.left();

              tb_l.image(ct.uiIcon).size(Vars.iconLarge).padRight(18.0);
              __barV(tb_l).padRight(18.0);
              tb_l.add(ct.localizedName);
            });

            tb1.table(Styles.none, tb_m => {}).growX();

            tb1.table(Styles.none, tb_r => {
              tb_r.left();

              tb_r.button("?", db_dialog._content(ct)).size(42.0);
            });
          }).growX().row();
          __breakHalf(tb);

          ord++;
        };
      });
    };
    exports.setContentRowDisplay = setContentRowDisplay;


    const setBatchDisplay = function(tb, batch) {
      var cap = batch.length;
      if(cap == 0) return;

      tb.row();
      tb.table(Styles.none, tb1 => {
        tb1.left();
        __margin(tb1, 0.5);

        for(let i = 0; i < cap; i += 3) {
          var itm = mdl_content._ct_gn(batch[i]);
          var amt = batch[i + 1];
          var p = batch[i + 2];

          __recipeItem(tb1, itm, amt, p).padLeft(20.0).row();
        };
      }).row();
    };
    exports.setBatchDisplay = setBatchDisplay;


    const setContentSelector = function(tb, cts, id_sel, scr, col) {
      if(col == null) col = 4;
      if(tb == null || cts == null || id_sel == null || scr == null || cts.length == 0) return;

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);

      tb.table(Tex.button, tb1 => {
        tb1.left();
        __margin(tb1);

        var cap = cts.length;
        if(cap > 0) {
          for(let i = 0, j = 0; i < cap; i++) {
            (function(i) {
              var ct = cts[i];
              var id = ct.id;

              var btn = tb1.button(Styles.none, 32.0, () => {
                (id == id_sel) ? scr.call(-1) : scr.call(id);
              }).pad(4.0).tooltip(ct.localizedName).group(btnGrp).get();

              var btnStyle = btn.getStyle();
              btnStyle.up = Styles.none;
              btnStyle.down = Styles.none;
              btnStyle.over = Styles.flatOver;
              btnStyle.checked = Styles.accentDrawable;
              btnStyle.imageUp = new TextureRegionDrawable(ct.uiIcon);
              btn.update(() => btn.setChecked(id == id_sel));
            })(i);

            if(j % col == col - 1) tb1.row();
            j++;
          };
        };
      }).row();
    };
    exports.setContentSelector = setContentSelector;
  // End


  // Part: Event
    const setTrigger = function(tb, scr, icon_gn, str_tt, size) {
      if(icon_gn == null) icon_gn = Icon.cross;
      if(size == null) size = 32.0;
      if(tb == null || scr == null) return;

      var btn = tb.button(icon_gn, size, () => scr.call()).center();
      if(str_tt != null) btn.tooltip(str_tt);
      tb.row();
    };
    exports.setTrigger = setTrigger;
  // End


  // Part: Recipe
    const setRecipeDisplay = function(tb, rcFi) {
      var cap = mdl_recipe._rcSize(rcFi);
      if(cap == 0) {
        tb.add(mdl_text._info("no-recipe-found"));
      } else {
        tb.row();

        for(let i = 0; i < cap; i++) {
          var cat = mdl_recipe._cat(rcFi, i);
          var cat_pre = (i == 0) ? null : mdl_recipe._cat(rcFi, i - 1);
          var inputs = mdl_recipe._inputs(rcFi, i);
          var outputs = mdl_recipe._outputs(rcFi, i);
          var randInputs = mdl_recipe._randInputs(rcFi, i);
          var randOutputs = mdl_recipe._randOutputs(rcFi, i);
          var bfInputs = mdl_recipe._bfInputs(rcFi, i);
          var bfOutputs = mdl_recipe._bfOutputs(rcFi, i);
          var optInputs = mdl_recipe._optInputs(rcFi, i);
          var failOutputs = mdl_recipe._failOutputs(rcFi, i);

          // Category
          if(cat != cat_pre) {
            var catVal = mdl_recipe._catVal(rcFi, i);
            tb.table(Tex.whiteui, tb1 => {
              tb1.center().setColor(Color.darkGray);
              __margin(tb1, 0.5);

              tb1.add(catVal).pad(3.0);
            }).growX().row();
          };

          // Recipe base
          tb.table(Tex.whiteui, tb1 => {
            tb1.left().setColor(Pal.darkestGray);

            // Order
            tb1.table(Styles.none, tb2 => {
              tb2.left();

              tb2.table(Styles.none, tb3 => {
                tb3.center();

                tb3.add("[" + Strings.fixed(i + 1.0, 0) + "]").color(Pal.accent);
              }).width(72.0);

              __barV(tb2, Pal.accent);
            }).marginRight(36.0).growY();

            // Input
            var arr = inputs;
            var cap1 = arr.length;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("I:").left().tooltip(mdl_text._term("input")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    if(ct == null) continue;
                    var amt = arr[j + 1];

                    __recipeItem(tb3, ct, amt);
                  };
                });
              }).marginRight(72.0);
            };

            // Random Input
            var arr = randInputs;
            var cap1 = arr.length;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("RI:").left().tooltip(mdl_text._term("random-input")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 3 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    if(ct == null) continue;
                    var amt = arr[j + 1];
                    var p = arr[j + 2];

                    __recipeItem(tb3, ct, amt, p);
                  };
                });
              }).marginRight(72.0);
            };

            // Batch Fluid Input
            var arr = bfInputs;
            var cap1 = arr.length;
            if(cap1 > 0){
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("BFI:").left().tooltip(mdl_text._term("batch-fluid-input")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    var amt = arr[j + 1];

                    __recipeItem(tb3, ct, amt, 1.0, true);
                  };
                });
              }).marginRight(72.0);
            };

            // Optional Input
            var arr = optInputs;
            var cap1 = arr.length;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("OI:").left().tooltip(mdl_text._term("optional-input")).row();
                tb2.button("?", db_dialog._optInput(arr)).size(42.0).pad(6.0);
              }).marginRight(72.0);
            };

            // Spacing
            tb1.table(Styles.none, tb_m => {}).width(160.0).growX().growY();

            // Output
            var arr = outputs;
            var cap1 = arr.length;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left()
                __margin(tb2);

                tb2.add("O:").left().tooltip(mdl_text._term("output")).row();

                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    if(ct == null) continue;
                    var amt = arr[j + 1];

                    __recipeItem(tb3, ct, amt);
                  };
                });
              }).marginRight(72.0);
            };

            // Random Output
            var arr = randOutputs;
            var cap1 = arr.length;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("RO:").left().tooltip(mdl_text._term("random-output")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 3 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    if(ct == null) continue;
                    var amt = arr[j + 1];
                    var p = arr[j + 2];

                    __recipeItem(tb3, ct, amt, p);
                  };
                });
              }).marginRight(72.0);
            };

            // Batch Fluid Output
            var arr = bfOutputs;
            var cap1 = arr.length;
            if(cap1 > 0){
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("BFO:").left().tooltip(mdl_text._term("batch-fluid-output")).row();

                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    if(ct == null) continue;
                    var amt = arr[j + 1];
                    __recipeItem(tb3, ct, amt, 1.0, true);
                  };
                });
              }).marginRight(72.0);
            };

            // Fail Output
            var arr = failOutputs;
            var cap1 = arr.length;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("FO:").left().tooltip(mdl_text._term("failed-output")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content._ct_nm(arr[j]);
                    if(ct == null) continue;
                    var amt = arr[j + 1];
                    __recipeItem(tb3, ct, amt);
                  };
                });
              }).marginRight(72.0);
            };

            // Recipe stats
            tb1.table(Styles.none, tb2 => {
              var tt = mdl_recipe._rawTooltip(rcFi, i);

              tb2.left();
              __margin(tb2);

              // Time Scale
              var scl = mdl_recipe._timeScale(rcFi, i);
              if(Math.abs(scl - 1.0) > 0.01) tb2.add(mdl_text._statText(mdl_text._term("time-required"), Strings.fixed(scl, 1) + "x")).left().row();

              // Require Optional
              var reqOpt = mdl_recipe._reqOpt(rcFi, i);
              if(reqOpt) tb2.add(mdl_text._statText(mdl_text._term("require-optional"), Core.bundle.get("yes"))).left().row();

              // Fail Probability
              var failP = mdl_recipe._failP(rcFi, i);
              if(failP > 0.0001) tb2.add(mdl_text._statText(mdl_text._term("chance-to-fail"), Strings.fixed(failP * 100.0, 1) + "%")).left().row();

              // Tooltip: Overdriven Mode
              if(tt == "overdriven") tb2.add(mdl_text._info("tt-overdriven")).left().row();
            }).marginRight(72.0);
          }).growX().row();
        };
      };
    };
    exports.setRecipeDisplay = setRecipeDisplay;


    const setRecipeSelector = function(tb, rcFi, id_rc, b, scr, col) {
      if(col == null) col = 4;
      if(tb == null || rcFi == null || id_rc == null || scr == null) return;

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);

      var cap = mdl_recipe._rcSize(rcFi);
      if(cap == 0) return;

      tb.button("?", db_dialog._content(b.block)).left().size(42.0).row();

      tb.table(Tex.button, tb1 => {
        tb1.left();

        for(let i = 0, j = 0; i < cap; i++) {
          (function(i) {
            var cat = mdl_recipe._cat(rcFi, i);
            var cat_pre = (i == 0) ? null : mdl_recipe._cat(rcFi, i - 1);
            if(cat != cat_pre) {
              j = 0;
              if(i != 0) {
                __break(tb1);
              };
            };

            var tt = mdl_recipe._rawTooltip(rcFi, i);
            var tooltip = mdl_recipe._tooltip(rcFi, i);
            var btn = tb1.button(Tex.pane, 32.0, () => {
              (i == id_rc) ? scr.call(0) : scr.call(i);
            }).pad(4.0).tooltip(tooltip).group(btnGrp).get();

            var btnStyle = btn.getStyle();
            btnStyle.up = Styles.none;
            btnStyle.down = Styles.none;
            btnStyle.over = Styles.flatOver;
            btnStyle.checked = Styles.accentDrawable;
            btnStyle.imageUp = (tt == "overdriven") ? mdl_recipe._icon(rcFi, i).tint(Color.red) : mdl_recipe._icon(rcFi, i);
            btn.update(() => btn.setChecked(i == id_rc));
          })(i);

          if(j % col == col - 1) tb1.row();
          j++;
        };
      }).row();
    };
    exports.setRecipeSelector = setRecipeSelector;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_table.js loaded.");
});
