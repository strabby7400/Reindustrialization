/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericOre = require("reind/env/env_genericOre");

    const mdl_text = require("reind/mdl/mdl_text");
  // End


  // Part: Component
    function setupComp(blk) {
      Events.run(ClientLoadEvent, () => {
        if(!Vars.headless) blk.localizedName = blk.itemDrop.localizedName + mdl_text.getSpace() + Core.bundle.get("term.reind-term-ground-ore.name");
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
      env_genericOre.setStats(blk);
    };
    exports.setStats = setStats;


    const setup = function(blk) {
      setupComp(blk);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_groundOre.js loaded.");
});
