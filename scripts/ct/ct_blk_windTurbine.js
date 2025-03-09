/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_windTurbine = require("reind/blk/blk_windTurbine");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-gen
    const powGen_windTurbine = extend(ThermalGenerator, "pow-gen-wind-turbine", {
      setStats() {
        this.super$setStats();
        blk_windTurbine.setStats(this);
      },
      sumAttribute(attr, x, y) {
        return blk_windTurbine.sumAttribute(this, attr, x, y);
      },
      canPlaceOn(tile, team, rotation) {
        return blk_windTurbine.canPlaceOn(this, tile, team, rotation);
      },
      drawPlace(x, y, rotation, valid) {
        blk_windTurbine.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_windTurbine.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_windTurbine, {
      updateTile() {
        this.super$updateTile();
        blk_windTurbine.updateTile(this);
      },
      drawSelect() {
        blk_windTurbine.drawSelect(this);
      },
    });
    exports.powGen_windTurbine = powGen_windTurbine;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_windTurbine.js loaded.");
});
