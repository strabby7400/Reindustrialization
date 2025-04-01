/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_incinerator");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: dis-aux
    const disAux_itemIncinerator = extend(ItemIncinerator, "dis-aux-item-incinerator", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    disAux_itemIncinerator.buildType = () => extend(ItemIncinerator.ItemIncineratorBuild, disAux_itemIncinerator, {
      glowReg: null, top3Reg: null,
      needCheck: true,
      frac: 0.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawLight() {
        this.super$drawLight();
        TEMPLATE.drawLight(this);
      },
    });
    exports.disAux_itemIncinerator = disAux_itemIncinerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_incinerator.js loaded.");
});
