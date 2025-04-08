/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/rs/rs_genericItem");

    const db_stat = require("reind/db/db_stat");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function setStatsComp(itm) {
      itm.stats.add(db_stat.isOre, true);
      itm.stats.add(db_stat.hardness, itm.hardness);

      var li = new Seq();
      Vars.content.blocks().each(blk => {
        if(blk.itemDrop == itm) li.add(blk);
      });
      if(li.size > 0) itm.stats.add(db_stat.blockRelated, StatValues.content(li.sort()));
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
  Log.info("REIND: rs_oreItem.js loaded.");
});
