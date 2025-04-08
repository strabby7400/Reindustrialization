/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fluidJunction");
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
        TEMPLATE.setStats(this);
      },
    });
    bliqAux_fluidJunction.buildType = () => extend(LiquidJunction.LiquidJunctionBuild, bliqAux_fluidJunction, {
      timerEffc: new Interval(1), tmpRate: 0.0, transEnd: null,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.bliqAux_fluidJunction = bliqAux_fluidJunction;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fluidJunction.js loaded.");
});
