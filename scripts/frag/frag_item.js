/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_reaction = require("reind/mdl/mdl_reaction");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_item = require("reind/db/db_item");
  // End


  // Part: Transport
    /* NOTE: Dumps selected item from {b} to {ob}, set {itm} to null to dump anything. */
    const dumpItem = function(b, li_ob, itm) {
      if(b.items == null || b.items.total() == 0 || li_ob.size == 0) return false;
      if(itm != null && !b.items.has(itm)) return false;

      var cdump = b.cdump;
      var li_itm = Vars.content.items();

      if(itm == null) {
        for(let i = 0; i < li_ob.size; i++) {
          var ob = li_ob.get((i + cdump) % li_ob.size);

          for(let j = 0; j < li_itm.size; j++) {
            if(!b.items.has(j)) continue;

            var tmpItm = li_itm.items[j];
            if(ob.acceptItem(b, tmpItm) && b.canDump(ob, tmpItm)) {
              ob.handleItem(b, tmpItm);
              b.items.remove(tmpItm, 1);
              b.incrementDump(li_ob.size);
              return true;
            };
          };

          b.incrementDump(li_ob.size);
        };
      } else {
        for(let i = 0; i < li_ob.size; i++) {
          var ob = li_ob.get((i + cdump) % li_ob.size);

          if(ob.acceptItem(b, itm) && b.canDump(ob, itm)) {
            ob.handleItem(b, itm);
            b.items.remove(itm, 1);
            b.incrementDump(li_ob.size);
            return true;
          };

          b.incrementDump(li_ob.size);
        };
      };

      return false;
    };
    exports.dumpItem = dumpItem;
  // End


  // Part: Reaction
    const updateTile_exposed = function(b) {
      if(b.block instanceof CoreBlock) return;
      if(!db_block.exposedToAir.contains(b.block.name)) return;
      if(b.items == null) return;

      b.items.each(itm => mdl_reaction.handleReaction(b, itm, Vars.content.liquid("reind-gas-misc-air")));
    };
    exports.updateTile_exposed = updateTile_exposed;
  // End


  // Part: Virtual
    /* NOTE: Kills blocks with illegal contents. */
    const updateTile_virtualItem = function(b) {
      if(b.block instanceof CoreBlock) return;
      if(db_item.virtWhitelist.contains(b.block.name)) return;

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
    exports.updateTile_virtualItem = updateTile_virtualItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_item.js loaded.");
});
