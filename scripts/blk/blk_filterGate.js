/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDistributionGate = require("reind/blk/blk_genericDistributionGate");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.itemCapacity);
    };


    function setBarsComp(blk) {
      blk.removeBar("items");
    };


    function drawSelectComp(b) {
      if(b.sortItem != null) mdl_draw.drawContentIcon(mdl_game.poser_1b(b), b.sortItem, b.block.size);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDistributionGate.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDistributionGate.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      setBarsComp(blk);
    };
    exports.setBars = setBars;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_filterGate.js loaded.");
});
