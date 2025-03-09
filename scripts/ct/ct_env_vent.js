/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_vent = require("reind/env/env_vent");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-vent[steam]
    const envVent_steam_marble = extend(SteamVent, "env-vent-steam-marble", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_marble = envVent_steam_marble;


    const envVent_steam_sandstone = extend(SteamVent, "env-vent-steam-sandstone", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_sandstone = envVent_steam_sandstone;


    /* rock */


    const envVent_steam_rockLava_black = extend(SteamVent, "env-vent-steam-rock-lava-black", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_rockLava_black = envVent_steam_rockLava_black;


    const envVent_steam_rockMetamorphic_black = extend(SteamVent, "env-vent-steam-rock-metamorphic-black", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_rockMetamorphic_black = envVent_steam_rockMetamorphic_black;


    const envVent_steam_rockPlutonic_black = extend(SteamVent, "env-vent-steam-rock-plutonic-black", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_rockPlutonic_black = envVent_steam_rockPlutonic_black;


    const envVent_steam_rockBiologicalSedimentary_grey = extend(SteamVent, "env-vent-steam-rock-biological-sedimentary-grey", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_rockBiologicalSedimentary_grey = envVent_steam_rockBiologicalSedimentary_grey;


    const envVent_steam_rockBiologicalSedimentary_white = extend(SteamVent, "env-vent-steam-rock-biological-sedimentary-white", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_steam_rockBiologicalSedimentary_white = envVent_steam_rockBiologicalSedimentary_white;
  // End


  // Part: env-vent[ammonia]
    const envVent_ammonia_dirt = extend(SteamVent, "env-vent-ammonia-dirt", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_ammonia_dirt = envVent_ammonia_dirt;
  // End


  // Part: env-vent[hydrogen sulfide]
    /* underwater */


    const envVent_hydrogenSulfide_seaWater = extend(SteamVent, "env-vent-hydrogen-sulfide-sea-water", {
      setStats() {
        this.super$setStats();
        env_vent.setStats(this);
      },
    });
    exports.envVent_hydrogenSulfide_seaWater = envVent_hydrogenSulfide_seaWater;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_vent.js loaded.");
});
