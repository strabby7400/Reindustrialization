/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericFactory = require("reind/blk/blk_genericFactory");

    const ct_blk_fragmentFactory = require("reind/ct/ct_blk_fragmentFactory");

    const mdl_geometry = require("reind/mdl/mdl_geometry");
  // End


  // Part: Component
    function updateTileComp(b) {
      var invalid = false;
      var temp_li = new Seq();
      mdl_geometry.getTiles_rot(b.tile, b.block.liquidOutputDirections[0], b.block.size).each(ot => {
        if(ot.build == null) {
          invalid = true
        } else if(!temp_li.contains(ot.build)) {
          temp_li.add(ot.build)
        };
      });
      if(temp_li.size > 1) invalid = true;

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
  Log.info("REIND:blk_fragmentFactory.js loaded.");
});
