/*
  ========================================
  Section: Definition
  ========================================
*/


  /*
    ========================================
    Sub-section: Primary

    Those effects are building blocks of other effects.
    ========================================
  */




    /* ========================================
      Sub-Sub-Section: Flare
    ======================================== */




      const _flare = function(rad, scl, rot, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(rot == null) rot = 0.0;
        if(color == null) color = Color.valueOf("feb380");

        var eff_flare = extend(ParticleEffect, {

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

        return eff_flare;
      };
      exports._flare = _flare;




    /* ========================================
      Sub-Sub-Section: Particles
    ======================================== */




      const _releaseParticles = function(spr, rad, scl, amt, size, color, rev, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 12.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 4.0;
        if(color == null) color = Color.white;
        if(rev == null) rev = false;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        var eff_relaseParticles = extend(ParticleEffect, {

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
      };
      exports._releaseParticles = _releaseParticles;




      /* NOTE: Particles are randomly spread around the center. */
      const _spreadParticles = function(spr, rad, scl, size, color, top, hasLight) {
        if(spr == null) spr = "circle";
        if(rad == null) rad = 4.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 0.8;
        if(color == null) color = Color.white;
        if(top == null) top = false;
        if(hasLight == null) hasLight = false;

        var off_x = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);
        var off_y = (Mathf.chance(0.5) ? 1 : -1) * Mathf.random(rad);

        var eff_spreadParticles = extend(ParticleEffect, {

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
          offsetX: off_x,
          offsetY: off_y,
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

        return eff_spreadParticles;
      };
      exports._spreadParticles = _spreadParticles;




    /* ========================================
      Sub-Sub-Section: Spark
    ======================================== */




      /* NOTE: A diamond-shaped spark effect. */
      const _crack = function(rad, scl, size, color, hasLight) {
        if(rad == null) rad = 18.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 3.0;
        if(color == null) color = Color.valueOf("ffc999");
        if(hasLight == null) hasLight = true;

        var eff_crack = extend(ParticleEffect, {

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

        return eff_squareSpark;
      };
      exports._squareSpark = _squareSpark;




      const _craftCrack = function(rad, scl, amt) {
        if(rad == null) rad = 10.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 5;

        var eff_crack = extend(ParticleEffect, {

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
      };
      exports._craftCrack = _craftCrack;




      /* NOTE: A cluster of "*" symbols. */
      const _smoke = function(rad, scl, color) {
        if(rad == null) rad = 24.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("303030");

        var eff_smoke = extend(ParticleEffect, {

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

        return eff_smoke;
      };
      exports._smoke = _smoke;




      const _smokeCrack = function(rad, scl, amt, color) {
        if(rad == null) rad = 12.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 5;
        if(color == null) color = Color.valueOf("303030");

        var eff_smokeCrack = extend(ParticleEffect, {

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

        return eff_smokeCrack;
      };
      exports._smokeCrack = _smokeCrack;




      /* NOTE: Related to explosion. */
      const _squareSpark = function(rad, scl, color) {
        if(rad == null) rad = 48.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var eff_squareSpark = extend(ParticleEffect, {

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

        return eff_squareSpark;
      };
      exports._squareSpark = _squareSpark;




    /* ========================================
      Sub-Sub-Section: Gas
    ======================================== */




      /* NOTE: Used for chimneys. */
      const _blackSmogRelease = function() {
        if(rad == null) rad = 24.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 3;
        if(size == null) size = 9.0;

        var eff_gasRelease = extend(ParticleEffect, {

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
      };
      exports._blackSmogRelease = _blackSmogRelease;




      /* NOTE: Regular gas release effect. */
      const _gasRelease = function(rad, scl, amt, size) {
        if(rad == null) rad = 24.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 12;
        if(size == null) size = 7.0;

        var eff_gasRelease = extend(ParticleEffect, {

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

        return eff_gasRelease;
      };
      exports._gasRelease = _gasRelease;




      /* NOTE: Used for weapons. */
      const _gasShootRelease = function(rad, cone, scl, amt, size_f, size_t) {
        if(rad == null) rad = 28.0;
        if(cone == null) cone = 20.0;
        if(scl == null) scl = 1.0;
        if(amt == null) amt = 12;
        if(size_f == null) size_f = 4.0;
        if(size_t == null) size_t = 12.0;

        var eff_gasShootRelease = extend(ParticleEffect, {

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

        return eff_gasShootRelease;
      };
      exports._gasShootRelease = _gasShootRelease;




      /* NOTE: The gas is released to a certain direction. */
      const _gasSideRelease = function(rad, off_rad, cone, scl, size, rev) {
        if(rad == null) rad = 10.0;
        if(off_rad == null) off_rad = 0.0;
        if(cone == null) cone = 10.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 5.0;
        if(rev == null) rev = false;


        var eff_gasSideRelease = extend(ParticleEffect, {

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
          baseLength: off_rad,

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

        return eff_gasSideRelease;
      };
      exports._gasSideRelease = _gasSideRelease;




      /* NOTE: A smog effect used for overheated things. */
      const _heatSmog = function(rad, scl, size) {
        if(rad == null) rad = 10.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 6.0;

        var eff_heatSmog = extend(ParticleEffect, {

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

        return eff_heatSmog;
      };
      exports._heatSmog = _heatSmog;




      /* NOTE: A lingering cloud. */
      const _smog = function(rad, scl) {
        if(rad == null) rad = 54.0;
        if(scl == null) scl = 1.0;

        var eff_Smog = extend(ParticleEffect, {

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

        return eff_Smog;
      };
      exports._smog = _smog;




      /* NOTE: A gas effect used by vents, the recommended spacing is 15.0. */
      const _ventGasRelase = function(rad, scl, size, color) {
        if(rad == null) rad = 8.0;
        if(scl == null) scl = 1.0;
        if(size == null) size = 8.0;
        if(color == null) color = Color.valueOf("7898ba");

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        var eff_ventGasRelease = extend(ParticleEffect, {

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

        return eff_ventGasRelease;
      };
      exports._ventGasRelase = _ventGasRelase;




    /* ========================================
      Sub-Sub-Section: Wave
    ======================================== */




      /* NOTE: Shows a fixed sprite that fades out. */
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

        var eff_iconFade = extend(ParticleEffect, {

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

        return eff_iconFade;
      };
      exports._iconFade = _iconFade;




      /* NOTE: A fixed sprite that fades out, used for trail effects. */
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

        var eff_trailFade = extend(ParticleEffect, {

          /* <---------------- meta ----------------> */

          interp: rev ? Interp.pow2In : Interp.pow2Out,
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
          sizeInterp: rev ? Interp.pow2In : Interp.pow2Out,
          sizeFrom: 0.0,
          sizeTo: size,
          strokeFrom: 0.0,
          strokeTo: 0.0,
          lenFrom: 0.0,
          lenTo: 0.0,

        });

        return eff_trailFade;
      };
      exports._trailFade = _trailFade;




      /* NOTE: A double wave effect related to impact. */
      const _impact = function(rad) {
        if(rad == null) rad = 40.0;

        var effect_impact1 = extend(WaveEffect, {

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
        var effect_impact2 = extend(WaveEffect, {

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
          effect_impact1,
          effect_impact2,
        );
      };
      exports._impact = _impact;




      /* NOTE: Double pulse wave effect usually found on blocks. */
      const _pulseRect = function(r, size, scl, color) {
        if(r == null) r = 0;
        if(size == null) size = 1;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var hw = (size / 2 + r) * Vars.tilesize;

        var eff_pulseRect1 = extend(WaveEffect, {

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
        var eff_pulseRect2 = extend(WaveEffect, {

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
          eff_pulseRect1,
          eff_pulseRect2,
        );
      };
      exports._pulseRect = _pulseRect;




      /* NOTE: A ring wave related to liquid surface. */
      const _ripple = function(rad, scl, color) {
        if(rad == null) rad = 15.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.white;

        var eff_ripple = extend(WaveEffect, {

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

        return eff_ripple;
      };
      exports._ripple = _ripple;




      /* NOTE: A double circular wave effect. */
      const _scanCircle = function(rad, scl, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(color == null) colof = Color.valueOf("feb380");

        var eff_scanCircle1 = extend(WaveEffect, {

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
        var eff_scanCircle2 = extend(WaveEffect, {

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
          eff_scanCircle1,
          eff_scanCircle2,
        );
      };
      exports._scanCircle = _scanCircle;




      /* NOTE: A filled circular pseudo-wave effect. */
      const _scanDisk = function(rad, scl, color) {
        if(rad == null) rad = 40.0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        var eff_scanDisk = extend(ParticleEffect, {

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

        return eff_scanDisk;
      };
      exports._scanDisk = _scanDisk;




      /* NOTE: A triple rectangular wave effect. */
      const _scanRect = function(r, size, scl, color) {
        if(r == null) r = 5;
        if(size == null) size = 0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var hw = (size / 2 + r) * Vars.tilesize;

        var eff_scanRect1 = extend(WaveEffect, {

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
        var eff_scanRect2 = extend(WaveEffect, {

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
        var eff_scanRect3 = extend(WaveEffect, {

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
          eff_scanRect1,
          eff_scanRect2,
          eff_scanRect3,
        );
      };
      exports._scanRect = _scanRect;




      /* NOTE: A filled square pseudo-wave effect. */
      const _scanSquare = function(r, size, scl, color) {
        if(r == null) r = 5;
        if(size == null) size = 0;
        if(scl == null) scl = 1.0;
        if(color == null) color = Color.valueOf("feb380");

        var hw = (size / 2 + r) * Vars.tilesize;
        var color_f = color;
        var color_t = color.cpy();
        color_t.a = 0.0;

        var eff_scanSquare = extend(ParticleEffect, {

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

        return eff_scanSquare;
      };
      exports._scanSquare = _scanSquare;




  /*
    ========================================
    Sub-section: Block
    ========================================
  */


    /* ========================================
      Sub-Sub-Section: Generic
    ======================================== */


      const _commonExplosion = function(rad, sparkColor) {
        if(rad == null) rad = 40.0;
        if(sparkColor == null) sparkColor = Color.valueOf("feb380");

        return new MultiEffect(
          _impact(rad),
          _smog(rad * 1.35),
          _squareSpark(rad * 1.2, 1.0, sparkColor),
        );
      };
      exports._commonExplosion = _commonExplosion;


    /* ========================================
      Sub-Sub-Section: Miner
    ======================================== */


      const _oreScannerScan = function(r, size, color) {
        var flareRad = (size / 2 + r) * Vars.tilesize * 0.7;

        return new MultiEffect(
          _scanRect(r, size, 1.0, color),
          _scanSquare(r, size, 1.0, color),
          _flare(flareRad, 1.0, 45.0, color)
        );
      };
      exports._oreScannerScan = _oreScannerScan;


    /* ========================================
      Sub-Sub-Section: Factory
    ======================================== */


      const _powerParticles = function() {
        return _releaseParticles("circle", 8.0, 0.5, 3, 1.2, Color.valueOf("ffe18f"), false, false, true);
      };
      exports._powerParticles = _powerParticles;


      const _craftGas = function() {
        return _gasRelease();
      };
      exports._craftGas = _craftGas;


      const _craftGasLarge = function() {
        return _gasRelease(64.0, 4.0, 18, 14.0);
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


    /* ========================================
      Sub-Sub-Section: Projector
    ======================================== */


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


  /*
    ========================================
    Sub-section: Resource
    ========================================
  */


    /* ========================================
      Sub-Sub-Section: Generic
    ======================================== */


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


  /*
    ========================================
    Sub-section: Attack
    ========================================
  */


    /* ========================================
      Sub-Sub-Section: Bullet
    ======================================== */


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


    /* ========================================
      Sub-Sub-Section: Status
    ======================================== */
