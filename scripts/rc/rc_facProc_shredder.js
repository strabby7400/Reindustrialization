const rc = {
  "parent": "reind-fac-proc-shredder",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    /* <---------------- biotic ----------------> */


    // Powdered Biomass : Hypha Rod
    {
      "icon": "reind-item-bio-hypha-rod",
      "category": "special",
      "randInputs": new Seq([
        "reind-item-bio-hypha-rod", 6, 0.5,
      ]),
      "randOutputs": new Seq([
        "reind-item-int-powdered-biomass", 12, 0.25,
      ]),
    },


    // Sawdust : Log
    {
      "icon": "reind-item-bio-log",
      "category": "special",
      "randInputs": new Seq([
        "reind-item-bio-log", 6, 0.5,
      ]),
      "randOutputs": new Seq([
        "reind-item-bio-sawdust", 12, 0.25,
      ]),
    },


  ]),
};
exports.rc = rc;
