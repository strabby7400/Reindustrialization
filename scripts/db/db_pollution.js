// Checked on 11-2-2024


/*
    ==================================================
    Part: List
    ==================================================
*/


  // Start: Influence
    const list_pollutionWater = new Seq([
      "reind-tile-liq-brine", 0.1,
      "reind-tile-liq-brine-shallow", 0.05,
      "reind-tile-liq-water", 0.15,
      "reind-tile-liq-water-green", 0.175,
      "reind-tile-liq-water-sea", 0.15,
      "reind-tile-liq-water-sea-shallow", 0.075,
      "reind-tile-liq-water-sea-green", 0.2,
      "reind-tile-liq-water-sea-green-shallow", 0.1,
    ]);
    exports.water = list_pollutionWater;


    const list_pollutionFloor = new Seq([
      "reind-tile-vent-ammonia-dirt", 12.0 / 9.0,
      "reind-tile-vent-ammonia-mud", 12.0 / 9.0,
      "reind-tile-vent-sulfur-dioxide-barite", 24.0 / 9.0,
      "reind-tile-vent-sulfur-dioxide-sandstone", 24.0 / 9.0,

      "reind-tile-liq-waste-water", 3.0,
    ]);
    exports.floor = list_pollutionFloor;


    const list_pollutionBlock = new Seq([
      "reind-prop-tree-aerth-cyst", -12.0,
      "reind-prop-tree-algasus", -8.0,
      "reind-prop-tree-brown-snake", -3.0,
      "reind-prop-tree-cliffside", -3.5,
      "reind-prop-tree-cyanofall", -3.0,
      "reind-prop-tree-depth-seeker", -4.0,
      "reind-prop-tree-dune-shield", -2.0,
      "reind-prop-tree-green-scale", -4.0,
      "reind-prop-tree-marsh-cloud", -8.0,
      "reind-prop-tree-salad", -14.0,
      "reind-prop-tree-shell", -3.5,
      "reind-prop-tree-umbrella", -6.0,
      "reind-prop-tree-zenith", -12.0,
    ]);
    exports.block = list_pollutionBlock;


    const list_pollutionBuild = new Seq([
      "reind-dis-misc-item-incinerator", 8.0 / 4.0,

      "reind-min-attr-placer-miner", 27.0 / 9.0,
      "reind-min-bur-generic-impact-drill", 8.0 / 4.0,
      "reind-min-flr-mechanical-drill", 4.0 / 4.0,
      "reind-min-flr-pneumatic-drill", 6.0 / 4.0,
      "reind-min-flr-steam-drill", 13.5 / 9.0,
      "reind-min-flr-sand-excavator", 27.0 / 9.0,
      "reind-min-wall-pneumatic-wall-drill", 5.0 / 4.0,

      "reind-fac-air-air-collector", -1.5,
      "reind-fac-air-air-filter", -16.0 / 4.0,

      "reind-fac-bio-carbonization-kiln", 13.5 / 9.0,
      "reind-fac-furn-bloomery", 16.0 / 4.0,
      "reind-fac-furn-colossal-kiln", 48.0 / 16.0,
      "reind-fac-furn-combustion-chamber", 24.0 / 4.0,
      "reind-fac-furn-kiln", 10.0 / 4.0,
      "reind-fac-furn-primitive-coke-oven", 20.0 / 4.0,
      "reind-fac-heat-combustion-heater", 18.0 / 4.0,
      "reind-fac-liq-slurry-thickener", 32.0 / 16.0,
      "reind-fac-mix-tank-mixer", 15.0 / 9.0,
      "reind-fac-proc-box-furnace", 24.0 / 9.0,
      "reind-fac-proc-glass-tank-furnace", 24.0 / 16.0,
      "reind-fac-reac-fixed-bed-reactor", 27.0 / 9.0,
      "reind-fac-reac-tank-reactor", 45.0 / 9.0,
      "reind-fac-sep-centrifugal-separator", 9.0 / 9.0,
      "reind-fac-sep-cyclone-separator", 2.0 / 4.0,
      "reind-fac-sep-dry-magnetic-separator", 6.0 / 4.0,
      "reind-fac-sep-filter-press-left", 8.0 / 4.0,
      "reind-fac-sep-filter-press-right", 8.0 / 4.0,
      "reind-fac-sep-hydrocyclone", 32.0 / 16.0,
      "reind-fac-sep-sedimentary-tank", 32.0 / 16.0,
    ]);
    exports.build = list_pollutionBuild;
  // End
