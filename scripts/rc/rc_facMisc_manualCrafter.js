const rc = {
  "parent": "reind-fac-misc-manual-crafter",

  "recipes": new Seq ([


    /* ========================================
      Section: Crafting
    ======================================== */


    /* <---------------- ball ----------------> */


    // Steel Ball
    {
      "icon": "reind-item-cons-ball-steel",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-chem-steel", 120,
      ]),
      "outputs": new Seq([
        "reind-item-cons-ball-steel", 10,
      ]),
      "failProbability": 0.05,
    },


    /* <---------------- electrode ----------------> */


    // Copper Electrode
    {
      "icon": "reind-item-cons-electrode-copper",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-chem-copper", 100,
      ]),
      "outputs": new Seq([
        "reind-item-cons-electrode-copper", 10,
      ]),
      "failProbability": 0.05,
    },


    // Graphite Electrode
    {
      "icon": "reind-item-cons-electrode-graphite",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-chem-graphite", 100,
      ]),
      "outputs": new Seq([
        "reind-item-cons-electrode-graphite", 10,
      ]),
      "failProbability": 0.05,
    },


    // Lead Electrode
    {
      "icon": "reind-item-cons-electrode-lead",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-chem-lead", 100,
      ]),
      "outputs": new Seq([
        "reind-item-cons-electrode-lead", 10,
      ]),
      "failProbability": 0.05,
    },


    /* <---------------- temporary electrode ----------------> */


    // Temporary Electode (Blister Copper)
    {
      "icon": "reind-item-int-temporary-electrode-blister-copper",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-int-blister-copper", 100,
      ]),
      "outputs": new Seq([
        "reind-item-int-temporary-electrode-blister-copper", 10,
      ]),
      "failProbability": 0.05,
    },


    /* <---------------- pall ring ----------------> */


    // Steel Pall Ring
    {
      "icon": "reind-item-cons-pall-ring-steel",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-chem-steel", 60,
      ]),
      "outputs": new Seq([
        "reind-item-cons-pall-ring-steel", 10,
      ]),
      "failProbability": 0.05,
    },


    // Stainless Steel Pall Ring
    {
      "icon": "reind-item-cons-pall-ring-stainless-steel",
      "category": "crafting",
      "inputs": new Seq([
        "reind-item-chem-stainless-steel", 60,
      ]),
      "outputs": new Seq([
        "reind-item-cons-pall-ring-stainless-steel", 10,
      ]),
      "failProbability": 0.05,
    },


  ]),
};
exports.rc = rc;
