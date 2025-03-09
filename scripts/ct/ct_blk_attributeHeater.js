/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_attributeHeater = require("reind/blk/blk_attributeHeater");

    const frag_fluid = require("reind/frag/frag_fluid");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-heat
    const facHeat_ventHeatExchanger = extend(AttributeCrafter, "fac-heat-vent-heat-exchanger", {
      setStats() {
        this.super$setStats();
        blk_attributeHeater.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_attributeHeater.setBars(this);
      },
    });
    facHeat_ventHeatExchanger.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, facHeat_ventHeatExchanger, {
      // Specific
      updateTile() {
        this.super$updateTile();
        blk_attributeHeater.updateTile(this);
        frag_fluid.updateTile_overflow(this, Vars.content.liquid("reind-liq-ore-water"));
      },
    });
    exports.facHeat_ventHeatExchanger = facHeat_ventHeatExchanger;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_attributeHeater.js loaded.");
});
