/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericItem = require("reind/rs/rs_genericItem");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_database = require("reind/mdl/mdl_database");

    const db_item = require("reind/db/db_item");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp_intermediateItem(itm) {
      // Get is intermediate
      itm.stats.add(db_stat.isIntermediate, true);

      // Get target products
      var li_tg = new Seq();
      mdl_database.readli_1n1v(db_item.intermediateMap, itm.name).each(nm_tg => {
        var ct_tg = mdl_content.getContent_nm(nm_tg);
        if(ct_tg != null) li_tg.add(ct_tg);
      });
      if(li_tg.size > 0) itm.stats.add(db_stat.targetProducts, StatValues.content(li_tg));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_intermediateItem = function(itm) {
      rs_genericItem.setStats(itm);

      setStatsComp_intermediateItem(itm);
    };
    exports.setStats = setStats_intermediateItem;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_intermediateItem.js loaded.");
});
