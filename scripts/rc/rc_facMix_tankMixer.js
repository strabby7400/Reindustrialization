const gi = [
  "reind-effc-effc-pump", 0.01666667,
];


const rc = {
  "parent": "reind-fac-mix-tank-mixer",

  "recipes": new Seq ([


    /* ========================================
      Section: Mixing
    ======================================== */


    /* <---------------- special (water) ----------------> */


    // Brine : Salt / Water
    {
      "icon": "reind-liq-ore-brine",
      "category": "mixing",
      "inputs": new Seq([
        "reind-item-ore-salt", 40,
      ].concat(gi)),
      "bfInputs": new Seq([
        "reind-liq-ore-water", 240.0,
      ]),
      "bfOutputs": new Seq([
        "reind-liq-ore-brine", 240.0,
      ]),
    },


    // Drilling Mud : Chunks (Barite) / Clay / Water
    {
      "icon": "reind-liq-misc-drilling-mud",
      "category": "mixing",
      "inputs": new Seq([
        "reind-item-ore-clay", 80,
      ].concat(gi)),
      "bfInputs": new Seq([
        "reind-liq-ore-water", 240.0,
      ]),
      "optInputs": new Seq([
        "reind-item-int-chunks-barite", 90, 1.0, 1.0,
        "reind-item-int-chunks-p1-barite", 30, 1.0, 1.0,
      ]),
      "requireOptional": true,
      "bfOutputs": new Seq([
        "reind-liq-misc-drilling-mud", 240.0,
      ]),
    },


    /* <---------------- solution (water) ----------------> */


    // Purified Brine : Sodium Chloride / Water
    {
      "icon": "reind-liq-int-brine-purified",
      "category": "mixing",
      "inputs": new Seq([
        "reind-item-chem-sodium-chloride", 40,
      ].concat(gi)),
      "bfInputs": new Seq([
        "reind-liq-ore-water", 240.0,
      ]),
      "bfOutputs": new Seq([
        "reind-liq-int-brine-purified", 240.0,
      ]),
    },


  ]),
};
exports.rc = rc;
