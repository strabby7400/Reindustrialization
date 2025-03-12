/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_airUnit = require("reind/unit/unit_airUnit");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_unit = require("reind/mdl/mdl_unit");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Component
    function updateComp(utp, unit) {
      var cap = utp.weapons.size;
      for(let i = 0; i < cap; i++) {
        var mt = unit.mounts[i];
        if(mt.weapon.name.includes("-rotator")) {
          var rot_fi = (mt.rotation + Time.delta * 15.0) % 360.0;
          mt.rotation = rot_fi;
        };
      };

      if(!Vars.headless && Mathf.chance(0.25)) {
        var elev = mdl_unit.getElevation(unit);
        var pos_p3d = mdl_game._posP3d(1, mdl_game._pos(1, unit), elev);
        var flr = Vars.world.floorWorld(pos_p3d.x, pos_p3d.y);

        if(flr != null) {
          if(flr.canShadow) mdl_effect.showAt_ldm(pos_p3d, db_effect._rotorWave(utp.hitSize * 2.0), 0.0);
          if(flr.isLiquid && utp.lowAltitude && Mathf.chance(0.7)) mdl_effect.dustAt_ldm(pos_p3d, 8.0);
        };
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
      unit_airUnit.setStats(utp);
    };
    exports.setStats = setStats;


    const update = function(utp, unit) {
      unit_airUnit.update(utp, unit);

      updateComp(utp, unit);
    };
    exports.update = update;


    const killed = function(utp, unit) {
      unit_airUnit.killed(utp, unit);
    };
    exports.killed = killed;


    const draw = function(utp, unit) {
      unit_airUnit.draw(utp, unit);
    };
    exports.draw = draw;


    const drawShadow = function(utp, unit) {
      unit_airUnit.drawShadow(utp, unit);
    };
    exports.drawShadow = drawShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: unit_rotorUnit.js loaded.");
});
