/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_genericOre");

    const mdl_text = require("reind/mdl/mdl_text");
  // End


  // Part: Component
    function initComp(blk) {
      Events.run(MusicRegisterEvent, () => {
        if(!Vars.headless) blk.localizedName = blk.itemDrop.localizedName + mdl_text._space() + "(" + mdl_text._term("ground-ore") + ")";
      });
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


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_groundOre.js loaded.");
});
