/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");

    const db_env = require("reind/db/db_env");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get related item
      if(blk.itemDrop != null) {
        var li_itm = new Seq([blk.itemDrop]);
        blk.stats.add(db_stat.resourceRelated, StatValues.content(li_itm));
      };

      // Get related liquid
      if(blk.liquidDrop != null) {
        var li_liq = new Seq([blk.liquidDrop]);
        blk.stats.add(db_stat.resourceRelated, StatValues.content(li_liq));
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
      setStatsComp(blk);
    };
    exports.setStats = setStats;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_genericBlock.js loaded.");
});
