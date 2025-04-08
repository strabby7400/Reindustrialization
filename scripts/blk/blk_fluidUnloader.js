/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericLiquidDistributionBlock");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        b.id_sel = mdl_data._config(b, -1);

        b.needCheck = false;
      };

      var liq = b.liquids.current();
      var liq_sel = mdl_content._ct_id("fluid", b.id_sel);
      if(liq_sel == null) return;

      if(liq != liq_sel) b.liquids.clear();

      b.moveLiquidForward(false, liq_sel);
      var ot_f = mdl_game._tRot("f", b.tile, b.rotation);
      if(ot_f != null) frag_fluid.transferLiquid(ot_f.build, b, liq_sel, true);
    };


    function buildConfigurationComp(b, tb) {
      var vec2 = new Vec2();

      db_table.__contentSelected(tb, "fluid", b.id_sel);

      db_table.__contentSelector(tb, "fluid", b.id_sel, function() {
        b.block.lastConfig = new Point2(this, 0).x;
        Call.tileConfig(Vars.player, b, vec2.set(this, -2));
        b.deselect();
      }, 7);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[0] > -2) {
        b.id_sel = tup[0];

        mdl_effect.showAt(b, db_effect._recipeChange(b.block.size, b.team.color), 0.0);
      };
    };


    function drawSelectComp(b) {
      var liq_sel = mdl_content._ct_id("fluid", b.id_sel);
      mdl_draw.drawContentIcon(b, liq_sel, b.block.size);
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

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;


    const moveLiquid = function(b, ob, liq) {
      return PARENT.moveLiquid(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      PARENT.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fluidUnloader.js loaded.");
});
