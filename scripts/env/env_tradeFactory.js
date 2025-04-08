/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_occupiedBlock");
    const PARENT_A = require("reind/blk/blk_recipeFactory");

    const mdl_table = require("reind/mdl/mdl_table");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(str) {
      return function(tb) {
        mdl_table.setNoteStat(tb, str);
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(db_stat.mapNote, ax_buildStats(mdl_text._info("note-trade-dock")));
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
      PARENT_A.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
      PARENT_A.updateTile(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      PARENT_A.init(blk);
    };
    exports.init = init;


    const setBars = function(blk) {
      PARENT_A.setBars(blk);
    };
    exports.setBars = setBars;


    const buildConfiguration = function(b, tb) {
      PARENT_A.buildConfiguration(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      PARENT_A.configured(b, builder, val);
    };
    exports.configured = configured;


    const acceptItem = function(b, ob, itm) {
      if(!PARENT_A.acceptItem(b, ob, itm)) return false;

      return true;
    };
    exports.acceptItem = acceptItem;


    const acceptLiquid = function(b, ob, liq) {
      if(!PARENT_A.acceptLiquid(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const outputsItems = function(blk) {
      return PARENT_A.outputsItems(blk);
    };
    exports.outputsItems = outputsItems;


    const shouldConsume = function(b) {
      if(!PARENT_A.shouldConsume(b)) return false;

      return true;
    };
    exports.shouldConsume = shouldConsume;


    const consumesLiquid = function(blk, liq) {
      return PARENT_A.consumesLiquid(blk, liq);
    };
    exports.consumesLiquid = consumesLiquid;


    const collision = function(b, bul) {
      return PARENT.collision(b, bul);
    };
    exports.collision = collision;


    const onDestroyed = function(b) {
      PARENT.onDestroyed(b);
    };
    exports.onDestroyed = onDestroyed;


    const afterDestroyed = function(b) {
      PARENT.afterDestroyed(b);
    };
    exports.afterDestroyed = afterDestroyed;


    const drawSelect = function(b) {
      PARENT_A.drawSelect(b);
    };
    exports.drawSelect = drawSelect;


    const drawStatus = function(b) {
      PARENT_A.drawStatus(b);
    };
    exports.drawStatus = drawStatus;


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_tradeFactory.js loaded.");
});
