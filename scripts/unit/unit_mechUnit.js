/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_infantryUnit = require("reind/unit/unit_infantryUnit");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_unit = require("reind/mdl/mdl_unit");
  // End


  // Part: Component
    function updateComp(utp, unit) {
      if(!Vars.headless && unit.elevation > 0.5 && Mathf.chance(0.25)) {
        var cond = false;
        var rad = Math.max(utp.hitSize / 1.5 - 2.0, 2.0);
        var elev = mdl_unit.getElevation(unit);

        if(unit.vel.len() > 0.0001) cond = true;
        if(!cond && Mathf.chance(0.4)) cond = true;

        if(cond) mdl_effect.dustAt_ldm(mdl_game._posP3d(1, mdl_game._pos(1, unit), elev), rad);
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
      unit_infantryUnit.setStats(utp);
    };
    exports.setStats = setStats;


    const update = function(utp, unit) {
      unit_infantryUnit.update(utp, unit);

      updateComp(utp, unit);
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
  Log.info("REIND: unit_mechUnit.js loaded.");
});
