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
    const stat_resistentTo = new Stat("reind-stat-resistent-to.name", StatCat.function);
    const stat_parentFluid = new Stat("reind-stat-parent-fluid.name", StatCat.function);


    function modifyStats_corrosion(obj, param) {
      obj.stats.add(stat_corrosionResistence, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_corrosionResistence = db_fluid.corrosionResistence;
      for(let i = 0; i < list_corrosionResistence.size - 1; i++) {
        if(typeof list_corrosionResistence.get(i) == "string") {
          var target = Vars.content.block(list_corrosionResistence.get(i));
          if(target != null) {
            modifyStats_corrosion(target,list_corrosionResistence.get(i + 1));
          };
        };
      };
    });


    function setStats_vulnerableTo(obj) {
      var name = obj.name;
      var list = db_fluid.corrosionResistenceMultipliers;
      if(!list.contains(name)) return;
      var liqList1 = new Seq();
      var liqList2 = new Seq();
      for(let i = 0; i < list.size - 2; i++) {
        if(name == list.get(i)) {
          if(!list.get(i + 1).includes("reind-liq-int") && !list.get(i + 1).includes("reind-gas-int")) {
            if(list.get(i + 2) < 1.0) {
              liqList1.add(Vars.content.liquid(list.get(i + 1)));
            } else {
              liqList2.add(Vars.content.liquid(list.get(i + 1)));
            };
          };
        };
      };
      if(liqList1.size > 0) {
        obj.stats.add(stat_vulnerableTo, StatValues.content(liqList1.sort()));
      };
      if(liqList2.size > 0) {
        obj.stats.add(stat_resistentTo, StatValues.content(liqList2.sort()));
      };
    };


    function modifyStats_parentFluid(obj, param) {
      obj.stats.add(stat_parentFluid, param);
    };


    Events.run(ClientLoadEvent, () => {
      const synonym_brine = db_fluid.synonym_brine;
      const synonym_lye = db_fluid.synonym_lye;
      const synonym_acidic = db_fluid.synonym_acidic;
      const synonym_slurry = db_fluid.synonym_slurry;
      const synonym_molten = db_fluid.synonym_molten;

      for(let i = 0; i < synonym_brine.size; i++) {
        var target = Vars.content.liquid(synonym_brine.get(i));
        if(target != null) {
          modifyStats_parentFluid(target, Core.bundle.get("reindTerms.brine.name"));
        };
      };

      for(let i = 0; i < synonym_lye.size; i++) {
        var target = Vars.content.liquid(synonym_lye.get(i));
        if(target != null) {
          modifyStats_parentFluid(target, Core.bundle.get("reindTerms.basicSolution.name"));
        };
      };

      /*for(let i = 0; i < synonym_acidic.size; i++) {
        var target = Vars.content.liquid(synonym_acidic.get(i));
        if(target != null) {
          modifyStats_parentFluid(target, Core.bundle.get("reindTerms.acidicSolution.name"));
        };
      };*/

      for(let i = 0; i < synonym_slurry.size; i++) {
        var target = Vars.content.liquid(synonym_slurry.get(i));
        if(target != null) {
          modifyStats_parentFluid(target, Core.bundle.get("reindTerms.slurry.name"));
        };
      };

      for(let i = 0; i < synonym_molten.size; i++) {
        var target = Vars.content.liquid(synonym_molten.get(i));
        if(target != null) {
          modifyStats_parentFluid(target, Core.bundle.get("reindTerms.melt.name"));
        };
      };
    });


    function update_corrosion(obj) {
      var liq = obj.liquids.current();
      var list1 = db_fluid.corrosionPower;
      var damage = 0;
      for(let i = 0; i < list1.size - 1; i++) {
        if(liq != null && liq.name == list1.get(i)) {
          damage = list1.get(i + 1);
        };
      };
      if(damage == 0) return;
      var list2 = db_fluid.corrosionResistence;
      var damageScl1 = 1.0
      for(let i = 0; i < list2.size - 1; i++) {
        if(obj.block.name == list2.get(i)) {
          damageScl1 = list2.get(i + 1);
        }
      };
      var list3 = db_fluid.corrosionResistenceMultipliers;
      var damageScl2 = 1.0
      if(list3.contains(obj.block.name)) {
        for(let i = 0; i < list3.size - 2; i++) {
          if(obj.block.name == list3.get(i) && liq.name == list3.get(i + 1)) {
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
      ui1.showInfoFade(Core.bundle.get("info.reind-info-effc-no-conduit.name"), 2.0);
    };
  // End


  // Start: Heat Level
    const stat_heatResistence = new Stat("reind-stat-heat-resistence.name", StatCat.function);


    function modifyStats_heatResistence(obj, param) {
      obj.stats.add(stat_heatResistence, param);
    };


    Events.run(ClientLoadEvent, () => {
      const list_heatResistence = db_heat.heatResistence;
      for(let i = 0; i < list_heatResistence.size - 1; i++) {
        if(typeof list_heatResistence.get(i) == "string") {
          var target = Vars.content.block(list_heatResistence.get(i));
          if(target != null) {
            modifyStats_heatResistence(target,list_heatResistence.get(i + 1));
          };
        };
      };
    });


    const effect_heatMelt = extend(ParticleEffect, {
      lifetime: 40.0,
      particles: 4,
      colorFrom: Color.valueOf("ffffffc0"),
      colorTo: Color.valueOf("ffffff00"),
      length: 12.0,
      sizeFrom: 0.0,
      sizeTo: 3.0,
      strokeFrom: 2.0,
      strokeTo: 0.0,
      lenFrom: 4.0,
      lenTo: 2.0,
    });


    function update_heatLevel(obj) {
      var liq = obj.liquids.current();
      var amount = obj.liquids.get(liq);
      var cap = obj.block.liquidCapacity;
      var list1 = db_heat.heatLevel;
      var list2 = db_heat.heatResistence;
      var heat;
      if(liq != null && amount > 0.01) {
        var heatLevel = 0.0;
        for(let i = 0; i <= list1.size - 1; i++) {
          if(liq.name.toString() == list1.get(i)) {
            heatLevel = list1.get(i + 1);
          };
        };
        heat = heatLevel * (amount / cap * 0.75 + 0.75) * (cap / 300.0 * 0.15 + 0.75);
      } else {
        heat = 0.0;
      };

      // Heat transfer
      if(heat != 0.0) {
        obj.liqHeat += Time.delta * (heat - obj.liqHeat) / 90.0;
      } else {
        obj.liqHeat = 0.0;
      };

      // Damage processing
      var heatResistence = 0;
      for(let i = 0; i <= list2.size - 1; i++) {
        if(obj.block.name == list2.get(i)) {
          heatResistence = list2.get(i + 1);
        };
      };
      if(obj.liqHeat >= heatResistence) {
        if(Mathf.chance(Time.delta * 0.16)) {
          effect_heatMelt.at(obj.x, obj.y, Mathf.random(360.0))
        };
        obj.damage(Time.delta * 0.2 * obj.liqHeat / heatResistence);
      };
    };


    function draw_heatLevel(obj) {
      var size = obj.block.size;
      var reg;
      switch(size) {
        case 1 :
          reg = Core.atlas.find("reind-blk-general-heat-1x");
          break;
        case 2 :
          reg = Core.atlas.find("reind-blk-general-heat-2x");
          break;
        case 3 :
          reg = Core.atlas.find("reind-blk-general-heat-3x");
          break;
        default:
          reg = Core.atlas.find("reind-blk-general-heat-1x");
      };
      var heatResistence = 1000.0;
      var list = db_heat.heatResistence;
      for(let i = 0; i <= list.size - 1; i++) {
        if(obj.block.name == list.get(i)) {
          heatResistence = list.get(i + 1);
        };
      };
      var alpha = Math.min(obj.liqHeat / (heatResistence * 1.5), 1.0);
      Drawf.additive(reg, Color.valueOf("ff3838"), alpha, obj.x, obj.y, 0.0, Layer.blockAdditive);
    };


    function drawSelect_heatLevel(obj) {
      if(obj.liqHeat == 0) return;
      obj.block.drawPlaceText(Core.bundle.get("reindTerms.fluidHeat.name") + ": " + Strings.autoFixed(obj.liqHeat, 2), obj.tile.x, obj.tile.y, true);
    };
  // End


  // Start: Sticky
    const stat_sticky = new Stat("reind-stat-sticky.name", StatCat.function);
    const stat_vulnerableToClogging = new Stat("reind-stat-vulnerable-to-clogging.name", StatCat.function);


    function modifyStats_sticky(obj) {
      obj.stats.add(stat_sticky, true);
    };


    function modifyStats_clogging(obj) {
      obj.stats.add(stat_vulnerableToClogging, true);
    };


    Events.run(ClientLoadEvent, () => {
      const list_liquidSticky = db_fluid.liquidSticky;
      const list_stickySensitive = db_fluid.stickySensitive;

      // Fluid
      for(let i = 0; i < list_liquidSticky.size; i++) {
        var target = Vars.content.liquid(list_liquidSticky.get(i));
        if(target != null) {
          modifyStats_sticky(target);
        };
      };

      // Block
      for(let i = 0; i < list_stickySensitive.size; i++) {
        var target = Vars.content.block(list_stickySensitive.get(i));
        if(target != null) {
          modifyStats_clogging(target);
        };
      };
    });


    function update_sticky(obj) {
      if(!db_fluid.stickySensitive.contains(obj.block.name)) return;

      var liq = obj.liquids.current();
      if(!db_fluid.liquidSticky.contains(liq.name)) return;

      if(obj.liquids.get(liq) > 0.0001) {
        for(let i = 0; i < 9; i++) {
          var cx = obj.x + obj.block.offset;
          var cy = obj.y + obj.block.offset;
          var off_x = Mathf.random(obj.block.size / 2.0 * Vars.tilesize);
          var off_y = Mathf.random(obj.block.size / 2.0 * Vars.tilesize);
          if(Mathf.chance(0.5)) off_x *= -1;
          if(Mathf.chance(0.5)) off_y *= -1;

          var effect_clogging = extend(ParticleEffect, {
            lifetime: 1200.0,
            particles: 1,
            colorFrom: liq.color,
            colorTo: Color.valueOf("00000000"),
            length: 0.0,
            sizeFrom: 0.0,
            sizeTo: 1.2,
            sizeInterp: Interp.pow10Out,
            strokeFrom: 8.0,
            strokeTo: 0.0,
            lenFrom: 8.0,
            lenTo: 0.0,
          });

          effect_clogging.at(cx + off_x, cy + off_y, Mathf.random(360.0));
        };

        obj.enabled = false;
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
      setStats_vulnerableTo(obj);
    };


    function updateTile_extra(obj) {
      update_corrosion(obj);
      update_effc(obj);
      update_heatLevel(obj);
      update_sticky(obj);
    };


    function draw_extra(obj) {
      draw_heatLevel(obj);
    };


    function drawSelect_extra(obj) {
      drawSelect_heatLevel(obj);
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
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.bliqCond_bronzeFluidPipe = bliqCond_bronzeFluidPipe;


    const bliqCond_woodenFluidPipe = extend(Conduit, "bliq-cond-wooden-fluid-pipe", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqCond_woodenFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_woodenFluidPipe, {
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.bliqCond_woodenFluidPipe = bliqCond_woodenFluidPipe;


    const bliqCond_steelFluidPipe = extend(ArmoredConduit, "bliq-cond-steel-fluid-pipe", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqCond_steelFluidPipe.buildType = () => extend(ArmoredConduit.ArmoredConduitBuild, bliqCond_steelFluidPipe, {
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.bliqCond_steelFluidPipe = bliqCond_steelFluidPipe;


    const bliqCond_temperedGlassFluidPipe = extend(Conduit, "bliq-cond-tempered-glass-fluid-pipe", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqCond_temperedGlassFluidPipe.buildType = () => extend(Conduit.ConduitBuild, bliqCond_temperedGlassFluidPipe, {
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.bliqCond_temperedGlassFluidPipe = bliqCond_temperedGlassFluidPipe;


    /* bliq-brd */
    const bliqBrd_fluidPipeBridge = extend(LiquidBridge, "bliq-brd-fluid-pipe-bridge", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    bliqBrd_fluidPipeBridge.buildType = () => extend(LiquidBridge.LiquidBridgeBuild, bliqBrd_fluidPipeBridge, {
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
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
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
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
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
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
      liqHeat: 0.0,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      draw() {
        this.super$draw();
        draw_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.bliqPump_pistonFluidPump = bliqPump_pistonFluidPump;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_liquidBlock.js loaded.");
});
