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
        if(!this.super$canMine(tile)) return false;
        if(!blk_drill.canMine(this, tile)) return false;
        return true;
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
        if(!this.super$canMine(tile)) return false;
        if(!blk_drill.canMine(this, tile)) return false;
        return true;
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
        if(!this.super$canMine(tile)) return false;
        if(
          tile.drop() != Vars.content.item("reind-item-ore-sand") &&
          tile.drop() != Vars.content.item("reind-item-ore-sand-basaltic")
        ) return false;
        return true;
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
