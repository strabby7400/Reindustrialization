/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDistributionBlock = require("reind/blk/blk_genericDistributionBlock");

    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.add(Stat.range, blk.range, StatUnit.blocks);

      var speed = mdl_data.read_1n1v(db_block.transportSpeed, blk.name);
      blk.stats.add(Stat.speed, speed, StatUnit.itemsSecond);
    };


    function setupComp(blk) {
      Events.run(ClientLoadEvent, () => {
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
      blk_genericDistributionBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDistributionBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const setup = function(blk) {
      setupComp(blk);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_conveyorBridge.js loaded.");
});
