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
    const setStats_legUnit = function(utp) {
      unit_infantryUnit.setStats(utp);
    };
    exports.setStats = setStats_legUnit;


    const update_legUnit = function(utp, unit) {
      unit_infantryUnit.update(utp, unit);
    };
    exports.update = update_legUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_legUnit.js loaded.");
});
