/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_heatFactory");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_content = require("reind/mdl/mdl_content");
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

      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      blk.stats.add(db_stat.explosionRadius, r, StatUnit.blocks);
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.alertReg = mdl_content._reg(b.block, "-alert");

        b.r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5);

        b.needCheck = false;
      };

      var amt_water = b.liquids.get(Vars.content.liquid("reind-liq-ore-water"));
      var amt_steam = b.liquids.get(Vars.content.liquid("reind-gas-misc-steam"));
      var heat = mdl_heat._heat(b);
      var cap = b.block.liquidCapacity;

      if(amt_water < 1.0 && heat > 0.0001) b.dryHeated = true;
      if(heat < 0.0001) b.dryHeated = false;

      b.instab += (((b.dryHeated && amt_water > 1.0) || amt_steam / cap > 0.5) ? 0.001 : -0.001);
      b.instab = Mathf.clamp(b.instab);

      if(b.instab > 0.9999) {
        b.kill();
        frag_attack.atk_explosion_noob(b, b.r * Vars.tilesize, 3000.0, 12.0);
      };
    };


    function displayBarsComp(b, tb) {
      tb.add(new Bar(
        "bar.instability",
        Pal.sap,
        () => b.instab,
      )).row();
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5)
      mdl_draw.drawWarningDisk(mdl_game._pos(Vars.world.tile(tx, ty), blk.offset), r * Vars.tilesize);
    };


    function drawComp(b) {
      mdl_draw.drawFadeAlert(b, b.alertReg, b.instab);
    };


    function drawSelectComp(b) {
      mdl_draw.drawWarningDisk(b, b.r * Vars.tilesize);
    };


    function onDestroyedComp(b) {
      if(Vars.state.rules.reactorExplosions && b.instab > 0.3) {
        frag_attack.atk_explosion_noob(b, b.r * Vars.tilesize, 3000.0, 12.0);
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
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      PARENT.setBars(blk);
    };
    exports.setBars = setBars;


    const displayBars = function(b, tb) {
      displayBarsComp(b, tb);
    };
    exports.displayBars = displayBars;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


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
