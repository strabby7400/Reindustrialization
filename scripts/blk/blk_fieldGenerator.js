/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericGenerator = require("reind/blk/blk_genericGenerator");

    const frag_facility = require("reind/frag/frag_facility");
  // End


  // Part: Component
    function setStatsComp(blk) {
      frag_facility.setStats_restrict(blk);
    };


    function canPlaceOnComp(blk, t, team, rot) {
      return frag_facility.canPlaceOn_restrict(blk, t, team, rot);
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      frag_facility.drawPlace_restrict(blk, tx, ty, rot, valid);
    };


    function drawSelectComp(b) {
      frag_facility.drawSelect_restrict(b);
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
