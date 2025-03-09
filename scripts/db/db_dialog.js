/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");
    const mdl_ui = require("reind/mdl/mdl_ui");
  // End


  // Part: Content
    const _content = function(ct) {
      return function() {
        if(ct != null) Vars.ui.content.show(ct);
      };
    };
    exports._content = _content;
  // End


  // Part: Recipe
    const _optInput = function(rcLi) {
      return function() {
        var dial = new BaseDialog(Core.bundle.get("info.reind-info-dial-optional-input.name"));

        mdl_table.__break(dial.cont);
        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          mdl_table.__margin(tb_des);

          mdl_table.__wrapLine(tb_des, Core.bundle.get("info.reind-info-dial-optional-input.description"));
        }).row();

        mdl_table.__break(dial.cont);
        mdl_table.__bar(dial.cont, null, mdl_ui.getSizePair()[0]);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          var cap = rcLi.size;
          for(let i = 0; i < cap; i++) {
            if(i % 4 != 0) continue;

            var itm = Vars.content.item(rcLi.get(i));
            if(itm == null) continue;
            var amt = rcLi.get(i + 1);
            var p = rcLi.get(i + 2);
            var mtp = rcLi.get(i + 3);

            pn.add("[" + Strings.fixed(i / 4.0 + 1.0, 0) + "]").center().color(Pal.accent).padRight(36.0);
            pn.add(new ItemImage(itm.uiIcon, amt)).center().pad(3.0).tooltip(itm.localizedName);
            pn.add(Strings.fixed(p * 100.0, 0) + "%").center().color(Color.lightGray).padRight(72.0);
            pn.add(mdl_text.getStatText(Core.bundle.get("term.reind-term-efficiency-multiplier.name"), Strings.fixed(mtp * 100.0, 0) + "%")).center().padRight(6.0);
            pn.row();
          };
        }).width(mdl_ui.getSizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@ok", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._optInput = _optInput;
  // End


  // Part: Menu
    const _credits = function() {
      return function() {
        var dial = new BaseDialog(Core.bundle.get("info.reind-info-dial-credits.name"));

        mdl_table.__break(dial.cont);
        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          mdl_table.__margin(tb_des);

          mdl_table.__wrapLine(tb_des, Core.bundle.get("info.reind-info-dial-credits.description"));
        }).row();

        mdl_table.__break(dial.cont);
        mdl_table.__bar(dial.cont, null, mdl_ui.getSizePair()[0]);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          pn.add("Content:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Sprite:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Code:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Map:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Idea:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Translation:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("MaboroshiX - EN and CN.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Miscellaneous Contribution:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("WIP.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Special Thanks:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("WIP.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          mdl_table.__break(pn);
          pn.add("Acknowledgement:").left().color(Pal.accent).row();
          mdl_table.__breakHalf(pn);
          pn.add("Pixabay (Website) - For sound effects, most of which have been modified to fit in.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("Greg's Tech: New Horizon (Minecraft Modpack) - For ideas about some factories and mechanics, and the incubation of the idea for Reind.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("Asthosus (Mindustry Mod) - For introducing me to hjson and how to make a planet.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("Fictional Octo System (Mindustry Mod) - For the mechanics of underground ore and ore detection.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("Meepscellaneous Concepts (Mindustry Mod) - For the idea of pseudo-3D shadow.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("MultiCrafter Lib (Mindustry Mod) - For the mechanics of multi-crafter.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("Sapphirium (Mindustry Mod) - For introducing me to javascript.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          mdl_table.__breakHalf(pn);
          pn.add("格雷工业 (Mindustry Mod) - For codes on tables and dialogs. I don't use the same recipe codes btw.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
        }).width(mdl_ui.getSizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@ok", run(() => {
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
        var dial = new BaseDialog(Core.bundle.get("info.reind-info-dial-updates.name"));

        mdl_table.__break(dial.cont);
        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          mdl_table.__margin(tb_des);

          mdl_table.__wrapLine(tb_des, Core.bundle.get("info.reind-info-dial-updates.description"));
        }).row();

        mdl_table.__break(dial.cont);
        mdl_table.__bar(dial.cont, null, mdl_ui.getSizePair()[0]);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.__margin(pn);

          // NOTE: Add more buttons here.
          pn.button(arr_updates[1][0], _updatesRowDisplay(1)).size(400.0, 50.0).center().pad(12.0).row();
          pn.button(arr_updates[0][0], _updatesRowDisplay(0)).size(400.0, 50.0).center().pad(12.0).row();
        }).width(mdl_ui.getSizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@ok", run(() => {
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
        new Seq([
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
        ]),
      ],

      [
        "0.1.1: Local Geology",
        new Seq([
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
        ]),
      ],

    ];


    const _updatesRowDisplay = function(id) {
      return function() {
        var verVal = arr_updates[id][0];
        var li_ct = arr_updates[id][1];
        var dial = new BaseDialog(verVal);

        mdl_table.__break(dial.cont);
        dial.cont.pane(pn => {
          mdl_table.setContentRowDisplay(pn, li_ct, true);
        }).width(mdl_ui.getSizePair()[0]).row();

        mdl_table.__breakQuad(dial.cont);
        dial.cont.table(Styles.none, btns => {
          btns.button("@ok", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        }).row();

        dial.show();
      };
    };
    exports._updatesRowDisplay = _updatesRowDisplay;
  // End
