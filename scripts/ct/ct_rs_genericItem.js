/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_genericItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-bio[wood]
    const itemBio_charcoal = extend(Item, "item-bio-charcoal", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_charcoal = itemBio_charcoal;


    const itemBio_log = extend(Item, "item-bio-log", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_log = itemBio_log;


    const itemBio_sawdust = extend(Item, "item-bio-sawdust", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_sawdust = itemBio_sawdust;


    const itemBio_timber = extend(Item, "item-bio-timber", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_timber = itemBio_timber;


    const itemBio_woodAsh = extend(Item, "item-bio-wood-ash", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_woodAsh = itemBio_woodAsh;
  // End


  // Part: item-bio[crop]
    const itemBio_hyphaRod = extend(Item, "item-bio-hypha-rod", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_hyphaRod = itemBio_hyphaRod;


    const itemBio_inkCorn = extend(Item, "item-bio-ink-corn", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBio_inkCorn = itemBio_inkCorn;
  // End


  // Part: item-buil
    const itemBuil_coarseAggregate = extend(Item, "item-buil-coarse-aggregate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_coarseAggregate = itemBuil_coarseAggregate;


    const itemBuil_fineAggregate = extend(Item, "item-buil-fine-aggregate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_fineAggregate = itemBuil_fineAggregate;


    const itemBuil_asbestosWool = extend(Item, "item-buil-asbestos-wool", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_asbestosWool = itemBuil_asbestosWool;


    const itemBuil_cement = extend(Item, "item-buil-cement", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_cement = itemBuil_cement;


    const itemBuil_temperedGlass = extend(Item, "item-buil-tempered-glass", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_temperedGlass = itemBuil_temperedGlass;
  // End


  // Part: item-buil[brick]
    const itemBuil_brickCarbon = extend(Item, "item-buil-brick-carbon", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickCarbon = itemBuil_brickCarbon;


    const itemBuil_brickClay = extend(Item, "item-buil-brick-clay", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickClay = itemBuil_brickClay;


    const itemBuil_brickHighAlumina = extend(Item, "item-buil-brick-high-alumina", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickHighAlumina = itemBuil_brickHighAlumina;


    const itemBuil_brickMagnesia = extend(Item, "item-buil-brick-magnesia", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickMagnesia = itemBuil_brickMagnesia;


    const itemBuil_brickMullite = extend(Item, "item-buil-brick-mullite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickMullite = itemBuil_brickMullite;


    const itemBuil_brickSilica = extend(Item, "item-buil-brick-silica", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickSilica = itemBuil_brickSilica;


    const itemBuil_brickZirconiaMullite = extend(Item, "item-buil-brick-zirconia-mullite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemBuil_brickZirconiaMullite = itemBuil_brickZirconiaMullite;
  // End


  // Part: item-chem[elementary]
    const itemChem_activeCarbon = extend(Item, "item-chem-active-carbon", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_activeCarbon = itemChem_activeCarbon;


    const itemChem_coal = extend(Item, "item-chem-coal", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_coal = itemChem_coal;


    const itemChem_coke = extend(Item, "item-chem-coke", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_coke = itemChem_coke;


    const itemChem_copper = extend(Item, "item-chem-copper", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_copper = itemChem_copper;


    const itemChem_graphite = extend(Item, "item-chem-graphite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_graphite = itemChem_graphite;


    const itemChem_lead = extend(Item, "item-chem-lead", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_lead = itemChem_lead;


    const itemChem_semicoke = extend(Item, "item-chem-semicoke", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_semicoke = itemChem_semicoke;


    const itemChem_sodium = extend(Item, "item-chem-sodium", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sodium = itemChem_sodium;


    const itemChem_sulfur = extend(Item, "item-chem-sulfur", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sulfur = itemChem_sulfur;


    const itemChem_tin = extend(Item, "item-chem-tin", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_tin = itemChem_tin;


    const itemChem_zinc = extend(Item, "item-chem-zinc", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_zinc = itemChem_zinc;
  // End


  // Part: item-chem[alloy]
    const itemChem_brass = extend(Item, "item-chem-brass", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_brass = itemChem_brass;


    const itemChem_galvanizedSteel = extend(Item, "item-chem-galvanized-steel", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_galvanizedSteel = itemChem_galvanizedSteel;


    const itemChem_mangalloy = extend(Item, "item-chem-mangalloy", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_mangalloy = itemChem_mangalloy;


    const itemChem_pigIron = extend(Item, "item-chem-pig-iron", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_pigIron = itemChem_pigIron;


    const itemChem_solder = extend(Item, "item-chem-solder", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_solder = itemChem_solder;


    const itemChem_stainlessSteel = extend(Item, "item-chem-stainless-steel", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_stainlessSteel = itemChem_stainlessSteel;


    const itemChem_steel = extend(Item, "item-chem-steel", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_steel = itemChem_steel;


    const itemChem_tinBronze = extend(Item, "item-chem-tin-bronze", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_tinBronze = itemChem_tinBronze;


    const itemChem_wroughtIron = extend(Item, "item-chem-wrought-iron", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_wroughtIron = itemChem_wroughtIron;
  // End


  // Part: item-chem[inorganic]
    /* boron */


    const itemChem_borax = extend(Item, "item-chem-borax", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_borax = itemChem_borax;


    /* calcium */


    const itemChem_lime = extend(Item, "item-chem-lime", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_lime = itemChem_lime;


    /* magnesia */


    const itemChem_magnesiaSand = extend(Item, "item-chem-magnesia-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_magnesiaSand = itemChem_magnesiaSand;


    /* potassium */


    const itemChem_potassiumCarbonate = extend(Item, "item-chem-potassium-carbonate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_potassiumCarbonate = itemChem_potassiumCarbonate;


    const itemChem_potassiumChloride = extend(Item, "item-chem-potassium-chloride", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_potassiumChloride = itemChem_potassiumChloride;


    const itemChem_potassiumHydroxide = extend(Item, "item-chem-potassium-hydroxide", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_potassiumHydroxide = itemChem_potassiumHydroxide;


    /* silicon */


    const itemChem_silicaSand = extend(Item, "item-chem-silica-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_silicaSand = itemChem_silicaSand;


    const itemChem_quartzSand = extend(Item, "item-chem-quartz-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_quartzSand = itemChem_quartzSand;


    const itemChem_silicaGel = extend(Item, "item-chem-silica-gel", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_silicaGel = itemChem_silicaGel;


    const itemChem_sodiumSilicate = extend(Item, "item-chem-sodium-silicate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sodiumSilicate = itemChem_sodiumSilicate;


    /* sodium */


    const itemChem_sodiumBicarbonate = extend(Item, "item-chem-sodium-bicarbonate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sodiumBicarbonate = itemChem_sodiumBicarbonate;


    const itemChem_sodiumCarbonate = extend(Item, "item-chem-sodium-carbonate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sodiumCarbonate = itemChem_sodiumCarbonate;


    const itemChem_sodiumChloride = extend(Item, "item-chem-sodium-chloride", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sodiumChloride = itemChem_sodiumChloride;


    const itemChem_sodiumHydroxide = extend(Item, "item-chem-sodium-hydroxide", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_sodiumHydroxide = itemChem_sodiumHydroxide;


    /* zircon */


    const itemChem_zirconSand = extend(Item, "item-chem-zircon-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemChem_zirconSand = itemChem_zirconSand;
  // End


  // Part: item-chem[organic]
  // End


  // Part: item-misc
    const itemMisc_routerEssence = extend(Item, "item-misc-router-essence", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.itemMisc_routerEssence = itemMisc_routerEssence;
  // End


  // Part: ilitem-misc
    const ilitemMisc_idsExciterRod = extend(Item, "ilitem-misc-ids-exciter-rod", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.ilitemMisc_idsExciterRod = ilitemMisc_idsExciterRod;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_genericItem.js loaded.");
});
