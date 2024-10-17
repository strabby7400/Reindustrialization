// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const ct_effc = require("ct/ct_effc");
    const db_core = require("db/db_core");
    const db_item = require("db/db_item");
  // End


  // Start: Virtual Item
    const effect_itemVirt = extend(ParticleEffect, {
      region: "reind-efr-cross",
      lifetime: 90.0,
      particles: 1,
      colorFrom: Color.valueOf("ff0000ff"),
      colorTo: Color.valueOf("ff000000"),
      length: 0.0,
      sizeFrom: 6.0,
      sizeTo: 6.0,
      strokeFrom: 0.0,
      strokeTo: 0.0,
      lenFrom: 0.0,
      lenTo: 0.0,
    });


    function update_itemVirt(obj) {
      // Only core can store virtual items
      if(obj.block instanceof CoreBlock) return;

      const list = db_item.itemVirt;
      for(let i = 0; i < list.size; i++) {
        var target = Vars.content.item(list.get(i));
        if(target == null) return;
        if(obj.items.get(target) > 0) {
          obj.damage(Time.delta * 666666.0);
          effect_itemVirt.at(obj.x, obj.y, 0.0);
          var ui1 = new UI();
          ui1.showInfoFade("@info.reind-virt-no-conveyor.name", 2.0);
        };
      };
    };
  // End


  // Start: Core Effc
    const statCoreEffc = new Stat("reind-core-efficiency-output.name", StatCat.function);


    const effc = ct_effc.effcEffc_core;


    function setStats_coreEffc(obj, param) {
      obj.stats.add(statCoreEffc, param, StatUnit.perSecond);
    };


    Events.run(ClientLoadEvent, () => {
      const list_coreEffc = db_core.coreEffc;
      for(let i = 0; i < list_coreEffc.size - 1; i++) {
        if(typeof list_coreEffc.get(i) == "string") {
          var target = Vars.content.block(list_coreEffc.get(i));
          if(target != null) {
            setStats_coreEffc(
              target,
              list_coreEffc.get(i + 1),
            );
          };
        };
      };
    });


    function updateTile_coreEffc(obj) {
      if(!obj.block.name.toString().includes("eff-core")) return;
      var coreEffc = 1.0;
      var list = db_core.coreEffc;
      for(let i = 0; i < list.size - 1; i++) {
        if(obj.block.name.toString() == list.get(i)) {
          coreEffc = list.get(i + 1);
        };
      };
      var maxInc = Math.min(obj.block.liquidCapacity - obj.liquids.get(effc), coreEffc / 60.0 * Time.delta);
      obj.liquids.add(effc, maxInc);
      obj.dumpLiquid(effc);
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function setStats_extra(obj) {

    };


    function updateTile_extra(obj) {
      update_itemVirt(obj);
      updateTile_coreEffc(obj);
    };
  // End


  // Start: Region
    /* eff-stor */
    const effStor_Crate = extend(StorageBlock, "eff-stor-crate", {
      update: true,
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    effStor_Crate.buildType = () => extend(StorageBlock.StorageBuild, effStor_Crate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.effStor_Crate = effStor_Crate;


    /* eff-core */
    const effCore_ash = extend(CoreBlock, "eff-core-ash", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    effCore_ash.buildType = () => extend(CoreBlock.CoreBuild, effCore_ash, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.effCore_ash = effCore_ash;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_storage.js loaded.");
});
