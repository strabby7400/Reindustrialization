const gi = [
  "reind-effc-effc-smoke-exhaust", 0.01666667,
  "reind-liq-ore-water", 0.1
];
const go = [
  "reind-liq-was-waste-water", 0.1,
];


const rc = {
  "parent": "reind-fac-furn-primitive-coke-oven",

  "recipes": [


    /* ========================================
      Section: Coking
    ======================================== */


    /* <---------------- coke ----------------> */


    // Coal
    {
      "icon": "reind-item-chem-coal",
      "category": "coking",
      "inputs": [
        "reind-item-chem-coal", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-coke", 10,
      ].concat(go),
      "randOutputs": [
        "reind-item-chem-coke", 10, 0.5,
      ],
    },


    /* <---------------- semicoke ----------------> */


    // Lignite
    {
      "icon": "reind-item-ore-lignite",
      "category": "coking",
      "inputs": [
        "reind-item-ore-lignite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-semicoke", 10,
      ].concat(go),
      "randOutputs": [
        "reind-item-chem-semicoke", 10, 0.5,
      ],
    },


    // Peat
    {
      "icon": "reind-item-ore-peat",
      "category": "coking",
      "inputs": [
        "reind-item-ore-peat", 40,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-semicoke", 10,
      ].concat(go),
      "randOutputs": [
        "reind-item-chem-semicoke", 10, 0.5,
      ],
    },


  ],
};
exports.rc = rc;
