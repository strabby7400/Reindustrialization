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
    const attack_explosion_1pos = function(pos, rad, dmg, shake) {
      if(shake == null) shake = 0.0;
      if(dmg < 0.01) return;

      Damage.damage(pos.x, pos.y, rad, dmg);

      mdl_effect.atL_1pos(pos, db_effect._commonExplosion(rad), 0.0);
      mdl_effect.shake_1pos(pos, shake);
      mdl_effect.play_1pos(pos, "se-shot-explosion");
    };
    exports.attack_explosion_1pos = attack_explosion_1pos;


    const attack_explosion_1t = function(t, off, rad, dmg, shake) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      attack_explosion_1pos(pos, rad, dmg, shake);
    };
    exports.attack_explosion_1t = attack_explosion_1t;


    const attack_explosion_1b = function(b, rad, dmg, shake) {
      if(b == null) return;

      attack_explosion_1t(b.tile, b.block.offset, rad, dmg, shake);
    };
    exports.attack_explosion_1b = attack_explosion_1b;



    /* <---------------- impact ----------------> */



    /*
      NOTE:
      Creates an impact wave, effect is not included.
      Impact wave always damages all units regardless of team.
      If the impact is called by an unit, use {caller} to avoid damaging itself.
    */
    const attack_impact_1pos = function(pos, rad, dmg, dur, caller) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 20.0;
      if(dur == null) dur = 120.0;

      mdl_geometry.getUnits_1pos(pos, rad).each(unit => {
        if(!unit.flying && !unit.type.naval && !unit.hovering && unit != caller) {
          var d = mdl_geometry.getDistance_2pos(pos, new Point2(unit.x, unit.y));
          var dmg_fi = (Mathf.random(0.6) + 0.7) * Math.max(1.0 - d / rad, 0.1) * dmg + glb_vars.impact_minDamage;

          unit.damage(dmg_fi);
          if(Mathf.chance(Math.max(1.0 - d / rad, 0.15))) unit.apply(Vars.content.statusEffect("reind-sta-spec-stunned"), dur);
        };
      });
    };
    exports.attack_impact_1pos = attack_impact_1pos;


    const attack_impact_1t = function(t, off, rad, dmg, dur) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      attack_impact_1pos(pos, rad, dmg, dur);
    };
    exports.attack_impact_1t = attack_impact_1t;


    const attack_impact_1b = function(b, rad, dmg, dur) {
      if(b == null) return;

      attack_impact_1t(b.tile, b.block.offset, rad, dmg, dur);
    };
    exports.attack_impact_1b = attack_impact_1b;


    /* <---------------- lightning ----------------> */


    /* NOTE: Creates lightnings at the position. */
    const attack_lightning_1pos = function(pos, team, amt, r, off_r, dmg, color) {
      if(team == null) team = Team.derelict;
      if(amt == null) amt = 1;
      if(r == null) r = 5;
      if(off_r == null) off_r = 0;
      if(dmg == null) dmg = 10.0;
      if(color == null) color = Pal.techBlue;

      for(let i = 0; i < amt; i++) {
        var r_fi = Math.round(r + Mathf.random() * off_r);
        Lightning.create(team, color, dmg, pos.x, pos.y, Mathf.random(360.0), r_fi)
      };

      Sounds.spark.at(pos.x, pos.y);
    };
    exports.attack_lightning_1pos = attack_lightning_1pos;


    const attack_lightning_1t = function(t, off, team, amt, r, off_r, dmg, color) {
      if(off == null) off = 0.0;
      if(t == null) return;

      var pos = mdl_geometry.getPos_1t(t, off);

      attack_lightning_1pos(pos, team, amt, r, off_r, dmg, color)
    };
    exports.attack_lightning_1t = attack_lightning_1t;


    const attack_lightning_1b = function(b, team, amt, r, off_r, dmg, color) {
      if(b == null) return;

      attack_lightning_1t(b.tile, b.block.offset, team, amt, r, off_r, dmg, color)
    };
    exports.attack_lightning_1b = attack_lightning_1b;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_attack.js loaded.");
});
