const rc = {
  "parent": "reind-fac-furn-carbonization-kiln",

  "recipes": new Seq ([


    /* ========================================
      Section: Carbonization
    ======================================== */


    // Charcoal : Log
    {
      "icon": "reind-item-bio-log",
      "category": "carbonization",
      "inputs": new Seq([
        "reind-item-bio-log", 15,
      ]),
      "outputs": new Seq([
        "reind-item-bio-charcoal", 10,
      ]),
      "randOutputs": new Seq([
        "reind-item-bio-wood-ash", 5, 0.25,
      ]),
      "failProbability": 0.1,
      "failOutputs": new Seq([
        "reind-item-bio-wood-ash", 15,
      ]),
    },


    // Charcoal : Timber
    {
      "icon": "reind-item-bio-timber",
      "category": "carbonization",
      "inputs": new Seq([
        "reind-item-bio-timber", 15,
      ]),
      "outputs": new Seq([
        "reind-item-bio-charcoal", 10,
      ]),
    },


    // Charcoal : Sawdust
    {
      "icon": "reind-item-bio-sawdust",
      "category": "carbonization",
      "inputs": new Seq([
        "reind-item-bio-sawdust", 20,
      ]),
      "outputs": new Seq([
        "reind-item-bio-charcoal", 5,
      ]),
      "randOutputs": new Seq([
        "reind-item-bio-wood-ash", 5, 0.25,
      ]),
      "failProbability": 0.1,
      "failOutputs": new Seq([
        "reind-item-bio-wood-ash", 20,
      ]),
    },


    // Charcoal : Powdered Biomass
    {
      "icon": "reind-item-int-powdered-biomass",
      "category": "carbonization",
      "inputs": new Seq([
        "reind-item-int-powdered-biomass", 20,
      ]),
      "randOutputs": new Seq([
        "reind-item-bio-charcoal", 20, 0.25,
      ]),
    },


    // Charcoal : Charcoal (Uncarbonized)
    {
      "icon": "reind-item-int-charcoal-uncarbonized",
      "category": "carbonization",
      "inputs": new Seq([
        "reind-item-int-charcoal-uncarbonized", 10,
      ]),
      "outputs": new Seq([
        "reind-item-bio-charcoal", 10,
      ]),
    },


    // Charcoal : Hypha Rod
    {
      "icon": "reind-item-bio-hypha-rod",
      "category": "carbonization",
      "inputs": new Seq([
        "reind-item-bio-hypha-rod", 15,
      ]),
      "outputs": new Seq([
        "reind-item-bio-charcoal", 10,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-dust", 5, 0.25,
      ]),
      "failProbability": 0.1,
      "failOutputs": new Seq([
        "reind-item-was-dust", 15,
      ]),
    },


  ]),
};
exports.rc = rc;
