/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_container");

    const frag_faci = require("reind/frag/frag_faci");
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
        TEMPLATE.setStats(this);
        frag_faci.setStats_flammable(this);
      },
    });
    effStor_crate.buildType = () => extend(StorageBlock.StorageBuild, effStor_crate, {
      // Specific
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
        frag_faci.updateTile_flammable(this);
      },
    });
    exports.effStor_crate = effStor_crate;


    const effStor_reinforcedCrate = extend(StorageBlock, "eff-stor-reinforced-crate", {
      // Specific
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
        frag_faci.setStats_flammable(this);
      },
    });
    effStor_reinforcedCrate.buildType = () => extend(StorageBlock.StorageBuild, effStor_reinforcedCrate, {
      // Specific
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
        frag_faci.updateTile_flammable(this);
      },
    });
    exports.effStor_reinforcedCrate = effStor_reinforcedCrate;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_container.js loaded.");
});
