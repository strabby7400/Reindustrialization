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

      return tb.marginLeft(12.0 * scl).marginRight(12.0 * scl).marginTop(15.0 * scl).marginBottom(15.0 * scl);
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
        return tb.image().color(color).height(4.0).pad(0.0).growX().fillX().row();
      } else {
        return tb.image().color(color).width(w).height(4.0).pad(0.0).fillX().row();
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


    const __wrapLine = function(tb, str, align, order) {
      if(align == null) align = Align.left;
      if(order == null) order = 0;

      return tb.add(str).center().labelAlign(align).wrap().width(mdl_ui.getSizePair(null, null, order * 120.0)[0]).row();
    };
    exports.__wrapLine = __wrapLine;


    /* <---------------- content ----------------> */


    const __recipeItem = function(tb, ct, amt, p, cancelLiq) {
      if(p == null) p = 1.0;
      if(cancelLiq == null) cancelLiq = false;

      var str = (ct instanceof Liquid && !cancelLiq) ? Strings.autoFixed(amt * 60.0, 2) + "/s" : Strings.autoFixed(amt, 0);

      return tb.table(Styles.none, tb1 => {
        tb1.left();

        tb1.table(Styles.none, tb2 => {
          tb2.left();

          tb2.image(ct.uiIcon).tooltip(ct.localizedName).padRight(-4.0);
          tb2.add(str).bottom().fontScale(0.85).style(Styles.outlineLabel);
        }).padRight(6.0);

        if(Math.abs(p - 1.0) > 0.0001) tb1.add(Strings.autoFixed(p * 100.0, 2) + "%").color(Color.gray).padRight(4.0);
      }).padRight(12.0);
    };
    exports.__recipeItem = __recipeItem;


  // End


  // Part: Text
    const setHeadline = function(tb, str) {
      if(tb == null || str == null) return;

      tb.table(Tex.button, tb1 => {
        tb1.left();

        tb1.add(str);
      }).left();
    };
    exports.setHeadline = setHeadline;
  // End


  // Part: Content
    const setContentRowDisplay = function(tb, li_ct, showOrder) {
      if(showOrder == null) showOrder = false;
      if(li_ct instanceof UnlockableContent) {
        li_ct = new Seq([li_ct]);
        showOrder = false;
      };

      var ord = 0;

      tb.row();
      __breakHalf(tb);
      li_ct.each(ct => {
        if(typeof ct == "string") ct = mdl_content.getContent_nm(ct);
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


    const setContentSelector = function(tb, li_ct, id_sel, scr, col) {
      if(col == null) col = 4;
      if(tb == null || li_ct == null || id_sel == null || scr == null || li_ct.size == 0) return;

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);

      tb.table(Tex.button, tb1 => {
        tb1.left();
        __margin(tb1);

        var li = li_ct;
        var cap = li.size;
        if(cap > 0) {
          for(let i = 0, j = 0; i < cap; i++) {
            (function(i) {
              var ct = li.get(i);
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
    const setTrigger = function(tb, scr, icon, str_tt, size) {
      if(icon == null) icon = Icon.cross;
      if(size == null) size = 32.0;
      if(tb == null || scr == null) return;

      var btn = tb.button(icon, size, () => scr.call()).center();
      if(str_tt != null) btn.tooltip(str_tt);
    };
    exports.setTrigger = setTrigger;


    const setSlider = function(tb, scr, sld_min, sld_max, sld_step, sld_ini) {
      if(sld_min == null) sld_min = 0.0;
      if(sld_max == null) sld_max = 1.0;
      if(sld_step == null) sld_step = 1.0;
      if(sld_ini == null) sld_ini = 0.0;
      if(tb == null || scr == null) return;

      tb.slider(sld_min, sld_max, sld_step, sld_ini, val => scr.call(val));
    };
    exports.setSlider = setSlider;
  // End


  // Part: Recipe
    const setRecipeDisplay = function(tb, rcFi) {
      var cap = mdl_recipe.getRecipeSize(rcFi);
      if(cap == 0) {
        tb.add(Core.bundle.get("info.reind-info-no-recipe-found.name"));
      } else {
        tb.row();

        for(let i = 0; i < cap; i++) {
          var cat = mdl_recipe.getCategory(rcFi, i);
          var cat_pre = (i == 0) ? null : mdl_recipe.getCategory(rcFi, i - 1);
          var inputs = mdl_recipe.getInputs(rcFi, i);
          var outputs = mdl_recipe.getOutputs(rcFi, i);
          var randInputs = mdl_recipe.getRandInputs(rcFi, i);
          var randOutputs = mdl_recipe.getRandOutputs(rcFi, i);
          var bfInputs = mdl_recipe.getBatchFluidInputs(rcFi, i);
          var bfOutputs = mdl_recipe.getBatchFluidOutputs(rcFi, i);
          var optInputs = mdl_recipe.getOptionalInputs(rcFi, i);
          var failOutputs = mdl_recipe.getFailOutputs(rcFi, i);

          // Category
          if(cat != cat_pre) {
            var catVal = mdl_recipe.getCategoryValue(rcFi, i);
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
            var li = inputs;
            var cap1 = li.size;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("I:").left().tooltip(Core.bundle.get("term.reind-term-input.name")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    if(ct == null) continue;
                    var amt = li.get(j + 1);

                    __recipeItem(tb3, ct, amt);
                  };
                });
              }).marginRight(72.0);
            };

            // Random Input
            var li = randInputs;
            var cap1 = li.size;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("RI:").left().tooltip(Core.bundle.get("term.reind-term-random-input.name")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 3 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    if(ct == null) continue;
                    var amt = li.get(j + 1);
                    var p = li.get(j + 2);

                    __recipeItem(tb3, ct, amt, p);
                  };
                });
              }).marginRight(72.0);
            };

            // Batch Fluid Input
            var li = bfInputs;
            var cap1 = li.size;
            if(cap1 > 0){
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("BFI:").left().tooltip(Core.bundle.get("term.reind-term-batch-fluid-input.name")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    var amt = li.get(j + 1);

                    __recipeItem(tb3, ct, amt, 1.0, true);
                  };
                });
              }).marginRight(72.0);
            };

            // Optional Input
            var li = optInputs;
            var cap1 = li.size;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("OI:").left().tooltip(Core.bundle.get("term.reind-term-optional-input.name")).row();
                tb2.button("?", db_dialog._optInput(optInputs)).size(42.0).pad(6.0);
              }).marginRight(72.0);
            };

            // Spacing
            tb1.table(Styles.none, tb_m => {}).width(160.0).growX().growY();

            // Output
            var li = outputs;
            var cap1 = li.size;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left()
                __margin(tb2);

                tb2.add("O:").left().tooltip(Core.bundle.get("term.reind-term-output.name")).row();

                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    if(ct == null) continue;
                    var amt = li.get(j + 1);

                    __recipeItem(tb3, ct, amt);
                  };
                });
              }).marginRight(72.0);
            };

            // Random Output
            var li = randOutputs;
            var cap1 = li.size;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("RO:").left().tooltip(Core.bundle.get("term.reind-term-random-output.name")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 3 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    if(ct == null) continue;
                    var amt = li.get(j + 1);
                    var p = li.get(j + 2);

                    __recipeItem(tb3, ct, amt, p);
                  };
                });
              }).marginRight(72.0);
            };

            // Batch Fluid Output
            var li = bfOutputs;
            var cap1 = li.size;
            if(cap1 > 0){
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("BFI:").left().tooltip(Core.bundle.get("term.reind-term-batch-fluid-input.name")).row();

                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    if(ct == null) continue;
                    var amt = li.get(j + 1);
                    __recipeItem(tb3, ct, amt, 1.0, true);
                  };
                });
              }).marginRight(72.0);
            };

            // Fail Output
            var li = failOutputs;
            var cap1 = li.size;
            if(cap1 > 0) {
              tb1.table(Styles.none, tb2 => {
                tb2.left();
                __margin(tb2);

                tb2.add("FO:").left().tooltip(Core.bundle.get("term.reind-term-failed-output.name")).row();
                tb2.table(Styles.none, tb3 => {
                  for(let j = 0; j < cap1; j++) {
                    if(j % 2 != 0) continue;

                    var ct = mdl_content.getContent_nm(li.get(j));
                    if(ct == null) continue;
                    var amt = li.get(j + 1);
                    __recipeItem(tb3, ct, amt);
                  };
                });
              }).marginRight(72.0);
            };

            // Recipe stats
            tb1.table(Styles.none, tb2 => {
              var tt = mdl_recipe.getRawTooltip(rcFi, i);

              tb2.left();
              __margin(tb2);

              // Time Scale
              var scl = mdl_recipe.getTimeScale(rcFi, i);
              if(Math.abs(scl - 1.0) > 0.01) tb2.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-time-required.name"), Strings.fixed(scl, 1) + "x")).left().row();

              // Require Optional
              var requireOptional = mdl_recipe.getRequireOptional(rcFi, i);
              if(requireOptional) tb2.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-require-optional.name"), Core.bundle.get("yes"))).left().row();

              // Fail Probability
              var failP = mdl_recipe.getFailProbability(rcFi, i);
              if(failP > 0.0001) tb2.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-chance-to-fail.name"), Strings.fixed(failP * 100.0, 1) + "%")).left().row();

              // Tooltip: Overdriven Mode
              if(tt == "overdriven") tb2.add(Core.bundle.get("info.reind-info-tt-overdriven.name")).left().row();
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

      var cap = mdl_recipe.getRecipeSize(rcFi);
      if(cap == 0) return;

      tb.button("?", db_dialog._content(b.block)).left().size(42.0);
      tb.row();
      tb.table(Tex.button, tb1 => {
        tb1.left();

        for(let i = 0, j = 0; i < cap; i++) {
          (function(i) {
            var cat = mdl_recipe.getCategory(rcFi, i);
            var cat_pre = (i == 0) ? null : mdl_recipe.getCategory(rcFi, i - 1);
            if(cat != cat_pre) {
              j = 0;
              if(i != 0) {
                __breakHalf(tb1);
              };
            };

            var tooltip = mdl_recipe.getTooltip(rcFi, i);
            var btn = tb1.button(Tex.pane, 32.0, () => {
              (i == id_rc) ? scr.call(0) : scr.call(i);
            }).pad(4.0).tooltip(tooltip).group(btnGrp).get();

            var btnStyle = btn.getStyle();
            btnStyle.up = Styles.black3;
            btnStyle.down = Styles.black3;
            btnStyle.over = Styles.flatOver;
            btnStyle.checked = Styles.accentDrawable;
            btnStyle.imageUp = mdl_recipe.getIcon(rcFi, i);
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
