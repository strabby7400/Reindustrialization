/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_conveyor");
  // End


  // Part: Component
    function initComp(blk) {
      Events.run(MusicRegisterEvent, () => {
        blk.unloadable = true;
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


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_stackConveyor.js loaded.");
});
