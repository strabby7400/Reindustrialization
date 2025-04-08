const gi = [
  "reind-ileffc-effc-ids", 0.01666667,
];


const rc = {
  "parent": "reind-map-fac-ids-trade-dock-rim-builder",

  "recipes": [


    /* ========================================
      Section: Export
    ======================================== */


    /* <---------------- item-ore ----------------> */


    // Gypsum
    {
      "icon": "reind-item-ore-gypsum",
      "category": "export",
      "inputs": [
        "reind-item-ore-gypsum", 1000,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-bit", 78,
      ],
    },


    // Pumice
    {
      "icon": "reind-item-ore-pumice",
      "category": "export",
      "inputs": [
        "reind-item-ore-pumice", 1000,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-bit", 31,
      ],
    },


    /* ========================================
      Section: Import
    ======================================== */


    /* <---------------- item-ore ----------------> */


    // Gypsum
    {
      "icon": "reind-item-ore-gypsum",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 187,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-gypsum", 1000,
      ],
    },


    /* <---------------- item-buil ----------------> */


    // Cement
    {
      "icon": "reind-item-buil-cement",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 54,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-cement", 1000,
      ],
    },


    // Tempered Glass
    {
      "icon": "reind-item-buil-tempered-glass",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 333,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-tempered-glass", 1000,
      ],
    },


    /* <---------------- item-chem[elementary] ----------------> */


    // Copper
    {
      "icon": "reind-item-chem-copper",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 783,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-copper", 1000,
      ],
    },


    // Lead
    {
      "icon": "reind-item-chem-lead",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 230,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-lead", 1000,
      ],
    },


    /* <---------------- item-chem[alloy] ----------------> */


    // Stainless Steel
    {
      "icon": "reind-item-chem-stainless-steel",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 540,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-stainless-steel", 1000,
      ],
    },


    // Steel
    {
      "icon": "reind-item-chem-steel",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 228,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-steel", 1000,
      ],
    },


    /* <---------------- item-chem[inorganic] ----------------> */


    // Gypsum
    {
      "icon": "reind-item-chem-lime",
      "category": "import",
      "inputs": [
        "reind-item-virt-bit", 117,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-lime", 1000,
      ],
    },


  ],
};
exports.rc = rc;
