/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_oreFluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: liq-ore
    const liqOre_brine = extend(Liquid, "liq-ore-brine", {
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
    exports.liqOre_brine = liqOre_brine;


    const liqOre_water = extend(Liquid, "liq-ore-water", {
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
    exports.liqOre_water = liqOre_water;


    const liqOre_seaWater = extend(Liquid, "liq-ore-sea-water", {
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
    exports.liqOre_seaWater = liqOre_seaWater;


    const liqOre_crudeOil = extend(Liquid, "liq-ore-crude-oil", {
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
    exports.liqOre_crudeOil = liqOre_crudeOil;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_oreFluid.js loaded.");
});
