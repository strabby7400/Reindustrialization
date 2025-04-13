const gi = [
  "reind-effc-cond-heat", 0.16666667,
];


const rc = {
  "parent": "reind-fac-heat-primitive-evaporation-chamber",

  "recipes": [


    /* ========================================
      Section: Evaporation
    ======================================== */


    // Water
    {
      "icon": "reind-liq-ore-water",
      "category": "evaporation",
      "inputs": [
        "reind-liq-ore-water", 0.5,
      ].concat(gi),
      "outputs": [
        "reind-gas-misc-steam", 0.5,
      ],
    },


    // Sea Water
    {
      "icon": "reind-liq-ore-sea-water",
      "category": "evaporation",
      "inputs": [
        "reind-liq-ore-sea-water", 0.5,
      ].concat(gi),
      "outputs": [
        "reind-gas-misc-steam", 0.5,
      ],
      "randOutputs": [
        "reind-item-ore-salt", 100, 0.25,
        "reind-item-was-dregs", 100, 0.25,
      ],
    },


    // Brine
    {
      "icon": "reind-liq-ore-brine",
      "category": "evaporation",
      "inputs": [
        "reind-liq-ore-brine", 0.5,
      ].concat(gi),
      "outputs": [
        "reind-gas-misc-steam", 0.5,
      ],
      "randOutputs": [
        "reind-item-ore-salt", 100, 0.5,
      ],
    },


  ],
};
exports.rc = rc;
