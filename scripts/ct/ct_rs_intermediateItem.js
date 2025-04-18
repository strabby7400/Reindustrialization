/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/rs/rs_intermediateItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/



  // Part: item-int[blend]
    const itemInt_blend_cement = extend(Item, "item-int-blend-cement", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blend_cement = itemInt_blend_cement;


    const itemInt_blend_roastedCement = extend(Item, "item-int-blend-roasted-cement", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blend_roastedCement = itemInt_blend_roastedCement;


    /* brick */


    const itemInt_blend_brickHighAlumina = extend(Item, "item-int-blend-brick-high-alumina", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blend_brickHighAlumina = itemInt_blend_brickHighAlumina;


    const itemInt_blend_brickMagnesia = extend(Item, "item-int-blend-brick-magnesia", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blend_brickMagnesia = itemInt_blend_brickMagnesia;


    const itemInt_blend_brickMullite = extend(Item, "item-int-blend-brick-mullite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blend_brickMullite = itemInt_blend_brickMullite;


    const itemInt_blend_brickSilica = extend(Item, "item-int-blend-brick-silica", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blend_brickSilica = itemInt_blend_brickSilica;
  // End


  // Part: item-int[brick]
    // NOTE: Keep this on top!
    const itemInt_brickClay_unbaked = extend(Item, "item-int-brick-clay-unbaked", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_brickClay_unbaked = itemInt_brickClay_unbaked;


    const itemInt_brickHighAlumina_unbaked = extend(Item, "item-int-brick-high-alumina-unbaked", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_brickHighAlumina_unbaked = itemInt_brickHighAlumina_unbaked;


    const itemInt_brickMagnesia_unbaked = extend(Item, "item-int-brick-magnesia-unbaked", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_brickMagnesia_unbaked = itemInt_brickMagnesia_unbaked;


    const itemInt_brickMullite_unbaked = extend(Item, "item-int-brick-mullite-unbaked", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_brickMullite_unbaked = itemInt_brickMullite_unbaked;


    const itemInt_brickSilica_unbaked = extend(Item, "item-int-brick-silica-unbaked", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_brickSilica_unbaked = itemInt_brickSilica_unbaked;
  // End


  // Part: item-int[chunks]
    const itemInt_chunks_aggregate = extend(Item, "item-int-chunks-aggregate", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_aggregate = itemInt_chunks_aggregate;


    const itemInt_chunks_dolomite = extend(Item, "item-int-chunks-dolomite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_dolomite = itemInt_chunks_dolomite;


    const itemInt_chunks_gypsum = extend(Item, "item-int-chunks-gypsum", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_gypsum = itemInt_chunks_gypsum;


    const itemInt_chunks_limestone = extend(Item, "item-int-chunks-limestone", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_limestone = itemInt_chunks_limestone;


    /* barium */


    const itemInt_chunks_barite = extend(Item, "item-int-chunks-barite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_barite = itemInt_chunks_barite;


    const itemInt_chunks_p1Barite = extend(Item, "item-int-chunks-p1-barite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_p1Barite = itemInt_chunks_p1Barite;


    /* phosphorus */


    const itemInt_chunks_fluorapatite = extend(Item, "item-int-chunks-fluorapatite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_fluorapatite = itemInt_chunks_fluorapatite;


    /* silicon */


    const itemInt_chunks_silicaStone = extend(Item, "item-int-chunks-silica-stone", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_silicaStone = itemInt_chunks_silicaStone;


    /* sulfur */


    const itemInt_chunks_crudeSulfur = extend(Item, "item-int-chunks-crude-sulfur", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_crudeSulfur = itemInt_chunks_crudeSulfur;


    /* zirconium */


    const itemInt_chunks_zircon = extend(Item, "item-int-chunks-zircon", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_chunks_zircon = itemInt_chunks_zircon;
  // End


  // Part: item-int[concentrate]
    /* aluminum */


    const itemInt_concentrate_bauxite = extend(Item, "item-int-concentrate-bauxite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_bauxite = itemInt_concentrate_bauxite;


    /* copper */


    const itemInt_concentrate_chalcopyrite = extend(Item, "item-int-concentrate-chalcopyrite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_chalcopyrite = itemInt_concentrate_chalcopyrite;


    const itemInt_concentrate_malachite = extend(Item, "item-int-concentrate-malachite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_malachite = itemInt_concentrate_malachite;


    /* iron */


    const itemInt_concentrate_hematite = extend(Item, "item-int-concentrate-hematite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_hematite = itemInt_concentrate_hematite;


    const itemInt_concentrate_limonite = extend(Item, "item-int-concentrate-limonite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_limonite = itemInt_concentrate_limonite;


    const itemInt_concentrate_magnetite = extend(Item, "item-int-concentrate-magnetite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_magnetite = itemInt_concentrate_magnetite;


    const itemInt_concentrate_pyrite = extend(Item, "item-int-concentrate-pyrite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_pyrite = itemInt_concentrate_pyrite;


    /* lead */


    const itemInt_concentrate_galena = extend(Item, "item-int-concentrate-galena", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_galena = itemInt_concentrate_galena;


    /* manganese */


    const itemInt_concentrate_psilomelane = extend(Item, "item-int-concentrate-psilomelane", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_psilomelane = itemInt_concentrate_psilomelane;


    const itemInt_concentrate_pyrolusite = extend(Item, "item-int-concentrate-pyrolusite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_pyrolusite = itemInt_concentrate_pyrolusite;


    /* titanium */


    const itemInt_concentrate_ilmenite = extend(Item, "item-int-concentrate-ilmenite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_ilmenite = itemInt_concentrate_ilmenite;


    const itemInt_concentrate_rutile = extend(Item, "item-int-concentrate-rutile", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_rutile = itemInt_concentrate_rutile;


    /* zinc */


    const itemInt_concentrate_sphalerite = extend(Item, "item-int-concentrate-sphalerite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_concentrate_sphalerite = itemInt_concentrate_sphalerite;
  // End


  // Part: item-int[dried]
    const itemInt_powderedBiomass_dried = extend(Item, "item-int-powdered-biomass-dried", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_powderedBiomass_dried = itemInt_powderedBiomass_dried;


    const itemInt_sawdust_dried = extend(Item, "item-int-sawdust-dried", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_sawdust_dried = itemInt_sawdust_dried;
  // End


  // Part: item-int[dust]
    const itemInt_dust_asbestos = extend(Item, "item-int-dust-asbestos", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_asbestos = itemInt_dust_asbestos;


    const itemInt_dust_p1Asbestos = extend(Item, "item-int-dust-p1-asbestos", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Asbestos = itemInt_dust_p1Asbestos;


    const itemInt_dust_rawCoal = extend(Item, "item-int-dust-raw-coal", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rawCoal = itemInt_dust_rawCoal;


    const itemInt_dust_sand = extend(Item, "item-int-dust-sand", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_sand = itemInt_dust_sand;


    const itemInt_dust_p1Sand = extend(Item, "item-int-dust-p1-sand", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Sand = itemInt_dust_p1Sand;


    const itemInt_dust_zircon = extend(Item, "item-int-dust-zircon", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_zircon = itemInt_dust_zircon;


    /* aluminum */


    const itemInt_dust_bauxite = extend(Item, "item-int-dust-bauxite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_bauxite = itemInt_dust_bauxite;


    const itemInt_dust_p1Bauxite = extend(Item, "item-int-dust-p1-bauxite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Bauxite = itemInt_dust_p1Bauxite;


    /* chromium */


    const itemInt_dust_chromite = extend(Item, "item-int-dust-chromite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_chromite = itemInt_dust_chromite;


    /* cobalt */


    const itemInt_dust_linnaeite = extend(Item, "item-int-dust-linnaeite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_linnaeite = itemInt_dust_linnaeite;


    /* copper */


    const itemInt_dust_azurite = extend(Item, "item-int-dust-azurite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_azurite = itemInt_dust_azurite;


    const itemInt_dust_chalcopyrite = extend(Item, "item-int-dust-chalcopyrite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_chalcopyrite = itemInt_dust_chalcopyrite;


    const itemInt_dust_p1Chalcopyrite = extend(Item, "item-int-dust-p1-chalcopyrite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Chalcopyrite = itemInt_dust_p1Chalcopyrite;


    const itemInt_dust_cuprite = extend(Item, "item-int-dust-cuprite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_cuprite = itemInt_dust_cuprite;


    const itemInt_dust_malachite = extend(Item, "item-int-dust-malachite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_malachite = itemInt_dust_malachite;


    const itemInt_dust_p1Malachite = extend(Item, "item-int-dust-p1-malachite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Malachite = itemInt_dust_p1Malachite;


    const itemInt_dust_nativeCopper = extend(Item, "item-int-dust-native-copper", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_nativeCopper = itemInt_dust_nativeCopper;


    /* fluorine */


    const itemInt_dust_fluorite = extend(Item, "item-int-dust-fluorite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_fluorite = itemInt_dust_fluorite;


    /* iron */


    const itemInt_dust_hematite = extend(Item, "item-int-dust-hematite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_hematite = itemInt_dust_hematite;


    const itemInt_dust_p1Hematite = extend(Item, "item-int-dust-p1-hematite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Hematite = itemInt_dust_p1Hematite;


    const itemInt_dust_limonite = extend(Item, "item-int-dust-limonite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_limonite = itemInt_dust_limonite;


    const itemInt_dust_p1Limonite = extend(Item, "item-int-dust-p1-limonite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Limonite = itemInt_dust_p1Limonite;


    const itemInt_dust_magnetite = extend(Item, "item-int-dust-magnetite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_magnetite = itemInt_dust_magnetite;


    const itemInt_dust_p1Magnetite = extend(Item, "item-int-dust-p1-magnetite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Magnetite = itemInt_dust_p1Magnetite;


    const itemInt_dust_pyrite = extend(Item, "item-int-dust-pyrite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_pyrite = itemInt_dust_pyrite;


    const itemInt_dust_p1Pyrite = extend(Item, "item-int-dust-p1-pyrite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Pyrite = itemInt_dust_p1Pyrite;


    /* lead */


    const itemInt_dust_anglesite = extend(Item, "item-int-dust-anglesite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_anglesite = itemInt_dust_anglesite;


    const itemInt_dust_galena = extend(Item, "item-int-dust-galena", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_galena = itemInt_dust_galena;


    const itemInt_dust_p1Galena = extend(Item, "item-int-dust-p1-galena", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Galena = itemInt_dust_p1Galena;


    /* manganese */


    const itemInt_dust_psilomelane = extend(Item, "item-int-dust-psilomelane", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_psilomelane = itemInt_dust_psilomelane;


    const itemInt_dust_p1Psilomelane = extend(Item, "item-int-dust-p1-psilomelane", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Psilomelane = itemInt_dust_p1Psilomelane;


    const itemInt_dust_pyrolusite = extend(Item, "item-int-dust-pyrolusite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_pyrolusite = itemInt_dust_pyrolusite;


    const itemInt_dust_p1Pyrolusite = extend(Item, "item-int-dust-p1-pyrolusite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Pyrolusite = itemInt_dust_p1Pyrolusite;


    /* mercury */


    const itemInt_dust_cinnabar = extend(Item, "item-int-dust-cinnabar", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_cinnabar = itemInt_dust_cinnabar;


    /* tin */


    const itemInt_dust_cassiterite = extend(Item, "item-int-dust-cassiterite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_cassiterite = itemInt_dust_cassiterite;


    /* titanium */


    const itemInt_dust_ilmenite = extend(Item, "item-int-dust-ilmenite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_ilmenite = itemInt_dust_ilmenite;


    const itemInt_dust_p1Ilmenite = extend(Item, "item-int-dust-p1-ilmenite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Ilmenite = itemInt_dust_p1Ilmenite;


    const itemInt_dust_rutile = extend(Item, "item-int-dust-rutile", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rutile = itemInt_dust_rutile;


    const itemInt_dust_p1Rutile = extend(Item, "item-int-dust-p1-rutile", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Rutile = itemInt_dust_p1Rutile;


    /* zinc */


    const itemInt_dust_smithsonite = extend(Item, "item-int-dust-smithsonite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_smithsonite = itemInt_dust_smithsonite;


    const itemInt_dust_sphalerite = extend(Item, "item-int-dust-sphalerite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_sphalerite = itemInt_dust_sphalerite;


    const itemInt_dust_p1Sphalerite = extend(Item, "item-int-dust-p1-sphalerite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_p1Sphalerite = itemInt_dust_p1Sphalerite;


    /* rock */


    const itemInt_dust_rockClastic = extend(Item, "item-int-dust-rock-clastic", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockClastic = itemInt_dust_rockClastic;


    const itemInt_dust_rockEvaporite = extend(Item, "item-int-dust-rock-evaporite", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockEvaporite = itemInt_dust_rockEvaporite;


    const itemInt_dust_rockHypabyssal = extend(Item, "item-int-dust-rock-hypabyssal", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockHypabyssal = itemInt_dust_rockHypabyssal;


    const itemInt_dust_rockLava = extend(Item, "item-int-dust-rock-lava", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockLava = itemInt_dust_rockLava;


    const itemInt_dust_rockMetamorphic = extend(Item, "item-int-dust-rock-metamorphic", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockMetamorphic = itemInt_dust_rockMetamorphic;


    const itemInt_dust_rockPlutonic = extend(Item, "item-int-dust-rock-plutonic", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockPlutonic = itemInt_dust_rockPlutonic;


    const itemInt_dust_rockBiologicalSedimentary = extend(Item, "item-int-dust-rock-biological-sedimentary", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockBiologicalSedimentary = itemInt_dust_rockBiologicalSedimentary;


    const itemInt_dust_rockClasticSedimentary = extend(Item, "item-int-dust-rock-clastic-sedimentary", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_dust_rockClasticSedimentary = itemInt_dust_rockClasticSedimentary;
  // End


  // Part: item-int[electrode]
    const itemInt_electrodeCopper_accumulated = extend(Item, "item-int-electrode-copper-accumulated", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_electrodeCopper_accumulated = itemInt_electrodeCopper_accumulated;


    const itemInt_electrodeLead_accumulated = extend(Item, "item-int-electrode-lead-accumulated", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_electrodeLead_accumulated = itemInt_electrodeLead_accumulated;


    /* temporary electrode */


    const itemInt_temporaryElectrode_blisterCopper = extend(Item, "item-int-temporary-electrode-blister-copper", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_temporaryElectrode_blisterCopper = itemInt_temporaryElectrode_blisterCopper;
  // End


  // Part: item-int[misc]
    const itemInt_charcoal_uncarbonized = extend(Item, "item-int-charcoal-uncarbonized", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_charcoal_uncarbonized = itemInt_charcoal_uncarbonized;


    const itemInt_glass = extend(Item, "item-int-glass", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_glass = itemInt_glass;


    const itemInt_glass_unannealed = extend(Item, "item-int-glass-unannealed", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_glass_unannealed = itemInt_glass_unannealed;


    const itemInt_powderedBiomass = extend(Item, "item-int-powdered-biomass", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_powderedBiomass = itemInt_powderedBiomass;


    /* smelting */


    const itemInt_copperMatte = extend(Item, "item-int-copper-matte", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_copperMatte = itemInt_copperMatte;


    const itemInt_blisterCopper = extend(Item, "item-int-blister-copper", {
      alters: 0,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      loadIcon() {
        this.super$loadIcon();
        TEMPLATE.loadIcon(this);
      },
      createIcons(packer) {
        this.super$createIcons(packer);
        TEMPLATE.createIcons(this, packer);
      },
    });
    exports.itemInt_blisterCopper = itemInt_blisterCopper;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_rs_intermediateItem.js loaded.");
});
