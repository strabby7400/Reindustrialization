const rc = {
  "parent": "reind-fac-misc-mechanical-crank",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Torque
    {
      "icon": "reind-effc-cond-torque",
      "category": "special",
      "outputs": new Seq([
        "reind-effc-cond-torque", 0.13333333,
      ]),
    },


    // Torque (Overdriven)
    {
      "icon": "reind-effc-cond-torque",
      "category": "special",
      "outputs": new Seq([
        "reind-effc-cond-torque", 0.26666667,
      ]),
      "tooltip": "overdriven",
      "craftScript": function() {
        this.damage(this.maxHealth * 0.0225);
      },
    },


  ]),
};
exports.rc = rc;
