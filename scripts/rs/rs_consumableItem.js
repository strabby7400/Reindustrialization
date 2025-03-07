/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericItem = require("reind/rs/rs_genericItem");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_item = require("reind/db/db_item");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.isConsumable, true);

      var tagVal = mdl_text.getTagText(mdl_data.readli_1n1v(db_item.consumableMap, itm.name));
      if(tagVal != null) itm.stats.add(db_stat.usedIn, tagVal);
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
  Log.info("REIND:rs_consumableItem.js loaded.");
});
