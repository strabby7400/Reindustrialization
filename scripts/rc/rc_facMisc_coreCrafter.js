const gi = [
  "reind-effc-effc-core", 0.01666667,
];
const gi1 = [
  "reind-effc-effc-core", 0.01666667,
  "reind-liq-ore-water", 0.1,
];
const go1 = [
  "reind-liq-was-waste-slurry", 0.1,
];


const rc = {
  "parent": "reind-fac-misc-core-crafter",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Timber
    {
      "icon": "reind-item-bio-timber",
      "category": "special",
      "inputs": [
        "reind-item-bio-log", 10,
      ].concat(gi),
      "outputs": [
        "reind-item-bio-timber", 10,
      ],
      "failProbability": 0.2,
      "failOutputs": [
        "reind-item-was-wood-ash", 10,
      ],
    },


    // Tempered Glass
    {
      "icon": "reind-item-buil-tempered-glass",
      "category": "special",
      "inputs": [
        "reind-liq-int-melt-glass", 0.2,
        "reind-gas-misc-air", 0.1,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-tempered-glass", 10,
      ],
      "failProbability": 0.2,
    },


    /* ========================================
      Section: Brick Making
    ======================================== */


    // Clay Brick
    {
      "icon": "reind-item-int-brick-clay-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-ore-clay", 20,
      ].concat(gi1),
      "outputs": [
        "reind-item-int-brick-clay-unbaked", 10,
      ].concat(go1),
      "failProbability": 0.2,
    },


    // High-Alumina Brick
    {
      "icon": "reind-item-int-brick-high-alumina-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-high-alumina", 10,
      ].concat(gi1),
      "outputs": [
        "reind-item-int-brick-high-alumina-unbaked", 10,
      ].concat(go1),
      "failProbability": 0.2,
    },


    // Magnesia Brick
    {
      "icon": "reind-item-int-brick-magnesia-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-magnesia", 10,
      ].concat(gi1),
      "outputs": [
        "reind-item-int-brick-magnesia-unbaked", 10,
      ].concat(go1),
      "failProbability": 0.2,
    },


    // Mullite Brick
    {
      "icon": "reind-item-int-brick-mullite-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-mullite", 10,
      ].concat(gi1),
      "outputs": [
        "reind-item-int-brick-mullite-unbaked", 10,
      ].concat(go1),
      "failProbability": 0.2,
    },


    // Silica Brick
    {
      "icon": "reind-item-int-brick-silica-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-silica", 10,
      ].concat(gi1),
      "outputs": [
        "reind-item-int-brick-silica-unbaked", 10,
      ].concat(go1),
      "failProbability": 0.2,
    },


    /* ========================================
      Section: Crafting
    ======================================== */


    /* <---------------- ball ----------------> */


    // Steel Ball
    {
      "icon": "reind-item-cons-ball-steel",
      "category": "crafting",
      "inputs": [
        "reind-item-chem-steel", 12,
      ].concat(gi),
      "outputs": [
        "reind-item-cons-ball-steel", 1,
      ],
      "randOutputs": [
        "reind-item-cons-ball-steel", 1, 0.2,
      ],
    },


    /* <---------------- electrode ----------------> */


    // Copper Electrode
    {
      "icon": "reind-item-cons-electrode-copper",
      "category": "crafting",
      "inputs": [
        "reind-item-chem-copper", 10,
      ].concat(gi),
      "outputs": [
        "reind-item-cons-electrode-copper", 1,
      ],
      "randOutputs": [
        "reind-item-cons-electrode-copper", 1, 0.2,
      ],
    },


    // Graphite Electrode
    {
      "icon": "reind-item-cons-electrode-graphite",
      "category": "crafting",
      "inputs": [
        "reind-item-chem-graphite", 10,
      ].concat(gi),
      "outputs": [
        "reind-item-cons-electrode-graphite", 1,
      ],
      "randOutputs": [
        "reind-item-cons-electrode-graphite", 1, 0.2,
      ],
    },


    // Lead Electrode
    {
      "icon": "reind-item-cons-electrode-lead",
      "category": "crafting",
      "inputs": [
        "reind-item-chem-lead", 10,
      ].concat(gi),
      "outputs": [
        "reind-item-cons-electrode-lead", 1,
      ],
      "randOutputs": [
        "reind-item-cons-electrode-lead", 1, 0.2,
      ],
    },


    /* <---------------- temporary electrode ----------------> */


    // Temporary Electode (Blister Copper)
    {
      "icon": "reind-item-int-temporary-electrode-blister-copper",
      "category": "crafting",
      "inputs": [
        "reind-item-int-blister-copper", 10,
      ].concat(gi),
      "outputs": [
        "reind-item-int-temporary-electrode-blister-copper", 1,
      ],
      "randOutputs": [
        "reind-item-int-temporary-electrode-blister-copper", 1, 0.2,
      ],
    },


    /* <---------------- pall ring ----------------> */


    // Steel Pall Ring
    {
      "icon": "reind-item-cons-pall-ring-steel",
      "category": "crafting",
      "inputs": [
        "reind-item-chem-steel", 6,
      ].concat(gi),
      "outputs": [
        "reind-item-cons-pall-ring-steel", 1,
      ],
      "randOutputs": [
        "reind-item-cons-pall-ring-steel", 1, 0.2,
      ],
    },


    // Stainless Steel Pall Ring
    {
      "icon": "reind-item-cons-pall-ring-stainless-steel",
      "category": "crafting",
      "inputs": [
        "reind-item-chem-stainless-steel", 6,
      ].concat(gi),
      "outputs": [
        "reind-item-cons-pall-ring-stainless-steel", 1,
      ],
      "randOutputs": [
        "reind-item-cons-pall-ring-stainless-steel", 1, 0.2,
      ],
    },


  ],
};
exports.rc = rc;
