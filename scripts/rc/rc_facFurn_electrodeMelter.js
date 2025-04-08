const gi = [
  "reind-effc-effc-melter", 0.03333333,
];


const rc = {
  "parent": "reind-fac-furn-electrode-melter",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Copper Electrode (Accumulated)
    {
      "icon": "reind-item-int-electrode-copper-accumulated",
      "category": "special",
      "inputs": [
        "reind-item-int-electrode-copper-accumulated", 1,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-copper", 20,
      ],
    },


    // Lead Electrode (Accumulated)
    {
      "icon": "reind-item-int-electrode-lead-accumulated",
      "category": "special",
      "inputs": [
        "reind-item-int-electrode-lead-accumulated", 1,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-lead", 20,
      ],
    },


  ],
};
exports.rc = rc;
