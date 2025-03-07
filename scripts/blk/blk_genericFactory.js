/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericBlock = require("reind/blk/blk_genericBlock");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_game = require("reind/mdl/mdl_game");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Component
    function updateTileComp(b) {
      if(Mathf.chance(0.01) && b.liquids != null) {
        var amt_pres = b.liquids.get(Vars.content.liquid("reind-effc-cond-pressure"));
        var amt_vac = b.liquids.get(Vars.content.liquid("reind-effc-cond-vacuum"));
        var cap = b.block.liquidCapacity;
        var p = Math.max(amt_pres / cap * 0.3, amt_vac / cap * 0.4);

        if(Mathf.chance(p) && b.health / b.maxHealth < 0.5) {
          b.kill();

          var rad = b.block.size / 2 * glb_vars.gasCylinder_explosionRadius;
          var dmg = glb_vars.gasCylinder_explosionDamage;
          var shake = 8.0;

          frag_attack.attack_explosion(mdl_game.poser_1b(b), rad, dmg, shake);
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
      blk_genericBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_genericFactory.js loaded.");
});
