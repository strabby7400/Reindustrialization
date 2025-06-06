/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericTurret");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function canPlaceOnComp(blk, t, team, rot) {
      var valid = true;
      mdl_game._tsEdge(t, blk.size).forEach(ot => {if(ot.solid()) valid = false});

      return valid;
    };


    function hasAmmoComp(b) {
      return canPlaceOnComp(b.block, b.tile, b.team, b.rotation);
    };


    function statusComp(b) {
      var valid = true;
      mdl_game._tsEdge(b.tile, b.block.size).forEach(ot => {if(ot.solid()) valid = false});
      if(!valid) return BlockStatus.noInput;

      return b.super$status();
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return;

      var ts = mdl_game._tsEdge(t, blk.size);
      ts.forEach(ot => mdl_draw.drawTileIndicator(ot, !ot.solid()));
    };


    function drawSelectComp(b) {
      var t = b.tile;

      var valid = true;
      var ts = mdl_game._tsEdge(t, b.block.size);
      ts.forEach(ot => {
        mdl_draw.drawTileIndicator(ot, !ot.solid());
        if(ot.solid()) valid = false;
      });

      if(!valid) mdl_draw.drawSelectText(b, false, mdl_text._info("turret-blocked"), 1);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      return canPlaceOnComp(blk, t, team, rot);
    };
    exports.canPlaceOn = canPlaceOn;


    const hasAmmo = function(b) {
      return hasAmmoComp(b);
    };
    exports.hasAmmo = hasAmmo;


    const status = function(b) {
      return statusComp(b);
    };
    exports.status = status;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_rotationalTurret.js loaded.");
});
