const gi = [
  "reind-ileffc-effc-ids", 0.01666667,
];


const rc = {
  "parent": "reind-ileff-misc-bit-bank",

  "recipes": [


    /* ========================================
      Section: Converting
    ======================================== */


    // Kilobit : Bit
    {
      "icon": "reind-item-virt-kilobit",
      "category": "converting",
      "inputs": [
        "reind-item-virt-bit", 1000,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-kilobit", 1,
      ],
      "tooltip": "using-bit",
    },


    // Megabit : Kilobit
    {
      "icon": "reind-item-virt-megabit",
      "category": "converting",
      "inputs": [
        "reind-item-virt-kilobit", 1000,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-megabit", 1,
      ],
      "tooltip": "using-kilobit",
    },


    // Gigabit : Megabit
    {
      "icon": "reind-item-virt-gigabit",
      "category": "converting",
      "inputs": [
        "reind-item-virt-megabit", 1000,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-gigabit", 1,
      ],
      "tooltip": "using-megabit",
    },


    // Bit : Kilobit
    {
      "icon": "reind-item-virt-bit",
      "category": "converting",
      "inputs": [
        "reind-item-virt-kilobit", 1,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-bit", 1000,
      ],
      "tooltip": "using-kilobit",
    },


    // Kilobit : Megabit
    {
      "icon": "reind-item-virt-kilobit",
      "category": "converting",
      "inputs": [
        "reind-item-virt-megabit", 1,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-kilobit", 1000,
      ],
      "tooltip": "using-megabit",
    },


    // Megabit : Gigabit
    {
      "icon": "reind-item-virt-megabit",
      "category": "converting",
      "inputs": [
        "reind-item-virt-gigabit", 1,
      ].concat(gi),
      "outputs": [
        "reind-item-virt-megabit", 1000,
      ],
      "tooltip": "using-gigabit",
    },


  ],
};
exports.rc = rc;
