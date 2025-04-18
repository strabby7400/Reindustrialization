/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/unit/unit_infantryUnit");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_unit = require("reind/mdl/mdl_unit");
  // End


  // Part: Setting
    var ldm = false;
    const set_ldm = function(val) {
      ldm = val;
    };
    exports.set_ldm = set_ldm;
  // End


  // Part: Component
    function updateComp(utp, unit) {
      if(!ldm && !Vars.headless && unit.elevation > 0.5 && Mathf.chance(0.25)) {
        var cond = false;
        var rad = Math.max(utp.hitSize / 1.5 - 2.0, 2.0);
        var elev = mdl_unit._elev(unit);

        if(mdl_content.isMoving(unit)) cond = true;
        if(!cond && Mathf.chance(0.4)) cond = true;

        if(cond) mdl_effect.dustAt(mdl_game._posP3d(unit, elev), rad);
      };
    };
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

      updateComp(utp, unit);
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
  Log.info("REIND: unit_mechUnit.js loaded.");
});
