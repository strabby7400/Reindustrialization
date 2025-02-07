/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_effect = require("reind/db/db_effect");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Attack


    /* <---------------- explosion ----------------> */


    /* NOTE: Simply creates explosion. This one ignores team. */
    const attack_explosion = function(pos, rad, dmg, shake) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 0.0;
      if(shake == null) shake = 0.0;
      if(pos == null || dmg < 0.01) return;

      Damage.damage(pos.x, pos.y, rad, dmg);

      mdl_effect.showAt_ldm(pos, db_effect._commonExplosion(rad), 0.0);
      mdl_effect.shakeAt(pos, shake);
      mdl_effect.playAt(pos, "se-shot-explosion");
    };
    exports.attack_explosion = attack_explosion;


    /* <---------------- impact ----------------> */



    /*
      NOTE:
      Creates an impact wave, effect is not included.
      Impact wave always damages all units regardless of team.
      If the impact is called by an unit, use {caller} to avoid damaging itself.
    */
    const attack_impact = function(pos, rad, dmg, dur, caller) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 20.0;
      if(dur == null) dur = 120.0;
      if(pos == null) return;

      mdl_geometry.getUnits(pos, rad).each(unit => {
        if(!unit.flying && !unit.type.naval && !unit.hovering && unit != caller) {
          var d = mdl_geometry.getDistance(pos, mdl_geometry.poser_1u(unit));
          var dmg_fi = (Mathf.random(0.6) + 0.7) * Math.max(1.0 - d / rad, 0.1) * dmg + glb_vars.impact_minDamage;

          unit.damage(dmg_fi);
          if(Mathf.chance(Math.max(1.0 - d / rad, 0.15))) unit.apply(Vars.content.statusEffect("reind-sta-spec-stunned"), dur);
        };
      });
    };
    exports.attack_impact = attack_impact;


    /* <---------------- lightning ----------------> */


    /* NOTE: Creates lightnings at the position. */
    const attack_lightning = function(pos, team, amt, r, off_r, dmg, color) {
      if(team == null) team = Team.derelict;
      if(amt == null) amt = 1;
      if(r == null) r = 5;
      if(off_r == null) off_r = 0;
      if(dmg == null) dmg = 10.0;
      if(color == null) color = Pal.techBlue;
      if(pos == null) return;

      for(let i = 0; i < amt; i++) {
        var r_fi = Math.round(r + Mathf.random() * off_r);
        Lightning.create(team, color, dmg, pos.x, pos.y, Mathf.random(360.0), r_fi)
      };

      Sounds.spark.at(pos.x, pos.y);
    };
    exports.attack_lightning = attack_lightning;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_attack.js loaded.");
});
