/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_wasteFluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: liq-was
    const liqWas_wasteSlurry = extend(Liquid, "liq-was-waste-slurry", {
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
    exports.liqWas_wasteSlurry = liqWas_wasteSlurry;


    const liqWas_wasteWater = extend(Liquid, "liq-was-waste-water", {
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
    exports.liqWas_wasteWater = liqWas_wasteWater;


    const liqWas_wasteWaterAcidic = extend(Liquid, "liq-was-waste-water-acidic", {
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
    exports.liqWas_wasteWaterAcidic = liqWas_wasteWaterAcidic;


    const liqWas_wasteWaterBasic = extend(Liquid, "liq-was-waste-water-basic", {
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
    exports.liqWas_wasteWaterBasic = liqWas_wasteWaterBasic;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_wasteFluid.js loaded.");
});
