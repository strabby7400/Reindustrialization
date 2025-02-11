/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_container = require("reind/blk/blk_container");

    const frag_facility = require("reind/frag/frag_facility");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: eff-stor
    const effStor_crate = extend(StorageBlock, "eff-stor-crate", {
      // Specific
      setStats() {
        this.super$setStats();
        blk_container.setStats(this);
        frag_facility.setStats_flammable(this);
      },
    });
    effStor_crate.buildType = () => extend(StorageBlock.StorageBuild, effStor_crate, {
      // Specific
      updateTile() {
        this.super$updateTile();
        blk_container.updateTile(this);
        frag_facility.updateTile_flammable(this);
      },
    });
    exports.effStor_crate = effStor_crate;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_container.js loaded.");
});
