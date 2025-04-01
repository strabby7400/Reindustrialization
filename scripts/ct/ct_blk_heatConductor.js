/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_heatConductor");
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
        TEMPLATE.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
    });
    powHcond_copperHeatConductor.buildType = () => extend(Conduit.ConduitBuild, powHcond_copperHeatConductor, {
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
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
      onDestroyed() {
        TEMPLATE.onDestroyed(this);
      },
    });
    exports.powHcond_copperHeatConductor = powHcond_copperHeatConductor;


    const powHcond_steelHeatConductor = extend(Conduit, "pow-hcond-steel-heat-conductor", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
    });
    powHcond_steelHeatConductor.buildType = () => extend(Conduit.ConduitBuild, powHcond_steelHeatConductor, {
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
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
      onDestroyed() {
        TEMPLATE.onDestroyed(this);
      },
    });
    exports.powHcond_steelHeatConductor = powHcond_steelHeatConductor;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_heatConductor.js loaded.");
});
