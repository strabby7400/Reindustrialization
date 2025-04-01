/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericGenerator");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Component
    function totalProgressComp(b) {
      return (mdl_content.canUpdate(b) && b.sum > 0.0) ? Time.time : 0.0;
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


    const totalProgress = function(b) {
      return totalProgressComp(b);
    };
    exports.totalProgress = totalProgress;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      PARENT.drawPlace(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_ventGenerator.js loaded.");
});
