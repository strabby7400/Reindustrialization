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
        var list_itm = new Seq([blk.itemDrop]);
        blk.stats.add(db_stat.resourceRelated, StatValues.content(list_itm));
      };

      // Get related liquid
      if(blk.liquidDrop != null) {
        var list_liq = new Seq([blk.liquidDrop]);
        blk.stats.add(db_stat.resourceRelated, StatValues.content(list_liq));
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
