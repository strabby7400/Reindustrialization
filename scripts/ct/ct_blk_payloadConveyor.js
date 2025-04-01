/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_payloadConveyor");
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
        TEMPLATE.setStats(this);
      },
    });
    payConv_payloadExpressWay.buildType = () => extend(PayloadConveyor.PayloadConveyorBuild, payConv_payloadExpressWay, {
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      status() {
        return TEMPLATE.status(this);
      },
      unitOn(unit) {
        TEMPLATE.unitOn(this, unit);
      },
    });
    exports.payConv_payloadExpressWay = payConv_payloadExpressWay;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_payloadConveyor.js loaded.");
});
