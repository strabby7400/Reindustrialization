/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericTurret = require("reind/blk/blk_genericTurret");

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
      blk_genericTurret.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericTurret.updateTile(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!blk_genericTurret.canPlaceOn(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const hasAmmo = function(b) {
      if(!blk_genericTurret.hasAmmo(b)) return false;

      return true;
    };
    exports.hasAmmo = hasAmmo;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      blk_genericTurret.drawPlace(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      blk_genericTurret.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_liquidTurret.js loaded.");
});
