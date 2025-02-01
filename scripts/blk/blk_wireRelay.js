/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericWireBlock = require("reind/blk/blk_genericWireBlock");

    const frag_power = require("reind/frag/frag_power");
  // End


  // Part: Component
    function canPlaceOnComp(blk, t, team, rot) {
      return frag_power.canPlaceOn_shortCircuit(blk, t, team, rot);
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


    const setup = function(blk, cons) {
      setupComp(blk, cons);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_wireRelay.js loaded.");
});
