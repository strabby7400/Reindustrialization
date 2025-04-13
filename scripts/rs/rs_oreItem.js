/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericItem");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_table = require("reind/mdl/mdl_table");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(cts) {
      return function(tb) {
        mdl_table.setContentRowDisplay(tb, cts);
      };
    };
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.isOre, true);
      itm.stats.add(db_stat.hardness, itm.hardness);

      var blks = mdl_content._oreBlks(itm);
      if(blks.length > 0) itm.stats.add(db_stat.blockRelated, ax_buildStats(blks));
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
  Log.info("REIND: rs_oreItem.js loaded.");
});
