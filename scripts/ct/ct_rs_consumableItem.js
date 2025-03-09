/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_consumableItem = require("reind/rs/rs_consumableItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-cons[ball]
    const itemCons_ballSteel = extend(Item, "item-cons-ball-steel", {
      setStats() {
        this.super$setStats();
        rs_consumableItem.setStats(this);
      },
    });
    exports.itemCons_ballSteel = itemCons_ballSteel;
  // End


  // Part: item-cons[electrode]
    const itemCons_electrodeCopper = extend(Item, "item-cons-electrode-copper", {
      setStats() {
        this.super$setStats();
        rs_consumableItem.setStats(this);
      },
    });
    exports.itemCons_electrodeCopper = itemCons_electrodeCopper;


    const itemCons_electrodeGraphite = extend(Item, "item-cons-electrode-graphite", {
      setStats() {
        this.super$setStats();
        rs_consumableItem.setStats(this);
      },
    });
    exports.itemCons_electrodeGraphite = itemCons_electrodeGraphite;


    const itemCons_electrodeLead = extend(Item, "item-cons-electrode-lead", {
      setStats() {
        this.super$setStats();
        rs_consumableItem.setStats(this);
      },
    });
    exports.itemCons_electrodeLead = itemCons_electrodeLead;
  // End


  // Part: item-cons[pall ring]
    const itemCons_pallRingStainlessSteel = extend(Item, "item-cons-pall-ring-stainless-steel", {
      setStats() {
        this.super$setStats();
        rs_consumableItem.setStats(this);
      },
    });
    exports.itemCons_pallRingStainlessSteel = itemCons_pallRingStainlessSteel;


    const itemCons_pallRingSteel = extend(Item, "item-cons-pall-ring-steel", {
      setStats() {
        this.super$setStats();
        rs_consumableItem.setStats(this);
      },
    });
    exports.itemCons_pallRingSteel = itemCons_pallRingSteel;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_consumableItem.js loaded.");
});
