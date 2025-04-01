/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_rotationalTurret");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.extinguishesFire, blk.extinguish);
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
      if(!PARENT.canPlaceOn(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const hasAmmo = function(b) {
      if(!PARENT.hasAmmo(b)) return false;

      return true;
    };
    exports.hasAmmo = hasAmmo;


    const status = function(b) {
      return PARENT.status(b);
    };
    exports.status = status;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      PARENT.drawPlace(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_liquidTurret.js loaded.");
});
