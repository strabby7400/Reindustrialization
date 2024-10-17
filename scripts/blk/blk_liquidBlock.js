// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_fluid = require("db/db_fluid");
    const db_heat = require("db/db_heat");
  // End


  // Start: Corrosion
    const stat_corrosionResistence = new Stat("reind-stat-corrosion-resistence.name", StatCat.function);
    const stat_vulnerableTo = new Stat("reind-stat-vulnerable-to.name", StatCat.function);


    function setStats_corrosion(obj, param) {
      obj.stats.add(stat_corrosionResistence, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_corrosionResistence = db_fluid.corrosionResistence;
      for(let i = 0; i < list_corrosionResistence.size - 1; i++) {
        if(typeof list_corrosionResistence.get(i) == "string") {
          var target = Vars.content.block(list_corrosionResistence.get(i));
          if(target != null) {
            setStats_corrosion(
              target,
              list_corrosionResistence.get(i + 1),
            );
          };
        };
      };
    });


    function setStats_vulnerableTo(obj) {
      var name = obj.name.toString();
      var list = db_fluid.corrosionResistenceMultipliers;
      if(!list.contains(name)) return;
      var liqList = new Seq();
      for(let i = 0; i < list.size - 2; i++) {
        if(name == list.get(i)) {
          liqList.add(Vars.content.liquid(list.get(i + 1)));
        };
      };
      obj.stats.add(stat_vulnerableTo, StatValues.content(liqList.sort()));
    };


    function update_corrosion(obj) {
      var liq = obj.liquids.current();
      var list1 = db_fluid.corrosionPower;
      var damage = 0;
      for(let i = 0; i < list1.size - 1; i++) {
        if(liq != null && liq.name.toString() == list1.get(i)) {
          damage = list1.get(i + 1);
        };
      };
      if(damage == 0) return;
      var list2 = db_fluid.corrosionResistence;
      var damageScl1 = 1.0
      for(let i = 0; i < list2.size - 1; i++) {
        if(obj.block.name.toString() == list2.get(i)) {
          damageScl1 = list2.get(i + 1);
        }
      };
      var list3 = db_fluid.corrosionResistenceMultipliers;
      var damageScl2 = 1.0
      if(list3.contains(obj.block)) {
        for(let i = 0; i < list3.size - 2; i++) {
          if(obj.block.name.toString() == list3.get(i) && liq.name.toString() == list3.get(i + 1)) {
            damageScl2 = list3.get(i + 2);
          };
        };
      };
      var amount = obj.liquids.get(liq);
      if(amount > 0.0001) {
        obj.damage(Time.delta * damage / (damageScl1 * damageScl2));
        if(Mathf.chance(Time.delta * 0.01)) {
          var offsetX = (Mathf.chance(0.5) ? 1.0 : -1.0) * Mathf.random() * 3.6;
          var offsetY = (Mathf.chance(0.5) ? 1.0 : -1.0) * Mathf.random() * 3.6;
          var effect_corrosion = extend(ParticleEffect, {
            lifetime: 120.0,
            particles: 1,
            colorFrom: liq.color,
            colorTo: liq.color,
            length: 0.0,
            offsetX: offsetX,
            offsetY: offsetY,
            sizeFrom: 0.8,
            sizeTo: 0.0,
            sizeInterp: Interp.pow5In,
            strokeFrom: 8.0,
            strokeTo: 0.0,
            lenFrom: 8.0,
            lenTo: 0.0,
          });
          effect_corrosion.at(obj.x, obj.y, Mathf.random() * 360.0);
        };
      };
    };
  // End


  // Start: Effc
    const effect_effc = extend(ParticleEffect, {
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


    function update_effc(obj) {
      var liq = obj.liquids.current();
      var amount = obj.liquids.get(liq);
      if(!db_fluid.effc.contains(liq.name) || amount < 0.0001) return;
      obj.damage(Time.delta * 666666.0);
      effect_effc.at(obj.x, obj.y, 0.0);
      var ui1 = new UI();
      ui1.showInfoFade("@info.reind-effc-no-conduit.name", 2.0);
    };
  // End


  // Start: Heat Level
    const stat_heatResistence = new Stat("reind-stat-heat-resistence.name", StatCat.function);


    function setStats_heatResistence(obj, param) {
      obj.stats.add(stat_heatResistence, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_heatResistence = db_heat.heatResistence;
      for(let i = 0; i < list_heatResistence.size - 1; i++) {
        if(typeof list_heatResistence.get(i) == "string") {
          var target = Vars.content.block(list_heatResistence.get(i));
          if(target != null) {
            setStats_heatResistence(
              target,
              list_heatResistence.get(i + 1),
            );
          };
        };
      };
    });


    function update_heatLevel(obj) {
      var liq = obj.liquids.current();
      var amount = obj.liquids.get(liq);
      var list1 = db_heat.heatLevel;
      var list2 = db_heat.heatResistence;
      var heatLevel = 0;
      for(let i = 0; i <= list1.size - 1; i++) {
        if(liq.name.toString() == list1.get(i)) {
          heatLevel = list1.get(i + 1);
        };
      };
      var heat = amount / 5.0 * heatLevel;
      var heatResistence = 0;
      for(let i = 0; i <= list2.size - 1; i++) {
        if(obj.block.name.toString() == list2.get(i)) {
          heatResistence = list2.get(i + 1);
        };
      };
      if(heat > heatResistence) {
        obj.damage(Time.delta * 0.5);
      };
    }
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function setStats_extra(obj) {
      setStats_vulnerableTo(obj);
    };


    function updateTile_extra(obj) {
      update_corrosion(obj);
      update_effc(obj);
      update_heatLevel(obj);
    };
  // End


  // Start: Region
    /* bliq-cond */
    const bliqCond_bronzeFluidPipe = extend(Conduit, "bliq-cond-bronze-fluid-pipe", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqCond_bronzeFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_bronzeFluidPipe, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.bliqCond_bronzeFluidPipe = bliqCond_bronzeFluidPipe;


    const bliqCond_steelFluidPipe = extend(ArmoredConduit, "bliq-cond-steel-fluid-pipe", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqCond_steelFluidPipe.buildType = () => extend(ArmoredConduit.ArmoredConduitBuild, bliqCond_steelFluidPipe, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.bliqCond_steelFluidPipe = bliqCond_steelFluidPipe;


    /* bliq-brd */
    const bliqBrd_fluidPipeBridge = extend(LiquidBridge, "bliq-brd-fluid-pipe-bridge", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqBrd_fluidPipeBridge.buildType = () => extend(LiquidBridge.LiquidBridgeBuild, bliqBrd_fluidPipeBridge, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.bliqBrd_fluidPipeBridge = bliqBrd_fluidPipeBridge;


    /* bliq-stor */
    const bliqStor_fluidCell = extend(LiquidRouter, "bliq-stor-fluid-cell", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqStor_fluidCell.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_fluidCell, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.bliqStor_fluidCell = bliqStor_fluidCell;


    const bliqStor_steelFluidCylinder = extend(LiquidRouter, "bliq-stor-steel-fluid-cylinder", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqStor_steelFluidCylinder.buildType = () => extend(LiquidRouter.LiquidRouterBuild, bliqStor_steelFluidCylinder, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.bliqStor_steelFluidCylinder = bliqStor_steelFluidCylinder;


    /* bliq-pump */
    const bliqPump_pistonFluidPump = extend(Pump, "bliq-pump-piston-fluid-pump", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqPump_pistonFluidPump.buildType = () => extend(Pump.PumpBuild, bliqPump_pistonFluidPump, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.bliqPump_pistonFluidPump = bliqPump_pistonFluidPump;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_liquidBlock.js loaded.");
});
