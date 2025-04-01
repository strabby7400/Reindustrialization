/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_conveyor");
    const TEMPLATE_A = require("reind/blk/blk_stackConveyor");
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
        TEMPLATE.setStats(this);
      },
    });
    disConv_primitiveConveyor.buildType = () => extend(Conveyor.ConveyorBuild, disConv_primitiveConveyor, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    exports.disConv_primitiveConveyor = disConv_primitiveConveyor;


    const disConv_improvedConveyor = extend(ArmoredConveyor, "dis-conv-improved-conveyor", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    disConv_improvedConveyor.buildType = () => extend(ArmoredConveyor.ArmoredConveyorBuild, disConv_improvedConveyor, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    exports.disConv_improvedConveyor = disConv_improvedConveyor;
  // End


  // Part: dis-conv[stack conveyor]
    const disConv_multiPortConveyor = extend(StackConveyor, "dis-conv-multi-port-conveyor", {
      setStats() {
        this.super$setStats();
        TEMPLATE_A.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE_A.init(this);
      },
    });
    disConv_multiPortConveyor.buildType = () => extend(StackConveyor.StackConveyorBuild, disConv_multiPortConveyor, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_A.updateTile(this);
      },
    });
    exports.disConv_multiPortConveyor = disConv_multiPortConveyor;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_conveyor.js loaded.");
});
