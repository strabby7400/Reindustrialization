const gi = [
  "reind-effc-effc-dust-recycling", 0.03333333,
  "reind-effc-effc-bf-fuel", 0.03333333,
  "reind-gas-misc-air", 0.4,
];


const opt = [
  "reind-item-chem-coal", 150, 0.5, 1.0,
  "reind-item-chem-semicoke", 120, 0.5, 1.0,
  "reind-item-chem-coke", 90, 0.5, 1.0,
]


const rc = {
  "parent": "reind-fac-furn-bricked-blast-furnace",

  "recipes": new Seq ([


    /* ========================================
      Section: Steelmaking
    ======================================== */


    // Wrought Iron : Pig Iron
    {
      "icon": "reind-item-chem-pig-iron",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-chem-pig-iron", 240,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-chem-wrought-iron", 240,
      ]),
    },


    // Steel : Wrought Iron
    {
      "icon": "reind-item-chem-wrought-iron",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-chem-wrought-iron", 240,
      ].concat(gi)),
      "optInputs": new Seq([
        "reind-item-ore-limestone", 360, 0.75, 1.0,
        "reind-item-int-chunks-limestone", 360, 0.75, 1.5,
        "reind-item-chem-lime", 180, 0.75, 2.0,
      ]),
      "requireOptional": true,
      "outputs": new Seq([
        "reind-item-chem-steel", 180,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 360, 0.5,
      ]),
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


    // Copper : Concentrate (Malachite)
    {
      "icon": "reind-item-int-concentrate-malachite",
      "category": "smelting",
      "inputs": new Seq([
        "reind-item-int-concentrate-malachite", 120,
      ].concat(gi)),
      "optInputs": new Seq([].concat(opt)),
      "requireOptional": true,
      "outputs": new Seq([
        "reind-item-chem-copper", 240,
      ]),
    },


    /* <---------------- iron ----------------> */


    // Pig Iron : Concentrate (Hematite)
    // TODO


    // Pig Iron : Concentrate (Magnetite)
    // TODO


    /* <---------------- lead ----------------> */


    // Lead : Concentrate (Galena)
    {
      "icon": "reind-item-int-concentrate-galena",
      "category": "smelting",
      "inputs": new Seq([
        "reind-item-int-concentrate-galena", 120,
      ].concat(gi)),
      "optInputs": new Seq([].concat(opt)),
      "requireOptional": true,
      "outputs": new Seq([
        "reind-item-chem-lead", 180,
      ]),
    },


  ]),
};
exports.rc = rc;
