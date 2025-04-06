/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_intermediateFluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: liq-int[melt]
    const liqInt_melt_glass = extend(Liquid, "liq-int-melt-glass", {
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
    exports.liqInt_melt_glass = liqInt_melt_glass;
  // End


  // Part: liq-int[misc]
    const liqInt_brinePurified = extend(Liquid, "liq-int-brine-purified", {
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
    exports.liqInt_brinePurified = liqInt_brinePurified;
  // End


  // Part: gas-int[misc]
    const gasInt_airClean = extend(Liquid, "gas-int-air-clean", {
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
    exports.gasInt_airClean = gasInt_airClean;
  // End



Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_intermediateFluid.js loaded.");
});
