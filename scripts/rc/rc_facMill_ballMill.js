const gi = [
  "reind-effc-effc-ball-impact", 0.01666667,
];


const rc = {
  "parent": "reind-fac-mill-ball-mill",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Fine Aggregate : Chunks (Aggregate)
    {
      "icon": "reind-item-int-chunks-aggregate",
      "category": "special",
      "inputs": [
        "reind-item-int-chunks-aggregate", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-buil-fine-aggregate", 20,
      ],
    },


    // Sandstone
    {
      "icon": "reind-item-ore-sandstone",
      "category": "special",
      "inputs": [
        "reind-item-ore-sandstone", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-sand", 20,
      ],
    },


    /* ========================================
      Section: Mixing
    ======================================== */


    // Blend (High-Alumina Brick)
    {
      "icon": "reind-item-int-blend-brick-high-alumina",
      "category": "mixing",
      "inputs": [
        "reind-item-int-dust-p1-bauxite", 20,
        "reind-item-ore-clay", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-blend-brick-high-alumina", 20,
      ],
    },


    // Blend (Magnesia Brick)
    {
      "icon": "reind-item-int-blend-brick-magnesia",
      "category": "mixing",
      "inputs": [
        "reind-item-chem-magnesia-sand", 20,
        "reind-item-ore-clay", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-blend-brick-magnesia", 20,
      ],
    },


    // Blend (Mullite Brick)
    {
      "icon": "reind-item-int-blend-brick-mullite",
      "category": "mixing",
      "inputs": [
        "reind-item-int-dust-p1-bauxite", 10,
        "reind-item-ore-clay", 20,
        "reind-item-bio-sawdust", 10,
      ].concat(gi),
      "outputs": [
        "reind-item-int-blend-brick-mullite", 20,
      ],
    },


    // Blend (Silica Brick)
    {
      "icon": "reind-item-int-blend-brick-silica",
      "category": "mixing",
      "inputs": [
        "reind-item-int-chunks-silica-stone", 20,
        "reind-item-int-chunks-limestone", 10,
        "reind-item-int-chunks-gypsum", 10,
      ].concat(gi),
      "optInputs": [
        "reind-item-chem-coal", 20, 0.65, 1.0,
        "reind-item-chem-semicoke", 20, 0.5, 1.0,
        "reind-item-chem-coke", 20, 0.35, 1.0,
      ],
      "requireOptional": true,
      "outputs": [
        "reind-item-int-blend-brick-silica", 20,
      ],
    },


    /* ========================================
      Section: Pulverization
    ======================================== */


    // Asbestos
    {
      "icon": "reind-item-ore-asbestos",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-asbestos", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-asbestos", 20,
      ],
    },


    // Raw Coal
    {
      "icon": "reind-item-ore-raw-coal",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-raw-coal", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-raw-coal", 20,
      ],
    },


    // Sand
    {
      "icon": "reind-item-ore-sand",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-sand", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-sand", 20,
      ],
    },


    // Basaltic Sand
    {
      "icon": "reind-item-ore-sand-basaltic",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-sand-basaltic", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-sand", 20,
      ],
    },


    // Chunks (Zircon)
    {
      "icon": "reind-item-int-chunks-zircon",
      "category": "pulverization",
      "inputs": [
        "reind-item-int-chunks-zircon", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-zircon", 20,
      ],
    },


    /* <---------------- aluminum ----------------> */


    // Bauxite
    {
      "icon": "reind-item-ore-bauxite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-bauxite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-bauxite", 20,
      ],
    },


    /* <---------------- chromium ----------------> */


    // Chromite
    {
      "icon": "reind-item-ore-chromite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-chromite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-chromite", 20,
      ],
    },


    /* <---------------- copper ----------------> */


    // Azurite
    {
      "icon": "reind-item-ore-azurite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-azurite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-azurite", 20,
      ],
    },


    // Cuprite
    {
      "icon": "reind-item-ore-cuprite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-cuprite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-cuprite", 20,
      ],
    },


    // Malachite
    {
      "icon": "reind-item-ore-malachite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-malachite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-malachite", 20,
      ],
    },


    // Native Copper
    {
      "icon": "reind-item-ore-native-copper",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-native-copper", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-native-copper", 20,
      ],
    },


    /* <---------------- iron ----------------> */


    // Hematite
    {
      "icon": "reind-item-ore-hematite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-hematite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-hematite", 20,
      ],
    },


    // Limonite
    {
      "icon": "reind-item-ore-limonite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-limonite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-limonite", 20,
      ],
    },


    // Magnetite
    {
      "icon": "reind-item-ore-magnetite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-magnetite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-magnetite", 20,
      ],
    },


    // Pyrite
    {
      "icon": "reind-item-ore-pyrite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-pyrite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-pyrite", 20,
      ],
    },


    /* <---------------- iron ----------------> */


    // Anglesite
    {
      "icon": "reind-item-ore-anglesite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-anglesite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-anglesite", 20,
      ],
    },


    // Galena
    {
      "icon": "reind-item-ore-galena",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-galena", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-galena", 20,
      ],
    },


    /* <---------------- manganese ----------------> */


    // Psilomelane
    {
      "icon": "reind-item-ore-psilomelane",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-psilomelane", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-psilomelane", 20,
      ],
    },


    // Pyrolusite
    {
      "icon": "reind-item-ore-pyrolusite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-pyrolusite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-pyrolusite", 20,
      ],
    },


    /* <---------------- mercury ----------------> */


    // Cinnabar
    {
      "icon": "reind-item-ore-cinnabar",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-cinnabar", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-cinnabar", 20,
      ],
    },


    /* <---------------- tin ----------------> */


    // Cassiterite
    {
      "icon": "reind-item-ore-cassiterite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-cassiterite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-cassiterite", 20,
      ],
    },


    /* <---------------- titanium ----------------> */


    // Ilmenite
    {
      "icon": "reind-item-ore-ilmenite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-ilmenite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-ilmenite", 20,
      ],
    },


    // Rutile
    {
      "icon": "reind-item-ore-rutile",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rutile", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rutile", 20,
      ],
    },


    /* <---------------- zinc ----------------> */


    // Smithsonite
    {
      "icon": "reind-item-ore-smithsonite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-smithsonite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-smithsonite", 20,
      ],
    },


    // Smithsonite
    {
      "icon": "reind-item-ore-sphalerite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-sphalerite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-sphalerite", 20,
      ],
    },


    /* <---------------- rock ----------------> */


    // Clastic
    {
      "icon": "reind-item-ore-rock-shard-clastic",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-clastic", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-clastic", 20,
      ],
    },


    // Evaporite
    {
      "icon": "reind-item-ore-rock-shard-evaporite",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-evaporite", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-evaporite", 20,
      ],
    },


    // Hypabyssal
    {
      "icon": "reind-item-ore-rock-shard-hypabyssal",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-hypabyssal", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-hypabyssal", 20,
      ],
    },


    // Lava
    {
      "icon": "reind-item-ore-rock-shard-lava",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-lava", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-lava", 20,
      ],
    },


    // Metamorphic
    {
      "icon": "reind-item-ore-rock-shard-metamorphic",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-metamorphic", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-metamorphic", 20,
      ],
    },


    // Plutonic
    {
      "icon": "reind-item-ore-rock-shard-plutonic",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-plutonic", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-plutonic", 20,
      ],
    },


    // Biological Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-biological-sedimentary",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-biological-sedimentary", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-biological-sedimentary", 20,
      ],
    },


    // Clastic Sedimentary
    {
      "icon": "reind-item-ore-rock-shard-clastic-sedimentary",
      "category": "pulverization",
      "inputs": [
        "reind-item-ore-rock-shard-clastic-sedimentary", 20,
      ].concat(gi),
      "outputs": [
        "reind-item-int-dust-rock-clastic-sedimentary", 20,
      ],
    },


  ],
};
exports.rc = rc;
