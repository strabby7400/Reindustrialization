/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericLiquidFloor = require("reind/env/env_genericLiquidFloor");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-liq[brine]
    const envLiq_brine = extend(Floor, "env-liq-brine", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_brine = envLiq_brine;


    const envLiq_brine_shallow = extend(Floor, "env-liq-brine-shallow", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_brine_shallow = envLiq_brine_shallow;
  // End


  // Part: env-liq[water]
    const envLiq_freshWater = extend(Floor, "env-liq-fresh-water", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_freshWater = envLiq_freshWater;


    const envLiq_freshWater_shallow = extend(Floor, "env-liq-fresh-water-shallow", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_freshWater_shallow = envLiq_freshWater_shallow;


    const envLiq_swampWater = extend(Floor, "env-liq-swamp-water", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_swampWater = envLiq_swampWater;


    const envLiq_swampWater_shallow = extend(Floor, "env-liq-swamp-water-shallow", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_swampWater_shallow = envLiq_swampWater_shallow;
  // End


  // Part: env-liq[sea water]
    const envLiq_seaWater = extend(Floor, "env-liq-sea-water", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_seaWater = envLiq_seaWater;


    const envLiq_seaWater_shallow = extend(Floor, "env-liq-sea-water-shallow", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_seaWater_shallow = envLiq_seaWater_shallow;


    const envLiq_greenSeaWater = extend(Floor, "env-liq-green-sea-water", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_greenSeaWater = envLiq_greenSeaWater;


    const envLiq_greenSeaWater_shallow = extend(Floor, "env-liq-green-sea-water-shallow", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_greenSeaWater_shallow = envLiq_greenSeaWater_shallow;
  // End


  // Part: env-liq[misc]
    const envLiq_lava = extend(Floor, "env-liq-lava", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_lava = envLiq_lava;


    const envLiq_quickSand = extend(Floor, "env-liq-quicksand", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_quickSand = envLiq_quickSand;


    const envLiq_quickSandDark = extend(Floor, "env-liq-quicksand-dark", {
      setStats() {
        this.super$setStats();
        env_genericLiquidFloor.setStats(this);
      },
    });
    exports.envLiq_quickSandDark = envLiq_quickSandDark;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_genericLiquidFloor.js loaded.");
});
