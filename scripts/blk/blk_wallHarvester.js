/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericHarvester = require("reind/blk/blk_genericHarvester");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      mdl_game.getTiles_rect(t, 5, blk.size).each(ot => {if(ot.block().attributes.get(blk.attribute) > 0.0) mdl_draw.drawTileIndicator(ot)});
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericHarvester.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericHarvester.updateTile(b);
    };
    exports.updateTile = updateTile;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_wallHarvester.js loaded.");
});
