/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionGate");

    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_ui = require("reind/mdl/mdl_ui");
  // End


  // Part: Setting
    var efficiencyInterval = 90.0;
    const set_efficiencyInterval = function(val) {
      efficiencyInterval = val;
    };
    exports.set_efficiencyInterval = set_efficiencyInterval;


    var secretCode = "<ohno>";
    const set_secretCode = function(val) {
      secretCode = val;
    };
    exports.set_secretCode = set_secretCode;
  // End


  // Part: Component
    function updateTileComp(b) {
      if(b.timerCall.get(efficiencyInterval)) {
        var cond = false;
        var count = 0;
        mdl_game._tsEdge(b.tile, b.block.size).forEach(ot => {if(ot.block() instanceof Router) {
          cond = true;
          count += 1;
        }});

        b.isBackflow = cond;
        if(count >= b.block.size * 4) {
          b.kill();
          mdl_ui.showInfoFade("router-kill");
        };
      };
    };


    function drawComp(b) {
      if(secretCode.includes("<router>")) mdl_draw.drawNormalRegion(b, Vars.content.block("reind-eff-core-ash").region, 0.0, 1.0, b.block.size * 0.5);

      if(b.isBackflow) mdl_draw.drawTileIndicator(b.tile, false);
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


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_router.js loaded.");
});
