/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericMiner");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_table = require("reind/mdl/mdl_table");

    const db_block = require("reind/db/db_block");
    const db_effect = require("reind/db/db_effect");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(results) {
      return function(tb) {
        tb.row();
        tb.table(Tex.whiteui, tb1 => {
          tb1.left().setColor(Pal.darkestGray);
          mdl_table.__margin(tb1);

          var arr = results;
          var cap = arr.length;
          if(cap == 0) return;
          var batch = [];
          var count = 0;

          for(let i = 0; i < cap; i++) {
            count += arr[i].amount;
          };
          for(let i = 0; i < cap; i++) {
            var itmStk = arr[i];
            var itm = itmStk.item;
            var amt = itmStk.amount;

            batch.push(itm);
            batch.push(-1);
            batch.push(amt / count);
          };

          mdl_table.setBatchDisplay(tb1, batch);
        }).row();
      };
    };
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.output);
      blk.stats.add(Stat.output, ax_buildStats(blk.results));

      var nmAttr = mdl_data.read_1n1v(db_block.db["map"]["attribute"], blk.name);
      if(nmAttr != null) {
        blk.stats.add(Stat.tiles, Attribute.get(nmAttr));
        blk.stats.add(db_stat.attributeRequired, mdl_attr._attrVal(nmAttr));
      };
    };


    function updateTileComp(b) {
      if(b.efficiency > 0.0) mdl_effect.showAroundP(mdl_effect._pFrac(0.02, b.efficiency), b, db_effect._drillCrack(), b.block.size * Vars.tilesize * 0.5, 0.0);
    };


    function canPlaceOnComp(blk, t, team, rot) {
      var nmAttr = mdl_data.read_1n1v(db_block.db["map"]["attribute"], blk.name);
      if(!(nmAttr != null && mdl_attr._sumAttr(blk, t, nmAttr) > mdl_attr._limit(blk) - 0.0001)) return false;

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
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

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
