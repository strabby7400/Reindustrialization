const lib_base = require("reind/lib/lib_base");


const gi = [
  "reind-ileffc-effc-ids", 0.03333333,
];


const rc = {
  "parent": "reind-ilfac-misc-ore-dictionary-converter",

  "recipes": [


    /* ========================================
      Section: Vanilla
    ======================================== */


    /* <---------------- item ----------------> */


    // Copper
    {
      "icon": "copper",
      "category": "vanilla",
      "inputs": [
        "copper", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-copper", 2,
      ],
    },


    // Lead
    {
      "icon": "lead",
      "category": "vanilla",
      "inputs": [
        "lead", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-lead", 2,
      ],
    },


    // Graphite
    {
      "icon": "graphite",
      "category": "vanilla",
      "inputs": [
        "graphite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-graphite", 2,
      ],
    },


    // Coal
    {
      "icon": "coal",
      "category": "vanilla",
      "inputs": [
        "coal", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-coal", 2,
      ],
    },


    // Sand
    {
      "icon": "sand",
      "category": "vanilla",
      "inputs": [
        "sand", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-sand", 2,
      ],
    },


    /* <---------------- fluid ----------------> */


    // Water
    {
      "icon": "water",
      "category": "vanilla",
      "inputs": [
        "water", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-liq-ore-water", 0.2,
      ],
    },


    // Ozone
    {
      "icon": "ozone",
      "category": "vanilla",
      "inputs": [
        "ozone", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-gas-chem-ozone", 0.2,
      ],
    },


    // Hydrogen
    {
      "icon": "hydrogen",
      "category": "vanilla",
      "inputs": [
        "hydrogen", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-gas-chem-hydrogen", 0.2,
      ],
    },


    // Nitrogen
    {
      "icon": "nitrogen",
      "category": "vanilla",
      "inputs": [
        "nitrogen", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-gas-chem-nitrogen", 0.2,
      ],
    },


  ],
};


if(lib_base.hasAsthosus) {
  rc["recipes"].push.apply([


    /* ========================================
      Section: Asthosus
    ======================================== */


    /* <---------------- item ----------------> */


    // Lignite
    {
      "icon": "asthosus-01a-03-item-lignite",
      "category": "asthosus",
      "inputs": [
        "asthosus-01a-03-item-lignite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-lignite", 2,
      ],
    },


    // Hardened Sand
    {
      "icon": "asthosus-01a-04-item-hardened-sand",
      "category": "asthosus",
      "inputs": [
        "asthosus-01a-04-item-hardened-sand", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-sandstone", 2,
      ],
    },


    // Red Sand
    // TODO


    // Lodestone
    {
      "icon": "asthosus-01a-06-item-lodestone",
      "category": "asthosus",
      "inputs": [
        "asthosus-01a-06-item-lodestone", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-magnetite", 2,
      ],
    },


    // Lithium
    // TODO


    // Barite
    {
      "icon": "asthosus-01a-11-item-barite",
      "category": "asthosus",
      "inputs": [
        "asthosus-01a-11-item-barite", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-barite", 2,
      ],
    },


    /* <---------------- fluid ----------------> */


    // Oasis Water
    {
      "icon": "asthosus-02b-02-liquid-oasis-water",
      "category": "asthosus",
      "inputs": [
        "asthosus-02b-02-liquid-oasis-water", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-liq-ore-sea-water", 0.2,
      ],
    },


    // Purified Oasis Water
    {
      "icon": "asthosus-02b-03-liquid-purified-oasis-water",
      "category": "asthosus",
      "inputs": [
        "asthosus-02b-03-liquid-purified-oasis-water", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-liq-ore-water", 0.2,
      ],
    },


  ]);
};


if(lib_base.hasSubvoyage) {
  rc["recipes"].push.apply([


    /* ========================================
      Section: Subvoyage
    ======================================== */


    /* <---------------- item ----------------> */


    // Clay
    {
      "icon": "subvoyage-clay",
      "category": "subvoyage",
      "inputs": [
        "subvoyage-clay", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-clay", 2,
      ],
    },


    // Fine Sand
    {
      "icon": "subvoyage-finesand",
      "category": "subvoyage",
      "inputs": [
        "subvoyage-finesand", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-ore-sand", 2,
      ],
    },


    // Sulfur
    {
      "icon": "subvoyage-sulfur",
      "category": "subvoyage",
      "inputs": [
        "subvoyage-sulfur", 2,
      ].concat(gi),
      "outputs": [
        "reind-item-chem-sulfur", 2,
      ],
    },


    /* <---------------- fluid ----------------> */


    // Hard Water
    {
      "icon": "subvoyage-liquid-hard-water",
      "category": "subvoyage",
      "inputs": [
        "subvoyage-liquid-hard-water", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-liq-ore-sea-water", 0.2,
      ],
    },


    // Argon
    // TODO


    // Propane
    // TODO


    // Helium
    // TODO


    // Nitrogen
    {
      "icon": "subvoyage-nitrogen",
      "category": "subvoyage",
      "inputs": [
        "subvoyage-nitrogen", 0.2,
      ].concat(gi),
      "outputs": [
        "reind-gas-chem-nitrogen", 0.2,
      ],
    },


  ]);
};


exports.rc = rc;
