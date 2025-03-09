/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_oreFluid = require("reind/rs/rs_oreFluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: liq-ore
    const liqOre_brine = extend(Liquid, "liq-ore-brine", {
      setStats() {
        this.super$setStats();
        rs_oreFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_oreFluid.update(this, puddle);
      },
    });
    exports.liqOre_brine = liqOre_brine;


    const liqOre_water = extend(Liquid, "liq-ore-water", {
      setStats() {
        this.super$setStats();
        rs_oreFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_oreFluid.update(this, puddle);
      },
    });
    exports.liqOre_water = liqOre_water;


    const liqOre_seaWater = extend(Liquid, "liq-ore-sea-water", {
      setStats() {
        this.super$setStats();
        rs_oreFluid.setStats(this);
      },
      update(puddle) {
        this.super$update(puddle);
        rs_oreFluid.update(this, puddle);
      },
    });
    exports.liqOre_seaWater = liqOre_seaWater;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_oreFluid.js loaded.");
});
