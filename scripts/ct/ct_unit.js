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
    const db_infection = require("db/db_infection");
    const db_tree = require("db/db_tree");
    const db_unit = require("db/db_unit");
    const module_pollution = require("module/module_pollution");
  // End


  // Start: Low Detail
    var low_detail = false;
    const setLDM_unit = function(bool) {
      low_detail = bool;
    };
    exports.setLDM_unit = setLDM_unit;
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
      if(t == null) return;

      var heat = 0.0;
      var ot;
      for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          ot = t.nearby(i, j);
          if(ot != null) {
            // Floor
            if(ot.floor() != null) {
              var attr = ot.floor().attributes.get(Attribute.get("attr-env-heat"));
              heat += attr * 10.0;
            };

            // Build
            if(ot.build != null && ot.build.heat != null) {
              heat += ot.build.heat;
            };
          };
        };
      };
      heat /= 4.5;

      if(heat > 10.0) {
        var damage = 60.0;
        damage += unit.maxHealth * 0.0005;

        // Legs units suffer less?
        if(obj.sample instanceof Legsc) damage /= 2.5;

        unit.damage(Time.delta * damage * heat / 60.0, false);

        // Melting
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
      if(Mathf.chance(0.9)) return;
      var t = Vars.world.tile(unit.tileX(), unit.tileY());

      var ot;
      var range = 4;
      var list1 = db_tree.treeLayer;
      var list2 = db_infection.infectionBlock;
      var onFloor = !unit.flying && !db_unit.hovercraft.contains(unit.type.name);

      // Range detection
      for(let i = -range; i <= range; i++) {
        for(let j = -range; j <= range; j++) {
          if(t != null) {
            ot = t.nearby(i, j);
            if(ot != null) {
              // For floors
              if(ot.floor() != null) {};

              // For blocks
              if(ot.block() != null) {
                // Tree detection
                if(!unit.flying && ot.block().name.includes("prop-tree")) {
                  var z = Layer.power + 1;
                  for(let k = 0; k < list1.size - 1; k++) {
                    if(ot.block().name.toString() == list1.get(k)) {
                      z = list1.get(k + 1);
                    };
                  };

                  // Over 80.0 implies not enough leaves
                  if(z > 76.0 && z < 80.0) {
                    unit.apply(ct_status.staSpec_hiddenWell, 60.0);
                  };
                };

                // Infection detection
                var infectChance = 0.0;
                for(let i = 0; i < list2.size - 1; i++) {
                  if(ot.block().name == list2.get(i)) {
                    infectChance = list2.get(i + 1);
                  };
                };
                if(infectChance > 0.0 && Mathf.chance(infectChance)) {
                  unit.apply(ct_status.staSpec_parasite, 1800.0);
                };
              };
            };
          };
        };
      };

      // Generic floor detection
      if(t != null) {
        var name1 = null;
        var name2 = null;
        if(t.floor() != null) {
          name1 = t.floor().name;
        };
        if(t.block() != null) {
          name2 = t.block().name;
        };

        if(onFloor && name2 != null && name2.includes("eff-flr")) {
          // Floor Bonus
          unit.apply(ct_status.staSpec_onFloor, 60.0);
        };
        if(onFloor && name1 != null && name1.includes("quicksand")) {
          // Quicksand
          unit.apply(ct_status.staSpec_quicksand, 60.0);
        };
      };
    };
  // End


  // Start: Pollution
    const stat_unitPollutionTolerance = new Stat("reind-stat-unit-pollution-tolerance.name", StatCat.function);


    function modifyStats_pollution(obj, param) {
      obj.stats.add(stat_unitPollutionTolerance, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_pollutionUnit = db_unit.pollutionUnit;
      for(let i = 0; i < list_pollutionUnit.size - 1; i++) {
        if(typeof list_pollutionUnit.get(i) == "string") {
          var target = Vars.content.unit(list_pollutionUnit.get(i));
          if(target != null) {
            modifyStats_pollution(target, list_pollutionUnit.get(i + 1));
          };
        };
      };
    });


    function update_pollution(obj, unit) {
      if(Mathf.chance(0.996)) return;
      var pollution = module_pollution.worldPP;
      var upt = 1200.0

      // Get unit pollution tolerance
      var list = db_unit.pollutionUnit;
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
    /* For helicopter & drone units */
    const effect_rotor = extend(WaveEffect, {
      layer: Layer.floor + 0.01,
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
      if(!low_detail && Mathf.chance(Time.delta * 0.25)) {
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


  // Start: Heart
    /* For parasite units normally */
    function update_heart(obj, unit) {
      if(!db_unit.heart.contains(obj.name)) return;

      for(let i = 0; i < obj.weapons.size; i++) {
        var target = unit.mounts[i];
        if(target.weapon.name.includes("heart")) {
          if(target.recoil <= 0.0) {
            target.recoil = 1.0;
          };
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
      update_heart(obj, unit);
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
    db_ability.modifyAbilities_lightningArcGenerator(unitCore_expeditionI, 42.0, 0.015, 3, Pal.techBlue, 0.3);


    const unitCore_expeditionII = extend(UnitType, "unit-core-c2-expedition-ii", {
      update(unit) {
        this.super$update(unit);
        update_extra(this, unit);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    unitCore_expeditionII.constructor = () => extend(PayloadUnit, {});
    exports.unitCore_expeditionII = unitCore_expeditionII;


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
    db_ai.modifyAI_cargoAI(unitSpec_cargoDrone);


    /* unit-inf */
    const unitInf_ast1_74ka = extend(UnitType, "unit-inf-ast1-74ka", {
      update(unit) {
        this.super$update(unit);
        update_extra(this, unit);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    unitInf_ast1_74ka.constructor = () => extend(MechUnit, {});
    exports.unitInf_ast1_74ka = unitInf_ast1_74ka;


    /* unit-para */
    const unitPara_llomea = extend(UnitType, "unit-para-llomea", {
      update(unit) {
        this.super$update(unit);
        update_extra(this, unit);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    unitPara_llomea.constructor = () => extend(LegsUnit, {});
    exports.unitPara_llomea = unitPara_llomea;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_unit.js loaded.");
});
