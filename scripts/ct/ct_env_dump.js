/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_dump");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-dump[terrain]
    const envDump_dirt = extend(TallBlock, "env-dump-dirt", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_dirt = envDump_dirt;


    const envDump_grass = extend(TallBlock, "env-dump-grass", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_grass = envDump_grass;


    const envDump_marble = extend(TallBlock, "env-dump-marble", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_marble = envDump_marble;


    const envDump_sand = extend(TallBlock, "env-dump-sand", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_sand = envDump_sand;


    const envDump_sandCaustic = extend(TallBlock, "env-dump-sand-caustic", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_sandCaustic = envDump_sandCaustic;


    const envDump_sandDark = extend(TallBlock, "env-dump-sand-dark", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_sandDark = envDump_sandDark;


    const envDump_sandstone = extend(TallBlock, "env-dump-sandstone", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_sandstone = envDump_sandstone;
  // End


  // Part: env-dump[rock]
    const envDump_rockEvaporite_white = extend(TallBlock, "env-dump-rock-evaporite-white", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockEvaporite_white = envDump_rockEvaporite_white;


    const envDump_rockLava_black = extend(TallBlock, "env-dump-rock-lava-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockLava_black = envDump_rockLava_black;


    const envDump_rockMetamorphic_black = extend(TallBlock, "env-dump-rock-metamorphic-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockMetamorphic_black = envDump_rockMetamorphic_black;


    const envDump_rockPlutonic_black = extend(TallBlock, "env-dump-rock-plutonic-black", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockPlutonic_black = envDump_rockPlutonic_black;


    const envDump_rockBiologicalSedimentary_grey = extend(TallBlock, "env-dump-rock-biological-sedimentary-grey", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockBiologicalSedimentary_grey = envDump_rockBiologicalSedimentary_grey;


    const envDump_rockBiologicalSedimentary_red = extend(TallBlock, "env-dump-rock-biological-sedimentary-red", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockBiologicalSedimentary_red = envDump_rockBiologicalSedimentary_red;


    const envDump_rockBiologicalSedimentary_white = extend(TallBlock, "env-dump-rock-biological-sedimentary-white", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envDump_rockBiologicalSedimentary_white = envDump_rockBiologicalSedimentary_white;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_dump.js loaded.");
});
