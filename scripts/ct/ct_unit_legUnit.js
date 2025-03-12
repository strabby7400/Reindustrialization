/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_legUnit = require("reind/unit/unit_legUnit");

    const db_ability = require("reind/db/db_ability");
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
        unit_legUnit.setStats(this);
      },
      update(unit) {
        this.super$update(unit);
        unit_legUnit.update(this, unit);
      },
      killed(unit) {
        this.super$killed(unit);
        unit_legUnit.killed(this, unit);
      },
      draw(unit) {
        unit_legUnit.draw(this, unit);
      },
      drawShadow(unit) {
        unit_legUnit.drawShadow(this, unit);
      },
    });
    unitCore_expeditionI.constructor = () => extend(LegsUnit, {});
    db_ability.__energizer(unitCore_expeditionI);
    exports.unitCore_expeditionI = unitCore_expeditionI;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_legUnit.js loaded.");
});
