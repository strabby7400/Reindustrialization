/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_manualGenerator");
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
        TEMPLATE.setStats(this);
      },
    });
    powGen_manualGenerator.buildType = () => extend(ConsumeGenerator.ConsumeGeneratorBuild, powGen_manualGenerator, {
      frac: 0.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      updateEfficiencyMultiplier() {
        TEMPLATE.updateEfficiencyMultiplier(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
    });
    exports.powGen_manualGenerator = powGen_manualGenerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_manualGenerator.js loaded.");
});
