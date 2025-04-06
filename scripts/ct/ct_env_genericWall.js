/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_genericWall");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-wall[terrain]
    const envWall_dirt = extend(StaticWall, "env-wall-dirt", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_dirt = envWall_dirt;


    const envWall_grass = extend(StaticWall, "env-wall-grass", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_grass = envWall_grass;


    const envWall_marble = extend(StaticWall, "env-wall-marble", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_marble = envWall_marble;


    const envWall_sand = extend(StaticWall, "env-wall-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_sand = envWall_sand;


    const envWall_sandCaustic = extend(StaticWall, "env-wall-sand-caustic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_sandCaustic = envWall_sandCaustic;


    const envWall_sandDark = extend(StaticWall, "env-wall-sand-dark", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_sandDark = envWall_sandDark;


    const envWall_sandstone = extend(StaticWall, "env-wall-sandstone", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_sandstone = envWall_sandstone;
  // End


  // Part: env-wall[rock]
    const envWall_rockEvaporite_white = extend(StaticWall, "env-wall-rock-evaporite-white", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockEvaporite_white = envWall_rockEvaporite_white;


    const envWall_rockLava_black = extend(StaticWall, "env-wall-rock-lava-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockLava_black = envWall_rockLava_black;


    const envWall_rockMetamorphic_black = extend(StaticWall, "env-wall-rock-metamorphic-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockMetamorphic_black = envWall_rockMetamorphic_black;


    const envWall_rockPlutonic_black = extend(StaticWall, "env-wall-rock-plutonic-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockPlutonic_black = envWall_rockPlutonic_black;


    const envWall_rockBiologicalSedimentary_grey = extend(StaticWall, "env-wall-rock-biological-sedimentary-grey", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockBiologicalSedimentary_grey = envWall_rockBiologicalSedimentary_grey;


    const envWall_rockBiologicalSedimentary_red = extend(StaticWall, "env-wall-rock-biological-sedimentary-red", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockBiologicalSedimentary_red = envWall_rockBiologicalSedimentary_red;


    const envWall_rockBiologicalSedimentary_white = extend(StaticWall, "env-wall-rock-biological-sedimentary-white", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    exports.envWall_rockBiologicalSedimentary_white = envWall_rockBiologicalSedimentary_white;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_genericWall.js loaded.");
});
