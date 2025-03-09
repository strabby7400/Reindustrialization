/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericFluid = require("reind/rs/rs_genericFluid");

    const frag_fluid = require("reind/frag/frag_fluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  /* <---------------- Liquid ----------------> */


  // Part: liq-chem[inorganic]
    /* chlorine */


    const liqChem_hydrochloricAcid = extend(Liquid, "liq-chem-hydrochloric-acid", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.liqChem_hydrochloricAcid = liqChem_hydrochloricAcid;


    /* sulfur */


    const liqChem_sulfuricAcid = extend(Liquid, "liq-chem-sulfuric-acid", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.liqChem_sulfuricAcid = liqChem_sulfuricAcid;


    const liqChem_sulfuricAcidConc = extend(Liquid, "liq-chem-sulfuric-acid-conc", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.liqChem_sulfuricAcidConc = liqChem_sulfuricAcidConc;


    const liqChem_sulfuricAcidFuming = extend(Liquid, "liq-chem-sulfuric-acid-fuming", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      // Specific
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
        frag_fluid.update_fuming(this, puddle);
      },
    });
    exports.liqChem_sulfuricAcidFuming = liqChem_sulfuricAcidFuming;


    const liqChem_sulfurousAcid = extend(Liquid, "liq-chem-sulfurous-acid", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.liqChem_sulfurousAcid = liqChem_sulfurousAcid;
  // End


  /* <---------------- Gas ----------------> */


  // Part: gas-misc
    const gasMisc_air = extend(Liquid, "gas-misc-air", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasMisc_air = gasMisc_air;


    const gasMisc_steam = extend(Liquid, "gas-misc-steam", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasMisc_steam = gasMisc_steam;
  // End


  // Part: gas-chem[elementary]
    const gasChem_chlorine = extend(Liquid, "gas-chem-chlorine", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_chlorine = gasChem_chlorine;


    const gasChem_hydrogen = extend(Liquid, "gas-chem-hydrogen", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_hydrogen = gasChem_hydrogen;


    const gasChem_nitrogen = extend(Liquid, "gas-chem-nitrogen", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_nitrogen = gasChem_nitrogen;


    const gasChem_oxygen = extend(Liquid, "gas-chem-oxygen", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_oxygen = gasChem_oxygen;


    const gasChem_ozone = extend(Liquid, "gas-chem-ozone", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_ozone = gasChem_ozone;
  // End


  // Part: gas-chem[inorganic]
    /* carbon */


    const gasChem_carbonDioxide = extend(Liquid, "gas-chem-carbon-dioxide", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_carbonDioxide = gasChem_carbonDioxide;


    /* nitrogen */


    const gasChem_ammonia = extend(Liquid, "gas-chem-ammonia", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_ammonia = gasChem_ammonia;


    /* sulfur */


    const gasChem_hydrogenSulfide = extend(Liquid, "gas-chem-hydrogen-sulfide", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_hydrogenSulfide = gasChem_hydrogenSulfide;


    const gasChem_sulfurDioxide = extend(Liquid, "gas-chem-sulfur-dioxide", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_sulfurDioxide = gasChem_sulfurDioxide;


    const gasChem_sulfurTrioxide = extend(Liquid, "gas-chem-sulfur-trioxide", {
      setStats() {
        this.super$setStats();
        rs_genericFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_genericFluid.update(this, puddle);
      },
    });
    exports.gasChem_sulfurTrioxide = gasChem_sulfurTrioxide;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_genericFluid.js loaded.");
});
