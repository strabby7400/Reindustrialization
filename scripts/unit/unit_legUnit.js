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
    const setStats = function(utp) {
      unit_infantryUnit.setStats(utp);
    };
    exports.setStats = setStats;


    const update = function(utp, unit) {
      unit_infantryUnit.update(utp, unit);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_legUnit.js loaded.");
});
