/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericResource");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.remove(Stat.explosiveness);
      itm.stats.remove(Stat.flammability);
      itm.stats.remove(Stat.radioactivity);
      itm.stats.remove(Stat.charge);

      if(itm.explosiveness > 0.0) itm.stats.addPercent(Stat.explosiveness, itm.explosiveness);
      if(itm.flammability > 0.0) itm.stats.addPercent(Stat.flammability, itm.flammability);
      if(itm.radioactivity > 0.0) itm.stats.addPercent(Stat.radioactivity, itm.radioactivity);
      if(itm.charge > 0.0) itm.stats.addPercent(Stat.charge, itm.charge);

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
    const setStats = function(itm) {
      PARENT.setStats(itm);

      setStatsComp(itm);
    };
    exports.setStats = setStats;


    const loadIcon = function(itm) {
      PARENT.loadIcon(itm);
    };
    exports.loadIcon = loadIcon


    const createIcons = function(itm, packer) {
      PARENT.createIcons(itm, packer);
    };
    exports.createIcons = createIcons;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: rs_genericItem.js loaded.");
});
