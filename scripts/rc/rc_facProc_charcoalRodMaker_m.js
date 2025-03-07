const gi = [
  "reind-effc-link-charcoal-rod-maker-r1", 0.01666667,
];

const rc = {
  "parent": "reind-fac-proc-charcoal-rod-maker-m",

  "recipes": new Seq ([


    /* ========================================
      Section: Special
    ======================================== */


    // Charcoal (Uncarbonized) : Sawdust (Dried)
    {
      "icon": "reind-item-int-sawdust-dried",
      "category": "special",
      "inputs": new Seq([
        "reind-item-int-sawdust-dried", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-charcoal-uncarbonized", 20,
      ]),
    },


  ]),
};
exports.rc = rc;
