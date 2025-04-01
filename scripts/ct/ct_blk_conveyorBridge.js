/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_conveyorBridge");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const disBrd_primitiveConveyorBridge = extend(BufferedItemBridge, "dis-brd-primitive-conveyor-bridge", {
    setStats() {
      this.super$setStats();
      TEMPLATE.setStats(this);
    },
    init() {
      this.super$init();
      TEMPLATE.init(this);
    },
  });
  disBrd_primitiveConveyorBridge.buildType = () => extend(BufferedItemBridge.BufferedItemBridgeBuild, disBrd_primitiveConveyorBridge, {
    updateTile() {
      this.super$updateTile();
      TEMPLATE.updateTile(this);
    },
  });
  exports.disBrd_primitiveConveyorBridge = disBrd_primitiveConveyorBridge;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_conveyorBridge.js loaded.");
});
