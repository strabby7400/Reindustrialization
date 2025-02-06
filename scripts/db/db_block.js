/*
  ========================================
  Section: Definition
  ========================================
*/


  const grp_wood = new Seq([
    "reind-bliq-cond-wooden-fluid-pipe",
  ]);
  exports.grp_wood = grp_wood;


  const grp_copper = new Seq([
    "reind-bliq-pump-primitive-fluid-pump",

    "reind-bliq-cond-bronze-fluid-pipe",

    "reind-bliq-brd-primitive-fluid-pipe-bridge",

    "reind-bliq-stor-liquid-cell",
  ]);
  exports.grp_copper = grp_copper;


  const grp_steel = new Seq([
    "reind-bliq-pump-piston-fluid-pump",

    "reind-bliq-cond-steel-fluid-pipe",

    "reind-bliq-aux-fluid-unloader",

    "reind-bliq-stor-liquid-tank",

    "reind-bliq-stor-gas-cylinder",
  ]);
  exports.grp_steel = grp_steel;


  const grp_stainlessSteel = new Seq([

  ]);
  exports.grp_stainlessSteel = grp_stainlessSteel;


  const grp_glass = new Seq([
    "reind-bliq-cond-tempered-glass-fluid-pipe",
  ]);
  exports.grp_glass = grp_glass;


