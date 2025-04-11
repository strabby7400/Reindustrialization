/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidBlock");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Component
    function acceptLiquidComp(b, ob, liq) {
      if(mdl_content.isEffc(liq)) return false;
      if(mdl_content.isVirt(liq)) return false;

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


    const acceptLiquid = function(b, ob, liq) {
      if(!acceptLiquidComp(b, ob, liq)) return false;

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
  Log.info("REIND: blk_genericLiquidDistributionBlock.js loaded.");
});
