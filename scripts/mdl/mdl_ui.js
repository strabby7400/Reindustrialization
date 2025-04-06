/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_math = require("reind/mdl/mdl_math");

    const db_dialText = require("reind/db/db_dialText");
  // End


  // Part: Sound Control
    var muteSoundControl = false;
    Events.run(Trigger.update, () => {
      if(muteSoundControl) Vars.control.sound.stop();
    });
  // End


  // Part: Param
    const getSizePair = function(pad, cap, offW, offH) {
      if(pad == null) pad = 20.0;
      if(cap == null) cap = 760.0;
      if(offW == null) offW = 0.0;
      if(offH == null) offH = 0.0;

      var w = Core.graphics.getWidth();
      var h = Core.graphics.getHeight();
      var w_fi = Math.max(Math.min(w - pad * 2.0, cap), 64.0) - offW;
      var h_fi = Math.max(Math.min(h - pad * 2.0, cap), 64.0) - offH;

      return [w_fi, h_fi];
    };
    exports.getSizePair = getSizePair;
  // End


  // Part: Info
    const announce = function(str, time) {
      if(time == null) time = 3.0;
      if(Vars.headless || str == null) return false;

      Vars.ui.announce(str, time);

      return true;
    };
    exports.announce = announce;


    const showInfoFade = function(str, time) {
      if(time == null) time = 2.0;
      if(Vars.headless || str == null) return false;

      Vars.ui.showInfoFade(str, time);

      return true;
    };
    exports.showInfoFade = showInfoFade;


    const showLabel = function(pos, str, time) {
      if(time == null) time = 3.0;
      if(Vars.headless || str == null) return false;

      Vars.ui.showLable(str, time, pos.x, pos.y);

      return true;
    };
    exports.showLabel = showLabel;


    const showError = function(str) {
      if(Vars.headless || str == null) return false;

      Vars.ui.showErrorMessage(str);

      return true;
    };
    exports.showError = showError;
  // End


  // Part: Dial Element
    const _call = function(nm) {
      var flowFunc = mdl_data.read_1n1v(db_dialText.map, nm);
      if(flowFunc != null) flowFunc.call();
    };
    exports._call = _call;


    const _call_f = function(nm) {
      return function() {
        _call(nm);
      };
    };
    exports._call_f = _call_f;


    const _speaker = function(nm) {
      return Core.bundle.get("term.reind-term-chara-" + nm + ".name");
    };
    exports._speaker = _speaker;


    const _dialCt = function(nm, des) {
      return Core.bundle.get("dial.reind-dial-" + nm + "-" + des + ".name");
    };
    exports._dialCt = _dialCt;


    const _dialCtRand = function(nm, des) {
      var i = 1;
      var str = "dial.reind-dial-" + nm + "-" + des + "-";
      var li = new Seq();

      while(Core.bundle.has(str + i + ".name")) {
        li.add(Core.bundle.get(str + i + ".name"));
        i++;
      };

      return li.get(mdl_math._randInt(li.size - 1));
    };
    exports._dialCtRand = _dialCtRand;


    const _dialCtFlow = function(des, ord) {
      return Core.bundle.get("dial.reind-dial-" + des + "-" + ord + ".name");
    };
    exports._dialCtFlow = _dialCtFlow;


    const _scl = function(mode) {
      if(mode == null) {
        return Math.min(Core.graphics.getWidth() / 1920.0, Core.graphics.getHeight() / 1020.0);
      } else {
        var val = 1.0;

        switch(mode) {
          case "w" :
            val = Core.graphics.getWidth() / 1920.0;
            break;
          case "h" :
            val = Core.graphics.getHeight() / 1020.0;
            break;
        };

        return val;
      };
    };
    exports._scl = _scl;


    const _transBlack = function(delay, inTime, outTime, time) {
      if(inTime == null) inTime = 1.0;
      if(outTime == null) outTime = inTime;
      if(time == null) time = 0.5;

      var tb = new Table();
      var w = Core.graphics.getWidth() * 1.2;
      var h = Core.graphics.getHeight() * 1.2;

      var needCheck = true;

      tb.update(() => {
        if(needCheck) {
          tb.setPosition(Core.graphics.getWidth() * 0.5, Core.graphics.getHeight() * 0.5, Align.center);

          tb.table(Styles.black, tb1 => {}).width(w).height(h).row();

          needCheck = false;
        };
      });
      tb.actions(Actions.fadeOut(0.0), Actions.delay(delay), Actions.fadeIn(inTime), Actions.delay(time), Actions.fadeOut(outTime), Actions.remove());
      tb.pack();
      tb.act(0.1);

      if(Core.scene != null) Core.scene.add(tb);

      return inTime + time + outTime;
    };
    exports._transBlack = _transBlack;


    const _transWhite = function(delay, inTime, outTime, time) {
      if(inTime == null) inTime = 1.0;
      if(outTime == null) outTime = inTime;
      if(time == null) time = 0.5;

      var tb = new Table();
      var w = Core.graphics.getWidth() * 1.2;
      var h = Core.graphics.getHeight() * 1.2;

      var needCheck = true;

      tb.update(() => {
        if(needCheck) {
          tb.setPosition(Core.graphics.getWidth() * 0.5, Core.graphics.getHeight() * 0.5, Align.center);

          tb.table(Tex.whiteui, tb1 => {}).width(w).height(h).row();

          needCheck = false;
        };
      });
      tb.actions(Actions.fadeOut(0.0), Actions.delay(delay), Actions.fadeIn(inTime), Actions.delay(time), Actions.fadeOut(outTime), Actions.remove());
      tb.pack();
      tb.act(0.1);

      if(Core.scene != null) Core.scene.add(tb);

      return inTime + time + outTime;
    };
    exports._transWhite = _transWhite;


    const _bg = function(delay, nm, time) {
      if(time == null) time = 6.0;

      var tb = new Table();
      var w = 1920.0 * _scl();
      var h = 1080.0 * _scl();

      var needCheck = true;

      tb.update(() => {
        if(needCheck) {
          tb.setPosition(Core.graphics.getWidth() * 0.5, Core.graphics.getHeight() * 0.5, Align.center);

          tb.table(new TextureRegionDrawable(Core.atlas.find(nm)), tb1 => {}).width(w).height(h).row();

          needCheck = false;
        };
      });
      tb.actions(Actions.fadeOut(0.0), Actions.delay(delay), Actions.fadeIn(0.25), Actions.delay(time), Actions.fadeOut(0.25), Actions.remove());
      tb.pack();
      tb.act(0.1);

      if(Core.scene != null) Core.scene.add(tb);
    };
    exports._bg = _bg;


    const _bgm = function(delay, song, time) {
      if(time == null) time = 6.0;

      var tb = new Table();

      tb.actions(Actions.delay(delay), Actions.run(() => {
        muteSoundControl = true;
        song.play();
      }), Actions.delay(time), Actions.run(() => {
        muteSoundControl = false;
        song.stop();
      }), Actions.remove());
      tb.pack();
      tb.act(0.1);

      if(Core.scene != null) Core.scene.add(tb);
    };
    exports._bgm = _bgm;


    const _te = function(delay, nm, fracX, dark, time, mode, param1, param2) {
      if(dark == null) dark = false;
      if(time == null) time = 5.0;

      var tb = new Table();
      var w = 450.0 * _scl();
      var h = 900.0 * _scl();

      var needCheck = true;

      tb.update(() => {
        if(needCheck) {
          tb.setPosition(Core.graphics.getWidth() * fracX, Core.graphics.getHeight() * 0.5 - 150.0 * _scl("h"), Align.center);

          tb.table(new TextureRegionDrawable(Core.atlas.find(nm)), tb1 => {
            if(dark) tb1.setColor(Color.valueOf("606060"));
          }).width(w).height(h).row();

          needCheck = false;
        };
      });
      switch(mode) {

        case "in" :
          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.75),
            Actions.delay(time - 0.75),
            Actions.fadeOut(0.0),
            Actions.remove(),
          );
          break;

        case "out" :
          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.0),
            Actions.fadeOut(0.75),
            Actions.delay(time - 0.75),
            Actions.remove(),
          );
          break;

        case "up" :
          tb.actions(
            Actions.fadeOut(0.0),
            Actions.translateBy(0.0, -80.0, 0.0),
            Actions.delay(delay),
            Actions.parallel(
              Actions.fadeIn(0.75),
              Actions.translateBy(0.0, 80.0, 0.75, Interp.pow2Out),
            ),
            Actions.delay(time - 0.75),
            Actions.fadeOut(0.0),
            Actions.remove(),
          );
          break;

        case "down" :
          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.0),
            Actions.parallel(
              Actions.translateBy(0.0, -80.0, 0.75, Interp.pow2In),
              Actions.fadeOut(0.75),
            ),
            Actions.delay(time - 0.75),
            Actions.remove(),
          );
          break;

        case "moveX" :
          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.0),
            Actions.translateBy((param2 - param1) * Core.graphics.getWidth() * 0.5, 0.0, 0.375, Interp.pow2In),
            Actions.translateBy((param2 - param1) * Core.graphics.getWidth() * 0.5, 0.0, 0.375, Interp.pow2Out),
            Actions.delay(time - 0.75),
            Actions.remove(),
          );
          break;

        case "jump" :
          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.0),
            Actions.translateBy(0.0, 40.0, 0.125),
            Actions.translateBy(0.0, -40.0, 0.125),
            Actions.translateBy(0.0, 40.0, 0.125),
            Actions.translateBy(0.0, -40.0, 0.125),
            Actions.delay(time - 0.5),
            Actions.fadeOut(0.0),
            Actions.remove(),
          );
          break;

        case "shake" :

          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.0),
            Actions.translateBy(-20.0, 0.0, 0.125),
            Actions.translateBy(40.0, 0.0, 0.125),
            Actions.translateBy(-40.0, 0.0, 0.125),
            Actions.translateBy(20.0, 0.0, 0.125),
            Actions.delay(time - 0.5),
            Actions.fadeOut(0.0),
            Actions.remove(),
          );
          break;

        default :

          tb.actions(
            Actions.fadeOut(0.0),
            Actions.delay(delay),
            Actions.fadeIn(0.0),
            Actions.delay(time),
            Actions.fadeOut(0.0),
            Actions.remove(),
          );
          break;

      };
      tb.pack();
      tb.act(0.1);

      if(Core.scene != null) Core.scene.add(tb);
    };
    exports._te = _te;
  // End


  // Part: Dial Text
    const _dial_boxToast = function(delay, str, str_speaker, path_se, scl) {
      if(scl == null) scl = 1.0;
      if(str == null) return;
      var tb = new Table();
      var w = getSizePair()[0];
      var h = 200.0;

      if(path_se != null) mdl_effect.play(path_se);

      var needCheck = true;

      tb.update(() => {
        if(needCheck) {
          tb.setPosition(Core.graphics.getWidth() * 0.5, Core.graphics.getHeight() * 0.5 - 360.0 * _scl("h"), Align.center);

          if(str_speaker != null) {
            tb.table(Tex.button, tb1 => {
              tb1.margin(20.0);

              tb1.add(str_speaker).center().fontScale(1.35).style(Styles.outlineLabel).labelAlign(Align.left);
            }).left().row();
          };

          tb.table(Tex.button, tb1 => {
            tb1.top().marginTop(32.0).marginBottom(32.0);

            tb1.add(str).fontScale(1.35).style(Styles.outlineLabel).labelAlign(Align.left).wrap().width(getSizePair(null, null, 90.0)[0]);
          }).width(w).height(h).row(),

          needCheck = false;
        };
      });
      tb.actions(Actions.translateBy(0.0, -2 * h), Actions.delay(delay), Actions.translateBy(0.0, 2 * h, 0.5, Interp.pow3Out), Actions.delay(4.0 * scl), Actions.translateBy(0.0, -2 * h, 0.5, Interp.pow3In), Actions.remove());
      tb.pack();
      tb.act(0.1);
      if(Core.scene != null) Core.scene.add(tb);

      return 1.0 + 4.0 * scl;
    };
    exports._dial_boxToast = _dial_boxToast;


    const _dial_boxFade = function(delay, str, str_speaker, path_se, scl) {
      if(scl == null) scl = 1.0;
      if(str == null) return;
      var tb = new Table();
      var w = getSizePair()[0];
      var h = 200.0;

      if(path_se != null) mdl_effect.play(path_se);

      var needCheck = true;

      tb.update(() => {
        if(needCheck) {
          tb.setPosition(Core.graphics.getWidth() * 0.5, Core.graphics.getHeight() * 0.5 - 360.0 * _scl("h"), Align.center);

          if(str_speaker != null) {
            tb.table(Tex.bar, tb1 => {
              tb1.marginLeft(24.0).marginRight(24.0).marginTop(8.0).marginBottom(8.0).setColor(Color.darkGray);

              tb1.add(str_speaker).center().fontScale(1.35).labelAlign(Align.left);
            }).left().row();
          };

          tb.table(Tex.bar, tb1 => {
            tb1.top().marginTop(32.0).marginBottom(32.0).setColor(Pal.darkestGray);

            tb1.add(str).fontScale(1.35).style(Styles.outlineLabel).labelAlign(Align.left).wrap().width(getSizePair(null, null, 90.0)[0]);
          }).width(w).height(h).row(),

          needCheck = false;
        };
      });
      tb.actions(Actions.fadeOut(0.0), Actions.delay(delay), Actions.fadeIn(0.5), Actions.delay(4.0 * scl), Actions.fadeOut(0.5), Actions.remove());
      tb.pack();
      tb.act(0.1);
      if(Core.scene != null) Core.scene.add(tb);

      return 1.0 + 4.0 * scl;
    };
    exports._dial_boxFade = _dial_boxFade;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_ui.js loaded.");
});
