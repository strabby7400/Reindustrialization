const rc = {
  "parent": "reind-fac-furn-carbonization-kiln",

  "recipes": [


    /* ========================================
      Section: Carbonization
    ======================================== */


    // Charcoal : Log
    {
      "icon": "reind-item-bio-log",
      "category": "carbonization",
      "inputs": [
        "reind-item-bio-log", 15,
      ],
      "outputs": [
        "reind-item-bio-charcoal", 10,
      ],
      "randOutputs": [
        "reind-item-was-wood-ash", 5, 0.25,
      ],
      "failProbability": 0.1,
      "failOutputs": [
        "reind-item-was-wood-ash", 15,
      ],
    },


    // Charcoal : Timber
    {
      "icon": "reind-item-bio-timber",
      "category": "carbonization",
      "inputs": [
        "reind-item-bio-timber", 15,
      ],
      "outputs": [
        "reind-item-bio-charcoal", 10,
      ],
    },


    // Charcoal : Sawdust
    {
      "icon": "reind-item-bio-sawdust",
      "category": "carbonization",
      "inputs": [
        "reind-item-bio-sawdust", 20,
      ],
      "outputs": [
        "reind-item-bio-charcoal", 5,
      ],
      "randOutputs": [
        "reind-item-was-wood-ash", 5, 0.25,
      ],
      "failProbability": 0.1,
      "failOutputs": [
        "reind-item-was-wood-ash", 20,
      ],
    },


    // Charcoal : Powdered Biomass
    {
      "icon": "reind-item-int-powdered-biomass",
      "category": "carbonization",
      "inputs": [
        "reind-item-int-powdered-biomass", 20,
      ],
      "randOutputs": [
        "reind-item-bio-charcoal", 20, 0.25,
      ],
    },


    // Charcoal : Charcoal (Uncarbonized)
    {
      "icon": "reind-item-int-charcoal-uncarbonized",
      "category": "carbonization",
      "inputs": [
        "reind-item-int-charcoal-uncarbonized", 10,
      ],
      "outputs": [
        "reind-item-bio-charcoal", 10,
      ],
    },


    // Charcoal : Hypha Rod
    {
      "icon": "reind-item-bio-hypha-rod",
      "category": "carbonization",
      "inputs": [
        "reind-item-bio-hypha-rod", 15,
      ],
      "outputs": [
        "reind-item-bio-charcoal", 10,
      ],
      "randOutputs": [
        "reind-item-was-dust", 5, 0.25,
      ],
      "failProbability": 0.1,
      "failOutputs": [
        "reind-item-was-dust", 15,
      ],
    },


  ],
};
exports.rc = rc;
