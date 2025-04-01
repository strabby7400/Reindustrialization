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
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
    });
    exports.liqWas_wasteSlurry = liqWas_wasteSlurry;


    const liqWas_wasteWater = extend(Liquid, "liq-was-waste-water", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
    });
    exports.liqWas_wasteWater = liqWas_wasteWater;


    const liqWas_wasteWaterAcidic = extend(Liquid, "liq-was-waste-water-acidic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
    });
    exports.liqWas_wasteWaterAcidic = liqWas_wasteWaterAcidic;


    const liqWas_wasteWaterBasic = extend(Liquid, "liq-was-waste-water-basic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        TEMPLATE.update(this, puddle);
      },
    });
    exports.liqWas_wasteWaterBasic = liqWas_wasteWaterBasic;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_wasteFluid.js loaded.");
});
