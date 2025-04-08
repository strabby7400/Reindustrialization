const mdl_effect = require("reind/mdl/mdl_effect");


const rc = {
  "parent": "reind-fac-misc-mechanical-crank",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Torque
    {
      "icon": "reind-effc-cond-torque",
      "category": "special",
      "outputs": [
        "reind-effc-cond-torque", 0.13333333,
      ],
    },


    // Torque (Overdriven)
    {
      "icon": "reind-effc-cond-torque",
      "category": "special",
      "outputs": [
        "reind-effc-cond-torque", 0.26666667,
      ],
      "tooltip": "overdriven",
      "craftScript": function() {
        var dmg = this.maxHealth * 0.0225;
        this.damagePierce(dmg);
        mdl_effect.damageAt(this, dmg);
        mdl_effect.flashAt(this);
      },
    },


  ],
};
exports.rc = rc;
