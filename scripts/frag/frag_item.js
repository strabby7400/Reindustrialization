/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_reaction = require("reind/mdl/mdl_reaction");
    const mdl_ui = require("reind/mdl/mdl_ui");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_item = require("reind/db/db_item");
  // End


  // Part: Transport
    const addItem = function(b, itm, amt) {
      if(amt == null) amt = 1;
      if(b == null || item == null) return false;

      for(let i = 0; i < amt; i++) {
        if(b.acceptItem(b, itm)) b.offload(itm);
      };

      return true;
    };
    exports.addItem = addItem;


    const addItemBatch = function(b, batch) {
      if(b == null || batch == null) return false;

      var cap = batch.length;
      if(cap == 0) return false;
      for(let i = 0; i < cap; i += 3) {
        var itm = mdl_content._ct_gn(batch[i]);
        var amt = batch[i + 1];
        var p = batch[i + 2];

        if(b.items != null && itm instanceof Item) {
          for(let j = 0; j < amt; j++) {if(b.acceptItem(b, itm) && Mathf.chance(p)) b.items.add(itm, 1)};
        };
      };

      return true;
    };
    exports.addItemBatch = addItemBatch;


    const dumpItem = function(b, obs, itm) {
      if(b.items == null || b.items.total() == 0 || obs.length == 0) return false;
      if(itm != null && !b.items.has(itm)) return false;

      var cdump = b.cdump;
      var li_itm = Vars.content.items();
      var cap = obs.length;

      if(itm == null) {
        for(let i = 0; i < cap; i++) {
          var ob = obs[(i + cdump) % cap];

          var cap1 = li_itm.size;
          for(let j = 0; j < cap1; j++) {
            if(!b.items.has(j)) continue;

            var tmpItm = li_itm.items[j];
            if(ob.acceptItem(b, tmpItm) && b.canDump(ob, tmpItm)) {
              ob.handleItem(b, tmpItm);
              b.items.remove(tmpItm, 1);
              b.incrementDump(cap);
              return true;
            };
          };

          b.incrementDump(cap);
        };
      } else {
        for(let i = 0; i < cap; i++) {
          var ob = obs[(i + cdump) % cap];

          if(ob.acceptItem(b, itm) && b.canDump(ob, itm)) {
            ob.handleItem(b, itm);
            b.items.remove(itm, 1);
            b.incrementDump(cap);
            return true;
          };

          b.incrementDump(cap);
        };
      };

      return false;
    };
    exports.dumpItem = dumpItem;


    const _transEnd = function(b, ob, maxConsecutive) {
      if(b == null || ob == null) return;
      if(!ob.block.instantTransfer) return ob;

      var rot = b.relativeTo(ob);
      var transEnd = "pending";
      var ot = ob.tile;
      var count = 0;
      while(transEnd == "pending") {
        transEnd = (ot == null) ? null : ot.build;
        if(transEnd != null && transEnd.block.instantTransfer && transEnd.team == b.team) {
          ot = transEnd.tile.nearby(rot);
          transEnd = "pending";
          count++;
        };
      };

      var limit = (maxConsecutive == null) ? VAR.transfer_junctionMaxConsecutive : maxConsecutive;
      return (count > limit - 1) ? null : transEnd;
    };
    exports._transEnd = _transEnd;
  // End


  // Part: Reaction
    const updateTile_exposed = function(b) {
      if(b.items == null || b.block.itemCapacity == 0 || b.block instanceof CoreBlock || Mathf.chance(0.9)) return;
      if(!mdl_content.isExposed(b.block)) return;

      b.items.each(itm => mdl_reaction.handleReaction(b, itm, Vars.content.liquid("reind-gas-misc-air"), 10.0));
    };
    exports.updateTile_exposed = updateTile_exposed;
  // End


  // Part: Virtual
    const updateTile_virtualItem = function(b) {
      if(b.block.itemCapacity == 0 || b.block instanceof CoreBlock || Mathf.chance(0.96)) return;
      if(db_item.db["virtual"]["whitelist"].includes(b.block.name)) return;

      var illegal = false;
      b.items.each(itm => {
        if(mdl_content.isVirt(itm)) illegal = true;
      });

      if(illegal) {
        b.kill();
        mdl_effect.showAt(b, db_effect._invalidPlacement(), 0.0);
        mdl_ui.showInfoFade("virtual-item");
      };
    };
    exports.updateTile_virtualItem = updateTile_virtualItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_item.js loaded.");
});
