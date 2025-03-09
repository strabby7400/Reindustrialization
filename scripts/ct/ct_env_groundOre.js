/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_groundOre = require("reind/env/env_groundOre");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-ore[coal]
    const envOre_ground_peat = extend(OreBlock, "env-ore-ground-peat", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_peat);
    exports.envOre_ground_peat = envOre_ground_peat;


    const envOre_ground_lignite = extend(OreBlock, "env-ore-ground-lignite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_lignite);
    exports.envOre_ground_lignite = envOre_ground_lignite;


    const envOre_ground_rawCoal = extend(OreBlock, "env-ore-ground-raw-coal", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_rawCoal);
    exports.envOre_ground_rawCoal = envOre_ground_rawCoal;


    const envOre_ground_crudeGraphite = extend(OreBlock, "env-ore-ground-crude-graphite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_crudeGraphite);
    exports.envOre_ground_crudeGraphite = envOre_ground_crudeGraphite;
  // End


  // Part: item-ore[copper]
    const envOre_ground_azurite = extend(OreBlock, "env-ore-ground-azurite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_azurite);
    exports.envOre_ground_azurite = envOre_ground_azurite;


    const envOre_ground_malachite = extend(OreBlock, "env-ore-ground-malachite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_malachite);
    exports.envOre_ground_malachite = envOre_ground_malachite;


    const envOre_ground_nativeCopper = extend(OreBlock, "env-ore-ground-native-copper", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_nativeCopper);
    exports.envOre_ground_nativeCopper = envOre_ground_nativeCopper;
  // End


  // Part: item-ore[iron]
    const envOre_ground_hematite = extend(OreBlock, "env-ore-ground-hematite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_hematite);
    exports.envOre_ground_hematite = envOre_ground_hematite;


    const envOre_ground_limonite = extend(OreBlock, "env-ore-ground-limonite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_limonite);
    exports.envOre_ground_limonite = envOre_ground_limonite;


    const envOre_ground_magnetite = extend(OreBlock, "env-ore-ground-magnetite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_magnetite);
    exports.envOre_ground_magnetite = envOre_ground_magnetite;
  // End


  // Part: item-ore[lead]
    const envOre_ground_galena = extend(OreBlock, "env-ore-ground-galena", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_galena);
    exports.envOre_ground_galena = envOre_ground_galena;
  // End


  // Part: item-ore[manganese]
    const envOre_ground_psilomelane = extend(OreBlock, "env-ore-ground-psilomelane", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_psilomelane);
    exports.envOre_ground_psilomelane = envOre_ground_psilomelane;


    const envOre_ground_pyrolusite = extend(OreBlock, "env-ore-ground-pyrolusite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_pyrolusite);
    exports.envOre_ground_pyrolusite = envOre_ground_pyrolusite;
  // End


  // Part: item-ore[mercury]
    const envOre_ground_cinnabar = extend(OreBlock, "env-ore-ground-cinnabar", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_cinnabar);
    exports.envOre_ground_cinnabar = envOre_ground_cinnabar;
  // End


  // Part: item-ore[tin]
    const envOre_ground_cassiterite = extend(OreBlock, "env-ore-ground-cassiterite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_cassiterite);
    exports.envOre_ground_cassiterite = envOre_ground_cassiterite;
  // End


  // Part: item-ore[titanium]
    const envOre_ground_ilmenite = extend(OreBlock, "env-ore-ground-ilmenite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_ilmenite);
    exports.envOre_ground_ilmenite = envOre_ground_ilmenite;


    const envOre_ground_rutile = extend(OreBlock, "env-ore-ground-rutile", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_rutile);
    exports.envOre_ground_rutile = envOre_ground_rutile;
  // End


  // Part: item-ore[zinc]
    const envOre_ground_sphalerite = extend(OreBlock, "env-ore-ground-sphalerite", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_sphalerite);
    exports.envOre_ground_sphalerite = envOre_ground_sphalerite;
  // End


  // Part: item-ore[zirconium]
    const envOre_ground_zircon = extend(OreBlock, "env-ore-ground-zircon", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_zircon);
    exports.envOre_ground_zircon = envOre_ground_zircon;
  // End


  // Part: item-ore[misc]
    const envOre_ground_trona = extend(OreBlock, "env-ore-ground-trona", {
      setStats() {
        this.super$setStats();
        env_groundOre.setStats(this);
      },
    });
    env_groundOre.setup(envOre_ground_trona);
    exports.envOre_ground_trona = envOre_ground_trona;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_groundOre.js loaded.");
});
