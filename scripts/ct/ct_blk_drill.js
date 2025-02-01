/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_drill = require("reind/blk/blk_drill");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: min-dril
    const minDril_mechanicalDrill = extend(Drill, "min-dril-mechanical-drill", {
      setStats() {
        this.super$setStats();
        blk_drill.setStats(this);
      },
      canMine(tile) {
        return this.super$canMine(tile) && blk_drill.canMine(this, tile);
      },
    });
    minDril_mechanicalDrill.buildType = () => extend(Drill.DrillBuild, minDril_mechanicalDrill, {
      updateTile() {
        this.super$updateTile();
        blk_drill.updateTile(this);
      },
    });
    exports.minDril_mechanicalDrill = minDril_mechanicalDrill;


    const minDril_pneumaticDrill = extend(Drill, "min-dril-pneumatic-drill", {
      setStats() {
        this.super$setStats();
        blk_drill.setStats(this);
      },
      canMine(tile) {
        return this.super$canMine(tile) && blk_drill.canMine(this, tile);
      },
    });
    minDril_pneumaticDrill.buildType = () => extend(Drill.DrillBuild, minDril_pneumaticDrill, {
      updateTile() {
        this.super$updateTile();
        blk_drill.updateTile(this);
      },
    });
    exports.minDril_pneumaticDrill = minDril_pneumaticDrill;


    /* Specific */


    const minDril_sandExcavator = extend(Drill, "min-dril-sand-excavator", {
      setStats() {
        this.super$setStats();
        blk_drill.setStats(this);
      },
      // Specific
      canMine(tile) {
        return this.super$canMine(tile) && (tile.drop() == Vars.content.item("reind-item-ore-sand"));
      },
    });
    minDril_sandExcavator.buildType = () => extend(Drill.DrillBuild, minDril_sandExcavator, {
      updateTile() {
        this.super$updateTile();
        blk_drill.updateTile(this);
      },
    });
    exports.minDril_sandExcavator = minDril_sandExcavator;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_drill.js loaded.");
});
