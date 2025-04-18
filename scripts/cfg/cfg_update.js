/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const cfg_setting = require("reind/cfg/cfg_setting");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Setting
    var noob = false;
    const set_noob = function(val) {
      noob = val;
    };
    exports.set_noob = set_noob;


    var damageDisplay = true;
    const set_damageDisplay = function(val) {
      damageDisplay = val;
    };
    exports.set_damageDisplay = set_damageDisplay;


    var secretCode = "<ohno>";
    const set_secretCode = function(val) {
      secretCode = val;
    };
    exports.set_secretCode = set_secretCode;
  // End


  // Part: Auxilliary
    function ax_bulletDamage(bul, mtp, d, armor, hitSize) {
      var dmg = bul.damage;
      var sDmg = bul.type.splashDamage;
      var sDmgRad = bul.type.splashDamageRadius;

      var isRemoteCur = (d > (bul.hitSize + hitSize) * 0.5);
      var isRemote = mdl_content.isRemote(bul.type);

      var dmg_fi = 0.0;

      if(bul.type.pierceArmor) {
        dmg_fi += (isRemoteCur && !isRemote) ? 0.0 : dmg;
      } else {
        dmg_fi += (isRemoteCur && !isRemote) ? 0.0 : ((dmg > armor) ? dmg - armor : dmg * 0.1);
      };

      if(sDmgRad > 0.0) {
        dmg_fi += sDmg * (1.0 - Mathf.clamp(d / sDmgRad));
      };

      return dmg_fi * mtp;
    };
  // End


  // Part: Noob
    const timer_noob = new Interval(1);
    function update_noob() {
      if(!Vars.state.isGame() || timer_noob.get(180.0)) return;

      if(Groups.player.size() > 1) {
        cfg_setting.set_noob(false);
      } else {
        cfg_setting.set_noob(Core.settings.getBool("reind-noob-mode", false));
      };

      if(noob) {
        Groups.unit.each(unit => {
          if(unit.team == Vars.player.team() && mdl_content.isReind(unit.type)) unit.apply(Vars.content.statusEffect("reind-sta-spec-earses-mark"), 240.0);
        });
      };
    };
  // End


  // Part: Timer
    const timer_drawLightning = new Interval(1);


    function update_drawState() {
      exports.state_drawLightning = timer_drawLightning.get(30.0);
    };
  // End


  // Part: Suppressor
    var count_load = 0;
    const isSuppressed = function() {
      return count_load > 0;
    };
    exports.isSuppressed = isSuppressed;


    function onWorldLoad_suppressor() {
      count_load = VAR.update_suppressorTime;
    };


    function update_suppressor() {
      if(count_load > 0) count_load -= 1;

      return count_load;
    };
  // End


  // Part: Time Control
    const timer_timeControl = new Interval(1);
    var timeMtp = 1.0;


    const set_timeMtp = function(val) {
      timeMtp = val;
    };
    exports.set_timeMtp = set_timeMtp;


    function update_timeControl() {
      if(Vars.state.isMenu() && timer_timeControl.get(60.0)) {
        timeMtp = 1.0;
        Time.setDeltaProvider(() => Core.graphics.getDeltaTime() * 60.0 * timeMtp);
      };

      exports.timeMtp = timeMtp;
    };
  // End


  /*
    ========================================
    Section: Application
    ========================================
  */


  // Part: Event
    Events.run(WorldLoadEvent, () => {
      onWorldLoad_suppressor();
    });


    Events.run(Trigger.update, () => {
      update_noob();
      update_drawState();
      update_suppressor();
      update_timeControl();
    });


    Events.on(EventType.BuildDamageEvent, ev => {
      if(damageDisplay) {
        var bul = ev.source;
        var b = ev.build;

        if(bul != null && b != null) {
          var dmg_fi = ax_bulletDamage(bul, bul.type.buildingDamageMultiplier, mdl_game._dst(bul, b), b.block.armor, b.block.size * Vars.tilesize);
          if(dmg_fi > 0.0001) mdl_effect.damageAt(b, dmg_fi, bul.team);
        };
      };
    });


    Events.on(EventType.UnitDamageEvent, ev => {
      if(damageDisplay) {
        var bul = ev.bullet;
        var unit = ev.unit;

        if(bul != null && unit != null) {
          var dmg_fi = ax_bulletDamage(bul, 1.0 / unit.healthMultiplier, mdl_game._dst(bul, unit), unit.type.armor, unit.type.hitSize);
          if(dmg_fi > 0.0001) mdl_effect.damageAt(unit, dmg_fi, bul.team);
        };
      };

      if(secretCode.includes("<fireinthehole>")) mdl_effect.playAt(ev.unit, "se-meme-fith", 1.0, 1.75, 1.25);
    });


    Events.on(EventType.UnitDestroyEvent, ev => {
      if(secretCode.includes("<bruh>")) mdl_effect.playAt(ev.unit, "se-meme-bruh");
      if(secretCode.includes("<steelpipe>")) mdl_effect.playAt(ev.unit, "se-meme-steel-pipe");
    });
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_update.js loaded.");
});
