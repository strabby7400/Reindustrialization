/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_container = require("reind/blk/blk_container");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: eff-stor
    const effStor_crate = extend(StorageBlock, "eff-stor-crate", {
      setStats() {
        this.super$setStats();
        blk_container.setStats(this);
      },
    });
    effStor_crate.buildType = () => extend(StorageBlock.StorageBuild, effStor_crate, {
      updateTile() {
        this.super$updateTile();
        blk_container.updateTile(this);
      },
    });
    exports.effStor_crate = effStor_crate;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_container.js loaded.");
});
