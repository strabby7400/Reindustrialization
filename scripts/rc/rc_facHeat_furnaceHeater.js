const rc = {
  "parent": "reind-fac-heat-furnace-heater",

  "recipes": new Seq ([


    /* ========================================
      Section: Heating
    ======================================== */


    /* <---------------- 3 heat ----------------> */


    // Peat
    {
      "icon": "reind-item-ore-peat",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-ore-peat", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-ore-peat", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.05,
      ]),
      "timeScale": 3.0,
    },


    // Lignite
    {
      "icon": "reind-item-ore-lignite",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-ore-lignite", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-ore-lignite", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.05,
      ]),
      "timeScale": 4.0,
    },


    // Raw Coal
    {
      "icon": "reind-item-ore-raw-coal",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-ore-raw-coal", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-ore-raw-coal", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.05,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-gangue", 1, 0.1,
      ]),
      "timeScale": 4.0,
    },


    /* <---------------- 4 heat ----------------> */


    // Sawdust
    {
      "icon": "reind-item-bio-sawdust",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-bio-sawdust", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-sawdust", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.06666667,
      ]),
      "timeScale": 2.0,
    },


    // Timber
    {
      "icon": "reind-item-bio-timber",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-bio-timber", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-timber", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.06666667,
      ]),
      "timeScale": 4.0,
    },


    // Coal
    {
      "icon": "reind-item-chem-coal",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-chem-coal", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-chem-coal", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.06666667,
      ]),
      "randOutputs": new Seq([
        "reind-item-was-dust", 1, 0.1,
      ]),
      "timeScale": 8.0,
    },


    /* <---------------- 5 heat ----------------> */


    // Charcoal
    {
      "icon": "reind-item-bio-charcoal",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-bio-charcoal", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-bio-charcoal", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.08333333,
      ]),
      "timeScale": 4.0,
    },


    // Semicoke
    {
      "icon": "reind-item-chem-semicoke",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-chem-semicoke", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-chem-semicoke", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.08333333,
      ]),
      "timeScale": 6.0,
    },


    /* <---------------- 6 heat ----------------> */


    // Coke
    {
      "icon": "reind-item-chem-coke",
      "category": "heating",
      "inputs": new Seq([
        "reind-item-chem-coke", 1,
      ]),
      "randInputs": new Seq([
        "reind-item-chem-coke", 1, 0.1,
      ]),
      "outputs": new Seq([
        "reind-effc-cond-heat", 0.1,
      ]),
      "timeScale": 6.0,
    },


  ]),
};
exports.rc = rc;
