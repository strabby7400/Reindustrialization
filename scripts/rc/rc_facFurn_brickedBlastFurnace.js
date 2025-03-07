const gi = [
  "reind-effc-effc-dust-recycling", 0.03333333,
  "reind-effc-effc-bf-fuel", 0.03333333,
  "reind-gas-misc-air", 0.4,
];

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
        "reind-item-chem-pig-iron", 60,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-chem-wrought-iron", 60,
      ]),
    },


    // Steel : Wrought Iron
    {
      "icon": "reind-item-chem-wrought-iron",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-chem-wrought-iron", 60,
      ].concat(gi)),
      "optInputs": new Seq([
        "reind-item-ore-limestone", 120, 0.75, 1.0,
        "reind-item-int-chunks-limestone", 120, 0.75, 1.5,
        "reind-item-chem-lime", 60, 0.75, 2.0,
      ]),
      "requireOptional": true,
      "outputs": new Seq([
        "reind-item-chem-steel", 45,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 90, 0.5,
      ]),
      "timeScale": 2.0,
    },


    /* ========================================
      Section: Concentrate Smelting
    ======================================== */


    /* <---------------- copper ----------------> */


    // Copper Matte : Concentrate (Chalcopyrite)
    // TODO


    /* <---------------- iron ----------------> */


    // Pig Iron : Concentrate (Hematite)
    // TODO


    // Pig Iron : Concentrate (Magnetite)
    // TODO


  ]),
};
exports.rc = rc;
