/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_randomMiner");

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
        TEMPLATE.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
    });
    minMisc_placerMiner.buildType = () => extend(Separator.SeparatorBuild, minMisc_placerMiner, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    minMisc_placerMiner.results = ItemStack.with(
      ct_rs_oreItem.itemOre_clay, 32,
      ct_rs_oreItem.itemOre_sand, 216,

      ct_rs_oreItem.itemOre_cassiterite, 24,
      ct_rs_oreItem.itemOre_chromite, 16,
      ct_rs_oreItem.itemOre_ilmenite, 88,
      ct_rs_oreItem.itemOre_limonite, 32,
      ct_rs_oreItem.itemOre_magnetite, 64,
      ct_rs_oreItem.itemOre_nativeCopper, 32,
      ct_rs_oreItem.itemOre_rutile, 48,
      ct_rs_oreItem.itemOre_zircon, 32,

      ct_rs_oreItem.itemOre_rockShard_clastic, 64,
      ct_rs_oreItem.itemOre_rockShard_clasticSedimentary, 64,

      ct_rs_wasteItem.itemWas_scrapSteel, 24,

      ct_rs_genericItem.ilitemMisc_idsExciterRod, 1,
    );
    exports.minMisc_placerMiner = minMisc_placerMiner;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_randomMiner.js loaded.");
});
