/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_geometry = require("reind/mdl/mdl_geometry");
    const mdl_heat = require("reind/mdl/mdl_heat");
  // End


  // Part: Color
    const palette_gn = function(color_gn) {
      if(color_gn == null) return;
      if(color_gn instanceof Color) return color_gn;

      var color;
      if(typeof color_gn == "string") {
        color = Color.valueOf(color_gn);
      };
      if(typeof color_gn == "boolean") {
        color = color_gn ? Pal.accent : Pal.remove;
      };

      return color;
    };
    exports.palette_gn = palette_gn;
  // End


  // Part: Region


    /* <---------------- drawNormalRegion ----------------> */


    /* NOTE: Simply DrawRegion with more arguments. */
    const drawNormalRegion = function(pos, reg, ang, a, regScl, color, z) {
      if(ang == null) ang = 0.0;
      if(a == null) a = 1.0;
      if(regScl == null) regScl = 1.0;
      if(color == null) color = Color.white;
      if(reg == null) return;

      var x = pos.x;
      var y = pos.y;
      var w = reg.width * 2.0 * regScl / Vars.tilesize;
      var h = reg.height * 2.0 * regScl / Vars.tilesize;

      if(z != null) Draw.z(z);
      Draw.color(color);
      Draw.alpha(a);
      Draw.rect(reg, x, y, w, h, ang);
      Draw.reset();
    };
    exports.drawNormalRegion = drawNormalRegion;


    /* <---------------- drawShadowRegion ----------------> */


    const drawSimpleShadow = function(pos, reg, ang, a, regScl, color, z) {
      Draw.mixcol(Color.darkGray, 1.0);
      drawNormalRegion(pos, reg, ang, a * 0.4, regScl, color, z);
    };
    exports.drawSimpleShadow = drawSimpleShadow;


    const drawBlurredShadow = function(pos, reg, ang, a, regScl, color, z) {
      Draw.mixcol(Color.darkGray, 1.0);
      drawNormalRegion(pos, reg, ang, a * 0.2, regScl, color, z);
      Draw.mixcol(Color.darkGray, 1.0);
      drawNormalRegion(pos, reg, ang, a * 0.18, regScl * 1.05, color, z);
      Draw.mixcol(Color.darkGray, 1.0);
      drawNormalRegion(pos, reg, ang, a * 0.16, regScl * 1.1, color, z);
      Draw.mixcol(Color.darkGray, 1.0);
      drawNormalRegion(pos, reg, ang, a * 0.14, regScl * 1.15, color, z);
    };
    exports.drawBlurredShadow = drawBlurredShadow;


    /* <---------------- drawFadeRegion ----------------> */


    /* NOTE: DrawFade. */
    const drawFadeRegion = function(pos, reg, ang, a, regScl, fadeScl, color, z) {
      if(a == null) a = 1.0;
      if(fadeScl == null) fadeScl = 1.0;
      if(reg == null) return;

      var a_fi = a * Math.abs(Math.sin(Time.time / 15.0 / fadeScl));

      drawNormalRegion(pos, reg, ang, a_fi, regScl, color, z);
    };
    exports.drawFadeRegion = drawFadeRegion;


    /* NOTE: Draws a flickering region, used for warning lights. */
    const drawFadeAlert = function(pos, reg, frac, ang, a, regScl, color, z) {
      if(frac == null) frac = 0.0;

      var a_fi = Math.min(frac / 0.5, 1.0);
      var fadeScl = 2.5 - frac * 1.5;

      drawFadeRegion(pos, reg, ang, a_fi, regScl, fadeScl, color, z);
    };
    exports.drawFadeAlert = drawFadeAlert;


    /* <---------------- drawRotatorRegion ----------------> */


    /* NOTE: The sprite rotates. */
    const drawRotatorRegion = function(pos, reg, ang, rate) {
      if(ang == null) ang = 0.0;
      if(rate == null) rate = 0.0;
      if(reg == null) return;

      var x = pos.x;
      var y = pos.y;
      var ang_fi = Mathf.mod(Time.time * rate + ang, 90.0);

      Draw.rect(reg, x, y, ang_fi);
      Draw.alpha(ang / 90.0);
      Draw.rect(reg, x, y, ang_fi - 90.0);
      Draw.reset();
    };
    exports.drawRotatorRegion = drawRotatorRegion;


    /* <---------------- drawWobbleRegion ----------------> */


    const drawWobbleRegion = function(pos, reg, ang, a, regScl, color, scl, mag, wobSclX, wobSclY, z) {
      if(ang == null) ang = 0.0;
      if(a == null) a = 1.0;
      if(regScl == null) regScl = 1.0;
      if(color == null) color = Color.white;
      if(scl == null) scl = 1.0;
      if(mag == null) mag = 1.0;
      if(wobSclX == null) wobSclX = 1.0;
      if(wobSclY == null) wobSclY = 1.0;
      if(reg == null) return;

      var w = reg.width * reg.scl();
      var h = reg.height * reg.scl();

      if(z != null) Draw.z(z);
      Draw.color(color);
      Draw.alpha(a);
      Draw.rectv(reg, pos.x, pos.y, w, h, ang, vec => vec.add(
        (Mathf.sin(vec.y * 3.0 + Time.time, 60.0 * scl, 0.5 * mag) + Mathf.sin(vec.x * 3.0 - Time.time, 70.0 * scl, 0.8 * mag)) * 1.5 * wobSclX,
        (Mathf.sin(vec.x * 3.0 + Time.time + 8.0, 66.0 * scl, 0.55 * mag) + Mathf.sin(vec.y * 3.0 - Time.time, 50.0 * scl, 0.2 * mag)) * 1.5 * wobSclY,
      ));
      Draw.reset();
    };
    exports.drawWobbleRegion = drawWobbleRegion;


    /* <---------------- drawFlameRegion ----------------> */


    const drawFlameRegion = function(pos, reg, frac, rad, radIn, radScl, radMag, radInMag, color) {
      if(frac == null) frac = 1.0;
      if(rad == null) rad = 2.5;
      if(radIn == null) radIn = 1.5;
      if(radScl == null) radScl = 5.0;
      if(radMag == null) radMag = 2.0;
      if(radInMag == null) radInMag = 1.0;
      if(color == null) color = Color.valueOf("ffc999");
      if(frac < 0.0001) return;

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


    /* NOTE: DrawGlowRegion but integrated. */
    const drawGlowRegion = function(pos, reg, a, color, pulse, pulseScl) {
      if(a == null) a = 1.0;
      if(color == null) color = Color.valueOf("ff3838");
      if(pulse == null) pulse = 0.3;
      if(pulseScl == null) pulseScl = 10.0;
      if(reg == null) return;

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


    /* NOTE: {reg} is optional. */
    const drawHeatRegion = function(pos, frac, reg, size) {
      if(size == null) size = 1;
      if(reg == null) reg = mdl_heat.getHeatRegion(size);

      drawGlowRegion(pos, reg, frac);
    };
    exports.drawHeatRegion = drawHeatRegion;


    /* <---------------- drawLight ----------------> */


    /* NOTE: Regular DrawLight. */
    const drawLight = function(pos, frac, size, rad, a, sinScl, sinMag, color) {
      if(frac == null) frac = 1.0;
      if(size == null) size = 1;
      if(rad == null) rad = 48.0;
      if(a == null) a = 0.65;
      if(sinScl == null) sinScl = 16.0;
      if(sinMag == null) sinMag = 6.0;
      if(color == null) color = Color.valueOf("ffc999");
      if(frac < 0.0001) return;

      var x = pos.x;
      var y = pos.y;

      Drawf.light(x, y, (rad + Mathf.absin(sinScl, sinMag)) * frac * size, color, a);
    };
    exports.drawLight = drawLight;
  // End


  // Part: Text
    /* NOTE: Draws a text line over the block. */
    const drawPlaceText = function(blk, t, valid, str, off_ty) {
      if(valid == null) valid = true;
      if(off_ty == null) off_ty = 0;
      if(blk == null || t == null || str == null) return;

      blk.drawPlaceText(str, t.x + blk.offset / Vars.tilesize, t.y + blk.offset / Vars.tilesize + off_ty, valid);
    };
    exports.drawPlaceText = drawPlaceText;


    const drawSelectText = function(b, valid, str, off_ty) {
      if(b == null) return;

      drawPlaceText(b.block, b.tile, valid, str, off_ty);
    };
    exports.drawSelectText = drawSelectText;
  // End


  // Part: Line


    /* <---------------- drawLine ----------------> */


    /* NOTE: Simply draws a line. */
    const drawLine = function(pos1, pos2, color_gn, dashed) {
      if(color_gn == null) color_gn = Pal.accent;
      if(dashed == null) dashed = false;

      var color = palette_gn(color_gn);
      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;
      var seg = Math.round(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) / Vars.tilesize * 2.0);

      Lines.stroke(3.0, Pal.gray);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Lines.stroke(1.0, color);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Draw.reset();
    };
    exports.drawLine = drawLine;


    /* <---------------- drawFlickerLine ----------------> */


    /* NOTE: Draws a pulsing line between two positions. */
    const drawFlickerLine = function(pos1, pos2, color_gn, scl, dashed) {
      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;
      if(dashed == null) dashed = false;

      var color = palette_gn(color_gn);
      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;
      var scl_fi = scl * 15.0;
      var seg = Math.round(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) / Vars.tilesize * 2.0);
      var a = 0.3 + Math.sin(Time.time / scl_fi) * 0.2;

      Lines.stroke(1.5, color);
      Draw.alpha(a);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Draw.reset();
    };
    exports.drawFlickerLine = drawFlickerLine;


    /* <---------------- drawLaser ----------------> */


    /* NOTE: The line is now a laser beam in vanilla style. */
    const drawLaser = function(pos1, pos2, color_gn, hasLight) {
      if(color_gn == null) color_gn = Pal.accent;
      if(hasLight == null) hasLight = false;

      var color = palette_gn(color_gn);
      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;

      var scl = 1.0 + Math.sin(Time.time / 15.0) * 0.3;

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
  // End


  // Part: Rect


    /* <---------------- drawRect ----------------> */


    /* NOTE: The classic rectangular range. */
    const drawRect = function(pos, r, color_gn, size, dashed) {
      if(color_gn == null) color_gn = Pal.accent;
      if(size == null) size = 1;
      if(dashed == null) dashed = false;

      var color = palette_gn(color_gn);
      var x = pos.x;
      var y = pos.y;
      var hw = (size / 2 + r) * Vars.tilesize;
      var seg = (size + r * 2) * 2;

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


    const drawPlaceRect = function(blk, t, valid, r, dashed) {
      if(blk == null || t == null) return;

      drawRect(mdl_geometry.poser_1t(t, blk.offset), r, valid, blk.size, dashed);
    };
    exports.drawPlaceRect = drawPlaceRect;


    const drawSelectRect = function(b, r, dashed) {
      if(b == null) return;

      drawPlaceRect(b.block, b.tile, true, r, dashed);
    };
    exports.drawSelectRect = drawSelectRect;


    /* NOTE: This rect only contains the building. */
    const drawBuildRect = function(b, valid, dashed) {
      if(b == null) return;

      drawPlaceRect(b.block, b.tile, valid, 0, dashed);
    };
    exports.drawBuildRect = drawBuildRect;
  // End


  // Part: Circle


    /* <---------------- drawCircle ----------------> */


    /* NOTE: The classic circular range. */
    const drawCircle = function(pos, rad, color_gn, dashed) {
      if(color_gn == null) color_gn = Pal.accent;
      if(dashed == null) dashed = false;

      var color = palette_gn(color_gn);
      var x = pos.x;
      var y = pos.y;

      Lines.stroke(3.0, Pal.gray);
      dashed ? Lines.dashCircle(x, y, rad) : Lines.circle(x, y, rad);
      Lines.stroke(1.0, color);
      dashed ? Lines.dashCircle(x, y, rad) : Lines.circle(x, y, rad);
      Draw.reset();
    };
    exports.drawCircle = drawCircle;


    const drawPlaceCircle = function(blk, t, valid, rad, dashed) {
      if(blk == null || t == null) return;

      drawCircle(mdl_geometry.poser_1t(t, blk.offset), rad, valid, dashed);
    };
    exports.drawPlaceCircle = drawPlaceCircle;


    const drawSelectCircle = function(b, rad, dashed) {
      if(b == null) return;

      drawPlaceCircle(b.block, b.tile, true, rad, dashed);
    };
    exports.drawSelectCircle = drawSelectCircle;


    /* <---------------- drawWarningDisk ----------------> */


    /* NOTE: Draws a pulsing filled circle, usually indicative of explosion. */
    const drawWarningDisk = function(pos, rad, color_gn, scl) {
      if(color_gn == null) color_gn = Pal.remove;
      if(scl == null) scl = 1.0;

      var color = palette_gn(color_gn);
      var x = pos.x;
      var y = pos.y;
      var scl_fi = scl * 15.0;
      var a = 0.15 + Math.sin(Time.time / scl_fi) * 0.15;

      Draw.color(color);
      Draw.alpha(a);
      Fill.circle(x, y, rad);
      Draw.reset();
    };
    exports.drawWarningDisk = drawWarningDisk;
  // End


  // Part: Area


    /* <---------------- drawTileArea ----------------> */


    /* NOTE: Draws a tiny filled square in a tile. */
    const drawTileArea = function(t, color_gn, a, size) {
      if(color_gn == null) color_gn = Pal.accent;
      if(a == null) a = 0.7;
      if(size == null) size = 1.0;
      if(t == null) return;

      var color = palette_gn(color_gn);

      Draw.z(Layer.effect + 0.01);
      Draw.color(color);
      Draw.alpha(a);
      Fill.rect(t.worldx(), t.worldy(), Vars.tilesize * size, Vars.tilesize * size);
      Draw.reset();
    };
    exports.drawTileArea = drawTileArea;


    /* NOTE: Draws an animated square instead. Treats {color_gn} as color if it's not a boolean. */
    const drawTileIndicator = function(t, color_gn) {
      var size = 0.75 + Math.sin(Time.time / 15.0) * 0.15;
      drawTileArea(t, color_gn, 0.7, size);
    };
    exports.drawTileIndicator = drawTileIndicator;


    /* NOTE: Like {drawTileArea} but a building is used. */
    const drawBuildArea = function(b, color_gn, a, pad) {
      if(color_gn == null) color_gn = Pal.accent;
      if(a == null) a = 0.5;
      if(pad == null) pad = 0.0;
      if(b == null) return;

      var pos = mdl_geometry.poser_1b(b);
      var w = b.block.size * Vars.tilesize - pad;
      var color = palette_gn(color_gn);

      Draw.z(Layer.effect + 0.01);
      Draw.color(color);
      Draw.alpha(a);
      Fill.rect(pos.x, pos.y, w, w);
      Draw.reset();
    };
    exports.drawBuildArea = drawBuildArea;
  // End


  // Part: Pulse


    /* <---------------- drawCirclePulse ----------------> */


    /* NOTE: Used for impact wave indication. */
    const drawCirclePulse = function(pos, rad, color_gn, scl, a) {
      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;
      if(a == null) a = 0.5;

      var color = palette_gn(color_gn);
      var x = pos.x;
      var y = pos.y;
      var scl_fi = scl * 150.0;
      var stroke_f = 4.0 * rad / 64.0;
      var stroke_t = 0.0;

      var frac1 = 1.0 - (Time.time / scl_fi) % 1.0;
      var frac2 = (frac1 + 1.0 / 4.0) % 1.0;
      var frac3 = (frac2 + 1.0 / 4.0) % 1.0;
      var frac4 = (frac3 + 1.0 / 4.0) % 1.0;
      var rad1 = Math.min(1.0 + (1.0 - frac1) * rad, rad);
      var rad2 = Math.min(1.0 + (1.0 - frac2) * rad, rad);
      var rad3 = Math.min(1.0 + (1.0 - frac3) * rad, rad);
      var rad4 = Math.min(1.0 + (1.0 - frac4) * rad, rad);

      Draw.color(color);
      Draw.alpha(a);
      Lines.stroke(Mathf.lerpDelta(stroke_f, stroke_t, rad1 / rad));
      Lines.circle(x, y, rad1);
      Lines.stroke(Mathf.lerpDelta(stroke_f, stroke_t, rad2 / rad));
      Lines.circle(x, y, rad2);
      Lines.stroke(Mathf.lerpDelta(stroke_f, stroke_t, rad3 / rad));
      Lines.circle(x, y, rad3);
      Lines.stroke(Mathf.lerpDelta(stroke_f, stroke_t, rad4 / rad));
      Lines.circle(x, y, rad4);
      Draw.reset();
    };
    exports.drawCirclePulse = drawCirclePulse;
  // End


  // Part: Progress


    /* <---------------- drawProgressBar ----------------> */


    /* NOTE: Draws a progress bar over the block. */
    const drawProgressBar = function(pos, frac, color_gn, size, off_w, off_ty) {
      if(color_gn == null) color_gn = Pal.accent;
      if(size == null) size = 1;
      if(off_w == null) off_w = 0.0;
      if(off_ty == null) off_ty = 0;

      var color = palette_gn(color_gn);
      var x = pos.x;
      var y = pos.y;
      var w = (size + 1) * Vars.tilesize + off_w;
      var off_ty_fi = (off_ty + size * 0.5 + 0.5) * Vars.tilesize;

      Lines.stroke(5.0, Pal.gray);
      Draw.alpha(0.7);
      Lines.line(x - w * 0.5, y + off_ty_fi, x + w * 0.5, y + off_ty_fi);
      Lines.stroke(3.0, color);
      Draw.alpha(0.2);
      Lines.line(x - w * 0.5, y + off_ty_fi, x + w * 0.5, y + off_ty_fi);
      Draw.alpha(0.7);
      Lines.line(x - w * 0.5, y + off_ty_fi, Mathf.lerp(x - w * 0.5, x + w * 0.5, frac), y + off_ty_fi);
      Draw.reset();
    };
    exports.drawProgressBar = drawProgressBar;
  // End


  // Part: Content


    /* <---------------- drawItem ----------------> */


    /* NOTE: Draws a series of light orbs which represent the items. */
    const drawItemTransfer = function(pos_f, pos_t, color_gn, scl) {
      if(color_gn == null) color_gn = Pal.accent;
      if(scl == null) scl = 1.0;

      var color = palette_gn(color_gn);
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
      var rad_1 = 1.5 - Math.pow(frac1, 10) * 1.5;
      var rad_2 = 1.5 - Math.pow(frac2, 10) * 1.5;
      var rad_3 = 1.5 - Math.pow(frac3, 10) * 1.5;

      Draw.z(Layer.effect + 0.01);
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


    /* NOTE: Draws the content icon at the left-upper corner of the block. */
    const drawContentIcon = function(pos, ct, size) {
      if(size == null) size = 1;

      var x = pos.x - Vars.tilesize * 0.5 * size;
      var y = pos.y + Vars.tilesize * 0.5 * size;
      var off_y = -1.0;
      var w = 6.0;

      Draw.mixcol(Color.darkGray, 1.0);
      Draw.rect(ct.uiIcon, x, y + off_y, w, w);
      Draw.reset();
      Draw.rect(ct.uiIcon, x, y, w, w);
    };
    exports.drawContentIcon = drawContentIcon;
  // End


  // Part: Status


    /* <---------------- drawFadeStatus ----------------> */


    /* NOTE: Draws a pulsing region on {e}, the size is dynamic. */
    const drawFadeStatus = function(e, reg, color) {
      if(color == null) color = Color.white;
      if(e == null || reg == null) return;

      var pos = (e instanceof Unit) ? mdl_geometry.poser_1u(e) : mdl_geometry.poser_1b(e);
      var scl = (e instanceof Unit) ? (0.1 * e.type.hitSize) : (0.1 * e.block.size * Vars.tilesize);

      drawFadeRegion(pos, reg, 0.0, 0.5, scl, 0.5, color, 110.0)
    };
    exports.drawFadeStatus = drawFadeStatus;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_draw.js loaded.");
});
