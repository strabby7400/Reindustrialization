/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_attributeFactory = require("reind/blk/blk_attributeFactory");

    const frag_fluid = require("reind/frag/frag_fluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-misc
    const facMisc_rainCollector = extend(AttributeCrafter, "fac-misc-rain-collector", {
      // Specific
      setStats() {
        this.super$setStats();
        blk_attributeFactory.setStats(this);
        this.stats.remove(Stat.tiles);
      },
    });
    facMisc_rainCollector.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, facMisc_rainCollector, {
      // Specific
      updateTile() {
        this.super$updateTile();
        blk_attributeFactory.updateTile(this);
        frag_fluid.updateTile_overflow(this, Vars.content.liquid("reind-liq-ore-water"));
      },
    });
    exports.facMisc_rainCollector = facMisc_rainCollector;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_attributeFactory.js loaded.");
});
