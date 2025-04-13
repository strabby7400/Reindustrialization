const gi = [
  "reind-effc-effc-dust-recycling", 0.03333333,
  "reind-effc-effc-vibration-screen", 0.01666667,
  "reind-gas-misc-air", 0.2,
];


const rc = {
  "parent": "reind-fac-sep-dry-magnetic-separator",

  "recipes": [


    /* ========================================
      Section: Purification
    ======================================== */


    // Asbestos
    {
      "icon": "reind-item-int-dust-asbestos",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-asbestos", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-asbestos", 6,
        "reind-item-was-dust", 6,
      ],
    },


    // Raw Coal
    {
      "icon": "reind-item-int-dust-raw-coal",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-raw-coal", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-coal", 6,
        "reind-item-was-gangue", 6,
      ],
    },


    // Sand
    {
      "icon": "reind-item-int-dust-sand",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-sand", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-sand", 6,
        "reind-item-was-dust", 6,
      ],
    },



    /* <---------------- chunks ----------------> */


    // Chunks (Crude Sulfur)
    {
      "icon": "reind-item-int-chunks-crude-sulfur",
      "category": "purification",
      "inputs": [
        "reind-item-int-chunks-crude-sulfur", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-sulfur", 6,
        "reind-item-was-gangue", 6,
      ],
    },


    /* <---------------- aluminum ----------------> */


    // Dust (Bauxite)
    {
      "icon": "reind-item-int-dust-bauxite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-bauxite", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-bauxite", 6,
        "reind-item-was-gangue", 6,
      ],
    },


    /* <---------------- copper ----------------> */


    // Dust (Chalcopyrite)
    {
      "icon": "reind-item-int-dust-chalcopyrite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-chalcopyrite", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-chalcopyrite", 6,
        "reind-item-was-gangue", 6,
      ],
      "randOutputs": [
        "reind-item-ore-pyrite", 6, 0.5,
        "reind-item-ore-linnaeite", 3, 0.5,
      ],
    },


    // Dust (Malachite)
    {
      "icon": "reind-item-int-dust-malachite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-malachite", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-malachite", 6,
        "reind-item-was-gangue", 6,
      ],
      "randOutputs": [
        "reind-item-ore-limonite", 6, 0.5,
      ],
    },


    /* <---------------- iron ----------------> */


    // Dust (Limonite)
    {
      "icon": "reind-item-int-dust-limonite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-limonite", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-limonite", 6,
        "reind-item-was-gangue", 6,
      ],
      "randOutputs": [
        "reind-item-ore-hematite", 6, 0.5,
      ],
    },


    // Dust (Magnetite)
    {
      "icon": "reind-item-int-dust-magnetite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-magnetite", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-magnetite", 6,
        "reind-item-was-gangue", 6,
      ],
      "randOutputs": [
        "reind-item-ore-raw-coal", 6, 0.5,
      ],
    },


    /* ========================================
      Section: Selection
    ======================================== */


    // Magnetite / Pyrolusite : Sand
    {
      "icon": "reind-item-int-dust-sand",
      "category": "selection",
      "inputs": [
        "reind-item-int-dust-sand", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-was-dust", 6,
      ],
      "randOutputs": [
        "reind-item-int-dust-magnetite", 6, 0.75,
        "reind-item-int-dust-pyrolusite", 6, 0.25,
      ],
      "tooltip": "target-magnetite-pyrolusite",
    },


  ],
};
exports.rc = rc;
