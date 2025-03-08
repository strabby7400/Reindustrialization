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
      "reind-eff-core-ash", "outpost-military",
      "reind-eff-core-ember", "outpost-military",
      "reind-eff-core-bonfire", "outpost-military",

      "reind-min-dril-sand-excavator", "emerald-tide",
      "reind-ilmin-dril-ids-remote-drill", "emerald-tide",
      "reind-min-dril-basic-impact-drill", "emerald-tide",
      "reind-min-dril-titan-impact-drill", "emerald-tide",
      "reind-min-scan-pulse-ore-scanner", "emerald-tide",
      "reind-min-misc-placer-miner", "emerald-tide",

      "reind-ileff-misc-ids-engine", "enclosure",
      "reind-ileff-misc-bit-bank", "enclosure",
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

      "reind-pow-boil-steam-boiler", 8,

      "reind-def-proj-basic-repair-projector", 8,

      "reind-fac-sep-dry-magnetic-separator", 2,
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
      "reind-min-dril-titan-impact-drill", 8,

      "reind-pow-gen-energizer-generator", 10,
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
      "reind-pow-hcond-copper-heat-conductor", 40.0,
      "reind-pow-hcond-steel-heat-conductor", 100.0,
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
        Section: Absorber
      ======================================== */

      /* ========================================
        Section: Alloy Furnace
      ======================================== */

      "reind-fac-furn-kiln", "alloy-furnace",
      "reind-fac-furn-induction-furnace", "alloy-furnace",

      /* ========================================
        Section: Brick Kiln
      ======================================== */

      "reind-fac-furn-primitive-brick-kiln", "brick-kiln",

      /* ========================================
        Section: Brick Press
      ======================================== */

      "reind-fac-misc-core-crafter", "brick-press",
      "reind-fac-proc-brick-press", "brick-press",

      /* ========================================
        Section: Chemical Reactor
      ======================================== */

      "reind-fac-reac-tank-reactor", "reactor",
      "reind-fac-reac-fixed-bed-reactor", "reactor",

      /* ========================================
        Section: Coke Oven
      ======================================== */

      "reind-fac-furn-primitive-coke-oven", "coke-oven",

      /* ========================================
        Section: Concentrate Smelter
      ======================================== */

      "reind-fac-furn-bricked-blast-furnace", "concentrate-smelter",

      /* ========================================
        Section: Convertor
      ======================================== */

      /* ========================================
        Section: Crafter
      ======================================== */

      "reind-fac-misc-core-crafter", "crafter",

      /* ========================================
        Section: Dust Mixer
      ======================================== */

      "reind-fac-mix-v-mixer", "dust-mixer",
      "reind-fac-mix-3d-mixer", "dust-mixer",
      "reind-fac-mix-conical-mixer", "dust-mixer",

      /* ========================================
        Section: Dust Remover
      ======================================== */

      "reind-fac-sep-cyclone-separator", "dust-remover",
      "reind-fac-sep-high-pressure-cyclone-separator", "dust-remover",

      /* ========================================
        Section: Electrolyzer
      ======================================== */

      /* ========================================
        Section: Fluid Dryer
      ======================================== */

      "reind-fac-reac-fixed-bed-reactor", "fluid-dryer",

      /* ========================================
        Section: Grain Dryer
      ======================================== */

      "reind-fac-rmv-hot-air-dryer", "grain-dryer",

      /* ========================================
        Section: Grain Heater
      ======================================== */

      /* ========================================
        Section: Heat Exchanger
      ======================================== */

      "reind-fac-heat-vent-heat-exchanger", "heat-exchanger",
      "reind-fac-heat-temperature-control-unit", "heat-exchanger",

      /* ========================================
        Section: Heater
      ======================================== */

      "reind-fac-heat-furnace-heater", "heater",
      "reind-fac-heat-vent-heat-exchanger", "heater",

      /* ========================================
        Section: Inlet
      ======================================== */

      "reind-fac-misc-generic-inlet", "inlet",
      "reind-fac-misc-fuel-inlet", "inlet",

      /* ========================================
        Section: Leacher
      ======================================== */

      /* ========================================
        Section: Liquid Mixer
      ======================================== */

      "reind-fac-mix-tank-mixer", "liquid-mixer",

      /* ========================================
        Section: Melt Reactor
      ======================================== */

      "reind-fac-furn-bricked-blast-furnace", "melt-reactor",

      /* ========================================
        Section: Melter
      ======================================== */

      "reind-fac-furn-kiln", "melter",
      "reind-fac-furn-colossal-kiln", "melter",

      /* ========================================
        Section: Pressure Pump
      ======================================== */

      "reind-fac-air-piston-pressure-pump", "pressure-pump",
      "reind-fac-air-liquid-ring-pressure-pump", "pressure-pump",

      /* ========================================
        Section: Pulverizer
      ======================================== */

      "reind-fac-mill-mechanical-mill", "pulverizer",
      "reind-fac-mill-ball-mill", "pulverizer",
      "reind-fac-mill-rod-mill", "pulverizer",

      /* ========================================
        Section: Purifier I
      ======================================== */

      "reind-fac-sep-dry-magnetic-separator", "purifier-i",
      "reind-fac-sep-mineral-jig-m", "purifier-i",                // NOTE: Usually not used for concentrate purification.

      /* ========================================
        Section: Purifier II
      ======================================== */

      /* ========================================
        Section: Roasting Furnace
      ======================================== */

      "reind-fac-furn-colossal-kiln", "roasting-furnace",
      "reind-fac-furn-shaft-kiln", "roasting-furnace",
      "reind-fac-furn-rotary-kiln-m", "roasting-furnace",
      "reind-fac-furn-box-furnace", "roasting-furnace",

      /* ========================================
        Section: Rock Crusher
      ======================================== */

      "reind-fac-mill-jaw-crusher", "rock-crusher",
      "reind-fac-mill-hammer-crusher", "rock-crusher",                // NOTE: Hard materials are excluded.

      /* ========================================
        Section: Sintering Furnace
      ======================================== */

      "reind-fac-furn-primitive-sintering-furnace", "sintering-furnace",

      /* ========================================
        Section: Vibration Screen
      ======================================== */

      "reind-fac-sep-vibration-screen", "vibration-screen",

    ]);
    exports.factoryFamily = li_factoryFamily;


    const li_structure = new Seq([
      "reind-fac-furn-bricked-blast-furnace-controller", "reind-fac-furn-bricked-blast-furnace", new Seq([
        new Point2(-3, -3), "reind-def-wall-concrete-barricade",
        new Point2(-1, -3), "reind-def-wall-plate-wall-steel",
        new Point2(0, -3), "reind-def-wall-plate-wall-steel",
        new Point2(1, -3), "reind-def-wall-plate-wall-steel",
        new Point2(2, -3), "reind-def-wall-concrete-barricade",

        new Point2(-1, -2), "reind-def-wall-brick-wall-mullite",
        new Point2(0, -2), "reind-def-wall-brick-wall-mullite",
        new Point2(1, -2), "reind-def-wall-brick-wall-mullite",

        new Point2(-3, -1), "reind-def-wall-plate-wall-steel",
        new Point2(-2, -1), "reind-def-wall-brick-wall-mullite",
        new Point2(-1, -1), "reind-def-wall-brick-wall-silica",
        new Point2(0, -1), "reind-def-wall-brick-wall-silica",
        new Point2(1, -1), "reind-def-wall-brick-wall-silica",
        new Point2(2, -1), "reind-def-wall-brick-wall-mullite",
        new Point2(3, -1), "reind-def-wall-plate-wall-steel",

        new Point2(-3, 0), "reind-def-wall-plate-wall-steel",
        new Point2(-2, 0), "reind-def-wall-brick-wall-mullite",
        new Point2(-1, 0), "reind-def-wall-brick-wall-silica",
        new Point2(1, 0), "reind-def-wall-brick-wall-silica",
        new Point2(2, 0), "reind-def-wall-brick-wall-mullite",
        new Point2(3, 0), "reind-def-wall-plate-wall-steel",

        new Point2(-3, 1), "reind-def-wall-plate-wall-steel",
        new Point2(-2, 1), "reind-def-wall-brick-wall-mullite",
        new Point2(-1, 1), "reind-def-wall-brick-wall-silica",
        new Point2(0, 1), "reind-def-wall-brick-wall-silica",
        new Point2(1, 1), "reind-def-wall-brick-wall-silica",
        new Point2(2, 1), "reind-def-wall-brick-wall-mullite",
        new Point2(3, 1), "reind-def-wall-plate-wall-steel",

        new Point2(-3, 2), "reind-def-wall-concrete-barricade",
        new Point2(-1, 2), "reind-def-wall-brick-wall-mullite",
        new Point2(0, 2), "reind-def-wall-brick-wall-mullite",
        new Point2(1, 2), "reind-def-wall-brick-wall-mullite",
        new Point2(2, 2), "reind-def-wall-concrete-barricade",

        new Point2(-1, 3), "reind-def-wall-plate-wall-steel",
        new Point2(0, 3), "reind-def-wall-plate-wall-steel",
        new Point2(1, 3), "reind-def-wall-plate-wall-steel",
      ]),

      "reind-fac-sep-high-pressure-cyclone-separator-controller", "reind-fac-sep-high-pressure-cyclone-separator", new Seq([
        new Point2(-1, -1), "reind-def-wall-plate-wall-steel",
        new Point2(0, -1), "reind-def-wall-plate-wall-steel",
        new Point2(1, -1), "reind-fac-sep-cyclone-separator",

        new Point2(-1, 0), "reind-def-wall-plate-wall-steel",

        new Point2(-1, 1), "reind-fac-sep-cyclone-separator",
        new Point2(1, 1), "reind-def-wall-plate-wall-steel",
        new Point2(2, 1), "reind-def-wall-plate-wall-steel",

        new Point2(1, 2), "reind-def-wall-plate-wall-steel",
        new Point2(2, 2), "reind-def-wall-plate-wall-steel",
      ]),
    ]);
    exports.structure = li_structure;
  // End


  // Part: Pollution
    const li_blockPollution = new Seq([

      /* ========================================
        Section: Tree (And Fungi)
      ======================================== */

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

      /* ========================================
        Section: Miner
      ======================================== */

      "reind-min-dril-mechanical-drill", 4.0 / 4.0,
      "reind-min-dril-pneumatic-drill", 4.0 / 4.0,
      "reind-min-dril-sand-excavator", 27.0 / 9.0,
      "reind-min-dril-pneumatic-wall-drill", 4.0 / 4.0,
      "reind-min-dril-basic-impact-drill", 6.0 / 4.0,
      "reind-min-dril-titan-impact-drill", 40.0 / 16.0,
      "reind-min-harv-lumberjack", 1.5 / 1.0,
      "reind-min-misc-placer-miner", 27.0 / 9.0,

      /* ========================================
        Section: Generic Factory
      ======================================== */

      "reind-fac-air-air-collector", -2.0,
      "reind-fac-air-air-filter", -12.0 / 4.0,
      "reind-fac-proc-sawmill", 24.0 / 16.0,
      "reind-fac-sep-vibration-screen", 4.0 / 4.0,
      "reind-fac-misc-basic-chimney", 8.0 / 4.0,

      /* ========================================
        Section: Heat Factory
      ======================================== */

      "reind-fac-furn-primitive-glass-kiln", 27.0 / 9.0,

      /* ========================================
        Section: Recipe Factory & Fragment Factory
      ======================================== */

      "reind-fac-furn-kiln", 8.0 / 4.0,
      "reind-fac-furn-colossal-kiln", 72.0 / 16.0,
      "reind-fac-furn-primitive-sintering-furnace", 15.0 / 9.0,
      "reind-fac-furn-bloomery", 16.0 / 4.0,
      "reind-fac-furn-bricked-blast-furnace", 171.5 / 49.0,
      "reind-fac-furn-carbonization-kiln", 8.0 / 4.0,
      "reind-fac-furn-primitive-brick-kiln", 8.0 / 4.0,
      "reind-fac-furn-primitive-coke-oven", 12.0 / 4.0,
      "reind-fac-heat-furnace-heater", 16.0 / 4.0,
      "reind-fac-mill-jaw-crusher", 6.0 / 4.0,
      "reind-fac-mill-hammer-crusher", 13.5 / 9.0,
      "reind-fac-mill-mechanical-mill", 6.0 / 4.0,
      "reind-fac-mill-ball-mill", 9.0 / 9.0,
      "reind-fac-mix-v-mixer", 2.0 / 4.0,
      "reind-fac-proc-brick-press", 13.5 / 9.0,
      "reind-fac-proc-charcoal-rod-maker-m", 2.0 / 4.0,
      "reind-fac-proc-charcoal-rod-maker-r1", 2.0 / 4.0,
      "reind-fac-sep-dry-magnetic-separator", 13.5 / 9.0,
      "reind-fac-sep-mineral-jig-m", 8.0 / 4.0,
      "reind-fac-sep-mineral-jig-r1", 8.0 / 4.0,
      "reind-fac-misc-core-crafter", 6.0 / 4.0,

      /* ========================================
        Section: VERY SPECIFIC ZONE
      ======================================== */

      "reind-dis-aux-item-incinerator", 8.0 / 4.0,

    ]);
    exports.blockPollution = li_blockPollution;
  // End
