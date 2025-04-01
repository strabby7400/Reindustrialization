/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_oreScanner");
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
        TEMPLATE.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    minScan_pulseOreScanner.buildType = () => extend(GenericCrafter.GenericCrafterBuild, minScan_pulseOreScanner, {
      needCheck: true,
      r: 5, scanColor: Color.white,
      prog: Math.round(Mathf.random(180.0)), thr: 180,
      a: 0.0, tiles: new Seq(),
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
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
    exports.minScan_pulseOreScanner = minScan_pulseOreScanner;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_oreScanner.js loaded.");
});
