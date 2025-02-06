/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fluidPump = require("reind/blk/blk_fluidPump");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-pump
    const bliqPump_primitiveFluidPump = extend(Pump, "bliq-pump-primitive-fluid-pump", {
      setStats() {
        this.super$setStats();
        blk_fluidPump.setStats(this);
      },
    });
    bliqPump_primitiveFluidPump.buildType = () => extend(Pump.PumpBuild, bliqPump_primitiveFluidPump, {
      updateTile() {
        this.super$updateTile();
        blk_fluidPump.updateTile(this);
      },
      moveLiquid(next, liquid) {
        return blk_fluidPump.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPump.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPump.drawSelect(this);
      },
    });
    exports.bliqPump_primitiveFluidPump = bliqPump_primitiveFluidPump;


    const bliqPump_pistonFluidPump = extend(Pump, "bliq-pump-piston-fluid-pump", {
      setStats() {
        this.super$setStats();
        blk_fluidPump.setStats(this);
      },
    });
    bliqPump_pistonFluidPump.buildType = () => extend(Pump.PumpBuild, bliqPump_pistonFluidPump, {
      updateTile() {
        this.super$updateTile();
        blk_fluidPump.updateTile(this);
      },
      moveLiquid(next, liquid) {
        return blk_fluidPump.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPump.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPump.drawSelect(this);
      },
    });
    exports.bliqPump_pistonFluidPump = bliqPump_pistonFluidPump;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_fluidPump.js loaded.");
});
