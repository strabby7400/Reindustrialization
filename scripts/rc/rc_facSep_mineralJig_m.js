const gi = [
  "reind-effc-link-mineral-jig-r1", 0.01666667,
  "reind-liq-ore-water", 0.2,
];
const go = [
  "reind-liq-was-waste-water", 0.2,
];


const rc = {
  "parent": "reind-fac-sep-mineral-jig-m",

  "recipes": new Seq ([


    /* ========================================
      Section: Purification
    ======================================== */


    // Dust (Raw Coal)
    {
      "icon": "reind-item-int-dust-raw-coal",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-raw-coal", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-chem-coal", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-lignite", 10, 0.5,
        "reind-item-ore-crude-graphite", 10, 0.25,
        "reind-item-ore-pyrite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    // Dust (Sand)
    // TODO


    /* <---------------- chunks ----------------> */


    // Chunks (Barite)
    {
      "icon": "reind-item-int-chunks-barite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-chunks-barite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-chunks-p1-barite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-galena", 10, 0.5,
        "reind-item-ore-sphalerite", 10, 0.5,
        "reind-item-ore-silica-stone", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    // Chunks (Crude Sulfur)
    {
      "icon": "reind-item-int-chunks-crude-sulfur",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-chunks-crude-sulfur", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-chem-sulfur", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-cinnabar", 10, 0.5,
        "reind-item-ore-pyrite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* <---------------- aluminum ----------------> */


    // Dust (Bauxite)
    {
      "icon": "reind-item-int-dust-bauxite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-bauxite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-bauxite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-clay", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* <---------------- copper ----------------> */


    // Dust (Malachite)
    {
      "icon": "reind-item-int-dust-malachite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-malachite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-malachite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-azurite", 10, 0.25,
        "reind-item-ore-limonite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* <---------------- iron ----------------> */


    // Dust (Hematite)
    {
      "icon": "reind-item-int-dust-hematite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-hematite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-hematite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-magnetite", 10, 0.5,
        "reind-item-ore-raw-coal", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    // Dust (Magnetite)
    {
      "icon": "reind-item-int-dust-magnetite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-magnetite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-magnetite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-hematite", 10, 0.5,
        "reind-item-ore-raw-coal", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    // Dust (Pyrite)
    {
      "icon": "reind-item-int-dust-pyrite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-pyrite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-pyrite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-chalcopyrite", 10, 0.25,
        "reind-item-ore-raw-coal", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* <---------------- lead ----------------> */


    // Dust (Galena)
    {
      "icon": "reind-item-int-dust-galena",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-galena", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-galena", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-sphalerite", 10, 0.5,
        "reind-item-ore-pyrite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* <---------------- manganese ----------------> */


    // Dust (Psilomelane)
    {
      "icon": "reind-item-int-dust-psilomelane",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-psilomelane", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-psilomelane", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-limonite", 10, 0.5,
        "reind-item-ore-pyrite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    // Dust (Pyrolusite)
    {
      "icon": "reind-item-int-dust-pyrolusite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-pyrolusite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-pyrolusite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-hematite", 10, 0.5,
        "reind-item-ore-chromite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* <---------------- titanium ----------------> */


    // Dust (Ilmenite)
    {
      "icon": "reind-item-int-dust-ilmenite",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-ilmenite", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-ilmenite", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-rutile", 10, 0.5,
        "reind-item-ore-hematite", 10, 0.25,
        "reind-item-ore-pyrolusite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    // Dust (Rutile)
    {
      "icon": "reind-item-int-dust-rutile",
      "category": "purification",
      "inputs": new Seq([
        "reind-item-int-dust-rutile", 20,
      ].concat(gi)),
      "outputs": new Seq([
        "reind-item-int-dust-p1-rutile", 10,
      ].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-hematite", 10, 0.5,
        "reind-item-ore-zircon", 10, 0.25,
        "reind-item-was-gangue", 10, 0.5,
      ]),
    },


    /* ========================================
      Section: Selection
    ======================================== */


    // Dust (Metamorphic) : Hematite / Magnetite
    {
      "icon": "reind-item-int-dust-rock-metamorphic",
      "category": "selection",
      "inputs": new Seq([
        "reind-item-int-dust-rock-metamorphic", 20,
      ].concat(gi)),
      "outputs": new Seq([].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-hematite", 10, 0.5,
        "reind-item-ore-magnetite", 10, 0.5,
        "reind-item-ore-pyrite", 10, 0.25,
        "reind-item-ore-bauxite", 10, 0.125,
        "reind-item-was-gangue", 10, 0.75,
      ]),
      "tooltip": "target-hematite-magnetite",
    },


    // Dust (Metamorphic) : Talcum / Asbestos
    {
      "icon": "reind-item-int-dust-rock-metamorphic",
      "category": "selection",
      "inputs": new Seq([
        "reind-item-int-dust-rock-metamorphic", 20,
      ].concat(gi)),
      "outputs": new Seq([].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-talcum", 10, 0.5,
        "reind-item-ore-asbestos", 10, 0.5,
        "reind-item-ore-pyrite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.75,
      ]),
      "tooltip": "target-talcum-asbestos",
    },


    // Dust (Plutonic) : Galena / Sphalerite
    {
      "icon": "reind-item-int-dust-rock-plutonic",
      "category": "selection",
      "inputs": new Seq([
        "reind-item-int-dust-rock-plutonic", 20,
      ].concat(gi)),
      "outputs": new Seq([].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-galena", 10, 0.5,
        "reind-item-ore-sphalerite", 10, 0.5,
        "reind-item-ore-anglesite", 10, 0.25,
        "reind-item-ore-smithsonite", 10, 0.25,
        "reind-item-was-gangue", 10, 0.75,
      ]),
      "tooltip": "target-galena-sphalerite",
    },


    // Dust (Biological Sedimentary) : Gypsum
    {
      "icon": "reind-item-int-dust-rock-biological-sedimentary",
      "category": "selection",
      "inputs": new Seq([
        "reind-item-int-dust-rock-biological-sedimentary", 20,
      ].concat(gi)),
      "outputs": new Seq([].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-gypsum", 10, 0.5,
        "reind-item-ore-clay", 10, 0.25,
        "reind-item-ore-native-copper", 10, 0.125,
        "reind-item-was-gangue", 10, 0.75,
      ]),
      "tooltip": "target-gypsum",
    },


    // Dust (Biological Sedimentary) : Dolomite / Limestone
    {
      "icon": "reind-item-int-dust-rock-biological-sedimentary",
      "category": "selection",
      "inputs": new Seq([
        "reind-item-int-dust-rock-biological-sedimentary", 20,
      ].concat(gi)),
      "outputs": new Seq([].concat(go)),
      "randOutputs": new Seq([
        "reind-item-ore-dolomite", 10, 0.5,
        "reind-item-ore-limestone", 10, 0.5,
        "reind-item-ore-gypsum", 10, 0.125,
        "reind-item-was-gangue", 10, 0.75,
      ]),
      "tooltip": "target-dolomite-limestone",
    },


  ]),
};
exports.rc = rc;
