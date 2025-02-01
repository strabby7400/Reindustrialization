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
    const setStats_mechUnit = function(utp) {
      unit_infantryUnit.setStats(utp);
    };
    exports.setStats = setStats_mechUnit;


    const update_mechUnit = function(utp, unit) {
      unit_infantryUnit.update(utp, unit);
    };
    exports.update = update_mechUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_mechUnit.js loaded.");
});
