/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidStorageBlock = require("reind/blk/blk_genericLiquidStorageBlock");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get storage type
      blk.stats.add(db_stat.storageType, "@term.reind-term-gas.name");

      // Get explosion stats
      blk.stats.add(db_stat.canExplode, true);
      blk.stats.add(db_stat.explosionRadius, blk.size / 2 * glb_vars.gasCylinder_explosionRadius / Vars.tilesize, StatUnit.blocks);
    };


    function updateTileComp(b) {
      // Booms if illegal input
      var liq = b.liquids.current();
      if(liq != null && liq != Liquids.water && !mdl_content.isGas(liq)) {
        b.kill();
        db_effect._invalidPlacement().at(b.x, b.y, 0.0);
        new UI().showInfoFade("@info.reind-info-storage-type-mismatch.name", 2.0);
      };
    };


    function acceptLiquidComp(b, ob, liq) {
      if(!mdl_content.isGas(liq)) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      // Draw explosion range
      var rad = blk.size / 2 * glb_vars.gasCylinder_explosionRadius;
      if(rad != null) mdl_draw.drawWarningDisk_1blk(blk, Vars.world.tile(tx, ty), rad);
    };


    function drawSelectComp(b) {
      // Draw explosion range
      var rad = b.block.size / 2 * glb_vars.gasCylinder_explosionRadius;
      if(rad != null) mdl_draw.drawWarningDisk_1b(b, rad);
    };


    function onDestroyedComp(b) {
      // Create explosion
      if(Vars.state.rules.reactorExplosions) {
        var liq = b.liquids.current();
        if(!mdl_content.isGas(liq)) return;

        var rad = b.block.size / 2 * glb_vars.gasCylinder_explosionRadius;
        var dmg = glb_vars.gasCylinder_explosionDamage;
        var shake = 8.0;

        frag_attack.attack_explosion_1b(b, rad, dmg, shake);
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericLiquidStorageBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidStorageBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const acceptLiquid = function(b, ob, liq) {
      if(!acceptLiquidComp(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      blk_genericLiquidStorageBlock.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericLiquidStorageBlock.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const onDestroyed = function(b) {
      onDestroyedComp(b);
    };
    exports.onDestroyed = onDestroyed;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_gasCylinder.js loaded.");
});
