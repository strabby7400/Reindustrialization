/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_liquidTank = require("reind/blk/blk_liquidTank");
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
        blk_liquidTank.setStats(this);
      },
    });
    bliqStor_liquidCell.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_liquidCell, {
      updateTile() {
        this.super$updateTile();
        blk_liquidTank.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_liquidTank.acceptLiquid(this, source, liquid)) return false;

        return true;
      },
      draw() {
        this.super$draw();
        blk_liquidTank.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_liquidTank.drawSelect(this);
      },
    });
    exports.bliqStor_liquidCell = bliqStor_liquidCell;


    const bliqStor_liquidTank = extend(LiquidRouter, "bliq-stor-liquid-tank", {
      setStats() {
        this.super$setStats();
        blk_liquidTank.setStats(this);
      },
    });
    bliqStor_liquidTank.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_liquidTank, {
      updateTile() {
        this.super$updateTile();
        blk_liquidTank.updateTile(this);
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!blk_liquidTank.acceptLiquid(this, source, liquid)) return false;

        return true;
      },
      draw() {
        this.super$draw();
        blk_liquidTank.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_liquidTank.drawSelect(this);
      },
    });
    exports.bliqStor_liquidTank = bliqStor_liquidTank;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_liquidTank.js loaded.");
});
