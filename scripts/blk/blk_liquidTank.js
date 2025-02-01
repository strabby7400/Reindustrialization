/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericLiquidStorageBlock = require("reind/blk/blk_genericLiquidStorageBlock");

    const mdl_content = require("reind/mdl/mdl_content");

    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get storage type
      blk.stats.add(db_stat.storageType, "@term.reind-term-liquid.name");
    };


    function updateTileComp(b) {
      // Booms if illegal input
      var liq = b.liquids.current();
      if(liq != null && liq != Liquids.water && !mdl_content.isLiq(liq)) {
        b.kill();
        db_effect._invalidPlacement().at(b.x, b.y, 0.0);
        new UI().showInfoFade("@info.reind-info-storage-type-mismatch.name", 2.0);
      };
    };


    function acceptLiquidComp(b, ob, liq) {
      if(!mdl_content.isLiq(liq)) return false;

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
      blk_genericLiquidStorageBlock.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericLiquidStorageBlock.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const acceptLiquid = function(b, ob, liq) {
      if(!acceptLiquidComp(b, ob, liq)) return false;

      return true;
    };
    exports.acceptLiquid = acceptLiquid;


    const draw = function(b) {
      blk_genericLiquidStorageBlock.draw(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      blk_genericLiquidStorageBlock.drawSelect(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:blk_liquidTank.js loaded.");
});
