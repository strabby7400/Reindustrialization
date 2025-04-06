const gi = [
  "reind-effc-effc-vibration-screen", 0.01666667,
  "reind-liq-ore-water", 0.1,
];
const go = [
  "reind-liq-was-waste-slurry", 0.1,
];


const rc = {
  "parent": "reind-fac-mill-jaw-crusher",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Coarse Aggregate : Chunks (Aggregate)
    {
      "icon": "reind-item-int-chunks-aggregate",
      "category": "special",
      "inputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-coarse-aggregate", 3,
      ].concat(go)),
    },


    // Fine Aggregate : Coarse Aggregate
    {
      "icon": "reind-item-buil-coarse-aggregate",
      "category": "special",
      "inputs": new Seq([
        "reind-item-buil-coarse-aggregate", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-fine-aggregate", 3,
      ].concat(go)),
    },


    // Coarse Aggregate : Pumice
    {
      "icon": "reind-item-ore-pumice",
      "category": "special",
      "inputs": new Seq([
        "reind-item-ore-pumice", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-coarse-aggregate", 3,
      ].concat(go)),
    },


    /* ========================================
      Section: Crushing
    ======================================== */


    // Dolomite
    {
      "icon": "reind-item-ore-barite",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-barite", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-barite", 3,
      ].concat(go)),
    },


    // Crude Sulfur
    {
      "icon": "reind-item-ore-crude-sulfur",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-crude-sulfur", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-crude-sulfur", 3,
      ].concat(go)),
    },


    // Dolomite
    {
      "icon": "reind-item-ore-dolomite",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-dolomite", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-dolomite", 3,
      ].concat(go)),
    },


    // Gypsum
    {
      "icon": "reind-item-ore-gypsum",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-gypsum", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-gypsum", 3,
      ].concat(go)),
    },


    // Limestone
    {
      "icon": "reind-item-ore-limestone",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-limestone", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-limestone", 3,
      ].concat(go)),
    },


    // Silica Stone
    {
      "icon": "reind-item-ore-silica-stone",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-silica-stone", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-silica-stone", 3,
      ].concat(go)),
    },


    // Zircon
    {
      "icon": "reind-item-ore-zircon",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-zircon", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-zircon", 3,
      ].concat(go)),
    },


    /* <---------------- aggregate ----------------> */


    // Clastic
    {
      "icon": "reind-item-ore-rock-shard-clastic",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-clastic", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go)),
    },


    // Hypabyssal
    {
      "icon": "reind-item-ore-rock-shard-hypabyssal",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-hypabyssal", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go)),
    },


    // Lava
    {
      "icon": "reind-item-ore-rock-shard-lava",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-lava", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go)),
    },


    // Plutonic
    {
      "icon": "reind-item-ore-rock-shard-plutonic",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-plutonic", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go)),
    },


    // Clastic Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-clastic-sedimentary",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-clastic-sedimentary", 3,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go)),
    },


    // Gangue
    {
      "icon": "reind-item-was-gangue",
      "category": "crushing",
      "inputs": new Seq([
        "reind-item-was-gangue", 6,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go)),
    },


  ]),
};
exports.rc = rc;
