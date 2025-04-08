const rc = {
  "parent": "reind-fac-furn-kiln",

  "recipes": [


    /* ========================================
      Section: Batch Crafting
    ======================================== */


    // Native Copper
    {
      "icon": "reind-item-ore-native-copper",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-native-copper", 80,
        "reind-item-ore-lignite", 80,
      ],
      "outputs": [
        "reind-item-chem-copper", 40,
      ],
      "randOutputs": [
        "reind-item-chem-copper", 80, 0.5,
      ],
      "timeScale": 10.0,
    },


    // Galena
    {
      "icon": "reind-item-ore-galena",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-galena", 80,
        "reind-item-ore-lignite", 80,
      ],
      "outputs": [
        "reind-item-chem-lead", 25,
      ],
      "randOutputs": [
        "reind-item-chem-lead", 80, 0.5,
      ],
      "timeScale": 10.0,
    },


    // Crude Graphite
    {
      "icon": "reind-item-ore-crude-graphite",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-crude-graphite", 80,
        "reind-item-ore-lignite", 80,
      ],
      "randOutputs": [
        "reind-item-chem-graphite", 50, 0.5,
      ],
      "timeScale": 10.0,
    },


    // Cassiterite
    {
      "icon": "reind-item-ore-cassiterite",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-cassiterite", 80,
        "reind-item-ore-lignite", 80,
      ],
      "outputs": [
        "reind-item-chem-tin", 25,
      ],
      "randOutputs": [
        "reind-item-chem-tin", 80, 0.5,
      ],
      "timeScale": 10.0,
    },


    // Sphalerite
    {
      "icon": "reind-item-ore-sphalerite",
      "category": "batch-crafting",
      "inputs": [
        "reind-item-ore-sphalerite", 80,
        "reind-item-ore-lignite", 80,
      ],
      "outputs": [
        "reind-item-chem-zinc", 25,
      ],
      "randOutputs": [
        "reind-item-chem-zinc", 80, 0.5,
      ],
      "timeScale": 10.0,
    },


    /* ========================================
      Section: Special
    ======================================== */


    // Melter Effc
    {
      "icon": "reind-effc-effc-melter",
      "category": "special",
      "randInputs": [
        "reind-item-bio-charcoal", 20, 0.25,
      ],
      "outputs": [
        "reind-effc-effc-melter", 0.01666667,
      ],
    },


    /* ========================================
      Section: Smelting
    ======================================== */


    /* <---------------- copper ----------------> */


    // Azurite
    {
      "icon": "reind-item-ore-azurite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-azurite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-copper", 5,
      ],
      "randOutputs": [
        "reind-item-chem-copper", 10, 0.5,
      ],
    },


    // Cuprite
    {
      "icon": "reind-item-ore-cuprite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-cuprite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-copper", 5,
      ],
      "randOutputs": [
        "reind-item-chem-copper", 10, 0.5,
      ],
    },


    // Malachite
    {
      "icon": "reind-item-ore-malachite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-malachite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-copper", 5,
      ],
      "randOutputs": [
        "reind-item-chem-copper", 10, 0.5,
      ],
    },


    // Native Copper
    {
      "icon": "reind-item-ore-native-copper",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-native-copper", 10,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-copper", 5,
      ],
      "randOutputs": [
        "reind-item-chem-copper", 10, 0.5,
      ],
    },


    /* <---------------- graphite ----------------> */


    // Crude Graphite
    {
      "icon": "reind-item-ore-crude-graphite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-crude-graphite", 20,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-graphite", 5,
      ],
      "randOutputs": [
        "reind-item-chem-graphite", 10, 0.5,
      ],
    },


    /* <---------------- lead ----------------> */


    // Anglesite
    {
      "icon": "reind-item-ore-anglesite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-anglesite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-lead", 5,
      ],
      "randOutputs": [
        "reind-item-chem-lead", 10, 0.5,
      ],
    },


    // Galena
    {
      "icon": "reind-item-ore-galena",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-galena", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-lead", 5,
      ],
      "randOutputs": [
        "reind-item-chem-lead", 10, 0.5,
      ],
    },


    /* <---------------- tin ----------------> */


    // Cassiterite
    {
      "icon": "reind-item-ore-cassiterite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-cassiterite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-tin", 5,
      ],
      "randOutputs": [
        "reind-item-chem-tin", 10, 0.5,
      ],
    },


    /* <---------------- zinc ----------------> */


    // Smithsonite
    {
      "icon": "reind-item-ore-smithsonite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-smithsonite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-zinc", 5,
      ],
      "randOutputs": [
        "reind-item-chem-zinc", 10, 0.5,
      ],
    },


    // Sphalerite
    {
      "icon": "reind-item-ore-sphalerite",
      "category": "smelting",
      "inputs": [
        "reind-item-ore-sphalerite", 15,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 5, 0.5,
      ],
      "outputs": [
        "reind-item-chem-zinc", 5,
      ],
      "randOutputs": [
        "reind-item-chem-zinc", 10, 0.5,
      ],
    },


    /* ========================================
      Section: Alloying
    ======================================== */


    /* <---------------- copper ----------------> */


    // Brass
    {
      "icon": "reind-item-chem-brass",
      "category": "alloying",
      "inputs": [
        "reind-item-chem-copper", 10,
        "reind-item-chem-zinc", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-brass", 10,
      ],
    },


    // Tin Bronze
    {
      "icon": "reind-item-chem-tin-bronze",
      "category": "alloying",
      "inputs": [
        "reind-item-chem-copper", 10,
        "reind-item-chem-tin", 5,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-tin-bronze", 10,
      ],
    },


    /* <---------------- lead ----------------> */


    // Solder
    {
      "icon": "reind-item-chem-solder",
      "category": "alloying",
      "inputs": [
        "reind-item-chem-lead", 15,
        "reind-item-chem-tin", 10,
      ],
      "randInputs": [
        "reind-item-bio-charcoal", 10, 0.5,
      ],
      "outputs": [
        "reind-item-chem-solder", 10,
      ],
    },


  ],
};
exports.rc = rc;
