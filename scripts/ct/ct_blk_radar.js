/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_radar");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: def-proj
    const defProj_basicRadar = extend(Radar, "def-proj-basic-radar", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    defProj_basicRadar.buildType = () => extend(Radar.RadarBuild, defProj_basicRadar, {
      needCheck: true,
      scanColor: Color.white, craftEff: null, applyEff: null,
      prog: Math.round(Mathf.random(480.0)), thr: 480.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.defProj_basicRadar = defProj_basicRadar;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_radar.js loaded.");
});
