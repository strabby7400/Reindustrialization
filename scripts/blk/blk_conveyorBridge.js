/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionBlock");

    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(Stat.range, blk.range, StatUnit.blocks);

      var speed = mdl_data.read_1n1v(db_block.db["param"]["speed"]["base"], blk.name);
      blk.stats.add(Stat.speed, speed, StatUnit.itemsSecond);
    };


    function initComp(blk) {
      Events.run(MusicRegisterEvent, () => {
        blk.unloadable = true;
        blk.allowConfigInventory = true;
      });
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


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_conveyorBridge.js loaded.");
});
