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
          ct_blk_manualGenerator.accB_frac(b, "w", Mathf.lerpDelta(
            ct_blk_manualGenerator.accB_frac(b, "r"),
            1.0,
            0.125,
          ));
          mdl_effect.showAt(b, b.block.generateEffect);
        };
      }, Icon.power, Core.bundle.get("info.reind-info-manual-generator.name"), Tex.button, 72.0);
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
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_windTurbine.js loaded.");
});
