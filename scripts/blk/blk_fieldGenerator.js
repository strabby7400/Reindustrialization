/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericGenerator = require("reind/blk/blk_genericGenerator");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r != null) blk.stats.add(db_stat.restrictionRange, r, StatUnit.blocks);
    };


    function canPlaceOnComp(blk, t, team, rot) {
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r != null && mdl_game.getSameBuilds(mdl_game.getTiles_rect(t, r, blk.size), blk.name, Vars.player.team()).size > 0) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r != null) {
        var t = Vars.world.tile(tx, ty);
        mdl_draw.drawPlaceRect(blk, t, valid, r, true);
        mdl_game.getSameBuilds(mdl_game.getTiles_rect(t, r, blk.size), blk.name, Vars.player.team()).each(ob => mdl_draw.drawBuildArea(ob, valid));
      };
    };


    function drawSelectComp(b) {
      var r = mdl_database.read_1n1v(db_block.genericRange, b.block.name);
      if(r != null) {
        mdl_draw.drawSelectRect(b, r, true);
        mdl_game.getSameBuilds(mdl_game.getTiles_rect(b.tile, r, b.block.size), b.block.name, b.team).each(ob => {if(b != ob) mdl_draw.drawBuildArea(ob, false)});
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
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      blk_genericGenerator.drawPlace(blk, tx, ty, rot, valid);

      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      blk_genericGenerator.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericGenerator.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_fieldGenerator.js loaded.");
});
