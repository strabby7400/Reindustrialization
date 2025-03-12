/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Setting
    var noob = false;
    const set_noob = function(bool) {
      noob = bool;
    };
    exports.set_noob = set_noob;
  // End


  // Part: Attack


    /* <---------------- explosion ----------------> */


    /* NOTE: Simply creates explosion. This one ignores team. */
    const attack_explosion = function(pos_gn, rad, dmg, shake) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 0.0;
      if(shake == null) shake = 0.0;
      if(pos_gn == null || dmg < 0.01) return;

      var pos = mdl_game._pos(3, pos_gn);

      Damage.damage(pos.x, pos.y, rad, dmg);

      mdl_effect.showAt_ldm(pos, db_effect._commonExplosion(rad), 0.0);
      mdl_effect.shakeAt(pos, shake);
      mdl_effect.playAt(pos, "se-shot-explosion");
    };
    exports.attack_explosion = attack_explosion;


    const attack_explosion_noob = function(pos_gn, rad, dmg, shake) {
      if(noob) return;

      attack_explosion(pos_gn, rad, dmg, shake);
    };
    exports.attack_explosion_noob = attack_explosion_noob;


    /* <---------------- impact ----------------> */



    /*
      NOTE:
      Creates an impact wave, effect is not included.
      Impact wave always damages all units regardless of team.
      If the impact is called by an unit, use {caller} to avoid damaging itself.
    */
    const attack_impact = function(pos_gn, rad, dmg, dur, caller) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 20.0;
      if(dur == null) dur = 120.0;
      if(pos_gn == null) return;

      var pos = mdl_game._pos(3, pos_gn);

      mdl_game._liUnit(pos, rad).each(unit => {
        if(!unit.flying && !unit.type.naval && !unit.hovering && unit != caller) {
          var d = mdl_game._dst(pos, mdl_game._pos(4, unit));
          var dmg_fi = (Mathf.random(0.6) + 0.7) * Math.max(1.0 - d / rad, 0.1) * dmg + glb_vars.impact_minDamage * (noob ? 0.5 : 1.0);

          unit.damage(dmg_fi);
          if(Mathf.chance(Math.max(1.0 - d / rad, 0.15))) unit.apply(Vars.content.statusEffect("reind-sta-spec-stunned"), dur);
        };
      });
    };
    exports.attack_impact = attack_impact;


    /* <---------------- lightning ----------------> */


    /* NOTE: Creates lightnings at the position. */
    const attack_lightning = function(pos_gn, team, amt, r, off_r, dmg, color) {
      if(team == null) team = Team.derelict;
      if(amt == null) amt = 1;
      if(r == null) r = 5;
      if(off_r == null) off_r = 0;
      if(dmg == null) dmg = 10.0;
      if(color == null) color = Pal.techBlue;
      if(pos_gn == null) return;

      var pos = mdl_game._pos(3, pos_gn);

      for(let i = 0; i < amt; i++) {
        var r_fi = Math.round(r + Mathf.random() * off_r);
        Lightning.create(team, color, dmg, pos.x, pos.y, Mathf.random(360.0), r_fi)
      };

      Sounds.spark.at(pos.x, pos.y);
    };
    exports.attack_lightning = attack_lightning;


    const attack_lightning_noob = function(pos_gn, team, amt, r, off_r, dmg, color) {
      if(noob) return;

      attack_lightning(pos_gn, team, amt, r, off_r, dmg, color);
    };
    exports.attack_lightning_noob = attack_lightning_noob;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_attack.js loaded.");
});
