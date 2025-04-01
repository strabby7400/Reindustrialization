/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidBlock");

    const frag_fluid = require("reind/frag/frag_fluid");
  // End


  // Part: Component
    function updateTileComp(b) {
      frag_fluid.updateTile_flammableContent(b);
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

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


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
  Log.info("REIND: blk_genericLiquidStorageBlock.js loaded.");
});
