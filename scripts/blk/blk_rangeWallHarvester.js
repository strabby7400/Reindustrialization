/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericHarvester = require("reind/blk/blk_genericHarvester");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.tiles);
      blk.stats.add(Stat.tiles, StatValues.blocks(blk.attribute, blk.floating, 1.0, true, false));

      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r != null) blk.stats.add(Stat.range, r, StatUnit.blocks);
    };


    function sumAttributeComp(blk, attribute, tx, ty) {
      if(attribute == null) return 0.0;
      var t = Vars.world.tile(tx, ty);
      if(t == null) return 0.0;
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r == null) return 0.0;

      var attr = 0.0;
      mdl_geometry.getTiles_rect(t, r, blk.size).each(ot => {
        attr += ot.block().attributes.get(attribute);
      });

      return attr;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      var t = Vars.world.tile(tx, ty);
      if(r != null && t != null) {
        mdl_draw.drawPlaceRect(blk, t, valid, r, true);
        mdl_geometry.getTiles_rect(t, r, blk.size).each(ot => {
          if(ot.block().attributes.get(blk.attribute) > 0.0) {
            mdl_draw.drawTileIndicator(ot, true);
            mdl_draw.drawFlickerLine(mdl_geometry.poser_1t(t, blk.offset), mdl_geometry.poser_1t(ot, ot.block().offset), Pal.accent, 1.0, true);
          };
        });
      };
    };


    function drawSelectComp(b) {
      var r = mdl_database.read_1n1v(db_block.genericRange, b.block.name);
      if(r != null) {
        mdl_draw.drawSelectRect(b, r, true);
        mdl_geometry.getTiles_rect(b.tile, r, b.block.size).each(ot => {
          if(ot.block().attributes.get(b.block.attribute) > 0.0) {
            mdl_draw.drawTileIndicator(ot, true);
            mdl_draw.drawFlickerLine(mdl_geometry.poser_1b(b), mdl_geometry.poser_1t(ot, ot.block().offset), Pal.accent, 1.0, true);
          };
        });
      };
    };


    function drawComp(b) {
      if(b.efficiency > 0.0001) {
        var r = mdl_database.read_1n1v(db_block.genericRange, b.block.name);
        if(r != null) mdl_geometry.getTiles_rect(b.tile, r, b.block.size).each(ot => {
          if(ot.block().attributes.get(b.block.attribute) > 0.0) mdl_draw.drawItemTransfer(mdl_geometry.poser_1t(ot, ot.block().offset), mdl_geometry.poser_1b(b), Pal.accent, 1.0)
        });
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
      blk_genericHarvester.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericHarvester.updateTile(b);
    };
    exports.updateTile = updateTile;


    const sumAttribute = function(blk, attribute, tx, ty) {
      return sumAttributeComp(blk, attribute, tx, ty);
    };
    exports.sumAttribute = sumAttribute;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_rangeWallHarvester.js loaded.");
});
