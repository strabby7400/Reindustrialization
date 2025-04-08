const rc = {
  "parent": "reind-fac-air-liquid-ring-pressure-pump",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Pressure
    {
      "icon": "reind-effc-cond-pressure",
      "category": "special",
      "bfInputs": [
        "reind-liq-ore-water", 60,
      ],
      "outputs": [
        "reind-effc-cond-pressure", 0.01666667,
      ],
    },


    // Vacuum
    {
      "icon": "reind-effc-cond-vacuum",
      "category": "special",
      "bfInputs": [
        "reind-liq-ore-water", 60,
      ],
      "outputs": [
        "reind-effc-cond-vacuum", 0.01666667,
      ],
    },


  ],
};
exports.rc = rc;
