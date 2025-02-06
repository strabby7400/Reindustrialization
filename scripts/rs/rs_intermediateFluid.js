/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericFluid = require("reind/rs/rs_genericFluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_database = require("reind/mdl/mdl_database");

    const db_fluid = require("reind/db/db_fluid");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(liq) {
      liq.stats.add(db_stat.isIntermediate, true);

      var li_tg = new Seq();
      mdl_database.readli_1n1v(db_fluid.intermediateMap, liq.name).each(nm_tg => {
        var ct_tg = mdl_content.getContent_nm(nm_tg);
        if(ct_tg != null) li_tg.add(ct_tg);
      });
      if(li_tg.size > 0) liq.stats.add(db_stat.targetProducts, StatValues.content(li_tg));
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
  Log.info("REIND:rs_intermediateFluid.js loaded.");
});
