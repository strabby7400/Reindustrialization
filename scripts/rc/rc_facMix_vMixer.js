const rc = {
  "parent": "reind-fac-mix-v-mixer",

  "recipes": [


    /* ========================================
      Section: Special
    ======================================== */


    // Cement
    {
      "icon": "reind-item-buil-cement",
      "category": "special",
      "inputs": [
        "reind-item-int-blend-roasted-cement", 10,
        "reind-item-int-chunks-gypsum", 15,
      ],
      "outputs": [
        "reind-item-buil-cement", 10,
      ],
    },


    /* ========================================
      Section: Mixing
    ======================================== */


    // Blend (Cement) : Sand
    {
      "icon": "reind-item-int-blend-cement",
      "category": "mixing",
      "inputs": [
        "reind-item-int-chunks-limestone", 15,
        "reind-item-ore-sand", 20,
        "reind-item-ore-clay", 10,
      ],
      "outputs": [
        "reind-item-int-blend-cement", 10,
      ],
      "tooltip": "using-sand",
    },


    // Blend (Cement) : Slag
    {
      "icon": "reind-item-int-blend-cement",
      "category": "mixing",
      "inputs": [
        "reind-item-int-chunks-limestone", 15,
        "reind-item-was-slag", 20,
        "reind-item-ore-clay", 10,
      ],
      "outputs": [
        "reind-item-int-blend-cement", 10,
      ],
      "tooltip": "using-slag",
    },


  ],
};
exports.rc = rc;
