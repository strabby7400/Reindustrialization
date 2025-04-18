const gi = [
  "reind-effc-cond-torque", 0.025,
  "reind-liq-ore-water", 0.1,
];
const go = [
  "reind-liq-was-waste-slurry", 0.1,
];


const rc = {
  "parent": "reind-fac-mill-mechanical-mill",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Fine Aggregate : Chunks (Aggregate)
    {
      "icon": "reind-item-int-chunks-aggregate",
      "category": "special",
      "inputs": [
        "reind-item-int-chunks-aggregate", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-fine-aggregate", 2,
      ].concat(go),
    },


    /* ========================================
      Section: Pulverization
    ======================================== */


    // Asbestos
    {
      "icon": "reind-item-ore-asbestos",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-asbestos", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-asbestos", 2,
      ].concat(go),
    },


    // Raw Coal
    {
      "icon": "reind-item-ore-raw-coal",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-raw-coal", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-raw-coal", 2,
      ].concat(go),
    },


    // Sand
    {
      "icon": "reind-item-ore-sand",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-sand", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-sand", 2,
      ].concat(go),
    },


    // Basaltic Sand
    {
      "icon": "reind-item-ore-sand-basaltic",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-sand-basaltic", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-sand", 2,
      ].concat(go),
      "randOutputs": [
        "reind-item-int-dust-rock-lava", 1, 0.5,
      ],
    },


    /* <---------------- rock ----------------> */


    // Clastic
    {
      "icon": "reind-item-ore-rock-shard-clastic",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-clastic", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-clastic", 2,
      ].concat(go),
    },


    // Evaporite
    {
      "icon": "reind-item-ore-rock-shard-evaporite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-evaporite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-evaporite", 2,
      ].concat(go),
    },


    // Biological Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-biological-sedimentary",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-biological-sedimentary", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-biological-sedimentary", 2,
      ].concat(go),
    },


    // Clastic Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-clastic-sedimentary",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-clastic-sedimentary", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-clastic-sedimentary", 2,
      ].concat(go),
    },


    /* <---------------- aluminum ----------------> */


    // Bauxite
    {
      "icon": "reind-item-ore-bauxite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-bauxite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-bauxite", 2,
      ].concat(go),
    },


    /* <---------------- copper ----------------> */


    // Azurite
    {
      "icon": "reind-item-ore-azurite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-azurite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-azurite", 2,
      ].concat(go),
    },


    // Chalcopyrite
    {
      "icon": "reind-item-ore-chalcopyrite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-chalcopyrite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-chalcopyrite", 2,
      ].concat(go),
    },


    // Cuprite
    {
      "icon": "reind-item-ore-cuprite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-cuprite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-cuprite", 2,
      ].concat(go),
    },


    // Malachite
    {
      "icon": "reind-item-ore-malachite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-malachite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-malachite", 2,
      ].concat(go),
    },


    // Native Copper
    {
      "icon": "reind-item-ore-native-copper",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-native-copper", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-native-copper", 2,
      ].concat(go),
    },


    /* <---------------- iron ----------------> */


    // Limonite
    {
      "icon": "reind-item-ore-limonite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-limonite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-limonite", 2,
      ].concat(go),
    },


    /* <---------------- lead ----------------> */


    // Anglesite
    {
      "icon": "reind-item-ore-anglesite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-anglesite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-anglesite", 2,
      ].concat(go),
    },


    // Galena
    {
      "icon": "reind-item-ore-galena",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-galena", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-galena", 2,
      ].concat(go),
    },


    /* <---------------- manganese ----------------> */


    // Galena
    {
      "icon": "reind-item-ore-pyrolusite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-pyrolusite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-pyrolusite", 2,
      ].concat(go),
    },


    /* <---------------- mercury ----------------> */


    // Cinnabar
    {
      "icon": "reind-item-ore-cinnabar",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-cinnabar", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-cinnabar", 2,
      ].concat(go),
    },


    /* <---------------- zinc ----------------> */


    // Smithsonite
    {
      "icon": "reind-item-ore-smithsonite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-smithsonite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-smithsonite", 2,
      ].concat(go),
    },


    // Sphalerite
    {
      "icon": "reind-item-ore-sphalerite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-sphalerite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-sphalerite", 2,
      ].concat(go),
    },


  ],
};
exports.rc = rc;
