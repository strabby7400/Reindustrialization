const gi = [
  "reind-effc-effc-vibration-screen", 0.01666667,
  "reind-liq-ore-water", 0.15,
];

const go = [
  "reind-liq-was-waste-slurry", 0.15,
];

const rc = {
  "parent": "reind-fac-mill-hammer-crusher",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Coarse Aggregate : Chunks (Aggregate)
    {
      "icon": "reind-item-int-chunks-aggregate",
      "category": "special",
      "inputs": new Seq([
        "reind-item-int-chunks-aggregate", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-coarse-aggregate", 10,
      ].concat(go)),
    },


    // Fine Aggregate : Coarse Aggregate
    {
      "icon": "reind-item-buil-fine-aggregate",
      "category": "special",
      "inputs": new Seq([
        "reind-item-buil-coarse-aggregate", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-fine-aggregate", 10,
      ].concat(go)),
    },


    // Coarse Aggregate : Pumice
    {
      "icon": "reind-item-ore-pumice",
      "category": "special",
      "inputs": new Seq([
        "reind-item-ore-pumice", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-coarse-aggregate", 10,
      ].concat(go)),
    },


    /* ========================================
      Section: Crushing
    ======================================== */


    // Crude Sulfur
    {
      "icon": "reind-item-ore-crude-sulfur",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-crude-sulfur", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-crude-sulfur", 10,
      ].concat(go)),
    },


    // Dolomite
    {
      "icon": "reind-item-ore-dolomite",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-dolomite", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-dolomite", 10,
      ].concat(go)),
    },


    // Gypsum
    {
      "icon": "reind-item-ore-gypsum",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-gypsum", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-gypsum", 10,
      ].concat(go)),
    },


    // Limestone
    {
      "icon": "reind-item-ore-limestone",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-limestone", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-limestone", 10,
      ].concat(go)),
    },


    // Silica Stone
    {
      "icon": "reind-item-ore-silica-stone",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-silica-stone", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-silica-stone", 10,
      ].concat(go)),
    },


    /* <---------------- aggregate ----------------> */


    // Clastic
    {
      "icon": "reind-item-ore-rock-shard-clastic",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-clastic", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 10,
      ].concat(go)),
    },


    // Clastic Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-clastic-sedimentary",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-clastic-sedimentary", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 10,
      ].concat(go)),
    },


    // Gangue
    {
      "icon": "reind-item-was-gangue",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-was-gangue", 10,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-was-gangue", 10,
      ].concat(go)),
    },


  ]),
};
exports.rc = rc;
