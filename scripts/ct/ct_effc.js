// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_fluid = require("db/db_fluid");
  // End


  // Start: Effc
    /* Effc detection is done in buildings */
    const stat_allowedInConduits = new Stat("reind-stat-allowed-in-conduits.name", StatCat.function);


    function setStats_effc(obj) {
      obj.stats.add(stat_allowedInConduits, false);
    };


    Events.run(ClientLoadEvent, () => {
      const list_effc = db_fluid.effc;
      for(let i = 0; i < list_effc.size; i++) {
        var target = Vars.content.liquid(list_effc.get(i));
        if(target != null) {
          setStats_effc(target);
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

    };


    function setStats_extra(obj) {

    };
  // End


  // Start: Region
    /* effc-effc */
    const effcEffc_gasFiltering = extend(Liquid, "effc-effc-gas-filtering", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_gasFiltering = effcEffc_gasFiltering;


    const effcEffc_core = extend(Liquid, "effc-effc-core", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_core = effcEffc_core;


    const effcEffc_electrode = extend(Liquid, "effc-effc-electrode", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_electrode = effcEffc_electrode;


    const effcEffc_calculation = extend(Liquid, "effc-effc-calculation", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_calculation = effcEffc_calculation;


    const effcEffc_steam = extend(Liquid, "effc-effc-steam", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_steam = effcEffc_steam;


    const effcEffc_pump = extend(Liquid, "effc-effc-pump", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_pump = effcEffc_pump;


    const effcEffc_dustRemoval = extend(Liquid, "effc-effc-dust-removal", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_dustRemoval = effcEffc_dustRemoval;


    const effcEffc_lifting = extend(Liquid, "effc-effc-lifting", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_lifting = effcEffc_lifting;


    const effcEffc_smokeExhaust = extend(Liquid, "effc-effc-smoke-exhaust", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_smokeExhaust = effcEffc_smokeExhaust;


    const effcEffc_ballImpactI = extend(Liquid, "effc-effc-ball-impact-i", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_ballImpactI = effcEffc_ballImpactI;


    const effcEffc_ballImpactII = extend(Liquid, "effc-effc-ball-impact-ii", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcEffc_ballImpactII = effcEffc_ballImpactII;


    /*effc-cond*/
    const effcCond_pressure = extend(Liquid, "effc-cond-pressure", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcCond_pressure = effcCond_pressure;


    const effcCond_pressureII = extend(Liquid, "effc-cond-pressure-ii", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcCond_pressureII = effcCond_pressureII;


    const effcCond_pressureIII = extend(Liquid, "effc-cond-pressure-iii", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcCond_pressureIII = effcCond_pressureIII;


    /* effc-spec */
    const effcSpec_electricalRoastingFurnace = extend(Liquid, "effc-spec-electrical-roasting-furnace", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcSpec_electricalRoastingFurnace = effcSpec_electricalRoastingFurnace;


    const effcSpec_industrialBlastFurnace = extend(Liquid, "effc-spec-industrial-blast-furnace", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.effcSpec_industrialBlastFurnace = effcSpec_industrialBlastFurnace;


    /* ileffc-effc */
    const ileffcEffc_ids = extend(Liquid, "ileffc-effc-ids", {
      update(puddle) {
        this.super$update(puddle);
        update_extra(this, puddle);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.ileffcEffc_ids = ileffcEffc_ids;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_effc.js loaded.");
});
