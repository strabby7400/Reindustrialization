/*
  ========================================
  Section: Definition
  ========================================
*/


  const group_wood = new Seq([
    "reind-bliq-cond-wooden-fluid-pipe",
  ]);
  exports.group_wood = group_wood;


  const group_copper = new Seq([
    "reind-bliq-pump-primitive-fluid-pump",

    "reind-bliq-cond-bronze-fluid-pipe",

    "reind-bliq-brd-primitive-fluid-pipe-bridge",

    "reind-bliq-stor-liquid-cell",
  ]);
  exports.group_copper = group_copper;


  const group_steel = new Seq([
    "reind-bliq-pump-piston-fluid-pump",

    "reind-bliq-cond-steel-fluid-pipe",

    "reind-bliq-aux-fluid-unloader",

    "reind-bliq-stor-liquid-tank",

    "reind-bliq-stor-gas-cylinder",
  ]);
  exports.group_steel = group_steel;


  const group_stainlessSteel = new Seq([

  ]);
  exports.group_stainlessSteel = group_stainlessSteel;


  const group_glass = new Seq([
    "reind-bliq-cond-tempered-glass-fluid-pipe",
  ]);
  exports.group_glass = group_glass;


/*
  ========================================
  Section: List
  ========================================
*/


  // Part: Generic
    /* NOTE: Sets stat for faction. */
    const list_blockFaction = new Seq([
      "reind-eff-core-ash", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-eff-core-ember", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-eff-core-bonfire", Core.bundle.get("term.reind-term-outpost-military.name"),

      "reind-min-dril-sand-excavator", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-dril-basic-impact-drill", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-scan-pulse-ore-scanner", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-misc-placer-miner", Core.bundle.get("term.reind-term-emerald-tide.name"),

      "reind-ileff-misc-ids-engine", Core.bundle.get("term.reind-term-enclosure.name"),
      "reind-ileff-misc-bit-bank", Core.bundle.get("term.reind-term-enclosure.name"),
    ]);
    exports.blockFaction = list_blockFaction;


    const list_attrMap = new Seq([
      "reind-min-misc-placer-miner", "reind-attr-flr-placer",
    ]);
    exports.attrMap = list_attrMap;


    const list_genericRange = new Seq([
      "reind-min-harv-mycelial-harvester", 5,

      "reind-min-scan-pulse-ore-scanner", 8,

      "reind-pow-gen-tidal-generator", 6,
    ]);
    exports.genericRange = list_genericRange;


    const list_impactRange = new Seq([
      "reind-min-dril-basic-impact-drill", 48.0,

      "reind-dis-mdr-local-mass-driver", 32.0,
      "reind-dis-mdr-standard-mass-driver", 72.0,
    ]);
    exports.impactRange = list_impactRange;
  // End


  // Part: Miner
    const list_depthTierMultiplier = new Seq([
      "reind-min-dril-basic-impact-drill", 0.5,
    ]);
    exports.depthTierMultiplier = list_depthTierMultiplier;
  // End


  // Part: Item Block
    /* NOTE: Only used for stats. */
    const list_transportSpeed = new Seq([
      "reind-dis-brd-primitive-conveyor-bridge", 12.0,
    ]);
    exports.transportSpeed = list_transportSpeed;


    const list_exposedToAir = new Seq([
      "reind-dis-conv-primitive-conveyor",
      "reind-dis-conv-improved-conveyor",
      "reind-dis-conv-multi-port-conveyor",

      "reind-eff-stor-crate",
    ]);
    exports.exposedToAir = list_exposedToAir;


    const list_massDriverBulletDamage = new Seq([
      "reind-dis-mdr-local-mass-driver", 90.0,
      "reind-dis-mdr-standard-mass-driver", 725.0,
    ]);
    exports.massDriverBulletDamage = list_massDriverBulletDamage;
  // End


  // Part: Liquid Block
    const list_pumpSpeed = new Seq([
      "reind-bliq-pump-primitive-fluid-pump", 3.0,
      "reind-bliq-pump-piston-fluid-pump", 15.0,
    ]);
    exports.pumpSpeed = list_pumpSpeed;


    const list_baseCorrosionResistence = new Seq([
      "wood", 1.0,
      "copper", 1.5,
      "steel", 2.0,
      "stainlessSteel", 6.0,
      "glass", 10.0,
    ]);
    exports.baseCorrosionResistence = list_baseCorrosionResistence;


    const list_specificCorrosionResistence = new Seq([
      "reind-bliq-aux-fluid-unloader", 6.0,

      "reind-bliq-stor-liquid-cell", 6.0,
      "reind-bliq-stor-liquid-tank", 15.0,

      "reind-bliq-stor-gas-cylinder", 15.0,
    ]);
    exports.specificCorrosionResistence = list_specificCorrosionResistence;


    const list_vulnerableToClogging = new Seq([
      "reind-bliq-cond-wooden-fluid-pipe",
      "reind-bliq-cond-tempered-glass-fluid-pipe",
    ]);
    exports.vulnerableToClogging = list_vulnerableToClogging;


    const list_fluidHeatCapacity = new Seq([
      "reind-bliq-pump-primitive-fluid-pump", 800.0,
      "reind-bliq-pump-piston-fluid-pump", 1000.0,

      "reind-bliq-cond-wooden-fluid-pipe", 50.0,
      "reind-bliq-cond-bronze-fluid-pipe", 800.0,
      "reind-bliq-cond-steel-fluid-pipe", 1000.0,
      "reind-bliq-cond-tempered-glass-fluid-pipe", 250.0,

      "reind-bliq-brd-primitive-fluid-pipe-bridge", 800.0,

      "reind-bliq-aux-fluid-unloader", 1000.0,

      "reind-bliq-stor-liquid-cell", 800.0,
      "reind-bliq-stor-liquid-tank", 1000.0,

      "reind-bliq-stor-gas-cylinder", 1000.0,
    ]);
    exports.fluidHeatCapacity = list_fluidHeatCapacity;


    const list_coreEffcOutput = new Seq([
      "reind-eff-core-ash", 4.0,
    ]);
    exports.coreEffcOutput = list_coreEffcOutput;
  // End


  // Part: Heat Block
    const list_heatLimit = new Seq([
      "reind-pow-hcond-copper-heat-conductor", 700.0,
      "reind-pow-hcond-steel-heat-conductor", 1000.0,
    ]);
    exports.heatLimit = list_heatLimit;


    const list_heatLoss = new Seq([
      "reind-pow-hcond-copper-heat-conductor", 0.03,
      "reind-pow-hcond-steel-heat-conductor", 0.01,
    ]);
    exports.heatLoss = list_heatLoss;


    const list_heatTransferCoefficient = new Seq([
      /* Copper */
      "reind-pow-hcond-copper-heat-conductor", 7.76,

      /* Steel */
      "reind-pow-hcond-steel-heat-conductor", 1.0,

      /* Stainless Steel */
    ]);
    exports.heatTransferCoefficient = list_heatTransferCoefficient;
  // End


  // Part: Power Block
    /* NOTE: Any blocks here will get damaged when soaked in water. */
    const list_canShortCircuit = new Seq([
      "reind-pow-wire-copper-cable",
      "reind-pow-wire-copper-wire-relay",
      "reind-pow-wire-copper-wire-node",
    ]);
    exports.canShortCircuit = list_canShortCircuit;


    const list_tierHV = new Seq([

    ]);
    exports.tierHV = list_tierHV;


    const list_tierEHV = new Seq([

    ]);
    exports.tierEHV = list_tierEHV;
  // End


  // Part: Factory
    const list_factoryFamily = new Seq([

      /* ========================================
        Section: Ball Mill
      ======================================== */

      "reind-fac-mill-ball-mill", Core.bundle.get("term.reind-term-ball-mill.name"),
      "reind-fac-mill-rod-mill", Core.bundle.get("term.reind-term-ball-mill.name"),
      "reind-fac-mill-mechanical-mill", Core.bundle.get("term.reind-term-ball-mill.name"),

      /* ========================================
        Section: Brick Press
      ======================================== */

      "reind-fac-misc-core-crafter", Core.bundle.get("term.reind-term-brick-press.name"),
      "reind-fac-proc-brick-press", Core.bundle.get("term.reind-term-brick-press.name"),

      /* ========================================
        Section: Induction Furnace
      ======================================== */

      "reind-fac-furn-kiln", Core.bundle.get("term.reind-term-induction-furnace.name"),
      "reind-fac-furn-induction-furnace", Core.bundle.get("term.reind-term-induction-furnace.name"),

      /* ========================================
        Section: Jaw Crusher
      ======================================== */

      "reind-fac-mill-jaw-crusher", Core.bundle.get("term.reind-term-jaw-crusher.name"),
      "reind-fac-mill-hammer-crusher", Core.bundle.get("term.reind-term-jaw-crusher.name"),

      /* ========================================
        Section: Primitive Brick Kiln
      ======================================== */

      "reind-fac-furn-primitive-brick-kiln", Core.bundle.get("term.reind-term-primitive-brick-kiln.name"),

      /* ========================================
        Section: Primitive Coke Oven
      ======================================== */

      "reind-fac-furn-primitive-coke-oven", Core.bundle.get("term.reind-term-primitive-coke-oven.name"),

      /* ========================================
        Section: Primitive Sintering Furnace
      ======================================== */

      "reind-fac-furn-primitive-sintering-furnace", Core.bundle.get("term.reind-term-primitive-sintering-furnace.name"),

      /* ========================================
        Section: Shaft Kiln
      ======================================== */

      "reind-fac-furn-colossal-kiln", Core.bundle.get("term.reind-term-shaft-kiln.name"),
      "reind-fac-furn-shaft-kiln", Core.bundle.get("term.reind-term-shaft-kiln.name"),
      "reind-fac-furn-rotary-kiln-m", Core.bundle.get("term.reind-term-shaft-kiln.name"),
      "reind-fac-furn-box-furnace", Core.bundle.get("term.reind-term-shaft-kiln.name"),

      /* ========================================
        Section: V-Mixer
      ======================================== */

      "reind-fac-mix-v-mixer", Core.bundle.get("term.reind-term-v-mixer.name"),
      "reind-fac-mix-3d-mixer", Core.bundle.get("term.reind-term-v-mixer.name"),
      "reind-fac-mix-conical-mixer", Core.bundle.get("term.reind-term-v-mixer.name"),

    ]);
    exports.factoryFamily = list_factoryFamily;
  // End


  // Part: Pollution
    const list_blockPollution = new Seq([
      /* tree */
      "reind-env-tree-shell-tree", -8.0,
      "reind-env-tree-dark-crab-tree", -12.0,
      "reind-env-tree-campfire-tree", -20.0,
      "reind-env-tree-dune-shield", -6.0,
      "reind-env-tree-depth-seeker", -12.0,
      "reind-env-tree-brown-snake", -8.0,
      "reind-env-tree-bleeder", -16.0,
      "reind-env-tree-umbrella-tree", -20.0,
      "reind-env-tree-green-scale", -10.0,
      "reind-env-tree-aerthcyst", -12.0,
      "reind-env-tree-marsh-cloud", -14.0,
      "reind-env-tree-red-root", -18.0,
      "reind-env-tree-salad-tree", -24.0,
      "reind-env-tree-aquatic-cloud", -18.0,
      "reind-env-tree-cyanofall", -10.0,
      "reind-env-tree-algasus", -12.0,
      "reind-env-tree-zenith", -24.0,
      "reind-env-tree-cliffsider", -8.0,
      "reind-env-tree-nester", -16.0,
      "reind-env-tree-elder-gem-tree", -26.0,
      "reind-env-tree-bush-rock-fern", -6.0,

      /* vent */

      /* miner */
      "reind-min-dril-mechanical-drill", 4.0 / 4.0,
      "reind-min-dril-pneumatic-drill", 4.0 / 4.0,
      "reind-min-dril-sand-excavator", 27.0 / 9.0,
      "reind-min-dril-pneumatic-wall-drill", 4.0 / 4.0,
      "reind-min-dril-basic-impact-drill", 6.0 / 4.0,
      "reind-min-harv-lumberjack", 1.5 / 1.0,
      "reind-min-misc-placer-miner", 27.0 / 9.0,

      /* generic factory */
      "reind-fac-air-air-collector", -2.0,
      "reind-fac-air-air-filter", -12.0 / 4.0,
      "reind-fac-proc-sawmill", 24.0 / 16.0,
      "reind-fac-sep-vibration-screen", 4.0 / 4.0,
      "reind-fac-misc-basic-chimney", 8.0 / 4.0,

      /* heat factory */
      "reind-fac-furn-primitive-glass-kiln", 27.0 / 9.0,

      /* multi-crafter */
      "reind-fac-furn-kiln", 8.0 / 4.0,
      "reind-fac-furn-colossal-kiln", 72.0 / 16.0,
      "reind-fac-furn-primitive-sintering-furnace", 15.0 / 9.0,
      "reind-fac-furn-bloomery", 16.0 / 4.0,
      "reind-fac-furn-carbonization-kiln", 8.0 / 4.0,
      "reind-fac-furn-primitive-brick-kiln", 8.0 / 4.0,
      "reind-fac-furn-primitive-coke-oven", 12.0 / 4.0,
      "reind-fac-heat-furnace-heater", 16.0 / 4.0,
      "reind-fac-mill-jaw-crusher", 6.0 / 4.0,
      "reind-fac-mill-ball-mill", 9.0 / 9.0,
      "reind-fac-mix-v-mixer", 2.0 / 4.0,
      "reind-fac-proc-brick-press", 13.5 / 9.0,
      "reind-fac-proc-charcoal-rod-maker-m", 2.0 / 4.0,
      "reind-fac-sep-dry-magnetic-separator", 13.5 / 9.0,
      "reind-fac-misc-core-crafter", 6.0 / 4.0,

      /* very specific */
      "reind-dis-aux-item-incinerator", 8.0 / 4.0,
    ]);
    exports.blockPollution = list_blockPollution;
  // End
