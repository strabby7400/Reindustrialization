/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_drill = require("reind/blk/blk_drill");

    const frag_facility = require("reind/frag/frag_facility");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
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


  // Part: ilmin-dril
    const ilminDril_idsRemoteDrill = extend(Drill, "ilmin-dril-ids-remote-drill", {
      // Specific
      setStats() {
        this.super$setStats();
        blk_drill.setStats(this);
        frag_facility.setStats_coreDump(this, 40.0 * Vars.tilesize);
      },
      canMine(tile) {
        if(!this.super$canMine(tile)) return false;
        if(!blk_drill.canMine(this, tile)) return false;
        return true;
      },
      // Specific
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        frag_facility.drawPlace_coreDump(this, x, y, rotation, valid, 40.0 * Vars.tilesize);
      },
    });
    ilminDril_idsRemoteDrill.buildType = () => extend(Drill.DrillBuild, ilminDril_idsRemoteDrill, {
      glow3Reg: mdl_content.getRegion(ilminDril_idsRemoteDrill, "-glow3"),
      updateTile() {
        this.super$updateTile();
        blk_drill.updateTile(this);
      },
      // Specific
      dump(todump) {
        frag_facility.dump_coreDump(this, todump, 40.0 * Vars.tilesize);
      },
      // Specific
      draw() {
        this.super$draw();
        mdl_draw.drawGlowRegion(mdl_game._pos(1, this), this.glow3Reg, this.warmup);
        frag_facility.draw_coreDump(this, 40.0 * Vars.tilesize);
      },
      // Specific
      drawSelect() {
        this.super$drawSelect();
        frag_facility.drawSelect_coreDump(this, 40.0 * Vars.tilesize);
      },
    });
    exports.ilminDril_idsRemoteDrill = ilminDril_idsRemoteDrill;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_drill.js loaded.");
});
