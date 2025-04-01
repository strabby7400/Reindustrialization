/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_efficiencyPipe");

    const frag_faci = require("reind/frag/frag_faci");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-econd
    const powEcond_transmissionBox = extend(Conduit, "pow-econd-transmission-box", {
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
    });
    powEcond_transmissionBox.buildType = () => extend(Conduit.ConduitBuild, powEcond_transmissionBox, {
      // Specific
      rotatorReg: mdl_content._reg(powEcond_transmissionBox, "-rotator"),
      tprog: 0.0,
      // Specific
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
        this.tprog += frag_faci._tprogInc(this, "liq", this.liquids.current());
      },
      acceptLiquid(source, liquid) {
        if(!this.super$acceptLiquid(source, liquid)) return false;
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      // Specific
      draw() {
        mdl_draw.drawRotatorRegion(this, this.rotatorReg, this.tprog, 0.0, 9.0);
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.powEcond_transmissionBox = powEcond_transmissionBox;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_efficiencyPipe.js loaded.");
});
