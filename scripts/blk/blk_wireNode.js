/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericWireBlock = require("reind/blk/blk_genericWireBlock");

    const frag_power = require("reind/frag/frag_power");

    const mdl_draw = require("reind/mdl/mdl_draw");
  // End


  // Part: Component
    function canPlaceOnComp(blk, t, team, rot) {
      return frag_power.canPlaceOn_shortCircuit(blk, t, team, rot);
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return;

      mdl_draw.drawPlaceCircle(blk, t, valid, blk.laserRange * Vars.tilesize, false);
    };


    function setupComp(blk, cons) {
      Events.run(ClientLoadEvent, () => {
        blk.consumePower(cons);
        blk.stats.add(Stat.powerUse, cons * 60.0, StatUnit.perSecond);
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
      blk_genericWireBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericWireBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      return canPlaceOnComp(blk, t, team, rot);
    };
    exports.canPlaceOn = canPlaceOn;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const setup = function(blk, cons) {
      setupComp(blk, cons);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_wireNode.js loaded.");
});
