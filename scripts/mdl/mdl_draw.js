/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_geometry = require("reind/mdl/mdl_geometry");
    const mdl_heat = require("reind/mdl/mdl_heat");
  // End


  // Part: Region


    /* <---------------- drawNormalRegion ----------------> */


    /* NOTE: Simply DrawRegion with more arguments. */
    const drawNormalRegion_1pos = function(pos, reg, rot, a, scl) {
      if(rot == null) rot = 0;
      if(a == null) a = 1.0;
      if(scl == null) scl = 1.0;
      if(reg == null) return;

      var x = pos.x;
      var y = pos.y;
      var w = reg.width * scl;
      var h = reg.height * scl;

      Draw.alpha(a);
      Draw.rect(reg, x, y, w, h, rot);
      Draw.reset();
    };
    exports.drawNormalRegion_1pos = drawNormalRegion_1pos;


    const drawNormalRegion_1t = function(t, off, reg, rot, a, scl) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawNormalRegion_1pos(pos, reg, rot, a, scl);
    };
    exports.drawNormalRegion_1t = drawNormalRegion_1t;


    const drawNormalRegion_1blk = function(blk, t, reg, rot, a, scl) {
      if(blk == null || t == null) return;

      drawNormalRegion_1t(t, blk.offset, reg, rot, a, scl);
    };
    exports.drawNormalRegion_1blk = drawNormalRegion_1blk;


    const drawNormalRegion_1b = function(b, reg, rot, a, scl) {
      if(b == null) return;

      drawNormalRegion_1t(b.tile, b.block.offset, reg, rot, a, scl);
    };
    exports.drawNormalRegion_1b = drawNormalRegion_1b;


    /* <---------------- drawFlameRegion ----------------> */


    const drawFlameRegion_1pos = function(pos, reg, frac, rad, radIn, radScl, radMag, radInMag, color) {
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
    exports.drawFlameRegion_1pos = drawFlameRegion_1pos;


    const drawFlameRegion_1t = function(t, off, reg, frac, rad, radIn, radScl, radMag, radInMag, color) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawFlameRegion_1pos(pos, reg, frac, rad, radIn, radScl, radMag, radInMag, color)
    };
    exports.drawFlameRegion_1t = drawFlameRegion_1t;


    const drawFlameRegion_1blk = function(blk, t, reg, frac, rad, radIn, radScl, radMag, radInMag, color) {
      if(blk == null || t == null) return;

      drawFlameRegion_1t(t, blk.offset, reg, frac, rad, radIn, radScl, radMag, radInMag, color);
    };
    exports.drawFlameRegion_1blk = drawFlameRegion_1blk;


    const drawFlameRegion_1b = function(b, reg, frac, rad, radIn, radScl, radMag, radInMag, color) {
      if(b == null) return;

      drawFlameRegion_1t(b.tile, b.block.offset, reg, frac, rad, radIn, radScl, radMag, radInMag, color);
    };
    exports.drawFlameRegion_1b = drawFlameRegion_1b;


    /* <---------------- drawGlowRegion ----------------> */


    /* NOTE: DrawGlowRegion but integrated. */
    const drawGlowRegion_1pos = function(pos, reg, a, color, pulse, pulseScl) {
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
    exports.drawGlowRegion_1pos = drawGlowRegion_1pos;


    const drawGlowRegion_1t = function(t, off, reg, a, color, pulse, pulseScl) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawGlowRegion_1pos(pos, reg, a, color, pulse, pulseScl);
    };
    exports.drawGlowRegion_1t = drawGlowRegion_1t;


    const drawGlowRegion_1blk = function(blk, t, reg, a, color, pulse, pulseScl) {
      if(blk == null || t == null) return;

      drawGlowRegion_1t(t, blk.offset, reg, a, color, pulse, pulseScl);
    };
    exports.drawGlowRegion_1blk = drawGlowRegion_1blk;


    const drawGlowRegion_1b = function(b, reg, a, color, pulse, pulseScl) {
      if(b == null) return;

      drawGlowRegion_1t(b.tile, b.block.offset, reg, a, color, pulse, pulseScl);
    };
    exports.drawGlowRegion_1b = drawGlowRegion_1b;


    /* NOTE: {reg} is optional. */
    const drawGenericHeatRegion = function(b, frac, reg) {
      if(reg == null) reg = mdl_heat.getHeatRegion(b.block.size);
      if(b == null) return;

      drawGlowRegion_1b(b, reg, frac);
    };
    exports.drawGenericHeatRegion = drawGenericHeatRegion;


    /* <---------------- drawLight ----------------> */


    /* NOTE: Regular DrawLight. */
    const drawLight_1pos = function(pos, frac, size, rad, a, sinScl, sinMag, color) {
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
    exports.drawLight_1pos = drawLight_1pos;


    const drawLight_1t = function(t, off, frac, size, rad, a, sinScl, sinMag, color) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawLight_1pos(pos, frac, size, rad, a, sinScl, sinMag, color);
    };
    exports.drawLight_1t = drawLight_1t;


    const drawLight_1blk = function(blk, t, frac, rad, a, sinScl, sinMag, color) {
      if(blk == null || t == null) return;

      drawLight_1t(t, blk.offset, frac, blk.size, rad, a, sinScl, sinMag, color);
    };
    exports.drawLight_1blk = drawLight_1blk;


    const drawLight_1b = function(b, frac, rad, a, sinScl, sinMag, color) {
      if(b == null) return;

      drawLight_1t(b.tile, b.block.offset, frac, b.block.size, rad, a, sinScl, sinMag, color);
    };
    exports.drawLight_1b = drawLight_1b;
  // End


  // Part: Text
    /* NOTE: Draws a text line over the block. */
    const drawPlaceText = function(blk, t, valid, str, off_ty) {
      if(off_ty == null) off_ty = 0;
      if(blk == null || t == null) return;

      blk.drawPlaceText(str, t.x + blk.offset / Vars.tilesize, t.y + blk.offset / Vars.tilesize + off_ty, valid);
    };
    exports.drawPlaceText = drawPlaceText;


    const drawSelectText = function(b, str, off_ty) {
      if(b == null) return;

      drawPlaceText(b.block, b.tile, true, str, off_ty);
    };
    exports.drawSelectText = drawSelectText;
  // End


  // Part: Line


    /* <---------------- drawLine ----------------> */


    /* NOTE: Simply draws a line. */
    const drawLine_2pos = function(pos1, pos2, color, dashed) {
      if(color == null) color = Pal.accent;
      if(dashed == null) dashed = false;

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
    exports.drawLine_2pos = drawLine_2pos;


    const drawLine_2t = function(t1, t2, off1, off2, color, dashed) {
      if(off1 == null) off1 = 0.0;
      if(off2 == null) off2 = 0.0;

      if(t1 == null || t2 == null) return;

      var pos1 = mdl_geometry.getPos_1t(t1, off1);
      var pos2 = mdl_geometry.getPos_1t(t2, off2);

      drawLine_2pos(pos1, pos2, color, dashed);
    };
    exports.drawLine_2t = drawLine_2t;


    const drawLine_2b = function(b1, b2, color, dashed) {
      if(b1 == null || b2 == null) return;

      drawLine_2t(b1.tile, b2.tile, b1.block.offset, b2.block.offset, color, dashed);
    };
    exports.drawLine_2b = drawLine_2b;


    /* <---------------- drawConnectionLine ----------------> */


    /* NOTE: Draws a pulsing line between two positions. */
    const drawConnectionLine_2pos = function(pos1, pos2, color, scl, dashed) {
      if(color == null) color = Pal.accent;
      if(scl == null) scl = 1.0;
      if(dashed == null) dashed = false;

      var x1 = pos1.x;
      var y1 = pos1.y;
      var x2 = pos2.x;
      var y2 = pos2.y;
      var scl_fi = scl * 15.0;
      var seg = Math.round(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) / Vars.tilesize * 2.0);
      var a = 0.25 + Math.sin(Time.time / scl_fi) * 0.25;

      Lines.stroke(1.5, color);
      Draw.alpha(a);
      dashed ? (Lines.dashLine(x1, y1, x2, y2, seg)) : (Lines.line(x1, y1, x2, y2));
      Draw.reset();
    };
    exports.drawConnectionLine_2pos = drawConnectionLine_2pos;


    const drawConnectionLine_2t = function(t1, t2, off1, off2, color, scl, dashed) {
      if(off1 == null) off1 = 0.0;
      if(off2 == null) off2 = 0.0;

      if(t1 == null || t2 == null) return;

      var pos1 = mdl_geometry.getPos_1t(t1, off1);
      var pos2 = mdl_geometry.getPos_1t(t2, off2);

      drawConnectionLine_2pos(pos1, pos2, color, scl, dashed);
    };
    exports.drawConnectionLine_2t = drawConnectionLine_2t;


    const drawConnectionLine_2b = function(b1, b2, color, scl, dashed) {
      if(b1 == null || b2 == null) return;

      drawConnectionLine_2t(b1.tile, b2.tile, b1.block.offset, b2.block.offset, color, scl, dashed);
    };
    exports.drawConnectionLine_2b = drawConnectionLine_2b;


    /* <---------------- drawLaser ----------------> */


    /* NOTE: The line is now a laser beam in vanilla style. */
    const drawLaser_2pos = function(pos1, pos2, color, hasLight) {
      if(color == null) color = Pal.accent;
      if(hasLight == null) hasLight = false;

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
    exports.drawLaser_2pos = drawLaser_2pos;


    const drawLaser_2t = function(t1, t2, off1, off2, color, hasLight) {
      if(off1 == null) off1 = 0.0;
      if(off2 == null) off2 = 0.0;

      if(t1 == null || t2 == null) return;

      var pos1 = mdl_geometry.getPos_1t(t1, off1);
      var pos2 = mdl_geometry.getPos_1t(t2, off2);

      drawLaser_2pos(pos1, pos2, color, hasLight);
    };
    exports.drawLaser_2t = drawLaser_2t;


    const drawLaser_2b = function(b1, b2, color, hasLight) {
      if(b1 == null || b2 == null) return;

      drawLaser_2t(b1.tile, b2.tile, b1.block.offset, b2.block.offset, color, hasLight);
    };
    exports.drawLaser_2b = drawLaser_2b;
  // End


  // Part: Rect


    /* <---------------- drawRect ----------------> */


    /* NOTE: The classic rectangular range. */
    const drawRect_1pos = function(pos, r, color, size, dashed) {
      if(color == null) color = Pal.accent;
      if(size == null) size = 1;
      if(dashed == null) dashed = false;

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
    exports.drawRect_1pos = drawRect_1pos;


    const drawRect_1t = function(t, off, r, color, size, dashed) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawRect_1pos(pos, r, color, size, dashed);
    };
    exports.drawRect_1t = drawRect_1t;


    const drawRect_1blk = function(blk, t, r, color, dashed) {
      if(blk == null || t == null) return;

      drawRect_1t(t, blk.offset, r, color, blk.size, dashed);
    };
    exports.drawRect_1blk = drawRect_1blk;


    const drawRect_1b = function(b, r, color, dashed) {
      if(b == null) return;

      drawRect_1t(b.tile, b.block.offset, r, color, b.block.size, dashed);
    };
    exports.drawRect_1b = drawRect_1b;


    const drawPlaceRect = function(blk, t, valid, r, dashed) {
      if(blk == null || t == null) return;

      drawRect_1blk(blk, t, r, valid ? Pal.accent : Pal.remove, dashed);
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
    const drawCircle_1pos = function(pos, rad, color, dashed) {
      if(color == null) color = Pal.accent;
      if(dashed == null) dashed = false;

      var x = pos.x;
      var y = pos.y;

      Lines.stroke(3.0, Pal.gray);
      dashed ? Lines.dashCircle(x, y, rad) : Lines.circle(x, y, rad);
      Lines.stroke(1.0, color);
      dashed ? Lines.dashCircle(x, y, rad) : Lines.circle(x, y, rad);
      Draw.reset();
    };
    exports.drawCircle_1pos = drawCircle_1pos;


    const drawCircle_1t = function(t, off, rad, color, dashed) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawCircle_1pos(pos, rad, color, dashed);
    };
    exports.drawCircle_1t = drawCircle_1t;


    const drawCircle_1blk = function(blk, t, rad, color, dashed) {
      if(blk == null || t == null) return;

      drawCircle_1t(t, blk.offset, rad, color, dashed);
    };
    exports.drawCircle_1blk = drawCircle_1blk;


    const drawCircle_1b = function(b, rad, color, dashed) {
      if(b == null) return;

      drawCircle_1t(b.tile, b.block.offset, rad, color, dashed);
    };
    exports.drawCircle_1b = drawCircle_1b;


    const drawPlaceCircle = function(blk, t, valid, rad, dashed) {
      drawCircle_1blk(blk, t, rad, valid ? Pal.accent : Pal.remove, dashed);
    };
    exports.drawPlaceCircle = drawPlaceCircle;


    const drawSelectCircle = function(b, rad, dashed) {
      if(b == null) return;

      drawPlaceCircle(b.block, b.tile, true, rad, dashed);
    };
    exports.drawSelectCircle = drawSelectCircle;


    /* <---------------- drawWarningDisk ----------------> */


    /* NOTE: Draws a pulsing filled circle, usually indicative of explosion. */
    const drawWarningDisk_1pos = function(pos, rad, color, scl) {
      if(color == null) color = Pal.remove;
      if(scl == null) scl = 1.0;

      var x = pos.x;
      var y = pos.y;
      var scl_fi = scl * 15.0;
      var a = 0.1 + Math.sin(Time.time / scl_fi) * 0.1;

      Draw.color(color);
      Draw.alpha(a);
      Fill.circle(x, y, rad);
      Draw.reset();
    };
    exports.drawWarningDisk_1pos = drawWarningDisk_1pos;


    const drawWarningDisk_1t = function(t, off, rad, color, scl) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawWarningDisk_1pos(pos, rad, color, scl);
    };
    exports.drawWarningDisk_1t = drawWarningDisk_1t;


    const drawWarningDisk_1blk = function(blk, t, rad, color, scl) {
      if(blk == null || t == null) return;

      drawWarningDisk_1t(t, blk.offset, rad, color, scl);
    };
    exports.drawWarningDisk_1blk = drawWarningDisk_1blk;


    const drawWarningDisk_1b = function(b, rad, color, scl) {
      if(b == null) return;

      drawWarningDisk_1t(b.tile, b.block.offset, rad, color, scl);
    };
    exports.drawWarningDisk_1b = drawWarningDisk_1b;
  // End


  // Part: Area


    /* <---------------- drawTileArea ----------------> */


    /* NOTE: Draws a tiny filled square in a tile. */
    const drawTileArea = function(t, color, a, size) {
      if(color == null) color = Pal.accent;
      if(a == null) a = 0.7;
      if(size == null) size = 1.0;
      if(t == null) return;

      Draw.z(Layer.effect + 0.01);
      Draw.color(color);
      Draw.alpha(a);
      Fill.rect(t.worldx(), t.worldy(), Vars.tilesize * size, Vars.tilesize * size);
      Draw.reset();
    };
    exports.drawTileArea = drawTileArea;


    /* NOTE: Draws an animated square instead. Treats {param} as color if it's not a boolean. */
    const drawTileIndicator = function(t, param) {
      var color;
      switch(typeof param) {
        case "boolean" :
          color = param ? Pal.accent : Pal.remove;
          break;
        case "string" :
          color = Color.valueOf(param);
          break;
        default :
          color = param;
      };

      drawTileArea(t, color, 0.7, (0.75 + Math.sin(Time.time / 15.0) * 0.15));
    };
    exports.drawTileIndicator = drawTileIndicator;


    /* NOTE: Like {drawTileArea} but a building is used. */
    const drawBuildArea = function(b, param, a, pad) {
      if(param == null) param = Pal.accent;
      if(a == null) a = 0.5;
      if(pad == null) pad = 0.0;
      if(b == null) return;

      var pos = mdl_geometry.getPos_1b(b);
      var w = b.block.size * Vars.tilesize - pad;
      var color;
      switch(typeof param) {
        case "boolean" :
          color = param ? Pal.accent : Pal.remove;
          break;
        case "string" :
          color = Color.valueOf(param);
          break;
        default :
          color = param;
      };

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
    const drawCirclePulse_1pos = function(pos, rad, color, scl, a) {
      if(color == null) color = Pal.accent;
      if(scl == null) scl = 1.0;
      if(a == null) a = 0.5;

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
    exports.drawCirclePulse_1pos = drawCirclePulse_1pos;


    const drawCirclePulse_1t = function(t, off, rad, color, scl, a) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawCirclePulse_1pos(pos, rad, color, scl, a);
    };
    exports.drawCirclePulse_1t = drawCirclePulse_1t;


    const drawCirclePulse_1blk = function(blk, t, rad, color, scl, a) {
      if(blk == null || t == null) return;

      drawCirclePulse_1t(t, blk.offset, rad, color, scl, a);
    };
    exports.drawCirclePulse_1blk = drawCirclePulse_1blk;


    const drawCirclePulse_1b = function(b, rad, color, scl, a) {
      if(b == null) return;

      drawCirclePulse_1t(b.tile, b.block.offset, rad, color, scl, a);
    };
    exports.drawCirclePulse_1b = drawCirclePulse_1b;
  // End


  // Part: Progress


    /* <---------------- drawProgressBar ----------------> */


    /* NOTE: Draws a progress bar over the block. */
    const drawProgressBar_1pos = function(pos, frac, w, color, off_ty) {
      if(w == null) w = 24.0;
      if(color == null) color = Pal.accent;
      if(off_ty == null) off_ty = 0;

      var x = pos.x;
      var y = pos.y;

      Lines.stroke(5.0, Pal.gray);
      Draw.alpha(0.7);
      Lines.line(x - w * 0.5, y + off_ty * Vars.tilesize, x + w * 0.5, y + off_ty * Vars.tilesize);
      Lines.stroke(3.0, color);
      Draw.alpha(0.2);
      Lines.line(x - w * 0.5, y + off_ty * Vars.tilesize, x + w * 0.5, y + off_ty * Vars.tilesize);
      Draw.alpha(0.7);
      Lines.line(x - w * 0.5, y + off_ty * Vars.tilesize, Mathf.lerp(x - w * 0.5, x + w * 0.5, frac), y + off_ty * Vars.tilesize);
      Draw.reset();
    };
    exports.drawProgressBar_1pos = drawProgressBar_1pos;


    const drawProgressBar_1t = function(t, off, frac, w, color, off_ty) {
      if(off_ty == null) off_ty = 0;
      if(off == null) off = 0.0;

      if(t == null) return;

      var off_ty_fi = off_ty + 1.0;
      var pos = mdl_geometry.getPos_1t(t, off);

      drawProgressBar_1pos(pos, frac, w, color, off_ty_fi);
    };
    exports.drawProgressBar_1t = drawProgressBar_1t;


    const drawProgressBar_1blk = function(blk, t, frac, w, color, off_ty) {
      if(off_ty == null) off_ty = 0;

      if(blk == null || t == null) return;
      if(w == null) w = (blk.size + 1) * Vars.tilesize;

      var off_ty_fi = off_ty + 0.5 * (blk.size + 1);
      var pos = mdl_geometry.getPos_1t(t, blk.offset);

      drawProgressBar_1pos(pos, frac, w, color, off_ty_fi);
    };
    exports.drawProgressBar_1blk = drawProgressBar_1blk;


    const drawProgressBar_1b = function(b, frac, w, color, off_ty) {
      if(off_ty == null) off_ty = 0;

      if(b == null) return;
      if(w == null) w = (b.block.size + 1) * Vars.tilesize;

      var off_ty_fi = off_ty + 0.5 * (b.block.size + 1);
      var pos = mdl_geometry.getPos_1b(b);

      drawProgressBar_1pos(pos, frac, w, color, off_ty_fi);
    };
    exports.drawProgressBar_1b = drawProgressBar_1b;
  // End


  // Part: Content


    /* <---------------- drawItem ----------------> */


    /* NOTE: Draws a series of light orbs which represent the items. */
    const drawItemTransfer_2pos = function(pos_f, pos_t, color, scl) {
      if(color == null) color = Pal.accent;
      if(scl == null) scl = 1.0;

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
    exports.drawItemTransfer_2pos = drawItemTransfer_2pos;


    const drawItemTransfer_2t = function(t_f, t_t, off_f, off_t, color, scl) {
      if(off_f == null) off_f = 0.0;
      if(off_t == null) off_t = 0.0;

      if(t_f == null || t_t == null) return;

      var pos_f = mdl_geometry.getPos_1t(t_f, off_f);
      var pos_t = mdl_geometry.getPos_1t(t_t, off_t);

      drawItemTransfer_2pos(pos_f, pos_t, color, scl);
    };
    exports.drawItemTransfer_2t = drawItemTransfer_2t;


    const drawItemTransfer_2b = function(b_f, b_t, color, scl) {
      if(b_f == null || b_t == null) return;

      drawItemTransfer_2t(b_f.tile, b_t.tile, b_f.block.offset, b_t.block.offset, color, scl);
    };
    exports.drawItemTransfer_2b = drawItemTransfer_2b;


    /* <---------------- drawIcon ----------------> */


    /* NOTE: Draws the content icon at the left-upper corner of the block. */
    const drawContentIcon_1pos = function(pos, ct, size) {
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
    exports.drawContentIcon_1pos = drawContentIcon_1pos;


    const drawContentIcon_1t = function(t, off, ct, size) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      drawContentIcon_1pos(pos, ct, size);
    };
    exports.drawContentIcon_1t = drawContentIcon_1t;


    const drawContentIcon_1blk = function(blk, t, ct) {
      if(blk == null || t == null) return;

      drawContentIcon_1t(t, blk.offset, ct, blk.size);
    };
    exports.drawContentIcon_1blk = drawContentIcon_1blk;


    const drawContentIcon_1b = function(b, ct) {
      if(b == null) return;

      drawContentIcon_1t(b.tile, b.block.offset, ct, b.block.size);
    };
    exports.drawContentIcon_1b = drawContentIcon_1b;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_draw.js loaded.");
});
