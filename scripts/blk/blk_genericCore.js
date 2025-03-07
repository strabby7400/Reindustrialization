/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericStorageBlock = require("reind/blk/blk_genericStorageBlock");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var rate = mdl_data.read_1n1v(db_block.coreEffcOutput, blk.name);
      if(rate != null) blk.stats.add(db_stat.coreEffc, rate, StatUnit.perSecond);
    };


    function updateTileComp(b) {
      var rate = Time.delta * mdl_data.read_1n1v(db_block.coreEffcOutput, b.block.name) / 60.0;
      if(rate != null) frag_fluid.updateTile_coreEffc(b, rate);
    };


    function buildConfigurationComp(b, tb) {
      db_table.__timeController(tb, b);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var val_fi = 0.0;
      if(val instanceof Vec2) val_fi = val.x;
      if(val instanceof Building) val_fi = val.config();

      Time.setDeltaProvider(() => Core.graphics.getDeltaTime() * 60.0 * val_fi);
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


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericCore.js loaded.");
});
