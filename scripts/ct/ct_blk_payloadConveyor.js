/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_payloadConveyor = require("reind/blk/blk_payloadConveyor");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pay-conv
    const payConv_payloadExpressWay = extend(PayloadConveyor, "pay-conv-payload-express-way", {
      setStats() {
        this.super$setStats();
        blk_payloadConveyor.setStats(this);
      },
    });
    payConv_payloadExpressWay.buildType = () => extend(PayloadConveyor.PayloadConveyorBuild, payConv_payloadExpressWay, {
      updateTile() {
        blk_payloadConveyor.updateTile(this);
      },
      status() {
        return blk_payloadConveyor.status(this);
      },
      unitOn(unit) {
        blk_payloadConveyor.unitOn(this, unit);
      },
    });
    exports.payConv_payloadExpressWay = payConv_payloadExpressWay;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_payloadConveyor.js loaded.");
});
