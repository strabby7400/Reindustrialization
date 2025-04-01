/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fieldGenerator");
    const TEMPLATE_A = require("reind/blk/blk_tidalGenerator");

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


  // Part: pow-gen
    const powGen_energizerGenerator = extend(ConsumeGenerator, "pow-gen-energizer-generator", {
      // Specific
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
        frag_faci.setStats_ep(this);
      },
      // Specific
      setBars() {
        this.super$setBars();
        frag_faci.setBars_ep(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_energizerGenerator.buildType = () => extend(ConsumeGenerator.ConsumeGeneratorBuild, powGen_energizerGenerator, {
      alertReg: mdl_content._reg(powGen_energizerGenerator, "-alert"),
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      // Specific
      shouldConsume() {
        if(!this.super$shouldConsume()) return false;
        if(!frag_faci.isActive_ep(this)) return false;
        return true;
      },
      // Specific
      status() {
        if(!frag_faci.isActive_ep(this)) return BlockStatus.noInput;
        return this.super$status();
      },
      totalProgress() {
        return TEMPLATE.totalProgress(this);
      },
      // Specific
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
        frag_faci.draw_ep(this);
        mdl_draw.drawFadeAlert(
          this,
          this.alertReg,
          this.liquids.get(Vars.content.liquid("reind-gas-misc-steam")) / this.block.liquidCapacity,
        );
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.powGen_energizerGenerator = powGen_energizerGenerator;
  // End


  // Part: pow-gen[tidal generator]
    const powGen_tidalGenerator = extend(ThermalGenerator, "pow-gen-tidal-generator", {
      setStats() {
        this.super$setStats();
        TEMPLATE_A.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE_A.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE_A.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_tidalGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_tidalGenerator, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE_A.updateTile(this);
      },
      totalProgress() {
        return TEMPLATE.totalProgress(this);
      },
      draw() {
        this.super$draw();
        TEMPLATE_A.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE_A.drawSelect(this);
      },
    });
    exports.powGen_tidalGenerator = powGen_tidalGenerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fieldGenerator.js loaded.");
});
