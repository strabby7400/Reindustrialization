// Checked on 10-27-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_block = require("db/db_block");
  // End


  // Start: Range Attr Crafter
    function setStats_rangeAttrCrafter(obj) {
      obj.stats.remove(Stat.tiles);
      obj.stats.add(Stat.tiles, StatValues.blocks(obj.attribute, obj.floating, 1.0, true, false));

      var result = 0;
      var range = 5;
      var list = db_block.rangeAttrCrafter;
      for(let i = 0; i <= list.size - 2; i++) {
        if(obj.name == list.get(i)) {
          range = list.get(i + 1);
        };
      };
      if(range > 0) {
        obj.stats.add(Stat.range, range, StatUnit.blocks)
      };
    };


    function sumAttribute_rangeAttrCrafter(obj, attr, tx, ty) {
      if(attr == null) return 0;
      var t = Vars.world.tile(tx, ty);
      if(t == null) return 0;

      var result = 0;
      var range = 5;
      var list = db_block.rangeAttrCrafter;
      for(let i = 0; i <= list.size - 2; i++) {
        if(obj.name == list.get(i)) {
          range = list.get(i + 1);
        };
      };

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
          var ot = t.nearby(i, j);
          if(ot != null && ot.block() != null) {
            result += ot.block().attributes.get(obj.attribute);
          };
        };
      };
      return result;
    };


    function drawPlace_rangeAttrCrafter(obj, tx, ty, valid) {
      var range = 5;
      var list = db_block.rangeAttrCrafter;
      for(let i = 0; i <= list.size - 2; i++) {
        if(obj.name == list.get(i)) {
          range = list.get(i + 1);
        };
      };
      if(range <= 0) return;

      var x = tx * Vars.tilesize;
      var y = ty * Vars.tilesize;
      var cx = x + obj.offset;
      var cy = y + obj.offset;
      Drawf.dashSquare((valid ? Pal.accent : Pal.remove), cx, cy, (range + obj.size / 2.0) * Vars.tilesize * 2.0);
    };


    function updateTile_rangeAttrCrafter(obj) {
      if(obj.status().toString() != "active" || obj.attrsum <= 0.0) return;

      // Alpha control
      if(obj.effectCdStage == 0) {
        obj.effectCd += 1;
      } else {
        obj.effectCd -= 1;
      };
      if(obj.effectCdStage == 0 && obj.effectCd >= obj.effectCdThresh) {
        obj.effectCd = obj.effectCdThresh;
        obj.effectCdStage = 1;
      };
      if(obj.effectCdStage == 1 && obj.effectCd <= 0) {
        obj.effectCd = 0;
        obj.effectCdStage = 0;
      };

      // Effect control
      if(obj.wasVisible && obj.effectCd == obj.effectCdThresh) {
        var cx = obj.tileX() * Vars.tilesize + obj.block.offset;
        var cy = obj.tileY() * Vars.tilesize + obj.block.offset;
        var range = 5;
        var waveColor = "ffffffff";
        var list = db_block.rangeAttrCrafter;
        for(let i = 0; i <= list.size - 2; i++) {
          if(obj.block.name == list.get(i)) {
            range = list.get(i + 1);
            waveColor = list.get(i + 2);
          };
        };
        if(range > 0) {
          var effectRange = (range + obj.block.size / 2.0) * Vars.tilesize * 2.0 / Math.pow(2.0, 0.5);
          var effect_rangeWave = extend(WaveEffect, {
            interp: Interp.pow3In,
            lifetime: 180.0,
            sides: 4,
            colorFrom: Color.valueOf(waveColor),
            colorTo: Color.valueOf(waveColor),
            rotation: 45.0,
            sizeFrom: effectRange,
            sizeTo: 0.0,
            strokeFrom: 0.0,
            strokeTo: 3.0,
          });
          effect_rangeWave.at(cx, cy);
        };
      };
    };


    function drawSelect_rangeAttrCrafter(obj) {
      drawPlace_rangeAttrCrafter(obj.block, obj.tileX(), obj.tileY(), true);
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function setStats_extra(obj) {
      setStats_rangeAttrCrafter(obj);
    };


    function updateTile_extra(obj) {
      updateTile_rangeAttrCrafter(obj);
    };


    function drawPlace_extra(obj, x, y, rotation, valid) {
      drawPlace_rangeAttrCrafter(obj, x, y, valid);
    };


    function drawSelect_extra(obj) {
      drawSelect_rangeAttrCrafter(obj);
    };
  // End


  // Start: Region
    const minAttr_mycelialHarvester = extend(AttributeCrafter, "min-attr-mycelial-harvester", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Override
      sumAttribute(attribute, x, y) {
        return sumAttribute_rangeAttrCrafter(this, attribute, x, y);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        drawPlace_extra(this, x, y, rotation, valid);
      },
      // Override
      canPlaceOn(tile, team, rotation) {
        return true;
      },
    });
    minAttr_mycelialHarvester.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, minAttr_mycelialHarvester, {
      effectCd: 0,
      effectCdStage: 0,
      effectCdThresh: 80,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.minAttr_mycelialHarvester = minAttr_mycelialHarvester;


    const minAttr_scrapCollector = extend(AttributeCrafter, "min-attr-scrap-collector", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Override
      sumAttribute(attribute, x, y) {
        return sumAttribute_rangeAttrCrafter(this, attribute, x, y);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        drawPlace_extra(this, x, y, rotation, valid);
      },
      // Override
      canPlaceOn(tile, team, rotation) {
        return true;
      },
    });
    minAttr_scrapCollector.buildType = () => extend(AttributeCrafter.AttributeCrafterBuild, minAttr_scrapCollector, {
      effectCd: 0,
      effectCdStage: 0,
      effectCdThresh: 80,
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      drawSelect() {
        this.super$drawSelect();
        drawSelect_extra(this);
      },
    });
    exports.minAttr_scrapCollector = minAttr_scrapCollector;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_rangeAttrCrafter.js loaded.");
});
