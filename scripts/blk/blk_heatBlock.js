// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_heat = require("db/db_heat");
  // End


  // Start: Heat Damage
    const stat_heatSafeLimit = new Stat("reind-heat-safe-limit.name", StatCat.function);


    function setStats_heatDamage(obj, param) {
      obj.stats.add(stat_heatSafeLimit, param, StatUnit.heatUnits);
    };
    Events.run(ClientLoadEvent, () => {
      const list_heatSafeLimit = db_heat.heatSafeLimit;
      for(let i = 0; i <= list_heatSafeLimit.size - 1; i++) {
        if(typeof list_heatSafeLimit.get(i) == "string") {
          setStats_heatDamage(
            Vars.content.block(list_heatSafeLimit.get(i)),
            list_heatSafeLimit.get(i + 1),
          );
        };
      };
    });


    function updateTile_heatDamage(obj) {
      // Get safe limit
      var limit = 9999.0;
      var list = db_heat.heatSafeLimit;
      for(let i = 0; i < list.size - 1; i++) {
        if(obj.block.name.toString() == list.get(i)) {
          limit = list.get(i + 1);
        };
      };
      
      // Deal damage
      if(obj.heat != null && obj.heat > limit) {
        obj.damage(Time.delta * (obj.heat - limit) / 240.0);
        var effChance = Math.min((2.0 * (obj.heat - limit) / limit), 2.0) * 0.04;
        var effSize = Math.min((2.0 * (obj.heat - limit) / limit), 2.0) * 1.0 + 1.0;
        var effect_heatMelt = extend(ParticleEffect, {
          lifetime: 40.0,
          particles: 4,
          colorFrom: Color.valueOf("ffffffc0"),
          colorTo: Color.valueOf("ffffff00"),
          length: 12.0,
          sizeFrom: 0.0,
          sizeTo: effSize,
          strokeFrom: 2.0,
          strokeTo: 0.0,
          lenFrom: 4.0,
          lenTo: 2.0,
        });
        if(Mathf.chance(Time.delta * effChance)) {
          effect_heatMelt.at(obj.x, obj.y, Mathf.random() * 360.0);
        };
      };
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
      updateTile_heatDamage(obj);
    };
  // End


  // Start: Region
    // Most heat conductors
    const facHeat_heatConductorPlate = extend(HeatConductor, "fac-heat-heat-conductor-plate", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    facHeat_heatConductorPlate.buildType = () => extend(HeatConductor.HeatConductorBuild, facHeat_heatConductorPlate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.facHeat_heatConductorPlate = facHeat_heatConductorPlate;


    const facHeat_heatRouterPlate = extend(HeatConductor, "fac-heat-heat-router-plate", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    facHeat_heatRouterPlate.buildType = () => extend(HeatConductor.HeatConductorBuild, facHeat_heatRouterPlate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.facHeat_heatRouterPlate = facHeat_heatRouterPlate;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_heatBlock.js loaded.");
});
