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
    const setStats_airUnit = function(utp) {
      unit_genericUnit.setStats(utp);
    };
    exports.setStats = setStats_airUnit;


    const update_airUnit = function(utp, unit) {
      unit_genericUnit.update(utp, unit);
    };
    exports.update = update_airUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_airUnit.js loaded.");
});
