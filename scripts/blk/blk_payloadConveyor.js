/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericPayloadDistributionBlock");
  // End


  // Part: Component
    function statusComp(b) {
      if(b.power != null && b.power.status < 0.9999) return BlockStatus.noInput;
      return b.super$status();
    };


    function unitOnComp(b, unit) {
      if(b.power != null && b.power.status < 0.9999) return;
      b.super$unitOn(unit);
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
      if(b.power != null && b.power.status < 0.9999) return;

      b.super$updateTile();
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const status = function(b) {
      return statusComp(b);
    };
    exports.status = status;


    const unitOn = function(b, unit) {
      unitOnComp(b, unit);
    };
    exports.unitOn = unitOn;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_payloadConveyor.js loaded.");
});
