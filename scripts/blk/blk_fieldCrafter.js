// Checked on 10-26-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_block = require("db/db_block");
    const db_planet = require("db/db_planet");
  // End


  // Start: Effect Ripple
    const list_effectRipple = new Seq([
      "reind-pow-gen-tidal-generator",
    ]);


    const effect_rippleWave = extend(WaveEffect, {
      layer: Layer.floor + 0.005,
      lifetime: 90.0,
      sides: -1,
      colorFrom: Color.valueOf("70b6ff60"),
      colorTo: Color.valueOf("70b6ff60"),
      sizeFrom: 0.0,
      sizeTo: 10.0,
      strokeFrom: 2.0,
      strokeTo: 0.0,
    });


    function updateTile_effectRipple(obj) {
      if(!list_effectRipple.contains(obj.block.name)) return;
      var cx = obj.tileX() * Vars.tilesize + obj.block.offset;
      var cy = obj.tileY() * Vars.tilesize + obj.block.offset;
      var ox = Mathf.random(obj.block.size) * 5.0;
      var oy = Mathf.random(obj.block.size) * 5.0;
      ox = Mathf.chance(0.5) ? ox : -ox;
      oy = Mathf.chance(0.5) ? oy : -oy;
      if(obj.wasVisible && Mathf.chance(Time.delta * 0.04)) {
        effect_rippleWave.at(cx + ox, cy + oy);
      };
    };
  // End


  // Start: Field Crafter
    function modifyStats_fieldCrafter(obj, param) {
      obj.stats.add(Stat.range, param, StatUnit.blocks);
    };


    Events.run(ClientLoadEvent, () => {
      const list_fieldCrafter = db_block.fieldCrafter;
      for(let i = 0; i <= list_fieldCrafter.size - 1; i++) {
        if(typeof list_fieldCrafter.get(i) == "string") {
          var target = Vars.content.block(list_fieldCrafter.get(i));
          if(target != null) {
            modifyStats_fieldCrafter(target, list_fieldCrafter.get(i + 1));
          };
        };
      };
    });


    function drawPlace_fieldCrafter(obj, tx, ty, valid) {
      // Get range
      var range = 5;
      var list = db_block.fieldCrafter;
      for(let i = 0; i <= list.size - 1; i++) {
        if(obj.name == list.get(i)) {
          range = list.get(i + 1);
        };
      };

      // Draw dash square
      var x = tx * Vars.tilesize;
      var y = ty * Vars.tilesize;
      var cx = x + obj.offset;
      var cy = y + obj.offset;
      Drawf.dashSquare((valid ? Pal.accent : Pal.remove), cx, cy, (range + obj.size / 2.0) * Vars.tilesize * 2.0);
    };


    function canPlaceOn_fieldCrafter(obj, tile, team) {
      // Get range
      var range = 5;
      var list = db_block.fieldCrafter;
      for(let i = 0; i <= list.size - 1; i++) {
        if(obj.name == list.get(i)) {
          range = list.get(i + 1);
        };
      };

      // Check any other generators of the same type
      var size = obj.size;
      var left;
      var right;
      if(size % 2 == 1) {
        left = -((size - 1) / 2 + range);
        right = -left;
      } else {
        left = -(size / 2 - 1 + range);
        right = -left + 1;
      };
      for(let i = left; i <= right; i++) {
        for(let j = left; j <= right; j++) {
          var t = tile.nearby(i, j);
          if(t != null && t.block() != null && t.block().name == obj.name) {
            return false;
          };
        };
      };
      return true;
    };


    function drawSelect_fieldCrafter(obj) {
      drawPlace_fieldCrafter(obj.block, obj.tileX(), obj.tileY(), true);
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
      updateTile_effectRipple(obj);
    };


    function drawSelect_extra(obj) {
      drawSelect_fieldCrafter(obj);
    };
  // End


  // Start: Region
    const minAttr_placerMiner = extend(AttributeCrafter, "min-attr-placer-miner", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Override
      drawPlace(x, y, rotation, valid) {
        drawPlace_fieldCrafter(this, x, y, valid);
      },
      // Override
      canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && canPlaceOn_fieldCrafter(this, tile, team);
      },
    });
    minAttr_placerMiner.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, minAttr_placerMiner, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.minAttr_placerMiner = minAttr_placerMiner;


    const powGen_tidalGenerator = extend(ThermalGenerator, "pow-gen-tidal-generator", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Override
      drawPlace(x, y, rotation, valid) {
        drawPlace_fieldCrafter(this, x, y, valid);
      },
      // Specific
      canPlaceOn(tile, team, rotation) {
        if(!db_planet.hasTides.contains(Vars.state.rules.planet.name)) {
          this.drawPlaceText(Core.bundle.get("info.reind-info-no-tides.name"), tile.x, tile.y, false);
          return false;
        };
        return this.super$canPlaceOn(tile, team, rotation) && canPlaceOn_fieldCrafter(this, tile, team);
      },
    });
    powGen_tidalGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_tidalGenerator, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.powGen_tidalGenerator = powGen_tidalGenerator;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_fieldCrafter.js loaded.");
});
