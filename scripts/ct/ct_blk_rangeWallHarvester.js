/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_rangeWallHarvester = require("reind/blk/blk_rangeWallHarvester");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const minHarv_mycelialHarvester = extend(AttributeCrafter, "min-harv-mycelial-harvester", {
    setStats() {
      this.super$setStats();
      blk_rangeWallHarvester.setStats(this);
    },
    sumAttribute(attr, x, y) {
      return blk_rangeWallHarvester.sumAttribute(this, attr, x, y);
    },
    drawPlace(x, y, rotation, valid) {
      this.super$drawPlace(x, y, rotation, valid);
      blk_rangeWallHarvester.drawPlace(this, x, y, rotation, valid);
    },
  });
  minHarv_mycelialHarvester.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, minHarv_mycelialHarvester, {
    updateTile() {
      this.super$updateTile();
      blk_rangeWallHarvester.updateTile(this);
    },
    draw() {
      this.super$draw();
      blk_rangeWallHarvester.draw(this);
    },
    drawSelect() {
      this.super$drawSelect();
      blk_rangeWallHarvester.drawSelect(this);
    },
  });
  exports.minHarv_mycelialHarvester = minHarv_mycelialHarvester;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_rangeWallHarvester.js loaded.");
});
