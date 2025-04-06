/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_genericFluid");

    const frag_fluid = require("reind/frag/frag_fluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  /* <---------------- Liquid ----------------> */


  // Part: liq-misc
    const liqMisc_drillingMud = extend(Liquid, "liq-misc-drilling-mud", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.liqMisc_drillingMud = liqMisc_drillingMud;
  // End


  // Part: liq-chem[inorganic]
    /* chlorine */


    const liqChem_hydrochloricAcid = extend(Liquid, "liq-chem-hydrochloric-acid", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.liqChem_hydrochloricAcid = liqChem_hydrochloricAcid;


    /* sulfur */


    const liqChem_sulfuricAcid = extend(Liquid, "liq-chem-sulfuric-acid", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.liqChem_sulfuricAcid = liqChem_sulfuricAcid;


    const liqChem_sulfuricAcidConc = extend(Liquid, "liq-chem-sulfuric-acid-conc", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.liqChem_sulfuricAcidConc = liqChem_sulfuricAcidConc;


    const liqChem_sulfuricAcidFuming = extend(Liquid, "liq-chem-sulfuric-acid-fuming", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      // Specific
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
        frag_fluid.update_fuming(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.liqChem_sulfuricAcidFuming = liqChem_sulfuricAcidFuming;


    const liqChem_sulfurousAcid = extend(Liquid, "liq-chem-sulfurous-acid", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.liqChem_sulfurousAcid = liqChem_sulfurousAcid;
  // End


  /* <---------------- Gas ----------------> */


  // Part: gas-misc
    const gasMisc_air = extend(Liquid, "gas-misc-air", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasMisc_air = gasMisc_air;


    const gasMisc_steam = extend(Liquid, "gas-misc-steam", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasMisc_steam = gasMisc_steam;
  // End


  // Part: gas-chem[elementary]
    const gasChem_chlorine = extend(Liquid, "gas-chem-chlorine", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_chlorine = gasChem_chlorine;


    const gasChem_hydrogen = extend(Liquid, "gas-chem-hydrogen", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_hydrogen = gasChem_hydrogen;


    const gasChem_nitrogen = extend(Liquid, "gas-chem-nitrogen", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_nitrogen = gasChem_nitrogen;


    const gasChem_oxygen = extend(Liquid, "gas-chem-oxygen", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_oxygen = gasChem_oxygen;


    const gasChem_ozone = extend(Liquid, "gas-chem-ozone", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_ozone = gasChem_ozone;
  // End


  // Part: gas-chem[inorganic]
    /* carbon */


    const gasChem_carbonDioxide = extend(Liquid, "gas-chem-carbon-dioxide", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_carbonDioxide = gasChem_carbonDioxide;


    /* nitrogen */


    const gasChem_ammonia = extend(Liquid, "gas-chem-ammonia", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_ammonia = gasChem_ammonia;


    /* sulfur */


    const gasChem_hydrogenSulfide = extend(Liquid, "gas-chem-hydrogen-sulfide", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_hydrogenSulfide = gasChem_hydrogenSulfide;


    const gasChem_sulfurDioxide = extend(Liquid, "gas-chem-sulfur-dioxide", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_sulfurDioxide = gasChem_sulfurDioxide;


    const gasChem_sulfurTrioxide = extend(Liquid, "gas-chem-sulfur-trioxide", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.gasChem_sulfurTrioxide = gasChem_sulfurTrioxide;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_genericFluid.js loaded.");
});
