/*
  ========================================
  Section: Definition
  ========================================
*/


  /*
    ========================================
    Sub-section: Primary

    Those effects are building blocks for other effects.
    ========================================
  */




    /* ========================================
      Sub-Sub-Section: Flare
    ======================================== */




      const _flare = function(rad, scl, rot, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(rot == null) rot = 0.0;
        if(color == null) color = Color.valueOf("ffd37f");

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 60.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-flare",
          layer: 110.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: rot,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.linear,
          sizeFrom: rad,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._flare = _flare;




    /* ========================================
      Sub-Sub-Section: Particles
    ======================================== */




      const _hoveringParticles = function(spr, rad, scl, size, color, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 4.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 8.0;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2In,
          lifetime: 180.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 180.0,
          cone: 45.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.sine,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._hoveringParticles = _hoveringParticles;




      const _lingeringParticles = function(spr, rad, scl, amt, size, color, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 3.5;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 3;
        if(size == null) size = 2.0;
        if(color == null) color = Color.white;
        if(hasLight == null) hasLight = false;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 120.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: 110.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 180.0,
          cone: 45.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5In,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._lingeringParticles = _lingeringParticles;




      const _releaseParticles = function(spr, rad, scl, amt, size, color, rev, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 12.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 4.0;
        if(color == null) color = Color.white;
        if(rev == null) rev = false;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: rev ? Interp.reverse : Interp.linear,
          lifetime: 60.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.linear,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._releaseParticles = _releaseParticles;




      const _spreadParticles = function(spr, rad, scl, size, color, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 4.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 0.8;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        var offX = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);
        var offY = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 150.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          offsetX: offX,
          offsetY: offY,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5In,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._spreadParticles = _spreadParticles;




      const _shrinkSpreadParticles = function(spr, rad, scl, spin, size, color, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 4.0;
        if(scl == null) scl = 1.0;
        if(spin == null) spin = 0.0;
        if(size == null) size = 4.0;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        var offX = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);
        var offY = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 150.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          offsetX: offX,
          offsetY: offY,
          cone: 180.0,
          spin: spin,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow2In,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._fadeShrinkSpreadParticles = _fadeShrinkSpreadParticles;




      const _fadeShrinkSpreadParticles = function(spr, rad, scl, spin, size, color, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 4.0;
        if(scl == null) scl = 1.0;
        if(spin == null) spin = 1.0;
        if(size == null) size = 4.0;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        var offX = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);
        var offY = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);
        var color_f = color.cpy();
        var color_t = color;
        color_f.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 150.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          offsetX: offX,
          offsetY: offY,
          cone: 180.0,
          spin: spin,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow10In,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._fadeShrinkSpreadParticles = _fadeShrinkSpreadParticles;




    /* ========================================
      Sub-Sub-Section: Spark
    ======================================== */




      const _crack = function(rad, scl, size, color, hasLight) {
        if(rad == null) rad = 18.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 3.0;
        if(color == null) color = Color.valueOf("ffc999");
        if(hasLight == null) hasLight = true;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 60.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-diamond",
          layer: 69.0,
          particles: 2,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.sine,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._crack = _crack;




      const _drillCrack = function(rad, scl, amt, size, color, hasLight) {
        if(rad == null) rad = 18.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 3;
        if(size == null) size = 4.0;
        if(color == null) color = Color.white;
        if(hasLight == null) hasLight = false;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow10Out,
          lifetime: 180.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-diamond",
          layer: 69.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: hasLight ? 0.65 : 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.sine,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._drillCrack = _drillCrack;




      const _craftCrack = function(rad, scl, amt) {
        if(rad == null) rad = 10.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 5;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 90.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-diamond",
          layer: 69.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.white,
          colorTo: Color.white,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow10In,
          sizeFrom: 4.0,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._craftCrack = _craftCrack;



      const _plantCrack = function(rad, scl, amt, size, color) {
        if(rad == null) rad = 12.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 12;
        if(size == null) size = 1.5;
        if(color == null) color = Color.valueOf("91b692");

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow10Out,
          lifetime: 480.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-diamond",
          layer: 69.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow10Out,
          sizeFrom: size,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._plantCrack = _plantCrack;




      const _smoke = function(rad, scl, color) {
        if(rad == null) rad = 24.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("303030");

        var eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 60.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-urchin",
          layer: 86.0,
          particles: 4,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 9.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5Out,
          sizeFrom: 12.0,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._smoke = _smoke;




      const _smokeCrack = function(rad, scl, amt, color) {
        if(rad == null) rad = 12.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 5;
        if(color == null) color = Color.valueOf("303030");

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow10Out,
          lifetime: 180.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-urchin",
          layer: 69.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.sine,
          sizeFrom: 3.0,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._smokeCrack = _smokeCrack;




      const _squareSpark = function(rad, scl, color) {
        if(rad == null) rad = 48.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 150.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-square",
          layer: 69.0,
          particles: 7,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad * 1.2,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow3In,
          sizeFrom: 4.0,
          sizeTo: 0.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._squareSpark = _squareSpark;




    /* ========================================
      Sub-Sub-Section: Gas
    ======================================== */




      const _blackSmogRelease = function(rad, scl, amt, size) {
        if(rad == null) rad = 24.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 3;
        if(size == null) size = 9.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 180.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow",
          layer: 86.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.valueOf("ffffff40"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5Out,
          sizeFrom: 2.0,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._blackSmogRelease = _blackSmogRelease;




      const _gasRelease = function(rad, scl, amt, size) {
        if(rad == null) rad = 24.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 12;
        if(size == null) size = 7.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 120.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 86.0,
          particles: amt,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.valueOf("ffffff40"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5Out,
          sizeFrom: 2.0,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._gasRelease = _gasRelease;




      const _gasShootRelease = function(rad, cone, scl, amt, size_f, size_t) {
        if(rad == null) rad = 28.0;
        if(cone == null) cone = 20.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 12;
        if(size_f == null) size_f = 4.0;
        if(size_t == null) size_t = 12.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow10Out,
          lifetime: 300.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 86.0,
          particles: amt,
          followParent: false,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.valueOf("ffffff60"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: cone,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow2Out,
          sizeFrom: size_f,
          sizeTo: size_t,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._gasShootRelease = _gasShootRelease;




      const _gasSideRelease = function(rad, offRad, cone, scl, size, rev) {
        if(rad == null) rad = 10.0;
        if(offRad == null) offRad = 0.0;
        if(cone == null) cone = 10.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 5.0;
        if(rev == null) rev = false;


        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: rev ? Interp.reverse : Interp.linear,
          lifetime: 80.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 86.0,
          particles: 6,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.valueOf("ffffff40"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: cone,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: offRad,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: rev ? Interp.reverse : Interp.linear,
          sizeFrom: 0.0,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._gasSideRelease = _gasSideRelease;




      const _heatSmog = function(rad, scl, size) {
        if(rad == null) rad = 10.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 6.0;

        const eff = extend(ParticleEffect, {

            /* <---------------- meta ----------------> */

            interp: Interp.linear,
            lifetime: 40.0 * scl,
            startDelay: 0.0,

            /* <---------------- visual ----------------> */

            region: "reind-efr-shadow-white",
            layer: 86.0,
            particles: 4,
            followParent: true,
            rotWithParent: false,
            useRotation: true,
            colorFrom: Color.valueOf("ffffff"),
            colorTo: Color.valueOf("ffffff00"),
            lightScl: 2.0,
            lightOpacity: 0.0,

            /* <---------------- angle & length ----------------> */

            baseRotation: 0.0,
            offset: 0.0,
            cone: 180.0,
            spin: 0.0,
            randLength: true,
            length: rad,
            baseLength: 0.0,

            /* <---------------- size & stroke & len ----------------> */

            line: false,
            sizeInterp: Interp.linear,
            sizeFrom: 0.0,
            sizeTo: size,
            strokeFrom: 0.0,
            strokeTo: 0.0,
            lenFrom: 0.0,
            lenTo: 0.0,

        });

        return eff;
      };
      exports._heatSmog = _heatSmog;




      const _smog = function(rad, scl) {
        if(rad == null) rad = 54.0;
        if(scl == null) scl = 1.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 360.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 86.0,
          particles: 16,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.valueOf("ffffff40"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow2Out,
          sizeFrom: 2.0,
          sizeTo: rad,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._smog = _smog;




      const _ventGasRelase = function(rad, scl, size, color) {
        if(rad == null) rad = 8.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 8.0;
        if(color == null) color = Color.valueOf("7898ba");

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 160.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 69.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: rad,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.sine,
          sizeFrom: 2.0,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._ventGasRelase = _ventGasRelase;




    /* ========================================
      Sub-Sub-Section: Wave
    ======================================== */




      const _iconFade = function(spr, scl, size, color, top, rev) {
        if(spr == null) spr = "circle";
        if(scl == null) scl = 1.0;
        if(size == null) size = 4.0;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(rev == null) rev = false;

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: rev ? Interp.reverse : Interp.linear,
          lifetime: 90.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: 1,
          followParent: true,
          rotWithParent: true,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: rev ? Interp.reverse : Interp.linear,
          sizeFrom: size,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._iconFade = _iconFade;



      const _squareFade = function(size, scl, color) {
        if(size == null) size = 1;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 40.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-square",
          layer: 110.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.linear,
          sizeFrom: size * Vars.tilesize * 0.8,
          sizeTo: size * Vars.tilesize * 0.8,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._squareFade = _squareFade;




      const _trailFade = function(spr, scl, size, color, top, rev) {
        if(spr == null) spr = "circle";
        if(scl == null) scl = 1.0;
        if(size == null) size = 8.0;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(rev == null) rev = false;

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: rev ? Interp.pow3In : Interp.pow3Out,
          lifetime: 90.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: spr,
          layer: top ? 110.0 : 69.0,
          particles: 1,
          followParent: false,
          rotWithParent: true,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: rev ? Interp.pow3In : Interp.pow3Out,
          sizeFrom: 0.0,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._trailFade = _trailFade;




      const _explosionDisk = function(rad, scl, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Pal.accent;

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff1 = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5In,
          lifetime: 40.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 116.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.65,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow10Out,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });
        const eff2 = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5In,
          lifetime: 40.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-shadow-white",
          layer: 116.0001,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: Color.white,
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.65,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow10Out,
          sizeFrom: 0.0,
          sizeTo: rad * 0.7,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return new MultiEffect(
          eff1,
          eff2,
        );
      };
      exports._explosionDisk = _explosionDisk;




      const _impact = function(rad) {
        if(rad == null) rad = 40.0;

        const eff1 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 40.0 * Math.pow(rad / 40.0, 0.5),
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 15.0,
          sides: -1,
          followParent: true,
          rotWithParent: false,
          colorFrom: Color.valueOf("ffffff30"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 0.0,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 6.0,
          strokeTo: 4.0,

        });
        const eff2 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow2Out,
          lifetime: 60.0 * Math.pow(rad / 40.0, 0.5),
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 15.0,
          sides: -1,
          followParent: true,
          rotWithParent: false,
          colorFrom: Color.valueOf("ffffff30"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 0.0,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 6.0,
          strokeTo: 4.0,

        });

        return new MultiEffect(
          eff1,
          eff2,
        );
      };
      exports._impact = _impact;




      const _pulseRect = function(r, size, scl, color) {
        if(r == null) r = 0;
        if(size == null) size = 1;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var hw = (size / 2 + r) * Vars.tilesize;

        const eff1 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 30.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 69.0,
          sides: 4,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 45.0,
          sizeFrom: 0.0,
          sizeTo: hw * Math.pow(2, 0.5),
          strokeFrom: 3.0,
          strokeTo: 0.0,

        });
        const eff2 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 30.0 * scl,
          startDelay: 15.0,

          /* <---------------- visual ----------------> */

          layer: 69.0,
          sides: 4,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 45.0,
          sizeFrom: 0.0,
          sizeTo: hw * Math.pow(2, 0.5),
          strokeFrom: 2.0,
          strokeTo: 0.0,

        });

        return new MultiEffect(
          eff1,
          eff2,
        );
      };
      exports._pulseRect = _pulseRect;




      const _ripple = function(rad, scl, color) {
        if(rad == null) rad = 15.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.white;

        const eff = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 90.0,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: Layer.floor + 0.01,
          sides: -1,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 0.0,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 3.0,
          strokeTo: 0.0,

        });

        return eff;
      };
      exports._ripple = _ripple;




      const _rotorWave = function(rad) {
        if(rad == null) rad = 40.0;

        const eff = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.linear,
          lifetime: 20.0 * Math.pow(rad / 40.0, 0.5),
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 15.0,
          sides: -1,
          followParent: true,
          rotWithParent: false,
          colorFrom: Color.valueOf("ffffff30"),
          colorTo: Color.valueOf("ffffff00"),
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 0.0,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 2.0,
          strokeTo: 2.0,

        });

        return eff;
      };
      exports._rotorWave = _rotorWave;




      const _scanCircle = function(rad, scl, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(color == null) colof = Color.valueOf("feb380");

        const eff1 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 100.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 110.0,
          sides: -1,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 0.0,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 6.0,
          strokeTo: 0.0,

        });
        const eff2 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 125.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 110.0,
          sides: -1,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 0.0,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 6.0,
          strokeTo: 0.0,

        });

        return new MultiEffect(
          eff1,
          eff2,
        );
      };
      exports._scanCircle = _scanCircle;




      const _scanDisk = function(rad, scl, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 110.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "circle",
          layer: 110.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0.0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5Out,
          sizeFrom: 0.0,
          sizeTo: rad,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._scanDisk = _scanDisk;




      const _scanRect = function(r, size, scl, color) {
        if(r == null) r = 5;
        if(size == null) size = 0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var hw = (size / 2 + r) * Vars.tilesize;

        const eff1 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 60.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 110.0,
          sides: 4,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 45.0,
          sizeFrom: 0.0,
          sizeTo: hw * Math.pow(2, 0.5),
          strokeFrom: 6.0,
          strokeTo: 0.0,

        });
        const eff2 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 90.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 110.0,
          sides: 4,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 45.0,
          sizeFrom: 0.0,
          sizeTo: hw * Math.pow(2, 0.5),
          strokeFrom: 6.0,
          strokeTo: 0.0,

        });
        const eff3 = extend(WaveEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 135.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          layer: 110.0,
          sides: 4,
          followParent: true,
          rotWithParent: false,
          colorFrom: color,
          colorTo: color,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & size & stroke ----------------> */

          baseRotation: 0.0,
          rotation: 45.0,
          sizeFrom: 0.0,
          sizeTo: hw * Math.pow(2, 0.5),
          strokeFrom: 6.0,
          strokeTo: 0.0,

        });

        return new MultiEffect(
          eff1,
          eff2,
          eff3,
        );
      };
      exports._scanRect = _scanRect;




      const _scanSquare = function(r, size, scl, color) {
        if(r == null) r = 5;
        if(size == null) size = 0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var hw = (size / 2 + r) * Vars.tilesize;
        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        const eff = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: Interp.pow5Out,
          lifetime: 135.0 * scl,
          startDelay: 0.0,

          /* <---------------- visual ----------------> */

          region: "reind-efr-square",
          layer: 110.0,
          particles: 1,
          followParent: true,
          rotWithParent: false,
          useRotation: true,
          colorFrom: color_f,
          colorTo: color_t,
          lightScl: 2.0,
          lightOpacity: 0.0,

          /* <---------------- angle & length ----------------> */

          baseRotation: 0.0,
          offset: 0.0,
          cone: 180.0,
          spin: 0.0,
          randLength: true,
          length: 0,
          baseLength: 0.0,

          /* <---------------- size & stroke & len ----------------> */

          line: false,
          sizeInterp: Interp.pow5Out,
          sizeFrom: 0.0,
          sizeTo: hw * 2.0,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff;
      };
      exports._scanSquare = _scanSquare;




  /*
    ========================================
    Sub-section: Composite
    ========================================
  */


    /* <---------------- generic ----------------> */


    const _commonExplosion = function(rad, sparkColor) {
      if(rad == null) rad = 40.0;
      if(sparkColor == null) sparkColor = Color.valueOf("feb380");

      return new MultiEffect(
        _impact(rad),
        _smog(rad * 1.35),
        _squareSpark(rad * 1.2, 1.0, sparkColor),
        _explosionDisk(rad * 0.7, 1.0),
      );
    };
    exports._commonExplosion = _commonExplosion;


    /* <---------------- miner ----------------> */


    const _impactDrillCrack = function() {
      return _drillCrack(18.0, 1.33333333, 6, 4.0, Color.white, false);
    };
    exports._impactDrillCrack = _impactDrillCrack;


    const _oreScannerScan = function(r, size, color, hideFlare) {
      if(hideFlare == null) hideFlare = false;

      var flareRad = (size / 2 + r) * Vars.tilesize * 0.7;

      return (hideFlare) ? new MultiEffect(
        _scanRect(r, size, 1.0, color),
        _scanSquare(r, size, 1.0, color),
      ) : new MultiEffect(
        _scanRect(r, size, 1.0, color),
        _scanSquare(r, size, 1.0, color),
        _flare(flareRad, 1.0, 45.0, color),
      );
    };
    exports._oreScannerScan = _oreScannerScan;


    const _harvesterParticles = function(blk, color) {
      if(color == null) color = Color.valueOf("ffd37f");

      var rad = blk.size * Vars.tilesize * 0.5;

      return _shrinkSpreadParticles("reind-efr-square", rad, 0.4, 0.0, 2.0, color, false, false);
    };
    exports._harvesterParticles = _harvesterParticles;


    /* <---------------- factory ----------------> */


    const _powerParticles = function() {
      return _releaseParticles("circle", 8.0, 0.5, 3, 1.2, Color.valueOf("ffe18f"), false, false, true);
    };
    exports._powerParticles = _powerParticles;


    const _craftGas = function(scl) {
      if(scl == null) scl = 1.0;

      return _gasRelease(null, scl, null, null);
    };
    exports._craftGas = _craftGas;


    const _craftGasLarge = function(scl) {
      if(scl == null) scl = 1.0;

      return _gasRelease(64.0, 4.0 * scl, 18, 14.0);
    };
    exports._craftGasLarge = _craftGasLarge;


    const _craftBlackSmog = function() {
      return _blackSmogRelease();
    };
    exports._craftBlackSmog = _craftBlackSmog;


    const _furnaceCrack = function() {
      return _crack();
    };
    exports._furnaceCrack = _furnaceCrack;


    const _furnaceCrackLarge = function() {
      return _crack(24.0, 2.0, 4.5);
    };
    exports._furnaceCrackLarge = _furnaceCrackLarge;


    const _sawmillCrack = function() {
      return _smokeCrack(12.0, 1.0, 5, Color.valueOf("e2bfac"));
    };
    exports._sawmillCrack = _sawmillCrack;


    const _recipeChange = function(size, color) {
      return _squareFade(size, 1.0, color);
    };
    exports._recipeChange = _recipeChange;


    const _idsParticles = function() {
      return _hoveringParticles("reind-efr-diamond-hollow", 4.0, 1.0, 8.0, Color.valueOf("ffd37f"), false, true);
    };
    exports._idsParticles = _idsParticles;


    const _tradeDockFlare = function(color) {
      if(color == null) color = Color.valueOf("ffd37f");

      return _flare(120.0, 3.0, 45.0, color);
    };
    exports._tradeDockFlare = _tradeDockFlare;


    /* <---------------- projector ----------------> */


    const _menderParticles = function(blk, color) {
      if(color == null) color = Pal.heal;

      var rad = blk.size * Vars.tilesize * 0.5;

      return _fadeShrinkSpreadParticles("reind-efr-triangle", rad, 1.0, 1.0, 6.0, color, false, false);
    };


    const _radarScan = function(rad, size, color) {
      return new MultiEffect(
        _scanCircle(rad, 1.0, color),
        _scanDisk(rad, 1.0, color),
        _pulseRect(0, size, 1.0, color),
      );
    };
    exports._radarScan = _radarScan;


    const _radarDetectionApply = function() {
      return _iconFade("reind-efr-target", 0.44444444, 16.0, Color.valueOf("f15454"), true, false);
    };
    exports._radarDetectionApply = _radarDetectionApply;


    /* <---------------- resource ----------------> */


    const _invalidPlacement = function() {
      return _iconFade("reind-efr-cross", 1.33333333, 7.0, Color.red, true, false);
    };
    exports._invalidPlacement = _invalidPlacement;


    const _cloggingParticles = function(blk, liq) {
      var rad = blk.size * Vars.tilesize * 0.5;

      return _spreadParticles("reind-efr-glob", rad, 1.6, 3.0, liq.color, false, false);
    };
    exports._cloggingParticles = _cloggingParticles;


    const _corrosionParticles = function(blk, liq) {
      var rad = blk.size * Vars.tilesize * 0.5;

      return _spreadParticles("circle", rad, 1.0, 0.8, liq.color, false, false);
    };
    exports._corrosionParticles = _corrosionParticles;


    /* <---------------- attack ----------------> */


    const _gunSmog = function() {
      return _gasShootRelease(16.0, 30.0, 0.6, 8, 2.0, 6.0);
    };
    exports._gunSmog = _gunSmog;


    const _launcherSmog = function() {
      return _gasShootRelease(28.0, 40.0, 1.6, 24, 2.0, 16.0);
    };
    exports._launcherSmog = _launcherSmog;


    const _mdrSmog = function() {
      return _gasShootRelease(28.0, 20.0, 3.0, 12, 4.0, 12.0);
    };
    exports._mdrSmog = _mdrSmog;


    const _mdrSmogLarge = function() {
      return _gasShootRelease(48.0, 20.0, 3.0, 24, 4.0, 20.0);
    };
    exports._mdrSmogLarge = _mdrSmogLarge;


    const _mdrReceive = function() {
      return _releaseParticles("reind-efr-item", 12.0, 1.0, 3, 4.0, Color.white, true, false, false);
    };
    exports._mdrReceive = _mdrReceive;


    const _sniperSmog = function() {
      return _gasShootRelease(28.0, 30.0, 1.6, 24, 2.0, 10.0);
    };
    exports._sniperSmog = _sniperSmog;


    const _sniperTrail = function() {
      return _trailFade("reind-efr-sniper-wave", 0.22222222, 18.0, Color.valueOf("ffffffa0"), false, false);
    };
    exports._sniperTrail = _sniperTrail;


    /* <---------------- status ----------------> */


    const _commonStatusParticles = function(spr, size, color) {
      if(spr == null) spr = "reind-efr-diamond-hollow";
      if(size == null) size = 4.5;
      if(color == null) color = Color.valueOf("ffd37f");

      return _releaseParticles(spr, 0.0, 1.0, 1, size, color, false, true, false);
    };
    exports._commonStatusParticles = _commonStatusParticles;


    const _liquidStatusParticles = function(liq, hasLight) {
      if(liq == null) liq = Liquids.water;
      if(hasLight == null) hasLight = false;

      return _lingeringParticles("circle", 3.5, 1.0, 3, 0.6, liq.color, hasLight);
    };
    exports._liquidStatusParticles = _liquidStatusParticles;


  /*
    ========================================
    Sub-section: Coded
    ========================================
  */
