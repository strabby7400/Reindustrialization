/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Attribute
    const li_rockMap = new Seq([
      "reind-attr-rock-clastic", "reind-item-ore-rock-shard-clastic",
      "reind-attr-rock-evaporite", "reind-item-ore-rock-shard-evaporite",
      "reind-attr-rock-hypabyssal", "reind-item-ore-rock-shard-hypabyssal",
      "reind-attr-rock-lava", "reind-item-ore-rock-shard-lava",
      "reind-attr-rock-metamorphic", "reind-item-ore-rock-shard-metamorphic",
      "reind-attr-rock-plutonic", "reind-item-ore-rock-shard-plutonic",
      "reind-attr-rock-biological-sedimentary", "reind-item-ore-rock-shard-biological-sedimentary",
      "reind-attr-rock-clastic-sedimentary", "reind-item-ore-rock-shard-clastic-sedimentary",
    ]);
    exports.rockMap = li_rockMap;


    const li_bushMap = new Seq([

    ]);
    exports.bushMap = li_bushMap;
  // End


  // Part: Consumable
    /* NOTE: Sets stat for facilities used in. */
    const li_consumableMap = new Seq([

      /* ========================================
        Section: Ball Mill
      ======================================== */

      "reind-item-cons-ball-steel", Core.bundle.get("term.reind-term-ball-mill.name"),

      /* ========================================
        Section: Electrolyzer
      ======================================== */

      "reind-item-cons-electrode-copper", Core.bundle.get("term.reind-term-electrolyzer.name"),
      "reind-item-cons-electrode-lead", Core.bundle.get("term.reind-term-electrolyzer.name"),

      /* ========================================
        Section: Electric Arc Furnace
      ======================================== */

      "reind-item-cons-electrode-graphite", Core.bundle.get("term.reind-term-electric-arc-furnace.name"),

      /* ========================================
        Section: Packed Tower
      ======================================== */

      "reind-item-cons-pall-ring-steel", Core.bundle.get("term.reind-term-packed-tower.name"),
      "reind-item-cons-pall-ring-stainless-steel", Core.bundle.get("term.reind-term-packed-tower.name"),

    ]);
    exports.consumableMap = li_consumableMap;
  // End


  // Part: Reaction
    const li_itemReaction = new Seq([
      "reind-item-chem-lithium", "reind-liq-ore-water", "explosionII",
      "reind-item-chem-lithium", "reind-gas-misc-air", "explosionII",

      "reind-item-chem-sodium", "reind-liq-ore-water", "explosionII",
      "reind-item-chem-sodium", "reind-gas-misc-air", "explosionII",

      "reind-item-chem-potassium", "reind-liq-ore-water", "explosionII",
      "reind-item-chem-potassium", "reind-gas-misc-air", "explosionIII",

      "reind-item-chem-potassium-hydroxide", "reind-gas-misc-air", "denaturing",

      "reind-item-chem-sodium-hydroxide", "reind-gas-misc-air", "denaturing",
    ]);
    exports.itemReaction = li_itemReaction;


    const li_denatured = new Seq([
      "reind-item-chem-potassium-hydroxide", "reind-item-chem-potassium-carbonate",

      "reind-item-chem-sodium-hydroxide", "reind-item-chem-sodium-carbonate",
    ]);
    exports.denatured = li_denatured;
  // End


  // Part: Virtual
    const li_virtWhitelist = new Seq([
      "reind-eff-stor-bit-container",
    ]);
    exports.virtWhitelist = li_virtWhitelist;
  // End
