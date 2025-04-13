/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const cfg_setting = require("reind/cfg/cfg_setting");

    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");
    const mdl_ui = require("reind/mdl/mdl_ui");
  // End


  // Part: Setting
    var secretCode = "<ohno>";
    const set_secretCode = function(val) {
      secretCode = val;
    };
    exports.set_secretCode = set_secretCode;
  // End


  // Part: Content
    const _content = function(ct) {
      return function() {
        if(ct != null) Vars.ui.content.show(ct);
      };
    };
    exports._content = _content;


    const _contentList = function(cts, title) {
      return function() {
        var col = Math.max(Math.floor(mdl_ui._sizePair(null, null, 120.0)[0] / 32.0), 7);

        var dial = new BaseDialog(title);
        dial.title.getStyle().fontColor = Color.white;

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          var cap = cts.length;
          if(cap > 0) {
            for(let i = 0, j = 0; i < cap; i++) {
              (function(i) {
                var ct = cts[i];

                var btn = pn.button(new TextureRegionDrawable(ct.uiIcon), 32.0, _content(ct)).pad(4.0).tooltip(ct.localizedName).get();

                btn.margin(0.0);
                var btnStyle = btn.getStyle();
                btnStyle.up = Styles.none;
                btnStyle.down = Styles.none;
                btnStyle.over = Styles.flatOver;
              })(i);

              if(j % col == col - 1) pn.row();
              j++;
            };
          } else {
            pn.add(mdl_text._info("nothing")).center().row();
          };
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._contentList = _contentList;
  // End


  // Part: Recipe
    const _optInput = function(opt) {
      return function() {
        var dial = new BaseDialog(mdl_text._info("dial-optional-input"));

        mdl_table.__break(dial.cont);
        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          mdl_table.__margin(tb_des);

          mdl_table.__wrapLine(tb_des, mdl_text._infoDes("dial-optional-input"));
        }).row();

        mdl_table.__break(dial.cont);
        mdl_table.__bar(dial.cont, null, mdl_ui._sizePair()[0]);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          var cap = opt.length;
          for(let i = 0; i < cap; i += 4) {
            var itm = Vars.content.item(opt[i]);
            if(itm == null) continue;
            var amt = opt[i + 1];
            var p = opt[i + 2];
            var mtp = opt[i + 3];

            pn.add("[" + Strings.fixed(i / 4.0 + 1.0, 0) + "]").center().color(Pal.accent).padRight(36.0);
            mdl_table.__recipeItem(pn, itm, amt, p).padRight(72.0);
            pn.add(mdl_text._statText(mdl_text._term("efficiency-multiplier"), Strings.fixed(mtp * 100.0, 0) + "%")).center().padRight(6.0);
            pn.row();
          };
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._optInput = _optInput;
  // End


  // Part: Drama
    const _dramaConfirm = function(nm) {
      return function() {
        var dial = new Dialog();

        mdl_table.__breakHalf(dial.cont);
        mdl_table.__wrapLine(dial.cont, mdl_text._info("dial-drama-confirm"), Align.center);

        mdl_table.__breakHalf(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@ok", run(() => {
            dial.hide();

            if(!Vars.state.isCampaign() && !secretCode.includes("<spoiler>")) {
              mdl_ui.announce("drama-unavailable");
            } else {
              mdl_ui._call(nm);
            };
          })).size(200.0, 50.0).center().pad(12.0);

          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._dramaConfirm = _dramaConfirm;
  // End


  // Part: Manual
    const arr_manualPages = [
      "for-novice", [
        "man-nov-about-dependencies",
        "man-nov-copper",
        "man-nov-defense",
        "man-nov-core-crafter",
        "man-nov-complex",
      ],
      "mechanics", [],
      "illight-terms", [
        "man-ill-dimension",
        "man-ill-divine-creature",
      ],
    ];


    const _reindManual = function() {
      return function() {
        var dial = new BaseDialog(mdl_text._info("dial-reind-manual"));

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          var arr = arr_manualPages;
          for(let i = 0; i < arr.length; i += 2) {
            var title = arr[i];
            var page = i / 2;

            pn.button(mdl_text._info("dial-" + title), _manualPage(page)).size(400.0, 50.0).center().pad(12.0).row();
          };
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._reindManual = _reindManual;


    const _manualPage = function(page) {
      return function() {
        var arr = arr_manualPages;
        var title = arr[page * 2];
        var arr1 = arr[page * 2 + 1];
        var dial = new BaseDialog(mdl_text._info("dial-" + title));

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          var cap = arr1.length;
          if(cap > 0) {
            for(let i = 0; i < cap; i++) {
              pn.button(mdl_text._info("dial-" + arr1[i]), mdl_ui._call_f(arr1[i])).size(400.0, 50.0).center().pad(12.0).row();
            };
          } else {
            pn.add(mdl_text._info("nothing")).center().row();
          };
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._manualPage = _manualPage;
  // End


  // Part: Menu
    const _credits = function() {
      return function() {
        var dial = new BaseDialog(mdl_text._info("dial-credits"));

        mdl_table.__break(dial.cont);
        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          mdl_table.__margin(tb_des);

          mdl_table.__wrapLine(tb_des, mdl_text._infoDes("dial-credits"));
        }).row();

        mdl_table.__break(dial.cont);
        mdl_table.__bar(dial.cont, null, mdl_ui._sizePair()[0]);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          pn.add("Content:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - Most of the work.", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Sprite:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - Most of the work.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Starshine - Shredder, Chalcopyrite (Ground).", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Code:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - Most of the work.", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Map:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - Most of the work.", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Idea:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - Most of the work.", Align.left, 1, 48.0);

          /*mdl_table.__break(pn);
          pn.add("Music:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - Most of the work.", Align.left, 1, 48.0);*/

          mdl_table.__break(pn);
          pn.add("Translation:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MaboroshiX - EN and CN.", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Miscellaneous Contribution:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "WIP.", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Special Thanks:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "WIP.", Align.left, 1, 48.0);

          mdl_table.__break(pn);
          pn.add("Acknowledgement:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Pixabay (Website) - For sound effects, most of which have been modified to fit in.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Greg's Tech: New Horizon (Minecraft Modpack) - For ideas about some factories and mechanics, and the incubation of the idea for Reind.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Asthosus (Mindustry Mod) - For introducing me to hjson and how to make a planet.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Fictional Octo System (Mindustry Mod) - For the mechanics of underground ore and ore detection.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Meepscellaneous Concepts (Mindustry Mod) - For the idea of pseudo-3D shadow.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "MultiCrafter Lib (Mindustry Mod) - For the mechanics of multi-crafter.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "Sapphirium (Mindustry Mod) - For introducing me to javascript.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "TooManyItems (Mindustry Mod) - For making players suffer less from recipe hell.", Align.left, 1, 48.0);
          mdl_table.__breakHalf(pn);
          mdl_table.__wrapLine(pn, "格雷工业 (Mindustry Mod) - For codes on tables and dialogs. I don't use the same recipe codes btw.", Align.left, 1, 48.0);
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);

          btns.button("Repo", run(() => {
            Core.app.openURI("https://github.com/HuanXefh/Reindustrialization");
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._credits = _credits;


    const _updates = function() {
      return function() {
        var dial = new BaseDialog(mdl_text._info("dial-updates"));

        mdl_table.__break(dial.cont);
        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          mdl_table.__margin(tb_des);

          mdl_table.__wrapLine(tb_des, mdl_text._infoDes("dial-updates"));
        }).row();

        mdl_table.__break(dial.cont);
        mdl_table.__bar(dial.cont, null, mdl_ui._sizePair()[0]);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          // NOTE: Add more buttons here.
          pn.button(arr_updates[1][0], _updatesRowDisplay(1)).size(400.0, 50.0).center().pad(12.0).row();
          pn.button(arr_updates[0][0], _updatesRowDisplay(0)).size(400.0, 50.0).center().pad(12.0).row();
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._updates = _updates;


    const arr_updates = [

      [
        "0.1.0: The Overhaul",
        [
          "reind-env-tree-fungi-aerth-shiitake",
          "reind-fac-misc-core-crafter",
          "reind-min-dril-basic-impact-drill",
          "reind-sta-spec-stunned",
          "reind-bliq-cond-wooden-fluid-pipe",
          "reind-bliq-stor-liquid-tank",
          "reind-bliq-stor-gas-cylinder",
          "reind-fac-furn-primitive-brick-kiln",
          "reind-unit-inf-tsen",
          "reind-pow-gen-core-generator",
          "reind-camp-aerth-001-sector-alpha",
          "reind-min-scan-pulse-ore-scanner",
          "reind-fac-misc-rain-collector",
          "reind-fac-sep-dry-magnetic-separator",
          "reind-min-misc-placer-miner",
          "reind-def-proj-basic-radar",
          "reind-sta-spec-radar-detection",
          "reind-pow-gen-wind-turbine",
          "reind-bliq-aux-fluid-unloader",
          "reind-fac-air-piston-pressure-pump",
          "reind-pow-hcond-steel-heat-conductor",
          "reind-fac-furn-primitive-sintering-furnace",
          "reind-camp-aerth-002-crab-cliff",
        ],
      ],

      [
        "0.1.1: Local Geology",
        [
          "reind-pow-econd-transmission-box",
          "reind-min-dril-titan-impact-drill",
          "reind-sta-spec-terrorized",
          "reind-pow-gen-manual-generator",
          "reind-def-tur-extinguisher-turret",
          "reind-sta-spec-attack-suppression",
          "reind-pow-boil-steam-boiler",
          "reind-ilmin-dril-ids-remote-drill",
          "reind-pay-conv-payload-express-way",
          "reind-fac-sep-mineral-jig-m",
          "reind-item-chem-sodium",
          "reind-fac-air-liquid-ring-pressure-pump",
          "reind-def-proj-basic-repair-projector",
          "reind-unit-inf-psas",
          "reind-fac-furn-bricked-blast-furnace-controller",
          "reind-fac-misc-mechanical-crank",
          "reind-sta-spec-earses-mark",
          "reind-min-crop-ink-corn",
          "reind-sta-file-aerth-01a",
          "reind-pow-wire-power-alarm",
          "reind-min-crop-thorium-reactor-mine",
          "reind-map-wall-occupiable-barricade",
          "reind-map-fac-ids-trade-dock-rim-builder",
          "reind-dis-aux-primitive-junction",
          "reind-fac-air-energized-air-collector",
          "reind-dis-aux-waste-filter-gate",
          "reind-dis-aux-intermediate-filter-gate",
          "reind-dis-conv-quadruplet-conveyor",
        ],
      ],

    ];


    const _updatesRowDisplay = function(id) {
      return function() {
        var verVal = arr_updates[id][0];
        var cts = arr_updates[id][1];
        var dial = new BaseDialog(verVal);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.setContentRowDisplay(pn, cts, true);
        }).width(mdl_ui._sizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@close", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._updatesRowDisplay = _updatesRowDisplay;


    const setReindManual = function() {
      var dial = Vars.ui.database;

      var tmpLi = dial.getChildren();
      var btns = tmpLi.get(tmpLi.size - 1);

      btns.button("Reind", Icon.book, _reindManual()).size(210.0, 64.0);
    };
    exports.setReindManual = setReindManual;


    const setSettings = function() {
      var dial = Vars.ui.settings;

      dial.addCategory(mdl_text._term("reind-settings"), Icon.crafting, tb => {
        tb.checkPref("reind-beta-mode", false);
        tb.checkPref("reind-noob-mode", false, bool => {
          if(bool) {
            mdl_ui._te(0.0, "reind-dial-te-err", 0.5, false, 1.0, "in");
            mdl_ui._te(1.0, "reind-dial-te-err", 0.5, false, 3.0, "shake");
            mdl_ui._te(4.0, "reind-dial-te-err", 0.5, false, 1.0, "out");
            mdl_ui._dial_boxToast(0.0, mdl_ui._dialCtRand("earlan", "noob"), mdl_ui._speaker("earlan"));
          };
        });

        tb.checkPref("reind-ldm", false);
        tb.checkPref("reind-p3d-shadow", true);
        tb.sliderPref("reind-efficiency-interval", 3, 0, 11, function(val) {return Strings.fixed((val + 1) * 0.25, 2) + "s"});

        tb.checkPref("reind-welcome-dialog", true);
        tb.checkPref("reind-core-time-control", true);
        tb.checkPref("reind-damage-display", true);

        tb.sliderPref("reind-tree-alpha", 20, 0, 20, function(val) {return Strings.fixed(val * 5.0, 0) + "%"});
        tb.checkPref("reind-tree-transparentization", true);
        tb.sliderPref("reind-remains-lifetime", 12, 0, 96, function(val) {return Strings.fixed(val * 5, 0) + "s"});
        tb.checkPref("reind-show-icon-tag", true);
        tb.sliderPref("reind-icon-tag-interval", 1, 0, 11, function(val) {return Strings.fixed((val + 1) * 0.25, 2) + "s"});

        tb.checkPref("reind-mark-heated-block", false);
        tb.sliderPref("reind-max-heated-block-mark", 3, 1, 50, function(val) {return Strings.fixed(val, 0)});

        tb.textPref("reind-secret-code", "<ohno>");
      });

      dial.hidden(run(() => {
        cfg_setting.loadSettings();
      }));
    };
    exports.setSettings = setSettings;
  // End
