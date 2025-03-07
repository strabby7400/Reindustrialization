const gi = [
  "reind-item-bio-charcoal", 80,
];

const rc = {
  "parent": "reind-fac-furn-colossal-kiln",

  "recipes": new Seq ([


    /* ========================================
      Section: Batch Crafting
    ======================================== */


    // Native Copper
    {
      "icon": "reind-item-ore-native-copper",
      "category": "batch-crafting",
      "inputs": new Seq([
        "reind-item-ore-native-copper", 640,
        "reind-item-ore-lignite", 480,
      ]),
      "outputs": new Seq([
        "reind-item-chem-copper", 580,
      ]),
      "randOutputs": new Seq([
        "reind-item-chem-copper", 120, 0.5,
      ]),
      "timeScale": 16.5,
    },


    // Crude Graphite
    {
      "icon": "reind-item-ore-crude-graphite",
      "category": "batch-crafting",
      "inputs": new Seq([
        "reind-item-ore-crude-graphite", 640,
        "reind-item-ore-lignite", 480,
      ]),
      "outputs": new Seq([
        "reind-item-chem-graphite", 140,
      ]),
      "randOutputs": new Seq([
        "reind-item-chem-graphite", 120, 0.5,
      ]),
      "timeScale": 16.5,
    },


    // Galena
    {
      "icon": "reind-item-ore-galena",
      "category": "batch-crafting",
      "inputs": new Seq([
        "reind-item-ore-galena", 640,
        "reind-item-ore-lignite", 480,
      ]),
      "outputs": new Seq([
        "reind-item-chem-copper", 460,
      ]),
      "randOutputs": new Seq([
        "reind-item-chem-copper", 120, 0.5,
      ]),
      "timeScale": 16.5,
    },


    // Cassiterite
    {
      "icon": "reind-item-ore-cassiterite",
      "category": "batch-crafting",
      "inputs": new Seq([
        "reind-item-ore-cassiterite", 640,
        "reind-item-ore-lignite", 480,
      ]),
      "outputs": new Seq([
        "reind-item-chem-tin", 460,
      ]),
      "randOutputs": new Seq([
        "reind-item-chem-tin", 120, 0.5,
      ]),
      "timeScale": 16.5,
    },


    // Sphalerite
    {
      "icon": "reind-item-ore-sphalerite",
      "category": "batch-crafting",
      "inputs": new Seq([
        "reind-item-ore-sphalerite", 640,
        "reind-item-ore-lignite", 480,
      ]),
      "outputs": new Seq([
        "reind-item-chem-zinc", 460,
      ]),
      "randOutputs": new Seq([
        "reind-item-chem-zinc", 120, 0.5,
      ]),
      "timeScale": 16.5,
    },


    /* ========================================
      Section: Roasting
    ======================================== */


    /* <---------------- chunks ----------------> */


    // Chunks (Dolomite)
    {
      "icon": "reind-item-int-chunks-dolomite",
      "category": "roasting",
      "inputs": new Seq([
        "reind-item-int-chunks-dolomite", 160,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-chem-magnesia-sand", 80,
      ]),
    },


    // Chunks (Limestone)
    {
      "icon": "reind-item-int-chunks-limestone",
      "category": "roasting",
      "inputs": new Seq([
        "reind-item-int-chunks-limestone", 160,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-chem-lime", 80,
      ]),
    },


    /* <---------------- blend ----------------> */


    // Blend (Cement)
    {
      "icon": "reind-item-int-blend-roasted-cement",
      "category": "roasting",
      "inputs": new Seq([
        "reind-item-int-blend-cement", 80,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-blend-roasted-cement", 80,
      ]),
    },


  ]),
};
exports.rc = rc;
