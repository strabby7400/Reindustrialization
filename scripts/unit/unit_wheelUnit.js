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
    const setStats_wheelUnit = function(utp) {
      unit_genericUnit.setStats(utp);
    };
    exports.setStats = setStats_wheelUnit;


    const update_wheelUnit = function(utp, unit) {
      unit_genericUnit.update(utp, unit);
    };
    exports.update = update_wheelUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_wheelUnit.js loaded.");
});
