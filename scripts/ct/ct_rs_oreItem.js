/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const rs_oreItem = require("reind/rs/rs_oreItem");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-ore[coal]
    const itemOre_peat = extend(Item, "item-ore-peat", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_peat = itemOre_peat;


    const itemOre_lignite = extend(Item, "item-ore-lignite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_lignite = itemOre_lignite;


    const itemOre_rawCoal = extend(Item, "item-ore-raw-coal", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rawCoal = itemOre_rawCoal;


    const itemOre_crudeGraphite = extend(Item, "item-ore-crude-graphite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_crudeGraphite = itemOre_crudeGraphite;


  // Part: item-ore[aluminum]
    const itemOre_bauxite = extend(Item, "item-ore-bauxite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_bauxite = itemOre_bauxite;
  // End


  // Part: item-ore[chromium]
    const itemOre_chromite = extend(Item, "item-ore-chromite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_chromite = itemOre_chromite;
  // End


  // Part: item-ore[copper]
    const itemOre_azurite = extend(Item, "item-ore-azurite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_azurite = itemOre_azurite;


    const itemOre_cuprite = extend(Item, "item-ore-cuprite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_cuprite = itemOre_cuprite;


    const itemOre_malachite = extend(Item, "item-ore-malachite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_malachite = itemOre_malachite;


    const itemOre_nativeCopper = extend(Item, "item-ore-native-copper", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_nativeCopper = itemOre_nativeCopper;
  // End


  // Part: item-ore[iron]
    const itemOre_hematite = extend(Item, "item-ore-hematite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_hematite = itemOre_hematite;


    const itemOre_limonite = extend(Item, "item-ore-limonite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_limonite = itemOre_limonite;


    const itemOre_magnetite = extend(Item, "item-ore-magnetite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_magnetite = itemOre_magnetite;


    const itemOre_pyrite = extend(Item, "item-ore-pyrite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_pyrite = itemOre_pyrite;
  // End


  // Part: item-ore[lead]
    const itemOre_anglesite = extend(Item, "item-ore-anglesite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_anglesite = itemOre_anglesite;


    const itemOre_galena = extend(Item, "item-ore-galena", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_galena = itemOre_galena;
  // End


  // Part: item-ore[manganese]
    const itemOre_psilomelane = extend(Item, "item-ore-psilomelane", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_psilomelane = itemOre_psilomelane;


    const itemOre_pyrolusite = extend(Item, "item-ore-pyrolusite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_pyrolusite = itemOre_pyrolusite;
  // End


  // Part: item-ore[tin]
    const itemOre_cassiterite = extend(Item, "item-ore-cassiterite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_cassiterite = itemOre_cassiterite;
  // End


  // Part: item-ore[titanium]
    const itemOre_ilmenite = extend(Item, "item-ore-ilmenite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_ilmenite = itemOre_ilmenite;


    const itemOre_rutile = extend(Item, "item-ore-rutile", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rutile = itemOre_rutile;
  // End


  // Part: item-ore[zinc]
    const itemOre_smithsonite = extend(Item, "item-ore-smithsonite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_smithsonite = itemOre_smithsonite;


    const itemOre_sphalerite = extend(Item, "item-ore-sphalerite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_sphalerite = itemOre_sphalerite;
  // End


  // Part: item-ore[zirconium]
    const itemOre_zircon = extend(Item, "item-ore-zircon", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_zircon = itemOre_zircon;
  // End


  // Part: item-ore[misc]
    const itemOre_asbestos = extend(Item, "item-ore-asbestos", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_asbestos = itemOre_asbestos;


    const itemOre_barite = extend(Item, "item-ore-barite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_barite = itemOre_barite;


    const itemOre_clay = extend(Item, "item-ore-clay", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_clay = itemOre_clay;


    const itemOre_crudeBorax = extend(Item, "item-ore-crude-borax", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_crudeBorax = itemOre_crudeBorax;


    const itemOre_crudeSulfur = extend(Item, "item-ore-crude-sulfur", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_crudeSulfur = itemOre_crudeSulfur;


    const itemOre_gypsum = extend(Item, "item-ore-gypsum", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_gypsum = itemOre_gypsum;


    const itemOre_pumice = extend(Item, "item-ore-pumice", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_pumice = itemOre_pumice;


    const itemOre_salt = extend(Item, "item-ore-salt", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_salt = itemOre_salt;


    const itemOre_sand = extend(Item, "item-ore-sand", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_sand = itemOre_sand;


    const itemOre_sandBasaltic = extend(Item, "item-ore-sand-basaltic", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_sandBasaltic = itemOre_sandBasaltic;


    const itemOre_talcum = extend(Item, "item-ore-talcum", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_talcum = itemOre_talcum;


    const itemOre_trona = extend(Item, "item-ore-trona", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_trona = itemOre_trona;
  // End


  // Part: item-ore[rock]
    const itemOre_dolomite = extend(Item, "item-ore-dolomite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_dolomite = itemOre_dolomite;


    const itemOre_limestone = extend(Item, "item-ore-limestone", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_limestone = itemOre_limestone;


    const itemOre_olivine = extend(Item, "item-ore-olivine", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_olivine = itemOre_olivine;


    const itemOre_sandstone = extend(Item, "item-ore-sandstone", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_sandstone = itemOre_sandstone;
  // End


  // Part: item-ore[rock shards]
    const itemOre_rockShard_clastic = extend(Item, "item-ore-rock-shard-clastic", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_clastic = itemOre_rockShard_clastic;


    const itemOre_rockShard_evaporite = extend(Item, "item-ore-rock-shard-evaporite", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_evaporite = itemOre_rockShard_evaporite;


    const itemOre_rockShard_hypabyssal = extend(Item, "item-ore-rock-shard-hypabyssal", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_hypabyssal = itemOre_rockShard_hypabyssal;


    const itemOre_rockShard_lava = extend(Item, "item-ore-rock-shard-lava", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_lava = itemOre_rockShard_lava;


    const itemOre_rockShard_metamorphic = extend(Item, "item-ore-rock-shard-metamorphic", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_metamorphic = itemOre_rockShard_metamorphic;


    const itemOre_rockShard_plutonic = extend(Item, "item-ore-rock-shard-plutonic", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_plutonic = itemOre_rockShard_plutonic;


    const itemOre_rockShard_biologicalSedimentary = extend(Item, "item-ore-rock-shard-biological-sedimentary", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_biologicalSedimentary = itemOre_rockShard_biologicalSedimentary;


    const itemOre_rockShard_clasticSedimentary = extend(Item, "item-ore-rock-shard-clastic-sedimentary", {
      setStats() {
        this.super$setStats();
        rs_oreItem.setStats(this);
      },
    });
    exports.itemOre_rockShard_clasticSedimentary = itemOre_rockShard_clasticSedimentary;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_rs_oreItem.js loaded.");
});
