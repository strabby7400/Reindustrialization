/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_heatFactory = require("reind/blk/blk_heatFactory");

    const ct_blk_boiler = require("reind/ct/ct_blk_boiler");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_heat = require("reind/mdl/mdl_heat");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.canExplode, true);
      var rad = mdl_data.read_1n1v(db_block.genericRange, blk.name) * Vars.tilesize;
      if(rad != null) blk.stats.add(db_stat.explosionRadius, rad / Vars.tilesize, StatUnit.blocks);
    };


    function updateTileComp(b) {
      var amt_water = b.liquids.get(Vars.content.liquid("reind-liq-ore-water"));
      var amt_steam = b.liquids.get(Vars.content.liquid("reind-gas-misc-steam"));
      var heat = mdl_heat.getHeat(b);
      var cap = b.block.liquidCapacity;

      if(amt_water < 1.0 && heat > 0.0001) ct_blk_boiler.accB_dryHeated(b, "w", true);
      if(heat < 0.0001) ct_blk_boiler.accB_dryHeated(b, "w", false);

      var instab = ct_blk_boiler.accB_instab(b, "r") + (((ct_blk_boiler.accB_dryHeated(b, "r") && amt_water > 1.0) || amt_steam / cap > 0.5) ? 0.001 : -0.001);
      if(instab < 0.0) instab = 0.0;
      if(instab > 1.0) instab = 1.0;
      ct_blk_boiler.accB_instab(b, "w", instab);

      if(instab > 0.9999) {
        var rad = mdl_data.read_1n1v(db_block.genericRange, b.block.name) * Vars.tilesize;
        if(rad == null) rad = 40.0;

        b.kill();
        frag_attack.attack_explosion(b, rad, 3000.0, 12.0);
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var rad = mdl_data.read_1n1v(db_block.genericRange, blk.name) * Vars.tilesize;
      if(rad != null) mdl_draw.drawWarningDisk(mdl_game.poser_1t(Vars.world.tile(tx, ty), blk.offset), rad);
    };


    function drawSelectComp(b) {
      var rad = mdl_data.read_1n1v(db_block.genericRange, b.block.name) * Vars.tilesize;
      if(rad != null) mdl_draw.drawWarningDisk(mdl_game.poser_1b(b), rad);
    };


    function onDestroyedComp(b) {
      if(Vars.state.rules.reactorExplosions && ct_blk_boiler.accB_instab(b, "r") > 0.3) {
        var rad = mdl_data.read_1n1v(db_block.genericRange, b.block.name) * Vars.tilesize;
        if(rad == null) rad = 40.0;

        frag_attack.attack_explosion(b, rad, 3000.0, 12.0);
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_heatFactory.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_heatFactory.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      blk_heatFactory.setBars(blk);
    };
    exports.setBars = setBars;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;


    const onDestroyed = function(b) {
      onDestroyedComp(b);
    };
    exports.onDestroyed = onDestroyed;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_boiler.js loaded.");
});
