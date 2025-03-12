/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_mechUnit = require("reind/unit/unit_mechUnit");

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
        unit_mechUnit.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        unit_mechUnit.update(this, unit);
      },
      killed(unit) {
        this.super$killed(unit);
        unit_mechUnit.killed(this, unit);
      },
      draw(unit) {
        unit_mechUnit.draw(this, unit);
      },
      drawShadow(unit) {
        unit_mechUnit.drawShadow(this, unit);
      },
    });
    unitInf_tsen.constructor = () => extend(MechUnit, {});
    db_ability.__legion(unitInf_tsen, 5, 40.0);
    db_ability.__energizer(unitInf_tsen);
    exports.unitInf_tsen = unitInf_tsen;


    const unitInf_74ka = extend(UnitType, "unit-inf-74ka", {
      setStats() {
        this.super$setStats();
        unit_mechUnit.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        unit_mechUnit.update(this, unit);
      },
      killed(unit) {
        this.super$killed(unit);
        unit_mechUnit.killed(this, unit);
      },
      draw(unit) {
        unit_mechUnit.draw(this, unit);
      },
      drawShadow(unit) {
        unit_mechUnit.drawShadow(this, unit);
      },
    });
    unitInf_74ka.constructor = () => extend(MechUnit, {});
    db_ability.__energizedRegeneration(unitInf_74ka, 30.0);
    exports.unitInf_74ka = unitInf_74ka;


    const unitInf_psas = extend(UnitType, "unit-inf-psas", {
      setStats() {
        this.super$setStats();
        unit_mechUnit.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        unit_mechUnit.update(this, unit);
      },
      killed(unit) {
        this.super$killed(unit);
        unit_mechUnit.killed(this, unit);
      },
      draw(unit) {
        unit_mechUnit.draw(this, unit);
      },
      drawShadow(unit) {
        unit_mechUnit.drawShadow(this, unit);
      },
    });
    unitInf_psas.constructor = () => extend(MechUnit, {});
    exports.unitInf_psas = unitInf_psas;


    const unitInf_paw = extend(UnitType, "unit-inf-paw", {
      setStats() {
        this.super$setStats();
        unit_mechUnit.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        unit_mechUnit.update(this, unit);
      },
      killed(unit) {
        this.super$killed(unit);
        unit_mechUnit.killed(this, unit);
      },
      draw(unit) {
        unit_mechUnit.draw(this, unit);
      },
      drawShadow(unit) {
        unit_mechUnit.drawShadow(this, unit);
      },
    });
    unitInf_paw.constructor = () => extend(MechUnit, {});
    db_ability.__deterrence(unitInf_paw, 800.0, 192.0);
    exports.unitInf_paw = unitInf_paw;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_mechUnit.js loaded.");
});
