const rc = {
  "parent": "reind-fac-furn-bloomery",

  "recipes": [


    /* ========================================
      Section: Steelmaking
    ======================================== */


    // Wrought Iron : Pig Iron
    {
      "icon": "reind-item-chem-pig-iron",
      "category": "steelmaking",
      "inputs": [
        "reind-item-chem-pig-iron", 20,
        "reind-item-bio-charcoal", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-wrought-iron", 20,
      ],
    },


    // Steel : Wrought Iron
    {
      "icon": "reind-item-chem-wrought-iron",
      "category": "steelmaking",
      "inputs": [
        "reind-item-chem-wrought-iron", 20,
        "reind-item-bio-charcoal", 10,
        "reind-item-ore-limestone", 30,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 20, 0.5,
      ],
      "outputs": [
        "reind-item-chem-steel", 15,
      ],
      "randOutputs": [
        "reind-item-was-slag", 60, 0.25,
      ],
      "timeScale": 2.0,
    },


    // Steel : Scrap Steel
    {
      "icon": "reind-item-was-scrap-steel",
      "category": "steelmaking",
      "inputs": [
        "reind-item-was-scrap-steel", 40,
        "reind-item-bio-charcoal", 10,
        "reind-item-ore-limestone", 30,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 20, 0.5,
      ],
      "outputs": [
        "reind-item-chem-steel", 10,
      ],
      "randOutputs": [
        "reind-item-was-slag", 60, 0.33333333,
      ],
      "failProbability": 0.1,
      "failOutputs": [
        "reind-item-was-slag", 30,
      ],
      "timeScale": 2.0,
    },


    // Mangalloy : Pyrolusite, Hematite
    {
      "icon": "reind-item-chem-mangalloy",
      "category": "steelmaking",
      "inputs": [
        "reind-item-ore-pyrolusite", 20,
        "reind-item-ore-hematite", 40,
        "reind-item-bio-charcoal", 10,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 20, 0.5,
        "reind-item-chem-graphite", 60, 0.33333333,
      ],
      "outputs": [
        "reind-item-chem-mangalloy", 15,
      ],
      "randOutputs": [
        "reind-item-was-slag", 60, 0.33333333,
      ],
      "timeScale": 2.0,
      "tooltip": "using-pyrolusite-hematite",
    },


    // Mangalloy : Psilomelane, Magnetite
    {
      "icon": "reind-item-chem-mangalloy",
      "category": "steelmaking",
      "inputs": [
        "reind-item-ore-psilomelane", 20,
        "reind-item-ore-magnetite", 40,
        "reind-item-bio-charcoal", 10,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 20, 0.5,
        "reind-item-chem-graphite", 60, 0.33333333,
      ],
      "outputs": [
        "reind-item-chem-mangalloy", 15,
      ],
      "randOutputs": [
        "reind-item-was-slag", 60, 0.33333333,
      ],
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
      "inputs": [
        "reind-item-ore-hematite", 40,
        "reind-item-bio-charcoal", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-pig-iron", 20,
      ],
      "randOutputs": [
        "reind-item-was-slag", 30, 0.33333333,
      ],
    },


    // Pig Iron : Magnetite
    {
      "icon": "reind-item-ore-magnetite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-magnetite", 40,
        "reind-item-bio-charcoal", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-pig-iron", 20,
      ],
      "randOutputs": [
        "reind-item-was-slag", 30, 0.33333333,
      ],
    },


    // Pig Iron : Limonite
    {
      "icon": "reind-item-ore-limonite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-limonite", 60,
        "reind-item-bio-charcoal", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-pig-iron", 20,
      ],
      "randOutputs": [
        "reind-item-was-slag", 60, 0.33333333,
      ],
    },


    // Pig Iron : Pyrite
    {
      "icon": "reind-item-ore-pyrite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-pyrite", 60,
        "reind-item-bio-charcoal", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-pig-iron", 20,
      ],
      "randOutputs": [
        "reind-item-was-slag", 60, 0.33333333,
      ],
    },


  ],
};
exports.rc = rc;
