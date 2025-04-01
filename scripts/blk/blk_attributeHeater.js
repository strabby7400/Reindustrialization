/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_heater");

    const mdl_attr = require("reind/mdl/mdl_attr");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.attributeRequired, mdl_attr._attrVal(blk.attribute));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      PARENT.setBars(blk);
    };
    exports.setBars = setBars;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_attributeHeater.js loaded.");
});
