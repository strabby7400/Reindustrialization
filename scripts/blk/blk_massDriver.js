/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionBlock");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var damage = mdl_data.read_1n1v(db_block.db["param"]["damage"]["base"], blk.name, 0.0);
      blk.stats.add(Stat.damage, damage);

      var rad = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], blk.name, 40.0);
      blk.stats.add(db_stat.impactRange, rad / Vars.tilesize, StatUnit.blocks);
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.impactRad = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], b.block.name, 40.0);

        b.needCheck = false;
      };

      // Create impact wave
      if(b.reloadCounter > 0.9999) {
        var size = b.block.size;
        var time = b.block.reload;

        frag_attack.atk_impact(b, b.impactRad, frag_attack._impactDmg(size, time), frag_attack._impactDur(time));

        mdl_effect.dustAt_ldm(b, frag_attack._impactDustRad(size), Math.pow(size, 2));
      };
    };


    function initComp(blk) {
      Events.run(MusicRegisterEvent, () => {
        var damage = mdl_data.read_1n1v(db_block.db["param"]["damage"]["base"], blk.name, 0.0);
        blk.bullet.damage = damage;
        blk.bullet.collidesAir = false;
      });
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var impactRad = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], blk.name, 40.0);
      mdl_draw.drawCirclePulse(mdl_game._pos(Vars.world.tile(tx, ty), blk.offset, true), impactRad);
    };


    function drawSelectComp(b) {
      mdl_draw.drawCirclePulse(b, b.impactRad);

      mdl_draw.drawProgressCircle(b, 1.0 - b.reloadCounter, mdl_game._radSize(b.block.size), Pal.accent);
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


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_massDriver.js loaded.");
});
