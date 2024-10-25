// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_fluid = require("db/db_fluid");
    const db_heat = require("db/db_heat");
    const db_power = require("db/db_power");
  // End


  // Start: Short-circuit
    const stat_causesShortCircuit = new Stat("reind-stat-causes-short-circuit.name", StatCat.function);

    function setStats_shortCircuit(obj) {
      obj.stats.add(stat_causesShortCircuit, true);
    };

    Events.run(ClientLoadEvent, () => {
      const list_liquidConductive = db_fluid.liquidConductive;
      for(let i = 0; i < list_liquidConductive.size; i++) {
        var target = Vars.content.liquid(list_liquidConductive.get(i));
        if(target != null) {
          setStats_shortCircuit(target);
        };
      };
    });

    const effect_shortCircuit = extend(ParticleEffect, {
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

    function update_shortCircuit(obj, puddle) {
      if(!db_fluid.liquidConductive.contains(obj.name.toString())) return;

      // Liquid spreads to batteries or resistence components around it
      for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          var t = puddle.tile.nearby(i, j);
          if(t != null && t.build != null && (t.build instanceof Battery.BatteryBuild || t.build.block.name.includes("resistence")) && t.build.power.status > 0.0 && (!db_power.waterProof.contains(t.build.block.name))) {
            Puddles.deposit(t, obj, Time.delta * 0.06);
          };
        };
      };

      // Liquid damages building when on it
      if(puddle.tile.build != null && (puddle.tile.build instanceof Battery.BatteryBuild || puddle.tile.build.block.name.includes("resistence")) && puddle.tile.build.power.status > 0.0 && !db_power.waterProof.contains(puddle.tile.build.block.name)) {
        puddle.tile.build.damage(Time.delta * 0.2);
        if(Mathf.chance(Time.delta * 0.08)) {
          effect_shortCircuit.at(puddle.tile.x * Vars.tilesize, puddle.tile.y * Vars.tilesize, Mathf.random() * 360.0);
        };
      };
    };
  // End


  // Start: Corrosion
    const stat_corrosionPower = new Stat("reind-stat-corrosion-power.name", StatCat.function);

    function setStats_corrosion(obj, param) {
      obj.stats.add(stat_corrosionPower, param * 1000, StatUnit.percent);
    };

    Events.run(ClientLoadEvent, () => {
      const list_corrosionPower = db_fluid.corrosionPower;
      for(let i = 0; i < list_corrosionPower.size - 1; i++) {
        if(typeof list_corrosionPower.get(i) == "string") {
          var target = Vars.content.liquid(list_corrosionPower.get(i));
          if(target != null) {
            setStats_corrosion(
              target,
              list_corrosionPower.get(i + 1),
            );
          };
        };
      };
    });
  // End


  // Start: Heat Level
    /* Heat detection is done in buildings */
    const stat_heatLevel = new Stat("reind-stat-heat-level.name", StatCat.function);

    function setStats_heatLevel(obj, param) {
      obj.stats.add(stat_heatLevel, param);
    };

    Events.run(ClientLoadEvent, () => {
      const list_heatLevel = db_heat.heatLevel;
      for(let i = 0; i <= list_heatLevel.size - 1; i++) {
        if(typeof list_heatLevel.get(i) == "string") {
          var target = Vars.content.liquid(list_heatLevel.get(i));
          if(target != null) {
            setStats_heatLevel(
              target,
              list_heatLevel.get(i + 1),
            );
          };
        };
      };
    });
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function update_extra(obj, puddle) {
      update_shortCircuit(obj, puddle);
    };

    function setStats_extra(obj) {

    };
  // End


  // Start: Region
    /* liq-ore */
    const liqOre_water = extend(Liquid, "liq-ore-water", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqOre_water = liqOre_water;


    const liqOre_waterSea = extend(Liquid, "liq-ore-water-sea", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqOre_waterSea = liqOre_waterSea;


    const liqOre_brine = extend(Liquid, "liq-ore-brine", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqOre_brine = liqOre_brine;


    /* liq-bio */
    const liqBio_latex = extend(Liquid, "liq-bio-latex", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqBio_latex = liqBio_latex;


    /* liq-was */
    const liqWas_wasteWater = extend(Liquid, "liq-was-waste-water", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqWas_wasteWater = liqWas_wasteWater;


    /* liq-int */
    const liqInt_brinePurified = extend(Liquid, "liq-int-brine-purified", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_brinePurified = liqInt_brinePurified;


    const liqInt_glassMelt = extend(Liquid, "liq-int-glass-melt", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_glassMelt = liqInt_glassMelt;


    const liqInt_solutionSodiumHydroxide = extend(Liquid, "liq-int-solution-sodium-hydroxide", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_solutionSodiumHydroxide = liqInt_solutionSodiumHydroxide;


    const liqInt_solutionSuspensionLimeSodiumHydroxide = extend(Liquid, "liq-int-solution-suspension-lime-sodium-hydroxide", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_solutionSuspensionLimeSodiumHydroxide = liqInt_solutionSuspensionLimeSodiumHydroxide;


    /* gas-chem */
    const gasChem_ammonia = extend(Liquid, "gas-chem-ammonia", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_ammonia = gasChem_ammonia;


    const gasChem_carbonDioxide = extend(Liquid, "gas-chem-carbon-dioxide", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_carbonDioxide = gasChem_carbonDioxide;


    const gasChem_chlorine = extend(Liquid, "gas-chem-chlorine", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_chlorine = gasChem_chlorine;


    const gasChem_sulfurDioxide = extend(Liquid, "gas-chem-sulfur-dioxide", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_sulfurDioxide = gasChem_sulfurDioxide;


    const gasChem_sulfurTrioxide = extend(Liquid, "gas-chem-sulfur-trioxide", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_sulfurTrioxide = gasChem_sulfurTrioxide;


    /* gas-misc*/
    const gasMisc_steam = extend(Liquid, "gas-misc-steam", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasMisc_steam = gasMisc_steam;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_fluid.js loaded.");
});
