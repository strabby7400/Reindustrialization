/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericBlock");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function updateTileComp(b) {
      frag_fluid.updateTile_flammableContent(b);
      frag_fluid.updateTile_pressured(b);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericFactory.js loaded.");
});
