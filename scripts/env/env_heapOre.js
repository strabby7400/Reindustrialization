/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_genericOre");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function drawBaseComp(blk, t) {
      var reg = blk.region;
      var ang = Mathf.randomSeedRange(t.pos() + 1, blk.rotationRand);

      mdl_draw.drawBlurredShadow(t, reg, ang, 0.5, 1.7, Color.white, blk.shadowLayer);
      mdl_draw.drawNormalRegion(t, reg, ang, 1.0, 1.0, Color.white, blk.layer);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);
    };
    exports.setStats = setStats;


    const drawBase = function(blk, t) {
      drawBaseComp(blk, t);
    };
    exports.drawBase = drawBase;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_heapOre.js loaded.");
});
