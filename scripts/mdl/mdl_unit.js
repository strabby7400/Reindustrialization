/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Param
    const _elev = function(unit) {
      if(unit == null) return 0.0;

      return Mathf.clamp(unit.elevation, unit.type.shadowElevation, 1.0) * unit.type.shadowElevationScl * (1.0 - unit.drownTime);
    };
    exports._elev = _elev;
  // End


  // Part: Move
    const moveTo = function(unit, pos_in, len, smooth, keepDst) {
      if(len == null) len = 0.0;
      if(smooth == null) smooth = 20.0;
      if(keepDst == null) keepDst = true;
      if(unit == null || pos_in == null) return;
      if(unit.isPlayer()) return;

      unit.controller().moveTo(pos_in, len, smooth, keepDst, null);
    };
    exports.moveTo = moveTo;


    const lookAt = function(unit, pos_gn) {
      if(unit == null || pos_gn == null) return;

      var pos = mdl_game._pos(pos_gn);

      unit.lookAt(pos.x, pos.y);
    };
    exports.lookAt = lookAt;


    const aimAt = function(unit, pos_gn) {
      if(unit == null || pos_gn == null) return;

      var pos = mdl_game._pos(pos_gn);

      unit.aimLook(pos.x, pos.y);
    };
    exports.aimAt = aimAt;
  // End


  // Part: Interact
    const selectItem = function(unit, itm) {
      if(unit == null || itm == null) return false;

      if(unit.item() != itm) {
        unit.clearItem()
        return true;
      };

      return false;
    };
    exports.selectItem = selectItem;


    const addItem = function(unit, itm, amt) {
      if(amt == null) amt = 1;
      if(unit == null || itm == null) return false;

      var amt_trans = Math.min(amt, unit.type.itemCapacity - unit.stack.amount);
      if(amt_trans > 0) {
        unit.stack.addItem(itm, amt_trans);
        return true;
      };

      return false;
    };
    exports.addItem = addItem;


    const addItemBatch = function(unit, batch) {
      if(unit == null || batch == null) return false;

      var cap = batch.size;
      if(cap == 0) return false;
      for(let i = 0; i < cap; i += 3) {
        var itm = mdl_content._ct_gn(batch.get(i));
        var amt = batch.get(i + 1);
        var p = batch.get(i + 2);

        if(unit.acceptsItem(itm)) {
          for(let j = 0; j < amt; j++) {if(unit.acceptsItem(itm) && Mathf.chance(p)) unit.addItem(itm)};

          return true;
        };
      };

      return false;
    };
    exports.addItemBatch = addItemBatch;


    const transferItem = function(b, unit, mode, itm, rad, amt) {
      if(rad == null) rad = 999999.0;
      if(amt == null) amt = 999999;
      if(b == null || b.items == null || unit == null) return 0;
      if(mode != "take" && mode != "put") return 0;

      if(itm == null) itm = b.items.first();
      if(itm == null) return 0;

      if(!unit.within(b, rad)) return 0;

      var amt_trans = 0;
      if(mode == "take" && (!unit.hasItem() || unit.item() == itm)) {
        amt_trans = Math.min(amt, b.items.get(itm), unit.type.itemCapacity - unit.stack.amount);
        Call.takeItems(b, itm, amt_trans, unit);
      };
      if(mode == "put" && unit.hasItem() && unit.item() == itm) {
        amt_trans = Math.max(Math.min(amt, unit.stack.amount), 0);
        Call.transferItemTo(unit, unit.item(), amt_trans, unit.x, unit.y, b);
      };

      return amt_trans;
    };
    exports.transferItem = transferItem;


    const takeItem = function(b, unit, itm, rad, amt) {
      selectItem(unit, itm);
      return transferItem(b, unit, "take", itm, rad, amt);
    };
    exports.takeItem = takeItem;


    const putItem = function(b, unit, itm, rad, amt) {
      selectItem(unit, itm);
      return transferItem(b, unit, "put", itm, rad, amt);
    };
    exports.putItem = putItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_unit.js loaded.");
});