/*
  ========================================
  Section: List
  ========================================
*/


  // Part: Generic
    /* NOTE: Sets stat for faction. */
    const li_blockFaction = new Seq([
      "reind-eff-core-ash", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-eff-core-ember", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-eff-core-bonfire", Core.bundle.get("term.reind-term-outpost-military.name"),

      "reind-min-dril-sand-excavator", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-dril-basic-impact-drill", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-dril-titan-impact-drill", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-scan-pulse-ore-scanner", Core.bundle.get("term.reind-term-emerald-tide.name"),
      "reind-min-misc-placer-miner", Core.bundle.get("term.reind-term-emerald-tide.name"),

      "reind-ileff-misc-ids-engine", Core.bundle.get("term.reind-term-enclosure.name"),
      "reind-ileff-misc-bit-bank", Core.bundle.get("term.reind-term-enclosure.name"),
    ]);
    exports.blockFaction = li_blockFaction;


    const li_attrMap = new Seq([
      "reind-min-misc-placer-miner", "reind-attr-flr-placer",
    ]);
    exports.attrMap = li_attrMap;


    const li_genericRange = new Seq([
      "reind-min-harv-mycelial-harvester", 5,

      "reind-min-scan-pulse-ore-scanner", 8,

      "reind-pow-gen-energizer-generator", 10,
      "reind-pow-gen-tidal-generator", 6,
    ]);
    exports.genericRange = li_genericRange;


    const li_impactRange = new Seq([
      "reind-min-dril-basic-impact-drill", 48.0,
      "reind-min-dril-titan-impact-drill", 32.0,

      "reind-dis-mdr-local-mass-driver", 32.0,
      "reind-dis-mdr-standard-mass-driver", 72.0,
    ]);
    exports.impactRange = li_impactRange;


    const li_epRange = new Seq([
      "reind-min-dril-titan-impact-drill", 64.0,

      "reind-pow-gen-energizer-generator", 80.0,
    ]);
    exports.epRange = li_epRange;


    const li_epRequirement = new Seq([
      "reind-min-dril-titan-impact-drill", 2.0,

      "reind-pow-gen-energizer-generator", 5.0,
    ]);
    exports.epRequirement = li_epRequirement;
  // End


  // Part: Miner
    const li_depthTierMultiplier = new Seq([
      "reind-min-dril-basic-impact-drill", 0.5,
      "reind-min-dril-titan-impact-drill", 0.7,
    ]);
    exports.depthTierMultiplier = li_depthTierMultiplier;
  // End


  // Part: Item Block
    /* NOTE: Only used for stats. */
    const li_transportSpeed = new Seq([
      "reind-dis-brd-primitive-conveyor-bridge", 12.0,
    ]);
    exports.transportSpeed = li_transportSpeed;


    const li_exposedToAir = new Seq([
      "reind-dis-conv-primitive-conveyor",
      "reind-dis-conv-improved-conveyor",
      "reind-dis-conv-multi-port-conveyor",

      "reind-eff-stor-crate",
    ]);
    exports.exposedToAir = li_exposedToAir;


    const li_massDriverBulletDamage = new Seq([
      "reind-dis-mdr-local-mass-driver", 90.0,
      "reind-dis-mdr-standard-mass-driver", 725.0,
    ]);
    exports.massDriverBulletDamage = li_massDriverBulletDamage;
  // End


  // Part: Liquid Block
    const li_pumpSpeed = new Seq([
      "reind-bliq-pump-primitive-fluid-pump", 3.0,
      "reind-bliq-pump-piston-fluid-pump", 15.0,
    ]);
    exports.pumpSpeed = li_pumpSpeed;


    const li_baseCorrosionResistence = new Seq([
      "wood", 1.0,
      "copper", 1.5,
      "steel", 2.0,
      "stainlessSteel", 6.0,
      "glass", 10.0,
    ]);
    exports.baseCorrosionResistence = li_baseCorrosionResistence;


    const li_specificCorrosionResistence = new Seq([
      "reind-bliq-aux-fluid-unloader", 6.0,

      "reind-bliq-stor-liquid-cell", 6.0,
      "reind-bliq-stor-liquid-tank", 15.0,

      "reind-bliq-stor-gas-cylinder", 15.0,
    ]);
    exports.specificCorrosionResistence = li_specificCorrosionResistence;


    const li_vulnerableToClogging = new Seq([
      "reind-bliq-cond-wooden-fluid-pipe",
      "reind-bliq-cond-tempered-glass-fluid-pipe",
    ]);
    exports.vulnerableToClogging = li_vulnerableToClogging;


    const li_fluidHeatCapacity = new Seq([
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
    exports.fluidHeatCapacity = li_fluidHeatCapacity;


    const li_liquidMap = new Seq([
      "reind-pow-econd-transmission-box", "reind-effc-cond-torque",
    ]);
    exports.liquidMap = li_liquidMap;


    const li_coreEffcOutput = new Seq([
      "reind-eff-core-ash", 4.0,
    ]);
    exports.coreEffcOutput = li_coreEffcOutput;
  // End


  // Part: Heat Block
    const li_heatLimit = new Seq([
      "reind-pow-hcond-copper-heat-conductor", 700.0,
      "reind-pow-hcond-steel-heat-conductor", 1000.0,
    ]);
    exports.heatLimit = li_heatLimit;


    const li_heatLoss = new Seq([
      "reind-pow-hcond-copper-heat-conductor", 0.03,
      "reind-pow-hcond-steel-heat-conductor", 0.01,
    ]);
    exports.heatLoss = li_heatLoss;


    const li_heatTransferCoefficient = new Seq([
      /* Copper */
      "reind-pow-hcond-copper-heat-conductor", 7.76,

      /* Steel */
      "reind-pow-hcond-steel-heat-conductor", 1.0,

      /* Stainless Steel */
    ]);
    exports.heatTransferCoefficient = li_heatTransferCoefficient;
  // End


  // Part: Power Block
    /* NOTE: Any blocks here will get damaged when soaked in water. */
    const li_canShortCircuit = new Seq([
      "reind-pow-wire-copper-cable",
      "reind-pow-wire-copper-wire-relay",
      "reind-pow-wire-copper-wire-node",
    ]);
    exports.canShortCircuit = li_canShortCircuit;


    const li_tierHV = new Seq([

    ]);
    exports.tierHV = li_tierHV;


    const li_tierEHV = new Seq([

    ]);
    exports.tierEHV = li_tierEHV;
  // End


  // Part: Factory
    const li_factoryFamily = new Seq([

      /* ========================================
        Section: Pulverizer
      ======================================== */

      "reind-fac-mill-ball-mill", Core.bundle.get("term.reind-term-pulverizer.name"),
      "reind-fac-mill-rod-mill", Core.bundle.get("term.reind-term-pulverizer.name"),
      "reind-fac-mill-mechanical-mill", Core.bundle.get("term.reind-term-pulverizer.name"),

      /* ========================================
        Section: Brick Press
      ======================================== */

      "reind-fac-misc-core-crafter", Core.bundle.get("term.reind-term-brick-press.name"),
      "reind-fac-proc-brick-press", Core.bundle.get("term.reind-term-brick-press.name"),

      /* ========================================
        Section: Alloy Furnace
      ======================================== */

      "reind-fac-furn-kiln", Core.bundle.get("term.reind-term-alloy-furnace.name"),
      "reind-fac-furn-induction-furnace", Core.bundle.get("term.reind-term-alloy-furnace.name"),

      /* ========================================
        Section: Rock Crusher
      ======================================== */

      "reind-fac-mill-jaw-crusher", Core.bundle.get("term.reind-term-rock-crusher.name"),
      "reind-fac-mill-hammer-crusher", Core.bundle.get("term.reind-term-rock-crusher.name"),

      /* ========================================
        Section: Brick Kiln
      ======================================== */

      "reind-fac-furn-primitive-brick-kiln", Core.bundle.get("term.reind-term-brick-kiln.name"),

      /* ========================================
        Section: Coke Oven
      ======================================== */

      "reind-fac-furn-primitive-coke-oven", Core.bundle.get("term.reind-term-coke-oven.name"),

      /* ========================================
        Section: Sintering Furnace
      ======================================== */

      "reind-fac-furn-primitive-sintering-furnace", Core.bundle.get("term.reind-term-sintering-furnace.name"),

      /* ========================================
        Section: Roasting Furnace
      ======================================== */

      "reind-fac-furn-colossal-kiln", Core.bundle.get("term.reind-term-roasting-furnace.name"),
      "reind-fac-furn-shaft-kiln", Core.bundle.get("term.reind-term-roasting-furnace.name"),
      "reind-fac-furn-rotary-kiln-m", Core.bundle.get("term.reind-term-roasting-furnace.name"),
      "reind-fac-furn-box-furnace", Core.bundle.get("term.reind-term-roasting-furnace.name"),

      /* ========================================
        Section: Dust Mixer
      ======================================== */

      "reind-fac-mix-v-mixer", Core.bundle.get("term.reind-term-dust-mixer.name"),
      "reind-fac-mix-3d-mixer", Core.bundle.get("term.reind-term-dust-mixer.name"),
      "reind-fac-mix-conical-mixer", Core.bundle.get("term.reind-term-dust-mixer.name"),

    ]);
    exports.factoryFamily = li_factoryFamily;
  // End


  // Part: Pollution
    const li_blockPollution = new Seq([
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
      "reind-min-dril-titan-impact-drill", 40.0 / 16.0,
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
    exports.blockPollution = li_blockPollution;
  // End
