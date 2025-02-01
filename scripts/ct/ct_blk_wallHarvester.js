/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_wallHarvester = require("reind/blk/blk_wallHarvester");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const minHarv_lumberjack = extend(WallCrafter, "min-harv-lumberjack", {
    setStats() {
      this.super$setStats();
      blk_wallHarvester.setStats(this);
    },
  });
  minHarv_lumberjack.buildType = () => extend(WallCrafter.WallCrafterBuild, minHarv_lumberjack, {
    updateTile() {
      this.super$updateTile();
      blk_wallHarvester.updateTile(this);
    },
  });
  exports.minHarv_lumberjack = minHarv_lumberjack;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_wallHarvester.js loaded.");
});
