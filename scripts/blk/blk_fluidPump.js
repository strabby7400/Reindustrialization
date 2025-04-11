/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidBlock");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.output);
      var pumpSpeed = mdl_data.read_1n1v(db_block.db["param"]["speed"]["base"], blk.name, 0.0);
      blk.stats.add(db_stat.standardPumpSpeed, pumpSpeed, StatUnit.liquidSecond);
    };


    function drawSelectComp(b) {
      var liq = b.tile.floor().liquidDrop;
      if(liq != null) mdl_draw.drawContentIcon(b, liq, b.block.size);
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

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fluidPump.js loaded.");
});
