/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidDistributionGate = require("reind/blk/blk_genericLiquidDistributionBlock");

    const ct_blk_fluidUnloader = require("reind/ct/ct_blk_fluidUnloader");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_effect = require("reind/db/db_effect");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function updateTileComp(b) {
      var liq = b.liquids.current();
      var id_sel = ct_blk_fluidUnloader.accB_id_sel(b, "r");
      var liq_sel = mdl_content.getContent_id("fluid", id_sel);
      if(liq_sel == null) return;

      if(liq != liq_sel) b.liquids.clear();

      b.moveLiquidForward(false, liq_sel);
      var ot_f = mdl_game.getTile_rot("f", b.tile, b.rotation);
      if(ot_f != null) frag_fluid.transferLiquid(ot_f.build, b, liq_sel, true);
    };


    function buildConfigurationComp(b, tb) {
      var id_sel = ct_blk_fluidUnloader.accB_id_sel(b, "r");

      db_table.__contentSelected(tb, "fluid", id_sel);
      tb.row();

      db_table.__contentSelector(tb, "fluid", id_sel, function() {
        b.block.lastConfig = this;
        Call.tileConfig(Vars.player, b, new Vec2(this, -2));
        b.deselect();
      }, 7);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      if(builder != null && builder.isPlayer()) b.lastAccessed = builder.getPlayer().coloredName();
      var val_fi = -2;
      var param_fi = -2;
      if(val instanceof Vec2) {
        val_fi = val.x;
        param_fi = val.y;
      };
      if(val instanceof Building) val_fi = val.config();

      if(val_fi > -2) {
        ct_blk_fluidUnloader.accB_id_sel(b, "w", val_fi);

        mdl_effect.showAt(b, db_effect._recipeChange(b.block.size, b.team.color), 0.0);
      };
    };


    function drawSelectComp(b) {
      var id_sel = ct_blk_fluidUnloader.accB_id_sel(b, "r");
      var liq_sel = mdl_content.getContent_id("fluid", id_sel);
      mdl_draw.drawContentIcon(mdl_game.poser_1b(b), liq_sel, b.block.size);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericLiquidDistributionGate.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidDistributionGate.updateTile(b);

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
      return blk_genericLiquidDistributionGate.moveLiquid(b, ob, liq);
    };
    exports.moveLiquid = moveLiquid;


    const draw = function(b) {
      blk_genericLiquidDistributionGate.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericLiquidDistributionGate.drawSelect(b);

      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fluidUnloader.js loaded.");
});
