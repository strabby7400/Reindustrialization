/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericProjector = require("reind/blk/blk_genericProjector");

    const ct_blk_projectiveMender = require("reind/ct/ct_blk_projectiveMender");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.booster);
      blk.stats.remove(Stat.range);

      var r = mdl_data.read_1n1v(db_block.genericRange, blk.name);
      if(r == null) r = 0.0;
      blk.stats.add(Stat.range, "[accent]" + Strings.autoFixed((blk.range - blk.size) / 2.0, 2) + " " + StatUnit.blocks.localized() + "[] / [#84f491]" + Strings.autoFixed(r, 2) + " " + StatUnit.blocks.localized() + "[]");
    };


    const li_77025514 = new Seq();
    function updateTileComp(b) {
      var r = mdl_data.read_1n1v(db_block.genericRange, b.block.name);
      if(r != null) {
        var li_unit = li_77025514.clear();
        mdl_game._liUnitAllied(mdl_game._pos(1, b), r * Vars.tilesize).each(unit => {if(unit.damaged()) li_unit.add(unit)});

        var down = !(li_unit.size > 0);
        ct_blk_projectiveMender.accB_down(b, "w", down);

        li_unit.each(unit => unit.healFract(b.block.healPercent / 60.0));
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.genericRange, blk.name);
      if(r != null) mdl_draw.drawPlaceCircle(blk, Vars.world.tile(tx, ty), Pal.heal, r * Vars.tilesize, true);
    };


    const li_70254486 = new Seq();
    function drawComp(b) {
      var r = mdl_data.read_1n1v(db_block.genericRange, b.block.name);
      if(r != null) {
        var li_unit = li_70254486.clear();
        mdl_game._liUnitAllied(mdl_game._pos(1, b), r * Vars.tilesize).each(unit => {if(unit.damaged()) li_unit.add(unit)});

        if(b.shouldConsume()) li_unit.each(unit => mdl_draw.drawFlickerLine(mdl_game._pos(1, b), mdl_game._pos(2, unit), Pal.heal));
      };
    };


    function drawSelectComp(b) {
      var r = mdl_data.read_1n1v(db_block.genericRange, b.block.name);
      if(r != null) mdl_draw.drawSelectCircle(b, r * Vars.tilesize, true, Pal.heal);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericProjector.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericProjector.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


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
  Log.info("REIND: blk_projectiveMender.js loaded.");
});
