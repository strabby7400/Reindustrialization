/*
  ========================================
  Section: List
  ========================================
*/


  // Part: Planet
    /* NOTE: Tidal generator can only function normally on these. */
    const li_hasTides = new Seq([
      "reind-pla-ter-aerth",
    ]);
    exports.hasTides = li_hasTides;
  // End


  // Part: Floor
    /* NOTE: Applies quicksand status to units on it. */
    const li_quicksand = new Seq([
      "reind-env-liq-quicksand",
      "reind-env-liq-quicksand-dark",
    ]);
    exports.quicksand = li_quicksand;


    /* NOTE: Applies parasite status to units on it. */
     const li_parasiteFluids = new Seq([
       "reind-env-liq-carnage-plasma",
       "reind-env-liq-carnage-plasma-shallow",
     ]);
     exports.parasiteFluids = li_parasiteFluids;
  // End


  // Part: Prop
    const li_treeLayers = new Seq([


      /* <---------------- tree ----------------> */


      /* beach */
      "reind-env-tree-shell-tree", 72.16,
      "reind-env-tree-dark-crab-tree", 78.88,

      /* rocky beach */
      "reind-env-tree-campfire-tree", 79.72,

      /* desert */
      "reind-env-tree-dune-shield", 72.1,
      "reind-env-tree-depth-seeker", 78.75,

      /* plain */
      "reind-env-tree-brown-snake", 72.15,
      "reind-env-tree-bleeder", 77.62,
      "reind-env-tree-umbrella-tree", 78.8,

      /* swamp */
      "reind-env-tree-green-scale", 72.2,
      "reind-env-tree-aerth-cyst", 78.05,
      "reind-env-tree-marsh-cloud", 78.1,
      "reind-env-tree-red-root", 78.91,
      "reind-env-tree-salad-tree", 79.1,
      "reind-env-tree-aquatic-cloud", 78.32,

      /* tropical */
      "reind-env-tree-cyanofall", 72.14,
      "reind-env-tree-algasus", 78.4,
      "reind-env-tree-zenith", 79.4,

      /* misc */
      "reind-env-tree-cliffsider", 72.3,
      "reind-env-tree-nester", 78.13,
      "reind-env-tree-elder-gem-tree", 78.87,


      /* <---------------- bush ----------------> */


      /* rocky beach */
      "reind-env-tree-bush-rock-fern", 71.88,


      /* <---------------- fungi ----------------> */


      /* NOTE: It's ridiculous. */


      /* forest */
      "reind-env-tree-fungi-aerth-shiitake", 72.13,
      "reind-env-tree-fungi-worm-mushroom", 77.2,

      /* cave */
      "reind-env-tree-fungi-blue-spark", 77.1,
      "reind-env-tree-fungi-ghosts-eye", 77.86,
      "reind-env-tree-fungi-dotted-red-umbrella", 77.93,

      /* parasite */
      "reind-env-tree-fungi-parasitic-antenna", 80.5,

      /* aquatic */
      "reind-env-tree-fungi-aquatic-nightmare", 78.12,
      "reind-env-tree-fungi-jellyfish-crown", 79.85,
    ]);
    exports.treeLayers = li_treeLayers;
  // End
