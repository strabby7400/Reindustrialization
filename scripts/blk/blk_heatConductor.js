/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericHeatDistributionBlock");

    const frag_heat = require("reind/frag/frag_heat");
  // End


  // Part: Component
    function moveLiquidComp(b, ob, liq) {
      return frag_heat.moveLiquid_hcond(b, ob);
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


    const setBars = function(blk) {
      PARENT.setBars(blk);
    };
    exports.setBars = setBars;


    const acceptLiquid = function(b, ob, liq) {
      if(!PARENT.acceptLiquid(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const moveLiquid = function(b, ob, liq) {
      return moveLiquidComp(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);
    };
    exports.drawSelect = drawSelect;


    const onDestroyed = function(b) {
      PARENT.onDestroyed(b);
    };
    exports.onDestroyed = onDestroyed;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_heatConductor.js loaded.");
});
