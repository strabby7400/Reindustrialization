/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_rotationalTurret = require("reind/blk/blk_rotationalTurret");

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
      blk_rotationalTurret.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_rotationalTurret.updateTile(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!blk_rotationalTurret.canPlaceOn(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const hasAmmo = function(b) {
      if(!blk_rotationalTurret.hasAmmo(b)) return false;

      return true;
    };
    exports.hasAmmo = hasAmmo;


    const status = function(b) {
      return blk_rotationalTurret.status(b);
    };
    exports.status = status;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      blk_rotationalTurret.drawPlace(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      blk_rotationalTurret.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_liquidTurret.js loaded.");
});
