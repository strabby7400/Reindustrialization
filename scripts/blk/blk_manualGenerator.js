/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericGenerator");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_ui = require("reind/mdl/mdl_ui");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.tiles);
    };


    function updateTileComp(b) {
      b.totalTime -= b.warmup * Time.delta;
      b.totalTime += b.warmup * b.frac * Time.delta;

      b.frac -= Math.min(0.005, b.frac);
    };


    function updateEfficiencyMultiplierComp(b) {
      b.efficiencyMultiplier = b.frac;
    };


    function buildConfigurationComp(b, tb) {
      var vec2 = new Vec2();

      mdl_table.setTrigger(tb, function() {
        if(Vars.state.paused) {
          mdl_ui.showInfoFade(Core.bundle.get("info.reind-info-manual-generator-paused.name"));
        } else {
          var frac = Mathf.clamp(Mathf.lerpDelta(b.frac, 1.14514, 0.14));
          Call.tileConfig(Vars.player, b, vec2.set(frac, -2));
        };
      }, Icon.power, Core.bundle.get("info.reind-info-manual-generator.name"), 72.0);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[0] > -2) {
        b.frac = tup[0];

        mdl_effect.showAt(b, b.block.generateEffect);
      };
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


    const updateEfficiencyMultiplier = function(b) {
      updateEfficiencyMultiplierComp(b);
    };
    exports.updateEfficiencyMultiplier = updateEfficiencyMultiplier;


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
  Log.info("REIND: blk_manualGenerator.js loaded.");
});
