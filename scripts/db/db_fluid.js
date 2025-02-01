/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
  // End


  // Part: Group
    /* Primary */
    const group_brine = new Seq([
      "reind-liq-ore-brine",
      "reind-liq-ore-sea-water",

      "reind-liq-int-brine-purified",
    ]);
    exports.group_brine = group_brine;


    /* Primary */
    const group_basicAq = new Seq([
      "reind-liq-was-waste-water-basic",
    ]);
    exports.group_basicAq = group_basicAq;


    /* Primary */
    const group_acidicAq = new Seq([
      "reind-liq-chem-hydrochloric-acid",
      "reind-liq-chem-sulfuric-acid",
      "reind-liq-chem-sulfurous-acid",

      "reind-liq-was-waste-water-acidic",
    ]);
    exports.group_acidicAq = group_acidicAq;


    /* Primary */
    const group_basicOil = new Seq([

    ]);
    exports.group_basicOil = group_basicOil;


    /* Primary */
    const group_acidicOil = new Seq([

    ]);
    exports.group_acidicOil = group_acidicOil;


    /* Primary */
    const group_basicSub = new Seq([

    ]);
    exports.group_basicSub = group_basicSub;


    /* Primary */
    const group_acidicSub = new Seq([
      "reind-liq-chem-sulfuric-acid-conc",
      "reind-liq-chem-sulfuric-acid-fuming",
    ]);
    exports.group_acidicSub = group_acidicSub;


    /* Primary */
    const group_basicGas = new Seq([
      "reind-gas-chem-ammonia",
    ]);
    exports.group_basicGas = group_basicGas;


    /* Primary */
    const group_acidicGas = new Seq([
      "reind-gas-chem-chlorine",

      "reind-gas-chem-hydrogen-sulfide",
      "reind-gas-chem-sulfur-dioxide",
      "reind-gas-chem-sulfur-trioxide",
    ]);
    exports.group_acidicGas = group_acidicGas;


    /* Primary */
    const group_slurry = new Seq([
      "reind-liq-was-waste-slurry",
    ]);
    exports.group_slurry = group_slurry;


    /* Functional */
    const group_aqueous = new Seq([
      "reind-liq-ore-water",

      "reind-liq-was-waste-water",

      "reind-gas-misc-steam",
    ]);
    group_aqueous.addAll(group_brine);
    group_aqueous.addAll(group_basicAq);
    group_aqueous.addAll(group_acidicAq);
    group_aqueous.addAll(group_slurry);
    exports.group_aqueous = group_aqueous;


    /* Primary */
    const group_melt = new Seq([

    ]);
    exports.group_melt = group_melt;


    /* Primary */
    const group_stickyMelt = new Seq([
      "reind-liq-int-melt-glass",
    ]);
    exports.group_stickyMelt = group_stickyMelt;


    /* Functional */
    const group_conductive = new Seq([

    ]);
    group_conductive.addAll(group_aqueous);
    group_conductive.addAll(group_melt);
    group_conductive.addAll(group_stickyMelt);
    exports.group_conductive = group_conductive;
  // End


  // Part: Tag
    const tag_ammoniacal = new Seq([
      "reind-gas-chem-ammonia",
    ]);
    exports.tag_ammoniacal = tag_ammoniacal;


    const tag_chloric = new Seq([
      "reind-gas-chem-chlorine",
    ]);
    exports.tag_chloric = tag_chloric;


    const tag_fluoric = new Seq([

    ]);
    exports.tag_fluoric = tag_fluoric;


    const tag_oil = new Seq([

    ]);
    exports.tag_oil = tag_oil;


    const tag_oxidative = new Seq([
      "reind-liq-chem-sulfuric-acid-conc",
      "reind-liq-chem-sulfuric-acid-fuming",

      "reind-gas-chem-ozone",
      "reind-gas-chem-sulfur-trioxide",
    ]);
    exports.tag_oxidative = tag_oxidative;
  // End


