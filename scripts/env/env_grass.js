/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_genericProp");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function drawBaseComp(blk, t) {
      mdl_draw.drawBlurredShadow(t, blk.region, 0.0, 1.0, 1.05, Color.white, 7.0);
      mdl_draw.drawWobbleRegion(t, blk.region, 0.0, 1.0, 1.0, Color.white, 0.65, 2.0, 0.85, 0.6, 8.0);
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
  Log.info("REIND: env_grass.js loaded.");
});
