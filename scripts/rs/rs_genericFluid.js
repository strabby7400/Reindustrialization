/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericResource");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_flow = require("reind/mdl/mdl_flow");

    const db_fluid = require("reind/db/db_fluid");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(liq) {
      liq.stats.remove(Stat.explosiveness);
      liq.stats.remove(Stat.flammability);
      liq.stats.remove(Stat.temperature);
      liq.stats.remove(Stat.heatCapacity);
      liq.stats.remove(Stat.viscosity);

      if(liq.explosiveness > 0.0) liq.stats.addPercent(Stat.explosiveness, liq.explosiveness);
      if(liq.flammability > 0.0) liq.stats.addPercent(Stat.flammability, liq.flammability);
      if(Math.abs(liq.temperature - 0.5) > 0.0001) liq.stats.add(Stat.temperature, Strings.fixed(liq.temperature * 100.0, 2) + "%");
      if(Math.abs(liq.heatCapacity - 0.5) > 0.0001) liq.stats.addPercent(Stat.heatCapacity, liq.heatCapacity);
      if(!liq.gas && Math.abs(liq.viscosity - 0.5) > 0.0001) liq.stats.add(Stat.viscosity, Strings.fixed(liq.viscosity * 100.0, 2) + "%");

      var dens = mdl_flow._dens(liq);
      if(liq.gas) {
        liq.stats.add(db_stat.density, Strings.fixed(dens * 1000.0, 2) + " × 10^-3");
      } else {
        liq.stats.add(db_stat.density, Strings.fixed(dens, 2));
      };

      if(!liq.gas && mdl_content.isConductive(liq)) {
        liq.stats.add(db_stat.conductive, true);
      };

      var grpVal = mdl_corrosion._fGrpVal(liq);
      if(grpVal != null) liq.stats.add(db_stat.fluidGroup, grpVal);

      var tagVal = mdl_corrosion._fTagVal(liq);
      if(tagVal != null) liq.stats.add(db_stat.fluidTags, tagVal);

      if(liq.effect != StatusEffects.none) liq.stats.add(db_stat.fluidStatus, liq.effect.localizedName);

      var fHeat = mdl_data.read_1n1v(db_fluid.db["param"]["fHeat"], liq.name);
      if(fHeat != null) liq.stats.add(db_stat.fluidHeat, fHeat);
    };


    function updateComp(liq, puddle) {
      frag_fluid.update_fix(liq, puddle);
      frag_fluid.update_puddleReaction(liq, puddle);
      frag_fluid.update_shortCircuit(liq, puddle);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(liq) {
      PARENT.setStats(liq);

      setStatsComp(liq);
    };
    exports.setStats = setStats;


    const update = function(liq, puddle) {
      updateComp(liq, puddle);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_genericFluid.js loaded.");
});
