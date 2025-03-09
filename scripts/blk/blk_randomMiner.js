/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericMiner = require("reind/blk/blk_genericMiner");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var nm_attr = mdl_data.read_1n1v(db_block.attrMap, blk.name);
      if(nm_attr != null) blk.stats.add(Stat.tiles, Attribute.get(nm_attr));
    };


    function updateTileComp(b) {
      if(b.efficiency > 0.0 && Mathf.chance(0.01)) Vars.content.block("reind-min-dril-mechanical-drill").updateEffect.at(b);
    };


    function canPlaceOnComp(blk, t, team, rot) {
      var nm_attr = mdl_data.read_1n1v(db_block.attrMap, blk.name);
      if(!(nm_attr != null && mdl_attr.isEnough_blk(blk, t, nm_attr))) return false;

      return true;
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericMiner.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericMiner.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      return canPlaceOnComp(blk, t, team, rot);
    };
    exports.canPlaceOn = canPlaceOn;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_randomMiner.js loaded.");
});
