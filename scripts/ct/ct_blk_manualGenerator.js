/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_manualGenerator = require("reind/blk/blk_manualGenerator");
  // End


  // Part: Accessor
    const accB_frac = function(b, mode, val) {
      if(mode == "r") return b.frac;
      if(mode == "w") b.frac = val;
    };
    exports.accB_frac = accB_frac;
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-gen
    const powGen_manualGenerator = extend(ConsumeGenerator, "pow-gen-manual-generator", {
      setStats() {
        this.super$setStats();
        blk_manualGenerator.setStats(this);
      },
    });
    powGen_manualGenerator.buildType = () => extend(ConsumeGenerator.ConsumeGeneratorBuild, powGen_manualGenerator, {
      frac: 0.0,
      updateTile() {
        this.super$updateTile();
        blk_manualGenerator.updateTile(this);
      },
      updateEfficiencyMultiplier() {
        blk_manualGenerator.updateEfficiencyMultiplier(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_manualGenerator.buildConfiguration(this, table);
      },
      configured(builder, value) {
        blk_manualGenerator.configured(this, builder, value);
      },
    });
    exports.powGen_manualGenerator = powGen_manualGenerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_manualGenerator.js loaded.");
});
