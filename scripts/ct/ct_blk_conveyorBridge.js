/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_conveyorBridge = require("reind/blk/blk_conveyorBridge");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const disBrd_primitiveConveyorBridge = extend(BufferedItemBridge, "dis-brd-primitive-conveyor-bridge", {
    setStats() {
      this.super$setStats();
      blk_conveyorBridge.setStats(this);
    },
  });
  disBrd_primitiveConveyorBridge.buildType = () => extend(BufferedItemBridge.BufferedItemBridgeBuild, disBrd_primitiveConveyorBridge, {
    updateTile() {
      this.super$updateTile();
      blk_conveyorBridge.updateTile(this);
    },
  });
  blk_conveyorBridge.setup(disBrd_primitiveConveyorBridge);
  exports.disBrd_primitiveConveyorBridge = disBrd_primitiveConveyorBridge;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_conveyorBridge.js loaded.");
});
