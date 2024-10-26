// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_item = require("db/db_item");
    const db_transport = require("db/db_transport");
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


  // Start: Exposed
    const stat_exposed = new Stat("reind-exposed-to-air.name", StatCat.function);


    function setStats_exposed(obj) {
        obj.stats.add(stat_exposed, true);
    };


    Events.run(ClientLoadEvent, () => {
      const list_transportExposed = db_transport.transportExposed;
      for(let i = 0; i < list_transportExposed.size; i++) {
        var target = Vars.content.block(list_transportExposed.get(i));
        if(target != null) {
          setStats_exposed(target);
        };
      };
    });

    /* ToDo: Exposed to air behavior */
  // End


  // Start: Modify
    function modify_massDriver(obj, damage) {
      Events.run(ClientLoadEvent, () => {
        obj.bullet.damage = damage;
      });
    };
  // End


  // Start: Specific Function (Item Incinerator)
    function draw_itemIncinerator(obj) {
      var color = Color.valueOf("ffc999");
      var flameRadius = 1.8;
      var flameRadiusIn = 0.8;
      var flameRadiusScl = 4.0;
      var flameRadiusMag = 2.0;
      var flameRadiusInMag = 1.0;
      if(obj.status().toString() == "active") {
        var g = 0.3;
        var r = 0.06;
        var cr = Mathf.random(0.1);
        Draw.z(Layer.block + 0.01);
        Draw.alpha(1.0);
        Draw.rect(obj.top3, obj.x, obj.y);
        Draw.alpha(((1.0 - g) + Mathf.absin(Time.time, 8.0, g) + Mathf.random(r) - r));
        Draw.tint(color);
        Fill.circle(obj.x, obj.y, flameRadius + Mathf.absin(Time.time, flameRadiusScl, flameRadiusMag) + cr);
        Draw.color(1.0, 1.0, 1.0, 1.0);
        Fill.circle(obj.x, obj.y, flameRadiusIn + Mathf.absin(Time.time, flameRadiusScl, flameRadiusInMag) + cr);
        Draw.color();
      };
    };


    function drawLight_itemIncinerator(obj) {
      var color = Color.valueOf("ffc999");
      var lightRadius = 40.0;
      var lightAlpha = 0.65;
      var lightSinScl = 10.0;
      var lightSinMag = 5.0;
      if(obj.status().toString() == "active") {
        Drawf.light(obj.x, obj.y, (lightRadius + Mathf.absin(lightSinScl, lightSinMag)) * obj.block.size, color, lightAlpha);
      };
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Integration
    function setStats_extra(obj) {

    };

    function  updateTile_extra(obj) {
      update_itemVirt(obj);
    };
  // End


  // Start: Region
    /* dis-conv */
    const disConv_primitiveConveyor = extend(Conveyor, "dis-conv-primitive-conveyor", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disConv_primitiveConveyor.buildType = () => extend(Conveyor.ConveyorBuild, disConv_primitiveConveyor, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disConv_primitiveConveyor = disConv_primitiveConveyor;


    const disConv_improvedConveyor = extend(ArmoredConveyor, "dis-conv-improved-conveyor", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disConv_improvedConveyor.buildType = () => extend(ArmoredConveyor.ArmoredConveyorBuild, disConv_improvedConveyor, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disConv_improvedConveyor = disConv_improvedConveyor;


    const disConv_multiPortConveyor = extend(StackConveyor, "dis-conv-multi-port-conveyor", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disConv_multiPortConveyor.buildType = () => extend(StackConveyor.StackConveyorBuild, disConv_multiPortConveyor, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disConv_multiPortConveyor = disConv_multiPortConveyor;


    /* dis-brd */
    const disBrd_conveyorBridge = extend(BufferedItemBridge, "dis-brd-conveyor-bridge", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disBrd_conveyorBridge.buildType = () => extend(BufferedItemBridge.BufferedItemBridgeBuild, disBrd_conveyorBridge, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disBrd_conveyorBridge = disBrd_conveyorBridge;


    /* dis-misc */
    const disMisc_router = extend(Router, "dis-misc-router", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_router.buildType = () => extend(Router.RouterBuild, disMisc_router, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_router = disMisc_router;


    const disMisc_directionalRouter = extend(DuctRouter, "dis-misc-directional-router", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_directionalRouter.buildType = () => extend(DuctRouter.DuctRouterBuild, disMisc_directionalRouter, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_directionalRouter = disMisc_directionalRouter;


    const disMisc_filterGate = extend(Sorter, "dis-misc-filter-gate", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_filterGate.buildType = () => extend(Sorter.SorterBuild, disMisc_filterGate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_filterGate = disMisc_filterGate;


    const disMisc_blockerGate = extend(Sorter, "dis-misc-blocker-gate", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_blockerGate.buildType = () => extend(Sorter.SorterBuild, disMisc_blockerGate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_blockerGate = disMisc_blockerGate;


    const disMisc_overflowGate = extend(OverflowGate, "dis-misc-overflow-gate", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_overflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, disMisc_overflowGate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_overflowGate = disMisc_overflowGate;


    const disMisc_underflowGate = extend(OverflowGate, "dis-misc-underflow-gate", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_underflowGate.buildType = () => extend(OverflowGate.OverflowGateBuild, disMisc_underflowGate, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_underflowGate = disMisc_underflowGate;


    const disMisc_primitiveUnloader = extend(DirectionalUnloader, "dis-misc-primitive-unloader", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_primitiveUnloader.buildType = () => extend(DirectionalUnloader.DirectionalUnloaderBuild, disMisc_primitiveUnloader, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMisc_primitiveUnloader = disMisc_primitiveUnloader;


    const disMisc_itemIncinerator = extend(ItemIncinerator, "dis-misc-item-incinerator", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMisc_itemIncinerator.buildType = () => extend(ItemIncinerator.ItemIncineratorBuild, disMisc_itemIncinerator, {
      top3: Core.atlas.find("reind-dis-misc-item-incinerator-top3"),
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      // Override
      draw() {
        this.super$draw();
        draw_itemIncinerator(this);
      },
      // Override
      drawLight() {
        drawLight_itemIncinerator(this);
      },
    });
    exports.disMisc_itemIncinerator = disMisc_itemIncinerator;


    /* dis-mdr */
    const disMdr_standardMassDriver = extend(MassDriver, "dis-mdr-standard-mass-driver", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMdr_standardMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_standardMassDriver, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMdr_standardMassDriver = disMdr_standardMassDriver;
    modify_massDriver(
      disMdr_standardMassDriver,
      480,
    );


    const disMdr_localMassDriver = extend(MassDriver, "dis-mdr-local-mass-driver", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    disMdr_localMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_localMassDriver, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.disMdr_localMassDriver = disMdr_localMassDriver;
    modify_massDriver(
      disMdr_localMassDriver,
      90,
    );
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_distribution.js loaded.");
});
