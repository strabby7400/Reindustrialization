/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_ventGenerator");
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
        TEMPLATE.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_ventGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_ventGenerator, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      totalProgress() {
        return TEMPLATE.totalProgress(this);
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
    exports.powGen_ventGenerator = powGen_ventGenerator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_ventGenerator.js loaded.");
});
