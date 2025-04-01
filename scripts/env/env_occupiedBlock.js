/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_mapBlock");

    const mdl_effect = require("reind/mdl/mdl_effect");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Component
    function collisionComp(b, bul) {
      if(bul != null && bul.team != Team.derelict) b.lastDamage = bul.team;

      return b.super$collision(bul);
    };


    function onDestroyedComp(b) {
      Damage.dynamicExplosion(b.x, b.y, 0.0, 0.0, 0.0, b.block.size * Vars.tilesize * 0.5, Vars.state.rules.damageExplosions);
      mdl_effect.showAt(b, db_effect._recipeChange(b.block.size, b.lastDamage.color), 0.0);
    };


    function afterDestroyedComp(b) {
      if(!Vars.net.client()) b.tile.setBlock(b.block, b.lastDamage);
      Core.app.post(() => b.tile.setNet(b.block, b.lastDamage, 0));
    };


    function drawComp(b) {
      b.drawTeamTop();
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
    };
    exports.setStats = setStats;


    const updateTile = function(b) {

    };
    exports.updateTile = updateTile;


    const collision = function(b, bul) {
      return collisionComp(b, bul);
    };
    exports.collision = collision;


    const onDestroyed = function(b) {
      onDestroyedComp(b);
    };
    exports.onDestroyed = onDestroyed;


    const afterDestroyed = function(b) {
      afterDestroyedComp(b);
    };
    exports.afterDestroyed = afterDestroyed;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_occupiedBlock.js loaded.");
});
