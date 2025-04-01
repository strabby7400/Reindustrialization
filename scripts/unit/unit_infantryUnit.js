/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/unit/unit_genericUnit");
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(utp) {
      PARENT.setStats(utp);
    };
    exports.setStats = setStats;


    const update = function(utp, unit) {
      PARENT.update(utp, unit);
    };
    exports.update = update;


    const init = function(utp) {
      PARENT.init(utp);
    };
    exports.init = init;


    const killed = function(utp, unit) {
      PARENT.killed(utp, unit);
    };
    exports.killed = killed;


    const draw = function(utp, unit) {
      PARENT.draw(utp, unit);
    };
    exports.draw = draw;


    const drawShadow = function(utp, unit) {
      PARENT.drawShadow(utp, unit);
    };
    exports.drawShadow = drawShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: unit_infantryUnit.js loaded.");
});
