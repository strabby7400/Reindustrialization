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
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.storageType, "@term.reind-term-gas.name");

      blk.stats.add(db_stat.canExplode, true);
      blk.stats.add(db_stat.explosionRadius, blk.size / 2 * glb_vars.gasCylinder_explosionRadius / Vars.tilesize, StatUnit.blocks);
    };


    function updateTileComp(b) {
      var liq = b.liquids.current();
      if(liq != null && liq != Liquids.water && !mdl_content.isGas(liq)) {
        b.kill();
        mdl_effect.showAt(b, db_effect._invalidPlacement(), 0.0);
        mdl_ui.showInfoFade("@info.reind-info-storage-type-mismatch.name");
      };
    };


    function acceptLiquidComp(b, ob, liq) {
      if(!mdl_content.isGas(liq)) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var rad = blk.size / 2 * glb_vars.gasCylinder_explosionRadius;
      if(rad != null) mdl_draw.drawWarningDisk(mdl_geometry.poser_1t(Vars.world.tile(tx, ty), blk.offset), rad);
    };


    function drawSelectComp(b) {
      var rad = b.block.size / 2 * glb_vars.gasCylinder_explosionRadius;
      if(rad != null) mdl_draw.drawWarningDisk(mdl_geometry.poser_1b(b), rad);
    };


    function onDestroyedComp(b) {
      if(Vars.state.rules.reactorExplosions) {
        var liq = b.liquids.current();
        if(!mdl_content.isGas(liq)) return;

        var rad = b.block.size / 2 * glb_vars.gasCylinder_explosionRadius;
        var dmg = glb_vars.gasCylinder_explosionDamage;
        var shake = 8.0;

        frag_attack.attack_explosion(mdl_geometry.poser_1b(b), rad, dmg, shake);
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
