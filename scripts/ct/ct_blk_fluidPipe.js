/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fluidPipe = require("reind/blk/blk_fluidPipe");

    const frag_facility = require("reind/frag/frag_facility");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-cond
    const bliqCond_woodenFluidPipe = extend(Conduit, "bliq-cond-wooden-fluid-pipe", {
      // Specific
      setStats() {
        this.super$setStats();
        blk_fluidPipe.setStats(this);
        frag_facility.setStats_flammable(this);
      },
    });
    bliqCond_woodenFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_woodenFluidPipe, {
      // Specific
      updateTile() {
        this.super$updateTile();
        blk_fluidPipe.updateTile(this);
        frag_facility.updateTile_flammable(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_fluidPipe.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_fluidPipe.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPipe.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPipe.drawSelect(this);
      },
    });
    exports.bliqCond_woodenFluidPipe = bliqCond_woodenFluidPipe;


    const bliqCond_bronzeFluidPipe = extend(Conduit, "bliq-cond-bronze-fluid-pipe", {
      setStats() {
        this.super$setStats();
        blk_fluidPipe.setStats(this);
      },
    });
    bliqCond_bronzeFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_bronzeFluidPipe, {
      updateTile() {
        this.super$updateTile();
        blk_fluidPipe.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_fluidPipe.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_fluidPipe.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPipe.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPipe.drawSelect(this);
      },
    });
    exports.bliqCond_bronzeFluidPipe = bliqCond_bronzeFluidPipe;


    const bliqCond_steelFluidPipe = extend(ArmoredConduit, "bliq-cond-steel-fluid-pipe", {
      setStats() {
        this.super$setStats();
        blk_fluidPipe.setStats(this);
      },
    });
    bliqCond_steelFluidPipe.buildType = () => extend(ArmoredConduit.ArmoredConduitBuild, bliqCond_steelFluidPipe, {
      updateTile() {
        this.super$updateTile();
        blk_fluidPipe.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_fluidPipe.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_fluidPipe.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPipe.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPipe.drawSelect(this);
      },
    });
    exports.bliqCond_steelFluidPipe = bliqCond_steelFluidPipe;


    const bliqCond_temperedGlassFluidPipe = extend(Conduit, "bliq-cond-tempered-glass-fluid-pipe", {
      setStats() {
        this.super$setStats();
        blk_fluidPipe.setStats(this);
      },
    });
    bliqCond_temperedGlassFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_temperedGlassFluidPipe, {
      updateTile() {
        this.super$updateTile();
        blk_fluidPipe.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_fluidPipe.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_fluidPipe.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_fluidPipe.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fluidPipe.drawSelect(this);
      },
    });
    exports.bliqCond_temperedGlassFluidPipe = bliqCond_temperedGlassFluidPipe;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_fluidPipe.js loaded.");
});
