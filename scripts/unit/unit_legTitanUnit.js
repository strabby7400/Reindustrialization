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


    const killed = function(utp, unit) {
      unit_infantryUnit.killed(utp, unit);
    };
    exports.killed = killed;


    const draw = function(utp, unit) {
      unit_infantryUnit.draw(utp, unit);
    };
    exports.draw = draw;


    const drawShadow = function(utp, unit) {
      unit_infantryUnit.drawShadow(utp, unit);
    };
    exports.drawShadow = drawShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: unit_legTitanUnit.js loaded.");
});
