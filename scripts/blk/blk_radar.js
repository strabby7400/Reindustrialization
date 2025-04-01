/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericProjector");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(Stat.range, blk.fogRadius, StatUnit.blocks);
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.scanColor = mdl_data.read_1n1v(db_block.db["param"]["color"]["base"], b.block.name, Color.white);

        b.needCheck = false;
      };

      if(b.efficiency > 0.0) {
        b.prog += b.edelta();

        if(b.prog > b.thr) {
          b.prog %= b.thr;

          var rad = b.block.fogRadius * Vars.tilesize * b.progress * b.efficiency;
          mdl_game._liUnitEnemy(b, rad, b.team).each(unit => {
            unit.apply(Vars.content.statusEffect("reind-sta-spec-radar-detection"), b.thr * 0.5);

            mdl_effect.showAt(unit, db_effect._radarDetectionApply(), 0.0);
          });

          mdl_effect.showAt_ldm(b, db_effect._radarScan(rad, b.block.size, b.scanColor), 0.0);
          mdl_effect.showAt(b, db_effect._craftGasLarge());
          mdl_effect.playAt(b, "se-craft-radar", 1.0, 1.0, 0.1);
        };
      };
    };


    function drawSelectComp(b) {
      mdl_draw.drawProgressBar(b, Mathf.clamp(b.prog / b.thr), Pal.accent, b.block.size);
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


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_radar.js loaded.");
});
