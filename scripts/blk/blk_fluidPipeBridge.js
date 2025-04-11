/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidDistributionBlock");
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


    const acceptLiquid = function(b, ob, liq) {
      if(!PARENT.acceptLiquid(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


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
  Log.info("REIND: blk_fluidPipeBridge.js loaded.");
});
