/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_bitContainer");
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
        TEMPLATE.setStats(this);
      },
    });
    effStor_bitContainer.buildType = () => extend(StorageBlock.StorageBuild, effStor_bitContainer, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptItem(source, item) {
        if(!this.super$acceptItem(source, item)) return false;
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
    });
    exports.effStor_bitContainer = effStor_bitContainer;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_bitContainer.js loaded.");
});
