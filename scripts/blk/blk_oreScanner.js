/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericMiner = require("reind/blk/blk_genericMiner");
    const env_depthOre = require("reind/env/env_depthOre");

    const ct_blk_oreScanner = require("reind/ct/ct_blk_oreScanner");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get range
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r != null) blk.stats.add(Stat.range, r, StatUnit.blocks);
    };


    function updateTileComp(b) {
      if(b.efficiency <= 0.9999) return;

      var cd = ct_blk_oreScanner.accB_cd(b, "r");
      var thr = ct_blk_oreScanner.accB_thr(b, "r");

      if(cd >= thr) {
        cd %= thr;

        var r = mdl_database.read_1n1v(db_block.genericRange, b.block.name);
        if(r != null) {
          mdl_effect.atL_1pos(b, db_effect._oreScannerScan(r, b.block.size, ct_blk_oreScanner.accB_scanColor(b, "r")), 0.0);
          mdl_effect.play_1pos(b, "se-craft-ore-scanner");
        };
      };

      cd += 1;
      ct_blk_oreScanner.accB_cd(b, "w", cd);
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_database.read_1n1v(db_block.genericRange, blk.name);
      if(r != null) mdl_draw.drawPlaceRect(blk, Vars.world.tile(tx, ty), valid, r, true);
    };


    function drawComp(b) {
      var r = mdl_database.read_1n1v(db_block.genericRange, b.block.name);
      if(r == null) return;

      if(b.efficiency < 0.9999) return;

      var cd = ct_blk_oreScanner.accB_cd(b, "r");
      var thr = ct_blk_oreScanner.accB_thr(b, "r");
      var a = Math.pow(1.0 - cd / thr, 2);

      var list_ot = mdl_geometry.getTiles_rectS(b.tile, r, b.block.size);
      list_ot.each(ot => {
        var ov = ot.overlay();

        if(ov != null && ov.name.includes("reind-env-ore-depth-")) {
          env_depthOre.drawBase(ov, ot, a);
        };
      });
    };


    function drawSelectComp(b) {
      var r = mdl_database.read_1n1v(db_block.genericRange, b.block.name);
      if(r != null) mdl_draw.drawSelectRect(b, r, true);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericMiner.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericMiner.updateTile(b);

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
  Log.info("REIND:blk_oreScanner.js loaded.");
});
