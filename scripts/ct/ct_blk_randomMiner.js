/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_randomMiner = require("reind/blk/blk_randomMiner");

    const ct_rs_genericItem = require("reind/ct/ct_rs_genericItem");
    const ct_rs_oreItem = require("reind/ct/ct_rs_oreItem");
    const ct_rs_wasteItem = require("reind/ct/ct_rs_wasteItem");

    const mdl_attr = require("reind/mdl/mdl_attr");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: min-misc
    const minMisc_placerMiner = extend(Separator, "min-misc-placer-miner", {
      setStats() {
        this.super$setStats();
        blk_randomMiner.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!blk_randomMiner.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
    });
    minMisc_placerMiner.buildType = () => extend(Separator.SeparatorBuild, minMisc_placerMiner, {
      updateTile() {
        this.super$updateTile();
        blk_randomMiner.updateTile(this);
      },
    });
    minMisc_placerMiner.results = ItemStack.with(
      ct_rs_oreItem.itemOre_clay, 8,
      ct_rs_oreItem.itemOre_sand, 52,
      ct_rs_oreItem.itemOre_nativeCopper, 8,
      ct_rs_oreItem.itemOre_limonite, 24,
      ct_rs_oreItem.itemOre_magnetite, 16,
      ct_rs_oreItem.itemOre_rutile, 12,
      ct_rs_oreItem.itemOre_rockShard_clastic, 16,
      ct_rs_oreItem.itemOre_rockShard_clasticSedimentary, 16,
      ct_rs_wasteItem.itemWas_scrapSteel, 4,
    );
    exports.minMisc_placerMiner = minMisc_placerMiner;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_randomMiner.js loaded.");
});
