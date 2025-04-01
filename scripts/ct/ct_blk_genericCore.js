/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_genericCore");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const effCore_ash = extend(CoreBlock, "eff-core-ash", {
    setStats() {
      this.super$setStats();
      TEMPLATE.setStats(this);
    },
  });
  effCore_ash.buildType = () => extend(CoreBlock.CoreBuild, effCore_ash, {
    needCheck: true,
    rate: 0.0,
    updateTile() {
      this.super$updateTile();
      TEMPLATE.updateTile(this);
    },
    buildConfiguration(table) {
      this.super$buildConfiguration(table);
      TEMPLATE.buildConfiguration(this, table);
    },
    configured(builder, value) {
      TEMPLATE.configured(this, builder, value);
    },
    draw() {
      this.super$draw();
      TEMPLATE.draw(this);
    },
  });
  exports.effCore_ash = effCore_ash;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_genericCore.js loaded.");
});
