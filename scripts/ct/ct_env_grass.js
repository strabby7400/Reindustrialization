/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_grass");
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
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envGrass_duckweed = envGrass_duckweed;


    /* aquatic */


    const envGrass_brownFly = extend(TreeBlock, "env-grass-brown-fly", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envGrass_brownFly = envGrass_brownFly;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_grass.js loaded.");
});
