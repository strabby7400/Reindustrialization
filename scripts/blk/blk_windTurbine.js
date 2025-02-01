/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericGenerator = require("reind/blk/blk_genericGenerator");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.tiles);
    };


    function updateTileComp(b) {
      if(Mathf.chance(0.1)) b.sum = sumAttributeComp(b.block, b.block.attribute, b.tileX(), b.tileY()) - b.block.attribute.env();
    };


    function sumAttributeComp(blk, attribute, tx, ty) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return 0.0;

      var scl = 6400.0;
      var attr = (1.0 - Math.pow(Math.sin(Time.time / scl), 2) * 0.7) * Vars.state.rules.planet.defaultAttributes.get(attribute);

      var cap = blk.size * 4;
      var count_solid = 0;
      var list_ot = mdl_geometry.getTiles_edgeS(t, blk.size);
      list_ot.each(ot => {
        if(ot.solid()) count_solid += 1;
      });

      attr *= 1.0 - count_solid / cap;

      return attr;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return;

      var list_ot = mdl_geometry.getTiles_edgeS(t, blk.size);
      list_ot.each(ot => mdl_draw.drawTileIndicator(ot, !ot.solid()));

      if(blk.displayEfficiency) {
        var str = Core.bundle.formatFloat("bar.efficiency", sumAttribute(blk, blk.attribute, tx, ty) * 100.0, 1);
        mdl_draw.drawPlaceText(blk, t, valid, str, 1);
      };
    };


    function drawSelectComp(b) {
      var t = b.tile;

      var list_ot = mdl_geometry.getTiles_edgeS(t, b.block.size);
      list_ot.each(ot => mdl_draw.drawTileIndicator(ot, !ot.solid()));

      if(b.block.displayEfficiency) {
        var str = Core.bundle.formatFloat("bar.efficiency", sumAttribute(b.block, b.block.attribute, t.x, t.y) * 100.0, 1);
        mdl_draw.drawSelectText(b, str, 1);
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
      blk_genericGenerator.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericGenerator.updateTile(b);

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
  Log.info("REIND:blk_windTurbine.js loaded.");
});
