/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_conveyor = require("reind/blk/blk_conveyor");
  // End


  // Part: Component
    function setupComp(blk) {
      Events.run(ClientLoadEvent, () => {
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
      blk_conveyor.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_conveyor.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setup = function (blk) {
      setupComp(blk);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_stackConveyor.js loaded.");
});
