/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fieldGenerator = require("reind/blk/blk_fieldGenerator");

    const frag_facility = require("reind/frag/frag_facility");

    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_effect = require("reind/db/db_effect");
    const db_env = require("reind/db/db_env");
  // End


  // Part: Component
    function updateTileComp(b) {
      if(b.efficiency > 0.0001 && b.wasVisible && Mathf.chance(0.02)) {
        var x = b.tile.worldx() + b.block.offset + b.block.size * Vars.tilesize * 0.4 * (Mathf.chance(0.5) ? 1.0 : -1.0);
        var y = b.tile.worldy() + b.block.offset + b.block.size * Vars.tilesize * 0.4 * (Mathf.chance(0.5) ? 1.0 : -1.0);
        var color = (b.tile.floor().liquidDrop == null) ? Color.valueOf("70b6ff") : (b.tile.floor().liquidDrop.color);
        var rad = b.block.size * Vars.tilesize * 0.7;

        db_effect._ripple(rad, 1.0, color).at(x, y);
      };
    };


    function canPlaceOnComp(blk, t, team, rot) {
      if(!db_env.hasTides.contains(Vars.state.rules.planet.name)) return false;
      if(!frag_facility.canPlaceOn_terrain(blk, "sea", "enable", t, team, rot)) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      if(!db_env.hasTides.contains(Vars.state.rules.planet.name)) mdl_draw.drawPlaceText(blk, Vars.world.tile(tx, ty), false, Core.bundle.get("info.reind-info-no-tides.name"));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_fieldGenerator.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_fieldGenerator.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!blk_fieldGenerator.canPlaceOn(blk, t, team, rot)) return false;
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      blk_fieldGenerator.drawPlace(blk, tx, ty, rot, valid);

      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      blk_fieldGenerator.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_fieldGenerator.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_tidalGenerator.js loaded.");
});
