const rc = {
  "parent": "reind-fac-sep-large-vibration-screen",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Vibration Screen Effc
    {
      "icon": "reind-effc-effc-vibration-screen",
      "category": "special",
      "outputs": new Seq([
        "reind-effc-effc-vibration-screen", 0.1,
      ]),
    },


    // Vibration Screen Effc (Overdriven)
    {
      "icon": "reind-effc-effc-vibration-screen",
      "category": "special",
      "outputs": new Seq([
        "reind-effc-effc-vibration-screen", 0.2,
      ]),
      "tooltip": "overdriven",
      "craftScript": function() {
        this.damage(this.maxHealth * 0.0225);
      },
    },


    // Asbestos Wool
    {
      "icon": "reind-item-buil-asbestos-wool",
      "category": "special",
      "inputs": new Seq([
        "reind-item-int-dust-p1-asbestos", 4,
      ]),
      "outputs": new Seq([
        "reind-item-buil-asbestos-wool", 4,
      ]),
    },


  ]),
};
exports.rc = rc;
