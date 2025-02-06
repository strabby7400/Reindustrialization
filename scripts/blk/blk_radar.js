/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericProjector = require("reind/blk/blk_genericProjector");

    const ct_blk_radar = require("reind/ct/ct_blk_radar");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get range
      blk.stats.add(Stat.range, blk.fogRadius, StatUnit.blocks);
    };


    function updateTileComp(b) {
      if(b.efficiency <= 0.0001) return;

      var cd = ct_blk_radar.accB_cd(b, "r");
      var thr = ct_blk_radar.accB_thr(b, "r");

      if(cd >= thr) {
        cd %= thr;

        var rad = b.block.fogRadius * Vars.tilesize * b.progress * b.efficiency;
        var li_unit = mdl_geometry.getUnits(mdl_geometry.poser_1b(b), rad);
        li_unit.each(unit => {
          if(mdl_content.isEnemy(unit, b.team)) {
            unit.apply(Vars.content.statusEffect("reind-sta-spec-radar-detection"), thr * 0.5);
            mdl_effect.showAt(unit, db_effect._radarDetectionApply(), 0.0);
          };
        });

        mdl_effect.showAt_ldm(b, db_effect._radarScan(rad, b.block.size, ct_blk_radar.accB_scanColor(b, "r")), 0.0);
        mdl_effect.showAt(b, db_effect._craftGasLarge());
        mdl_effect.playAt(b, "se-craft-radar");
      };
      cd += 1;
      ct_blk_radar.accB_cd(b, "w", cd);
    };


    function drawSelectComp(b) {
      var cd = ct_blk_radar.accB_cd(b, "r");
      var thr = ct_blk_radar.accB_thr(b, "r");

      // Draw reload progress
      mdl_draw.drawProgressBar(mdl_geometry.poser_1b(b), Math.min(cd / thr, 1.0), Pal.accent, b.block.size);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericProjector.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericProjector.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_radar.js loaded.");
});
