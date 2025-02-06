/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_gasCylinder = require("reind/blk/blk_gasCylinder");
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
        blk_gasCylinder.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_gasCylinder.drawPlace(this, x, y, rotation, valid);
      },
    });
    bliqStor_gasCylinder.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_gasCylinder, {
      updateTile() {
        this.super$updateTile();
        blk_gasCylinder.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_gasCylinder.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      draw() {
        this.super$draw();
        blk_gasCylinder.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_gasCylinder.drawSelect(this);
      },
      onDestroyed() {
        this.super$onDestroyed();
        blk_gasCylinder.onDestroyed(this);
      },
    });
    exports.bliqStor_gasCylinder = bliqStor_gasCylinder;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_gasCylinder.js loaded.");
});
