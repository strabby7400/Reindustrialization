const rc = {
  "parent": "reind-fac-proc-shredder",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    /* <---------------- biotic ----------------> */


    // Powdered Biomass : Hypha Rod
    {
      "icon": "reind-item-bio-hypha-rod",
      "category": "special",
      "randInputs": [
        "reind-item-bio-hypha-rod", 6, 0.5,
      ],
      "randOutputs": [
        "reind-item-int-powdered-biomass", 12, 0.25,
      ],
    },


    // Sawdust : Log
    {
      "icon": "reind-item-bio-log",
      "category": "special",
      "randInputs": [
        "reind-item-bio-log", 6, 0.5,
      ],
      "randOutputs": [
        "reind-item-bio-sawdust", 12, 0.25,
      ],
    },


  ],
};
exports.rc = rc;
