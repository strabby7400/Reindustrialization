/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_incinerator = require("reind/blk/blk_incinerator");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
  // End


  // Part: Accessor
    const accB_frac = function(b, mode, val) {
      if(val === undefined) val = 0;

      if(mode == "r") return b.frac;
      if(mode == "w") b.frac = val;
    };
    exports.accB_frac = accB_frac;
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
        blk_incinerator.setStats(this);
      },
    });
    disAux_itemIncinerator.buildType = () => extend(ItemIncinerator.ItemIncineratorBuild, disAux_itemIncinerator, {
      glowReg: mdl_content.getContentRegion(disAux_itemIncinerator, "-glow"),
      top3Reg: mdl_content.getContentRegion(disAux_itemIncinerator, "-top3"),
      frac: 0.0,
      updateTile() {
        this.super$updateTile();
        blk_incinerator.updateTile(this);
      },
      // No Inheritance
      draw() {
        this.super$draw();
        mdl_draw.drawFlameRegion_1b(this, this.top3Reg, this.frac);
        mdl_draw.drawGenericHeatRegion(this, this.power.status, this.glowReg);
      },
      // No Inheritance
      drawLight() {
        this.super$drawLight();
        mdl_draw.drawLight_1b(this, this.frac);
      },
    });
    exports.disAux_itemIncinerator = disAux_itemIncinerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_incinerator.js loaded.");
});
