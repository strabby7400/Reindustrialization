/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_router");
    const TEMPLATE_A = require("reind/blk/blk_directionalRouter");
    const TEMPLATE_B = require("reind/blk/blk_filterGate");
    const TEMPLATE_C = require("reind/blk/blk_overflowGate");
    const TEMPLATE_D = require("reind/blk/blk_unloader");
    const TEMPLATE_E = require("reind/blk/blk_directionalUnloader");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: dis-aux[router]
    const disAux_router = extend(Router, "dis-aux-router", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    disAux_router.buildType = () => extend(Router.RouterBuild, disAux_router, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
    });
    exports.disAux_router = disAux_router;
  // End


  // Part: dis-aux[directional router]
    const disAux_directionalRouter = extend(DuctRouter, "dis-aux-directional-router", {
      setStats() {
        this.super$setStats();
        TEMPLATE_A.setStats(this);
      },
    });
    disAux_directionalRouter.buildType = () => extend(DuctRouter.DuctRouterBuild, disAux_directionalRouter, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_A.updateTile(this);
      },
    });
    exports.disAux_directionalRouter = disAux_directionalRouter;
  // End


  // Part: dis-aux[filter gate]
    const disAux_filterGate = extend(Sorter, "dis-aux-filter-gate", {
      setStats() {
        this.super$setStats();
        TEMPLATE_B.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE_B.setBars(this);
      },
    });
    disAux_filterGate.buildType = () => extend(Sorter.SorterBuild, disAux_filterGate, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_B.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE_B.drawSelect(this);
      },
    });
    exports.disAux_filterGate = disAux_filterGate;


    const disAux_blockerGate = extend(Sorter, "dis-aux-blocker-gate", {
      setStats() {
        this.super$setStats();
        TEMPLATE_B.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE_B.setBars(this);
      },
    });
    disAux_blockerGate.buildType = () => extend(Sorter.SorterBuild, disAux_blockerGate, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_B.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE_B.drawSelect(this);
      },
    });
    exports.disAux_blockerGate = disAux_blockerGate;
  // End


  // Part: dis-aux[overflow gate]
    const disAux_overflowGate = extend(OverflowGate, "dis-aux-overflow-gate", {
      setStats() {
        this.super$setStats();
        TEMPLATE_C.setStats(this);
      },
    });
    disAux_overflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, disAux_overflowGate, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_C.updateTile(this);
      },
    });
    exports.disAux_overflowGate = disAux_overflowGate;


    const disAux_underflowGate = extend(OverflowGate, "dis-aux-underflow-gate", {
      setStats() {
        this.super$setStats();
        TEMPLATE_C.setStats(this);
      },
    });
    disAux_underflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, disAux_underflowGate, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_C.updateTile(this);
      },
    });
    exports.disAux_underflowGate = disAux_underflowGate;
  // End


  // Part: dis-aux[unloader]
    const disAux_primitiveUnloader = extend(Unloader, "dis-aux-primitive-unloader", {
      setStats() {
        this.super$setStats();
        TEMPLATE_D.setStats(this);
      },
    });
    disAux_primitiveUnloader.buildType = () => extend(Unloader.UnloaderBuild, disAux_primitiveUnloader, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_D.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE_D.drawSelect(this);
      },
    });
    exports.disAux_primitiveUnloader = disAux_primitiveUnloader;
  // End


  // Part: dis-aux[directional unloader]
    const disAux_improvedUnloader = extend(DirectionalUnloader, "dis-aux-improved-unloader", {
      setStats() {
        this.super$setStats();
        TEMPLATE_E.setStats(this);
      },
    });
    disAux_improvedUnloader.buildType = () => extend(DirectionalUnloader.DirectionalUnloaderBuild, disAux_improvedUnloader, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_E.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE_E.drawSelect(this);
      },
    });
    exports.disAux_improvedUnloader = disAux_improvedUnloader;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_genericDistributionGate.js loaded.");
});
