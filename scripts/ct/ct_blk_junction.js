/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_junction");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: dis-aux
    const disAux_primitiveJunction = extend(OverflowGate, "dis-aux-primitive-junction", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    disAux_primitiveJunction.buildType = () => extend(OverflowGate.OverflowGateBuild, disAux_primitiveJunction, {
      needCheck: true,
      thr: 0.0, isReady: false,
      timerCall: new Interval(1),
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptItem(source, item) {
        return TEMPLATE.acceptItem(this, source, item);
      },
      handleItem(source, item) {
        TEMPLATE.handleItem(this, source, item);
      },
      getTileTarget(item, src, flip) {
        return TEMPLATE.getTileTarget(this, item, src, flip);
      },
    });
    exports.disAux_primitiveJunction = disAux_primitiveJunction;
  // End



Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_conveyor.js loaded.");
});
