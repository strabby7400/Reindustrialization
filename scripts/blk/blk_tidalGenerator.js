/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_fieldGenerator");

    const frag_faci = require("reind/frag/frag_faci");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");

    const db_effect = require("reind/db/db_effect");
    const db_env = require("reind/db/db_env");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.attributeRequired, mdl_attr._attrVal(blk.attribute));
      frag_faci.setStats_terrain(blk, "sea", "enable");
    };


    function updateTileComp(b) {
      if(b.efficiency > 0.0001 && b.wasVisible) {
        var color = (b.tile.floor().liquidDrop == null) ? Color.valueOf("70b6ff") : (b.tile.floor().liquidDrop.color);
        var rad = b.block.size * Vars.tilesize * 0.7;

        mdl_effect.showAroundP(0.02, b, db_effect._ripple(rad, 1.0, color), b.block.offset + b.block.size * Vars.tilesize * 0.4, 0.0);
      };
    };


    function canPlaceOnComp(blk, t, team, rot) {
      if(!db_env.db["planet"]["type"]["tide"].contains(Vars.state.rules.planet.name)) return false;
      if(!frag_faci.canPlaceOn_terrain(blk, "sea", "enable", t, team, rot)) return false;

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      if(!db_env.db["planet"]["type"]["tide"].contains(Vars.state.rules.planet.name)) mdl_draw.drawPlaceText(blk, Vars.world.tile(tx, ty), false, Core.bundle.get("info.reind-info-no-tides.name"));
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

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!PARENT.canPlaceOn(blk, t, team, rot)) return false;
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const totalProgress = function(b) {
      return PARENT.totalProgress(b);
    };
    exports.totalProgress = totalProgress;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      PARENT.drawPlace(blk, tx, ty, rot, valid);

      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_tidalGenerator.js loaded.");
});
