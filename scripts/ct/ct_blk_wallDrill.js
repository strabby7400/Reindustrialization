/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_wallDrill");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: min-dril
    const minDril_pneumaticWallDrill = extend(BeamDrill, "min-dril-pneumatic-wall-drill", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    minDril_pneumaticWallDrill.buildType = () => extend(BeamDrill.BeamDrillBuild, minDril_pneumaticWallDrill, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    exports.minDril_pneumaticWallDrill = minDril_pneumaticWallDrill;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_wallDrill.js loaded.");
});
