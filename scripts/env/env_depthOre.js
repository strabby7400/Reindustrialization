/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericOre = require("reind/env/env_genericOre");
  // End


  // Part: Component
    function drawBaseComp(blk, t, a) {
      if(a == null) a = 0.0;
      if(Vars.state.isEditor()) a = 1.0;

      Draw.z(1.0);
      Draw.alpha(a);
      Draw.blend(Blending.additive);
      blk.super$drawBase(t);
      Draw.blend();
      Draw.reset();
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericOre.setStats(blk);
    };
    exports.setStats = setStats;


    const drawBase = function(blk, t, a) {
      drawBaseComp(blk, t, a);
    };
    exports.drawBase = drawBase;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_depthOre.js loaded.");
});
