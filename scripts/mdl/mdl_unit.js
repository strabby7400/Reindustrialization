/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Param
    const getElevation = function(unit) {
      if(unit == null) return 0.0;

      return Mathf.clamp(unit.elevation, unit.type.shadowElevation, 1.0) * unit.type.shadowElevationScl * (1.0 - unit.drownTime);
    };
    exports.getElevation = getElevation;
  // End


  // Part: Move
    /*
      NOTE:
      Lets a unit move to the assigned position.
      {len} is the circular distance at which the unit stops.
      {smooth} is the rate at which the unit slows down.
      {keepDst} determines if the unit will move outwards if distance is smaller than circle length.
    */
    const moveTo = function(unit, pos_in, len, smooth, keepDst) {
      if(len == null) len = 0.0;
      if(smooth == null) smooth = 20.0;
      if(keepDst == null) keepDst = true;
      if(unit == null || pos_in == null) return;
      if(unit.isPlayer()) return;

      unit.controller().moveTo(pos_in, len, smooth, keepDst, null);
    };
    exports.moveTo = moveTo;


    /* NOTE: Lets a unit rotate towards the assigned position. */
    const lookAt = function(unit, pos_gn) {
      if(unit == null || pos_gn == null) return;

      var pos = mdl_game._pos(6, pos_gn);

      unit.lookAt(pos.x, pos.y);
    };
    exports.lookAt = lookAt;


    /* NOTE: Just like {lookAt}, but the weapons will point at the position too. */
    const aimAt = function(unit, pos_gn) {
      if(unit == null || pos_gn == null) return;

      var pos = mdl_game._pos(6, pos_gn);

      unit.aimLook(pos.x, pos.y);
    };
    exports.aimAt = aimAt;
  // End


  // Part: Interact
    /* NOTE: Lets a unit discards its items if mismatched. */
    const selectItem = function(unit, itm) {
      if(unit == null || itm == null) return;

      if(unit.item() != itm) unit.clearItem();
    };
    exports.selectItem = selectItem;


    /* NOTE: Lets a unit interact with the item module of a building. Does nothing if item is mismatched. */
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
