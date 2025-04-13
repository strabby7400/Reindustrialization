const gi = [
  "reind-item-bio-charcoal", 60,
];
const opt = [
  "reind-item-chem-semicoke", 60, 0.5, 1.5,
  "reind-item-chem-coke", 60, 0.5, 2.0,
];


const rc = {
  "parent": "reind-fac-furn-colossal-kiln",

  "recipes": [


    /* ========================================
      Section: Batch Crafting
    ======================================== */


    // Native Copper
    {
      "icon": "reind-item-ore-native-copper",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-native-copper", 640,
        "reind-item-ore-lignite", 480,
      ],
      "outputs": [
        "reind-item-chem-copper", 580,
      ],
      "randOutputs": [
        "reind-item-chem-copper", 120, 0.5,
      ],
      "timeScale": 16.5,
    },


    // Crude Graphite
    {
      "icon": "reind-item-ore-crude-graphite",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-crude-graphite", 640,
        "reind-item-ore-lignite", 480,
      ],
      "outputs": [
        "reind-item-chem-graphite", 140,
      ],
      "randOutputs": [
        "reind-item-chem-graphite", 120, 0.5,
      ],
      "timeScale": 16.5,
    },


    // Galena
    {
      "icon": "reind-item-ore-galena",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-galena", 640,
        "reind-item-ore-lignite", 480,
      ],
      "outputs": [
        "reind-item-chem-lead", 460,
      ],
      "randOutputs": [
        "reind-item-chem-lead", 120, 0.5,
      ],
      "timeScale": 16.5,
    },


    // Cassiterite
    {
      "icon": "reind-item-ore-cassiterite",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-cassiterite", 640,
        "reind-item-ore-lignite", 480,
      ],
      "outputs": [
        "reind-item-chem-tin", 460,
      ],
      "randOutputs": [
        "reind-item-chem-tin", 120, 0.5,
      ],
      "timeScale": 16.5,
    },


    // Sphalerite
    {
      "icon": "reind-item-ore-sphalerite",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-sphalerite", 640,
        "reind-item-ore-lignite", 480,
      ],
      "outputs": [
        "reind-item-chem-zinc", 460,
      ],
      "randOutputs": [
        "reind-item-chem-zinc", 120, 0.5,
      ],
      "timeScale": 16.5,
    },


    /* ========================================
      Section: Special
    ======================================== */


    // Melter Effc
    {
      "icon": "reind-effc-effc-melter",
      "category": "special",
      "inputs": [].concat(gi),
      "outputs": [
        "reind-effc-effc-melter", 0.1,
      ],
    },


    // Concentrate (Limonite)
    {
      "icon": "reind-item-int-concentrate-limonite",
      "category": "special",
      "inputs": [
        "reind-item-int-concentrate-limonite", 40,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": false,
      "outputs": [
        "reind-item-chem-pig-iron", 60,
      ],
      "randOutputs": [
        "reind-item-was-slag", 80, 0.5,
      ],
    },


    /* ========================================
      Section: Roasting
    ======================================== */


    /* <---------------- chunks ----------------> */


    // Chunks (Dolomite)
    {
      "icon": "reind-item-int-chunks-dolomite",
      "category": "roasting",
      "inputs": [
        "reind-item-int-chunks-dolomite", 160,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": false,
      "outputs": [
        "reind-item-chem-magnesia-sand", 80,
      ],
    },


    // Chunks (Limestone)
    {
      "icon": "reind-item-int-chunks-limestone",
      "category": "roasting",
      "inputs": [
        "reind-item-int-chunks-limestone", 160,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": false,
      "outputs": [
        "reind-item-chem-lime", 80,
      ],
    },


    /* <---------------- blend ----------------> */


    // Blend (Cement)
    {
      "icon": "reind-item-int-blend-roasted-cement",
      "category": "roasting",
      "inputs": [
        "reind-item-int-blend-cement", 80,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": false,
      "outputs": [
        "reind-item-int-blend-roasted-cement", 80,
      ],
    },


  ],
};
exports.rc = rc;
