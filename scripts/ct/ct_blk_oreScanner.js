/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_oreScanner = require("reind/blk/blk_oreScanner");

    const db_effect = require("reind/db/db_effect");
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


  // Part: min-scan
    const minScan_pulseOreScanner = extend(GenericCrafter, "min-scan-pulse-ore-scanner", {
      setStats() {
        this.super$setStats();
        blk_oreScanner.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_oreScanner.drawPlace(this, x, y, rotation, valid);
      },
    });
    minScan_pulseOreScanner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, minScan_pulseOreScanner, {
      cd: Math.round(Mathf.random(180.0)),
      thr: 180,
      scanColor: Color.valueOf("cedef3"),
      updateTile() {
        this.super$updateTile();
        blk_oreScanner.updateTile(this);
      },
      draw() {
        this.super$draw();
        blk_oreScanner.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_oreScanner.drawSelect(this);
      },
    });
    exports.minScan_pulseOreScanner = minScan_pulseOreScanner;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_oreScanner.js loaded.");
});
