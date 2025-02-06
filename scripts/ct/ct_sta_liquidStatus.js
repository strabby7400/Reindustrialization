/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const sta_liquidStatus = require("reind/sta/sta_liquidStatus");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: sta-liq
    const staLiq_slurrySlowed = extend(StatusEffect, "sta-liq-slurry-slowed", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    exports.staLiq_slurrySlowed = staLiq_slurrySlowed;


    const staLiq_brineCorrosion = extend(StatusEffect, "sta-liq-brine-corrosion", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    exports.staLiq_brineCorrosion = staLiq_brineCorrosion;


    const staLiq_seaWaterCorrosion = extend(StatusEffect, "sta-liq-sea-water-corrosion", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    exports.staLiq_seaWaterCorrosion = staLiq_seaWaterCorrosion;


    /* acid & base */


    const staLiq_acid = extend(StatusEffect, "sta-liq-acid", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_acid, function() {
      li_baseStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_acid = staLiq_acid;


    const staLiq_acidII = extend(StatusEffect, "sta-liq-acid-ii", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_acidII, function() {
      li_baseStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_acidII = staLiq_acidII;


    const staLiq_acidIII = extend(StatusEffect, "sta-liq-acid-iii", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_acidIII, function() {
      li_baseStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_acidIII = staLiq_acidIII;


    const staLiq_acidIV = extend(StatusEffect, "sta-liq-acid-iv", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_acidIV, function() {
      li_baseStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_acidIV = staLiq_acidIV;


    const staLiq_base = extend(StatusEffect, "sta-liq-base", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_base, function() {
      li_acidStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_base = staLiq_base;


    const staLiq_baseII = extend(StatusEffect, "sta-liq-base-ii", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_baseII, function() {
      li_acidStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_baseII = staLiq_baseII;


    const staLiq_baseIII = extend(StatusEffect, "sta-liq-base-iii", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_baseIII, function() {
      li_acidStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_baseIII = staLiq_baseIII;


    const staLiq_baseIV = extend(StatusEffect, "sta-liq-base-iv", {
      setStats() {
        this.super$setStats();
        sta_liquidStatus.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        sta_liquidStatus.update(this, unit, time);
      },
    });
    mdl_content.callInit(staLiq_baseIV, function() {
      li_acidStatus.each(sta => this.opposite(sta));
      this.affinity(StatusEffects.melting, (unit, result, time) => result.set(this, result.time = 600.0));
    });
    exports.staLiq_baseIV = staLiq_baseIV;


    const li_acidStatus = new Seq([
      staLiq_acid,
      staLiq_acidII,
      staLiq_acidIII,
      staLiq_acidIV,
    ]);


    const li_baseStatus = new Seq([
      staLiq_base,
      staLiq_baseII,
      staLiq_baseIII,
      staLiq_baseIV,
    ]);
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_sta_liquidStatus.js loaded.");
});
