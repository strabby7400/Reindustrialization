/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Virtual
    /* NOTE: Kills blocks with illegal contents. */
    const updateTile_virtualItem = function(b) {
      if(!(b.block instanceof CoreBlock)) {
        var illegal = false;
        b.items.each(itm => {
          if(mdl_content.isVirt(itm)) illegal = true;
        });

        if(illegal) {
          b.kill();
          mdl_effect.showAt(b, db_effect._invalidPlacement(), 0.0);
          mdl_ui.showInfoFade("@info.reind-info-virtual-item.name");
        };
      };
    };
    exports.updateTile_virtualItem = updateTile_virtualItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_item.js loaded.");
});
