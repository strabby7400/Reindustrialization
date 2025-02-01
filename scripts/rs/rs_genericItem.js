/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_genericResource = require("reind/rs/rs_genericResource");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp_genericItem(itm) {
      itm.stats.remove(Stat.explosiveness);
      itm.stats.remove(Stat.flammability);
      itm.stats.remove(Stat.radioactivity);
      itm.stats.remove(Stat.charge);

      if(itm.explosiveness > 0.0) itm.stats.addPercent(Stat.explosiveness, itm.explosiveness);
      if(itm.flammability > 0.0) itm.stats.addPercent(Stat.flammability, itm.flammability);
      if(itm.radioactivity > 0.0) itm.stats.addPercent(Stat.radioactivity, itm.radioactivity);
      if(itm.charge > 0.0) itm.stats.addPercent(Stat.charge, itm.charge);

      // Get buildable
      if(itm.buildable) {
        itm.stats.add(db_stat.buildable, true);
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_genericItem = function(itm) {
      rs_genericResource.setStats(itm);

      setStatsComp_genericItem(itm);
    };
    exports.setStats = setStats_genericItem;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:rs_genericItem.js loaded.");
});
