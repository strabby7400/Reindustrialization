/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_recipe = require("reind/mdl/mdl_recipe");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_dialog = require("reind/db/db_dialog");
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
    const setContentRowDisplay = function(tb, li_ct) {
      if(li_ct instanceof UnlockableContent) li_ct = new Seq([li_ct]);

      tb.row();
      tb.add("").row();
      li_ct.each(ct => {
        tb.table(Tex.whiteui, tb1 => {
          tb1.setColor(Pal.darkestGray);
          tb1.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
          tb1.left();

          tb1.image(ct.uiIcon).left().size(Vars.iconLarge).padRight(15.0);
          tb1.add(ct.localizedName).left().padRight(64.0);
          tb1.button("?", db_dialog._content(ct)).left().size(42.0);
        }).left().growX().row();
        tb.add("").row();
      });
    };
    exports.setContentRowDisplay = setContentRowDisplay;


    const setContentSelector = function(tb, li_ct, id_sel, scr, col, style) {
      if(col == null) col = 4;
      if(style == null) style = Tex.button;
      if(tb == null || li_ct == null || id_sel == null || scr == null || li_ct.size == 0) return;

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);

      tb.table(style, tb1 => {
        var cap = li_ct.size;
        for(let i = 0, j = 0; i < cap; i++) {
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
      }).left();
    };
    exports.setContentSelector = setContentSelector;
  // End


  // Part: Event
    const setTrigger = function(tb, scr, icon, str_tt, style, size) {
      if(icon == null) icon = Icon.cross;
      if(style == null) style = Tex.button;
      if(size == null) size = 32.0;
      if(tb == null || scr == null) return;

      var btn = tb.button(icon, size, () => scr.call());
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
              tb1.setColor(Color.darkGray);
              tb1.add(catVal).pad(3.0);
            }).left().growX().row();
          };

          // Recipe base
          tb.table(Tex.whiteui, tb1 => {
            tb1.setColor(Pal.darkestGray);
            tb1.left();

            // Order
            tb1.table(Tex.whiteui, tb2 => {
              tb2.setColor(Pal.darkestGray);
              tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
              tb2.left().row();
              tb2.add("[" + Strings.fixed(i + 1.0, 0) + "]").color(Pal.accent).row();
            }).left().marginRight(36.0);

            // Input
            if(inputs.size > 0) {
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("I:").tooltip(Core.bundle.get("term.reind-term-input.name")).row();
                var cap1 = inputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 2 != 0) continue;

                  var ct = mdl_content.getContent_nm(inputs.get(j));
                  var tp_ct = mdl_content.getType_nm(inputs.get(j));
                  var amt = inputs.get(j + 1);
                  var amt_fi = (tp_ct == "fluid") ? Math.round(amt * 60.0) : amt;
                  tb2.add(new ItemImage((ct.uiIcon), amt_fi)).left().pad(3.0).tooltip(ct.localizedName);
                };
              }).left().marginRight(72.0);
            };

            // Random Input
            if(randInputs.size > 0) {
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("RI:").tooltip(Core.bundle.get("term.reind-term-random-input.name")).row();
                var cap1 = randInputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 3 != 0) continue;

                  var ct = mdl_content.getContent_nm(randInputs.get(j));
                  var amt = randInputs.get(j + 1);
                  var p = randInputs.get(j + 2);
                  tb2.add(new ItemImage(ct.uiIcon, amt)).left().pad(3.0).tooltip(ct.localizedName);
                  tb2.add(Strings.fixed(p * 100.0, 0) + "%").left().color(Color.lightGray).padRight(6.0);
                };
              }).left().marginRight(72.0);
            };

            // Batch Fluid Input
            if(bfInputs.size > 0){
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("BFI:").tooltip(Core.bundle.get("term.reind-term-batch-fluid-input.name")).row();
                var cap1 = bfInputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 2 != 0) continue;

                  var ct = mdl_content.getContent_nm(bfInputs.get(j));
                  var amt = bfInputs.get(j + 1);
                  tb2.add(new ItemImage(ct.uiIcon, amt)).left().pad(3.0).tooltip(ct.localizedName);
                };
              }).left().marginRight(72.0);
            };

            // Optional Input
            if(optInputs.size > 0) {
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("OI:").tooltip(Core.bundle.get("term.reind-term-optional-input.name")).row();
                tb2.button("?", db_dialog._optInput(optInputs)).size(42.0).pad(6.0);
              }).left().marginRight(72.0);
            };

            // Output
            if(outputs.size > 0) {
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("O:").tooltip(Core.bundle.get("term.reind-term-output.name")).row();
                var cap1 = outputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 2 != 0) continue;

                  var ct = mdl_content.getContent_nm(outputs.get(j));
                  var tp_ct = mdl_content.getType_nm(outputs.get(j));
                  var amt = outputs.get(j + 1);
                  var amt_fi = (tp_ct == "fluid") ? Math.round(amt * 60.0) : amt;
                  tb2.add(new ItemImage(ct.uiIcon, amt_fi)).left().pad(3.0).tooltip(ct.localizedName);
                };
              }).left().marginRight(72.0);
            };

            // Random Output
            if(randOutputs.size > 0) {
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("RO:").tooltip(Core.bundle.get("term.reind-term-random-output.name")).row();
                var cap1 = randOutputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 3 != 0) continue;

                  var ct = mdl_content.getContent_nm(randOutputs.get(j));
                  var amt = randOutputs.get(j + 1);
                  var p = randOutputs.get(j + 2);
                  tb2.add(new ItemImage(ct.uiIcon, amt)).left().pad(3.0).tooltip(ct.localizedName);
                  tb2.add(Strings.fixed(p * 100.0, 0) + "%").left().color(Color.lightGray).padRight(6.0);
                };
              }).left().marginRight(72.0);
            };

            // Batch Fluid Output
            if(bfOutputs.size > 0){
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("BFI:").tooltip(Core.bundle.get("term.reind-term-batch-fluid-input.name")).row();
                var cap1 = bfOutputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 2 != 0) continue;

                  var ct = mdl_content.getContent_nm(bfOutputs.get(j));
                  var amt = bfOutputs.get(j + 1);
                  tb2.add(new ItemImage(ct.uiIcon, amt)).left().pad(3.0).tooltip(ct.localizedName);
                };
              }).left().marginRight(72.0);
            };

            // Fail Output
            if(failOutputs.size > 0) {
              tb1.table(Tex.whiteui, tb2 => {
                tb2.setColor(Pal.darkestGray);
                tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
                tb2.left().row();
                tb2.add("FO:").tooltip(Core.bundle.get("term.reind-term-failed-output.name")).row();
                var cap1 = failOutputs.size;
                for(let j = 0; j < cap1; j++) {
                  if(j % 2 != 0) continue;

                  var ct = mdl_content.getContent_nm(failOutputs.get(j));
                  var amt = failOutputs.get(j + 1);
                  tb2.add(new ItemImage(ct.uiIcon, amt)).left().pad(3.0).tooltip(ct.localizedName);
                };
              }).left().marginRight(72.0);
            };

            // Recipe stats
            tb1.table(Tex.whiteui, tb2 => {
              tb2.setColor(Pal.darkestGray);
              tb2.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
              tb2.left().row();

              // Time Scale
              var scl = mdl_recipe.getTimeScale(rcFi, i);
              if(Math.abs(scl - 1.0) > 0.01) tb2.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-time-required.name"), Strings.fixed(scl, 1) + "x")).left().row();

              // Require Optional
              var requireOptional = mdl_recipe.getRequireOptional(rcFi, i);
              if(requireOptional) tb2.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-require-optional.name"), Core.bundle.get("yes"))).left().row();

              // Fail Probability
              var failP = mdl_recipe.getFailProbability(rcFi, i);
              if(failP > 0.0001) tb2.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-chance-to-fail.name"), Strings.fixed(failP * 100.0, 1) + "%")).left().row();

              var tt = mdl_recipe.getRawTooltip(rcFi, i);

              // Tooltip: Overdriven Mode
              if(tt == "overdriven") tb2.add(Core.bundle.get("info.reind-info-tt-overdriven.name")).left().row();
            }).left().marginRight(72.0);
          }).left().growX().row();
        };
      };
    };
    exports.setRecipeDisplay = setRecipeDisplay;


    const setRecipeSelector = function(tb, rcFi, id_rc, b, scr, col, style) {
      if(col == null) col = 4;
      if(style == null) style = Tex.button;
      if(tb == null || rcFi == null || id_rc == null || scr == null) return;

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);

      var cap = mdl_recipe.getRecipeSize(rcFi);
      if(cap == 0) return;

      tb.button("?", db_dialog._content(b.block)).left().size(42.0);
      tb.row();
      tb.table(style, tb1 => {
        for(let i = 0, j = 0; i < cap; i++) {
          (function(i) {
            var cat = mdl_recipe.getCategory(rcFi, i);
            var cat_pre = (i == 0) ? null : mdl_recipe.getCategory(rcFi, i - 1);
            if(cat != cat_pre) {
              j = 0;
              if(i != 0) {
                tb1.row().add("").left().row();
              };
            };

            var tooltip = mdl_recipe.getTooltip(rcFi, i);
            var btn = tb1.button(Tex.pane, 32.0, () => {
              (i == id_rc) ? scr.call(0) : scr.call(i);
            }).left().pad(4.0).tooltip(tooltip).group(btnGrp).get();

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
      }).left();
    };
    exports.setRecipeSelector = setRecipeSelector;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_table.js loaded.");
});
