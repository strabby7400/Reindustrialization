/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_efficiency = require("reind/rs/rs_efficiency");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: effc-cond
    const effcCond_cooling = extend(Liquid, "effc-cond-cooling", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcCond_cooling = effcCond_cooling;


    const effcCond_heat = extend(Liquid, "effc-cond-heat", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcCond_heat = effcCond_heat;


    const effcCond_pressure = extend(Liquid, "effc-cond-pressure", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcCond_pressure = effcCond_pressure;


    const effcCond_steamEnergy = extend(Liquid, "effc-cond-steam-energy", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcCond_steamEnergy = effcCond_steamEnergy;


    const effcCond_torque = extend(Liquid, "effc-cond-torque", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcCond_torque = effcCond_torque;


    const effcCond_vacuum = extend(Liquid, "effc-cond-vacuum", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcCond_vacuum = effcCond_vacuum;
  // End


  // Part: effc-effc[specific]
    const effcEffc_core = extend(Liquid, "effc-effc-core", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_core = effcEffc_core;
  // End


  // Part: effc-effc[auxiliary]
    const effcEffc_dustRecycling = extend(Liquid, "effc-effc-dust-recycling", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_dustRecycling = effcEffc_dustRecycling;


    const effcEffc_materialLifting = extend(Liquid, "effc-effc-material-lifting", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_materialLifting = effcEffc_materialLifting;


    const effcEffc_melter = extend(Liquid, "effc-effc-melter", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_melter = effcEffc_melter;


    const effcEffc_pump = extend(Liquid, "effc-effc-pump", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_pump = effcEffc_pump;


    const effcEffc_smokeExhaust = extend(Liquid, "effc-effc-smoke-exhaust", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_smokeExhaust = effcEffc_smokeExhaust;


    const effcEffc_temperatureControl = extend(Liquid, "effc-effc-temperature-control", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_temperatureControl = effcEffc_temperatureControl;


    const effcEffc_vibrationScreen = extend(Liquid, "effc-effc-vibration-screen", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_vibrationScreen = effcEffc_vibrationScreen;
  // End


  // Part: effc-effc[consumption]
    const effcEffc_ballImpact = extend(Liquid, "effc-effc-ball-impact", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_ballImpact = effcEffc_ballImpact;


    const effcEffc_bfFuel = extend(Liquid, "effc-effc-bf-fuel", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_bfFuel = effcEffc_bfFuel;


    const effcEffc_rkFuel = extend(Liquid, "effc-effc-rk-fuel", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_rkFuel = effcEffc_rkFuel;


    const effcEffc_gasFilter = extend(Liquid, "effc-effc-gas-filter", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_gasFilter = effcEffc_gasFilter;


    const effcEffc_packedTower = extend(Liquid, "effc-effc-packed-tower", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcEffc_packedTower = effcEffc_packedTower;
  // End


  // Part: effc-link
    const effcLink_charcoalRodMaker_r1 = extend(Liquid, "effc-link-charcoal-rod-maker-r1", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcLink_charcoalRodMaker_r1 = effcLink_charcoalRodMaker_r1;


    const effcLink_mineralJig_r1 = extend(Liquid, "effc-link-mineral-jig-r1", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.effcLink_mineralJig_r1 = effcLink_mineralJig_r1;
  // End


  // Part: ileffc-effc[specific]
    const ileffcEffc_ids = extend(Liquid, "ileffc-effc-ids", {
      setStats() {
        this.super$setStats();
        rs_efficiency.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_efficiency.update(this, puddle);
      },
    });
    exports.ileffcEffc_ids = ileffcEffc_ids;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_rs_efficiency.js loaded.");
});
