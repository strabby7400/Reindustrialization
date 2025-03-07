/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
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

        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          tb_des.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
          tb_des.add(Core.bundle.get("info.reind-info-dial-optional-input.description")).center().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair()[0]).row();
        });

        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.pane(pn => {
          pn.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);

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
        }).width(mdl_ui.getSizePair()[0]);

        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.table(Styles.none, btns_oi => {
          btns_oi.button("@ok", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);
        });

        dial.show();
      };
    };
    exports._optInput = _optInput;
  // End


  // Part: Menu
    const _credits = function() {
      return function() {
        var dial = new BaseDialog(Core.bundle.get("info.reind-info-dial-credits.name"));

        dial.cont.table(Tex.whiteui, tb_des => {
          tb_des.setColor(Pal.darkestGray);
          tb_des.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);
          tb_des.add(Core.bundle.get("info.reind-info-dial-credits.description")).center().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair()[0]).row();
        });

        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.pane(pn => {
          pn.marginLeft(12.0).marginRight(12.0).marginTop(15.0).marginBottom(15.0);

          pn.add("Content:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Sprite:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Code:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Map:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Idea:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("MaboroshiX - Most of the work.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Translation:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("MaboroshiX - EN and CN.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Miscellaneous Contribution:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("WIP.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Special Thanks:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("WIP.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();

          pn.add("").row();
          pn.add("").row();
          pn.add("Acknowledgement:").left().color(Pal.accent).row();
          pn.add("").row();
          pn.add("Pixabay (Website) - For sound effects, most of which have been modified to fit in.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("Greg's Tech: New Horizon (Minecraft Modpack) - For ideas about some factories and mechanics, and the incubation of the idea for Reind.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("Asthosus (Mindustry Mod) - For introducing me to hjson and how to make a planet.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("Fictional Octo System (Mindustry Mod) - For the mechanics of underground ore and ore detection.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("Meepscellaneous Concepts (Mindustry Mod) - For the idea of pseudo-3D shadow.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("MultiCrafter Lib (Mindustry Mod) - For the mechanics of multi-crafter.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("Sapphirium (Mindustry Mod) - For introducing me to javascript.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
          pn.add("").row();
          pn.add("格雷工业 (Mindustry Mod) - For codes on tables and dialogs. I don't use the same recipe codes btw.").left().labelAlign(Align.left).wrap().width(mdl_ui.getSizePair(null, null, 120.0)[0]).padLeft(48.0).row();
        }).width(mdl_ui.getSizePair()[0]);

        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.add("").row();
        dial.cont.table(Styles.none, btns_oi => {
          btns_oi.button("@ok", run(() => {
            dial.hide();
          })).size(200.0, 50.0).center().pad(12.0);

          btns_oi.button("Repo", run(() => {
            Core.app.openURI("https://github.com/HuanXefh/Reindustrialization");
          })).size(200.0, 50.0).center().pad(12.0);
        });

        dial.show();
      };
    };
    exports._credits = _credits;
  // End
