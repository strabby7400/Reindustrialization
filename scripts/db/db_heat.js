// For fluids
const list_heatLevel = new Seq([
  "reind-gas-chem-sulfur-dioxide", 160.0,
  "reind-gas-chem-sulfur-trioxide", 400.0,
  "reind-gas-misc-steam", 100.0,
  "reind-liq-int-glass-melt", 1300.0,
]);
exports.heatLevel = list_heatLevel;


// For liquid blocks
const list_heatResistence = new Seq([
  "reind-bliq-brd-fluid-pipe-bridge", 800.0,
  "reind-bliq-cond-bronze-fluid-pipe", 800.0,
  "reind-bliq-cond-steel-fluid-pipe", 1000.0,
  "reind-bliq-cond-tempered-glass-fluid-pipe", 250.0,
  "reind-bliq-cond-wooden-fluid-pipe", 50.0,
  "reind-bliq-pump-piston-fluid-pump", 800.0,
  "reind-bliq-stor-fluid-cell", 800,
  "reind-bliq-stor-steel-fluid-cylinder", 1000.0,
]);
exports.heatResistence = list_heatResistence;


// For heat blocks
const list_heatSafeLimit = new Seq([
  "reind-fac-heat-heat-conductor-plate", 50.0,
  "reind-fac-heat-heat-router-plate", 50.0,
]);
exports.heatSafeLimit = list_heatSafeLimit;
