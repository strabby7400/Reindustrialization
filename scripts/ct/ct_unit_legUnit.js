/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/unit/unit_legUnit");

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
    unitCore_expeditionI.constructor = () => extend(LegsUnit, {});
    exports.unitCore_expeditionI = unitCore_expeditionI;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_unit_legUnit.js loaded.");
});
