const rc = {
  "parent": "reind-fac-furn-bloomery",

  "recipes": new Seq ([


    /* ========================================
      Section: Steelmaking
    ======================================== */


    // Wrought Iron : Pig Iron
    {
      "icon": "reind-item-chem-pig-iron",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-chem-pig-iron", 20,
        "reind-item-bio-charcoal", 5,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 20, 0.25,
      ]),
      "outputs": new Seq([
        "reind-item-chem-wrought-iron", 20,
      ]),
    },


    // Steel : Wrought Iron
    {
      "icon": "reind-item-chem-wrought-iron",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-chem-wrought-iron", 20,
        "reind-item-bio-charcoal", 15,
        "reind-item-ore-limestone", 30,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 30, 0.5,
      ]),
      "outputs": new Seq([
        "reind-item-chem-steel", 15,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 60, 0.25,
      ]),
      "timeScale": 2.0,
    },


    // Steel : Scrap Steel
    {
      "icon": "reind-item-was-scrap-steel",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-was-scrap-steel", 40,
        "reind-item-bio-charcoal", 15,
        "reind-item-ore-limestone", 30,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 30, 0.5,
      ]),
      "outputs": new Seq([
        "reind-item-chem-steel", 10,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 60, 0.33333333,
      ]),
      "failProbability": 0.1,
      "failOutputs": new Seq([
        "reind-item-was-slag", 30,
      ]),
      "timeScale": 2.0,
    },


    // Mangalloy : Pyrolusite, Hematite
    {
      "icon": "reind-item-chem-mangalloy",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-ore-pyrolusite", 20,
        "reind-item-ore-hematite", 40,
        "reind-item-bio-charcoal", 15,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 30, 0.5,
        "reind-item-chem-graphite", 60, 0.33333333,
      ]),
      "outputs": new Seq([
        "reind-item-chem-mangalloy", 15,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 60, 0.33333333,
      ]),
      "timeScale": 2.0,
      "tooltip": "using-pyrolusite-hematite",
    },


    // Mangalloy : Psilomelane, Magnetite
    {
      "icon": "reind-item-chem-mangalloy",
      "category": "steelmaking",
      "inputs": new Seq([
        "reind-item-ore-psilomelane", 20,
        "reind-item-ore-magnetite", 40,
        "reind-item-bio-charcoal", 15,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 30, 0.5,
        "reind-item-chem-graphite", 60, 0.33333333,
      ]),
      "outputs": new Seq([
        "reind-item-chem-mangalloy", 15,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 60, 0.33333333,
      ]),
      "timeScale": 2.0,
      "tooltip": "using-psilomelane-magnetite",
    },


    /* ========================================
      Section: Smelting
    ======================================== */


    // Pig Iron : Hematite
    {
      "icon": "reind-item-ore-hematite",
      "category": "smelting",
      "inputs": new Seq([
        "reind-item-ore-hematite", 40,
        "reind-item-bio-charcoal", 5,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 20, 0.5,
      ]),
      "outputs": new Seq([
        "reind-item-chem-pig-iron", 20,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 30, 0.33333333,
      ]),
    },


    // Pig Iron : Magnetite
    {
      "icon": "reind-item-ore-magnetite",
      "category": "smelting",
      "inputs": new Seq([
        "reind-item-ore-magnetite", 40,
        "reind-item-bio-charcoal", 5,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 20, 0.5,
      ]),
      "outputs": new Seq([
        "reind-item-chem-pig-iron", 20,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 30, 0.33333333,
      ]),
    },


    // Pig Iron : Limonite
    {
      "icon": "reind-item-ore-limonite",
      "category": "smelting",
      "inputs": new Seq([
        "reind-item-ore-limonite", 60,
        "reind-item-bio-charcoal", 5,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 20, 0.5,
      ]),
      "outputs": new Seq([
        "reind-item-chem-pig-iron", 20,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 60, 0.33333333,
      ]),
    },


    // Pig Iron : Pyrite
    {
      "icon": "reind-item-ore-pyrite",
      "category": "smelting",
      "inputs": new Seq([
        "reind-item-ore-pyrite", 60,
        "reind-item-bio-charcoal", 5,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 20, 0.5,
      ]),
      "outputs": new Seq([
        "reind-item-chem-pig-iron", 20,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-slag", 60, 0.33333333,
      ]),
    },


  ]),
};
exports.rc = rc;
