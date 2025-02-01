/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericFluid = require("reind/rs/rs_genericFluid");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp_oreFluid(liq) {
      // Get related blocks
      var list_blk = new Seq();
      Vars.content.blocks().each(blk => {
        if(blk.liquidDrop == liq) list_blk.add(blk);
      });
      if(list_blk.size > 0) liq.stats.add(db_stat.blockRelated, StatValues.content(list_blk.sort()));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_oreFluid = function(liq) {
      rs_genericFluid.setStats(liq);

      setStatsComp_oreFluid(liq);
    };
    exports.setStats = setStats_oreFluid;


    const update_oreFluid = function(liq, puddle) {
      rs_genericFluid.update(liq, puddle);
    };
    exports.update = update_oreFluid;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_oreFluid.js loaded.");
});
