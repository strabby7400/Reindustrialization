/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_rangeWallHarvester");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  const minHarv_mycelialHarvester = extend(AttributeCrafter, "min-harv-mycelial-harvester", {
    setStats() {
      this.super$setStats();
      TEMPLATE.setStats(this);
    },
    sumAttribute(attr, x, y) {
      return TEMPLATE.sumAttribute(this, attr, x, y);
    },
    drawPlace(x, y, rotation, valid) {
      this.super$drawPlace(x, y, rotation, valid);
      TEMPLATE.drawPlace(this, x, y, rotation, valid);
    },
  });
  minHarv_mycelialHarvester.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, minHarv_mycelialHarvester, {
    needUpdate: true,
    r: 5, tiles: [],
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
  exports.minHarv_mycelialHarvester = minHarv_mycelialHarvester;




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_rangeWallHarvester.js loaded.");
});
