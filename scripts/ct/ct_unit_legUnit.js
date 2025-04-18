/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/unit/unit_legUnit");

    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_ability = require("reind/db/db_ability");
    const db_bullet = require("reind/db/db_bullet");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: unit-core
    const unitCore_expeditionI = extend(UnitType, "unit-core-expedition-i", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        TEMPLATE.update(this, unit);
      },
      // Specific
      init(unit) {
        this.super$init();
        TEMPLATE.init(this);
        db_ability.__lightningCore(this);
        db_ability.__energizer(this);
      },
      killed(unit) {
        this.super$killed(unit);
        TEMPLATE.killed(this, unit);
      },
      // Specific
      draw(unit) {
        TEMPLATE.draw(this, unit);
        mdl_draw.drawUnitReload(unit, [0]);
      },
      drawShadow(unit) {
        TEMPLATE.drawShadow(this, unit);
      },
    });
    unitCore_expeditionI.constructor = () => extend(LegsUnit, {});
    exports.unitCore_expeditionI = unitCore_expeditionI;
  // End


  // Part: unit-inf
    const unitInf_suppressor = extend(UnitType, "unit-inf-suppressor", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        TEMPLATE.update(this, unit);
      },
      // Specific
      init(unit) {
        this.super$init();
        TEMPLATE.init(this);
        db_bullet.__grenade(this, 0, 280.0, 48.0, 0.3, 384.0, 4.0, "reind-bul-bullet5", Pal.techBlue, 0.7, 6.0, 2.0, 0.5, StatusEffects.blasted);
        db_ability.__aim(this);
        db_ability.__laserDefense(this, 500.0, 720.0, 80.0);
        db_ability.__shieldCore(this, 300.0, 6.0);
      },
      killed(unit) {
        this.super$killed(unit);
        TEMPLATE.killed(this, unit);
      },
      // Specific
      draw(unit) {
        TEMPLATE.draw(this, unit);
        mdl_draw.drawUnitReload(unit, [0]);
      },
      drawShadow(unit) {
        TEMPLATE.drawShadow(this, unit);
      },
    });
    unitInf_suppressor.constructor = () => extend(LegsUnit, {});
    exports.unitInf_suppressor = unitInf_suppressor;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_legUnit.js loaded.");
});
