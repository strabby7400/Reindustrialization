const gi = [
  "reind-effc-cond-pressure", 0.01666667,
];

const rc = {
  "parent": "reind-fac-sep-high-pressure-cyclone-separator",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Dust Recycling Effc
    {
      "icon": "reind-effc-effc-dust-recycling",
      "category": "special",
      "inputs": new Seq([].concat(gi)),
      "outputs": new Seq([
        "reind-effc-effc-dust-recycling", 0.06666667,
      ]),
    },


    // Dust Recycling Effc (Overdriven)
    {
      "icon": "reind-effc-effc-dust-recycling",
      "category": "special",
      "inputs": new Seq([].concat(gi)),
      "outputs": new Seq([
        "reind-effc-effc-dust-recycling", 0.13333333,
      ]),
      "tooltip": "overdriven",
      "craftScript": function() {
        this.damage(this.maxHealth * 0.0225);
      },
    },


    // Sand
    {
      "icon": "reind-item-ore-sand",
      "category": "special",
      "inputs": new Seq([
        "reind-gas-misc-air", 0.4,
      ].concat(gi)),
      "randOutputs": new Seq([
        "reind-item-ore-sand", 6, 0.25,
        "reind-item-ore-sand-basaltic", 4, 0.125,
      ]),
    },


  ]),
};
exports.rc = rc;
