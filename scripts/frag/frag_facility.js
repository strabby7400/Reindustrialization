/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
  // End


  // Part: 2side
    /*
      PART NOTE:
      If both the front and back sides are blocked, halts production.
    */


    const isActive_2side = function(b) {
      if(mdl_geometry.isDirectionBlocked(b, 0) && mdl_geometry.isDirectionBlocked(b, 2)) return false;

      return true;
    };
    exports.isActive_2side = isActive_2side;


    const drawPlace_2side = function(blk, t, rot) {
      mdl_geometry.getTiles_2sideRotBlk(blk, t, rot).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawPlace_2side = drawPlace_2side;


    const drawSelect_2side = function(b) {
      mdl_geometry.getTiles_2sideRotB(b).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawSelect_2side = drawSelect_2side;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_facility.js loaded.");
});
