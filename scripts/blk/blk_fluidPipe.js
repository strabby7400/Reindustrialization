/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidDistributionBlock");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_flow = require("reind/mdl/mdl_flow");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var pipeDm = mdl_flow._pipeDm(blk);
      blk.stats.add(db_stat.pipeDiameter, pipeDm);

      var rough = mdl_flow._rough(blk);
      blk.stats.add(db_stat.pipeRoughness, rough);
    };


    function moveLiquidComp(b, ob, liq) {
      return frag_fluid.moveLiquid_pipe(b, ob, liq);
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


    const acceptLiquid = function(b, ob, liq) {
      if(!PARENT.acceptLiquid(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const moveLiquid = function(b, ob, liq) {
      return moveLiquidComp(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fluidPipe.js loaded.");
});
