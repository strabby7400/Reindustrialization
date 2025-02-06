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
      "reind-unit-core-expedition-i", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-unit-inf-tsen", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-unit-inf-74ka", Core.bundle.get("term.reind-term-outpost-military.name"),
      "reind-unit-inf-paw", Core.bundle.get("term.reind-term-outpost-military.name"),
    ]);
    exports.unitFaction = li_unitFaction;
  // End


  // Part: Param
    /* NOTE: For some abilities. */
    const li_energizer = new Seq([
      "reind-unit-core-expedition-i", 3.5,
      "reind-unit-inf-tsen", 1.0,
    ]);
    exports.energizer = li_energizer;


    const li_epRange = new Seq([

    ]);
    exports.epRange = li_epRange;


    const li_epRequirement = new Seq([

    ]);
    exports.epRequirement = li_epRequirement;


    /* NOTE: At which point the unit gains pollution penalty. */
    const li_pollutionTolerance = new Seq([
      "reind-unit-core-expedition-i", 900.0,

      "reind-unit-inf-tsen", 600.0,
      "reind-unit-inf-74ka", 1200.0,
      "reind-unit-inf-paw", 600.0,
    ]);
    exports.pollutionTolerance = li_pollutionTolerance;
  // End


  // Part: Status
    /* NOTE: Non-robot units like renale are immune to these. */
    const li_robotOnlyStatus = new Seq([
      "reind-sta-spec-core-overdrive",
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
