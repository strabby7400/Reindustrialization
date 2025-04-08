/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidStorageBlock");
    const VAR = require("reind/glb/glb_vars");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_text = require("reind/mdl/mdl_text");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.storageType, mdl_text._term("gas"));

      blk.stats.add(db_stat.canExplode, true);
      blk.stats.add(db_stat.explosionRadius, frag_attack._gasExploRad(blk.size) / Vars.tilesize, StatUnit.blocks);
    };


    function updateTileComp(b) {
      var liq = b.liquids.current();
      if(liq != null && liq != Liquids.water && !mdl_content.isGas(liq)) {
        b.kill();
        mdl_effect.showAt(b, db_effect._invalidPlacement(), 0.0);
        mdl_ui.showInfoFade("storage-type-mismatch");
      };
    };


    function acceptLiquidComp(b, ob, liq) {
      if(!mdl_content.isGas(liq)) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      mdl_draw.drawWarningDisk(mdl_game._pos(Vars.world.tile(tx, ty), blk.offset), frag_attack._gasExploRad(blk.size));
    };


    function drawSelectComp(b) {
      mdl_draw.drawWarningDisk(b, frag_attack._gasExploRad(b.block.size));
    };


    function onDestroyedComp(b) {
      if(Vars.state.rules.reactorExplosions) {
        var liq = b.liquids.current();
        if(!mdl_content.isGas(liq)) return;

        var rad = frag_attack._gasExploRad(b.block.size);
        var dmg = frag_attack._gasExploDmg(b.block.size);
        var shake = 8.0;

        frag_attack.atk_explosion_noob(b, rad, dmg, shake);
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
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

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
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const onDestroyed = function(b) {
      onDestroyedComp(b);
    };
    exports.onDestroyed = onDestroyed;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_gasCylinder.js loaded.");
});
