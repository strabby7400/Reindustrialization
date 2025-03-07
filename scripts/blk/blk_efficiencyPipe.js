/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fluidPipe = require("reind/blk/blk_fluidPipe");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.liquidCapacity);
    };


    function setBarsComp(blk) {
      blk.removeBar("liquid");
    };


    function acceptLiquidComp(b, ob, liq) {
      var liq_tg = mdl_content.getContent_nm(mdl_data.read_1n1v(db_block.liquidMap, b.block.name));
      return liq == liq_tg;
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_fluidPipe.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_fluidPipe.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      setBarsComp(blk);
    };
    exports.setBars = setBars;


    const acceptLiquid = function(b, ob, liq) {
      if(!acceptLiquidComp(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const moveLiquid = function(b, ob, liq) {
      return blk_fluidPipe.moveLiquid(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      blk_fluidPipe.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_fluidPipe.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_efficiencyPipe.js loaded.");
});
