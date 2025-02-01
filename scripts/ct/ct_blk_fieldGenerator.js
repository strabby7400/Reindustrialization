/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fieldGenerator = require("reind/blk/blk_fieldGenerator");
    const blk_tidalGenerator = require("reind/blk/blk_tidalGenerator");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


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
  Log.info("REIND:ct_blk_fieldGenerator.js loaded.");
});
