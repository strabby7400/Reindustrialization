/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericWireBlock");

    const frag_power = require("reind/frag/frag_power");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function initComp(blk) {
      Events.run(MusicRegisterEvent, () => {
        var cons = mdl_data.read_1n1v(db_block.db["power"]["consumption"], blk.name);
        if(cons != null) {
          blk.consumePower(cons / 60.0);
          blk.stats.add(Stat.powerUse, cons, StatUnit.perSecond);
        };
      });
    };


    function canPlaceOnComp(blk, t, team, rot) {
      return frag_power.canPlaceOn_shortCircuit(blk, t, team, rot);
    };


    function linkValidComp(b, ob) {
      if(mdl_game._dst(b, ob) > b.block.laserRange * Vars.tilesize) return false;
      if((mdl_content.isPowerNode(b.block) && mdl_content.isRemotePowerNode(ob.block)) || (mdl_content.isPowerNode(ob.block) && mdl_content.isRemotePowerNode(b.block))) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return;

      mdl_draw.drawPlaceCircle(blk, t, valid, blk.laserRange * Vars.tilesize, false);
    };


    function drawLaserComp(blk, x1, y1, x2, y2, size1, size2) {
      var ang = Angles.angle(x1, y1, x2, y2);
      var offX = Mathf.cosDeg(ang);
      var offY = Mathf.sinDeg(ang);
      var param1 = size1 * Vars.tilesize * 0.5 - 1.5;
      var param2 = size2 * Vars.tilesize * 0.5 - 1.5;
      var color = Pal.accent;

      mdl_draw.drawLaser(Tmp.v1.set(x1 + offX * param1, y1 + offY * param1), Tmp.v2.set(x2 - offX * param2, y2 - offY * param2), color, 0.7, Layer.power, false);
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
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;


    const canPlaceOn = function(blk, t, team, rot) {
      return canPlaceOnComp(blk, t, team, rot);
    };
    exports.canPlaceOn = canPlaceOn;


    const linkValid = function(b, ob) {
      if(!linkValidComp(b, ob)) return false;

      return true;
    };
    exports.linkValid = linkValid;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawLaser = function(blk, x1, y1, x2, y2, size1, size2) {
      drawLaserComp(blk, x1, y1, x2, y2, size1, size2);
    };
    exports.drawLaser = drawLaser;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_wireNode.js loaded.");
});
