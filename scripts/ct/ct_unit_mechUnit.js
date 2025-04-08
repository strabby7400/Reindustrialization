/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/unit/unit_mechUnit");

    const db_ability = require("reind/db/db_ability");
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
        db_ability.__energizedRegeneration(this, 30.0);
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
        db_ability.__shootDust(this, 0);
        db_ability.__deterrence(this, 800.0, 192.0);
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
        db_ability.__energizedChainLightning(this, 0.03333333, 240.0, 40.0, 60.0, 7, 0.75, 0.3, Pal.techBlue);
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
