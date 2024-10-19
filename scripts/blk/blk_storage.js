// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const ct_effc = require("ct/ct_effc");
    const db_core = require("db/db_core");
    const db_item = require("db/db_item");
  // End


  // Start: Virtual Item
    const effect_itemVirt = extend(ParticleEffect, {
      region: "reind-efr-cross",
      lifetime: 90.0,
      particles: 1,
      colorFrom: Color.valueOf("ff0000ff"),
      colorTo: Color.valueOf("ff000000"),
      length: 0.0,
      sizeFrom: 6.0,
      sizeTo: 6.0,
      strokeFrom: 0.0,
      strokeTo: 0.0,
      lenFrom: 0.0,
      lenTo: 0.0,
    });


    function update_itemVirt(obj) {
      // Only core can store virtual items
      if(obj.block instanceof CoreBlock) return;

      const list = db_item.itemVirt;
      for(let i = 0; i < list.size; i++) {
        var target = Vars.content.item(list.get(i));
        if(target == null) return;
        if(obj.items.get(target) > 0) {
          obj.damage(Time.delta * 666666.0);
          effect_itemVirt.at(obj.x, obj.y, 0.0);
          var ui1 = new UI();
          ui1.showInfoFade("@info.reind-virt-no-conveyor.name", 2.0);
        };
      };
    };
  // End


  // Start: Core Effc
    const statCoreEffc = new Stat("reind-core-efficiency-output.name", StatCat.function);


    const effc = ct_effc.effcEffc_core;


    function setStats_coreEffc(obj, param) {
      obj.stats.add(statCoreEffc, param, StatUnit.perSecond);
    };


    Events.run(ClientLoadEvent, () => {
      const list_coreEffc = db_core.coreEffc;
      for(let i = 0; i < list_coreEffc.size - 1; i++) {
        if(typeof list_coreEffc.get(i) == "string") {
          var target = Vars.content.block(list_coreEffc.get(i));
          if(target != null) {
            setStats_coreEffc(
              target,
              list_coreEffc.get(i + 1),
            );
          };
        };
      };
    });


    function updateTile_coreEffc(obj) {
      if(!obj.block.name.toString().includes("eff-core")) return;
      var coreEffc = 1.0;
      var list = db_core.coreEffc;
      for(let i = 0; i < list.size - 1; i++) {
        if(obj.block.name.toString() == list.get(i)) {
          coreEffc = list.get(i + 1);
        };
      };
      var maxInc = Math.min(obj.block.liquidCapacity - obj.liquids.get(effc), coreEffc / 60.0 * Time.delta);
      obj.liquids.add(effc, maxInc);
      obj.dumpLiquid(effc);
    };
  // End


  // Start: Specific Function (Core: Ember)
    function setStats_coreEmber(obj) {
      obj.stats.add(Stat.damage, 300.0);
      obj.stats.add(Stat.range, 192.0 / Vars.tilesize, StatUnit.blocks);
      obj.stats.add(Stat.reload, 60.0 / 40.0, StatUnit.perSecond);
    };

    function drawPlace_coreEmber(obj, tx, ty, rotation, valid) {
      Drawf.dashCircle(tx * Vars.tilesize + obj.offset, ty * Vars.tilesize + obj.offset, 192.0, Pal.accent);
    };

    const effect_coreEmberWave1 = extend(WaveEffect, {
      lifetime: 20.0,
      sides: -1,
      colorFrom: Color.valueOf("202020ff"),
      colorTo: Color.valueOf("20202000"),
      sizeFrom: 0.0,
      sizeTo: 192.0,
      strokeFrom: 8.0,
      strokeTo: 8.0,
    });

    const effect_coreEmberWave2 = extend(WaveEffect, {
      lifetime: 30.0,
      sides: -1,
      colorFrom: Color.valueOf("202020ff"),
      colorTo: Color.valueOf("20202000"),
      sizeFrom: 0.0,
      sizeTo: 192.0,
      strokeFrom: 8.0,
      strokeTo: 8.0,
    });

    const effect_coreEmberWave3 = extend(WaveEffect, {
      lifetime: 40.0,
      sides: -1,
      colorFrom: Color.valueOf("202020ff"),
      colorTo: Color.valueOf("20202000"),
      sizeFrom: 0.0,
      sizeTo: 192.0,
      strokeFrom: 8.0,
      strokeTo: 8.0,
    });

    const effect_coreEmberWave4 = extend(WaveEffect, {
      lifetime: 50.0,
      sides: -1,
      colorFrom: Color.valueOf("202020ff"),
      colorTo: Color.valueOf("20202000"),
      sizeFrom: 0.0,
      sizeTo: 192.0,
      strokeFrom: 8.0,
      strokeTo: 8.0,
    });

    const effect_coreEmberImpact = new MultiEffect(
      effect_coreEmberWave1,
      effect_coreEmberWave2,
      effect_coreEmberWave3,
      effect_coreEmberWave4,
    );

    function updateTile_coreEmber(obj) {
      if((obj.reloadCounter += Time.delta) >= 40.0) {
        obj.targets.clear();
        Groups.bullet.intersect(obj.x - 192.0, obj.y - 192.0, 192.0 * 2, 192.0 * 2, bul => {
          if(bul.team != obj.team && bul.type.hittable) {
            obj.targets.add(bul);
          };
        });
        if(obj.targets.size > 0) {
          obj.heat = 1.0;
          obj.reloadCounter = 0.0;
          Fx.pointShockwave.at(obj.x, obj.y, 192.0, Pal.accent);
          effect_coreEmberImpact.at(obj.x, obj.y, 0.0);
          Core.assets.get("sounds/se-craft-drill-impact.ogg").at(obj);
          Effect.shake(2.0, 2.0, obj);
          var dmg = Math.min(160.0, 160.0 * 20.0 / obj.targets.size);
          for(let i = 0; i < obj.targets.size; i++) {
            var target = obj.targets.get(i);
            if(target.damage > dmg) {
              target.damage -= dmg;
            } else {
              target.remove();
            };
            Fx.hitSquaresColor.at(target.x, target.y, Pal.accent);
          };
          if(obj.team == Vars.state.rules.defaultTeam) {
            Events.fire(Trigger.shockwaveTowerUse);
          };
        };
      };
      obj.heat = Mathf.clamp(obj.heat - Time.delta / 80.0);
    };

    function draw_coreEmber(obj) {
      Drawf.additive(obj.heatRegion, Color.valueOf("ff3838"), obj.heat, obj.x, obj.y, 0.0, Layer.blockAdditive);
    };

    function drawSelect_coreEmber(obj) {
      Drawf.dashCircle(obj.x, obj.y, 192.0, Pal.accent);
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
      update_itemVirt(obj);
      updateTile_coreEffc(obj);
    };
  // End


  // Start: Region
    /* eff-stor */
    const effStor_Crate = extend(StorageBlock, "eff-stor-crate", {
      update: true,
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    effStor_Crate.buildType = () => extend(StorageBlock.StorageBuild, effStor_Crate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.effStor_Crate = effStor_Crate;


    /* eff-core */
    const effCore_ash = extend(CoreBlock, "eff-core-ash", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    effCore_ash.buildType = () => extend(CoreBlock.CoreBuild, effCore_ash, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.effCore_ash = effCore_ash;


    const effCore_ember = extend(CoreBlock, "eff-core-ember", {
      // Override
      setStats() {
        this.super$setStats();
        setStats_coreEmber(this);
        setStats_extra(this);
      },
      // Override
      drawPlace(x, y, rotation, valid){
        this.super$drawPlace(x, y, rotation, valid);
        drawPlace_coreEmber(this, x, y, rotation, valid);
      },
    });
    effCore_ember.buildType = () => extend(CoreBlock.CoreBuild, effCore_ember, {
      heat: 0.0,
      heatRegion: Core.atlas.find("reind-eff-core-ember-heat"),
      reloadCounter: Mathf.random(40.0),
      targets: new Seq(),
      // Override
      updateTile() {
        this.super$updateTile();
        updateTile_coreEmber(this);
        updateTile_extra(this);
      },
      // Override
      draw() {
        this.super$draw();
        draw_coreEmber(this);
      },
      // Override
      drawSelect() {
        this.super$drawSelect();
        drawSelect_coreEmber(this);
      },
    });
    exports.effCore_ash = effCore_ember;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_storage.js loaded.");
});
