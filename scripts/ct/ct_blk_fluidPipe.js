/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fluidPipe");

    const frag_faci = require("reind/frag/frag_faci");
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
        TEMPLATE.setStats(this);
        frag_faci.setStats_flammable(this);
      },
    });
    bliqCond_woodenFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_woodenFluidPipe, {
      timerEffc: new Interval(1), tmpRate: 0.0, transEnd: null,
      // Specific
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
        frag_faci.updateTile_flammable(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.bliqCond_woodenFluidPipe = bliqCond_woodenFluidPipe;


    const bliqCond_bronzeFluidPipe = extend(Conduit, "bliq-cond-bronze-fluid-pipe", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqCond_bronzeFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_bronzeFluidPipe, {
      timerEffc: new Interval(1), tmpRate: 0.0, transEnd: null,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.bliqCond_bronzeFluidPipe = bliqCond_bronzeFluidPipe;


    const bliqCond_steelFluidPipe = extend(ArmoredConduit, "bliq-cond-steel-fluid-pipe", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqCond_steelFluidPipe.buildType = () => extend(ArmoredConduit.ArmoredConduitBuild, bliqCond_steelFluidPipe, {
      timerEffc: new Interval(1), tmpRate: 0.0, transEnd: null,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.bliqCond_steelFluidPipe = bliqCond_steelFluidPipe;


    const bliqCond_temperedGlassFluidPipe = extend(Conduit, "bliq-cond-tempered-glass-fluid-pipe", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqCond_temperedGlassFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_temperedGlassFluidPipe, {
      timerEffc: new Interval(1), tmpRate: 0.0, transEnd: null,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.bliqCond_temperedGlassFluidPipe = bliqCond_temperedGlassFluidPipe;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fluidPipe.js loaded.");
});
