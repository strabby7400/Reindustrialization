/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_impactDrill = require("reind/blk/blk_impactDrill");
  // End


  // Part: Accessor
    const accB_down = function(b, mode, val) {
      if(val === undefined) val = 0;

      if(mode == "r") return b.down;
      if(mode == "w") b.down = val;
    };
    exports.accB_down = accB_down;
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: min-dril
    const minDril_basicImpactDrill = extend(BurstDrill, "min-dril-basic-impact-drill", {
      setStats() {
        this.super$setStats();
        blk_impactDrill.setStats(this);
      },
      canMine(tile) {
        return this.super$canMine(tile) && blk_impactDrill.canMine(this, tile);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_impactDrill.drawPlace(this, x, y, rotation, valid);
      },
    });
    minDril_basicImpactDrill.buildType = () => extend(BurstDrill.BurstDrillBuild, minDril_basicImpactDrill, {
      down: false,
      updateTile() {
        this.super$updateTile();
        blk_impactDrill.updateTile(this);
      },
      status() {
        if(this.down) return BlockStatus.noInput;

        return this.super$status();
      },
      drawSelect() {
        this.super$drawSelect();
        blk_impactDrill.drawSelect(this);
      },
    });
    exports.minDril_basicImpactDrill = minDril_basicImpactDrill;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_impactDrill.js loaded.");
});
