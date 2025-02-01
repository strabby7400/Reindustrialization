/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericGenerator = require("reind/blk/blk_genericGenerator");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericGenerator.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericGenerator.updateTile(b);
    };
    exports.updateTile = updateTile;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      blk_genericGenerator.drawPlace(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      blk_genericGenerator.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericGenerator.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_ventGenerator.js loaded.");
});
