const mdl_effect = require("reind/mdl/mdl_effect");


const rc = {
  "parent": "reind-fac-sep-large-vibration-screen",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Vibration Screen Effc
    {
      "icon": "reind-effc-effc-vibration-screen",
      "category": "special",
      "outputs": [
        "reind-effc-effc-vibration-screen", 0.1,
      ],
    },


    // Vibration Screen Effc (Overdriven)
    {
      "icon": "reind-effc-effc-vibration-screen",
      "category": "special",
      "outputs": [
        "reind-effc-effc-vibration-screen", 0.2,
      ],
      "tooltip": "overdriven",
      "craftScript": function() {
        var dmg = this.maxHealth * 0.0225;
        this.damagePierce(dmg);
        mdl_effect.damageAt(this, dmg);
        mdl_effect.flashAt(this);
      },
    },


    // Asbestos Wool
    {
      "icon": "reind-item-buil-asbestos-wool",
      "category": "special",
      "inputs": [
        "reind-item-int-dust-p1-asbestos", 4,
      ],
      "outputs": [
        "reind-item-buil-asbestos-wool", 4,
      ],
    },


  ],
};
exports.rc = rc;