/*
  ========================================
  Section: List
  ========================================
*/


  // Part: Corrosion
    const list_baseCorrosion = new Seq([
      "brine", 1.0,
      "basicAq", 1.35,
      "acidicAq", 1.35,
      "basicOil", 1.2,
      "acidicOil", 1.2,
      "basicSub", 1.25,
      "acidicSub", 1.25,
      "basicGas", 1.7,
      "acidicGas", 1.7,
    ]);
    exports.baseCorrosion = list_baseCorrosion;


    const list_specificCorrosion = new Seq([
      "reind-liq-ore-sea-water", 0.7,

      "reind-liq-chem-hydrochloric-acid", 1.7,

      "reind-liq-chem-sulfuric-acid", 1.7,
      "reind-liq-chem-sulfuric-acid-conc", 1.35,
      "reind-liq-chem-sulfuric-acid-fuming", 2.1,
      "reind-liq-chem-sulfurous-acid", 1.5,

      "reind-gas-chem-ammonia", 0.3,

      "reind-gas-chem-sulfur-trioxide", 2.0,
    ]);
    exports.specificCorrosion = list_specificCorrosion;


    const list_corrosionScale = new Seq([
      "wood", "basicAq", 5.0,
      "wood", "acidicAq", 5.0,
      "wood", "basicOil", 7.0,
      "wood", "acidicOil", 7.0,
      "wood", "aicidicSub", 5.0,
      "wood", "basicSub", 5.0,
      "wood", "basicGas", 5.0,
      "wood", "acidicGas", 5.0,

      "steel", "brine", 4.0,
      "steel", "acidicAq", 1.5,
      "steel", "acidicOil", 1.5,
      "steel", "acidicSub", 1.5,
      "steel", "acidicGas", 2.0,

      "stainlessSteel", "brine", 4.0,
    ]);
    exports.corrosionScale = list_corrosionScale;


    const list_specificCorrosionScale = new Seq([
      "wood", "oxidative", 12.0,

      "copper", "ammoniacal", 4.0,
      "copper", "chloric", 4.0,

      "glass", "fluoric", 9.0,
    ]);
    exports.specificCorrosionScale = list_specificCorrosionScale;
  // End


  // Part: Heat
    const list_fluidHeat = new Seq([
      "reind-liq-int-melt-glass", 1250.0,

      "reind-liq-chem-sulfuric-acid-fuming", 350.0,

      "reind-gas-misc-steam", 100.0,

      "reind-gas-chem-sulfur-trioxide", 350.0,
    ]);
    exports.fluidHeat = list_fluidHeat;
  // End


  // Part: Flow
    const list_density = new Seq([

      /* ========================================
        Section: liq-ore
      ======================================== */

      "reind-liq-ore-brine", 1.05,
      "reind-liq-ore-sea-water", 1.02,

      /* ========================================
        Section: liq-chem[elementary]
      ======================================== */


      /* ========================================
        Section: liq-chem[inorganic]
      ======================================== */

      /* chlorine */
      "reind-liq-chem-hydrochloric-acid", 1.0,

      /* sulfur */
      "reind-liq-chem-sulfuric-acid", 1.0,
      "reind-liq-chem-sulfuric-acid-conc", 1.83,
      "reind-liq-chem-sulfuric-acid-fuming", 1.83,
      "reind-liq-chem-sulfurous-acid", 1.03,

      /* ========================================
        Section: liq-int
      ======================================== */

      /* melt */
      "reind-liq-int-melt-glass", 2.25,

      /* ========================================
        Section: gas-misc
      ======================================== */

      "reind-gas-misc-steam", 0.0006,

      /* ========================================
        Section: gas-chem[elementary]
      ======================================== */

      "reind-gas-chem-chlorine", 0.00321,
      "reind-gas-chem-hydrogen", 0.000089,
      "reind-gas-chem-nitrogen", 0.00125,
      "reind-gas-chem-oxygen", 0.001429,
      "reind-gas-chem-ozone", 0.00146,

      /* ========================================
        Section: gas-chem[inorganic]
      ======================================== */

      /* carbon */
      "reind-gas-chem-carbon-dioxide", 0.001976,

      /* nitrogen */
      "reind-gas-chem-ammonia", 0.000771,

      /* sulfur */
      "reind-gas-chem-hydrogen-sulfide", 0.00154,
      "reind-gas-chem-sulfur-dioxide", 0.0029275,
      "reind-gas-chem-sulfur-trioxide", 0.00197,

    ]);
    exports.density = list_density;


    const list_viscosity = new Seq([

      /* ========================================
        Section: liq-ore
      ======================================== */

      "reind-liq-ore-water", 0.98,

      /* ========================================
        Section: liq-waste
      ======================================== */

      "reind-liq-was-pitch", 2800.0,
      "reind-liq-was-waste-slurry", 100.0,

      /* ========================================
        Section: liq-chem[elementary]
      ======================================== */


      /* ========================================
        Section: liq-chem[inorganic]
      ======================================== */

      /* chlorine */
      "reind-liq-chem-hydrochloric-acid", 1.9,

      /* sulfur */
      "reind-liq-chem-sulfuric-acid-conc", 21.0,
      "reind-liq-chem-sulfuric-acid-fuming", 21.0,

      /* ========================================
        Section: gas-chem[elementary]
      ======================================== */


      /* ========================================
        Section: gas-chem[inorganic]
      ======================================== */

    ]);
    exports.viscosity = list_viscosity;
  // End


  // Part: Efficiency
    const list_effcWhitelist = new Seq([

    ]);
    exports.effcWhitelist = list_effcWhitelist;
  // End


  // Part: Attribute
    const list_ventMap = new Seq([
      "reind-attr-vent-ammonia", "reind-gas-chem-ammonia",
      "reind-attr-vent-sour-gas", "reind-gas-ore-sour-gas",
      "reind-attr-vent-steam", "reind-gas-misc-steam",
      "reind-attr-vent-sulfur-dioxide", "reind-gas-chem-sulfur-dioxide",
      "reind-attr-underwater-vent-hydrogen-sulfide", "reind-gas-chem-hydrogen-sulfide",
    ]);
    exports.ventMap = list_ventMap;
  // End


  // Part: Intermediate
    /* NOTE: Sets stat for target products. */
    const list_intermediateMap = new Seq([

      /* ========================================
        Section: Melt
      ======================================== */

      "reind-liq-int-melt-glass", "reind-item-buil-tempered-glass",

      /* ========================================
        Section: Misc
      ======================================== */

      "reind-liq-int-brine-purified", "reind-item-chem-sodium-hydroxide",
      "reind-liq-int-brine-purified", "reind-item-chem-sodium-bicarbonate",

    ]);
    exports.intermediateMap = list_intermediateMap;
  // End
