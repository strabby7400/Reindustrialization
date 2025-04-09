/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const cfg_update = require("reind/cfg/cfg_update");

    const frag_item = require("reind/frag/frag_item");
    const frag_recipe = require("reind/frag/frag_recipe");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_heat = require("reind/mdl/mdl_heat");
    const mdl_recipe = require("reind/mdl/mdl_recipe");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: 2side
    const isActive_2side = function(b) {
      if(mdl_game.isDirBlocked(b, 0) && mdl_game.isDirBlocked(b, 2)) return false;

      return true;
    };
    exports.isActive_2side = isActive_2side;


    const drawPlace_2side = function(blk, t, rot) {
      mdl_game._tsRot_2side(t, rot, blk.size).forEach(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawPlace_2side = drawPlace_2side;


    const drawSelect_2side = function(b) {
      mdl_game._tsRot_2side(b.tile, b.rotation, b.block.size).forEach(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawSelect_2side = drawSelect_2side;
  // End


  // Part: Core Dump
    const setStats_coreDump = function(blk, rad) {
      if(rad != null) blk.stats.add(db_stat.connectionRange, rad / Vars.tilesize, StatUnit.blocks);
    };
    exports.setStats_coreDump = setStats_coreDump;


    const dump_coreDump = function(b, itm, rad) {
      if(rad == null) return false;

      var b_core = b.closestCore();

      var shouldCoreDump = true;
      if(mdl_game._dst(b, b_core) > rad) shouldCoreDump = false;
      if(b.power != null && b.power.status < 0.9999) shouldCoreDump = false;

      return shouldCoreDump ? frag_item.dumpItem(b, [b_core], itm) : b.super$dump(itm);
    };
    exports.dump_coreDump = dump_coreDump;


    const drawPlace_coreDump = function(blk, tx, ty, rot, valid, rad) {
      if(rad == null) return;
      mdl_draw.drawPlaceCircle(blk, Vars.world.tile(tx, ty), valid, rad, false);
    };
    exports.drawPlace_coreDump = drawPlace_coreDump;


    const draw_coreDump = function(b, rad) {
      if(b.items == null || rad == null) return;
      if(b.items.total() > 1) return;
      if(b.power != null && b.power.status < 0.9999) return;

      var b_core = b.closestCore();
      if(mdl_game._dst(b, b_core) > rad) return;
      mdl_draw.drawItemTransfer(b, b_core);
    };
    exports.draw_coreDump = draw_coreDump;


    const drawSelect_coreDump = function(b, rad) {
      if(rad == null) return;
      mdl_draw.drawSelectCircle(b, rad, false);

      var b_core = b.closestCore();
      if(mdl_game._dst(b, b_core) > rad) return;
      mdl_draw.drawBuildRectConnector(b, b_core);
    };
    exports.drawSelect_coreDump = drawSelect_coreDump;
  // End


  // Part: Crop
    const sumGrowthEffc = function(blk, t, forced) {
      if(forced == null) forced = false;
      if(blk == null || t == null) return 0.0;

      return forced ? 1.0 : mdl_attr._sumAttr_rect(blk, t, "reind-attr-env-growth", 2) / Math.pow(blk.size + 4, 2);
    };
    exports.sumGrowthEffc = sumGrowthEffc;


    const _cropTuple = function(blk) {
      var tup = null;
      var arr = db_block.db["map"]["growth"];
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 5) {
          var nm = arr[i];
          if(blk.name != nm) continue;
          var growTime = arr[i + 1];
          var growStages = arr[i + 2];
          var cropYield = arr[i + 3];
          var stageScr = arr[i + 4];

          tup = [growTime, growStages, cropYield, stageScr];
        };
      };

      return tup;
    };
    exports._cropTuple = _cropTuple;


    const _cropYieldTuple = function(cropYield, growStage) {
      var tup = null;
      var arr = cropYield;
      var cap = arr.length;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i += 4) {
        var stage = arr[i];
        if(growStage != stage) continue;
        var backTo = arr[i + 1];
        var batch = arr[i + 2];
        var harvestScr = arr[i + 3];

        tup = [backTo, batch, harvestScr];
      };

      return tup;
    };
    exports._cropYieldTuple = _cropYieldTuple;
  // End


  // Part: Energy Point
    const _epUnitMap = function(pos_gn, rad, team, caller) {
      var arr = [];
      if(pos_gn == null || rad == null || team == null) return arr;

      mdl_game._unitsAllied(pos_gn, rad, team).forEach(unit => {
        if(unit != caller) {
          var ep = mdl_data.read_1n1v(db_unit.db["ep"]["provided"], unit.type.name);
          if(ep != null) {
            arr.push(unit);
            arr.push(ep);
          };
        };
      });

      return arr;
    };
    exports._epUnitMap = _epUnitMap;


    const _epUnits = function(pos_gn, rad, team, caller) {
      var arr = [];
      var map = _epUnitMap(pos_gn, rad, team, caller);

      var cap = map.length;
      if(cap == 0) return arr;
      for(let i = 0; i < cap; i += 2) {
        arr.push(map[i]);
      };

      return arr;
    };
    exports._epUnits = _epUnits;


    const _epCount = function(pos_gn, rad, team, caller) {
      var map = _epUnitMap(pos_gn, rad, team, caller);

      var ep_fi = 0.0;
      var cap = map.length;
      if(cap == 0) return ep_fi;
      for(let i = 0; i < cap; i += 2) {
        ep_fi += map[i + 1];
      };

      return ep_fi;
    };
    exports._epCount = _epCount;


    const _epFrac = function(e) {
      var r = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.db["ep"]["range"], e.type.name) : mdl_data.read_1n1v(db_block.db["ep"]["range"], e.block.name, 5);
      var ep_req = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.db["ep"]["requirement"], e.type.name) : mdl_data.read_1n1v(db_block.db["ep"]["requirement"], e.block.name, 0.0);

      var ep = _epCount(e, r * Vars.tilesize, e.team, (e instanceof Unit) ? e : null);

      return ep / ep_req;
    };
    exports._epFrac = _epFrac;


    const isActive_ep = function(e) {
      return _epFrac(e) > 0.99;
    };
    exports.isActive_ep = isActive_ep;


    const setStats_ep = function(ct) {
      var r = (ct instanceof UnitType) ? mdl_data.read_1n1v(db_unit.db["ep"]["range"], ct.name) : mdl_data.read_1n1v(db_block.db["ep"]["range"], ct.name);
      if(r != null) ct.stats.add(db_stat.epRange, r, StatUnit.blocks);

      var ep_req = (ct instanceof UnitType) ? mdl_data.read_1n1v(db_unit.db["ep"]["requirement"], ct.name) : mdl_data.read_1n1v(db_block.db["ep"]["requirement"], ct.name);
      if(ep_req != null) ct.stats.add(db_stat.epRequired, ep_req);
    };
    exports.setStats_ep = setStats_ep;


    const setBars_ep = function(blk) {
      blk.addBar("reind-ep", b => new Bar(
        "term.reind-term-energy-points.name",
        Pal.techBlue,
        () => Math.min(_epFrac(b), 1.0),
      ));
    };
    exports.setBars_ep = setBars_ep;


    const draw_ep = function(e) {
      var r = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.db["ep"]["range"], e.type.name) : mdl_data.read_1n1v(db_block.db["ep"]["range"], e.block.name);
      if(r == null) return;

      _epUnits(e, r * Vars.tilesize, e.team, (e instanceof Unit) ? e : null).forEach(unit => {
        if(e instanceof Unit) {
          mdl_draw.drawFlickerLine(unit, e, Pal.techBlue, 0.5, false, 0.75, 58.88);
        } else if(cfg_update.state_drawLightning) {
          mdl_effect.flashAt(unit, Color.valueOf("ffffff80"));
          mdl_effect.chainLightning(unit, e, Pal.techBlue);
        };
      });
    };
    exports.draw_ep = draw_ep;
  // End


  // Part: Flammable
    const setStats_flammable = function(blk) {
      blk.stats.add(db_stat.flammable, true);
    };
    exports.setStats_flammable = setStats_flammable;


    const updateTile_flammable = function(b) {
      if(Mathf.chance(0.99)) return;

      var ts = mdl_game._tsLinked(b.tile);
      var rheat = 0.0;
      ts.forEach(ot => rheat += mdl_heat._rangeHeat(ot));
      rheat /= ts.length;

      if(rheat > 6.0) Fires.create(ts[Math.round(Mathf.random(ts.length - 1) - 0.4999)]);
    };
    exports.updateTile_flammable = updateTile_flammable;
  // End


  // Part: Magnetic
    const setStats_magnetic = function(blk) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["magnetic"], blk.name, 2);
      blk.stats.add(db_stat.magneticallyVulnerable, true);
      blk.stats.add(db_stat.magneticRange, r, StatUnit.blocks);
    };
    exports.setStats_magnetic = setStats_magnetic;


    const updateTile_magnetic = function(b) {
      if(b.status() != BlockStatus.active || Mathf.chance(0.98)) return;

      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["magnetic"], b.block.name, 2)
      var count = 0;
      mdl_game._bs(mdl_game._tsRect(b.tile, r, b.block.size)).forEach(ob => {
        if(ob != b && mdl_content.isMagnetic(ob.block) && ob.status() == BlockStatus.active) count += Math.pow(ob.block.size, 2);
      });

      if(count == 0) return;
      var dmg = b.maxHealth * 0.005 * count + 5.0;
      b.damagePierce(dmg);
      mdl_effect.damageAt(b, dmg);
      mdl_effect.flashAt(b);
    };
    exports.updateTile_magnetic = updateTile_magnetic;


    const drawPlace_magnetic = function(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["magnetic"], blk.name, 2);
      var t = Vars.world.tile(tx, ty);
      mdl_draw.drawPlaceRect(blk, t, Pal.techBlue, r, true);
      mdl_game._bs(mdl_game._tsRect(t, r, blk.size)).forEach(ob => {
        if(mdl_content.isMagnetic(ob.block)) mdl_draw.drawBuildArea(ob, Pal.techBlue);
      });
    };
    exports.drawPlace_magnetic = drawPlace_magnetic;


    const drawSelect_magnetic = function(b) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["magnetic"], b.block.name, 2);
      mdl_draw.drawSelectRect(b, r, true, Pal.techBlue);
      mdl_game._bs(mdl_game._tsRect(b.tile, r, b.block.size)).forEach(ob => {
        if(ob != b && mdl_content.isMagnetic(ob.block)) mdl_draw.drawBuildArea(ob, Pal.techBlue);
      });
    };
    exports.drawSelect_magnetic = drawSelect_magnetic
  // End


  // Part: Restriction Range
    const setStats_restrict = function(blk) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      blk.stats.add(db_stat.restrictionRange, r, StatUnit.blocks);
    };
    exports.setStats_restrict = setStats_restrict;


    const canPlaceOn_restrict = function(blk, t, team, rot) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      if(mdl_game._bsSame(mdl_game._tsRect(t, r, blk.size), blk.name, Vars.player.team()).length > 0) return false;

      return true;
    };
    exports.canPlaceOn_restrict = canPlaceOn_restrict;


    const drawPlace_restrict = function(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      var t = Vars.world.tile(tx, ty);
      mdl_draw.drawPlaceRect(blk, t, valid, r, true);
      mdl_game._bsSame(mdl_game._tsRect(t, r, blk.size), blk.name, Vars.player.team()).forEach(ob => mdl_draw.drawBuildArea(ob, valid));
    };
    exports.drawPlace_restrict = drawPlace_restrict;


    const drawSelect_restrict = function(b) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5);
      mdl_draw.drawSelectRect(b, r, true);
    };
    exports.drawSelect_restrict = drawSelect_restrict;
  // End


  // Part: Structure
    const _structPair = function(blk) {
      var pair = null;
      var arr = db_block.db["matrix"]["multiBlock"];
      var cap = arr.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 3) {
          var nm = arr[i];
          if(blk.name != nm) continue;
          var nm_tg = arr[i + 1];
          var blk_tg = Vars.content.block(nm_tg);
          if(blk_tg == null) continue;
          var plan = arr[i + 2];

          pair = [blk_tg, plan];
        };
      };

      return pair;
    };
    exports._structPair = _structPair;


    const _structPlanReq = function(plan) {
      var arr = [];

      Vars.content.blocks().each(blk => {
        var cap = plan.length;
        var count = 0;
        for(let i = 0; i < cap; i++) {
          if(plan[i] == blk.name) count++;
        };
        if(count > 0) arr.push(blk, count);
      });

      return arr;
    };
    exports._structPlanReq = _structPlanReq;


    const isStructureComplete = function(t, plan) {
      if(t == null || plan == null) return false;

      var cond = true;
      var cap = plan.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var pon = plan[i];
          var nm = plan[i + 1];
          var ot = t.nearby(pon);

          if(ot == null) {
            cond = false;
          } else {
            if(ot.build == null || ot.build.block.name != nm) cond = false;
          };
        };
      };

      return cond;
    };
    exports.isStructureComplete = isStructureComplete;


    const draw_structure = function(t, plan) {
      if(t == null || plan == null) return;

      var cap = plan.length;
      if(cap > 0) {
        for(let i = 0; i < cap; i += 2) {
          var pon = plan[i];
          var nm = plan[i + 1];
          var blk = mdl_content._ct_nm(nm);
          var ot = t.nearby(pon);

          if(blk != null && ot != null) {
            var reg = mdl_content._buildReg(blk);
            var color_gn = Color.white;
            if(ot.solid()) color_gn = false;
            if(ot.build != null) color_gn = false;

            if(ot.build == null || ot.build.block.name != nm) mdl_draw.drawPlaceRegion(blk, ot, color_gn);
          };
        };
      };
    };
    exports.draw_structure = draw_structure;
  // End


  // Part: Terrain
    const arr_ter = [
      "dirt", "dirt",
      "salt", "salt",
      "sand", "sand",
      "stone", "stone",
      "water", "water",
      "sea", "sea",
      "river", "river",
      "beach", "beach",
    ];


    const _terrain = function(t, size) {
      if(size == null) size = 1;
      if(t == null) return;

      var ts = mdl_game._tsRect(t, 5, size);
      var count_t = ts.length;
      if(count_t == 0) return;
      var count_dirt = 0;
      var count_salt = 0;
      var count_sand = 0;
      var count_stone = 0;
      var count_water = 0;
      var count_sea = 0;
      ts.forEach(ot => {
        var str = ot.floor().walkSound.toString();
        if(str.includes("se-step-dirt") || str.includes("se-step-grass") || str.includes("se-step-mud")) count_dirt += 1;
        if(str.includes("se-step-salt")) count_salt += 1;
        if(str.includes("se-step-sand")) count_sand += 1;
        if(str.includes("se-step-gravel") || str.includes("se-step-stone")) count_stone += 1;
        if(str.includes("splash")) count_water += 1;
        if(str.includes("se-step-sea")) count_sea += 1;
      });

      var thr = VAR.terrain_floorThreshold;
      var ter = null;
      if(count_dirt / count_t > thr) ter = "dirt";
      if(count_salt / count_t > thr) ter = "salt";
      if(count_sand / count_t > thr) ter = "sand";
      if(count_stone / count_t > thr) ter = "stone";
      if(count_water / count_t > thr) ter = "water";
      if(count_sea / count_t > thr) ter = "sea";
      if(count_water / count_t > thr * 0.7 && (count_dirt + count_sand + count_stone) / count_t > thr * 0.3) ter = "river";
      if(count_sea / count_t > thr * 0.7 && count_sand / count_t > thr * 0.3) ter = "beach";

      return ter;
    };
    exports._terrain = _terrain;


    const _terrainVal = function(ter) {
      if(Vars.headless) return "";

      var terVal = null;
      var cap = arr_ter.length;
      for(let i = 0; i < cap; i += 2) {
        if(arr_ter[i] == ter) terVal = mdl_text._term("terrain-" + arr_ter[i + 1]);
      };
      if(terVal == null) terVal = mdl_text._term("terrain-transition");

      return terVal;
    };
    exports._terrainVal = _terrainVal;


    const _ters = function(ters_gn, shouldReturnVal) {
      var arr = [];
      if(ters_gn == null) return arr;

      if(shouldReturnVal == null) shouldReturnVal = false;

      if(ters_gn instanceof Array) {
        ters_gn.forEach(ter => arr.push(shouldReturnVal ? _terrainVal(ter) : ter));
      } else {arr.push(shouldReturnVal ? _terrainVal(ters_gn) : ters_gn)};

      return arr;
    };
    exports._ters = _ters;


    const setStats_terrain = function(blk, ters_gn, mode) {
      if(blk == null || ters_gn == null) return;
      if(mode != "enable" && mode != "disable") return;

      blk.stats.add((mode == "enable") ? db_stat.requiredTerrain : db_stat.disabledIn, mdl_text._tagText(_ters(ters_gn, true)));
    };
    exports.setStats_terrain = setStats_terrain;


    const canPlaceOn_terrain = function(blk, ters_gn, mode, t, team, rot, offTy) {
      if(offTy == null) offTy = 0;
      if(t == null) return false;
      if(mode != "enable" && mode != "disable") return false;

      var ter = _terrain(t, blk.size);
      var terVal = _terrainVal(ter);
      var ters = _ters(ters_gn);
      var valid = true;
      if(mode == "disable") {
        if(ter != null && ters.includes(ter)) {
          mdl_draw.drawPlaceText(blk, t, false, mdl_text._info("terrain-disabled") + " " + terVal, offTy);
          valid = false;
        };
      } else {
        if(ter == null || !ters.includes(ter)) {
          mdl_draw.drawPlaceText(blk, t, false, mdl_text._info("terrain-mismatched") + " " + terVal, offTy);
          valid = false;
        };
      };

      return valid;
    };
    exports.canPlaceOn_terrain = canPlaceOn_terrain;
  // End


  // Part: Total Progress
    const _tprogRate_effc = function(b) {
      return b.efficiency;
    };
    exports._tprogRate_effc = _tprogRate_effc;


    const _tprogRate_liq = function(b, liq) {
      if(b.liquids == null || liq == null) return 0.0;

      return b.liquids.get(liq) / b.block.liquidCapacity;
    };
    exports._tprogRate_liq = _tprogRate_liq;


    const _tprogRate_heat = function(b, cap) {
      if(cap == null) cap = mdl_heat._heatLimit(b.block);

      return Math.min(mdl_heat._heat(b) / cap, 1.0);
    };
    exports._tprogRate_heat = _tprogRate_heat;


    const _tprogInc = function(b, mode, param, warmup) {
      if(mode != "effc" && mode != "liq" && mode != "heat") return 0.0;

      var inc = 0.0;
      switch(mode) {
        case "effc" :
          inc = b.edelta() * _tprogRate_effc(b);
          break;
        case "liq" :
          inc = b.edelta() * _tprogRate_liq(b, param);
          break;
        case "heat" :
          inc = b.edelta() * _tprogRate_heat(b, param);
          break;
      };
      if(warmup != null) inc *= warmup;

      return inc;
    };
    exports._tprogInc = _tprogInc;
  // End


  // Part: Waste
    const arr_waste = [
      "reind-liq-was-waste-water",
      "reind-liq-was-waste-water-acidic",
      "reind-liq-was-waste-water-basic",
      "reind-liq-was-waste-slurry",
    ];


    const setBars_was = function(blk, rcFi) {
      var cap = mdl_recipe._rcSize(rcFi);
      var cap1 = arr_waste.length;
      var arr = [];

      for(let i = 0; i < cap; i++) {
        for(let j = 0; j < cap1; j++) {
          var nm = arr_waste[j];
          if(frag_recipe.hasOutput(rcFi, i, nm) && !arr.includes(nm)) arr.push(nm);
        };
      };

      arr.forEach(nm => blk.addLiquidBar(Vars.content.liquid(nm)));
    };
    exports.setBars_was = setBars_was;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_faci.js loaded.");
});
