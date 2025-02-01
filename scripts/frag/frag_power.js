/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Short Circuit
    /* NOTE: If the building can short-circuit, it cannot be placed in conductive liquids. */
    const canPlaceOn_shortCircuit = function(blk, t, team, rot) {
      if(mdl_content.canShortCircuit(blk) && t != null && t.floor().liquidDrop != null && mdl_content.isConductive(t.floor().liquidDrop)) {
        mdl_draw.drawPlaceText(blk, t, false, Core.bundle.get("info.reind-info-short-circuit-placement.name"), 0.0);
        return false;
      };

      return true;
    };
    exports.canPlaceOn_shortCircuit = canPlaceOn_shortCircuit;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_power.js loaded.");
});
