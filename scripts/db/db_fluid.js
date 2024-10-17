const list_liquidConductive = new Seq([
  "reind-liq-ore-brine",
  "reind-liq-ore-water",
  "reind-liq-ore-water-sea",
  "reind-liq-int-brine-purified",
  "reind-liq-was-waste-water",
]);
exports.liquidConductive = list_liquidConductive;


const list_corrosionPower = new Seq([
  "reind-gas-chem-ammonia", 0.002,
  "reind-gas-chem-chlorine", 0.03,
  "reind-gas-chem-sulfur-dioxide", 0.06,
  "reind-gas-chem-sulfur-trioxide", 0.08,
  "reind-liq-ore-brine", 0.004,
  "reind-liq-ore-water-sea", 0.002,
  "reind-liq-int-brine-purified", 0.004,
  "reind-liq-was-waste-water", 0.02,
]);
exports.corrosionPower = list_corrosionPower;


const list_corrosionResistence = new Seq([
  "reind-bliq-brd-fluid-pipe-bridge", 2.2,
  "reind-bliq-cond-bronze-fluid-pipe", 1.0,
  "reind-bliq-cond-steel-fluid-pipe", 1.3,
  "reind-bliq-pump-piston-fluid-pump", 1.5,
  "reind-bliq-stor-fluid-cell", 1.8,
  "reind-bliq-stor-steel-fluid-cylinder", 1.3,
]);
exports.corrosionResistence = list_corrosionResistence;


const list_corrosionResistenceMultipliers = new Seq([
  "reind-bliq-cond-bronze-fluid-pipe", "reind-gas-chem-ammonia", 0.02,
  "reind-bliq-cond-bronze-fluid-pipe", "reind-gas-chem-chlorine", 0.05,
  "reind-bliq-cond-steel-fluid-pipe", "reind-liq-ore-brine", 0.2,
  "reind-bliq-cond-steel-fluid-pipe", "reind-liq-ore-water-sea", 0.3,
  "reind-bliq-cond-steel-fluid-pipe", "reind-liq-int-brine-purified", 0.2,
  "reind-bliq-pump-piston-fluid-pump", "reind-liq-ore-brine", 0.2,
  "reind-bliq-pump-piston-fluid-pump", "reind-liq-ore-water-sea", 0.3,
  "reind-bliq-pump-piston-fluid-pump", "reind-liq-int-brine-purified", 0.2,
  "reind-bliq-stor-steel-fluid-cylinder", "reind-liq-ore-brine", 0.2,
  "reind-bliq-stor-steel-fluid-cylinder", "reind-liq-ore-water-sea", 0.3,
  "reind-bliq-stor-steel-fluid-cylinder", "reind-liq-int-brine-purified", 0.2,
]);
exports.corrosionResistenceMultipliers = list_corrosionResistenceMultipliers;

const list_effc = new Seq([
  "reind-effc-cond-pressure",
  "reind-effc-cond-pressure-ii",
  "reind-effc-cond-pressure-iii",
  "reind-effc-effc-ball-impact-i",
  "reind-effc-effc-ball-impact-ii",
  "reind-effc-effc-calculation",
  "reind-effc-effc-core",
  "reind-effc-effc-dust-removal",
  "reind-effc-effc-electrode",
  "reind-effc-effc-gas-filtering",
  "reind-effc-effc-lifting",
  "reind-effc-effc-pump",
  "reind-effc-effc-smoke-exhaust",
  "reind-effc-effc-steam",
  "reind-effc-spec-electrical-roasting-furnace",
  "reind-effc-spec-industrial-blast-furnace",
  "reind-ileffc-effc-ids",
]);
exports.effc = list_effc;
