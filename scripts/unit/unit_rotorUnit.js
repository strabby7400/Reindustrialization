/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_airUnit = require("reind/unit/unit_airUnit");

    const mdl_effect = require("reind/mdl/mdl_effect");

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

      var t = unit.tileOn();
      if(t != null && t.floor().placeableOn && Mathf.chance(0.25)) mdl_effect.showAt_ldm(unit, db_effect._rotorWave(utp.hitSize * 2.0), 0.0);
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


    const drawShadow = function(utp, unit) {
      unit_airUnit.drawShadow(utp, unit);
    };
    exports.drawShadow = drawShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_rotorUnit.js loaded.");
});
