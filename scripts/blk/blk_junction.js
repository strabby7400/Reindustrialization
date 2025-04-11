/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionGate");
    const VAR = require("reind/glb/glb_vars");

    const frag_item = require("reind/frag/frag_item");

    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.maxConsecutive);
      blk.stats.add(Stat.maxConsecutive, VAR.transfer_junctionMaxConsecutive);

      var speed = 60.0 / mdl_data.read_1n1v(db_block.db["param"]["time"]["base"], blk.name, 10.0);
      blk.stats.add(Stat.speed, speed, StatUnit.itemsSecond);
    };


    function updateTileComp(b) {
      if(b.needCheck) {
        b.thr = mdl_data.read_1n1v(db_block.db["param"]["time"]["base"], b.block.name, 10.0);

        b.needCheck = false;
      };

      if(b.timerCall.get(b.thr)) b.isReady = true;
    };


    function acceptItemComp(b, ob, itm) {
      var transEnd = b.getTileTarget(itm, ob, true);
      if(transEnd != null) {
        var b_f = transEnd.nearby(transEnd.relativeTo(b));
        if(b_f != null && transEnd.acceptItem(b_f, itm)) return true;
      };

      return false;
    };


    function handleItemComp(b, ob, itm) {
      var transEnd = b.getTileTarget(itm, ob, true);
      if(transEnd != null) {
        transEnd.handleItem(transEnd.nearby(transEnd.relativeTo(b)), itm);
        b.isReady = false;
      };
    };


    function getTileTargetComp(b, itm, ob, isFlip) {
      if(!b.isReady) return;
      return frag_item._transEnd(b, b.nearby(ob.relativeTo(b)));
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


    const acceptItem = function(b, ob, itm) {
      return acceptItemComp(b, ob, itm);
    };
    exports.acceptItem = acceptItem;


    const handleItem = function(b, ob, itm) {
      handleItemComp(b, ob, itm);
    };
    exports.handleItem = handleItem;


    const getTileTarget = function(b, itm, ob, isFlip) {
      return getTileTargetComp(b, itm, ob, isFlip);
    };
    exports.getTileTarget = getTileTarget;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_junction.js loaded.");
});
