/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidBlock = require("reind/blk/blk_genericLiquidBlock");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_game = require("reind/mdl/mdl_game");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Component
    function updateTileComp(b) {
      if(Vars.state.rules.reactorExplosions && Mathf.chance(0.004) && b.liquids != null) {
        var liq = b.liquids.current();
        var cond1 = liq.explosiveness > 0.2999 || liq.flammability > 0.2999;
        var cond2 = false;
        if(cond1) mdl_game._liTileRect(b.tile, 1, b.block.size).each(ot => {if(Fires.get(ot.x, ot.y)) cond2 = true});

        if(cond1 && cond2) {
          b.kill();

          var rad = b.block.size / 2 * glb_vars.gasCylinder_explosionRadius;
          var dmg = glb_vars.gasCylinder_explosionDamage;
          var shake = 8.0;

          frag_attack.attack_explosion_noob(mdl_game._pos(1, b), rad, dmg, shake);
        };
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
      blk_genericLiquidBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const draw = function(b) {
      blk_genericLiquidBlock.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericLiquidBlock.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericLiquidStorageBlock.js loaded.");
});
