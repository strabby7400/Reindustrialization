/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericBlock");

    const frag_item = require("reind/frag/frag_item");

    const mdl_content = require("reind/mdl/mdl_content");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.unloadable, blk.unloadable);

      if(mdl_content.isExposed(blk)) blk.stats.add(db_stat.exposedToAir, true);
    };


    function updateTileComp(b) {
      frag_item.updateTile_virtualItem(b);
      frag_item.updateTile_exposed(b);
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

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericItemBlock.js loaded.");
});
