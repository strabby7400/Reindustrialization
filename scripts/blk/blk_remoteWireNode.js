/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_wireNode");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      blk.stats.add(db_stat.minRange, r, StatUnit.blocks);
    };


    function updateComp(b) {
      if(b.needCheck) {
        b.r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5);

        b.needCheck = false;
      };
    };


    function linkValidComp(b, ob) {
      if(!mdl_content.isPowerUnit(ob.block)) return false;
      if(mdl_game._dst(b, ob) < mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5) * Vars.tilesize) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      mdl_draw.drawPlaceCircle(blk, Vars.world.tile(tx, ty), valid, r * Vars.tilesize, true);
    };


    function drawSelectComp(b) {
      mdl_draw.drawSelectCircle(b, b.r * Vars.tilesize, true);
    };


    function drawConfigureComp(b) {
      mdl_draw.drawSelectCircle(b, b.r * Vars.tilesize, true);
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

      updateComp(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      PARENT.init(blk);
    };
    exports.init = init;


    const canPlaceOn = function(blk, t, team, rot) {
      return PARENT.canPlaceOn(blk, t, team, rot);
    };
    exports.canPlaceOn = canPlaceOn;


    const linkValid = function(b, ob) {
      if(!PARENT.linkValid(b, ob)) return false;
      if(!linkValidComp(b, ob)) return false;

      return true;
    };
    exports.linkValid = linkValid;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      PARENT.drawPlace(blk, tx, ty, rot, valid);

      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const drawConfigure = function(b) {
      drawConfigureComp(b);
    };
    exports.drawConfigure = drawConfigure;


    const drawLaser = function(blk, x1, y1, x2, y2, size1, size2) {
      PARENT.drawLaser(blk, x1, y1, x2, y2, size1, size2);
    };
    exports.drawLaser = drawLaser;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_remoteWireNode.js loaded.");
});
