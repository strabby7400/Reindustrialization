/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_heatFactory = require("reind/blk/blk_heatFactory");
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
        blk_heatFactory.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_heatFactory.setBars(this);
      },
    });
    facFurn_primitiveGlassKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveGlassKiln, {
      updateTile() {
        this.super$updateTile();
        blk_heatFactory.updateTile(this);
      },
    });
    exports.facFurn_primitiveGlassKiln = facFurn_primitiveGlassKiln;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_heatFactory.js loaded.");
});
