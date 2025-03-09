/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericBlock = require("reind/blk/blk_genericBlock");

    const frag_heat = require("reind/frag/frag_heat");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      var heatLimit = mdl_data.read_1n1v(db_block.heatLimit, blk.name);
      if(heatLimit != null) blk.stats.add(db_stat.heatLimit, heatLimit);

      var heatLoss = mdl_data.read_1n1v(db_block.heatLoss, blk.name);
      if(heatLoss != null) blk.stats.add(db_stat.heatLoss, Strings.fixed(heatLoss * 1000.0, 2) + "‰");

      var heatTransCoef = mdl_data.read_1n1v(db_block.heatTransferCoefficient, blk.name);
      if(heatTransCoef != null) blk.stats.add(db_stat.heatTransferCoefficient, Strings.fixed(heatTransCoef, 2));
    };


    function updateTileComp(b) {
      // Update heat
      frag_heat.updateTile_heat(b);
    };


    function setBarsComp(blk) {
      if(mdl_content.isHcond(blk)) {
        blk.removeBar("liquid");
        blk.removeBar("liquid-reind-effc-cond-heat")
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const setBars = function(blk) {
      setBarsComp(blk);
    };
    exports.setBars = setBars;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_genericHeatBlock.js loaded.");
});
