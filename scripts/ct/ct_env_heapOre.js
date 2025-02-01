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


  // Part: item-ore[aluminum]
    const envHeap_bauxite = extend(TallBlock, "env-heap-bauxite", {
      setStats() {
        this.super$setStats();
        env_heapOre.setStats(this);
      },
    });
    exports.envHeap_bauxite = envHeap_bauxite;
  // End


  // Part: item-ore[misc]
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
