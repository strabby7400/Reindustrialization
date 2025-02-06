/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericItem = require("reind/rs/rs_genericItem");

    const db_stat = require("reind/db/db_stat");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.isOre, true);
      itm.stats.add(db_stat.hardness, itm.hardness);

      var li_blk = new Seq();
      Vars.content.blocks().each(blk => {
        if(blk.itemDrop == itm) li_blk.add(blk);
      });
      if(li_blk.size > 0) itm.stats.add(db_stat.blockRelated, StatValues.content(li_blk.sort()));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(itm) {
      rs_genericItem.setStats(itm);

      setStatsComp(itm);
    };
    exports.setStats = setStats;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_oreItem.js loaded.");
});
