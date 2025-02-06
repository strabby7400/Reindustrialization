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


  // Part: Intermediate
    /* NOTE: Sets stat for target products. */
    const li_intermediateMap = new Seq([

      /* ========================================
        Section: Blend
      ======================================== */

      "reind-item-int-blend-cement", "reind-item-buil-cement",
      "reind-item-int-blend-roasted-cement", "reind-item-buil-cement",

      "reind-item-int-blend-brick-high-alumina", "reind-item-buil-brick-high-alumina",

      "reind-item-int-blend-brick-magnesia", "reind-item-buil-brick-magnesia",

      /* ========================================
        Section: Brick
      ======================================== */

      "reind-item-int-brick-clay-unbaked", "reind-item-buil-brick-clay",

      "reind-item-int-brick-high-alumina-unbaked", "reind-item-buil-brick-high-alumina",

      "reind-item-int-brick-magnesia-unbaked", "reind-item-buil-brick-magnesia",

      /* ========================================
        Section: Chunks
      ======================================== */

      "reind-item-int-chunks-aggregate", "reind-item-buil-coarse-aggregate",
      "reind-item-int-chunks-aggregate", "reind-item-buil-fine-aggregate",

      "reind-item-int-chunks-dolomite", "reind-item-chem-magnesia-sand",

      "reind-item-int-chunks-gypsum", "reind-item-buil-cement",

      "reind-item-int-chunks-limestone", "reind-item-buil-cement",
      "reind-item-int-chunks-limestone", "reind-item-chem-lime",

      "reind-item-int-chunks-zircon", "reind-item-chem-zircon-sand",

      /* ========================================
        Section: Dried
      ======================================== */

      "reind-item-int-sawdust-dried", "reind-item-bio-charcoal",

      /* ========================================
        Section: Dust
      ======================================== */

      "reind-item-int-dust-asbestos", "reind-item-buil-asbestos-wool",
      "reind-item-int-dust-p1-asbestos", "reind-item-buil-asbestos-wool",

      "reind-item-int-dust-bauxite", "reind-item-buil-brick-high-alumina",
      "reind-item-int-dust-p1-bauxite", "reind-item-buil-brick-high-alumina",

      "reind-item-int-dust-raw-coal", "reind-item-chem-coal",

      "reind-item-int-dust-sand", "reind-item-chem-silica-sand",
      "reind-item-int-dust-p1-sand", "reind-item-chem-silica-sand",

      /* ========================================
        Section: Misc
      ======================================== */

      "reind-item-int-charcoal-uncarbonized", "reind-item-bio-charcoal",

      "reind-item-int-glass", "reind-item-buil-tempered-glass",
      "reind-item-int-glass-unannealed", "reind-item-buil-tempered-glass",

    ]);
    exports.intermediateMap = li_intermediateMap;
  // End
