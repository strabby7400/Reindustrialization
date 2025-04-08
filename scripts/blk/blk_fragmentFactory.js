/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericFactory");

    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    function updateTileComp(b) {
      if(b.timerEffc.get(60.0)) {
        var cond = false;
        var tmpArr = [];
        mdl_game._tsRot(b.tile, b.block.liquidOutputDirections[0], b.block.size).forEach(ot => {
          if(ot.build == null) {cond = true} else if(!tmpArr.includes(ot.build)) {tmpArr.push(ot.build)};
          if(tmpArr.length > 1) cond = true;
        });

        b.down = cond;
      };

      if(!b.down) b.super$updateTile();
    };


    function statusComp(b) {
      return b.down ? BlockStatus.noInput : b.super$status();
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


    const status = function(b) {
      return statusComp(b);
    };
    exports.status = status;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fragmentFactory.js loaded.");
});
