/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_intermediateItem = require("reind/rs/rs_intermediateItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/



  // Part: item-int[blend]
    const itemInt_blend_cement = extend(Item, "item-int-blend-cement", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_blend_cement = itemInt_blend_cement;


    const itemInt_blend_roastedCement = extend(Item, "item-int-blend-roasted-cement", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_blend_roastedCement = itemInt_blend_roastedCement;


    /* brick */


    const itemInt_blend_brickHighAlumina = extend(Item, "item-int-blend-brick-high-alumina", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_blend_brickHighAlumina = itemInt_blend_brickHighAlumina;


    const itemInt_blend_brickMagnesia = extend(Item, "item-int-blend-brick-magnesia", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_blend_brickMagnesia = itemInt_blend_brickMagnesia;

  // End


  // Part: item-int[brick]
    /* NOTE: Keep clay brick at the top. */
    const itemInt_brickClay_unbaked = extend(Item, "item-int-brick-clay-unbaked", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_brickClay_unbaked = itemInt_brickClay_unbaked;


    const itemInt_brickHighAlumina_unbaked = extend(Item, "item-int-brick-high-alumina-unbaked", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_brickHighAlumina_unbaked = itemInt_brickHighAlumina_unbaked;


    const itemInt_brickMagnesia_unbaked = extend(Item, "item-int-brick-magnesia-unbaked", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_brickMagnesia_unbaked = itemInt_brickMagnesia_unbaked;
  // End


  // Part: item-int[chunks]
    const itemInt_chunks_aggregate = extend(Item, "item-int-chunks-aggregate", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_chunks_aggregate = itemInt_chunks_aggregate;


    const itemInt_chunks_barite = extend(Item, "item-int-chunks-barite", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_chunks_barite = itemInt_chunks_barite;


    const itemInt_chunks_dolomite = extend(Item, "item-int-chunks-dolomite", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_chunks_dolomite = itemInt_chunks_dolomite;


    const itemInt_chunks_gypsum = extend(Item, "item-int-chunks-gypsum", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_chunks_gypsum = itemInt_chunks_gypsum;


    const itemInt_chunks_limestone = extend(Item, "item-int-chunks-limestone", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_chunks_limestone = itemInt_chunks_limestone;


    const itemInt_chunks_zircon = extend(Item, "item-int-chunks-zircon", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_chunks_zircon = itemInt_chunks_zircon;
  // End


  // Part: item-int[dried]
    const itemInt_sawdust_dried = extend(Item, "item-int-sawdust-dried", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_sawdust_dried = itemInt_sawdust_dried;
  // End


  // Part: item-int[dust]
    const itemInt_dust_asbestos = extend(Item, "item-int-dust-asbestos", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_asbestos = itemInt_dust_asbestos;


    const itemInt_dust_p1Asbestos = extend(Item, "item-int-dust-p1-asbestos", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_p1Asbestos = itemInt_dust_p1Asbestos;


    const itemInt_dust_rawCoal = extend(Item, "item-int-dust-raw-coal", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rawCoal = itemInt_dust_rawCoal;


    const itemInt_dust_sand = extend(Item, "item-int-dust-sand", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_sand = itemInt_dust_sand;


    const itemInt_dust_p1Sand = extend(Item, "item-int-dust-p1-sand", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_p1Sand = itemInt_dust_p1Sand;


    /* ore */


      /* aluminum */


      const itemInt_dust_bauxite = extend(Item, "item-int-dust-bauxite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_bauxite = itemInt_dust_bauxite;


      const itemInt_dust_p1Bauxite = extend(Item, "item-int-dust-p1-bauxite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_p1Bauxite = itemInt_dust_p1Bauxite;


      /* chromium */


      const itemInt_dust_chromite = extend(Item, "item-int-dust-chromite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_chromite = itemInt_dust_chromite;


      /* copper */


      const itemInt_dust_azurite = extend(Item, "item-int-dust-azurite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_azurite = itemInt_dust_azurite;


      const itemInt_dust_cuprite = extend(Item, "item-int-dust-cuprite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_cuprite = itemInt_dust_cuprite;


      const itemInt_dust_malachite = extend(Item, "item-int-dust-malachite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_malachite = itemInt_dust_malachite;


      const itemInt_dust_nativeCopper = extend(Item, "item-int-dust-native-copper", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_nativeCopper = itemInt_dust_nativeCopper;


      /* iron */


      const itemInt_dust_hematite = extend(Item, "item-int-dust-hematite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_hematite = itemInt_dust_hematite;


      const itemInt_dust_limonite = extend(Item, "item-int-dust-limonite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_limonite = itemInt_dust_limonite;


      const itemInt_dust_magnetite = extend(Item, "item-int-dust-magnetite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_magnetite = itemInt_dust_magnetite;


      const itemInt_dust_pyrite = extend(Item, "item-int-dust-pyrite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_pyrite = itemInt_dust_pyrite;


      /* lead */


      const itemInt_dust_anglesite = extend(Item, "item-int-dust-anglesite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_anglesite = itemInt_dust_anglesite;


      const itemInt_dust_galena = extend(Item, "item-int-dust-galena", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_galena = itemInt_dust_galena;


      /* manganese */


      const itemInt_dust_psilomelane = extend(Item, "item-int-dust-psilomelane", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_psilomelane = itemInt_dust_psilomelane;


      const itemInt_dust_pyrolusite = extend(Item, "item-int-dust-pyrolusite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_pyrolusite = itemInt_dust_pyrolusite;


      /* tin */


      const itemInt_dust_cassiterite = extend(Item, "item-int-dust-cassiterite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_cassiterite = itemInt_dust_cassiterite;


      /* titanium */


      const itemInt_dust_ilmenite = extend(Item, "item-int-dust-ilmenite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_ilmenite = itemInt_dust_ilmenite;


      const itemInt_dust_rutile = extend(Item, "item-int-dust-rutile", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_rutile = itemInt_dust_rutile;


      /* zinc */


      const itemInt_dust_smithsonite = extend(Item, "item-int-dust-smithsonite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_smithsonite = itemInt_dust_smithsonite;


      const itemInt_dust_sphalerite = extend(Item, "item-int-dust-sphalerite", {
        setStats() {
          this.super$setStats();
          rs_intermediateItem.setStats(this);
        },
      });
      exports.itemInt_dust_sphalerite = itemInt_dust_sphalerite;


    /* rock */


    const itemInt_dust_rockClastic = extend(Item, "item-int-dust-rock-clastic", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockClastic = itemInt_dust_rockClastic;


    const itemInt_dust_rockEvaporite = extend(Item, "item-int-dust-rock-evaporite", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockEvaporite = itemInt_dust_rockEvaporite;


    const itemInt_dust_rockHypabyssal = extend(Item, "item-int-dust-rock-hypabyssal", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockHypabyssal = itemInt_dust_rockHypabyssal;


    const itemInt_dust_rockLava = extend(Item, "item-int-dust-rock-lava", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockLava = itemInt_dust_rockLava;


    const itemInt_dust_rockMetamorphic = extend(Item, "item-int-dust-rock-metamorphic", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockMetamorphic = itemInt_dust_rockMetamorphic;


    const itemInt_dust_rockPlutonic = extend(Item, "item-int-dust-rock-plutonic", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockPlutonic = itemInt_dust_rockPlutonic;


    const itemInt_dust_rockBiologicalSedimentary = extend(Item, "item-int-dust-rock-biological-sedimentary", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockBiologicalSedimentary = itemInt_dust_rockBiologicalSedimentary;


    const itemInt_dust_rockClasticSedimentary = extend(Item, "item-int-dust-rock-clastic-sedimentary", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_dust_rockClasticSedimentary = itemInt_dust_rockClasticSedimentary;
  // End


  // Part: item-int[misc]
    const itemInt_charcoal_uncarbonized = extend(Item, "item-int-charcoal-uncarbonized", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_charcoal_uncarbonized = itemInt_charcoal_uncarbonized;


    const itemInt_glass = extend(Item, "item-int-glass", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_glass = itemInt_glass;


    const itemInt_glass_unannealed = extend(Item, "item-int-glass-unannealed", {
      setStats() {
        this.super$setStats();
        rs_intermediateItem.setStats(this);
      },
    });
    exports.itemInt_glass_unannealed = itemInt_glass_unannealed;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_rs_intermediateItem.js loaded.");
});
