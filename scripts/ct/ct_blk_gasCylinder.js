/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_gasCylinder");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-stor
    const bliqStor_gasCylinder = extend(LiquidRouter, "bliq-stor-gas-cylinder", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    bliqStor_gasCylinder.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_gasCylinder, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
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
        this.super$onDestroyed();
        TEMPLATE.onDestroyed(this);
      },
    });
    exports.bliqStor_gasCylinder = bliqStor_gasCylinder;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_gasCylinder.js loaded.");
});
