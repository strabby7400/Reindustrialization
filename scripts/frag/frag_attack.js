/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Setting
    var noob = false;
    const set_noob = function(val) {
      noob = val;
    };
    exports.set_noob = set_noob;
  // End


  // Part: Param
    const _gasExploRad = function(size) {
      return size * 0.5 * VAR.gas_explosionRadius;
    };
    exports._gasExploRad = _gasExploRad;


    const _gasExploDmg = function(size) {
      return size * 0.5 * VAR.gas_explosionDamage;
    };
    exports._gasExploDmg = _gasExploDmg;


    const _impactDmg = function(size, time) {
      return Math.min(size * size * time / 60.0 * 60.0, 5000.0);
    };
    exports._impactDmg = _impactDmg;


    const _impactDur = function(time) {
      return Math.min(time * 0.5, 300.0);
    };
    exports._impactDur = _impactDur;


    const _impactDustRad = function(size) {
      return (size * 0.5 + 1.0) * Vars.tilesize;
    };
    exports._impactDustRad = _impactDustRad;
  // End


  // Part: Attack


    /* <---------------- explosion ----------------> */


    const atk_explosion = function(pos_gn, rad, dmg, shake) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 0.0;
      if(shake == null) shake = 0.0;
      if(pos_gn == null || dmg < 0.01) return;

      var pos = mdl_game._pos(pos_gn);

      Damage.damage(pos.x, pos.y, rad, dmg);

      mdl_effect.showAt_ldm(pos, db_effect._commonExplosion(rad), 0.0);
      mdl_effect.shakeAt(pos, shake);
      mdl_effect.playAt(pos, "se-shot-explosion", 1.0, 1.0, 0.1);
    };
    exports.atk_explosion = atk_explosion;


    const atk_explosion_noob = function(pos_gn, rad, dmg, shake) {
      if(noob) return;

      atk_explosion(pos_gn, rad, dmg, shake);
    };
    exports.atk_explosion_noob = atk_explosion_noob;


    /* <---------------- impact ----------------> */


    const atk_impact = function(pos_gn, rad, dmg, dur, shake, caller) {
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 20.0;
      if(dur == null) dur = 120.0;
      if(shake == null) shake = 0.0;
      if(pos_gn == null) return;

      var pos = mdl_game._pos(pos_gn);

      mdl_game._liUnit(pos, rad).each(unit => {
        if(!unit.flying && !unit.type.naval && !unit.hovering && unit != caller) {
          var d = mdl_game._dst(pos, unit);
          var dmg_fi = (Mathf.random(0.6) + 0.7) * Math.max(1.0 - d / rad, 0.1) * dmg + VAR.impact_minDamage * (noob ? 0.5 : 1.0);

          unit.damage(dmg_fi);
          if(Mathf.chance(Math.max(1.0 - d / rad, 0.15))) unit.apply(Vars.content.statusEffect("reind-sta-spec-stunned"), dur);
        };
      });

      mdl_effect.shakeAt(pos, shake);
    };
    exports.atk_impact = atk_impact;


    /* <---------------- lightning ----------------> */


    const atk_lightning = function(pos_gn, team, amt, r, off_r, dmg, color) {
      if(team == null) team = Team.derelict;
      if(amt == null) amt = 1;
      if(r == null) r = 5;
      if(off_r == null) off_r = 0;
      if(dmg == null) dmg = VAR.shortCircuit_lightningDamage;
      if(color == null) color = Pal.techBlue;
      if(pos_gn == null) return;

      var pos = mdl_game._pos(pos_gn);

      for(let i = 0; i < amt; i++) {
        var r_fi = Math.round(r + Mathf.random() * off_r);
        Lightning.create(team, color, dmg, pos.x, pos.y, Mathf.random(360.0), r_fi)
      };

      Sounds.spark.at(pos.x, pos.y);
    };
    exports.atk_lightning = atk_lightning;


    const atk_lightning_noob = function(pos_gn, team, amt, r, off_r, dmg, color) {
      if(noob) return;

      atk_lightning(pos_gn, team, amt, r, off_r, dmg, color);
    };
    exports.atk_lightning_noob = atk_lightning_noob;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_attack.js loaded.");
});
