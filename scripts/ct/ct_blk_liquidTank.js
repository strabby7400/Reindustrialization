/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_liquidTank");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-stor
    const bliqStor_liquidCell = extend(LiquidRouter, "bliq-stor-liquid-cell", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqStor_liquidCell.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_liquidCell, {
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
    });
    exports.bliqStor_liquidCell = bliqStor_liquidCell;


    const bliqStor_liquidTank = extend(LiquidRouter, "bliq-stor-liquid-tank", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqStor_liquidTank.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_liquidTank, {
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
    });
    exports.bliqStor_liquidTank = bliqStor_liquidTank;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_liquidTank.js loaded.");
});
