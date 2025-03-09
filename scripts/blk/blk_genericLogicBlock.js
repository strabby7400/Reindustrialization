/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericBlock = require("reind/blk/blk_genericBlock");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericLogicBlock.js loaded.");
});
