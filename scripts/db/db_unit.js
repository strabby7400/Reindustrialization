/*
  ========================================
  Section: List
  ========================================
*/


  // Part: Type
    /* NOTE: Those units are immune to some status, e.g. brine corrosion. */
    const li_nonRobots = new Seq([
      "renale",
      "latum",
    ]);
    exports.nonRobots = li_nonRobots;


    /* NOTE: Sets stat for faction. */
    const li_unitFaction = new Seq([
      "reind-unit-core-expedition-i", "outpost-military",
      "reind-unit-core-expedition-ii", "outpost-military",
      "reind-unit-inf-tsen", "outpost-military",
      "reind-unit-inf-74ka", "outpost-military",
      "reind-unit-inf-paw", "outpost-military",
      "reind-unit-inf-psas", "outpost-military",
    ]);
    exports.unitFaction = li_unitFaction;
  // End


  // Part: Param
    /* NOTE: For some abilities. */
    const li_energizer = new Seq([
      "reind-unit-core-expedition-i", 3.5,
      "reind-unit-core-expedition-ii", 2.0,
      "reind-unit-inf-tsen", 1.0,
    ]);
    exports.energizer = li_energizer;


    const li_epRange = new Seq([
      "reind-unit-inf-74ka", 7,
    ]);
    exports.epRange = li_epRange;


    const li_epRequirement = new Seq([
      "reind-unit-inf-74ka", 2.0,
    ]);
    exports.epRequirement = li_epRequirement;


    /* NOTE: At which point the unit gains pollution penalty. */
    const li_pollutionTolerance = new Seq([
      "reind-unit-core-expedition-i", 900.0,
      "reind-unit-core-expedition-ii", 600.0,

      "reind-unit-inf-tsen", 600.0,
      "reind-unit-inf-74ka", 1200.0,
      "reind-unit-inf-paw", 600.0,
      "reind-unit-inf-psas", 900.0,
    ]);
    exports.pollutionTolerance = li_pollutionTolerance;
  // End


  // Part: Status
    /* NOTE: Non-robot units like renale are immune to these. */
    const li_robotOnlyStatus = new Seq([
      "reind-sta-spec-core-overdrive",
      "reind-sta-spec-explosion-countdown",
      "reind-sta-spec-terrorized",
      "reind-sta-liq-brine-corrosion",
      "reind-sta-liq-sea-water-corrosion",
    ]);
    exports.robotOnlyStatus = li_robotOnlyStatus;


    /* NOTE: Naval units are immune to these. */
    const li_oceanicStatus = new Seq([
      "reind-sta-liq-sea-water-corrosion",
    ]);
    exports.oceanicStatus = li_oceanicStatus;
  // End
