/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericItem");

    const mdl_content = require("reind/mdl/mdl_content");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.isConsumable, true);

      var consTgVal = mdl_content._consTgVal(itm);
      if(consTgVal != null) itm.stats.add(db_stat.usedIn, consTgVal);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(itm) {
      PARENT.setStats(itm);

      setStatsComp(itm);
    };
    exports.setStats = setStats;


    const loadIcon = function(itm) {
      PARENT.loadIcon(itm);
    };
    exports.loadIcon = loadIcon


    const createIcons = function(itm, packer) {
      PARENT.createIcons(itm, packer);
    };
    exports.createIcons = createIcons;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_consumableItem.js loaded.");
});
