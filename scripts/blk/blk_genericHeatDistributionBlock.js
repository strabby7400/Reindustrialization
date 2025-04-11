/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericHeatBlock");

    const frag_heat = require("reind/frag/frag_heat");

    const mdl_heat = require("reind/mdl/mdl_heat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.liquidCapacity);
    };


    function updateTileComp(b) {
      frag_heat.updateTile_hcond(b);
    };


    function acceptLiquidComp(b, ob, liq) {
      if(!frag_heat.acceptLiquid_hcond(b, ob, liq)) return false;

      return true;
    };


    function drawComp(b) {
      frag_heat.draw_heat(b);
    };


    function drawSelectComp(b) {
      frag_heat.drawSelect_heat(b);
    };


    function onDestroyedComp(b) {
      if(b.sound != null) b.sound.stop();
      Damage.dynamicExplosion(b.x, b.y, mdl_heat._heatFrac(b) * 0.15, mdl_heat._heatFrac(b) * 1.5, 0.0, b.block.size * Vars.tilesize / 2.0, Vars.state.rules.damageExplosions, b.block.destroyEffect);
      if(b.block.createRubble && !b.floor().solid && !b.floor().isLiquid) Effect.rubble(b.x, b.y, b.block.size);
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

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      PARENT.setBars(blk);
    };
    exports.setBars = setBars;


    const acceptLiquid = function(b, ob, liq) {
      if(!acceptLiquidComp(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const onDestroyed = function(b) {
      onDestroyedComp(b);
    };
    exports.onDestroyed = onDestroyed;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericHeatDistributionBlock.js loaded.");
});
