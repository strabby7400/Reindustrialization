/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericStorageBlock");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Setting
    var secretCode = "<ohno>";
    const set_secretCode = function(val) {
      secretCode = val;
    };
    exports.set_secretCode = set_secretCode;
  // End


  // Part: Component
    function setStatsComp(blk) {
      var speed = mdl_data.read_1n1v(db_block.db["param"]["speed"]["base"], blk.name, 0.0);
      blk.stats.add(db_stat.coreEffc, speed, StatUnit.perSecond);
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.rate = mdl_data.read_1n1v(db_block.db["param"]["speed"]["base"], b.block.name, 0.0) / 60.0;

        b.needCheck = false;
      };

      frag_fluid.updateTile_coreEffc(b, b.rate);
    };


    function buildConfigurationComp(b, tb) {
      db_table.__timeController(tb, b);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[0] > -2) {
        Time.setDeltaProvider(() => Core.graphics.getDeltaTime() * 60.0 * tup[0]);
      };
    };


    function drawComp(b) {
      if(secretCode.includes("<router>")) mdl_draw.drawNormalRegion(b, Vars.content.block("reind-dis-aux-router").region, 0.0, 1.0, b.block.size);
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


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericCore.js loaded.");
});
