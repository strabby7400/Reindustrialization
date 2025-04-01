/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionGate");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Setting
    var secretCode = "<ohno>";
    const set_secretCode = function(val) {
      secretCode = val;
    };
    exports.set_secretCode = set_secretCode;
  // End


  // Part: Component
    function drawComp(b) {
      if(secretCode.includes("<router>")) mdl_draw.drawNormalRegion(b, Vars.content.block("reind-eff-core-ash").region, 0.0, 1.0, b.block.size * 0.5);

      mdl_game._liTileEdge(b.tile, b.block.size).each(ot => {
        if(ot.block() instanceof Router) mdl_draw.drawTileIndicator(ot, false);
      });
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
    };
    exports.updateTile = updateTile;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_router.js loaded.");
});
