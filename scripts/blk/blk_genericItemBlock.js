/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericBlock = require("reind/blk/blk_genericBlock");

    const frag_item = require("reind/frag/frag_item");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.unloadable, blk.unloadable);

      if(db_block.exposedToAir.contains(blk.name)) blk.stats.add(db_stat.exposedToAir, true);
    };


    function updateTileComp(b) {
      frag_item.updateTile_virtualItem(b);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericItemBlock.js loaded.");
});
