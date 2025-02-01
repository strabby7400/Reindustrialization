/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_conveyor = require("reind/blk/blk_conveyor");
    const blk_stackConveyor = require("reind/blk/blk_stackConveyor");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: dis-conv[conveyor]
    const disConv_primitiveConveyor = extend(Conveyor, "dis-conv-primitive-conveyor", {
      setStats() {
        this.super$setStats();
        blk_conveyor.setStats(this);
      },
    });
    disConv_primitiveConveyor.buildType = () => extend(Conveyor.ConveyorBuild, disConv_primitiveConveyor, {
      updateTile() {
        this.super$updateTile();
        blk_conveyor.updateTile(this);
      },
    });
    exports.disConv_primitiveConveyor = disConv_primitiveConveyor;


    const disConv_improvedConveyor = extend(ArmoredConveyor, "dis-conv-improved-conveyor", {
      setStats() {
        this.super$setStats();
        blk_conveyor.setStats(this);
      },
    });
    disConv_improvedConveyor.buildType = () => extend(ArmoredConveyor.ArmoredConveyorBuild, disConv_improvedConveyor, {
      updateTile() {
        this.super$updateTile();
        blk_conveyor.updateTile(this);
      },
    });
    exports.disConv_improvedConveyor = disConv_improvedConveyor;
  // End


  // Part: dis-conv[stack conveyor]
    const disConv_multiPortConveyor = extend(StackConveyor, "dis-conv-multi-port-conveyor", {
      setStats() {
        this.super$setStats();
        blk_stackConveyor.setStats(this);
      },
    });
    disConv_multiPortConveyor.buildType = () => extend(StackConveyor.StackConveyorBuild, disConv_multiPortConveyor, {
      updateTile() {
        this.super$updateTile();
        blk_stackConveyor.updateTile(this);
      },
    });
    blk_stackConveyor.setup(disConv_multiPortConveyor);
    exports.disConv_multiPortConveyor = disConv_multiPortConveyor;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_conveyor.js loaded.");
});
