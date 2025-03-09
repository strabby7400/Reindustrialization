/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_impactDrill = require("reind/blk/blk_impactDrill");

    const frag_facility = require("reind/frag/frag_facility");
  // End


  // Part: Accessor
    const accB_down = function(b, mode, val) {
      if(mode == "r") return b.down;
      if(mode == "w") b.down = val;
    };
    exports.accB_down = accB_down;


    const accB_b_sc = function(b, mode, val) {
      if(val === undefined) val = 0;

      if(mode == "r") return b.b_sc;
      if(mode == "w") b.b_sc = val;
    };
    exports.accB_b_sc = accB_b_sc;
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
        if(!this.super$canMine(tile)) return false;
        if(!blk_impactDrill.canMine(this, tile)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_impactDrill.drawPlace(this, x, y, rotation, valid);
      },
    });
    minDril_basicImpactDrill.buildType = () => extend(BurstDrill.BurstDrillBuild, minDril_basicImpactDrill, {
      down: true,
      b_sc: null,
      updateTile() {
        this.super$updateTile();
        blk_impactDrill.updateTile(this);
      },
      shouldConsume() {
        if(!this.super$shouldConsume()) return false;
        if(this.down) return false;
        return true;
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


    const minDril_titanImpactDrill = extend(BurstDrill, "min-dril-titan-impact-drill", {
      // Specific
      setStats() {
        this.super$setStats();
        blk_impactDrill.setStats(this);
        frag_facility.setStats_ep(this);
      },
      // Specific
      setBars() {
        this.super$setBars();
        frag_facility.setBars_ep(this);
      },
      canMine(tile) {
        if(!this.super$canMine(tile)) return false;
        if(!blk_impactDrill.canMine(this, tile)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_impactDrill.drawPlace(this, x, y, rotation, valid);
      },
    });
    minDril_titanImpactDrill.buildType = () => extend(BurstDrill.BurstDrillBuild, minDril_titanImpactDrill, {
      down: true,
      b_sc: null,
      updateTile() {
        this.super$updateTile();
        blk_impactDrill.updateTile(this);
      },
      // Specific
      shouldConsume() {
        if(!this.super$shouldConsume()) return false;
        if(this.down) return false;
        if(!frag_facility.isActive_ep(this)) return false;
        return true;
      },
      // Specific
      status() {
        if(this.down) return BlockStatus.noInput;
        if(!frag_facility.isActive_ep(this)) return BlockStatus.noInput;
        return this.super$status();
      },
      // Specific
      draw() {
        this.super$draw();
        frag_facility.draw_ep(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_impactDrill.drawSelect(this);
      },
    });
    exports.minDril_titanImpactDrill = minDril_titanImpactDrill;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_impactDrill.js loaded.");
});
