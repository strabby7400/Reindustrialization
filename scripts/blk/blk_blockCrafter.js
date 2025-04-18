/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericPayloadCrafter");

    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_table = require("reind/mdl/mdl_table");

    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Auxiliary
    function ax_buildStats(cts) {
      return function(tb) {
        mdl_table.setContentListDisplay(tb, cts, 1.5);
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.output);

      var arr = [];
      blk.filter.each(i => arr.push(i));
      blk.stats.add(Stat.output, ax_buildStats(arr));
    };


    function updateTileComp(b) {
      if(b.needCheck) {
        b.changeEff = db_effect._recipeChange(b.block.size, b.team.color);

        b.needCheck = false;
      };

      if(b.payload != null) b.payload.update(null, b);

      var shouldProduce = b.recipe != null && b.efficiency > 0.0 && b.payload == null;

      if(shouldProduce) {
        b.progress += b.block.buildSpeed * b.edelta();

        if(b.progress - b.recipe.buildTime > -0.0001) {
          b.consume();
          b.payload = new BuildPayload(b.recipe, b.team);
          b.payVector.setZero();
          b.progress %= 1.0;

          mdl_effect.showAt(b, b.payload.block().placeEffect, b.payload.size() / Vars.tilesize);
          mdl_effect.playAt(b, Sounds.place, 0.7, 1.0, 0.2);
        };
      };

      b.heat = Mathf.lerpDelta(b.heat, Mathf.num(shouldProduce), 0.15);
      b.time += b.heat * b.delta();

      b.moveOutPayload();
    };


    function configuredComp(b, builder, val) {
      mdl_effect.showAt(mdl_game._pos(b.tile, b.block.offset, true), b.changeEff, 0.0);
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


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_blockCrafter.js loaded.");
});
