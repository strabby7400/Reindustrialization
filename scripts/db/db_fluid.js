/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_data = require("reind/mdl/mdl_data");
  // End


  // Part: Group
    /* Primary */
    const grp_brine = new Seq([
      "reind-liq-ore-brine",
      "reind-liq-ore-sea-water",

      "reind-liq-int-brine-purified",
    ]);
    exports.grp_brine = grp_brine;


    /* Primary */
    const grp_basicAq = new Seq([
      "reind-liq-was-waste-water-basic",
    ]);
    exports.grp_basicAq = grp_basicAq;


    /* Primary */
    const grp_acidicAq = new Seq([
      "reind-liq-chem-hydrochloric-acid",
      "reind-liq-chem-sulfuric-acid",
      "reind-liq-chem-sulfurous-acid",

      "reind-liq-was-waste-water-acidic",
    ]);
    exports.grp_acidicAq = grp_acidicAq;


    /* Primary */
    const grp_basicOil = new Seq([

    ]);
    exports.grp_basicOil = grp_basicOil;


    /* Primary */
    const grp_acidicOil = new Seq([

    ]);
    exports.grp_acidicOil = grp_acidicOil;


    /* Primary */
    const grp_basicSub = new Seq([

    ]);
    exports.grp_basicSub = grp_basicSub;


    /* Primary */
    const grp_acidicSub = new Seq([
      "reind-liq-chem-sulfuric-acid-conc",
      "reind-liq-chem-sulfuric-acid-fuming",
    ]);
    exports.grp_acidicSub = grp_acidicSub;


    /* Primary */
    const grp_basicGas = new Seq([
      "reind-gas-chem-ammonia",
    ]);
    exports.grp_basicGas = grp_basicGas;


    /* Primary */
    const grp_acidicGas = new Seq([
      "reind-gas-chem-chlorine",

      "reind-gas-chem-hydrogen-sulfide",
      "reind-gas-chem-sulfur-dioxide",
      "reind-gas-chem-sulfur-trioxide",
    ]);
    exports.grp_acidicGas = grp_acidicGas;


    /* Primary */
    const grp_slurry = new Seq([
      "reind-liq-was-waste-slurry",
    ]);
    exports.grp_slurry = grp_slurry;


    /* Functional */
    const grp_aqueous = new Seq([
      "reind-liq-ore-water",

      "reind-liq-was-waste-water",

      "reind-gas-misc-steam",
    ]);
    grp_aqueous.addAll(grp_brine);
    grp_aqueous.addAll(grp_basicAq);
    grp_aqueous.addAll(grp_acidicAq);
    grp_aqueous.addAll(grp_slurry);
    exports.grp_aqueous = grp_aqueous;


    /* Primary */
    const grp_melt = new Seq([

    ]);
    exports.grp_melt = grp_melt;


    /* Primary */
    const grp_stickyMelt = new Seq([
      "reind-liq-int-melt-glass",
    ]);
    exports.grp_stickyMelt = grp_stickyMelt;


    /* Functional */
    const grp_conductive = new Seq([

    ]);
    grp_conductive.addAll(grp_aqueous);
    grp_conductive.addAll(grp_melt);
    grp_conductive.addAll(grp_stickyMelt);
    exports.grp_conductive = grp_conductive;
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
    const li_baseCorrosion = new Seq([
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
    exports.baseCorrosion = li_baseCorrosion;


    const li_specificCorrosion = new Seq([
      "reind-liq-ore-sea-water", 0.7,

      "reind-liq-chem-hydrochloric-acid", 1.7,

      "reind-liq-chem-sulfuric-acid", 1.7,
      "reind-liq-chem-sulfuric-acid-conc", 1.35,
      "reind-liq-chem-sulfuric-acid-fuming", 2.1,
      "reind-liq-chem-sulfurous-acid", 1.5,

      "reind-gas-chem-ammonia", 0.3,

      "reind-gas-chem-sulfur-trioxide", 2.0,
    ]);
    exports.specificCorrosion = li_specificCorrosion;


    const li_corrosionScale = new Seq([
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
    exports.corrosionScale = li_corrosionScale;


    const li_specificCorrosionScale = new Seq([
      "wood", "oxidative", 12.0,

      "copper", "ammoniacal", 4.0,
      "copper", "chloric", 4.0,

      "glass", "fluoric", 9.0,
    ]);
    exports.specificCorrosionScale = li_specificCorrosionScale;
  // End


  // Part: Heat
    const li_fluidHeat = new Seq([
      "reind-liq-int-melt-glass", 1250.0,

      "reind-liq-chem-sulfuric-acid-fuming", 350.0,

      "reind-gas-misc-steam", 100.0,

      "reind-gas-chem-sulfur-trioxide", 350.0,
    ]);
    exports.fluidHeat = li_fluidHeat;
  // End


  // Part: Flow
    const li_density = new Seq([

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
    exports.density = li_density;


    const li_viscosity = new Seq([

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
    exports.viscosity = li_viscosity;
  // End


  // Part: Efficiency
    const li_effcWhitelist = new Seq([
      "reind-pow-econd-transmission-box",
    ]);
    exports.effcWhitelist = li_effcWhitelist;
  // End


  // Part: Attribute
    const li_ventMap = new Seq([
      "reind-attr-vent-ammonia", "reind-gas-chem-ammonia",
      "reind-attr-vent-sour-gas", "reind-gas-ore-sour-gas",
      "reind-attr-vent-steam", "reind-gas-misc-steam",
      "reind-attr-vent-sulfur-dioxide", "reind-gas-chem-sulfur-dioxide",
      "reind-attr-underwater-vent-hydrogen-sulfide", "reind-gas-chem-hydrogen-sulfide",
    ]);
    exports.ventMap = li_ventMap;
  // End


  // Part: Reaction
    const li_fluidReaction = new Seq([
      "reind-liq-chem-sulfuric-acid-conc", "reind-liq-ore-water", "evaporation",
      "reind-liq-chem-sulfuric-acid-fuming", "reind-liq-ore-water", "evaporation",
    ]);
    exports.fluidReaction = li_fluidReaction;
  // End
