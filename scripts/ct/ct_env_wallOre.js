/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_wallOre");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: item-ore[coal]
    const envOre_wall_crudeGraphite = extend(OreBlock, "env-ore-wall-crude-graphite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
    });
    exports.envOre_wall_crudeGraphite = envOre_wall_crudeGraphite;
  // End


  // Part: item-ore[copper]
    const envOre_wall_cuprite = extend(OreBlock, "env-ore-wall-cuprite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
    });
    exports.envOre_wall_cuprite = envOre_wall_cuprite;
  // End


  // Part: item-ore[iron]
    const envOre_wall_hematite = extend(OreBlock, "env-ore-wall-hematite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
    });
    exports.envOre_wall_hematite = envOre_wall_hematite;


    const envOre_wall_magnetite = extend(OreBlock, "env-ore-wall-magnetite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
    });
    exports.envOre_wall_magnetite = envOre_wall_magnetite;
  // End


  // Part: item-ore[lead]
    const envOre_wall_anglesite = extend(OreBlock, "env-ore-wall-anglesite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
    });
    exports.envOre_wall_anglesite = envOre_wall_anglesite;
  // End


  // Part: item-ore[zinc]
    const envOre_wall_smithsonite = extend(OreBlock, "env-ore-wall-smithsonite", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
    });
    exports.envOre_wall_smithsonite = envOre_wall_smithsonite;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_wallOre.js loaded.");
});
