/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Setting
    var ldm = false;
    const set_ldm = function(bool) {
      ldm = bool;
    };
    exports.set_ldm = set_ldm;
  // End


  // Part: Chance
    const getP_frac = function(p_base, frac) {
      return Math.min(p_base * frac, glb_vars.effect_chanceCap);
    };
    exports.getP_frac = getP_frac;
  // End


  // Part: Sound
    /* NOTE: Plays a sound at given position, skips if the asset is not loaded to avoid crash. */
    const playAt = function(pos_gn, path) {
      if(Vars.headless || pos_gn == null || path == null) return false;

      var path_fi = "sounds/" + path + ".ogg";
      var pos = mdl_game._pos(7, pos_gn);
      var x = pos.x;
      var y = pos.y;

      if(Core.assets.isLoaded(path_fi)) {
        Core.assets.get(path_fi).at(x, y);
        return true;
      } else return false;
    };
    exports.playAt = playAt;


    const netPlayAt = function(pos_gn, path) {
      if(Vars.headless || pos_gn == null || path == null) return false;

      var path_fi = "sounds/" + path + ".ogg";
      var pos = mdl_game._pos(7, pos_gn);
      var x = pos.x;
      var y = pos.y;

      if(Core.assets.isLoaded(path_fi)) {
        Vars.netClient.soundAt(Core.assets.get(path_fi), x, y, 1.0, 1.0);
        return true;
      } else return false;
    };
    exports.netPlayAt = netPlayAt;
  // End


  // Part: Effect
    /* NOTE: Shows a effect at given position, rotation is random in default. */
    const showAt = function(pos_gn, eff, rot) {
      if(rot == null) rot = Mathf.random(360.0);
      if(Vars.headless || Vars.state.isPaused() || pos_gn == null || eff == null) return false;

      var pos = mdl_game._pos(7, pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;

      eff.at(x, y, rot);

      return true;
    };
    exports.showAt = showAt;


    const showAt_ldm = function(pos_gn, eff, rot) {
      if(Vars.headless || ldm) return false;

      return showAt(pos_gn, eff, rot);
    };
    exports.showAt_ldm = showAt_ldm;


    /* NOTE: Chance given to create the effect. */
    const showAtP = function(p, pos_gn, eff, rot) {
      if(Vars.headless || !Mathf.chance(p)) return false;

      return showAt(pos_gn, eff, rot);
    };
    exports.showAtP = showAtP;


    const showAtP_ldm = function(p, pos_gn, eff, rot) {
      if(Vars.headless || !Mathf.chance(p) || ldm) return false;

      return showAt(pos_gn, eff, rot);
    };
    exports.showAtP_ldm = showAtP_ldm;


    /* NOTE: The effect is randomly created around the point. */
    const vec2_26877751 = new Vec2();
    const showAround = function(pos_gn, eff, rad, rot) {
      if(Vars.headless) return;

      var vec2 = vec2_26877751.setZero();

      var pos = mdl_game._pos(7, pos_gn);
      var pos1 = vec2.set(pos.x + Mathf.range(rad), pos.y + Mathf.range(rad));

      return showAt(pos1, eff, rot);
    };
    exports.showAround = showAround;


    const showAround_ldm = function(pos_gn, eff, rad, rot) {
      if(Vars.headless || ldm) return false;

      return showAround(pos_gn, eff, rad, rot);
    };
    exports.showAround_ldm = showAround_ldm;


    const showAroundP = function(p, pos_gn, eff, rad, rot) {
      if(Vars.headless || !Mathf.chance(p)) return false;

      return showAround(pos_gn, eff, rad, rot);
    };
    exports.showAroundP = showAroundP;


    const showAroundP_ldm = function(p, pos_gn, eff, rad, rot) {
      if(Vars.headless || !Mathf.chance(p) || ldm) return false;

      return showAround(pos_gn, eff, rad, rot);
    };
    exports.showAroundP_ldm = showAroundP_ldm;
  // End


  // Part: Special
    /* NOTE: Shakes the screen. */
    const shakeAt = function(pos_gn, pow, dur) {
      if(pow == null) pow = 4.0;
      if(dur == null) dur = 60.0;
      if(Vars.headless || pos_gn == null || pow < 0.0001 || dur < 0.0001) return false;

      var pos = mdl_game._pos(7, pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;

      Effect.shake(pow, dur, x, y);

      return true;
    };
    exports.shakeAt = shakeAt;


    /* NOTE: Floor dust. */
    const dustAt = function(pos_gn, rad) {
      if(rad == null) rad = 8.0;
      if(Vars.headless || Vars.state.isPaused() || pos_gn == null) return false;

      var pos = mdl_game._pos(7, pos_gn);
      if(pos == null) return false;
      var x = pos.x + Mathf.random(rad) * (Mathf.chance(0.5) ? 1 : -1);
      var y = pos.y + Mathf.random(rad) * (Mathf.chance(0.5) ? 1 : -1);

      Effect.floorDust(x, y, 8.0);

      return true;
    };
    exports.dustAt = dustAt;


    const dustAt_ldm = function(pos_gn, rad) {
      if(Vars.headless || ldm) return false;

      return dustAt(pos_gn, rad);
    };
    exports.dustAt_ldm = dustAt_ldm;


    const remainsAt = function(pos_gn, unit) {
      if(Vars.headless || pos_gn == null || unit == null) return false;

      var pos = mdl_game._pos(7, pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;
      var t = Vars.world.tileWorld(x, y);
      if(t == null || !t.floor().canShadow) return false;

      var decal = extend(Decal, {
        lifetime: 3600.0,
        x: x,
        y: y,
        rotation: Mathf.random(360.0),
        color: Color.valueOf("606060"),
        region: Core.atlas.find(unit.type.name + "-icon", unit.type.region),
        offTime: Mathf.random(1200.0),
        draw() {
          var x = this.x;
          var y = this.y;
          var tintColor = null;
          var a = 1.0;
          var z = 58.0;

          if(t.floor().isLiquid && t.build == null && (!t.solid() || t.block() instanceof TreeBlock)) {
            var liq = t.floor().liquidDrop;

            if(unit.type.hitSize < 17.5001) {
              x = this.x + Math.sin((Time.time + this.offTime) * 0.01) * 0.35 * Vars.tilesize;
              y = this.y + Math.cos((Time.time + this.offTime) * 0.05 + 32.0) * 0.15 * Vars.tilesize;

              if(liq != null) {
                showAtP_ldm(0.008, unit, db_effect._ripple(unit.type.hitSize * 1.2, 1.0, liq.color));
              };
            } else {
              if(liq != null) {
                tintColor = liq.color;
                a = 0.5;
                z = 22.0;
              };
            };
          };

          Draw.z(z);
          if(tintColor != null) {Draw.tint(this.color, tintColor, 0.5)} else {Draw.color(this.color)};

          Draw.alpha(a - Mathf.curve(this.fin(), 0.98) * a);
          Draw.rect(this.region, x, y, this.rotation);
          Draw.reset();

          showAtP_ldm(0.02, unit, db_effect._craftBlackSmog());
        },
      });
      decal.add();
    };
    exports.remainsAt = remainsAt;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_effect.js loaded.");
});
