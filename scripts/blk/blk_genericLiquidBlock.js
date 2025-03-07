/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericBlock = require("reind/blk/blk_genericBlock");

    const frag_fluid = require("reind/frag/frag_fluid");
    const frag_heat = require("reind/frag/frag_heat");

    const mdl_corrosion = require("reind/mdl/mdl_corrosion");
    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var matGrpVal = mdl_corrosion.getMaterialGroupValue(blk);
      if(matGrpVal != null) blk.stats.add(db_stat.materialGroup, matGrpVal);

      if(Math.abs(blk.liquidPressure - 1.0) > 0.0001) blk.stats.add(db_stat.fluidPressure, blk.liquidPressure);

      if(db_block.vulnerableToClogging.contains(blk.name)) blk.stats.add(db_stat.vulnerableToClogging, true);

      var fheatCap = mdl_data.read_1n1v(db_block.fluidHeatCapacity, blk.name);
      if(fheatCap != null) blk.stats.add(db_stat.fluidHeatCapacity, fheatCap);
    };

    function updateTileComp(b) {
      if(b.liquids.get(b.liquids.current()) <= 0.0001) b.liquids.reset(b.liquids.current(), 0.0);

      frag_fluid.updateTile_efficiency(b);

      frag_fluid.updateTile_corrosion(b);

      frag_fluid.updateTile_sticky(b);

      frag_heat.updateTile_fluidHeat(b);
    };


    function moveLiquidComp(b, ob, liq) {
      return frag_fluid.moveLiquid_pipe(b, ob, liq);
    };


    function drawComp(b) {
      frag_heat.draw_fluidHeat(b);
    };


    function drawSelectComp(b) {
      frag_heat.drawSelect_fluidHeat(b);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const moveLiquid = function(b, ob, liq) {
      return moveLiquidComp(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericLiquidBlock.js loaded.");
});
