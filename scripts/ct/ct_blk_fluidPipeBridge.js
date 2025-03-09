/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fluidPipeBridge = require("reind/blk/blk_fluidPipeBridge");
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
        blk_fluidPipeBridge.setStats(this);
      },
    });
    bliqBrd_primitiveFluidPipeBridge.buildType = () => extend(LiquidBridge.LiquidBridgeBuild, bliqBrd_primitiveFluidPipeBridge, {
      updateTile() {
        this.super$updateTile();
        blk_fluidPipeBridge.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_fluidPipeBridge.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_fluidPipeBridge.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPipeBridge.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPipeBridge.drawSelect(this);
      },
    });
    exports.bliqBrd_primitiveFluidPipeBridge = bliqBrd_primitiveFluidPipeBridge;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fluidPipeBridge.js loaded.");
});
