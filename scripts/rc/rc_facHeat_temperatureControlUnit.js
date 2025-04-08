const rc = {
  "parent": "reind-fac-heat-temperature-control-unit",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Water
    {
      "icon": "reind-liq-ore-water",
      "category": "special",
      "inputs": [
        "reind-liq-ore-water", 0.1,
        "reind-effc-effc-pump", 0.01666667,
      ],
      "outputs": [
        "reind-effc-effc-temperature-control", 0.01666667,
        "reind-gas-misc-steam", 0.1,
      ],
    },


    // Air
    {
      "icon": "reind-gas-misc-air",
      "category": "special",
      "inputs": [
        "reind-gas-misc-air", 0.2,
        "reind-effc-cond-pressure", 0.01666667,
      ],
      "outputs": [
        "reind-effc-effc-temperature-control", 0.01666667,
      ],
    },


    // Steam
    {
      "icon": "reind-gas-misc-steam",
      "category": "special",
      "inputs": [
        "reind-gas-misc-steam", 0.25,
        "reind-effc-cond-pressure", 0.01666667,
      ],
      "outputs": [
        "reind-effc-cond-heat", 0.15,
        "reind-liq-ore-water", 0.05,
      ],
    },


  ],
};
exports.rc = rc;
