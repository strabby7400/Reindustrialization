/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_heatConductor = require("reind/blk/blk_heatConductor");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-hcond
    const powHcond_copperHeatConductor = extend(Conduit, "pow-hcond-copper-heat-conductor", {
      setStats() {
        this.super$setStats();
        blk_heatConductor.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_heatConductor.setBars(this);
      },
    });
    powHcond_copperHeatConductor.buildType = () => extend(Conduit.ConduitBuild, powHcond_copperHeatConductor, {
      updateTile() {
        blk_heatConductor.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!blk_heatConductor.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_heatConductor.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_heatConductor.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_heatConductor.drawSelect(this);
      },
      onDestroyed() {
        blk_heatConductor.onDestroyed(this);
      },
    });
    exports.powHcond_copperHeatConductor = powHcond_copperHeatConductor;


    const powHcond_steelHeatConductor = extend(Conduit, "pow-hcond-steel-heat-conductor", {
      setStats() {
        this.super$setStats();
        blk_heatConductor.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_heatConductor.setBars(this);
      },
    });
    powHcond_steelHeatConductor.buildType = () => extend(Conduit.ConduitBuild, powHcond_steelHeatConductor, {
      updateTile() {
        blk_heatConductor.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!blk_heatConductor.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return blk_heatConductor.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        blk_heatConductor.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_heatConductor.drawSelect(this);
      },
      onDestroyed() {
        blk_heatConductor.onDestroyed(this);
      },
    });
    exports.powHcond_steelHeatConductor = powHcond_steelHeatConductor;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_heatConductor.js loaded.");
});
