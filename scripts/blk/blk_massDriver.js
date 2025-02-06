/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDistributionBlock = require("reind/blk/blk_genericDistributionBlock");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get bullet damage
      var damage = mdl_database.read_1n1v(db_block.massDriverBulletDamage, blk.name);
      if(damage != null) blk.stats.add(Stat.damage, damage);

      // Get impact range
      var rad = mdl_database.read_1n1v(db_block.impactRange, blk.name);
      if(rad != null) blk.stats.add(db_stat.impactRange, rad / Vars.tilesize, StatUnit.blocks);
    };


    function updateTileComp(b) {
      // Update impact
      if(b.reloadCounter >= 0.9999) {
        var rad = mdl_database.read_1n1v(db_block.impactRange, b.block.name);
        if(rad != null) {
          var dmg = b.block.size * b.block.reload * 0.7;
          var dur = b.block.reload * 0.5;

          frag_attack.attack_impact(mdl_geometry.poser_1b(b), rad, dmg, dur);
        };
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      // Draw impact range
      var rad = mdl_database.read_1n1v(db_block.impactRange, blk.name);
      if(rad != null) mdl_draw.drawCirclePulse(mdl_geometry.poser_1t(Vars.world.tile(tx, ty), blk.offset), rad);
    };


    function drawSelectComp(b) {
      // Draw impact range
      var rad = mdl_database.read_1n1v(db_block.impactRange, b.block.name);
      if(rad != null) mdl_draw.drawCirclePulse(mdl_geometry.poser_1b(b), rad);

      // Draw reload progress
      mdl_draw.drawProgressBar(mdl_geometry.poser_1b(b), Math.min(1.0 - b.reloadCounter, 1.0), Pal.accent, b.block.size);
    };


    function setupComp(blk) {
      Events.run(ClientLoadEvent, () => {
        var damage = mdl_database.read_1n1v(db_block.massDriverBulletDamage, blk.name);
        if(damage != null) blk.bullet.damage = damage;
        blk.bullet.collidesAir = false;
      });
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDistributionBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDistributionBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const setup = function(blk) {
      setupComp(blk);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_massDriver.js loaded.");
});
