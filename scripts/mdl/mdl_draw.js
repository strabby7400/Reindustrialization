/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_heat = require("reind/mdl/mdl_heat");
  // End


  // Part: Setting
    var ldm = false;
    const set_ldm = function(val) {
      ldm = val;
    };
    exports.set_ldm = set_ldm;
  // End


  // Part: Element
    const _scl = function(scl) {
      if(scl == null) scl = 1.0;

      Draw.xscl = scl;
      Draw.yscl = scl;
    };
    exports._scl = _scl;


    const _color = function(color_gn) {
      if(color_gn == null) return;
      if(color_gn instanceof Color) return color_gn;

      if(typeof color_gn == "boolean") return color_gn ? Pal.accent : Pal.remove;
      if(typeof color_gn == "string") return Color.valueOf(color_gn);

      return Color.white;
    };
    exports._color = _color;
  // End


  // Part: Pixmap
    const _pix_stack = function(res, ov) {
      var pixmap = new Pixmap(res.width, res.height);

      for(let x = 0; x < res.width; x++) {
        for(let y = 0; y < res.height; y++) {
          var rawColor1 = res.getRaw(x, y);
          var rawColor;

          if(ov == null) {
            rawColor = Tmp.c1.set(rawColor1).rgba();
          } else {
            var rawColor2 = ov.getRaw(x, y);
            rawColor = (ov.getA(x, y) < 36) ? Tmp.c1.set(rawColor1).rgba() : Tmp.c1.set(rawColor2).rgba();
          };
          pixmap.setRaw(x, y, rawColor);
        };
      };

      return pixmap;
    };
    exports._pix_stack = _pix_stack;
  // End


  // Part: Region


    /* <---------------- drawNormalRegion ----------------> */


    const drawNormalRegion = function(pos_gn, reg, ang, a, regScl, color, z, shouldMixcol) {
      if(Vars.headless || pos_gn == null || reg == null) return;

      if(ang == null) ang = 0.0;
      if(a == null) a = 1.0;
      if(regScl == null) regScl = 1.0;
      if(color == null) color = Color.white;
      if(shouldMixcol == null) shouldMixcol = false;

      var pos = mdl_game._pos(pos_gn);
      var w = reg.width * 2.0 * regScl / Vars.tilesize;
      var h = reg.height * 2.0 * regScl / Vars.tilesize;

      if(z != null) Draw.z(z);
      if(shouldMixcol) {Draw.mixcol(color, 1.0)} else {Draw.color(color)};
      Draw.alpha(a);
      Draw.rect(reg, pos.x, pos.y, w, h, ang);
      Draw.reset();
    };
    exports.drawNormalRegion = drawNormalRegion;


    /* <---------------- drawShadowRegion ----------------> */


    const drawSimpleShadow = function(pos_gn, reg, ang, a, regScl, color, z) {
      if(Vars.headless) return;

      var pos = mdl_game._pos(pos_gn);
      var flr = Vars.world.floorWorld(pos.x, pos.y);
      if(flr == null || !flr.canShadow) return;

      Draw.mixcol(Pal.shadow, 1.0);
      drawNormalRegion(pos, reg, ang, a * 0.22, regScl, color, z);
    };
    exports.drawSimpleShadow = drawSimpleShadow;


    const drawBlurredShadow = function(pos_gn, reg, ang, a, regScl, color, z) {
      if(Vars.headless) return;

      if(ldm) {
        drawSimpleShadow(pos_gn, reg, ang, a, regScl, color, z);
      } else {
        var pos = mdl_game._pos(pos_gn);
        var flr = Vars.world.floorWorld(pos.x, pos.y);
        if(flr == null || !flr.canShadow) return;

        const arr_param = [
          0.18, 1.0,
          0.09, 1.05,
          0.05, 1.1,
          0.03, 1.15,
        ];
        var cap = arr_param.length;
        for(let i = 0; i < cap; i += 2) {
          Draw.mixcol(Pal.shadow, 1.0);
          drawNormalRegion(pos, reg, ang, a * arr_param[i], regScl * arr_param[i + 1], color, z);
        };
      };
    };
    exports.drawBlurredShadow = drawBlurredShadow;


    /*
     * NOTE:
     *
     * Inspired by Meepscellaneous Concepts mod by MEEPofFaith.
     */
    const drawPseudo3dShadow = function(pos_gn, reg, elev, ang, a, regScl, color, z) {
      if(Vars.headless || pos_gn == null || reg == null) return;

      if(elev == null) elev = 0.0;
      if(ang == null) ang = 0.0;
      if(a == null) a = 1.0;
      if(regScl == null) regScl = 1.0;
      if(color == null) color = Color.white;

      var pos = mdl_game._pos(pos_gn);
      var x = pos.x;
      var y = pos.y;
      var w = reg.width * 2.0 * regScl / Vars.tilesize;
      var h = reg.height * 2.0 * regScl / Vars.tilesize;
      var pos1 = mdl_game._posP3d(pos, elev);
      var x_fi = pos1.x;
      var y_fi = pos1.y;

      var flr = Vars.world.floorWorld(x_fi, y_fi);
      var a_fi = (flr != null && flr.canShadow) ? 0.5 * a : 0.0;

      if(ldm) {
        drawSimpleShadow(pos1, reg, ang, a_fi, regScl, color, z);
      } else {
        var arr_pos = [0.0, 0.03, 0.06, 0.1];
        var arr_a = [0.84, 0.36, 0.14, 0.06];
        var arr_regScl = [1.0, 1.2, 1.4, 1.6];
        for(let i = 0; i < 4; i++) {
          var pos_i = Tmp.v2.set(Mathf.lerp(x_fi, x, arr_pos[i]), Mathf.lerp(y_fi, y, arr_pos[i]));
          var a_i = arr_a[i];
          var regScl_i = arr_regScl[i];

          drawSimpleShadow(pos_i, reg, ang, a_i, regScl_i * Mathf.lerp(1.0, 1.165, elev), color, z);
        };
      };
    };
    exports.drawPseudo3dShadow = drawPseudo3dShadow;


    /* <---------------- drawFadeRegion ----------------> */


    const drawFadeRegion = function(pos_gn, reg, ang, a, regScl, fadeScl, color, z) {
      if(Vars.headless || pos_gn == null || reg == null) return;

      if(a == null) a = 1.0;
      if(fadeScl == null) fadeScl = 1.0;

      var pos = mdl_game._pos(pos_gn);
      var a_fi = a * Math.abs(Math.sin(Time.time / 15.0 / fadeScl));

      drawNormalRegion(pos, reg, ang, a_fi, regScl, color, z);
    };
    exports.drawFadeRegion = drawFadeRegion;


    const drawFadeAlert = function(pos_gn, reg, frac, ang, a, regScl, color, z) {
      if(Vars.headless) return;
      if(frac == null) frac = 0.0;

      var pos = mdl_game._pos(pos_gn);
      var a_fi = 1.0 - Math.pow(Math.min(frac, 1.0) - 1.0, 2);

      drawFadeRegion(pos, reg, ang, a_fi, regScl, 0.2, color, z);
    };
    exports.drawFadeAlert = drawFadeAlert;


    /* <---------------- drawRotatorRegion ----------------> */


    const drawRotatorRegion = function(pos_gn, reg, tprog, ang, rate, sides) {
      if(Vars.headless || pos_gn == null || reg == null || tprog == null) return;

      if(ang == null) ang = 0.0;
      if(rate == null) rate = 0.0;
      if(sides == null) sides = 4;

      var pos = mdl_game._pos(pos_gn);
      var x = pos.x;
      var y = pos.y;
      var ang_fd = 360.0 / sides;
      var ang_fi = Mathf.mod(tprog * rate + ang, ang_fd);

      Draw.alpha(1.0);
      Draw.rect(reg, x, y, ang_fi);
      Draw.alpha(ang_fi / ang_fd);
      Draw.rect(reg, x, y, ang_fi - ang_fd);
      Draw.reset();
    };
    exports.drawRotatorRegion = drawRotatorRegion;


    /* <---------------- drawWobbleRegion ----------------> */


    const drawWobbleRegion = function(pos_gn, reg, ang, a, regScl, color, scl, mag, wobSclX, wobSclY, z) {
      if(Vars.headless || pos_gn == null || reg == null) return;

      if(ang == null) ang = 0.0;
      if(a == null) a = 1.0;
      if(regScl == null) regScl = 1.0;
      if(color == null) color = Color.white;
      if(scl == null) scl = 1.0;
      if(mag == null) mag = 1.0;
      if(wobSclX == null) wobSclX = 1.0;
      if(wobSclY == null) wobSclY = 1.0;

      var pos = mdl_game._pos(pos_gn);

      if(ldm) {
        drawNormalRegion(pos, reg, ang, a, regScl, color, z);
      } else {
        var w = reg.width * reg.scl();
        var h = reg.height * reg.scl();
        var ang_fi = ang + Mathf.sin(Time.time + pos.x, 50.0, 0.5) + Mathf.sin(Time.time - pos.y, 65.0, 0.9) + Mathf.sin(Time.time + pos.y - pos.x, 85.0, 0.9)

        if(z != null) Draw.z(z);
        Draw.color(color);
        Draw.alpha(a);
        Draw.rectv(reg, pos.x, pos.y, w, h, ang_fi, vec => vec.add(
          (Mathf.sin(vec.y * 3.0 + Time.time, 60.0 * scl, 0.5 * mag) + Mathf.sin(vec.x * 3.0 - Time.time, 70.0 * scl, 0.8 * mag)) * 1.5 * wobSclX,
          (Mathf.sin(vec.x * 3.0 + Time.time + 8.0, 66.0 * scl, 0.55 * mag) + Mathf.sin(vec.y * 3.0 - Time.time, 50.0 * scl, 0.2 * mag)) * 1.5 * wobSclY,
        ));
        Draw.reset();
      };
    };
    exports.drawWobbleRegion = drawWobbleRegion;


    /* <---------------- drawFlameRegion ----------------> */


    const drawFlameRegion = function(pos_gn, reg, frac, rad, radIn, radScl, radMag, radInMag, color) {
      if(Vars.headless || pos_gn == null || reg == null || frac < 0.0001) return;

      if(frac == null) frac = 1.0;
      if(rad == null) rad = 2.5;
      if(radIn == null) radIn = 1.5;
      if(radScl == null) radScl = 5.0;
      if(radMag == null) radMag = 2.0;
      if(radInMag == null) radInMag = 1.0;
      if(color == null) color = Color.valueOf("ffc999");

      var pos = mdl_game._pos(pos_gn);
      var param1 = 0.3;
      var param2 = 0.06;
      var param3 = Mathf.random(0.1);

      var x = pos.x;
      var y = pos.y;
      var a_fi = ((1.0 - param1) + Mathf.absin(Time.time, 8.0, param1) + Mathf.random(param2) - param2) * frac;
      var rad_fi = rad + Mathf.absin(Time.time, radScl, radMag) + param3;
      var radIn_fi = radIn + Mathf.absin(Time.time, radScl, radInMag) + param3;

      Draw.z(Layer.block + 0.01);
      Draw.alpha(frac);
      Draw.rect(reg, x, y);
      Draw.alpha(a_fi);
      Draw.tint(color);
      Fill.circle(x, y, rad_fi);
      Draw.color(1.0, 1.0, 1.0, frac);
      Fill.circle(x, y, radIn_fi);
      Draw.reset();
    };
    exports.drawFlameRegion = drawFlameRegion;


    /* <---------------- drawGlowRegion ----------------> */


    const drawGlowRegion = function(pos_gn, reg, a, color, pulse, pulseScl) {
      if(Vars.headless || pos_gn == null || reg == null) return;

      if(a == null) a = 1.0;
      if(color == null) color = Color.valueOf("ff3838");
      if(pulse == null) pulse = 0.3;
      if(pulseScl == null) pulseScl = 10.0;

      var pos = mdl_game._pos(pos_gn);
      var x = pos.x;
      var y = pos.y;
      var a_fi = a * (1.0 - pulse + Mathf.absin(pulseScl, pulse));

      Draw.z(Layer.blockAdditive);
      Draw.blend(Blending.additive);
      Draw.color(color);
      Draw.alpha(a_fi);
      Draw.rect(reg, x, y);
      Draw.blend();
      Draw.reset();
    };
    exports.drawGlowRegion = drawGlowRegion;


    const drawHeatRegion = function(pos_gn, frac, reg, size) {
      if(size == null) size = 1;
      if(Vars.headless) return;

      var pos = mdl_game._pos(pos_gn);
      if(reg == null) reg = mdl_heat._heatReg(size);
      drawGlowRegion(pos, reg, frac);
    };
    exports.drawHeatRegion = drawHeatRegion;


    /* <---------------- drawLight ----------------> */


    const drawLight = function(pos_gn, frac, size, rad, a, sinScl, sinMag, color) {
      if(Vars.headless || pos_gn == null || frac < 0.0001) return;

      if(frac == null) frac = 1.0;
      if(size == null) size = 1;
      if(rad == null) rad = 48.0;
      if(a == null) a = 0.65;
      if(sinScl == null) sinScl = 16.0;
      if(sinMag == null) sinMag = 6.0;
      if(color == null) color = Color.valueOf("ffc999");

      var pos = mdl_game._pos(pos_gn);
      var x = pos.x;
      var y = pos.y;

      Drawf.light(x, y, (rad + Mathf.absin(sinScl, sinMag)) * frac * size, color, a);
    };
    exports.drawLight = drawLight;


    /* <---------------- drawPlanRegion ----------------> */


    const drawPlanRegion = function(pos_gn, reg, color_gn) {
      if(Vars.headless || pos_gn == null || reg == null) return;

      if(color_gn == null) color_gn = Color.white;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var regScl = 0.825 + Math.sin(Time.time / 15.0) * 0.075;
      var w = reg.width * 2.0 * regScl / Vars.tilesize;
      var h = reg.height * 2.0 * regScl / Vars.tilesize;

      Draw.z(Layer.power - 0.01);
      Draw.color(color, 0.75);
      Draw.rect(reg, x, y, w, h);
      Draw.reset();
    };
    exports.drawPlanRegion = drawPlanRegion;


    const drawPlaceRegion = function(blk, t, color_gn) {
      if(Vars.headless || blk == null || t == null) return;

      var pos = mdl_game._pos(t, blk.offset);
      var reg = mdl_content._buildReg(blk);

      drawPlanRegion(pos, reg, color_gn)
    };
    exports.drawPlaceRegion = drawPlaceRegion;
  // End


  // Part: Line


    /* <---------------- drawLine ----------------> */


    const drawLine = function(pos_gn1, pos_gn2, color_gn, dashed) {
      if(Vars.headless || pos_gn1 == null || pos_gn2 == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(dashed == null) dashed = false;

      var pos1 = mdl_game._pos(pos_gn1);
      var pos2 = mdl_game._pos(pos_gn2);
      var color = _color(color_gn);
      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;
      var seg = Math.round(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) / Vars.tilesize * 2.0);

      Draw.z(Layer.effect + 6.1);
      Lines.stroke(3.0, Pal.gray);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Lines.stroke(1.0, color);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Draw.reset();
    };
    exports.drawLine = drawLine;


    /* <---------------- drawFlickerLine ----------------> */


    const drawFlickerLine = function(pos_gn1, pos_gn2, color_gn, scl, dashed, stroke, z) {
      if(Vars.headless || pos_gn1 == null || pos_gn2 == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;
      if(dashed == null) dashed = false;
      if(stroke == null) stroke = 1.5;

      var pos1 = mdl_game._pos(pos_gn1);
      var pos2 = mdl_game._pos(pos_gn2);
      var color = _color(color_gn);
      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;
      var scl_fi = scl * 15.0;
      var seg = Math.round(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) / Vars.tilesize * 2.0);
      var a = 0.3 + Math.sin(Time.time / scl_fi) * 0.2;

      Draw.z((z == null) ? (Layer.effect + 6.1) : z);
      Lines.stroke(stroke, color);
      Draw.alpha(a);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Draw.reset();
    };
    exports.drawFlickerLine = drawFlickerLine;


    /* <---------------- drawLaser ----------------> */


    const drawLaser = function(pos_gn1, pos_gn2, color_gn, hasLight) {
      if(Vars.headless || pos_gn1 == null || pos_gn2 == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(hasLight == null) hasLight = false;

      var pos1 = mdl_game._pos(pos_gn1);
      var pos2 = mdl_game._pos(pos_gn2);
      var color = _color(color_gn);
      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;

      var scl = 1.0 + Math.sin(Time.time / 15.0) * 0.3;

      Draw.z(Layer.effect + 6.1);
      Lines.stroke(3.0 * scl, color);
      Lines.line(x1, y1, x2, y2);
      Fill.circle(x1, y1, 8.0 * scl * 0.3);
      Fill.circle(x2, y2, 8.0 * scl * 0.3);
      Lines.stroke(1.0, Color.white);
      Fill.circle(x1, y1, 4.0 * scl * 0.3);
      Fill.circle(x2, y2, 4.0 * scl * 0.3);
      Lines.line(x1, y1, x2, y2);
      if(hasLight) Drawf.light(x1, y1, x2, y2);
    };
    exports.drawLaser = drawLaser;


    const drawMiningBeam = function(pos_gn_f, pos_gn_t, ang, off) {
      if(Vars.headless || pos_gn_f == null || pos_gn_t == null) return;

      if(ang == null) ang = 0.0;
      if(off == null) off = 4.0;

      var pos_f = mdl_game._pos(pos_gn_f);
      var pos_t = mdl_game._pos(pos_gn_t);
      var len = off + Mathf.absin(Time.time, 1.1, 0.5);
      var swingScl = 12.0;
      var swingMag = 1.1;
      var flashScl = 0.3;
      var mineLaserReg = Core.atlas.find("reind-misc-mine-laser");
      var mineLaserEndReg = Core.atlas.find("reind-misc-mine-laser-end");

      var x_f = pos_f.x + Angles.trnsx(ang, len);
      var y_f = pos_f.y + Angles.trnsy(ang, len);
      var x_t = pos_t.x + Mathf.sin(Time.time + 48.0, swingScl, swingMag);
      var y_t = pos_t.y + Mathf.sin(Time.time + 48.0, swingScl + 2.0, swingMag);

      Draw.z(Layer.flyingUnit + 0.1);
      Draw.color(Color.lightGray, Color.white, 1.0 - flashScl + Mathf.absin(Time.time, 0.5, flashScl));
      // V8 PENDING                 Draw.alpha(Vars.renderer.unitLaserOpacity);
      Drawf.laser(mineLaserReg, mineLaserEndReg, x_f, y_f, x_t, y_t, 0.75);
      Lines.stroke(1.0, Pal.techBlue);
      Lines.poly(pos_t.x, pos_t.y, 4, Vars.tilesize / 2.0 * Mathf.sqrt2, Time.time);
      Draw.reset();
    };
    exports.drawMiningBeam = drawMiningBeam;
  // End


  // Part: Rect


    /* <---------------- drawRect ----------------> */


    const drawRect = function(pos_gn, r, color_gn, size, dashed) {
      if(Vars.headless || pos_gn == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(size == null) size = 1;
      if(dashed == null) dashed = false;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var hw = (size / 2 + r) * Vars.tilesize;
      var seg = (size + r * 2) * 2;

      Draw.z(Layer.effect + 6.1);
      Lines.stroke(3.0, Pal.gray);
      if(dashed) {
        Lines.dashLine(x - hw, y - hw, x + hw, y - hw, seg);
        Lines.dashLine(x + hw, y - hw, x + hw, y + hw, seg);
        Lines.dashLine(x + hw, y + hw, x - hw, y + hw, seg);
        Lines.dashLine(x - hw, y + hw, x - hw, y - hw, seg);
      } else {
        Lines.line(x - hw, y - hw, x + hw, y - hw);
        Lines.line(x + hw, y - hw, x + hw, y + hw);
        Lines.line(x + hw, y + hw, x - hw, y + hw);
        Lines.line(x - hw, y + hw, x - hw, y - hw);
      };
      Lines.stroke(1.0, color);
      if(dashed) {
        Lines.dashLine(x - hw, y - hw, x + hw, y - hw, seg);
        Lines.dashLine(x + hw, y - hw, x + hw, y + hw, seg);
        Lines.dashLine(x + hw, y + hw, x - hw, y + hw, seg);
        Lines.dashLine(x - hw, y + hw, x - hw, y - hw, seg);
      } else {
        Lines.line(x - hw, y - hw, x + hw, y - hw);
        Lines.line(x + hw, y - hw, x + hw, y + hw);
        Lines.line(x + hw, y + hw, x - hw, y + hw);
        Lines.line(x - hw, y + hw, x - hw, y - hw);
      };
      Draw.reset();
    };
    exports.drawRect = drawRect;


    const drawPlaceRect = function(blk, t, color_gn, r, dashed) {
      if(Vars.headless || blk == null || t == null) return;

      drawRect(mdl_game._pos(t, blk.offset), r, color_gn, blk.size, dashed);
    };
    exports.drawPlaceRect = drawPlaceRect;


    const drawSelectRect = function(b, r, dashed, color_gn) {
      if(Vars.headless || b == null) return;

      if(color_gn == null) color_gn = true;

      drawPlaceRect(b.block, b.tile, color_gn, r, dashed);
    };
    exports.drawSelectRect = drawSelectRect;


    const drawBuildRect = function(b, valid, dashed) {
      if(Vars.headless || b == null) return;

      if(valid == null) valid = true;
      if(dashed == null) dashed = false;

      drawPlaceRect(b.block, b.tile, valid, 0, dashed);
    };
    exports.drawBuildRect = drawBuildRect;


    const drawBuildRectConnector = function(b, ob) {
      if(Vars.headless || b == null || ob == null) return;

      drawBuildRect(b);
      drawBuildRect(ob);
      drawLine(b, ob);
    };
    exports.drawBuildRectConnector = drawBuildRectConnector;
  // End


  // Part: Circle


    /* <---------------- drawCircle ----------------> */


    const drawCircle = function(pos_gn, rad, color_gn, dashed) {
      if(Vars.headless || pos_gn == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(dashed == null) dashed = false;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;

      Draw.z(Layer.effect + 6.1);
      Lines.stroke(3.0, Pal.gray);
      dashed ? Lines.dashCircle(x, y, rad) : Lines.circle(x, y, rad);
      Lines.stroke(1.0, color);
      dashed ? Lines.dashCircle(x, y, rad) : Lines.circle(x, y, rad);
      Draw.reset();
    };
    exports.drawCircle = drawCircle;


    const drawPlaceCircle = function(blk, t, color_gn, rad, dashed) {
      if(Vars.headless || blk == null || t == null) return;

      drawCircle(mdl_game._pos(t, blk.offset), rad, color_gn, dashed);
    };
    exports.drawPlaceCircle = drawPlaceCircle;


    const drawSelectCircle = function(b, rad, dashed, color_gn) {
      if(Vars.headless || b == null) return;

      if(color_gn == null) color_gn = true;

      drawPlaceCircle(b.block, b.tile, color_gn, rad, dashed);
    };
    exports.drawSelectCircle = drawSelectCircle;


    /* <---------------- drawWarningDisk ----------------> */


    const drawWarningDisk = function(pos_gn, rad, color_gn, scl) {
      if(Vars.headless || pos_gn == null) return;

      if(color_gn == null) color_gn = Pal.remove;
      if(scl == null) scl = 1.0;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var scl_fi = scl * 15.0;
      var a = 0.15 + Math.sin(Time.time / scl_fi) * 0.15;

      Draw.z(Layer.effect + 6.1);
      Draw.color(color);
      Draw.alpha(a);
      Fill.circle(x, y, rad);
      Draw.reset();
    };
    exports.drawWarningDisk = drawWarningDisk;
  // End


  // Part: Area


    /* <---------------- drawTileArea ----------------> */


    const drawTileArea = function(t, color_gn, a, size) {
      if(Vars.headless || t == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(a == null) a = 0.7;
      if(size == null) size = 1.0;

      var color = _color(color_gn);

      Draw.z(Layer.effect + 6.1);
      Draw.color(color);
      Draw.alpha(a);
      Fill.rect(t.worldx(), t.worldy(), Vars.tilesize * size, Vars.tilesize * size);
      Draw.reset();
    };
    exports.drawTileArea = drawTileArea;


    const drawTileIndicator = function(t, color_gn) {
      var size = 0.75 + Math.sin(Time.time / 15.0) * 0.15;
      drawTileArea(t, color_gn, 0.7, size);
    };
    exports.drawTileIndicator = drawTileIndicator;


    const drawBuildArea = function(b, color_gn, a, pad) {
      if(Vars.headless || b == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(a == null) a = 0.5;
      if(pad == null) pad = 0.0;

      var pos = mdl_game._pos(b);
      var w = b.block.size * Vars.tilesize - pad;
      var color = _color(color_gn);

      Draw.z(Layer.effect + 6.1);
      Draw.color(color);
      Draw.alpha(a);
      Fill.rect(pos.x, pos.y, w, w);
      Draw.reset();
    };
    exports.drawBuildArea = drawBuildArea;
  // End


  // Part: Pulse


    /* <---------------- drawCirclePulse ----------------> */


    const drawCirclePulse = function(pos_gn, rad, color_gn, scl, a) {
      if(Vars.headless || pos_gn == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;
      if(a == null) a = 0.5;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var scl_fi = scl * 150.0;
      var stroke_f = 4.0 * rad / 64.0;
      var stroke_t = 0.2;

      var frac1 = 1.0 - (Time.time / scl_fi) % 1.0;
      var frac2 = (frac1 + 1.0 / 4.0) % 1.0;
      var frac3 = (frac2 + 1.0 / 4.0) % 1.0;
      var frac4 = (frac3 + 1.0 / 4.0) % 1.0;
      var arr_rad = [
        Math.min(1.0 + (1.0 - frac1) * rad, rad),
        Math.min(1.0 + (1.0 - frac2) * rad, rad),
        Math.min(1.0 + (1.0 - frac3) * rad, rad),
        Math.min(1.0 + (1.0 - frac4) * rad, rad),
      ];

      Draw.z(Layer.effect + 6.1);
      Draw.color(color);
      Draw.alpha(a);
      for(let i = 0; i < 4; i++) {
        Lines.stroke(Mathf.lerpDelta(stroke_f, stroke_t, arr_rad[i] / rad));
        Lines.circle(x, y, arr_rad[i]);
      };
      Draw.reset();
    };
    exports.drawCirclePulse = drawCirclePulse;


    const drawRectPulse = function(pos_gn, rad, color_gn, scl, a) {
      if(Vars.headless || pos_gn == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;
      if(a == null) a = 0.7;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var scl_fi = scl * 150.0;
      var stroke_f = 16.0 * rad / 64.0;
      var stroke_t = 0.2;

      var frac1 = 1.0 - (Time.time / scl_fi) % 1.0;
      var frac2 = (frac1 + 1.0 / 2.0) % 1.0;
      var arr_rad = [
        Math.min(1.0 + Math.pow(1.0 - frac1, 0.5) * rad, rad),
        Math.min(1.0 + Math.pow(1.0 - frac2, 0.5) * rad, rad),
      ];

      Draw.z(Layer.effect + 6.1);
      Draw.color(color);
      Draw.alpha(a);
      for(let i = 0; i < 2; i++) {
        Lines.stroke(Mathf.lerpDelta(stroke_f, stroke_t, arr_rad[i] / rad));
        Lines.line(x - arr_rad[i], y - arr_rad[i], x + arr_rad[i], y - arr_rad[i]);
        Lines.line(x + arr_rad[i], y - arr_rad[i], x + arr_rad[i], y + arr_rad[i]);
        Lines.line(x + arr_rad[i], y + arr_rad[i], x - arr_rad[i], y + arr_rad[i]);
        Lines.line(x - arr_rad[i], y + arr_rad[i], x - arr_rad[i], y - arr_rad[i]);
      };
      Draw.reset();
    };
    exports.drawRectPulse = drawRectPulse;
  // End


  // Part: Progress


    /* <---------------- drawProgressBar ----------------> */


    const drawProgressBar = function(pos_gn, frac, color_gn, size, offW, offTy) {
      if(Vars.headless || pos_gn == null || frac == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(size == null) size = 1;
      if(offW == null) offW = 0.0;
      if(offTy == null) offTy = 0;

      var pos = mdl_game._pos(pos_gn);
      var frac_fi = Mathf.clamp(frac);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var w = (size + 1) * Vars.tilesize + offW;
      var offTy_fi = (offTy + size * 0.5 + 0.5) * Vars.tilesize;

      Draw.z(Layer.effect + 6.1);
      Lines.stroke(5.0, Pal.gray);
      Draw.alpha(0.7);
      Lines.line(x - w * 0.5, y + offTy_fi, x + w * 0.5, y + offTy_fi);
      Lines.stroke(3.0, color);
      Draw.alpha(0.2);
      Lines.line(x - w * 0.5, y + offTy_fi, x + w * 0.5, y + offTy_fi);
      Draw.alpha(0.7);
      Lines.line(x - w * 0.5, y + offTy_fi, Mathf.lerp(x - w * 0.5, x + w * 0.5, frac_fi), y + offTy_fi);
      Draw.reset();
    };
    exports.drawProgressBar = drawProgressBar;


    /* <---------------- drawProgressCircle ----------------> */


    /*
     * NOTE:
     *
     * Inspired by New Horizon mod by Yuria.
     * Speechless...
     */
    const drawProgressCircle = function(pos_gn, frac, rad, color_gn, ang, hideBottom) {
      if(Vars.headless || pos_gn == null || frac == null) return;

      if(rad == null) rad = 24.0;
      if(color_gn == null) color_gn = Pal.accent;
      if(ang == null) ang = 0.0;
      if(hideBottom == null) hideBottom = false;

      var pos = mdl_game._pos(pos_gn);
      var frac_fi = Mathf.clamp(frac);
      var color = _color(color_gn);
      var x = pos.x;
      var y = pos.y;
      var sides = Lines.circleVertices(rad) * (hideBottom ? 2 : 1);
      var ang_side = 360.0 / sides;
      var cap = Math.round(sides * frac_fi);

      var stroke = 5.0;
      var radIn = rad - stroke * 0.5 * (hideBottom ? 1.0 : 0.6);
      var radOut = rad + stroke * 0.5 * (hideBottom ? 1.0 : 0.6);

      if(!hideBottom) {
        Draw.z(Layer.effect + 6.1);
        Lines.stroke(stroke, Pal.gray);
        Draw.alpha(0.7);
        Lines.circle(x, y, rad);
        Lines.stroke(stroke * 0.6, color);
        Draw.alpha(0.2);
        Lines.circle(x, y, rad);
      };

      for(let i = 0; i < cap; i++) {
        var ang_i = ang_side * i + ang

        Draw.color(color);
        Draw.alpha(hideBottom ? 1.0 : 0.7);
        Fill.quad(
          x + radIn * Mathf.cosDeg(ang_i),
          y + radIn * Mathf.sinDeg(ang_i),
          x + radIn * Mathf.cosDeg(ang_i + ang_side),
          y + radIn * Mathf.sinDeg(ang_i + ang_side),
          x + radOut * Mathf.cosDeg(ang_i + ang_side),
          y + radOut * Mathf.sinDeg(ang_i + ang_side),
          x + radOut * Mathf.cosDeg(ang_i),
          y + radOut * Mathf.sinDeg(ang_i),
        );
      };

      Draw.reset();
    };
    exports.drawProgressCircle = drawProgressCircle;


  // End


  // Part: Content


    /* <---------------- drawItem ----------------> */


    const drawItemTransfer = function(pos_gn_f, pos_gn_t, color_gn, scl) {
      if(Vars.headless || pos_gn_f == null || pos_gn_t == null) return;

      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;

      var pos_f = mdl_game._pos(pos_gn_f);
      var pos_t = mdl_game._pos(pos_gn_t);
      var color = _color(color_gn);
      var x_f = pos_f.x;
      var y_f = pos_f.y;
      var x_t = pos_t.x;
      var y_t = pos_t.y;
      var scl_fi = scl * 60.0;

      var frac1 = (Time.time / scl_fi) % 1.0;
      var frac2 = (frac1 + 1.0 / 3.0) % 1.0;
      var frac3 = (frac2 + 1.0 / 3.0) % 1.0;
      var x_1 = x_f + (x_t - x_f) * Math.pow(frac1, 5);
      var x_2 = x_f + (x_t - x_f) * Math.pow(frac2, 5);
      var x_3 = x_f + (x_t - x_f) * Math.pow(frac3, 5);
      var y_1 = y_f + (y_t - y_f) * Math.pow(frac1, 5);
      var y_2 = y_f + (y_t - y_f) * Math.pow(frac2, 5);
      var y_3 = y_f + (y_t - y_f) * Math.pow(frac3, 5);
      var rad_1 = 1.5 - Math.pow(frac1, 10) * 0.5;
      var rad_2 = 1.5 - Math.pow(frac2, 10) * 0.5;
      var rad_3 = 1.5 - Math.pow(frac3, 10) * 0.5;

      Draw.z(Layer.effect + 6.1);
      Draw.color(color);
      Fill.circle(x_1, y_1, rad_1);
      Fill.circle(x_2, y_2, rad_2);
      Fill.circle(x_3, y_3, rad_3);
      Draw.color(Color.white);
      Fill.circle(x_1, y_1, rad_1 * 0.5);
      Fill.circle(x_2, y_2, rad_2 * 0.5);
      Fill.circle(x_3, y_3, rad_3 * 0.5);
      Draw.reset();
    };
    exports.drawItemTransfer = drawItemTransfer;


    /* <---------------- drawIcon ----------------> */


    const drawContentIcon = function(pos_gn, ct, size) {
      if(Vars.headless || pos_gn == null || ct == null) return;

      if(size == null) size = 1;

      var pos = mdl_game._pos(pos_gn);
      var x = pos.x - Vars.tilesize * 0.5 * size;
      var y = pos.y + Vars.tilesize * 0.5 * size;
      var offY = -1.0;
      var w = 6.0;

      Draw.z(Layer.effect + 6.1);
      Draw.mixcol(Color.darkGray, 1.0);
      Draw.rect(ct.uiIcon, x, y + offY, w, w);
      Draw.reset();
      Draw.rect(ct.uiIcon, x, y, w, w);
    };
    exports.drawContentIcon = drawContentIcon;
  // End


  // Part: Status


    /* <---------------- drawBlockStatus ----------------> */


    const drawBlockStatus = function(b, color) {
      if(Vars.headless || b == null) return;

      if(color == null) color = b.status().color;
      var mtp = b.block.size > 1 ? 1.0 : 0.64;
      var cx = b.x + b.block.size * Vars.tilesize * 0.5 - Vars.tilesize * mtp * 0.5;
      var cy = b.y - b.block.size * Vars.tilesize * 0.5 + Vars.tilesize * mtp * 0.5;

      Draw.z(Layer.power + 1.0);
      Draw.color(Pal.gray);
      Fill.square(cx, cy, mtp * 2.5, 45.0);
      Draw.color(color);
      Fill.square(cx, cy, mtp * 1.5, 45.0);
      Draw.reset();
    };
    exports.drawBlockStatus = drawBlockStatus;


    /* <---------------- drawFadeStatus ----------------> */


    const drawFadeStatus = function(e, reg, color) {
      if(Vars.headless || e == null || reg == null) return;

      if(color == null) color = Color.white;

      var scl = (e instanceof Unit) ? (0.1 * e.type.hitSize) : (0.1 * e.block.size * Vars.tilesize);

      drawFadeRegion(e, reg, 0.0, 0.5, scl, 0.5, color, 111.0)
    };
    exports.drawFadeStatus = drawFadeStatus;
  // End


  // Part: Text
    const drawText = function(pos_gn, str, color_gn, sizeScl, align, offX, offY, offZ) {
      if(Vars.headless || pos_gn == null || str == null) return;

      if(color_gn == null) color_gn = Color.white;
      if(sizeScl == null) sizeScl = 1.0;
      if(align == null) align = Align.center;
      if(offX == null) offX = 0.0;
      if(offY == null) offY = 0.0;
      if(offZ == null) offZ = 0.0;

      var pos = mdl_game._pos(pos_gn);
      var color = _color(color_gn);
      var z = Drawf.text();

      var font = Fonts.outline;
      var layout = Pools.obtain(GlyphLayout, () => new GlyphLayout());
      var useInt = font.usesIntegerPositions();

      Draw.z(Layer.playerName + 0.5 + offZ);
      font.setUseIntegerPositions(false);
      font.getData().setScale(0.25 / Scl.scl(1.0) * sizeScl);
      layout.setText(font, str);
      font.setColor(color);
      font.draw(str, pos.x + offX, pos.y + offY, 0, align, false);

      Draw.reset();
      Pools.free(layout);
      font.getData().setScale(1.0);
      font.setColor(Color.white);
      font.setUseIntegerPositions(useInt);

      Draw.z(z);
    };
    exports.drawText = drawText;


    const drawPlaceText = function(blk, t, valid, str, offTy) {
      if(Vars.headless || blk == null || t == null || str == null) return;

      if(valid == null) valid = true;
      if(offTy == null) offTy = 0;

      blk.drawPlaceText(str, t.x + blk.offset / Vars.tilesize, t.y + blk.offset / Vars.tilesize + offTy, valid);
    };
    exports.drawPlaceText = drawPlaceText;


    const drawSelectText = function(b, valid, str, offTy) {
      if(Vars.headless || b == null) return;

      drawPlaceText(b.block, b.tile, valid, str, offTy);
    };
    exports.drawSelectText = drawSelectText;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_draw.js loaded.");
});
