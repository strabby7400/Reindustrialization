// Checked on 10-31-2024


/*
    ==================================================
    Part: List
    ==================================================
*/


  // Start: Synonyms
    /* Just for convenience, had enough from setting up those intermediates */
    const synonym_brine = new Seq([
      "reind-liq-int-brine-purified",

      "reind-liq-int-solution-hot-sodium-chloride",

      "reind-liq-int-solution-suspension-sodium-chloride",
      "reind-liq-int-solution-suspension-crude-sodium-chloride",
    ]);
    exports.synonym_brine = synonym_brine;


    const synonym_lye = new Seq([
      "reind-liq-int-solution-sodium-hydroxide",

      "reind-liq-int-solution-suspension-lime-sodium-hydroxide",
    ]);
    exports.synonym_lye = synonym_lye;


    const synonym_acidic = new Seq([

    ]);
    exports.synonym_acidic = synonym_acidic;


    const synonym_slurry = new Seq([
      "reind-liq-int-slurry-deironized-sand",
      "reind-liq-int-slurry-silica-sand",

      "reind-liq-int-slurry-thickened-silica-sand",
    ]);
    exports.synonym_slurry = synonym_slurry;


    const synonym_molten = new Seq([
      "reind-liq-int-glass-melt",
    ]);
    exports.synonym_molten = synonym_molten;


    const synonym_aqueous = new Seq([

    ]);
    synonym_aqueous.addAll(synonym_brine);
    synonym_aqueous.addAll(synonym_lye);
    synonym_aqueous.addAll(synonym_acidic);
    synonym_aqueous.addAll(synonym_slurry);
    exports.synonym_aqueous = synonym_aqueous;


    const synonym_sticky = new Seq([

    ]);
    synonym_sticky.addAll(synonym_slurry);
    synonym_sticky.addAll(synonym_molten);
    exports.synonym_sticky = synonym_sticky;


    function synonymWrite(target, list) {
      for(let i = 0; i < list.size; i++) {
        target.add(list.get(i));
      };
    };


    function synonymWrite2(target, list, param) {
      for(let i = 0; i < list.size; i++) {
        target.add(new Seq([
          list.get(i),
          param,
        ]));
      };
    };


    function synonymWrite3(target, list, param, name) {
      for(let i = 0; i < list.size; i++) {
        target.add(new Seq([
          name,
          list.get(i),
          param,
        ]));
      };
    };
  // End


  // Start: Aqueous Liquid
    /* Carnage can spread to these */
    const list_liquidAqueous = new Seq([
      "reind-liq-ore-brine",
      "reind-liq-ore-water",
      "reind-liq-ore-water-sea",

      "reind-liq-chem-hydrochloric-acid",
      "reind-liq-chem-sulfuric-acid",
      "reind-liq-chem-sulfurous-acid",

      "reind-liq-was-waste-water",
      "reind-liq-was-waste-slurry",
    ]);
    synonymWrite(list_liquidAqueous, synonym_aqueous);
    exports.liquidAqueous = list_liquidAqueous;
  // End


  // Start: Conductive Liquid
    const list_liquidConductive = new Seq([
      "reind-liq-misc-carnage-plasma",
    ]);
    list_liquidConductive.addAll(list_liquidAqueous);
    synonymWrite(list_liquidConductive, synonym_molten);
    exports.liquidConductive = list_liquidConductive;
  // End


  // Start: Sticky Liquid
    const list_liquidSticky = new Seq([
      "reind-liq-bio-latex",

      "reind-liq-misc-carnage-plasma",

      "reind-liq-was-waste-slurry",
    ]);
    synonymWrite(list_liquidSticky, synonym_sticky);
    exports.liquidSticky = list_liquidSticky;


    const list_stickySensitive = new Seq([
      "reind-bliq-cond-tempered-glass-fluid-pipe",
      "reind-bliq-cond-wooden-fluid-pipe",
    ]);
    exports.stickySensitive = list_stickySensitive;
  // End


  // Start: Corrosion
    const list_corrosionPower = new Seq([
      // name, power
      "reind-gas-chem-ammonia", 0.002,
      "reind-gas-chem-chlorine", 0.03,
      "reind-gas-chem-sulfur-dioxide", 0.06,
      "reind-gas-chem-sulfur-trioxide", 0.08,

      "reind-liq-ore-brine", 0.004,
      "reind-liq-ore-water-sea", 0.002,

      "reind-liq-chem-hydrochloric-acid", 0.08,
      "reind-liq-chem-sulfuric-acid", 0.08,
      "reind-liq-chem-sulfuric-acid-conc", 0.16,
      "reind-liq-chem-sulfuric-acid-fuming", 0.24,
      "reind-liq-chem-sulfurous-acid", 0.06,

      "reind-liq-was-waste-water", 0.02,
    ]);
    synonymWrite2(list_corrosionPower, synonym_brine, 0.004);
    synonymWrite2(list_corrosionPower, synonym_lye, 0.02);
    synonymWrite2(list_corrosionPower, synonym_acidic, 0.06);
    exports.corrosionPower = list_corrosionPower;


    const list_corrosionResistence = new Seq([
      // name, resistence
      "reind-bliq-brd-fluid-pipe-bridge", 1.0,
      "reind-bliq-cond-bronze-fluid-pipe", 0.6,
      "reind-bliq-cond-steel-fluid-pipe", 1.0,
      "reind-bliq-cond-tempered-glass-fluid-pipe", 15.0,
      "reind-bliq-cond-wooden-fluid-pipe", 0.2,
      "reind-bliq-pump-piston-fluid-pump", 1.0,
      "reind-bliq-stor-fluid-cell", 1.0,
      "reind-bliq-stor-steel-fluid-cylinder", 1.0,
    ]);
    exports.corrosionResistence = list_corrosionResistence;


    const list_corrosionResistenceMultipliers = new Seq([
      // name, liq name, multiplier
      "reind-bliq-cond-bronze-fluid-pipe", "reind-gas-chem-ammonia", 0.01,
      "reind-bliq-cond-bronze-fluid-pipe", "reind-gas-chem-chlorine", 0.05,
      "reind-bliq-cond-bronze-fluid-pipe", "reind-liq-chem-hydrochloric-acid", 40.0,
      "reind-bliq-cond-bronze-fluid-pipe", "reind-liq-chem-sulfurous-acid", 30.0,
      "reind-bliq-cond-bronze-fluid-pipe", "reind-liq-chem-sulfuric-acid", 40.0,

      "reind-bliq-cond-steel-fluid-pipe", "reind-liq-ore-brine", 0.06,
      "reind-bliq-cond-steel-fluid-pipe", "reind-liq-ore-water-sea", 0.1,

      "reind-bliq-pump-piston-fluid-pump", "reind-liq-ore-brine", 0.06,
      "reind-bliq-pump-piston-fluid-pump", "reind-liq-ore-water-sea", 0.1,

      "reind-bliq-stor-steel-fluid-cylinder", "reind-liq-ore-brine", 0.06,
      "reind-bliq-stor-steel-fluid-cylinder", "reind-liq-ore-water-sea", 0.1,
    ]);
    synonymWrite3(list_corrosionResistenceMultipliers, synonym_acidic, 30.0, "reind-bliq-cond-bronze-fluid-pipe");
    synonymWrite3(list_corrosionResistenceMultipliers, synonym_brine, 0.06, "reind-bliq-cond-steel-fluid-pipe");
    synonymWrite3(list_corrosionResistenceMultipliers, synonym_brine, 0.06, "reind-bliq-pump-piston-fluid-pump");
    synonymWrite3(list_corrosionResistenceMultipliers, synonym_brine, 0.06, "reind-bliq-stor-steel-fluid-cylinder");
    exports.corrosionResistenceMultipliers = list_corrosionResistenceMultipliers;
  // End


  // Start: Efficiency
    const list_effc = new Seq([
      "reind-effc-cond-pressure",
      "reind-effc-cond-pressure-ii",
      "reind-effc-cond-pressure-iii",

      "reind-effc-effc-ball-impact-i",
      "reind-effc-effc-ball-impact-ii",
      "reind-effc-effc-calculation",
      "reind-effc-effc-core",
      "reind-effc-effc-dust-removal",
      "reind-effc-effc-electrode",
      "reind-effc-effc-gas-filtering",
      "reind-effc-effc-lifting",
      "reind-effc-effc-pump",
      "reind-effc-effc-smoke-exhaust",
      "reind-effc-effc-steam",

      "reind-effc-spec-electrical-roasting-furnace",
      "reind-effc-spec-industrial-blast-furnace",

      "reind-effc-spec-structure-link-filter-press",

      "reind-ileffc-effc-ids",
    ]);
    exports.effc = list_effc;
  // End
