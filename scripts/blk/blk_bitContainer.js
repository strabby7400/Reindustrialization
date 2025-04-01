/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_container");
  // End


  // Part: Component
    function acceptItemComp(b, ob, itm) {
      return mdl_content.isBit(itm);
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
    };
    exports.updateTile = updateTile;


    const acceptItem = function(b, ob, itm) {
      if(!acceptItemComp(b, ob, itm)) return false;

      return true;
    };
    exports.acceptItem = acceptItem;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_bitContainer.js loaded.");
});
