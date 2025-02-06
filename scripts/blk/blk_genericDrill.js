/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericMiner = require("reind/blk/blk_genericMiner");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.drillTier);

      if(blk instanceof Drill) {
        var drillSpeed = Math.pow(blk.size, 2) / blk.drillTime * 60.0 * Math.pow(blk.liquidBoostIntensity, 2);
        blk.stats.add(db_stat.boostedDrillSpeed, drillSpeed, StatUnit.itemsSecond);
      } else if(blk instanceof BeamDrill) {
        var drillSpeed = blk.size / blk.drillTime * 60.0 * blk.optionalBoostIntensity;
        blk.stats.add(db_stat.boostedDrillSpeed, drillSpeed, StatUnit.itemsSecond);
      };

      if(blk.blockedItem != null) {
        blk.stats.add(db_stat.blockedItem, StatValues.content(new Seq([blk.blockedItem]).sort()));
      };

      if(blk.tier != null) {
        blk.stats.add(db_stat.mineTier, blk.tier);
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericMiner.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericMiner.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericDrill.js loaded.");
});
