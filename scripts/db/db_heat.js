// For fluids
const list_heatLevel = new Seq([
  "reind-gas-chem-sulfur-trioxide", 2.0,
  "reind-gas-misc-steam", 1.0,
  "reind-liq-int-glass-melt", 3.0,
]);
exports.heatLevel = list_heatLevel;


// For liquid blocks
const list_heatResistence = new Seq([
  "reind-bliq-brd-fluid-pipe-bridge", 5.0,
  "reind-bliq-cond-bronze-fluid-pipe", 10.0,
  "reind-bliq-cond-steel-fluid-pipe", 25.0,
  "reind-bliq-pump-piston-fluid-pump", 10.0,
  "reind-bliq-stor-fluid-cell", 20.0,
  "reind-bliq-stor-steel-fluid-cylinder", 300.0,
]);
exports.heatResistence = list_heatResistence;


// For heat blocks
const list_heatSafeLimit = new Seq([
  "reind-fac-heat-heat-conductor-plate", 50.0,
  "reind-fac-heat-heat-router-plate", 50.0,
]);
exports.heatSafeLimit = list_heatSafeLimit;
