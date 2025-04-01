/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionBlock");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.itemCapacity);
      blk.stats.remove(db_stat.unloadable);
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.glowReg = mdl_content._reg(b.block, "-glow");
        b.top3Reg = mdl_content._reg(b.block, "-top3");

        b.needCheck = false;
      };

      if(b.power != null) {
        if(b.power.status < 0.96) b.efficiency = 0.0;

        var frac_tg = Math.pow(b.power.status, 24);
        if(frac_tg < 0.04) frac_tg = 0.0;
        b.frac = Mathf.approachDelta(b.frac, frac_tg, 0.01);
      };
    };


    function drawComp(b) {
      mdl_draw.drawFlameRegion(b, b.top3Reg, b.frac);
      mdl_draw.drawHeatRegion(b, b.power.status, b.glowReg);
    };


    function drawLightComp(b) {
      mdl_draw.drawLight(b, b.frac);
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


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawLight = function(b) {
      drawLightComp(b);
    };
    exports.drawLight = drawLight;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_incinerator.js loaded.");
});
