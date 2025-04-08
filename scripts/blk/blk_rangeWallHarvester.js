/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericHarvester");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.tiles);
      blk.stats.add(Stat.tiles, StatValues.blocks(blk.attribute, blk.floating, 1.0, true, false));
      blk.stats.add(db_stat.attributeRequired, mdl_attr._attrVal(blk.attribute));

      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      blk.stats.add(Stat.range, r, StatUnit.blocks);
    };


    function updateTileComp(b) {
      if(b.needUpdate) {
        b.r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5);

        b.tiles.length = 0;
        mdl_game._tsRect(b.tile, b.r, b.block.size).forEach(ot => {if(ot.block().attributes.get(b.block.attribute) > 0.0) b.tiles.push(ot)});

        b.needUpdate = false;
      };
    };


    function sumAttributeComp(blk, attribute, tx, ty) {
      if(attribute == null) return 0.0;
      var t = Vars.world.tile(tx, ty);
      if(t == null) return 0.0;
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);

      var attr = 0.0;
      mdl_game._tsRect(t, r, blk.size).forEach(ot => {
        attr += ot.block().attributes.get(attribute);
      });

      return attr;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      var t = Vars.world.tile(tx, ty);

      mdl_draw.drawPlaceRect(blk, t, valid, r, true);
      mdl_game._tsRect(t, r, blk.size).forEach(ot => {
        if(ot.block().attributes.get(blk.attribute) > 0.0) {
          mdl_draw.drawTileIndicator(ot, true);
          mdl_draw.drawFlickerLine(mdl_game._pos(t, blk.offset), mdl_game._pos(ot, ot.block().offset), Pal.accent, 1.0, true);
        };
      });
    };


    function drawComp(b) {
      if(b.efficiency > 0.0001) {
        b.tiles.forEach(ot => {
          mdl_draw.drawItemTransfer(mdl_game._pos(ot, ot.block().offset), b, Pal.accent, 1.0);
        });
      };
    };


    function drawSelectComp(b) {
      mdl_draw.drawSelectRect(b, b.r, true);
      b.tiles.forEach(ot => {
        mdl_draw.drawTileIndicator(ot, true);
        mdl_draw.drawFlickerLine(b, mdl_game._pos(ot, ot.block().offset), Pal.accent, 1.0, true);
      });
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


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_rangeWallHarvester.js loaded.");
});
