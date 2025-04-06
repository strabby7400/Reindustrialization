/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_consumableItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-cons[ball]
    const itemCons_ballSteel = extend(Item, "item-cons-ball-steel", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemCons_ballSteel = itemCons_ballSteel;
  // End


  // Part: item-cons[electrode]
    const itemCons_electrodeCopper = extend(Item, "item-cons-electrode-copper", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemCons_electrodeCopper = itemCons_electrodeCopper;


    const itemCons_electrodeGraphite = extend(Item, "item-cons-electrode-graphite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemCons_electrodeGraphite = itemCons_electrodeGraphite;


    const itemCons_electrodeLead = extend(Item, "item-cons-electrode-lead", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemCons_electrodeLead = itemCons_electrodeLead;
  // End


  // Part: item-cons[pall ring]
    const itemCons_pallRingStainlessSteel = extend(Item, "item-cons-pall-ring-stainless-steel", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemCons_pallRingStainlessSteel = itemCons_pallRingStainlessSteel;


    const itemCons_pallRingSteel = extend(Item, "item-cons-pall-ring-steel", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemCons_pallRingSteel = itemCons_pallRingSteel;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_consumableItem.js loaded.");
});
