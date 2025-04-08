/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Setting
    var ldm = false;
    const set_ldm = function(val) {
      ldm = val;
    };
    exports.set_ldm = set_ldm;


    var decalLifetime = 3600.0;
    const set_decalLifetime = function(val) {
      decalLifetime = val;
    };
    exports.set_decalLifetime = set_decalLifetime;
  // End


  // Part: Chance
    const _pFrac = function(p_base, frac) {
      return Math.min(p_base * frac, VAR.effect_chanceCap);
    };
    exports._pFrac = _pFrac;
  // End


  // Part: Sound
    /*
     * NOTE:
     *
     * Simply plays a sound.
     */
    const play = function(sound_gn) {
      if(Vars.headless || sound_gn == null) return false;

      if(sound_gn instanceof Sound) {
        sound_gn.play();
        return true;
      } else {
        var path = "sounds/" + sound_gn + ".ogg";

        if(Core.assets.isLoaded(path)) {
          Core.assets.get(path).play();
          return true;
        } else return false;
      }
    };
    exports.play = play;


    /*
     * NOTE:
     *
     * Plays a sound at {pos_gn}.
     */
    const playAt = function(pos_gn, sound_gn, vol, pitch, offPitch) {
      if(vol == null) vol = 1.0;
      if(pitch == null) pitch = 1.0;
      if(Vars.headless || pos_gn == null || sound_gn == null) return false;

      var pos = mdl_game._pos(pos_gn);
      var x = pos.x;
      var y = pos.y;
      var pitch_fi = (offPitch == null) ? pitch : (pitch + Mathf.range(offPitch));

      if(sound_gn instanceof Sound) {
        sound_gn.at(x, y, pitch_fi, vol);
        return true;
      } else {
        var path = "sounds/" + sound_gn + ".ogg";

        if(Core.assets.isLoaded(path)) {
          Core.assets.get(path).at(x, y, pitch_fi, vol);
          return true;
        } else return false;
      };
    };
    exports.playAt = playAt;
  // End


  // Part: Effect
    /*
     * NOTE:
     *
     * Shows a effect at {pos_gn}.
     */
    const showAt = function(pos_gn, eff, rot, color, data) {
      if(rot == null) rot = Mathf.random(360.0);
      if(color == null) color = Color.white;
      if(Vars.headless || Vars.state.isPaused() || pos_gn == null || eff == null) return false;

      var pos = mdl_game._pos(pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;

      if(data == null) {
        eff.at(x, y, rot, color);
      } else {
        eff.at(x, y, rot, color, data);
      };

      return true;
    };
    exports.showAt = showAt;


    const showAt_ldm = function(pos_gn, eff, rot, color, data) {
      if(Vars.headless || ldm) return false;

      return showAt(pos_gn, eff, rot, color, data);
    };
    exports.showAt_ldm = showAt_ldm;


    const showAtP = function(p, pos_gn, eff, rot, color, data) {
      if(Vars.headless || !Mathf.chance(p)) return false;

      return showAt(pos_gn, eff, rot, color, data);
    };
    exports.showAtP = showAtP;


    const showAtP_ldm = function(p, pos_gn, eff, rot, color, data) {
      if(Vars.headless || !Mathf.chance(p) || ldm) return false;

      return showAt(pos_gn, eff, rot, color, data);
    };
    exports.showAtP_ldm = showAtP_ldm;


    /*
     * NOTE:
     *
     * Shows a effect around {pos_gn}, with the max distance as {rad}.
     */
    const showAround = function(pos_gn, eff, rad, rot, color, data) {
      if(Vars.headless) return;

      var vec2 = new Vec2();

      var pos = mdl_game._pos(pos_gn);
      var pos1 = vec2.set(pos.x + Mathf.range(rad), pos.y + Mathf.range(rad));

      return showAt(pos1, eff, rot, color, data);
    };
    exports.showAround = showAround;


    const showAround_ldm = function(pos_gn, eff, rad, rot, color, data) {
      if(Vars.headless || ldm) return false;

      return showAround(pos_gn, eff, rad, rot, color, data);
    };
    exports.showAround_ldm = showAround_ldm;


    const showAroundP = function(p, pos_gn, eff, rad, rot, color, data) {
      if(Vars.headless || !Mathf.chance(p)) return false;

      return showAround(pos_gn, eff, rad, rot, color, data);
    };
    exports.showAroundP = showAroundP;


    const showAroundP_ldm = function(p, pos_gn, eff, rad, rot, color, data) {
      if(Vars.headless || !Mathf.chance(p) || ldm) return false;

      return showAround(pos_gn, eff, rad, rot, color, data);
    };
    exports.showAroundP_ldm = showAroundP_ldm;
  // End


  // Part: Special
    /*
     * NOTE:
     *
     * Creats a shake effect at {pos_gn}.
     */
    const shakeAt = function(pos_gn, pow, dur) {
      if(pow == null) pow = 4.0;
      if(dur == null) dur = 60.0;
      if(Vars.headless || pos_gn == null || pow < 0.0001 || dur < 0.0001) return false;

      var pos = mdl_game._pos(pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;

      Effect.shake(pow, dur, x, y);

      return true;
    };
    exports.shakeAt = shakeAt;


    /*
     * NOTE:
     *
     * Creates land dust effect at {pos_gn}.
     */
    const dustAt = function(pos_gn, rad) {
      if(rad == null) rad = 8.0;
      if(Vars.headless || Vars.state.isPaused() || pos_gn == null) return false;

      var pos = mdl_game._pos(pos_gn);
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


    /*
     * NOTE:
     *
     * Creates unit decal at {pos_gn}.
     */
    const remainsAt = function(pos_gn, unit) {
      if(Vars.headless || pos_gn == null || unit == null) return false;

      var pos = mdl_game._pos(pos_gn);
      if(pos == null) return false;
      var x = pos.x;
      var y = pos.y;
      var t = Vars.world.tileWorld(x, y);
      if(t == null || !t.floor().canShadow) return false;

      var decal = extend(Decal, {
        lifetime: decalLifetime,
        x: x,
        y: y,
        rotation: Mathf.random(360.0),
        color: Color.valueOf("606060"),
        region: Core.atlas.find(unit.type.name + "-icon", unit.type.region),
        offTime: Mathf.random(1200.0),
        isHot: mdl_content.isHot(unit),
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
          if(tintColor != null) {Draw.tint(this.color, tintColor, 0.5)} else {
            if(!this.isHot) {Draw.color(this.color)} else {
              Draw.color(Tmp.c1.set(Color.valueOf("ea8878")).lerp(this.color, Interp.pow2Out.apply(this.fin())));
            };
          };

          Draw.alpha(a - Mathf.curve(this.fin(), 0.98) * a);
          Draw.rect(this.region, x, y, this.rotation);

          if(this.isHot) {
            Draw.blend(Blending.additive);
            Draw.mixcol(Color.valueOf("ff3838"), 1.0);
            Draw.alpha((0.5 + Mathf.absin(10.0, 0.5)) * (0.5 - Interp.pow2Out.apply(this.fin()) * 0.5));
            Draw.rect(this.region, x, y, this.rotation);
            Draw.blend();
          };

          Draw.reset();

          showAtP_ldm(0.02, unit, db_effect._craftBlackSmog());
        },
      });
      decal.add();
    };
    exports.remainsAt = remainsAt;


    const eff_flash = new Effect(20.0, eff => {
      var e = eff.data;
      var color = eff.color;

      var a = eff.fout() * color.a;
      var reg;
      var ang;
      if(e instanceof Building) {
        reg = Core.atlas.find(e.block.name + "-icon", e.block.region);
        ang = 0.0;                // NOTE: No need to rotate, which bugs on turrets.
      } else {
        reg = Core.atlas.find(e.type.name + "-icon", e.type.region);
        ang = e.rotation - 90.0;
      };

      mdl_draw.drawNormalRegion(e, reg, ang, a, 1.0, color, Layer.effect + 0.44, true);
    });


    const flashAt = function(e, color_gn) {
      if(color_gn == null) color_gn = Color.white;
      if(e == null) return;

      var color = mdl_draw._color(color_gn);

      showAt("player", eff_flash, 0.0, color, e);
    };
    exports.flashAt = flashAt;


    /*
     * NOTE:
     *
     * Creates damage indicator effect at {pos_gn}.
     */
    const eff_showDmg = new Effect(40.0, eff => {
      var dmg = eff.data;
      var sizeScl = Math.max(Math.log((dmg + 10.0) / 10.0), 0.7);

      mdl_draw.drawText(new Vec2(eff.x, eff.y), Strings.autoFixed(dmg, 2), eff.color, sizeScl - Interp.pow3In.apply(eff.fin()) * sizeScl, Align.center, 0.0, 8.0 * eff.fin(), Math.min(dmg / 10000.0), 10.0);
    });


    const damageAt = function(pos_gn, dmg, team, isHeal) {
      if(team == null) team = Team.derelict;
      if(isHeal == null) isHeal = false;
      if(Vars.headless || !Core.settings.get("reind-damage-display", true) || pos_gn == null || dmg == null) return;

      showAround(pos_gn, eff_showDmg, 14.0, 0.0, isHeal ? Pal.heal : (team == Team.derelict ? Color.white : team.color), dmg);
    };
    exports.damageAt = damageAt;


    /*
     * NOTE:
     *
     * Creates item transfer effect from {pos_gn_f} to {pos_gn_t}.
     */
    const itemTransfer = function(pos_gn_f, pos_gn_t, color_gn, repeat) {
      if(repeat == null) repeat = 3;
      if(pos_gn_f == null || pos_gn_t == null) return;

      var color = (color_gn == null) ? null : mdl_draw._color(color_gn);

      for(let i = 0; i < repeat; i++) {showAt(pos_gn_f, Fx.itemTransfer, 0.0, color, pos_gn_t)};
    };
    exports.itemTransfer = itemTransfer;


    const chainLightning = function(pos_gn, e, color_gn, hasSound) {
      if(color_gn == null) color_gn = Pal.accent;
      if(hasSound == null) hasSound = false;
      if(pos_gn == null || e == null) return;

      var color = mdl_draw._color(color_gn);

      showAt(pos_gn, Fx.chainLightning, 0.0, color, e);
      if(hasSound) playAt(pos_gn, Sounds.spark);
    };
    exports.chainLightning = chainLightning;


    const chainLightning_es = function(pos_gn, es, color_gn, hasSound) {
      if(pos_gn == null || es == null || es.length == 0) return;

      var cap = es.length;
      for(let i = 0; i < cap; i++) {
        var tmp1 = (i == 0) ? pos_gn : es[i - 1];
        var tmp2 = es[i];

        chainLightning(tmp1, tmp2, color_gn);
      };

      if(hasSound) playAt(pos_gn, Sounds.spark);
    };
    exports.chainLightning_es = chainLightning_es;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_effect.js loaded.");
});
