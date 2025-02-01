/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");

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
          db_effect._invalidPlacement().at(b.x, b.y, 0.0);
          new UI().showInfoFade("@info.reind-info-virtual-item.name", 2.0);
        };
      };
    };
    exports.updateTile_virtualItem = updateTile_virtualItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_item.js loaded.");
});
