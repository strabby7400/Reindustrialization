/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_wallHarvester");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const minHarv_lumberjack = extend(WallCrafter, "min-harv-lumberjack", {
    setStats() {
      this.super$setStats();
      TEMPLATE.setStats(this);
    },
    drawPlace(x, y, rotation, valid) {
      this.super$drawPlace(x, y, rotation, valid);
      TEMPLATE.drawPlace(this, x, y, rotation, valid);
    },
  });
  minHarv_lumberjack.buildType = () => extend(WallCrafter.WallCrafterBuild, minHarv_lumberjack, {
    updateTile() {
      this.super$updateTile();
      TEMPLATE.updateTile(this);
    },
  });
  exports.minHarv_lumberjack = minHarv_lumberjack;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_wallHarvester.js loaded.");
});
