const list_pollutionCrafter = new Seq([
  "reind-min-tree-latex-tapper", 600.0,
]);
exports.pollutionCrafter = list_pollutionCrafter;


const list_pollutionUnit = new Seq([
  "reind-unit-core-c1-expedition-i", 1200.0,
  "reind-unit-core-c2-expedition-ii", 1200.0,
  "reind-unit-spec-cargo-drone", 1200.0,

  "reind-unit-inf-ast1-74ka", 900.0,
]);
exports.pollutionUnit = list_pollutionUnit;


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
  // Vents
  "reind-tile-vent-ammonia-dirt", 12.0 / 9.0,
  "reind-tile-vent-ammonia-mud", 12.0 / 9.0,
  "reind-tile-vent-sulfur-dioxide-sandstone", 24.0 / 9.0,
  // Waste
  "reind-tile-liq-waste-water", 3.0,
]);
exports.floor = list_pollutionFloor;


const list_pollutionBlock = new Seq([
  // Trees
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
  // dis
  "reind-dis-misc-item-incinerator", 8.0 / 4.0,
  // min
  "reind-min-bur-generic-impact-drill", 8.0 / 4.0,
  "reind-min-flr-mechanical-drill", 4.0 / 4.0,
  "reind-min-flr-pneumatic-drill", 6.0 / 4.0,
  "reind-min-flr-steam-drill", 13.5 / 9.0,
  "reind-min-flr-sand-excavator", 27.0 / 9.0,
  "reind-min-wall-pneumatic-wall-drill", 5.0 / 4.0,
  // fac (dec)
  "reind-fac-air-air-collector", -1.5,
  "reind-fac-air-air-filter", -16.0 / 4.0,
  // fac (inc)
  "reind-fac-bio-carbonization-kiln", 13.5 / 9.0,
  "reind-fac-furn-bloomery", 16.0 / 4.0,
  "reind-fac-furn-colossal-kiln", 48.0 / 16.0,
  "reind-fac-furn-combustion-chamber", 24.0 / 4.0,
  "reind-fac-furn-kiln", 10.0 / 4.0,
  "reind-fac-furn-primitive-coke-oven", 20.0 / 4.0,
  "reind-fac-heat-combustion-heater", 18.0 / 4.0,
  "reind-fac-proc-box-furnace", 24.0 / 9.0,
  "reind-fac-proc-glass-tank-furnace", 24.0 / 16.0,
  "reind-fac-reac-tank-reactor", 45.0 / 9.0,
  "reind-fac-sep-cyclone-separator", 2.0 / 4.0,
  "reind-fac-sep-dry-magnetic-separator", 6.0 / 4.0,
  "reind-fac-sep-centrifugal-separator", 9.0 / 9.0,
]);
exports.build = list_pollutionBuild;
