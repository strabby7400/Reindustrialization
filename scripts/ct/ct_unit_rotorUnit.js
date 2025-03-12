/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_rotorUnit = require("reind/unit/unit_rotorUnit");

    const db_ability = require("reind/db/db_ability");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: unit-core
    const unitCore_expeditionII = extend(UnitType, "unit-core-expedition-ii", {
      setStats() {
        this.super$setStats();
        unit_rotorUnit.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        unit_rotorUnit.update(this, unit);
      },
      killed(unit) {
        this.super$killed(unit);
        unit_rotorUnit.killed(this, unit);
      },
      draw(unit) {
        unit_rotorUnit.draw(this, unit);
      },
      drawShadow(unit) {
        unit_rotorUnit.drawShadow(this, unit);
      },
    });
    unitCore_expeditionII.constructor = () => extend(PayloadUnit, {});
    db_ability.__deathExplosion(unitCore_expeditionII, 300.0, 64.0, StatusEffects.blasted);
    db_ability.__energizer(unitCore_expeditionII);
    exports.unitCore_expeditionII = unitCore_expeditionII;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_rotorUnit.js loaded.");
});
