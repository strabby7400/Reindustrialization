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


    function modifyStats_shortCircuit(obj) {
      obj.stats.add(stat_causesShortCircuit, true);
    };


    Events.run(ClientLoadEvent, () => {
      const list_liquidConductive = db_fluid.liquidConductive;
      for(let i = 0; i < list_liquidConductive.size; i++) {
        var target = Vars.content.liquid(list_liquidConductive.get(i));
        if(target != null) {
          modifyStats_shortCircuit(target);
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
      if(!Vars.state.rules.fire) return;
      if(!db_fluid.liquidConductive.contains(obj.name)) return;

      var t = puddle.tile;
      var ot;
      var b = puddle.tile.build;
      var ob;
      for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          ot = t.nearby(i, j);
          if(ot != null) ob = ot.build;

          // Spread to blocks
          if(ob != null && db_power.shortCircuit.contains(ob.block.name) && ob.power.status > 0.0) {
            Puddles.deposit(ot, obj, Time.delta * 0.1);
          };
          // Damage blocks
          if(b != null && db_power.shortCircuit.contains(b.block.name) && b.power.status > 0.0) {
            b.damage(Time.delta * 0.22);
            if(Mathf.chance(Time.delta * 0.08)) {
              effect_shortCircuit.at(t.worldx(), t.worldy(), Mathf.random(360.0));
            };
          };
        };
      };
    };
  // End


  // Start: Corrosion
    const stat_corrosionPower = new Stat("reind-stat-corrosion-power.name", StatCat.function);


    function modifyStats_corrosion(obj, param) {
      obj.stats.add(stat_corrosionPower, param * 1000, StatUnit.percent);
    };


    Events.run(ClientLoadEvent, () => {
      const list_corrosionPower = db_fluid.corrosionPower;
      for(let i = 0; i < list_corrosionPower.size - 1; i++) {
        if(typeof list_corrosionPower.get(i) == "string") {
          var target = Vars.content.liquid(list_corrosionPower.get(i));
          if(target != null) {
            modifyStats_corrosion(target, list_corrosionPower.get(i + 1));
          };
        };
      };
    });
  // End


  // Start: Heat Level
    /* Heat detection is done in buildings */
    const stat_heatLevel = new Stat("reind-stat-heat-level.name", StatCat.function);


    function modifyStats_heatLevel(obj, param) {
      obj.stats.add(stat_heatLevel, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_heatLevel = db_heat.heatLevel;
      for(let i = 0; i <= list_heatLevel.size - 1; i++) {
        if(typeof list_heatLevel.get(i) == "string") {
          var target = Vars.content.liquid(list_heatLevel.get(i));
          if(target != null) {
            modifyStats_heatLevel(target, list_heatLevel.get(i + 1));
          };
        };
      };
    });
  // End


  // Start: Specific Functions (Carnage Plasma)
    const list_carnageSpread = db_fluid.liquidAqueous;


    function update_carnagePlasma(obj, puddle) {
      if(!Vars.state.rules.fire || Mathf.chance(0.98)) return;
      var scl = Mathf.pow(Mathf.clamp(puddle.amount / Puddles.maxLiquid), 2.0);

      var t = puddle.tile;
      var ot;
      var op;
      var amt;
      for(let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          ot = t.nearby(i, j);
          op = Puddles.get(ot);

          // Spread to blocks
          if(ot != null && ot.build != null && ot.build.liquids != null && list_carnageSpread.contains(ot.build.liquids.current().name)) {
            amt = ot.build.liquids.get(ot.build.liquids.current());
            if(amt > 1.0) {
              Puddles.deposit(ot, obj, Time.delta * 1.5);
            };
          };

          // Converts puddles
          if(op != null && list_carnageSpread.contains(op.liquid.name)) {
            op.amount -= Time.delta * 3.0;
            if(op.amount <= Puddles.maxLiquid / 3.0) {
              op.remove();
              Puddles.deposit(t, ot, obj, Puddles.maxLiquid / 3.0);
            };
          };
        };
      };

      if(Mathf.chance(Time.delta * 0.005)) {
        Groups.unit.intersect(puddle.x - 48.0, puddle.y - 48.0, 48.0 * 2, 48.0 * 2, u => {
          u.apply(Vars.content.statusEffect("reind-sta-spec-parasite"), 1800.0);
        });
      };
    };


    function react_carnagePlasma(obj, other, amount, tile, x, y) {
      for(let i = 0; i < list_carnageSpread.size; i++) {
        if(other == list_carnageSpread.get(i)) {
          return amount;
        };
      };
      return 0.0;
    };
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


    /* liq-chem*/
    const liqChem_hydrochloricAcid = extend(Liquid, "liq-chem-hydrochloric-acid", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqChem_hydrochloricAcid = liqChem_hydrochloricAcid;


    const liqChem_sulfuricAcid = extend(Liquid, "liq-chem-sulfuric-acid", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqChem_sulfuricAcid = liqChem_sulfuricAcid;


    const liqChem_sulfuricAcidConc = extend(Liquid, "liq-chem-sulfuric-acid-conc", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqChem_sulfuricAcidConc = liqChem_sulfuricAcidConc;


    const liqChem_sulfuricAcidFuming = extend(Liquid, "liq-chem-sulfuric-acid-fuming", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqChem_sulfuricAcidFuming = liqChem_sulfuricAcidFuming;


    const liqChem_sulfurousAcid = extend(Liquid, "liq-chem-sulfurous-acid", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqChem_sulfurousAcid = liqChem_sulfurousAcid;


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


    const liqWas_wasteSlurry = extend(Liquid, "liq-was-waste-slurry", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqWas_wasteSlurry = liqWas_wasteSlurry;


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


    /* liq-int: slurry */
    const liqInt_slurryDeironizedSand = extend(Liquid, "liq-int-slurry-deironized-sand", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_slurryDeironizedSand = liqInt_slurryDeironizedSand;


    const liqInt_slurrySilicaSand = extend(Liquid, "liq-int-slurry-silica-sand", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_slurrySilicaSand = liqInt_slurrySilicaSand;


    const liqInt_slurryThickenedSilicaSand = extend(Liquid, "liq-int-slurry-thickened-silica-sand", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_slurryThickenedSilicaSand = liqInt_slurryThickenedSilicaSand;


    /* liq-int: solution */
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


    /* liq-int: hot liquid */
    const liqInt_solutionHotSodiumChloride = extend(Liquid, "liq-int-solution-hot-sodium-chloride", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_solutionHotSodiumChloride = liqInt_solutionHotSodiumChloride;


    /* liq-int: suspension */
    const liqInt_solutionSuspensionSodiumChloride = extend(Liquid, "liq-int-solution-suspension-sodium-chloride", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_solutionSuspensionSodiumChloride = liqInt_solutionSuspensionSodiumChloride;


    const liqInt_solutionSuspensionCrudeSodiumChloride = extend(Liquid, "liq-int-solution-suspension-crude-sodium-chloride", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.liqInt_solutionSuspensionCrudeSodiumChloride = liqInt_solutionSuspensionCrudeSodiumChloride;


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


    const gasChem_nitrogen = extend(Liquid, "gas-chem-nitrogen", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_nitrogen = gasChem_nitrogen;


    const gasChem_oxygen = extend(Liquid, "gas-chem-oxygen", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_oxygen = gasChem_oxygen;


    const gasChem_ozone = extend(Liquid, "gas-chem-ozone", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.gasChem_ozone = gasChem_ozone;


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


    /* VERY SEPCIAL AREA */
    const liqMisc_carnagePlasma = extend(CellLiquid, "liq-misc-carnage-plasma", {
      // Override
      update(puddle) {
        update_carnagePlasma(this, puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Override
      react(other, amount, tile, x, y) {
        react_carnagePlasma(this, other, amount, tile, x, y);
      },
    });
    exports.liqMisc_carnagePlasma = liqMisc_carnagePlasma;
    // Sadly, puddles floating on floors without liquidDrop will crash the game
    /*Events.run(ClientLoadEvent, () => {
      Vars.content.liquids().each(l => liqMisc_carnagePlasma.canStayOn.add(l));
    });*/
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_fluid.js loaded.");
});
