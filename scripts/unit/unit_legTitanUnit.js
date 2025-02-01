/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_infantryUnit = require("reind/unit/unit_infantryUnit");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_legTitanUnit = function(utp) {
      unit_infantryUnit.setStats(utp);
    };
    exports.setStats = setStats_legTitanUnit;


    const update_legTitanUnit = function(utp, unit) {
      unit_infantryUnit.update(utp, unit);
    };
    exports.update = update_legTitanUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_legTitanUnit.js loaded.");
});
