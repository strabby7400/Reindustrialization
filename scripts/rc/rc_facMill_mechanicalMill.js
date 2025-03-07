const gi = [
  "reind-effc-cond-torque", 0.05,
  "reind-liq-ore-water", 0.1,
];

const go = [
  "reind-liq-was-waste-slurry", 0.1,
];

const rc = {
  "parent": "reind-fac-mill-mechanical-mill",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Fine Aggregate : Chunks (Aggregate)
    {
      "icon": "reind-item-int-chunks-aggregate",
      "category": "special",
      "inputs": new Seq([
        "reind-item-int-chunks-aggregate", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-buil-fine-aggregate", 2,
      ].concat(go)),
    },


    /* ========================================
      Section: Pulverization
    ======================================== */


    // Asbestos
    {
      "icon": "reind-item-ore-asbestos",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-asbestos", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-asbestos", 2,
      ].concat(go)),
    },


    // Raw Coal
    {
      "icon": "reind-item-ore-raw-coal",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-raw-coal", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-raw-coal", 2,
      ].concat(go)),
    },


    // Sand
    {
      "icon": "reind-item-ore-sand",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-sand", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-sand", 2,
      ].concat(go)),
    },


    // Basaltic Sand
    {
      "icon": "reind-item-ore-sand-basaltic",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-sand-basaltic", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-sand", 2,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-int-dust-rock-lava", 1, 0.5,
      ]),
    },


    /* <---------------- aluminum ----------------> */


    // Bauxite
    {
      "icon": "reind-item-ore-bauxite",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-bauxite", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-bauxite", 2,
      ].concat(go)),
    },


    /* <---------------- rock ----------------> */


    // Clastic
    {
      "icon": "reind-item-ore-rock-shard-clastic",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-clastic", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-rock-clastic", 2,
      ].concat(go)),
    },


    // Evaporite
    {
      "icon": "reind-item-ore-rock-shard-evaporite",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-evaporite", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-rock-evaporite", 2,
      ].concat(go)),
    },


    // Biological Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-biological-sedimentary",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-biological-sedimentary", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-rock-biological-sedimentary", 2,
      ].concat(go)),
    },


    // Clastic Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-clastic-sedimentary",
      "category": "pulverization",
      "inputs": new Seq([
        "reind-item-ore-rock-shard-clastic-sedimentary", 2,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-rock-clastic-sedimentary", 2,
      ].concat(go)),
    },


  ]),
};
exports.rc = rc;
