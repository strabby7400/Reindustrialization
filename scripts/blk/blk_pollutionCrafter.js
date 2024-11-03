// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const ct_fluid = require("ct/ct_fluid");
    const db_block = require("db/db_block");
    const db_pollution = require("db/db_pollution");
    const module_pollution = require("module/module_pollution");
  // End


  // Start: Pollution
    const stat_pollutionTolerance = new Stat("reind-pollution-tolerance.name", StatCat.function);


    function modifyStats_pollutionCrafter(obj, tolerance) {
      obj.stats.add(stat_pollutionTolerance, tolerance);
    };


    Events.run(ClientLoadEvent, () => {
      const list_pollutionCrafter = db_block.pollutionCrafter;
      for(let i = 0; i < list_pollutionCrafter.size - 1; i++) {
        if(typeof list_pollutionCrafter.get(i) == "string") {
          var target = Vars.content.block(list_pollutionCrafter.get(i));
          var tolerance = list_pollutionCrafter.get(i + 1);
          if(target != null && tolerance > 0) {
            modifyStats_pollutionCrafter(target, tolerance);
          };
        };
      };
    });
  // End


  // Start: Pollution Blocks
    const stat_pollutionInfluence = new Stat("reind-pollution-influence.name", StatCat.function);
    const stat_pollutionDynamicInfluence = new Stat("reind-pollution-dynamic-influence.name", StatCat.function);
    const statUnit_perBlock = new StatUnit("reind-statu-per-block.name", false);


    function modifyStats_pollutionInfluence(obj, param) {
      obj.stats.add(stat_pollutionInfluence, param, statUnit_perBlock);
    };


    function modifyStats_pollutionDynamicInfluence(obj, param) {
      obj.stats.add(stat_pollutionDynamicInfluence, param, statUnit_perBlock);
    };


    Events.run(ClientLoadEvent, () => {
      // Floor
      for(let i = 0; i < db_pollution.floor.size - 1; i++) {
        if(typeof db_pollution.floor.get(i) == "string") {
          var target = Vars.content.block(db_pollution.floor.get(i));
          if(target != null) {
            modifyStats_pollutionInfluence(
              target,
              db_pollution.floor.get(i + 1),
            );
          };
        };
      };

      // Block
      for(let i = 0; i < db_pollution.block.size - 1; i++) {
        if(typeof db_pollution.block.get(i) == "string") {
          var target = Vars.content.block(db_pollution.block.get(i));
          if(target != null) {
            modifyStats_pollutionInfluence(
              target,
              db_pollution.block.get(i + 1),
            );
          };
        };
      };

      // Build
      for(let i = 0; i < db_pollution.build.size - 1; i++) {
        if(typeof db_pollution.build.get(i) == "string") {
          var target = Vars.content.block(db_pollution.build.get(i));
          if(target != null) {
            modifyStats_pollutionInfluence(
              target,
              db_pollution.build.get(i + 1),
            );
          };
        };
      };

      // Water
      for(let i = 0; i < db_pollution.water.size - 1; i++) {
        if(typeof db_pollution.water.get(i) == "string") {
          var target = Vars.content.block(db_pollution.water.get(i));
          if(target != null) {
            modifyStats_pollutionDynamicInfluence(
              target,
              db_pollution.water.get(i + 1),
            );
          };
        };
      };
    });
  // End


  // Start: Specific Function (Latex Tapper)
    function setStats_latexTapper(obj) {
      obj.stats.remove(Stat.itemCapacity);
      obj.stats.remove(Stat.drillSpeed);
      obj.stats.remove(Stat.output);
      obj.stats.add(
        new Stat("output", StatCat.crafting),
        ct_fluid.liqBio_latex,
        3.0,
        true,
      );
    };


    function setBars_latexTapper(obj) {
      obj.removeBar("drillspeed");
    };


    function getEfficiency_latexTapper(block, tx, ty, rotation) {
      if(Vars.world.tile(tx, ty) == null) return 0.0;

      var size = block.size;
      var pollution = module_pollution.worldPP;
      var list = db_block.pollutionCrafter;
      var tolerance = 200.0;
      for(let i = 0; i < list.size - 1; i++) {
        if(block.name.toString() == list.get(i)) {
          tolerance = list.get(i + 1);
        };
      };

      var eff = 0.0;
      var cornerX = tx - (size - 1) / 2;
      var cornerY = ty - (size - 1) / 2;
      for(let i = 0; i < size; i++) {
        var rx = 0;
        var ry = 0;
        switch(rotation) {
          case 0 :
            rx = cornerX + size;
            ry = cornerY + i;
            break;
          case 1 :
            rx = cornerX + i;
            ry = cornerY + size;
            break;
          case 2 :
            rx = cornerX - 1;
            ry = cornerY + i;
            break;
          case 3 :
            rx = cornerX + i;
            ry = cornerY - 1;
            break;
        };
        var ot = Vars.world.tile(rx, ry);
        if(ot != null && ot.solid()) {
          eff += ot.block().attributes.get(block.attribute);
        };
      };
      eff *= Math.max((1 - (pollution / tolerance)), 0.1);
      return eff;
    };


    function updateTile_latexTapper(obj) {
      obj.warmup = Mathf.approachDelta(obj.warmup, Mathf.num(obj.efficiency > 0), 1.0 / 40.0);
      var dx = Geometry.d4x[obj.rotation] * 0.5;
      var dy = Geometry.d4y[obj.rotation] * 0.5;
      var eff = getEfficiency_latexTapper(obj.block, obj.tile.x, obj.tile.y, obj.rotation);
      if(obj.wasVisible && obj.shouldConsume() && Mathf.chanceDelta(obj.block.updateEffectChance * obj.warmup)) {
        obj.block.updateEffect.at(
          obj.tile.x * Vars.tilesize + Mathf.range(3.0) - dx * Vars.tilesize,
          obj.tile.y * Vars.tilesize + Mathf.range(3.0) - dy * Vars.tilesize,
          obj.block.mapColor,
        );
      };
      obj.lastEfficiency = eff * obj.timeSacle * obj.efficiency;
      if(obj.shouldConsume()) {
        obj.liquids.add(ct_fluid.liqBio_latex, Time.delta * 0.05 * eff);
        if((obj.time += obj.edelta() * eff) >= obj.block.drillTime) {
          obj.time %= obj.block.drillTime;
          if(obj.block.output != Items.sand) {
            obj.items.add(obj.block.output, 1);
          };
        };
      };
      obj.totalTime += obj.edelta() * obj.warmup;
      function timer(obj, index, time) {
        if(time > 99999.9) return false;
        return obj.timer.get(index, time);
      };
      if(timer(obj, obj.block.timerDump, obj.block.dumpTime)) {
        obj.dump();
        obj.dumpLiquid(ct_fluid.liqBio_latex);
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


    function updateTile_extra(obj) {

    };
  // End


  // Start: Region
    const minTree_latexTapper = extend(WallCrafter, "min-tree-latex-tapper", {
      // Specific
      setStats() {
        this.super$setStats();
        setStats_latexTapper(this);
      },
      // Specific
      setBars() {
        this.super$setBars();
        setBars_latexTapper(this);
      },
    });
    minTree_latexTapper.buildType = () => extend(WallCrafter.WallCrafterBuild, minTree_latexTapper, {
      // Specific
      updateTile() {
        updateTile_latexTapper(this);
      },
    });
    exports.minTree_latexTapper = minTree_latexTapper;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_pollutionBlock.js loaded.");
});
