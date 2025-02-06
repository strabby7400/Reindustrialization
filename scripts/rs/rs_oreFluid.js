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
    function setStatsComp(liq) {
      var li_blk = new Seq();
      Vars.content.blocks().each(blk => {
        if(blk.liquidDrop == liq) li_blk.add(blk);
      });
      if(li_blk.size > 0) liq.stats.add(db_stat.blockRelated, StatValues.content(li_blk.sort()));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(liq) {
      rs_genericFluid.setStats(liq);

      setStatsComp(liq);
    };
    exports.setStats = setStats;


    const update = function(liq, puddle) {
      rs_genericFluid.update(liq, puddle);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_oreFluid.js loaded.");
});
