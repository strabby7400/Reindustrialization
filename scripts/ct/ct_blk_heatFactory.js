/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_heatFactory");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-furn
    const facFurn_primitiveGlassKiln = extend(GenericCrafter, "fac-furn-primitive-glass-kiln", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
    });
    facFurn_primitiveGlassKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveGlassKiln, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    exports.facFurn_primitiveGlassKiln = facFurn_primitiveGlassKiln;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_heatFactory.js loaded.");
});
