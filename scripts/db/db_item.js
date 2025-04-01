const db = {




  "map": {


    "consumable": new Seq([

      /* <---------------- ball mill ----------------> */

      "reind-item-cons-ball-steel", "ball-mill",

      /* <---------------- electrolyzer ----------------> */

      "reind-item-cons-electrode-copper", "electrolyzer",
      "reind-item-cons-electrode-lead", "electrolyzer",

      /* <---------------- electric arc furnace ----------------> */

      "reind-item-cons-electrode-graphite", "electric-arc-furnace",

      /* <---------------- packed tower ----------------> */

      "reind-item-cons-pall-ring-steel", "packed-tower",
      "reind-item-cons-pall-ring-stainless-steel", "packed-tower",

    ]),


    "rock": new Seq([
      "reind-attr-rock-clastic", "reind-item-ore-rock-shard-clastic",
      "reind-attr-rock-evaporite", "reind-item-ore-rock-shard-evaporite",
      "reind-attr-rock-hypabyssal", "reind-item-ore-rock-shard-hypabyssal",
      "reind-attr-rock-lava", "reind-item-ore-rock-shard-lava",
      "reind-attr-rock-metamorphic", "reind-item-ore-rock-shard-metamorphic",
      "reind-attr-rock-plutonic", "reind-item-ore-rock-shard-plutonic",
      "reind-attr-rock-biological-sedimentary", "reind-item-ore-rock-shard-biological-sedimentary",
      "reind-attr-rock-clastic-sedimentary", "reind-item-ore-rock-shard-clastic-sedimentary",
    ]),


    "bush": new Seq(),


  },




  "virtual": {


    "whitelist": new Seq([

      /* <---------------- eff-stor ----------------> */

      "reind-eff-stor-bit-container",

    ]),


  },




  "reaction": {


    "map": new Seq([

      /* <---------------- item-chem[elementary] ----------------> */

      "reind-item-chem-lithium", "ANY: water", "explosionII",
      "reind-item-chem-lithium", "reind-gas-misc-air", "explosionI",

      "reind-item-chem-sodium", "ANY: water", "explosionII",
      "reind-item-chem-sodium", "reind-gas-misc-air", "explosionI",

      "reind-item-chem-potassium", "ANY: water", "explosionIII",
      "reind-item-chem-potassium", "reind-gas-misc-air", "explosionII",

      /* <---------------- item-chem[inorganic] ----------------> */

      "reind-item-chem-potassium-hydroxide", "reind-gas-misc-air", "denaturing",

      "reind-item-chem-sodium-hydroxide", "reind-gas-misc-air", "denaturing",

    ]),


    "denaturing": new Seq([

      /* <---------------- item-chem[inorganic] ----------------> */

      "reind-item-chem-potassium-hydroxide", "reind-item-chem-potassium-carbonate",

      "reind-item-chem-sodium-hydroxide", "reind-item-chem-sodium-carbonate",

    ]),


  },




};
exports.db = db;
