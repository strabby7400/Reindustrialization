const gi = [
  "reind-effc-effc-pump", 0.01666667,
  "reind-liq-ore-water", 0.15,
];
const go = [
  "reind-liq-was-waste-slurry", 0.15,
];


const rc = {
  "parent": "reind-fac-proc-brick-press",

  "recipes": [


    /* ========================================
      Section: Brick Making
    ======================================== */


    // Clay Brick
    {
      "icon": "reind-item-int-brick-clay-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-ore-clay", 8,
      ].concat(gi),
      "outputs": [
        "reind-item-int-brick-clay-unbaked", 4,
      ].concat(go),
    },


    // High-Alumina Brick
    {
      "icon": "reind-item-int-brick-high-alumina-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-high-alumina", 4,
      ].concat(gi),
      "outputs": [
        "reind-item-int-brick-high-alumina-unbaked", 4,
      ].concat(go),
    },


    // Magnesia Brick
    {
      "icon": "reind-item-int-brick-magnesia-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-magnesia", 4,
      ].concat(gi),
      "outputs": [
        "reind-item-int-brick-magnesia-unbaked", 4,
      ].concat(go),
    },


    // Mullite Brick
    {
      "icon": "reind-item-int-brick-mullite-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-mullite", 4,
      ].concat(gi),
      "outputs": [
        "reind-item-int-brick-mullite-unbaked", 4,
      ].concat(go),
    },


    // Silica Brick
    {
      "icon": "reind-item-int-brick-silica-unbaked",
      "category": "brick-making",
      "inputs": [
        "reind-item-int-blend-brick-silica", 4,
      ].concat(gi),
      "outputs": [
        "reind-item-int-brick-silica-unbaked", 4,
      ].concat(go),
    },


  ],
};
exports.rc = rc;
