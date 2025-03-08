/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericGenerator = require("reind/blk/blk_genericGenerator");

    const ct_blk_manualGenerator = require("reind/ct/ct_blk_manualGenerator");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_ui = require("reind/mdl/mdl_ui");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.tiles);
    };


    function updateTileComp(b) {
      var frac = ct_blk_manualGenerator.accB_frac(b, "r");
      b.totalTime -= b.warmup * Time.delta;
      b.totalTime += b.warmup * frac * Time.delta;

      var frac_dec = Math.min(0.005, frac);
      ct_blk_manualGenerator.accB_frac(b, "w", frac - frac_dec);
    };


    function updateEfficiencyMultiplierComp(b) {
      var frac = ct_blk_manualGenerator.accB_frac(b, "r");
      b.efficiencyMultiplier = frac;
    };


    function buildConfigurationComp(b, tb) {
      mdl_table.setTrigger(tb, function() {
        if(Vars.state.paused) {
          mdl_ui.showInfoFade(Core.bundle.get("info.reind-info-manual-generator-paused.name"));
        } else {
          var frac_fi = Mathf.lerpDelta(ct_blk_manualGenerator.accB_frac(b, "r"), 1.0, 0.135);
          Call.tileConfig(Vars.player, b, new Vec2(frac_fi, -2));
        };
      }, Icon.power, Core.bundle.get("info.reind-info-manual-generator.name"), Tex.button, 72.0);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      if(builder != null && builder.isPlayer()) b.lastAccessed = builder.getPlayer().coloredName();
      var val_fi = -2;
      var param_fi = -2;
      if(val instanceof Vec2) {
        val_fi = val.x;
        param_fi = val.y;
      };
      if(val instanceof Building) val_fi = val.config();

      if(val_fi > -2) {
        ct_blk_manualGenerator.accB_frac(b, "w", val_fi);

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
      blk_genericGenerator.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericGenerator.updateTile(b);

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
  Log.info("REIND:blk_manualGenerator.js loaded.");
});
