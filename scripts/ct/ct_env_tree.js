/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_tree");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-tree


    /* beach */


    const envTree_shellTree = extend(TreeBlock, "env-tree-shell-tree", {
      armor: 72.16,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_shellTree = envTree_shellTree;


    const envTree_darkCrabTree = extend(TreeBlock, "env-tree-dark-crab-tree", {
      armor: 78.88,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_darkCrabTree = envTree_darkCrabTree;


    /* rocky beach */


    const envTree_campfireTree = extend(TreeBlock, "env-tree-campfire-tree", {
      armor: 79.72,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_campfireTree = envTree_campfireTree;


    /* desert */


    const envTree_duneShield = extend(TreeBlock, "env-tree-dune-shield", {
      armor: 72.1,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_duneShield = envTree_duneShield;


    const envTree_depthSeeker = extend(TreeBlock, "env-tree-depth-seeker", {
      armor: 78.75,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_depthSeeker = envTree_depthSeeker;


    /* plain */


    const envTree_brownSnake = extend(TreeBlock, "env-tree-brown-snake", {
      armor: 72.15,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_brownSnake = envTree_brownSnake;


    const envTree_bleeder = extend(TreeBlock, "env-tree-bleeder", {
      armor: 77.62,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_bleeder = envTree_bleeder;


    const envTree_umbrellaTree = extend(TreeBlock, "env-tree-umbrella-tree", {
      armor: 78.8,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_umbrellaTree = envTree_umbrellaTree;


    /* swamp */


    const envTree_greenScale = extend(TreeBlock, "env-tree-green-scale", {
      armor: 72.2,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_greenScale = envTree_greenScale;


    const envTree_aerthCyst = extend(TreeBlock, "env-tree-aerth-cyst", {
      armor: 78.05,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_aerthCyst = envTree_aerthCyst;


    const envTree_marshCloud = extend(TreeBlock, "env-tree-marsh-cloud", {
      armor: 78.1,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_marshCloud = envTree_marshCloud;


    const envTree_redRoot = extend(TreeBlock, "env-tree-red-root", {
      armor: 78.91,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_redRoot = envTree_redRoot;


    const envTree_saladTree = extend(TreeBlock, "env-tree-salad-tree", {
      armor: 79.1,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_saladTree = envTree_saladTree;


    // Aquatic
    const envTree_aquaticCloud = extend(TreeBlock, "env-tree-aquatic-cloud", {
      armor: 78.32,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_aquaticCloud = envTree_aquaticCloud;


    /* tropical */


    const envTree_cyanofall = extend(TreeBlock, "env-tree-cyanofall", {
      armor: 72.14,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_cyanofall = envTree_cyanofall;


    const envTree_algasus = extend(TreeBlock, "env-tree-algasus", {
      armor: 78.4,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_algasus = envTree_algasus;


    const envTree_zenith = extend(TreeBlock, "env-tree-zenith", {
      armor: 79.4,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_zenith = envTree_zenith;


    /* misc */


    // Dump
    const envTree_cliffsider = extend(TreeBlock, "env-tree-cliffsider", {
      armor: 72.3,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_cliffsider = envTree_cliffsider;


    // Dump (Sea)
    const envTree_nester = extend(TreeBlock, "env-tree-nester", {
      armor: 78.13,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_nester = envTree_nester;


    const envTree_elderGemTree = extend(TreeBlock, "env-tree-elder-gem-tree", {
      armor: 78.87,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_elderGemTree = envTree_elderGemTree;
  // End


  // Part: env-tree[bush]


    /* rocky beach */


    const envTree_bush_rockFern = extend(TreeBlock, "env-tree-bush-rock-fern", {
      armor: 71.88,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_bush_rockFern = envTree_bush_rockFern;
  // End


  // Part: env-tree[fungi]


    /* forest */


    const envTree_fungi_aerthShiitake = extend(TreeBlock, "env-tree-fungi-aerth-shiitake", {
      armor: 72.13,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_aerthShiitake = envTree_fungi_aerthShiitake;


    const envTree_fungi_wormMushroom = extend(TreeBlock, "env-tree-fungi-worm-mushroom", {
      armor: 77.2,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_wormMushroom = envTree_fungi_wormMushroom;


    /* cave */


    const envTree_fungi_blueSpark = extend(TreeBlock, "env-tree-fungi-blue-spark", {
      armor: 77.1,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_blueSpark = envTree_fungi_blueSpark;


    const envTree_fungi_ghostsEye = extend(TreeBlock, "env-tree-fungi-ghosts-eye", {
      armor: 77.86,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_ghostsEye = envTree_fungi_ghostsEye;


    const envTree_fungi_dottedRedUmbrella = extend(TreeBlock, "env-tree-fungi-dotted-red-umbrella", {
      armor: 77.93,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_dottedRedUmbrella = envTree_fungi_dottedRedUmbrella;


    /* parasite */


    const envTree_fungi_parasiticAntenna = extend(TreeBlock, "env-tree-fungi-parasitic-antenna", {
      armor: 80.5,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_parasiticAntenna = envTree_fungi_parasiticAntenna;


    /* aquatic */


    const envTree_fungi_aquaticNightmare = extend(TreeBlock, "env-tree-fungi-aquatic-nightmare", {
      armor: 78.12,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_aquaticNightmare = envTree_fungi_aquaticNightmare;


    const envTree_fungi_jellyfishCrown = extend(TreeBlock, "env-tree-fungi-jellyfish-crown", {
      armor: 79.85,
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      drawBase(tile) {
        TEMPLATE.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_jellyfishCrown = envTree_fungi_jellyfishCrown;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_tree.js loaded.");
});
