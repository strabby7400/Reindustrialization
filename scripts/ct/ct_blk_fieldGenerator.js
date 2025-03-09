/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fieldGenerator = require("reind/blk/blk_fieldGenerator");
    const blk_tidalGenerator = require("reind/blk/blk_tidalGenerator");

    const frag_facility = require("reind/frag/frag_facility");

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
        blk_fieldGenerator.setStats(this);
        frag_facility.setStats_ep(this);
      },
      // Specific
      setBars() {
        this.super$setBars();
        frag_facility.setBars_ep(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!blk_fieldGenerator.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_fieldGenerator.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_energizerGenerator.buildType = () => extend(ConsumeGenerator.ConsumeGeneratorBuild, powGen_energizerGenerator, {
      alertReg: mdl_content.getRegion(powGen_energizerGenerator, "-alert"),
      updateTile() {
        this.super$updateTile();
        blk_fieldGenerator.updateTile(this);
      },
      // Specific
      shouldConsume() {
        if(!this.super$shouldConsume()) return false;
        if(!frag_facility.isActive_ep(this)) return false;
        return true;
      },
      // Specific
      status() {
        if(!frag_facility.isActive_ep(this)) return BlockStatus.noInput;
        return this.super$status();
      },
      // Specific
      draw() {
        this.super$draw();
        blk_fieldGenerator.draw(this);
        frag_facility.draw_ep(this);
        mdl_draw.drawFadeAlert(
          mdl_game.poser_1b(this),
          this.alertReg,
          this.liquids.get(Vars.content.liquid("reind-gas-misc-steam")) / this.block.liquidCapacity,
        );
      },
      drawSelect() {
        this.super$drawSelect();
        blk_fieldGenerator.drawSelect(this);
      },
    });
    exports.powGen_energizerGenerator = powGen_energizerGenerator;
  // End


  // Part: pow-gen[tidal generator]
    const powGen_tidalGenerator = extend(ThermalGenerator, "pow-gen-tidal-generator", {
      setStats() {
        this.super$setStats();
        blk_tidalGenerator.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!blk_tidalGenerator.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_tidalGenerator.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_tidalGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_tidalGenerator, {
      updateTile() {
        this.super$updateTile();
        blk_tidalGenerator.updateTile(this);
      },
      draw() {
        this.super$draw();
        blk_tidalGenerator.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_tidalGenerator.drawSelect(this);
      },
    });
    exports.powGen_tidalGenerator = powGen_tidalGenerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fieldGenerator.js loaded.");
});
