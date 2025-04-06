/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericGenerator");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.tiles);
      blk.stats.add(db_stat.attributeRequired, mdl_attr._attrVal(blk.attribute));
    };


    function updateTileComp(b) {
      if(b.timerEffc.get(60.0)) b.tmpSum = b.block.sumAttribute(b.block.attribute, b.tileX(), b.tileY()) - b.block.attribute.env();
      b.sum = b.tmpSum;

      b.tprog += Math.min(b.edelta() * (1.0 + b.sum), 3.0);
    };


    function sumAttributeComp(blk, attribute, tx, ty) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return 0.0;

      var attr = mdl_attr._wind(t);

      var count = 0;
      mdl_game._liTileEdge(t, blk.size).each(ot => {
        if(ot.solid()) count += 1;
      });
      attr *= 1.0 - count / blk.size / 4;

      if(attr < 0.0) attr = 0.0;
      return attr;
    };


    function totalProgressComp(b) {
      return (mdl_content.canUpdate(b)) ? b.tprog : 0.0;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return;

      var li_ot = mdl_game._liTileEdge(t, blk.size);
      li_ot.each(ot => mdl_draw.drawTileIndicator(ot, !ot.solid()));

      if(blk.displayEfficiency) {
        var str = Core.bundle.formatFloat("bar.efficiency", sumAttribute(blk, blk.attribute, tx, ty) * 100.0, 1);
        mdl_draw.drawPlaceText(blk, t, valid, str, 1);
      };
    };


    function drawSelectComp(b) {
      var t = b.tile;

      var li_ot = mdl_game._liTileEdge(t, b.block.size);
      li_ot.each(ot => mdl_draw.drawTileIndicator(ot, !ot.solid()));

      if(b.block.displayEfficiency) {
        var str = Core.bundle.formatFloat("bar.efficiency", sumAttribute(b.block, b.block.attribute, t.x, t.y) * 100.0, 1);
        mdl_draw.drawSelectText(b, true, str, 1);
      };
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

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const sumAttribute = function(blk, attribute, tx, ty) {
      return sumAttributeComp(blk, attribute, tx, ty);
    };
    exports.sumAttribute = sumAttribute;


    const canPlaceOn = function(blk, t, team, rot) {
      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const totalProgress = function(b) {
      return totalProgressComp(b);
    };
    exports.totalProgress = totalProgress;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_windTurbine.js loaded.");
});
