/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_ventGenerator = require("reind/blk/blk_ventGenerator");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-gen
    const powGen_ventGenerator = extend(ThermalGenerator, "pow-gen-vent-generator", {
      setStats() {
        this.super$setStats();
        blk_ventGenerator.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_ventGenerator.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_ventGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_ventGenerator, {
      updateTile() {
        this.super$updateTile();
        blk_ventGenerator.updateTile(this);
      },
      draw() {
        this.super$draw();
        blk_ventGenerator.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_ventGenerator.drawSelect(this);
      },
    });
    exports.powGen_ventGenerator = powGen_ventGenerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_ventGenerator.js loaded.");
});
