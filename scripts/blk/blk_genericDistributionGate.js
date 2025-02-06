/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDistributionBlock = require("reind/blk/blk_genericDistributionBlock");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(db_stat.unloadable);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDistributionBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDistributionBlock.updateTile(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericDistributionGate.js loaded.");
});
