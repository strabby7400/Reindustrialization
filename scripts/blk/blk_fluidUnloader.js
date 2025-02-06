/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidDistributionGate = require("reind/blk/blk_genericLiquidDistributionBlock");

    const ct_blk_fluidUnloader = require("reind/ct/ct_blk_fluidUnloader");

    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function updateTileComp(b) {
      // Update transport
      var liq_sel = Vars.content.liquids().get(ct_blk_fluidUnloader.accB_cfg_id(b, "r"));
      var liq = b.liquids.current();
      if(liq != liq_sel) b.liquids.clear();
      b.moveLiquidForward(false, liq_sel);
      var ot_f = mdl_geometry.getTile_rot_1b("f", b);
      if(ot_f != null) frag_fluid.transferLiquid(ot_f.build, b, liq_sel, true);
    };


    function buildConfigurationComp(b, tb) {
      var cfg_id = ct_blk_fluidUnloader.accB_cfg_id(b, "r");
      db_table.__contentSelected_liquid(tb, cfg_id);

      tb.row();

      var btnGrp = new ButtonGroup();
      btnGrp.setMinCheckCount(0);
      btnGrp.setMaxCheckCount(1);
      db_table.__contentSelector_liquid(tb, cfg_id, btnGrp, function() {
        ct_blk_fluidUnloader.accB_cfg_id(b, "w", this);
        b.deselect();
      }, 7);
    };


    function drawSelectComp(b) {
      // Draw config content
      var liq_sel = Vars.content.liquids().get(ct_blk_fluidUnloader.accB_cfg_id(b, "r"));
      if(liq_sel != Liquids.water) mdl_draw.drawContentIcon(mdl_geometry.poser_1b(b), liq_sel, b.block.size);
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
  Log.info("REIND:blk_fluidUnloader.js loaded.");
});
