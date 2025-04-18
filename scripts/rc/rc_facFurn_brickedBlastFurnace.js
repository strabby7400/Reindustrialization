const gi = [
  "reind-effc-effc-dust-recycling", 0.03333333,
  "reind-effc-effc-bf-fuel", 0.03333333,
  "reind-gas-misc-air", 0.4,
];
const opt = [
  "reind-item-chem-coal", 90, 0.5, 1.0,
  "reind-item-chem-semicoke", 105, 0.5, 1.5,
  "reind-item-chem-coke", 120, 0.5, 2.0,
]


const rc = {
  "parent": "reind-fac-furn-bricked-blast-furnace",

  "recipes": [


    /* ========================================
      Section: Steelmaking
    ======================================== */


    // Wrought Iron : Pig Iron
    {
      "icon": "reind-item-chem-pig-iron",
      "category": "steelmaking",
      "inputs": [
        "reind-item-chem-pig-iron", 240,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-wrought-iron", 240,
      ],
    },


    // Steel : Wrought Iron
    {
      "icon": "reind-item-chem-wrought-iron",
      "category": "steelmaking",
      "inputs": [
        "reind-item-chem-wrought-iron", 240,
      ].concat(gi),
      "optInputs": [
        "reind-item-ore-limestone", 360, 0.75, 1.0,
        "reind-item-int-chunks-limestone", 360, 0.75, 1.5,
        "reind-item-chem-lime", 180, 0.75, 2.0,
      ],
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-steel", 180,
      ],
      "randOutputs": [
        "reind-item-was-slag", 360, 0.5,
      ],
      "timeScale": 2.0,
    },


    /* ========================================
      Section: Concentrate Smelting
    ======================================== */


    /* <---------------- copper ----------------> */


    // Copper Matte : Concentrate (Chalcopyrite)
    // TODO


    /* ========================================
      Section: Smelting
    ======================================== */


    /* <---------------- copper ----------------> */


    // Copper : Concentrate (Chalcopyrite)
    {
      "icon": "reind-item-int-concentrate-chalcopyrite",
      "category": "smelting",
      "inputs": [
        "reind-item-int-concentrate-chalcopyrite", 90,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-copper", 130,
      ],
    },


    // Copper : Concentrate (Malachite)
    {
      "icon": "reind-item-int-concentrate-malachite",
      "category": "smelting",
      "inputs": [
        "reind-item-int-concentrate-malachite", 90,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-copper", 195,
      ],
    },


    /* <---------------- iron ----------------> */


    // Pig Iron : Concentrate (Hematite)
    {
      "icon": "reind-item-int-concentrate-hematite",
      "category": "smelting",
      "inputs": [
        "reind-item-int-concentrate-hematite", 90,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-pig-iron", 195,
      ],
      "randOutputs": [
        "reind-item-was-slag", 180, 0.5,
      ],
    },


    // Pig Iron : Concentrate (Magnetite)
    {
      "icon": "reind-item-int-concentrate-magnetite",
      "category": "smelting",
      "inputs": [
        "reind-item-int-concentrate-magnetite", 90,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-pig-iron", 195,
      ],
      "randOutputs": [
        "reind-item-was-slag", 180, 0.5,
      ],
    },


    /* <---------------- lead ----------------> */


    // Lead : Concentrate (Galena)
    {
      "icon": "reind-item-int-concentrate-galena",
      "category": "smelting",
      "inputs": [
        "reind-item-int-concentrate-galena", 90,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-lead", 130,
      ],
    },


    /* <---------------- zinc ----------------> */


    // Lead : Concentrate (Sphalerite)
    {
      "icon": "reind-item-int-concentrate-sphalerite",
      "category": "smelting",
      "inputs": [
        "reind-item-int-concentrate-sphalerite", 90,
      ].concat(gi),
      "optInputs": [].concat(opt),
      "requireOptional": true,
      "outputs": [
        "reind-item-chem-zinc", 130,
      ],
    },


  ],
};
exports.rc = rc;
