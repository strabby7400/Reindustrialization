/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericWireBlock");

    const frag_power = require("reind/frag/frag_power");

    const mdl_data = require("reind/mdl/mdl_data");

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
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_wireRelay.js loaded.");
});
