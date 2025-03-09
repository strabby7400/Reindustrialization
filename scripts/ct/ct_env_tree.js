/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_tree = require("reind/env/env_tree");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: env-tree


    /* beach */


    const envTree_shellTree = extend(TreeBlock, "env-tree-shell-tree", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_shellTree = envTree_shellTree;


    const envTree_darkCrabTree = extend(TreeBlock, "env-tree-dark-crab-tree", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_darkCrabTree = envTree_darkCrabTree;


    /* rocky beach */


    const envTree_campfireTree = extend(TreeBlock, "env-tree-campfire-tree", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_campfireTree = envTree_campfireTree;


    /* desert */


    const envTree_duneShield = extend(TreeBlock, "env-tree-dune-shield", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_duneShield = envTree_duneShield;


    const envTree_depthSeeker = extend(TreeBlock, "env-tree-depth-seeker", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_depthSeeker = envTree_depthSeeker;


    /* plain */


    const envTree_brownSnake = extend(TreeBlock, "env-tree-brown-snake", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_brownSnake = envTree_brownSnake;


    const envTree_bleeder = extend(TreeBlock, "env-tree-bleeder", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_bleeder = envTree_bleeder;


    const envTree_umbrellaTree = extend(TreeBlock, "env-tree-umbrella-tree", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_umbrellaTree = envTree_umbrellaTree;


    /* swamp */


    const envTree_greenScale = extend(TreeBlock, "env-tree-green-scale", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_greenScale = envTree_greenScale;


    const envTree_aerthCyst = extend(TreeBlock, "env-tree-aerth-cyst", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_aerthCyst = envTree_aerthCyst;


    const envTree_marshCloud = extend(TreeBlock, "env-tree-marsh-cloud", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_marshCloud = envTree_marshCloud;


    const envTree_redRoot = extend(TreeBlock, "env-tree-red-root", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_redRoot = envTree_redRoot;


    const envTree_saladTree = extend(TreeBlock, "env-tree-salad-tree", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_saladTree = envTree_saladTree;


    // Aquatic
    const envTree_aquaticCloud = extend(TreeBlock, "env-tree-aquatic-cloud", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_aquaticCloud = envTree_aquaticCloud;


    /* tropical */


    const envTree_cyanofall = extend(TreeBlock, "env-tree-cyanofall", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_cyanofall = envTree_cyanofall;


    const envTree_algasus = extend(TreeBlock, "env-tree-algasus", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_algasus = envTree_algasus;


    const envTree_zenith = extend(TreeBlock, "env-tree-zenith", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_zenith = envTree_zenith;


    /* misc */


    // Dump
    const envTree_cliffsider = extend(TreeBlock, "env-tree-cliffsider", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_cliffsider = envTree_cliffsider;


    // Dump (Sea)
    const envTree_nester = extend(TreeBlock, "env-tree-nester", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_nester = envTree_nester;


    const envTree_elderGemTree = extend(TreeBlock, "env-tree-elder-gem-tree", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_elderGemTree = envTree_elderGemTree;
  // End


  // Part: env-tree[bush]


    /* rocky beach */


    const envTree_bush_rockFern = extend(TreeBlock, "env-tree-bush-rock-fern", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_bush_rockFern = envTree_bush_rockFern;
  // End


  // Part: env-tree[fungi]


    /* forest */


    const envTree_fungi_aerthShiitake = extend(TreeBlock, "env-tree-fungi-aerth-shiitake", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_aerthShiitake = envTree_fungi_aerthShiitake;


    const envTree_fungi_wormMushroom = extend(TreeBlock, "env-tree-fungi-worm-mushroom", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_wormMushroom = envTree_fungi_wormMushroom;


    /* cave */


    const envTree_fungi_blueSpark = extend(TreeBlock, "env-tree-fungi-blue-spark", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_blueSpark = envTree_fungi_blueSpark;


    const envTree_fungi_ghostsEye = extend(TreeBlock, "env-tree-fungi-ghosts-eye", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_ghostsEye = envTree_fungi_ghostsEye;


    const envTree_fungi_dottedRedUmbrella = extend(TreeBlock, "env-tree-fungi-dotted-red-umbrella", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_dottedRedUmbrella = envTree_fungi_dottedRedUmbrella;


    /* parasite */


    const envTree_fungi_parasiticAntenna = extend(TreeBlock, "env-tree-fungi-parasitic-antenna", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_parasiticAntenna = envTree_fungi_parasiticAntenna;


    /* aquatic */


    const envTree_fungi_aquaticNightmare = extend(TreeBlock, "env-tree-fungi-aquatic-nightmare", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_aquaticNightmare = envTree_fungi_aquaticNightmare;


    const envTree_fungi_jellyfishCrown = extend(TreeBlock, "env-tree-fungi-jellyfish-crown", {
      setStats() {
        this.super$setStats();
        env_tree.setStats(this);
      },
      drawBase(tile) {
        env_tree.drawBase(this, tile);
      },
    });
    exports.envTree_fungi_jellyfishCrown = envTree_fungi_jellyfishCrown;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_tree.js loaded.");
});
