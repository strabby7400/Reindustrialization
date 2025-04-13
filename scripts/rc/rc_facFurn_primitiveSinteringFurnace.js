const gi = [
  "reind-effc-effc-temperature-control", 0.01666667,
  "reind-effc-effc-smoke-exhaust", 0.03333333,
];


const rc = {
  "parent": "reind-fac-furn-primitive-sintering-furnace",

  "recipes": [


    /* ========================================
      Section: Concentrate Sintering
    ======================================== */


    /* <---------------- aluminum ----------------> */


    // Dust (P1 : Bauxite)
    {
      "icon": "reind-item-int-dust-p1-bauxite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-bauxite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-bauxite", 20,
      ],
    },


    /* <---------------- copper ----------------> */


    // Dust (P1 : Chalcopyrite)
    {
      "icon": "reind-item-int-dust-p1-chalcopyrite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-chalcopyrite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-chalcopyrite", 20,
      ],
    },


    // Dust (P1 : Malachite)
    {
      "icon": "reind-item-int-dust-p1-malachite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-malachite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-malachite", 20,
      ],
    },


    /* <---------------- iron ----------------> */


    // Dust (P1 : Hematite)
    {
      "icon": "reind-item-int-dust-p1-hematite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-hematite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-hematite", 20,
      ],
    },


    // Dust (P1 : Limonite)
    {
      "icon": "reind-item-int-dust-p1-limonite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-limonite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-limonite", 20,
      ],
    },


    // Dust (P1 : Magnetite)
    {
      "icon": "reind-item-int-dust-p1-magnetite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-magnetite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-magnetite", 20,
      ],
    },


    // Dust (P1 : Pyrite)
    {
      "icon": "reind-item-int-dust-p1-pyrite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-pyrite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-pyrite", 20,
      ],
    },


    /* <---------------- lead ----------------> */


    // Dust (P1 : Galena)
    {
      "icon": "reind-item-int-dust-p1-galena",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-galena", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-galena", 20,
      ],
    },


    /* <---------------- manganese ----------------> */


    // Dust (P1 : Psilomelane)
    {
      "icon": "reind-item-int-dust-p1-psilomelane",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-psilomelane", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-psilomelane", 20,
      ],
    },


    // Dust (P1 : Pyrolusite)
    {
      "icon": "reind-item-int-dust-p1-pyrolusite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-pyrolusite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-pyrolusite", 20,
      ],
    },


    /* <---------------- titanium ----------------> */


    // Dust (P1 : Ilmenite)
    {
      "icon": "reind-item-int-dust-p1-ilmenite",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-ilmenite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-ilmenite", 20,
      ],
    },


    // Dust (P1 : Rutile)
    {
      "icon": "reind-item-int-dust-p1-rutile",
      "category": "concentrate-sintering",
      "inputs": [
        "reind-item-int-dust-p1-rutile", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-concentrate-rutile", 20,
      ],
    },


    /* ========================================
      Section: Sintering
    ======================================== */


    // Sand
    {
      "icon": "reind-item-int-dust-sand",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-sand", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-sand", 20,
      ],
    },


    /* <---------------- aluminum ----------------> */


    // Bauxite
    {
      "icon": "reind-item-int-dust-bauxite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-bauxite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-bauxite", 20,
      ],
    },


    /* <---------------- chromium ----------------> */


    // Chromite
    {
      "icon": "reind-item-int-dust-chromite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-chromite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-chromite", 20,
      ],
    },


    /* <---------------- cobalt ----------------> */


    // Linnaeite
    {
      "icon": "reind-item-int-dust-linnaeite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-linnaeite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-linnaeite", 20,
      ],
    },


    /* <---------------- copper ----------------> */


    // Azurite
    {
      "icon": "reind-item-int-dust-azurite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-azurite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-azurite", 20,
      ],
    },


    // Azurite
    {
      "icon": "reind-item-int-dust-chalcopyrite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-chalcopyrite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-chalcopyrite", 20,
      ],
    },


    // Cuprite
    {
      "icon": "reind-item-int-dust-cuprite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-cuprite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-cuprite", 20,
      ],
    },


    // Malachite
    {
      "icon": "reind-item-int-dust-malachite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-malachite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-malachite", 20,
      ],
    },


    // Native Copper
    {
      "icon": "reind-item-int-dust-native-copper",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-native-copper", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-native-copper", 20,
      ],
    },


    /* <---------------- iron ----------------> */


    // Hematite
    {
      "icon": "reind-item-int-dust-hematite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-hematite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-hematite", 20,
      ],
    },


    // Limonite
    {
      "icon": "reind-item-int-dust-limonite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-limonite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-limonite", 20,
      ],
    },


    // Magnetite
    {
      "icon": "reind-item-int-dust-magnetite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-magnetite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-magnetite", 20,
      ],
    },


    // Pyrite
    {
      "icon": "reind-item-int-dust-pyrite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-pyrite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-pyrite", 20,
      ],
    },


    /* <---------------- lead ----------------> */


    // Anglesite
    {
      "icon": "reind-item-int-dust-anglesite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-anglesite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-anglesite", 20,
      ],
    },


    // Galena
    {
      "icon": "reind-item-int-dust-galena",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-galena", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-galena", 20,
      ],
    },


    /* <---------------- manganese ----------------> */


    // Psilomelane
    {
      "icon": "reind-item-int-dust-psilomelane",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-psilomelane", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-psilomelane", 20,
      ],
    },


    // Pyrolusite
    {
      "icon": "reind-item-int-dust-pyrolusite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-pyrolusite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-pyrolusite", 20,
      ],
    },


    /* <---------------- mercury ----------------> */


    // Cinnabar
    {
      "icon": "reind-item-int-dust-cinnabar",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-cinnabar", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-cinnabar", 20,
      ],
    },


    /* <---------------- tin ----------------> */


    // Cassiterite
    {
      "icon": "reind-item-int-dust-cassiterite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-cassiterite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-cassiterite", 20,
      ],
    },


    /* <---------------- titanium ----------------> */


    // Ilmenite
    {
      "icon": "reind-item-int-dust-ilmenite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-ilmenite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-ilmenite", 20,
      ],
    },


    // Rutile
    {
      "icon": "reind-item-int-dust-rutile",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-rutile", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-rutile", 20,
      ],
    },


    /* <---------------- zinc ----------------> */


    // Smithsonite
    {
      "icon": "reind-item-int-dust-smithsonite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-smithsonite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-smithsonite", 20,
      ],
    },


    // Sphalerite
    {
      "icon": "reind-item-int-dust-sphalerite",
      "category": "sintering",
      "inputs": [
        "reind-item-int-dust-sphalerite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-sphalerite", 20,
      ],
    },


  ],
};
exports.rc = rc;
