const db = {




  /*
   * NOTE:
   *
   * Categorizes some units.
   */
  "type": {


    "nonRobot": new Seq([

      /* <---------------- vanilla mindustry ----------------> */

      "renale",
      "latum",

    ]),


  },




  "map": {


    "faction": new Seq([

      /* <---------------- unit-core ----------------> */

      "reind-unit-core-expedition-i", "outpost-military",
      "reind-unit-core-expedition-ii", "outpost-military",

      /* <---------------- unit-inf ----------------> */

      "reind-unit-inf-tsen", "outpost-military",
      "reind-unit-inf-74ka", "outpost-military",
      "reind-unit-inf-paw", "outpost-military",
      "reind-unit-inf-psas", "outpost-military",

    ]),


  },




  /*
   * NOTE:
   *
   * Params related to energy points.
   */
  "ep": {


    "provided": new Seq([

      /* <---------------- unit-core ----------------> */

      "reind-unit-core-expedition-i", 3.5,
      "reind-unit-core-expedition-ii", 2.0,

      /* <---------------- unit-inf ----------------> */

      "reind-unit-inf-tsen", 1.0,

    ]),


    "range": new Seq([

      /* <---------------- unit-inf ----------------> */

      "reind-unit-inf-74ka", 7,

    ]),


    "requirement": new Seq([

      /* <---------------- unit-inf ----------------> */

      "reind-unit-inf-74ka", 2.0,

    ]),


  },




  /*
   * NOTE:
   *
   * Params related to pollution.
   */
  "pollution": {


    "tolerance": new Seq([

      /* <---------------- unit-core ----------------> */

      "reind-unit-core-expedition-i", 900.0,
      "reind-unit-core-expedition-ii", 600.0,

      /* <---------------- unit-inf ----------------> */

      "reind-unit-inf-tsen", 600.0,
      "reind-unit-inf-74ka", 1200.0,
      "reind-unit-inf-paw", 600.0,
      "reind-unit-inf-psas", 900.0,

    ]),


  },




  /*
   * NOTE:
   *
   * Status effects. Trival for another file.
   */
  "status": {


    "robotOnly": new Seq([

      /* <---------------- sta-spec ----------------> */

      "reind-sta-spec-core-overdrive",
      "reind-sta-spec-explosion-countdown",
      "reind-sta-spec-terrorized",

      /* <---------------- sta-liq ----------------> */

      "reind-sta-liq-brine-corrosion",
      "reind-sta-liq-sea-water-corrosion",

    ]),


    "oceanic": new Seq([

      /* <---------------- sta-liq ----------------> */

      "reind-sta-liq-sea-water-corrosion",

    ]),


  },




};
exports.db = db;
