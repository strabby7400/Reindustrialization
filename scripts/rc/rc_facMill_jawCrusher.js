const gi = [
  "reind-effc-effc-vibration-screen", 0.01666667,
  "reind-liq-ore-water", 0.1,
];
const go = [
  "reind-liq-was-waste-slurry", 0.1,
];


const rc = {
  "parent": "reind-fac-mill-jaw-crusher",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Coarse Aggregate : Chunks (Aggregate)
    {
      "icon": "reind-item-int-chunks-aggregate",
      "category": "special",
      "inputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-coarse-aggregate", 3,
      ].concat(go),
    },


    // Fine Aggregate : Coarse Aggregate
    {
      "icon": "reind-item-buil-coarse-aggregate",
      "category": "special",
      "inputs": [
        "reind-item-buil-coarse-aggregate", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-fine-aggregate", 3,
      ].concat(go),
    },


    // Coarse Aggregate : Pumice
    {
      "icon": "reind-item-ore-pumice",
      "category": "special",
      "inputs": [
        "reind-item-ore-pumice", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-coarse-aggregate", 3,
      ].concat(go),
    },


    /* ========================================
      Section: Crushing
    ======================================== */


    // Dolomite
    {
      "icon": "reind-item-ore-dolomite",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-dolomite", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-dolomite", 3,
      ].concat(go),
    },


    // Gypsum
    {
      "icon": "reind-item-ore-gypsum",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-gypsum", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-gypsum", 3,
      ].concat(go),
    },


    // Limestone
    {
      "icon": "reind-item-ore-limestone",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-limestone", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-limestone", 3,
      ].concat(go),
    },


    /* <---------------- aggregate ----------------> */


    // Clastic
    {
      "icon": "reind-item-ore-rock-shard-clastic",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-rock-shard-clastic", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go),
    },


    // Hypabyssal
    {
      "icon": "reind-item-ore-rock-shard-hypabyssal",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-rock-shard-hypabyssal", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go),
    },


    // Lava
    {
      "icon": "reind-item-ore-rock-shard-lava",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-rock-shard-lava", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go),
    },


    // Plutonic
    {
      "icon": "reind-item-ore-rock-shard-plutonic",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-rock-shard-plutonic", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go),
    },


    // Clastic Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-clastic-sedimentary",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-rock-shard-clastic-sedimentary", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go),
    },


    // Gangue
    {
      "icon": "reind-item-was-gangue",
      "category": "crushing",
      "inputs": [
        "reind-item-was-gangue", 6,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-aggregate", 3,
      ].concat(go),
    },


    /* <---------------- barium ----------------> */


    // Barite
    {
      "icon": "reind-item-ore-barite",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-barite", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-barite", 3,
      ].concat(go),
    },


    /* <---------------- phosphorus ----------------> */


    // Fluorapatite
    {
      "icon": "reind-item-ore-fluorapatite",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-fluorapatite", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-fluorapatite", 3,
      ].concat(go),
    },


    /* <---------------- silicon ----------------> */


    // Silica Stone
    {
      "icon": "reind-item-ore-silica-stone",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-silica-stone", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-silica-stone", 3,
      ].concat(go),
    },


    /* <---------------- sulfur ----------------> */


    // Crude Sulfur
    {
      "icon": "reind-item-ore-crude-sulfur",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-crude-sulfur", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-crude-sulfur", 3,
      ].concat(go),
    },


    /* <---------------- zirconium ----------------> */


    // Zircon
    {
      "icon": "reind-item-ore-zircon",
      "category": "crushing",
      "inputs": [
        "reind-item-ore-zircon", 3,
      ].concat(gi),
      "outputs": [
        "reind-item-int-chunks-zircon", 3,
      ].concat(go),
    },


  ],
};
exports.rc = rc;
