/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDrill");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Component
    function canMineComp(blk, t) {
      if(mdl_content.isDepthOre(t.overlay())) return false;

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
      PARENT.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
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
