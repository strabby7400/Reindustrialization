/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_genericUnit = require("reind/unit/unit_genericUnit");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_infantryUnit = function(utp) {
      unit_genericUnit.setStats(utp);
    };
    exports.setStats = setStats_infantryUnit;


    const update_infantryUnit = function(utp, unit) {
      unit_genericUnit.update(utp, unit);
    };
    exports.update = update_infantryUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_infantryUnit.js loaded.");
});
