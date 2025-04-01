/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fluidPipeBridge");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-cond
    const bliqBrd_primitiveFluidPipeBridge = extend(LiquidBridge, "bliq-brd-primitive-fluid-pipe-bridge", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqBrd_primitiveFluidPipeBridge.buildType = () => extend(LiquidBridge.LiquidBridgeBuild, bliqBrd_primitiveFluidPipeBridge, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.bliqBrd_primitiveFluidPipeBridge = bliqBrd_primitiveFluidPipeBridge;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fluidPipeBridge.js loaded.");
});
