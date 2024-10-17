// Checked on 10-11-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const ct_status = require("ct/ct_status");
    const db_ability = require("db/db_ability");
    const db_ai = require("db/db_ai");
    const db_pollution = require("db/db_pollution");
    const db_tree = require("db/db_tree");
    const db_unit = require("db/db_unit");
    const module_pollution = require("module/module_pollution");
  // End


  // Start: Heat Damage
    const effect_heatMelt = extend(ParticleEffect, {
      lifetime: 40.0,
      particles: 4,
      colorFrom: Color.valueOf("ffffffc0"),
      colorTo: Color.valueOf("ffffff00"),
      length: 12.0,
      sizeFrom: 0.0,
      sizeTo: 3.0,
      strokeFrom: 2.0,
      strokeTo: 0.0,
      lenFrom: 4.0,
      lenTo: 2.0,
    });


    function update_heatDamage(obj, unit) {
      // Flying units suffer nothing
      if(unit.flying) return;
      var t = Vars.world.tile(unit.tileX(), unit.tileY());
      var heat = 0.0;
      var heatOther = 0.0;
      if(t != null && t.build != null && t.build.heat != null) {
        heat = t.build.heat;
      };

      // Check 8 tiles near it
      for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
          if(t != null && t.nearby(i,j) != null && t.nearby(i,j).build != null && t.nearby(i,j).build.heat != null) {
            heatOther += t.nearby(i,j).build.heat;
          };
        };
      };
      heatOther /= 8.0;
      heat += heatOther;

      // If total heat < 10.0, no damage
      if(heat > 10.0) {
        var damage = 60.0;
        damage += unit.maxHealth * 0.0005;

        // Legs units suffer less?
        if(obj.sample instanceof Legsc) damage /= 2.5;
        unit.damage(Time.delta * damage * heat / 60.0, false);

        // If heat is over this, apply melting status
        var meltLimit = unit.maxHealth / 200.0 + 10.0;
        if(heat > meltLimit) {
          unit.apply(StatusEffects.melting, ((heat - meltLimit) / meltLimit * 8.0 + 2.0) * 60.0);
          if(Mathf.chance(Time.delta * 0.08)) {
            effect_heatMelt.at(unit.x, unit.y, Mathf.random() * 360.0);
          };
        };
      };
    };
  // End


  // Start: Floor
    /* Well, some blocks included */
    function update_floor(obj, unit) {
      if(unit.flying || Mathf.chance(0.9)) return;
      var t = Vars.world.tile(unit.tileX(), unit.tileY());

      // Tree detection
      var ot;
      var range = 4;       /* Won't change for tree types, which only causes lag */
      var list1 = db_tree.treeLayer;
      for(let i = -range; i <= range; i++) {
        for(let j = -range; j <= range; j++) {
          if(t != null) {
            ot = t.nearby(i, j);
            if(ot != null && ot.block() != null && ot.block().name.toString().includes("prop-tree")) {
              var z = Layer.power + 1;
              for(let k = 0; k < list1.size - 1; k++) {
                if(ot.block().name.toString() == list1.get(k)) {
                  z = list1.get(k + 1);
                };
              };
              if(z > 76.0) {
                unit.apply(ct_status.staSpec_hiddenWell, 60.0);
              };
            };
          };
        };
      };

      // Generic Floor Detection
      if(t != null) {
        var name1 = null;
        var name2 = null;
        if(t.floor() != null) {
          name1 = t.floor().name;
        };
        if(t.block() != null) {
          name2 = t.block().name;
        };
        if(name2 != null && name2.includes("eff-flr")) {
          // Floor Bonus
          unit.apply(ct_status.staSpec_onFloor, 60.0);
        };
        if(name1 != null && name1.includes("quicksand")) {
          // Quicksand
          unit.apply(ct_status.staSpec_quicksand, 60.0);
        };
      };
    };
  // End


  // Start: Pollution
    const stat_unitPollutionTolerance = new Stat("reind-stat-unit-pollution-tolerance.name", StatCat.function);


    function setStats_pollution(obj, param) {
      obj.stats.add(stat_unitPollutionTolerance, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_pollutionUnit = db_pollution.pollutionUnit;
      for(let i = 0; i < list_pollutionUnit.size - 1; i++) {
        if(typeof list_pollutionUnit.get(i) == "string") {
          var target = Vars.content.unit(list_pollutionUnit.get(i));
          if(target != null) {
            setStats_pollution(
              target,
              list_pollutionUnit.get(i + 1),
            );
          };
        };
      };
    });


    function update_pollution(obj, unit) {
      if(Mathf.chance(0.996)) return;
      var pollution = module_pollution.worldPP;
      var upt = 1200.0

      // Get unit pollution tolerance
      var list = db_pollution.pollutionUnit;
      for(let i = 0; i < list.size - 1; i++) {
        if(obj.name.toString() == list.get(i)) {
          upt = list.get(i + 1);
        };
      };

      // Apply status based on pollution level
      if(pollution >= upt) {
        unit.apply(ct_status.staSpec_contaminated, 600.0);
      } else if(pollution >= upt / 2.0) {
        unit.apply(ct_status.staSpec_contaminatedMildly, 600.0);
      };
    };
  // End


  // Start: Rotor
    /* For helicopter & done units */
    const effect_rotor = extend(WaveEffect, {
      layer: Layer.floor + 0.0001,
      lifetime: 15.0,
      sides: -1,
      colorFrom: Color.valueOf("ffffff38"),
      colorTo: Color.valueOf("ffffff00"),
      sizeFrom: 0.0,
      sizeTo: 40.0,
      strokeFrom: 4.0,
      strokeTo: 4.0,
    });


    function update_rotor(obj, unit) {
      if(!db_unit.helicopter.contains(obj.name)) return;
      if(Mathf.chance(Time.delta * 0.25)) {
        effect_rotor.at(unit.x, unit.y, 0.0);
      };

      // Rotate rotor mounts every frame
      for(let i = 0; i < obj.weapons.size; i++) {
        var target = unit.mounts[i];
        if(target.weapon.name.includes("rotator")) {
          target.rotation += Time.delta * 15;
          if(target.rotation > 360.0) target.rotation %= 360;
        };
      };
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function update_extra(obj, unit) {
      update_heatDamage(obj, unit);
      update_floor(obj, unit);
      update_pollution(obj, unit);
      update_rotor(obj, unit);
    };


    function setStats_extra(obj) {

    };
  // End


  // Start: Region
    /* unit-core */
    const unitCore_expeditionI = extend(UnitType, "unit-core-c1-expedition-i", {
      update(unit) {
        this.super$update(unit);
        update_extra(this, unit);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    unitCore_expeditionI.constructor = () => extend(LegsUnit, {});
    exports.unitCore_expeditionI = unitCore_expeditionI;
    db_ability.abiAdd_lightningArcGenerator(unitCore_expeditionI, 42.0, 0.015, 3, Pal.techBlue, 0.2);


    /* unit-spec */
    const unitSpec_cargoDrone = extend(UnitType, "unit-spec-cargo-drone", {
      update(unit) {
        this.super$update(unit);
        update_extra(this, unit);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    unitSpec_cargoDrone.constructor = () => extend(BuildingTetherPayloadUnit, {});
    exports.unitSpec_cargoDrone = unitSpec_cargoDrone;
    db_ai.aiAdd_cargoAi(unitSpec_cargoDrone);
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_unit.js loaded.");
});
