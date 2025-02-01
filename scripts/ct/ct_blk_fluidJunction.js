/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fluidJunction = require("reind/blk/blk_fluidJunction");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-aux
    const bliqAux_fluidJunction = extend(LiquidJunction, "bliq-aux-fluid-junction", {
      setStats() {
        this.super$setStats();
        blk_fluidJunction.setStats(this);
      },
    });
    bliqAux_fluidJunction.buildType = () => extend(LiquidJunction.LiquidJunctionBuild, bliqAux_fluidJunction, {
      updateTile() {
        this.super$updateTile();
        blk_fluidJunction.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidJunction.drawSelect(this);
      },
    });
    exports.bliqAux_fluidJunction = bliqAux_fluidJunction;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_fluidJunction.js loaded.");
});
