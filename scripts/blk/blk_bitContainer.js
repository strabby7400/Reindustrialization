/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_container = require("reind/blk/blk_container");
  // End


  // Part: Component
    function acceptItemComp(b, ob, itm) {
      return (
        itm.name == "reind-item-virt-bit" ||
        itm.name == "reind-item-virt-kilobit" ||
        itm.name == "reind-item-virt-megabit" ||
        itm.name == "reind-item-virt-gigabit"
      );
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_container.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_container.updateTile(b);
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
