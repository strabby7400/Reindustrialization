/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericFactory = require("reind/blk/blk_genericFactory");

    const ct_blk_fragmentFactory = require("reind/ct/ct_blk_fragmentFactory");

    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Component
    const li_22856458 = new Seq();
    function updateTileComp(b) {
      var invalid = false;
      var tmpLi = li_22856458.clear();
      mdl_game._liTileRot(b.tile, b.block.liquidOutputDirections[0], b.block.size).each(ot => {
        if(ot.build == null) {
          invalid = true
        } else if(!tmpLi.contains(ot.build)) {
          tmpLi.add(ot.build)
        };
      });
      if(tmpLi.size > 1) invalid = true;

      ct_blk_fragmentFactory.accB_down(b, "w", invalid);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericFactory.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericFactory.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_fragmentFactory.js loaded.");
});
