/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_grass = require("reind/env/env_grass");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-grass


    /* fresh water */


    const envGrass_duckweed = extend(TreeBlock, "env-grass-duckweed", {
      setStats() {
        this.super$setStats();
        env_grass.setStats(this);
      },
      // Override
      drawBase(tile) {
        env_grass.drawBase(this, tile);
      },
    });
    exports.envGrass_duckweed = envGrass_duckweed;


    /* aquatic */


    const envGrass_brownFly = extend(TreeBlock, "env-grass-brown-fly", {
      setStats() {
        this.super$setStats();
        env_grass.setStats(this);
      },
      // Override
      drawBase(tile) {
        env_grass.drawBase(this, tile);
      },
    });
    exports.envGrass_brownFly = envGrass_brownFly;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_env_grass.js loaded.");
});
