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
    const li_94069987 = new Seq();
    function setStatsComp(liq) {
      var li = li_94069987.clear();

      Vars.content.blocks().each(blk => {
        if(blk.liquidDrop == liq) li.add(blk);
      });
      if(li.size > 0) liq.stats.add(db_stat.blockRelated, StatValues.content(li.sort()));
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
  Log.info("REIND: rs_oreFluid.js loaded.");
});
