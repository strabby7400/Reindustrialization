/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_impactDrill");

    const frag_faci = require("reind/frag/frag_faci");
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
        TEMPLATE.setStats(this);
      },
      canMine(tile) {
        if(!this.super$canMine(tile)) return false;
        if(!TEMPLATE.canMine(this, tile)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    minDril_basicImpactDrill.buildType = () => extend(BurstDrill.BurstDrillBuild, minDril_basicImpactDrill, {
      needCheck: true,
      impactRad: 40.0,
      down: true, b_sc: null,
      timerEffc: new Interval(1),
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
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
        TEMPLATE.drawSelect(this);
      },
    });
    exports.minDril_basicImpactDrill = minDril_basicImpactDrill;


    const minDril_titanImpactDrill = extend(BurstDrill, "min-dril-titan-impact-drill", {
      // Specific
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
        frag_faci.setStats_ep(this);
      },
      // Specific
      setBars() {
        this.super$setBars();
        frag_faci.setBars_ep(this);
      },
      canMine(tile) {
        if(!this.super$canMine(tile)) return false;
        if(!TEMPLATE.canMine(this, tile)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    minDril_titanImpactDrill.buildType = () => extend(BurstDrill.BurstDrillBuild, minDril_titanImpactDrill, {
      needCheck: true,
      impactRad: 40.0,
      down: true, b_sc: null,
      timerEffc: new Interval(1),
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      // Specific
      shouldConsume() {
        if(!this.super$shouldConsume()) return false;
        if(this.down) return false;
        if(!frag_faci.isActive_ep(this)) return false;
        return true;
      },
      // Specific
      status() {
        if(this.down) return BlockStatus.noInput;
        if(!frag_faci.isActive_ep(this)) return BlockStatus.noInput;
        return this.super$status();
      },
      // Specific
      draw() {
        this.super$draw();
        frag_faci.draw_ep(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.minDril_titanImpactDrill = minDril_titanImpactDrill;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_impactDrill.js loaded.");
});
