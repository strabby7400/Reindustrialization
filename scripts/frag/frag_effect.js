/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Gas
    /* NOTE: Creates a gas ejection effect with assigned rotation. Cancels if blocked. */
    const updateTile_gasSideRelease = function(p, b, off_rot, rad, cone, scl, size, rev) {
      if(!Mathf.chance(mdl_effect.getP_frac(p, b.efficiency))) return;

      var rot_fi = mdl_game.getRotation_diver(b.rotation, off_rot);
      var blocked = false;
      mdl_game.getTiles_rot(b.tile, rot_fi, b.block.size).each(ot => {
        if(ot.solid() || (ot.build != null && ot.build.block instanceof LiquidJunction)) blocked = true;
      });
      if(blocked) return;

      var off_rad = Vars.tilesize * 0.5 * (b.block.size + 1);

      mdl_effect.showAt(b, db_effect._gasSideRelease(rad, off_rad, cone, scl, size, rev), rot_fi * 90.0);
    };
    exports.updateTile_gasSideRelease = updateTile_gasSideRelease;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_effect.js loaded.");
});
