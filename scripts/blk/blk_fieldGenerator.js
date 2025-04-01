/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericGenerator");

    const frag_faci = require("reind/frag/frag_faci");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Component
    function setStatsComp(blk) {
      frag_faci.setStats_restrict(blk);
    };


    function canPlaceOnComp(blk, t, team, rot) {
      return frag_faci.canPlaceOn_restrict(blk, t, team, rot);
    };


    function totalProgressComp(b) {
      return (mdl_content.canUpdate(b) && b.sum > 0.0) ? Time.time : 0.0;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      frag_faci.drawPlace_restrict(blk, tx, ty, rot, valid);
    };


    function drawSelectComp(b) {
      frag_faci.drawSelect_restrict(b);
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
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const totalProgress = function(b) {
      return totalProgressComp(b);
    };
    exports.totalProgress = totalProgress;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      PARENT.drawPlace(blk, tx, ty, rot, valid);

      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fieldGenerator.js loaded.");
});
