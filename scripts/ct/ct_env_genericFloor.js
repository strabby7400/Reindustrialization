/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_genericFloor");

    const mdl_draw = require("reind/mdl/mdl_draw");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-flr[ore]
    const envFlr_barite = extend(Floor, "env-flr-barite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_barite = envFlr_barite;


    const envFlr_bauxite = extend(Floor, "env-flr-bauxite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_bauxite = envFlr_bauxite;


    const envFlr_clay = extend(Floor, "env-flr-clay", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_clay = envFlr_clay;


    const envFlr_crudeBorax = extend(Floor, "env-flr-crude-borax", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_crudeBorax = envFlr_crudeBorax;


    const envFlr_crudeSulfur = extend(Floor, "env-flr-crude-sulfur", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_crudeSulfur = envFlr_crudeSulfur;


    const envFlr_gypsum = extend(Floor, "env-flr-gypsum", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_gypsum = envFlr_gypsum;


    const envFlr_olivine = extend(Floor, "env-flr-olivine", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_olivine = envFlr_olivine;


    const envFlr_placer = extend(Floor, "env-flr-placer", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_placer = envFlr_placer;


    const envFlr_placerDark = extend(Floor, "env-flr-placer-dark", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_placerDark = envFlr_placerDark;


    const envFlr_pumice = extend(Floor, "env-flr-pumice", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_pumice = envFlr_pumice;


    const envFlr_salt = extend(Floor, "env-flr-salt", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_salt = envFlr_salt;


    const envFlr_silicaStone = extend(Floor, "env-flr-silica-stone", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_silicaStone = envFlr_silicaStone;


    const envFlr_talcum = extend(Floor, "env-flr-talcum", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_talcum = envFlr_talcum;
  // End


  // Part: env-flr[terrain]
    const envFlr_dirt = extend(Floor, "env-flr-dirt", {
      // Specific
      randomRegs: [],
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      // Specific
      init() {
        this.super$init();
        this.randomRegs.pushAll(mdl_draw._randOv_rock());
      },
      // Specific
      drawBase(tile) {
        this.super$drawBase(tile);
        mdl_draw.drawRandomOverlay(tile, this.randomRegs);
      },
    });
    exports.envFlr_dirt = envFlr_dirt;


    const envFlr_dirtCaustic = extend(Floor, "env-flr-dirt-caustic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_dirtCaustic = envFlr_dirtCaustic;


    const envFlr_dirtSandy = extend(Floor, "env-flr-dirt-sandy", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_dirtSandy = envFlr_dirtSandy;


    const envFlr_grass = extend(Floor, "env-flr-grass", {
      // Specific
      randomRegs: [],
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      // Specific
      init() {
        this.super$init();
        this.randomRegs.pushAll(mdl_draw._randOv_rock());
      },
      // Specific
      drawBase(tile) {
        this.super$drawBase(tile);
        mdl_draw.drawRandomOverlay(tile, this.randomRegs);
      },
    });
    exports.envFlr_grass = envFlr_grass;


    const envFlr_mud = extend(Floor, "env-flr-mud", {
      // Specific
      randomRegs: [],
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      // Specific
      init() {
        this.super$init();
        this.randomRegs.pushAll(mdl_draw._randOv_rock());
      },
      // Specific
      drawBase(tile) {
        this.super$drawBase(tile);
        mdl_draw.drawRandomOverlay(tile, this.randomRegs);
      },
    });
    exports.envFlr_mud = envFlr_mud;


    const envFlr_marble = extend(Floor, "env-flr-marble", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_marble = envFlr_marble;


    const envFlr_sand = extend(Floor, "env-flr-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_sand = envFlr_sand;


    const envFlr_sandBasaltic = extend(Floor, "env-flr-sand-basaltic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_sandBasaltic = envFlr_sandBasaltic;


    const envFlr_sandCaustic = extend(Floor, "env-flr-sand-caustic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_sandCaustic = envFlr_sandCaustic;


    const envFlr_sandDark = extend(Floor, "env-flr-sand-dark", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_sandDark = envFlr_sandDark;


    const envFlr_sandstone = extend(Floor, "env-flr-sandstone", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_sandstone = envFlr_sandstone;


    const envFlr_sandstoneCracked = extend(Floor, "env-flr-sandstone-cracked", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_sandstoneCracked = envFlr_sandstoneCracked;
  // End


  // Part: env-flr[rock]
    const envFlr_rockEvaporite_white = extend(Floor, "env-flr-rock-evaporite-white", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockEvaporite_white = envFlr_rockEvaporite_white;


    const envFlr_rockLava_black = extend(Floor, "env-flr-rock-lava-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockLava_black = envFlr_rockLava_black;


    const envFlr_rockMetamorphic_black = extend(Floor, "env-flr-rock-metamorphic-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockMetamorphic_black = envFlr_rockMetamorphic_black;


    const envFlr_rockPlutonic_black = extend(Floor, "env-flr-rock-plutonic-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockPlutonic_black = envFlr_rockPlutonic_black;


    const envFlr_rockBiologicalSedimentary_grey = extend(Floor, "env-flr-rock-biological-sedimentary-grey", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockBiologicalSedimentary_grey = envFlr_rockBiologicalSedimentary_grey;


    const envFlr_rockBiologicalSedimentary_greyCracked = extend(Floor, "env-flr-rock-biological-sedimentary-grey-cracked", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockBiologicalSedimentary_greyCracked = envFlr_rockBiologicalSedimentary_greyCracked;


    const envFlr_rockBiologicalSedimentary_red = extend(Floor, "env-flr-rock-biological-sedimentary-red", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockBiologicalSedimentary_red = envFlr_rockBiologicalSedimentary_red;


    const envFlr_rockBiologicalSedimentary_redCracked = extend(Floor, "env-flr-rock-biological-sedimentary-red-cracked", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockBiologicalSedimentary_redCracked = envFlr_rockBiologicalSedimentary_redCracked;


    const envFlr_rockBiologicalSedimentary_white = extend(Floor, "env-flr-rock-biological-sedimentary-white", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockBiologicalSedimentary_white = envFlr_rockBiologicalSedimentary_white;


    const envFlr_rockBiologicalSedimentary_whiteCracked = extend(Floor, "env-flr-rock-biological-sedimentary-white-cracked", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envFlr_rockBiologicalSedimentary_whiteCracked = envFlr_rockBiologicalSedimentary_whiteCracked;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_genericFloor.js loaded.");
});
