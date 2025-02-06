/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericStorageBlock = require("reind/blk/blk_genericStorageBlock");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_database = require("reind/mdl/mdl_database");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var rate = mdl_database.read_1n1v(db_block.coreEffcOutput, blk.name);
      if(rate != null) blk.stats.add(db_stat.coreEffc, rate, StatUnit.perSecond);
    };


    function updateTileComp(b) {
      var rate = Time.delta * mdl_database.read_1n1v(db_block.coreEffcOutput, b.block.name) / 60.0;
      if(rate != null) frag_fluid.updateTile_coreEffc(b, rate);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericStorageBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericStorageBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericCore.js loaded.");
});
