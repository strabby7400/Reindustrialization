/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericItem = require("reind/rs/rs_genericItem");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_item = require("reind/db/db_item");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp_consumableItem(itm) {
      // Get consumable
      itm.stats.add(db_stat.isConsumable, true);

      // Get used in
      var tagVal = mdl_text.getTagText(mdl_database.readli_1n1v(db_item.consumableMap, itm.name));
      if(tagVal != null) itm.stats.add(db_stat.usedIn, tagVal);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_consumableItem = function(itm) {
      rs_genericItem.setStats(itm);

      setStatsComp_consumableItem(itm);
    };
    exports.setStats = setStats_consumableItem;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_consumableItem.js loaded.");
});
