const gri = [
  "reind-item-bio-charcoal", 30, 0.5,
];

const rc = {
  "parent": "reind-fac-furn-primitive-brick-kiln",

  "recipes": new Seq ([


    /* ========================================
      Section: Brick Baking
    ======================================== */


    // Clay Brick
    {
      "icon": "reind-item-buil-brick-clay",
      "category": "brick-baking",
      "inputs": new Seq([
        "reind-item-int-brick-clay-unbaked", 10,
      ]),
      "randInputs": new Seq([].concat(gri)),
      "outputs": new Seq([
        "reind-item-buil-brick-clay", 10,
      ]),
    },


    // High-Alumina Brick
    {
      "icon": "reind-item-buil-brick-high-alumina",
      "category": "brick-baking",
      "inputs": new Seq([
        "reind-item-int-brick-high-alumina-unbaked", 10,
      ]),
      "randInputs": new Seq([].concat(gri)),
      "outputs": new Seq([
        "reind-item-buil-brick-high-alumina", 10,
      ]),
    },


    // Magnesia Brick
    {
      "icon": "reind-item-buil-brick-magnesia",
      "category": "brick-baking",
      "inputs": new Seq([
        "reind-item-int-brick-magnesia-unbaked", 10,
      ]),
      "randInputs": new Seq([].concat(gri)),
      "outputs": new Seq([
        "reind-item-buil-brick-magnesia", 10,
      ]),
    },


    // Mullite Brick
    {
      "icon": "reind-item-buil-brick-mullite",
      "category": "brick-baking",
      "inputs": new Seq([
        "reind-item-int-brick-mullite-unbaked", 10,
      ]),
      "randInputs": new Seq([].concat(gri)),
      "outputs": new Seq([
        "reind-item-buil-brick-mullite", 10,
      ]),
    },


    // Silica Brick
    {
      "icon": "reind-item-buil-brick-silica",
      "category": "brick-baking",
      "inputs": new Seq([
        "reind-item-int-brick-silica-unbaked", 10,
      ]),
      "randInputs": new Seq([].concat(gri)),
      "outputs": new Seq([
        "reind-item-buil-brick-silica", 10,
      ]),
    },


  ]),
};
exports.rc = rc;
