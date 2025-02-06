/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_heapOre = require("reind/env/env_heapOre");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-heap[ore]
    const envHeap_barite = extend(TallBlock, "env-heap-barite", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_barite = envHeap_barite;


    const envHeap_bauxite = extend(TallBlock, "env-heap-bauxite", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_bauxite = envHeap_bauxite;


    const envHeap_clay = extend(TallBlock, "env-heap-clay", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_clay = envHeap_clay;


    const envHeap_dolomite = extend(TallBlock, "env-heap-dolomite", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_dolomite = envHeap_dolomite;


    const envHeap_gypsum = extend(TallBlock, "env-heap-gypsum", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_gypsum = envHeap_gypsum;


    const envHeap_limestone = extend(TallBlock, "env-heap-limestone", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_limestone = envHeap_limestone;


    const envHeap_olivine = extend(TallBlock, "env-heap-olivine", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_olivine = envHeap_olivine;


    const envHeap_pumice = extend(TallBlock, "env-heap-pumice", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_pumice = envHeap_pumice;


    const envHeap_salt = extend(TallBlock, "env-heap-salt", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_salt = envHeap_salt;


    const envHeap_talcum = extend(TallBlock, "env-heap-talcum", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_talcum = envHeap_talcum;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_env_heapOre.js loaded.");
});
