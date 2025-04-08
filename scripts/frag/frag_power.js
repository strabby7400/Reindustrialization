/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_fluid = require("reind/db/db_fluid");
  // End


  // Part: Short Circuit
    const canPlaceOn_shortCircuit = function(blk, t, team, rot) {
      if(mdl_content.canShortCircuit(blk) && t != null && t.floor().liquidDrop != null && mdl_content.isConductive(t.floor().liquidDrop)) {
        mdl_draw.drawPlaceText(blk, t, false, mdl_text._info("short-circuit-placement"), 0.0);
        return false;
      };

      return true;
    };
    exports.canPlaceOn_shortCircuit = canPlaceOn_shortCircuit;
  // End


  // Part: Voltage Tier
    const _voltTier = function(blk) {
      var tier = "none";
      var nm = blk.name;

      if(blk.hasPower) {
        if(db_block.db["power"]["tier"]["hv"].includes(nm)) {tier = "hv"}
        else if(db_block.db["power"]["tier"]["ehv"].includes(nm)) {tier = "ehv"}
        else {tier = "lv"};
      };

      return tier;
    };
    exports._voltTier = _voltTier;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_power.js loaded.");
});
