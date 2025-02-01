/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDistributionBlock = require("reind/blk/blk_genericDistributionBlock");

    const ct_blk_incinerator = require("reind/ct/ct_blk_incinerator");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.itemCapacity);
      blk.stats.remove(db_stat.unloadable);
    };


    function updateTileComp(b) {
      if(b.power != null) {
        if(b.power.status < 0.96) b.efficiency = 0.0;

        var frac = Math.pow(b.power.status, 24);
        if(frac < 0.04) frac = 0.0;
        ct_blk_incinerator.accB_frac(b, "w", frac);
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
      blk_genericDistributionBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDistributionBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_incinerator.js loaded.");
});
