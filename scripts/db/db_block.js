// Checked on 11-2-2024


/*
    ==================================================
    Part: List
    ==================================================
*/


  // Start: Facilities
    const list_boiler = new Seq([
      // name, crucial input, crucial output, critical health
      "reind-pow-stm-steam-boiler", "reind-liq-ore-water", "reind-gas-misc-steam", 0.35,
    ]);
    exports.boiler = list_boiler;


    const list_fieldCrafter = new Seq([
      // name, range
      "reind-min-attr-placer-miner", 4,
      "reind-pow-gen-tidal-generator", 8,
    ]);
    exports.fieldCrafter = list_fieldCrafter;


    const list_manualGenerator = new Seq([
      // name, radius
      "reind-pow-gen-manual-generator", 8.0,
    ]);
    exports.manualGenerator = list_manualGenerator;


    const list_pollutionCrafter = new Seq([
      // name, tolerance
      "reind-min-tree-latex-tapper", 600.0,
    ]);
    exports.pollutionCrafter = list_pollutionCrafter;


    const list_rangeAttrCrafter = new Seq([
      // name, range, waveColor
      "reind-min-attr-mycelial-harvester", 7, "b3cfaa20",
      "reind-min-attr-scrap-collector", 5, "d3d9de20",
    ]);
    exports.rangeAttrCrafter = list_rangeAttrCrafter;
  // End
