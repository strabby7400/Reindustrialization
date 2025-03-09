/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_bitContainer = require("reind/blk/blk_bitContainer");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: eff-stor
    const effStor_bitContainer = extend(StorageBlock, "eff-stor-bit-container", {
      setStats() {
        this.super$setStats();
        blk_bitContainer.setStats(this);
      },
    });
    effStor_bitContainer.buildType = () => extend(StorageBlock.StorageBuild, effStor_bitContainer, {
      updateTile() {
        this.super$updateTile();
        blk_bitContainer.updateTile(this);
      },
      acceptItem(source, item) {
        if(!this.super$acceptItem(source, item)) return false;
        if(!blk_bitContainer.acceptItem(this, source, item)) return false;
        return true;
      },
    });
    exports.effStor_bitContainer = effStor_bitContainer;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_bitContainer.js loaded.");
});
