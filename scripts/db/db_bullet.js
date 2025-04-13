/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_effect = require("reind/mdl/mdl_effect");

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
    const __basic = function(utp, ids_gn, dmg, bdmgMtp, rad, speed, spr, color, sizeScl, shake, pierceCap, piercesBuilding, knockback, recoil) {
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

      const bul = extend(BasicBulletType, {
        despawnHit: true,
        lifetime: rad / speed, speed: speed, range: rad, damage: dmg, buildingDamageMultiplier: bdmgMtp, hitSize: 4.0 * sizeScl,
        collides: true, collidesAir: false, collidesGround: true, collideTerrain: true,
        sprite: spr, layer: VAR.layer_bullet, frontColor: Color.white, backColor: color, hitColor: color,
        width: 5.0 * sizeScl, height: 10.0 * sizeScl, lightRadius: -1.0, lightOpacity: 0.0, hitShake: shake, despawnShake: 0.0,
        shootEffect: new MultiEffect(Fx.shootSmallColor, db_effect._gunSmog()),
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
        fragBullets: fragAmt, fragOnHit: false, fragOnAbsorb: true, fragRandomSpread: 360.0, fragSpread: 0.0, fragAngle: 0.0, fragVelocityMin: 1.0 - fragOffSpeed, fragVelocityMax: 1.0 + fragOffSpeed, fragLifeMin: 1.0, fragLifeMax: 1.0,
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


    const __grenade = function(utp, ids_gn, sDmg, sDmgRad, bdmgMtp, rad, speed, spr, color, sizeScl, shake, recoil, sta) {
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
        knockback: 0.0, impact: false, recoil: recoil,
        status: sta,


        trailEff: db_effect._craftGas(0.3),


        draw(bul) {
          this.super$draw(bul);

          mdl_effect.showAtP(0.5, bul, this.trailEff, 0.0);
        },


      });

      ax_setBullet(utp, ids_gn, bul);
    };
    exports.__grenade = __grenade;
  // End
