/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/unit/unit_mechUnit");

    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_ability = require("reind/db/db_ability");
    const db_bullet = require("reind/db/db_bullet");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: unit-inf
    const unitInf_tsen = extend(UnitType, "unit-inf-tsen", {
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
        db_bullet.__basic(this, [0, 1], 48.0, 0.3, 168.0, 10.0, "reind-bul-bullet1", Pal.techBlue, 1.0, 0.0);
        db_ability.__legion(this, 5, 40.0);
        db_ability.__energizer(this);
      },
      killed(unit) {
        this.super$killed(unit);
        TEMPLATE.killed(this, unit);
      },
      draw(unit) {
        TEMPLATE.draw(this, unit);
      },
      drawShadow(unit) {
        TEMPLATE.drawShadow(this, unit);
      },
    });
    unitInf_tsen.constructor = () => extend(MechUnit, {});
    exports.unitInf_tsen = unitInf_tsen;


    const unitInf_74ka = extend(UnitType, "unit-inf-74ka", {
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
        db_bullet.__basic(this, 0, 42.0, 0.3, 264.0, 10.0, "reind-bul-bullet2", Pal.techBlue, 1.5, 0.0, 3, false, 0.5, 0.0);
        db_bullet.__grenade(this, 1, 400.0, 40.0, 0.3, 264.0, 4.0, "reind-bul-bullet5", Pal.techBlue, 1.0, 8.0, 2.0, 2.0, StatusEffects.blasted);
        db_ability.__shootDust(this, 1);
        db_ability.__energizedRegeneration(this, 30.0);
      },
      killed(unit) {
        this.super$killed(unit);
        TEMPLATE.killed(this, unit);
      },
      // Specific
      draw(unit) {
        TEMPLATE.draw(this, unit);
        mdl_draw.drawUnitReload(unit, [1]);
      },
      drawShadow(unit) {
        TEMPLATE.drawShadow(this, unit);
      },
    });
    unitInf_74ka.constructor = () => extend(MechUnit, {});
    exports.unitInf_74ka = unitInf_74ka;


    const unitInf_paw = extend(UnitType, "unit-inf-paw", {
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
        db_bullet.__sniper(
          this, 0, 422.0, 0.3, 496.0, 20.0, "reind-bul-bullet4", Pal.techBlue, 1.0, 8.0, 7, false, 3.0, 1.5,
          3, 110.0, 80.0, 10.0, 0.2, "reind-bul-bullet5", 2, false,
        );
        db_ability.__shootDust(this, 0);
        db_ability.__deterrence(this, 800.0, 192.0);
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
    unitInf_paw.constructor = () => extend(MechUnit, {});
    exports.unitInf_paw = unitInf_paw;


    const unitInf_psas = extend(UnitType, "unit-inf-psas", {
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
        db_bullet.__basic(this, 0, 28.0, 0.3, 160.0, 10.0, "reind-bul-bullet5", Pal.techBlue, 0.5, 0.0, 2, false, 0.0, 0.04, true);
        db_bullet.__torch(this, 1, 640.0, 0.3, 60.0, null, null, 1.0, 0.5, 2, true, 1.0, 0.0, null);
        db_ability.__energizedChainLightning(this, 0.03333333, 240.0, 40.0, 70.0, 7, 0.75, 0.3, Pal.techBlue);
      },
      killed(unit) {
        this.super$killed(unit);
        TEMPLATE.killed(this, unit);
      },
      draw(unit) {
        TEMPLATE.draw(this, unit);
      },
      drawShadow(unit) {
        TEMPLATE.drawShadow(this, unit);
      },
    });
    unitInf_psas.constructor = () => extend(MechUnit, {});
    exports.unitInf_psas = unitInf_psas;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_mechUnit.js loaded.");
});
