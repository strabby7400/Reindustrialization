const gi = [
  "reind-effc-link-charcoal-rod-maker-r1", 0.01666667,
];


const rc = {
  "parent": "reind-fac-proc-charcoal-rod-maker-m",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Charcoal (Uncarbonized) : Powdered Biomass (Dried)
    {
      "icon": "reind-item-int-powdered-biomass-dried",
      "category": "special",
      "inputs": [
        "reind-item-int-powdered-biomass-dried", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-charcoal-uncarbonized", 20,
      ],
    },


    // Charcoal (Uncarbonized) : Sawdust (Dried)
    {
      "icon": "reind-item-int-sawdust-dried",
      "category": "special",
      "inputs": [
        "reind-item-int-sawdust-dried", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-charcoal-uncarbonized", 20,
      ],
    },


  ]
};
exports.rc = rc;
