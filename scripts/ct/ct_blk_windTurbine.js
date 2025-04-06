/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_windTurbine");
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
        TEMPLATE.setStats(this);
      },
      sumAttribute(attr, x, y) {
        return TEMPLATE.sumAttribute(this, attr, x, y);
      },
      canPlaceOn(tile, team, rotation) {
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    powGen_windTurbine.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_windTurbine, {
      tprog: 0.0,
      timerEffc: new Interval(1), tmpSum: 0.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      totalProgress() {
        return TEMPLATE.totalProgress(this);
      },
      drawSelect() {
        TEMPLATE.drawSelect(this);
      },
    });
    exports.powGen_windTurbine = powGen_windTurbine;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_windTurbine.js loaded.");
});
