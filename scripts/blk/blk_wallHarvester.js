/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericHarvester");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.attributeRequired, mdl_attr._attrVal(blk.attribute));
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      mdl_game._liTileRect(t, 5, blk.size).each(ot => {if(ot.block().attributes.get(blk.attribute) > 0.0) mdl_draw.drawTileIndicator(ot)});
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

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
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
