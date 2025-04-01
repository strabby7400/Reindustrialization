/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_wasteItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-was
    const itemWas_dregs = extend(Item, "item-was-dregs", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemWas_dregs = itemWas_dregs;


    const itemWas_dust = extend(Item, "item-was-dust", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemWas_dust = itemWas_dust;


    const itemWas_gangue = extend(Item, "item-was-gangue", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemWas_gangue = itemWas_gangue;


    const itemWas_scrapSteel = extend(Item, "item-was-scrap-steel", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemWas_scrapSteel = itemWas_scrapSteel;


    const itemWas_slag = extend(Item, "item-was-slag", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemWas_slag = itemWas_slag;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_wasteItem.js loaded.");
});
