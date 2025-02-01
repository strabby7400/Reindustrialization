/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLogicBlock = require("reind/blk/blk_genericLogicBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericLogicBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLogicBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_switch.js loaded.");
});
