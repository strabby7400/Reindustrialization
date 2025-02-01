/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericCore = require("reind/blk/blk_genericCore");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const effCore_ash = extend(CoreBlock, "eff-core-ash", {
    setStats() {
      this.super$setStats();
      blk_genericCore.setStats(this);
    },
  });
  effCore_ash.buildType = () => extend(CoreBlock.CoreBuild, effCore_ash, {
    updateTile() {
      this.super$updateTile();
      blk_genericCore.updateTile(this);
    },
  });
  exports.effCore_ash = effCore_ash;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_genericCore.js loaded.");
});
