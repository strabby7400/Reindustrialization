/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_virtualItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-virt[currency]
    const itemVirt_bit = extend(Item, "item-virt-bit", {
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
    exports.itemVirt_bit = itemVirt_bit;


    const itemVirt_kilobit = extend(Item, "item-virt-kilobit", {
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
    exports.itemVirt_kilobit = itemVirt_kilobit;


    const itemVirt_megabit = extend(Item, "item-virt-megabit", {
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
    exports.itemVirt_megabit = itemVirt_megabit;


    const itemVirt_gigabit = extend(Item, "item-virt-gigabit", {
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
    exports.itemVirt_gigabit = itemVirt_gigabit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_virtualItem.js loaded.");
});
