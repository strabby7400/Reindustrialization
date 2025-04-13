/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_math = require("reind/mdl/mdl_math");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Param
    const _elev = function(unit) {
      return (unit == null) ? 0.0 : Mathf.clamp(unit.elevation, unit.type.shadowElevation, 1.0) * unit.type.shadowElevationScl * (1.0 - unit.drownTime);
    };
    exports._elev = _elev;


    const _ctrl = function(unit) {
      var ctrl = null;
      try {ctrl = unit.controller()} catch(err) {ctrl = unit.controller};

      return ctrl;
    };
    exports._ctrl = _ctrl;
  // End


  // Part: Move
    /*
     * NOTE:
     *
     * The unit will directly move to the target position.
     */
    const moveTo = function(unit, posi, len, smooth, keepDst) {
      if(posi == null || !mdl_content.isAiReady(unit)) return;

      if(len == null) len = 0.0;
      if(smooth == null) smooth = unit.flying ? 30.0 : 2.0;
      if(keepDst == null) keepDst = true;

      _ctrl(unit).moveTo(posi, len, smooth, keepDst, null);
    };
    exports.moveTo = moveTo;


    /*
     * NOTE:
     *
     * The unit will circle around the target position.
     */
    const circle = function(unit, posi, rad) {
      if(posi == null || !mdl_content.isAiReady(unit)) return;

      if(rad == null) rad = 0.0;

      _ctrl(unit).circle(posi, len);
    };
    exports.circle = circle;


    /*
     * NOTE:
     *
     * The unit will turn toward the target position.
     */
    const lookAt = function(unit, pos_gn, shouldAim) {
      if(pos_gn == null || !mdl_content.isAiReady(unit)) return;

      if(shouldAim == null) shouldAim = false;

      var pos = mdl_game._pos(pos_gn);

      if(!shouldAim) {
        unit.lookAt(pos.x, pos.y);
      } else {
        unit.aimLook(pos.x, pos.y);
      };
    };
    exports.lookAt = lookAt;
  // End


  // Part: Item
    /*
     * NOTE:
     *
     * The unit will discard its current item if not matching.
     */
    const filterItem = function(unit, itm_gn) {
      if(unit == null) return;

      var itm = mdl_content._ct_gn(itm_gn);
      if(itm == null || !(itm instanceof Item)) return;

      if(unit.item() != null && unit.item() != itm) {
        unit.clearItem();
      };
    };
    exports.filterItem = filterItem;


    const checkFull = function(unit, itm_gn, b) {
      if(unit == null) return true;

      if(itm_gn == null) itm_gn = unit.item();
      var itm = mdl_content._ct_gn(itm_gn);
      if(itm == null || !(itm instanceof Item)) return false;

      if(b == null) b = unit.closestCore();
      if(b == null || b.items == null) return true;

      return b.acceptStack(itm, 1, unit) == 0;
    };
    exports.checkFull = checkFull;


    /*
     * NOTE:
     *
     * The unit will gain some items.
     * If not matching, the previous item will be removed.
     */
    const addItem = function(unit, itm_gn, amt) {
      if(unit == null) return;;

      var itm = mdl_content._ct_gn(itm_gn);
      if(itm == null || !(itm instanceof Item)) return;
      if(amt == null) amt = 1;

      unit.addItem(itm, amt);
    };
    exports.addItem = addItem;


    const addItemBatch = function(unit, batch) {
      if(batch == null || unit == null) return;

      var cap = batch.length;
      if(cap == 0) return;
      for(let i = 0; i < cap; i += 3) {
        var itm = mdl_content._ct_gn(batch[i]);
        if(itm == null || !(itm instanceof Item)) return;
        var amt = batch[i + 1];
        var p = batch[i + 2];

        if(unit.acceptsItem(itm)) unit.addItem(itm, mdl_math._randFreq(amt, p));
      };
    };
    exports.addItemBatch = addItemBatch;


    /*
     * NOTE:
     *
     * The unit will fetch or dump selected item to a building.
     */
    const transferItem = function(unit, b, mode, itm_gn, amt, rad) {
      if(b == null || b.items == null || unit == null) return;
      if(b.acceptStack(unit.item(), unit.stack.amount, unit) < 1) return;
      if(mode != "t" && mode != "p") return;

      var itm = mdl_content._ct_gn(itm_gn);
      if(itm == null || !(itm instanceof Item)) return;
      if(amt == null) amt = unit.type.itemCapacity;
      if(rad == null) rad = 999999.0;
      if(!unit.within(b, rad)) return;

      if(mode == "t") {
        var amt_trans = Math.max(Math.min(amt, b.items.get(itm), unit.type.itemCapacity - unit.stack.amount), 0);
        Call.takeItems(b, itm, amt_trans, unit);
      } else {
        var amt_trans = Math.max(Math.min(amt, unit.stack.amount), 0);
        Call.transferItemTo(unit, itm, amt_trans, unit.x, unit.y, b);
      };
    };
    exports.transferItem = transferItem;


    /*
     * NOTE:
     *
     * The unit will dump current item to a building, if {itm_gn} is not assigned.
     * If it fails to dump all the items, the rest will be cleared.
     */
    const dumpItem = function(unit, b, itm_gn, amt, rad) {
      if(b == null || b.items == null || unit == null) return;

      if(itm_gn == null) itm_gn = unit.item();

      transferItem(unit, b, "p", itm_gn, amt, rad);
      unit.clearItem();
    };
    exports.dumpItem = dumpItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_unit.js loaded.");
});
