/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fluidPump");
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
        TEMPLATE.setStats(this);
      },
    });
    bliqPump_primitiveFluidPump.buildType = () => extend(Pump.PumpBuild, bliqPump_primitiveFluidPump, {
      timerEffc: new Interval(1), tmpRate: 0.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
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
    exports.bliqPump_primitiveFluidPump = bliqPump_primitiveFluidPump;


    const bliqPump_pistonFluidPump = extend(Pump, "bliq-pump-piston-fluid-pump", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqPump_pistonFluidPump.buildType = () => extend(Pump.PumpBuild, bliqPump_pistonFluidPump, {
      timerEffc: new Interval(1), tmpRate: 0.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
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
    exports.bliqPump_pistonFluidPump = bliqPump_pistonFluidPump;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fluidPump.js loaded.");
});
