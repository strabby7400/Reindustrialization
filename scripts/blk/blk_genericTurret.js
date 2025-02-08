/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDefenseBlock = require("reind/blk/blk_genericDefenseBlock");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
  // End


  // Part: Component
    function canPlaceOnComp(blk, t, team, rot) {
      var valid = true;
      mdl_geometry.getTiles_edge(t, blk.size).each(ot => {if(ot.solid()) valid = false});

      return valid;
    };


    function hasAmmoComp(b) {
      return canPlaceOnComp(b.block, b.tile, b.team, b.rotation);
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var t = Vars.world.tile(tx, ty);
      if(t == null) return;

      var li_ot = mdl_geometry.getTiles_edge(t, blk.size);
      li_ot.each(ot => mdl_draw.drawTileIndicator(ot, !ot.solid()));
    };


    function drawSelectComp(b) {
      var t = b.tile;

      var valid = true;
      var li_ot = mdl_geometry.getTiles_edge(t, b.block.size);
      li_ot.each(ot => {
        mdl_draw.drawTileIndicator(ot, !ot.solid());
        if(ot.solid()) valid = false;
      });

      if(!valid) mdl_draw.drawSelectText(b, false, Core.bundle.get("info.reind-info-turret-blocked.name"), 1);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDefenseBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDefenseBlock.updateTile(b);
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
  Log.info("REIND:blk_genericTurret.js loaded.");
});
