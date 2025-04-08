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
        "reind-item-int-dust-asbestos", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-asbestos", 4,
        "reind-item-was-dust", 4,
      ],
    },


    // Raw Coal
    {
      "icon": "reind-item-int-dust-raw-coal",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-raw-coal", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-coal", 4,
        "reind-item-was-gangue", 4,
      ],
    },


    // Sand
    {
      "icon": "reind-item-int-dust-sand",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-sand", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-sand", 4,
        "reind-item-was-dust", 4,
      ],
    },



    /* <---------------- chunks ----------------> */


    // Chunks (Crude Sulfur)
    {
      "icon": "reind-item-int-chunks-crude-sulfur",
      "category": "purification",
      "inputs": [
        "reind-item-int-chunks-crude-sulfur", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-sulfur", 4,
        "reind-item-was-gangue", 4,
      ],
    },


    /* <---------------- aluminum ----------------> */


    // Dust (Bauxite)
    {
      "icon": "reind-item-int-dust-bauxite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-bauxite", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-bauxite", 4,
        "reind-item-was-gangue", 4,
      ],
    },


    /* <---------------- copper ----------------> */


    // Dust (Malachite)
    {
      "icon": "reind-item-int-dust-malachite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-malachite", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-malachite", 4,
        "reind-item-was-gangue", 4,
      ],
      "randOutputs": [
        "reind-item-ore-limonite", 4, 0.5,
      ],
    },


    /* <---------------- iron ----------------> */


    // Dust (Magnetite)
    {
      "icon": "reind-item-int-dust-magnetite",
      "category": "purification",
      "inputs": [
        "reind-item-int-dust-magnetite", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-p1-magnetite", 4,
        "reind-item-was-gangue", 4,
      ],
      "randOutputs": [
        "reind-item-ore-raw-coal", 4, 0.5,
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
        "reind-item-int-dust-sand", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-was-dust", 4,
      ],
      "randOutputs": [
        "reind-item-int-dust-magnetite", 4, 0.75,
        "reind-item-int-dust-pyrolusite", 4, 0.25,
      ],
      "tooltip": "target-magnetite-pyrolusite",
    },


  ],
};
exports.rc = rc;
