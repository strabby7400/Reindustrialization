/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_blockCrafter");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pay-fac
    const payFac_basicAssemblier = extend(Constructor, "pay-fac-basic-assemblier", {
      needCheck: true,
      changeEff: null,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    payFac_basicAssemblier.buildType = () => extend(Constructor.ConstructorBuild, payFac_basicAssemblier, {
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      configured(builder, value) {
        this.super$configured(builder, value);
        TEMPLATE.configured(this, builder, value);
      },
    });
    exports.payFac_basicAssemblier = payFac_basicAssemblier;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_blockCrafter.js loaded.");
});
