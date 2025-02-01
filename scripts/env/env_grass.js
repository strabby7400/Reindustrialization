/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericProp = require("reind/env/env_genericProp");
  // End


  // Part: Component
    function drawBaseComp(blk, t) {
      var x = t.worldx();
      var y = t.worldy();
      var w = blk.region.width * blk.region.scl();
      var h = blk.region.height * blk.region.scl();
      var off_sha = -0.5;
      var rot = 0.0;
      var scl = 40.0;
      var mag = 1.0;
      var wobScl = 1.25;

      // Shadow
      /* NOTE: Custom shadow is required. */
      var sha = blk.customShadowRegion;
      if(sha.found()) {
        Draw.z(7.0);
        Draw.rect(sha, x + off_sha, y + off_sha, rot);
      };

      // Region
      /* NOTE: Variants are not supported. */
      var reg = blk.region;
      Draw.z(8.0);
      Draw.rectv(reg, x, y, w, h, rot, vec => vec.add(
        (Mathf.sin(vec.y * 3 + Time.time, scl, mag) + Mathf.sin(vec.x * 3 - Time.time, 70, 0.8)) * wobScl,
        (Mathf.cos(vec.x * 3 + Time.time + 8, scl + 6, mag * 1.1) + Mathf.sin(vec.y * 3 - Time.time, 50, 0.2)) * wobScl * 0.4,
      ));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericProp.setStats(blk);
    };
    exports.setStats = setStats;


    const drawBase = function(blk, t) {
      drawBaseComp(blk, t);
    };
    exports.drawBase = drawBase;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_grass.js loaded.");
});
