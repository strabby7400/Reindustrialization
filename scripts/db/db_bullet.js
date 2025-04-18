/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_unit = require("reind/mdl/mdl_unit");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Auxilliary
    function ax_setBullet(utp, ids_gn, bul) {
      var ids = (ids_gn instanceof Array) ? ids_gn : [ids_gn];

      ids.forEach(id => {
        var weap = utp.weapons.get(id);
        weap.bullet = bul;
      });
    };


    function ax_sound(path) {
      var sound = Vars.tree.loadSound(path);
      if(sound == null) sound = Vars.tree.loadSound(path);
      return sound;
    };
  // End


  // Part: Basic
    const __basic = function(utp, ids_gn, dmg, bdmgMtp, rad, speed, spr, color, sizeScl, shake, pierceCap, piercesBuilding, knockback, recoil, noSmog) {
      if(dmg == null) dmg = 40.0;
      if(bdmgMtp == null) bdmgMtp = 1.0;
      if(rad == null) rad = 80.0;
      if(speed == null) speed = 10.0;
      if(spr == null) spr = "reind-bul-bullet1";
      if(color == null) color = Pal.techBlue;
      if(sizeScl == null) sizeScl = 1.0;
      if(shake == null) shake = 0.0;
      if(pierceCap == null) pierceCap = -1;
      if(piercesBuilding == null) piercesBuilding = false;
      if(knockback == null) knockback = 0.0;
      if(recoil == null) recoil = 0.0;
      if(noSmog == null) noSmog = false;

      const bul = extend(BasicBulletType, {
        despawnHit: true,
        lifetime: rad / speed, speed: speed, range: rad, damage: dmg, buildingDamageMultiplier: bdmgMtp, hitSize: 4.0 * sizeScl,
        collides: true, collidesAir: false, collidesGround: true, collideTerrain: true,
        sprite: spr, layer: VAR.layer_bullet, frontColor: Color.white, backColor: color, hitColor: color,
        width: 5.0 * sizeScl, height: 10.0 * sizeScl, lightRadius: -1.0, lightOpacity: 0.0, hitShake: shake, despawnShake: 0.0,
        shootEffect: noSmog ? Fx.shootSmallColor : new MultiEffect(Fx.shootSmallColor, db_effect._gunSmog()),
        smokeEffect: Fx.none,
        chargeEffect: Fx.none,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.none,
        trailColor: Color.valueOf("ffffff20"), trailLength: 6, trailWidth: 2.0,
        hitSound: Sounds.none, despawnSound: Sounds.none,
        pierce: pierceCap > 0, pierceBuilding: piercesBuilding, pierceCap: pierceCap, pierceDamageFactor: 0.0,
        knockback: knockback, impact: true, recoil: recoil,
      });

      ax_setBullet(utp, ids_gn, bul);
    };
    exports.__basic = __basic;


    const __sniper = function(
      utp, ids_gn, dmg, bdmgMtp, rad, speed, spr, color, sizeScl, shake, pierceCap, piercesBuilding, knockback, recoil,
      fragAmt, fragDmg, fragRad, fragSpeed, fragOffSpeed, fragSpr, fragPierceCap, fragPiercesBuilding
    ) {
      if(dmg == null) dmg = 40.0;
      if(bdmgMtp == null) bdmgMtp = 1.0;
      if(rad == null) rad = 80.0;
      if(speed == null) speed = 10.0;
      if(spr == null) spr = "reind-bul-bullet4";
      if(color == null) color = Pal.techBlue;
      if(sizeScl == null) sizeScl = 1.0;
      if(shake == null) shake = 0.0;
      if(pierceCap == null) pierceCap = -1;
      if(piercesBuilding == null) piercesBuilding = false;
      if(knockback == null) knockback = 0.0;
      if(recoil == null) recoil = 0.0;
      if(fragAmt == null) fragAmt = 7;
      if(fragDmg == null) fragDmg = 40.0;
      if(fragRad == null) fragRad = 40.0;
      if(fragSpeed == null) fragSpeed = speed;
      if(fragSpr == null) fragSpr = "reind-bul-bullet5";
      if(fragPierceCap == null) fragPierceCap = -1;
      if(fragPiercesBuilding == null) fragPiercesBuilding = false;

      const bul = extend(BasicBulletType, {
        despawnHit: true,
        lifetime: rad / speed, speed: speed, range: rad, damage: dmg, buildingDamageMultiplier: bdmgMtp, hitSize: 6.0 * sizeScl,
        collides: true, collidesAir: false, collidesGround: true, collideTerrain: true,
        sprite: spr, layer: VAR.layer_bullet, frontColor: Color.white, backColor: color, hitColor: color,
        width: 9.0 * sizeScl, height: 18.0 * sizeScl, lightRadius: -1.0, lightOpacity: 0.0, hitShake: shake, despawnShake: 0.0,
        shootEffect: new MultiEffect(Fx.shootSmallColor, db_effect._sniperSmog()),
        smokeEffect: Fx.none,
        chargeEffect: Fx.none,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.none,
        trailEffect: db_effect._trailFade("reind-efr-sniper-wave", 0.22222222, 18.0, Color.valueOf("ffffffa0"), false, false), trailInterval: 0.5, trailRotation: true,
        hitSound: Sounds.none, despawnSound: Sounds.none,
        pierce: pierceCap > 0, pierceBuilding: piercesBuilding, pierceCap: pierceCap, pierceDamageFactor: 0.0,
        knockback: knockback, impact: true, recoil: recoil,
        fragBullets: fragAmt, fragOnHit: false, fragOnAbsorb: true, fragRandomSpread: 60.0, fragSpread: 0.0, fragAngle: 0.0, fragVelocityMin: 1.0 - fragOffSpeed, fragVelocityMax: 1.0 + fragOffSpeed, fragLifeMin: 1.0, fragLifeMax: 1.0,
        fragBullet: extend(BasicBulletType, {
          despawnHit: true,
          lifetime: fragRad / fragSpeed, speed: fragSpeed, range: fragRad, damage: fragDmg, buildingDamageMultiplier: bdmgMtp, hitSize: 3.0 * sizeScl,
          collides: true, collidesAir: false, collidesGround: true, collideTerrain: true,
          sprite: fragSpr, layer: VAR.layer_bullet, frontColor: Color.white, backColor: color, hitColor: color,
          width: 4.0 * sizeScl, height: 4.0 * sizeScl, lightRadius: -1.0, lightOpacity: 0.0, hitShake: 0.0, despawnShake: 0.0,
          shootEffect: Fx.none,
          chargeEffect: Fx.none,
          hitEffect: Fx.hitBulletColor,
          despawnEffect: Fx.none,
          trailColor: Color.valueOf("ffffff20"), trailLength: 6, trailWidth: 2.0,
          hitSound: Sounds.none, despawnSound: Sounds.none,
          pierce: fragPierceCap > 0, pierceBuilding: fragPiercesBuilding, pierceCap: fragPierceCap, pierceDamageFactor: 0.0,
        }),
      });

      ax_setBullet(utp, ids_gn, bul);
    };
    exports.__sniper = __sniper;


    const __grenade = function(utp, ids_gn, sDmg, sDmgRad, bdmgMtp, rad, speed, spr, color, sizeScl, shake, knockback, recoil, sta) {
      if(sDmg == null) sDmg = 40.0;
      if(sDmgRad == null) sDmgRad = 40.0;
      if(bdmgMtp == null) bdmgMtp = 1.0;
      if(rad == null) rad = 80.0;
      if(speed == null) speed = 4.0;
      if(spr == null) spr = "reind-bul-bullet5";
      if(color == null) color = Pal.techBlue;
      if(sizeScl == null) sizeScl = 1.0;
      if(shake == null) shake = 0.0;
      if(recoil == null) recoil = 0.0;
      if(sta == null) sta = StatusEffects.blasted;

      const bul = extend(ArtilleryBulletType, {
        despawnHit: true,
        lifetime: rad / speed, speed: speed, range: rad, splashDamage: sDmg, splashDamageRadius: sDmgRad, scaledSplashDamage: true, splashDamagePierce: false, buildingDamageMultiplier: bdmgMtp, hitSize: 6.0 * sizeScl,
        collides: false, collidesAir: false, collidesGround: true,
        sprite: spr, layer: VAR.layer_bulletHigh, frontColor: Color.white, backColor: color, hitColor: color,
        width: 14.0 * sizeScl, height: 14.0 * sizeScl, lightRadius: -1.0, lightOpacity: 0.0, hitShake: shake, despawnShake: shake,
        shootEffect: new MultiEffect(Fx.shootSmallColor, db_effect._launcherSmog()),
        smokeEffect: Fx.none,
        chargeEffect: Fx.none,
        hitEffect: Fx.none,
        despawnEffect: db_effect._commonExplosion(sDmgRad),
        trailEffect: db_effect._smoke(24.0, 1.0, color), trailInterval: 2.0, trailRotation: false, trailInterp: Interp.pow5In,
        hitSound: Sounds.none, despawnSound: ax_sound("se-shot-explosion"),
        knockback: knockback, impact: false, recoil: recoil,
        status: sta,


        trailEff: db_effect._craftGas(0.3),


        draw(bul) {
          this.super$draw(bul);

          mdl_effect.showAtP(0.5, bul, this.trailEff, 0.0);
        },


        hit(bul) {
          this.super$hit(bul, bul.x, bul.y);

          mdl_game._unitsEnemy(bul, sDmgRad, bul.team).forEach(unit => {
            mdl_unit.knockback(unit, bul, this.knockback, this.splashDamageRadius);
          });
        },


      });

      ax_setBullet(utp, ids_gn, bul);
    };
    exports.__grenade = __grenade;


    const __torch = function(utp, ids_gn, dps, bdmgMtp, rad, colors, color, sizeScl, shake, pierceCap, piercesBuilding, knockback, recoil, sta) {
      if(dps == null) dps = 1.0;
      if(bdmgMtp == null) bdmgMtp = 1.0;
      if(rad == null) rad = 40.0;
      if(colors == null) colors = [Color.valueOf("bc5452"), Color.valueOf("ea8878"), Color.valueOf("feb380"), Color.valueOf("ffe2cd"), Color.valueOf("ffffff")];
      if(color == null) color = Color.valueOf("feb380");
      if(sizeScl == null) sizeScl = 1.0;
      if(shake == null) shake = 0.0;
      if(pierceCap == null) pierceCap = -1;
      if(piercesBuilding == null) piercesBuilding = true;
      if(knockback == null) knockback = 0.0;
      if(recoil == null) recoil = 0.0;
      if(sta == null) sta = StatusEffects.melting;

      const bul = extend(ContinuousFlameBulletType, {
        despawnHit: false,
        lifetime: 15.0, speed: 0.0, range: rad, damage: dps * 5.0 / 60.0, damageInterval: 5.0, buildingDamageMultiplier: bdmgMtp, optimalLifeFract: 0.5, hitSize: 4.0 * sizeScl,
        collides: false, collidesAir: false, collidesGround: true,
        layer: VAR.layer_bullet, colors: colors, hitColor: color, width: 3.5 * sizeScl, length: rad, oscScl: 1.2, oscMag: 0.05,
        drawFlare: false, flareLayer: VAR.layer_bullet + 0.0001, flareColor: color, flareWidth: 3.5, flareLength: 30.0, flareInnerLenScl: 0.5, rotateFlare: true, flareRotSpeed: 0.8,
        lightRadius: -1.0, lightOpacity: 0.65, lightStroke: 40.0, shake: shake,
        shootEffect: Fx.none,
        smokeEffect: Fx.none,
        chargeEffect: Fx.none,
        hitEffect: Fx.hitFlameBeam,
        despawnEffect: Fx.none,
        hitSound: Sounds.none, despawnSound: Sounds.none,
        pierceArmor: true,
        pierce: pierceCap > 0, pierceBuilding: piercesBuilding, pierceCap: pierceCap, pierceDamageFactor: 0.0,
        knockback: knockback, impact: true, recoil: 0.0,
        status: sta, statusDuration: 300.0,


        trailEff: db_effect._craftGas(0.1),


        draw(bul) {
          this.super$draw(bul);

          mdl_effect.showAtP(0.5, bul, this.trailEff, 0.0);
        },


      });

      ax_setBullet(utp, ids_gn, bul);
    };
    exports.__torch = __torch;
  // End
