/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_radar = require("reind/blk/blk_radar");
  // End


  // Part: Accessor
    const accB_cd = function(b, mode, val) {
      if(mode == "r") return b.cd;
      if(mode == "w") b.cd = val;
    };
    exports.accB_cd = accB_cd;


    const accB_thr = function(b, mode, val) {
      if(mode == "r") return b.thr;
      if(mode == "w") b.thr = val;
    };
    exports.accB_thr = accB_thr;


    const accB_scanColor = function(b, mode, val) {
      if(mode == "r") return b.scanColor;
      if(mode == "w") b.scanColor = val;
    };
    exports.accB_scanColor = accB_scanColor;
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
        blk_radar.setStats(this);
      },
    });
    defProj_basicRadar.buildType = () => extend(Radar.RadarBuild, defProj_basicRadar, {
      cd: Math.round(Mathf.random(480.0)),
      thr: 480.0,
      scanColor: Color.valueOf("cedef3"),
      updateTile() {
        this.super$updateTile();
        blk_radar.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_radar.drawSelect(this);
      },
    });
    exports.defProj_basicRadar = defProj_basicRadar;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_radar.js loaded.");
});
