/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDrill = require("reind/blk/blk_genericDrill");
  // End


  // Part: Component
    function canMineComp(blk, t) {
      if(t.overlay() != null && t.overlay().name.includes("reind-env-ore-depth-")) return false;

      return true;
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDrill.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDrill.updateTile(b);
    };
    exports.updateTile = updateTile;


    const canMine = function(blk, t) {
      return canMineComp(blk, t);
    };
    exports.canMine = canMine;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_drill.js loaded.");
});
