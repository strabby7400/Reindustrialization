/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_occupiedBlock");

    const mdl_table = require("reind/mdl/mdl_table");

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
      blk.stats.add(db_stat.mapNote, ax_buildStats(Core.bundle.get("info.reind-info-note-occupied-wall.name")));
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
    };
    exports.updateTile = updateTile;


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


    const draw = function(b) {
      PARENT.draw(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_occupiedWall.js loaded.");
});
