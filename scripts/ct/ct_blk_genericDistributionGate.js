/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_directionalRouter = require("reind/blk/blk_directionalRouter");
    const blk_directionalUnloader = require("reind/blk/blk_directionalUnloader");
    const blk_filterGate = require("reind/blk/blk_filterGate");
    const blk_overflowGate = require("reind/blk/blk_overflowGate");
    const blk_router = require("reind/blk/blk_router");
    const blk_unloader = require("reind/blk/blk_unloader");
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
        blk_router.setStats(this);
      },
    });
    disAux_router.buildType = () => extend(Router.RouterBuild, disAux_router, {
      updateTile() {
        this.super$updateTile();
        blk_router.updateTile(this);
      },
      draw() {
        this.super$draw();
        blk_router.draw(this);
      },
    });
    exports.disAux_router = disAux_router;
  // End


  // Part: dis-aux[directional router]
    const disAux_directionalRouter = extend(DuctRouter, "dis-aux-directional-router", {
      setStats() {
        this.super$setStats();
        blk_directionalRouter.setStats(this);
      },
    });
    disAux_directionalRouter.buildType = () => extend(DuctRouter.DuctRouterBuild, disAux_directionalRouter, {
      updateTile() {
        this.super$updateTile();
        blk_directionalRouter.updateTile(this);
      },
    });
    exports.disAux_directionalRouter = disAux_directionalRouter;
  // End


  // Part: dis-aux[filter gate]
    const disAux_filterGate = extend(Sorter, "dis-aux-filter-gate", {
      setStats() {
        this.super$setStats();
        blk_filterGate.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_filterGate.setBars(this);
      },
    });
    disAux_filterGate.buildType = () => extend(Sorter.SorterBuild, disAux_filterGate, {
      updateTile() {
        this.super$updateTile();
        blk_filterGate.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_filterGate.drawSelect(this);
      },
    });
    exports.disAux_filterGate = disAux_filterGate;


    const disAux_blockerGate = extend(Sorter, "dis-aux-blocker-gate", {
      setStats() {
        this.super$setStats();
        blk_filterGate.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_filterGate.setBars(this);
      },
    });
    disAux_blockerGate.buildType = () => extend(Sorter.SorterBuild, disAux_blockerGate, {
      updateTile() {
        this.super$updateTile();
        blk_filterGate.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_filterGate.drawSelect(this);
      },
    });
    exports.disAux_blockerGate = disAux_blockerGate;
  // End


  // Part: dis-aux[overflow gate]
    const disAux_overflowGate = extend(OverflowGate, "dis-aux-overflow-gate", {
      setStats() {
        this.super$setStats();
        blk_overflowGate.setStats(this);
      },
    });
    disAux_overflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, disAux_overflowGate, {
      updateTile() {
        this.super$updateTile();
        blk_overflowGate.updateTile(this);
      },
    });
    exports.disAux_overflowGate = disAux_overflowGate;


    const disAux_underflowGate = extend(OverflowGate, "dis-aux-underflow-gate", {
      setStats() {
        this.super$setStats();
        blk_overflowGate.setStats(this);
      },
    });
    disAux_underflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, disAux_underflowGate, {
      updateTile() {
        this.super$updateTile();
        blk_overflowGate.updateTile(this);
      },
    });
    exports.disAux_underflowGate = disAux_underflowGate;
  // End


  // Part: dis-aux[unloader]
    const disAux_primitiveUnloader = extend(Unloader, "dis-aux-primitive-unloader", {
      setStats() {
        this.super$setStats();
        blk_unloader.setStats(this);
      },
    });
    disAux_primitiveUnloader.buildType = () => extend(Unloader.UnloaderBuild, disAux_primitiveUnloader, {
      updateTile() {
        this.super$updateTile();
        blk_unloader.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_unloader.drawSelect(this);
      },
    });
    exports.disAux_primitiveUnloader = disAux_primitiveUnloader;
  // End


  // Part: dis-aux[directional unloader]
    const disAux_improvedUnloader = extend(DirectionalUnloader, "dis-aux-improved-unloader", {
      setStats() {
        this.super$setStats();
        blk_directionalUnloader.setStats(this);
      },
    });
    disAux_improvedUnloader.buildType = () => extend(DirectionalUnloader.DirectionalUnloaderBuild, disAux_improvedUnloader, {
      updateTile() {
        this.super$updateTile();
        blk_directionalUnloader.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_directionalUnloader.drawSelect(this);
      },
    });
    exports.disAux_improvedUnloader = disAux_improvedUnloader;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_genericDistributionGate.js loaded.");
});
