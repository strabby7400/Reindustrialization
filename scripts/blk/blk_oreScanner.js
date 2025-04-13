/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericMiner");
    const env_depthOre = require("reind/env/env_depthOre");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      blk.stats.add(Stat.range, r, StatUnit.blocks);
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5);
        b.scanEff = db_effect._oreScannerScan(b.r, b.block.size, mdl_data.read_1n1v(db_block.db["param"]["color"]["base"], b.block.name, Color.white));

        b.tiles.clear();
        mdl_game._tsRect(b.tile, b.r, b.block.size).forEach(ot => {if(mdl_content.isDepthOre(ot.overlay())) b.tiles.push(ot)});

        b.needCheck = false;
      };

      if(b.efficiency > 0.9999) {
        b.prog += b.warmup * b.edelta();

        if(b.prog > b.thr) {
          b.prog %= b.thr;

          b.a = 1.0;

          mdl_effect.showAt(b, b.scanEff, 0.0);
          mdl_effect.playAt(b, "se-craft-ore-scanner", 1.0, 1.0, 0.1);
        };
      };

      b.a = Mathf.approachDelta(b.a, 0.0, 0.008);
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      mdl_draw.drawPlaceRect(blk, Vars.world.tile(tx, ty), valid, r, true);
    };


    function drawComp(b) {
      if(b.a > 0.01) {
        b.tiles.forEach(ot => {
          var ov = ot.overlay();

          if(mdl_content.isDepthOre(ov)) env_depthOre.drawBase(ov, ot, b.a);
        });
      };
    };


    function drawSelectComp(b) {
      mdl_draw.drawSelectRect(b, b.r, true);
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


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


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
  Log.info("REIND: blk_oreScanner.js loaded.");
});
