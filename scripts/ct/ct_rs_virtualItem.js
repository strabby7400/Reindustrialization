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
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemVirt_bit = itemVirt_bit;


    const itemVirt_kilobit = extend(Item, "item-virt-kilobit", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemVirt_kilobit = itemVirt_kilobit;


    const itemVirt_megabit = extend(Item, "item-virt-megabit", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemVirt_megabit = itemVirt_megabit;


    const itemVirt_gigabit = extend(Item, "item-virt-gigabit", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemVirt_gigabit = itemVirt_gigabit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_virtualItem.js loaded.");
});
