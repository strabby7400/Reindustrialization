// Checked on 10-11-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_blk_boiler = require("db/db_blk_boiler");
  // End


  // Start: Insufficient Input Explosion
    const stat_canExplode = new Stat("reind-stat-can-explode.name", StatCat.function);
    const stat_crucialInput = new Stat("reind-stat-crucial-input.name", StatCat.function);
    const stat_crucialOutput = new Stat("reind-stat-crucial-output.name", StatCat.function);
    const stat_criticalHealth = new Stat("reind-stat-critical-health.name", StatCat.function);


    const effect_boilerExplosionWave1 = extend(WaveEffect, {
      lifetime: 60.0,
      sides: -1,
      colorFrom: Color.valueOf("202020ff"),
      colorTo: Color.valueOf("20202000"),
      sizeFrom: 0.0,
      sizeTo: 96.0,
      strokeFrom: 8.0,
      strokeTo: 8.0,
    });

    const effect_boilerExplosionWave2 = extend(WaveEffect, {
      lifetime: 75.0,
      sides: -1,
      colorFrom: Color.valueOf("202020ff"),
      colorTo: Color.valueOf("20202000"),
      sizeFrom: 0.0,
      sizeTo: 96.0,
      strokeFrom: 8.0,
      strokeTo: 8.0,
    });

    const effect_boilerExplosionWave = new MultiEffect(
      effect_boilerExplosionWave1,
      effect_boilerExplosionWave2,
      new WrapEffect(Fx.titanSmoke, Color.valueOf("cce4ff")),
    );

    const effect_boilerCriticalCrack = extend(ParticleEffect, {
      region: "reind-efr-diamond",
      lifetime: 30.0,
      particles: 1,
      colorFrom: Color.valueOf("ffd37f"),
      colorTo: Color.valueOf("ffd37f"),
      length: 24.0,
      sizeFrom: 4.0,
      sizeTo: 0.0,
      sizeInterp: Interp.sine,
      strokeFrom: 2.0,
      strokeTo: 0.0,
      lenFrom: 4.0,
      lenTo: 2.0,
    });

    const bullet_boilerExplosion = extend(ExplosionBulletType, {
      despawnEffect: effect_boilerExplosionWave,
      collides: true,
      collidesAir: true,
      collidesGround: true,
      despawnHit: true,
      splashDamage: 1080.0,
      splashDamageRadius: 64.0,
      status: StatusEffects.blasted,
    });


    function setStats_boiler(obj, liq1, liq2, crhp) {
      obj.stats.add(stat_canExplode, true);
      obj.stats.add(stat_crucialInput, liq1);
      obj.stats.add(stat_crucialOutput, liq2);
      obj.stats.addPercent(stat_criticalHealth, crhp);
    };


    Events.run(ClientLoadEvent, () => {
      const list_boiler = db_blk_boiler.boiler;
      for(let i = 0; i < list_boiler.size - 3; i++) {
        if(typeof list_boiler.get(i) == "string" && typeof list_boiler.get(i + 1) == "string" && typeof list_boiler.get(i + 2) == "string") {
          var target = Vars.content.block(list_boiler.get(i));
          var liq1 = Vars.content.liquid(list_boiler.get(i + 1));
          var liq2 = Vars.content.liquid(list_boiler.get(i + 2));
          var crhp = list_boiler.get(i + 3);
          if(target != null && liq1 != null && liq2 != null && crhp > 0) {
            setStats_boiler(target, liq1, liq2, crhp);
          };
        };
      };
    });


    function damageBoiler(obj, crhp) {
      obj.damage(Time.delta * 0.75);
      if(Mathf.chance(Time.delta * 0.2)) {
        effect_boilerCriticalCrack.at(obj.x, obj.y, Mathf.random() * 360.0);
      };

      // Create explosion
      if(obj.health / obj.maxHealth < crhp) {
        bullet_boilerExplosion.create(obj, Team.derelict, obj.x, obj.y, Mathf.random() * 360.0);
      };
    };


    function update_boiler(obj) {
      var liq1 = "water";
      var liq2 = "slag";
      var crhp = 0.0001;
      var list = db_blk_boiler.boiler;
      for(let i = 0; i < list.size - 3; i++) {
        if(obj.block.name.toString() == list.get(i)) {
          liq1 = Vars.content.liquid(list.get(i + 1));
          liq2 = Vars.content.liquid(list.get(i + 2));
          crhp = list.get(i + 3);
        };
      };
      if(liq1 == null || liq2 == null || crhp <= 0) return;
      var amount1 = obj.liquids.get(liq1);
      var amount2 = obj.liquids.get(liq2);

      // No input && heated
      if(amount1 < 1.0 && obj.heat > 0) {
        obj.tag1 = true;
      };

      // Input when dangerous
      if(amount1 >= 1.0 && obj.tag1 && obj.heat > 0) {
        damageBoiler(obj, crhp);
      };

      // Cancel dangerous
      if(obj.heat == 0 && obj.tag1) {
        obj.tag1 = false;
      };

      // No output
      if(amount2 > obj.block.liquidCapacity / 2 && obj.heat > 0) {
        damageBoiler(obj, crhp);
      };
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function setStats_extra(obj) {

    };


    function updateTile_extra(obj) {
      update_boiler(obj);
    };
  // End


  // Start: Region
    /* pow-stm */
    const powStm_steamBoiler = extend(HeatCrafter, "pow-stm-steam-boiler", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Icon fix
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
    });
    powStm_steamBoiler.buildType = () => extend(HeatCrafter.HeatCrafterBuild, powStm_steamBoiler, {
      tag1: false,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.powStm_steamBoiler = powStm_steamBoiler;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_boiler.js loaded.");
});
