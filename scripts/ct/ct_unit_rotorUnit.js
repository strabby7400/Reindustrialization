/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/unit/unit_rotorUnit");

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
        db_ability.__deathExplosion(this, 300.0, 64.0, StatusEffects.blasted);
        db_ability.__energizer(this);
        db_ability.__portableOreScanner(this);
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
    unitCore_expeditionII.constructor = () => extend(PayloadUnit, {});
    exports.unitCore_expeditionII = unitCore_expeditionII;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_rotorUnit.js loaded.");
});
