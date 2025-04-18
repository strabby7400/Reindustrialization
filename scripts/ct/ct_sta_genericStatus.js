/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/sta/sta_genericStatus");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_status = require("reind/frag/frag_status");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: sta-spec
    const staSpec_attackSuppression = extend(StatusEffect, "sta-spec-attack-suppression", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_attackSuppression = staSpec_attackSuppression;


    const staSpec_coreOverdrive = extend(StatusEffect, "sta-spec-core-overdrive", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_coreOverdrive = staSpec_coreOverdrive;


    const staSpec_damaged = extend(StatusEffect, "sta-spec-damaged", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_damaged = staSpec_damaged;


    const staSpec_severelyDamaged = extend(StatusEffect, "sta-spec-severely-damaged", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_severelyDamaged = staSpec_severelyDamaged;


    const staSpec_earsesMark = extend(StatusEffect, "sta-spec-earses-mark", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_earsesMark = staSpec_earsesMark;


    const staSpec_explosionCountdown = extend(StatusEffect, "sta-spec-explosion-countdown", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      // Specific
      update(unit, time) {
        frag_status.update_countdown(this, unit, time, function() {
          frag_attack.atk_explosion(unit, 40.0, Math.min(unit.maxHealth * 0.4, 400.0), 6.0);
        });
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
      // Specific
      draw(unit) {
        this.super$draw(unit);
        mdl_draw.drawFadeStatus(unit, Core.atlas.find("reind-sta-explosion-countdown"));
      },
    });
    exports.staSpec_explosionCountdown = staSpec_explosionCountdown;


    const staSpec_hiddenWell = extend(StatusEffect, "sta-spec-hidden-well", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_hiddenWell = staSpec_hiddenWell;


    const staSpec_morale = extend(StatusEffect, "sta-spec-morale", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_morale = staSpec_morale;


    const staSpec_overProtected = extend(StatusEffect, "sta-spec-over-protected", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_overProtected = staSpec_overProtected;


    const staSpec_quickSand = extend(StatusEffect, "sta-spec-quicksand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_quickSand = staSpec_quickSand;


    const staSpec_radarDetection = extend(StatusEffect, "sta-spec-radar-detection", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staSpec_radarDetection = staSpec_radarDetection;


    const staSpec_stunned = extend(StatusEffect, "sta-spec-stunned", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
      // Specific
      draw(unit) {
        this.super$draw(unit);
        mdl_draw.drawFadeStatus(unit, Core.atlas.find("reind-sta-stunned"));
      },
    });
    exports.staSpec_stunned = staSpec_stunned;


    const staSpec_terrorized = extend(StatusEffect, "sta-spec-terrorized", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
      // Specific
      draw(unit) {
        this.super$draw(unit);
        mdl_draw.drawFadeStatus(unit, Core.atlas.find("reind-sta-terrorized"));
      },
    });
    exports.staSpec_terrorized = staSpec_terrorized;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_sta_genericStatus.js loaded.");
});
