/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidBlock = require("reind/blk/blk_genericLiquidBlock");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get standard pump speed
      blk.stats.remove(Stat.output);
      var pumpSpeed = mdl_database.read_1n1v(db_block.pumpSpeed, blk.name);
      if(pumpSpeed != null) blk.stats.add(db_stat.standardPumpSpeed, pumpSpeed, StatUnit.liquidSecond);
    };


    function drawSelectComp(b) {
      // Draw output content
      var liq = b.tile.floor().liquidDrop;
      if(liq != null) mdl_draw.drawContentIcon_1b(b, liq);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericLiquidBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const moveLiquid = function(b, ob, liq) {
      return blk_genericLiquidBlock.moveLiquid(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      blk_genericLiquidBlock.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericLiquidBlock.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_fluidPump.js loaded.");
});
