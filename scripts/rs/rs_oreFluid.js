/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericFluid");

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
    function setStatsComp(liq) {
      var blks = mdl_content._oreBlks(liq);
      if(blks.length > 0) liq.stats.add(db_stat.blockRelated, ax_buildStats(blks));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(liq) {
      PARENT.setStats(liq);

      setStatsComp(liq);
    };
    exports.setStats = setStats;


    const update = function(liq, puddle) {
      PARENT.update(liq, puddle);
    };
    exports.update = update;


    const loadIcon = function(liq) {
      PARENT.loadIcon(liq);
    };
    exports.loadIcon = loadIcon


    const createIcons = function(liq, packer) {
      PARENT.createIcons(liq, packer);
    };
    exports.createIcons = createIcons;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_oreFluid.js loaded.");
});
