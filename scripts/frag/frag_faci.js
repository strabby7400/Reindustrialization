/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const VAR = require("reind/glb/glb_vars");

    const frag_item = require("reind/frag/frag_item");
    const frag_recipe = require("reind/frag/frag_recipe");

    const mdl_attr = require("reind/mdl/mdl_attr");
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
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
      mdl_game._liTileRot_2side(t, rot, blk.size).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawPlace_2side = drawPlace_2side;


    const drawSelect_2side = function(b) {
      mdl_game._liTileRot_2side(b.tile, b.rotation, b.block.size).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawSelect_2side = drawSelect_2side;
  // End


  // Part: Core Dump
    const setStats_coreDump = function(blk, rad) {
      if(rad != null) blk.stats.add(db_stat.connectionRange, rad / Vars.tilesize, StatUnit.blocks);
    };
    exports.setStats_coreDump = setStats_coreDump;


    const li_48512244 = new Seq();
    const dump_coreDump = function(b, itm, rad) {
      var li = li_48512244.clear();

      if(rad == null) return false;

      var b_core = b.closestCore();

      var shouldCoreDump = true;
      if(mdl_game._dst(b, b_core) > rad) shouldCoreDump = false;
      if(b.power != null && b.power.status < 0.9999) shouldCoreDump = false;

      return shouldCoreDump ? frag_item.dumpItem(b, li.add(b_core), itm) : b.super$dump(itm);
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
      var val = null;
      var li = db_block.db["map"]["growth"];
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i++) {
          if(i % 5 != 0) continue;

          var nm = li.get(i);
          if(blk.name != nm) continue;
          var growTime = li.get(i + 1);
          var growStages = li.get(i + 2);
          var cropYield = li.get(i + 3);
          var stageScr = li.get(i + 4);

          val = [growTime, growStages, cropYield, stageScr];
        };
      };

      return val;
    };
    exports._cropTuple = _cropTuple;


    const _cropYieldTuple = function(cropYield, growStage) {
      var val = null;
      var li = cropYield;
      var cap = li.size;
      if(cap == 0) return val;
      for(let i = 0; i < cap; i++) {
        if(i % 4 != 0) continue;

        var stage = li.get(i);
        if(growStage != stage) continue;
        var backTo = li.get(i + 1);
        var batch = li.get(i + 2);
        var harvestScr = li.get(i + 3);

        val = [backTo, batch, harvestScr];
      };

      return val;
    };
    exports._cropYieldTuple = _cropYieldTuple;
  // End


  // Part: Energy Point
    const li_73097008 = new Seq();
    const _epUnitMap = function(pos_gn, rad, team, caller) {
      var li = li_73097008.clear();

      if(pos_gn == null || rad == null || team == null) return li;

      mdl_game._filterTeam(mdl_game._liUnit(pos_gn, rad, caller), team).each(unit => {
        var ep = mdl_data.read_1n1v(db_unit.db["ep"]["provided"], unit.type.name);
        if(ep != null) {
          li.add(unit);
          li.add(ep);
        };
      });

      return li;
    };
    exports._epUnitMap = _epUnitMap;


    const li_95226458 = new Seq();
    const li_65225877 = new Seq();
    const _epLiUnit = function(pos_gn, rad, team, caller) {
      var li = li_95226458.clear();
      var li1 = li_65225877.clear();

      li.addAll(_epUnitMap(pos_gn, rad, team, caller));

      var cap = li.size;
      if(cap == 0) return li;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        li1.add(li.get(i));
      };

      return li1;
    };
    exports._epLiUnit = _epLiUnit;


    const li_22579666 = new Seq();
    const _epCount = function(pos_gn, rad, team, caller) {
      var li = li_22579666.clear();

      li.addAll(_epUnitMap(pos_gn, rad, team, caller));

      var ep_fi = 0.0;
      var cap = li.size;
      if(cap == 0) return ep_fi;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        ep_fi += li.get(i + 1);
      };

      return ep_fi;
    };
    exports._epCount = _epCount;


    const _epFrac = function(e) {
      var r = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.db["ep"]["range"], e.type.name) : mdl_data.read_1n1v(db_block.db["ep"]["range"], e.block.name);
      if(r == null) return true;
      var ep_req = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.db["ep"]["requirement"], e.type.name) : mdl_data.read_1n1v(db_block.db["ep"]["requirement"], e.block.name);
      if(ep_req == null) return true;

      var ep = _epCount(
        e,
        r * Vars.tilesize,
        e.team,
        (e instanceof Unit) ? e : null,
      );

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

      _epLiUnit(
        e,
        r * Vars.tilesize,
        e.team,
        (e instanceof Unit) ? e : null,
      ).each(unit => {
        mdl_draw.drawFlickerLine(
          unit,
          e,
          Pal.techBlue,
        );
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

      var li_ot = mdl_game._liTileLinked(b.tile);
      var rheat = 0.0;
      li_ot.each(ot => rheat += mdl_heat._rangeHeat(ot));
      rheat /= li_ot.size;

      if(rheat > 6.0) Fires.create(li_ot.get(Math.round(Mathf.random(li_ot.size - 1) - 0.4999)));
    };
    exports.updateTile_flammable = updateTile_flammable;
  // End


  // Part: Restriction Range
    const setStats_restrict = function(blk, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name) : r;
      if(r_fi != null) blk.stats.add(db_stat.restrictionRange, r_fi, StatUnit.blocks);
    };
    exports.setStats_restrict = setStats_restrict;


    const canPlaceOn_restrict = function(blk, t, team, rot, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name) : r;
      if(r_fi != null && mdl_game._liBuildSame(mdl_game._liTileRect(t, r_fi, blk.size), blk.name, Vars.player.team()).size > 0) return false;

      return true;
    };
    exports.canPlaceOn_restrict = canPlaceOn_restrict;


    const drawPlace_restrict = function(blk, tx, ty, rot, valid, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name) : r;
      if(r_fi != null) {
        var t = Vars.world.tile(tx, ty);
        mdl_draw.drawPlaceRect(blk, t, valid, r_fi, true);
        mdl_game._liBuildSame(mdl_game._liTileRect(t, r_fi, blk.size), blk.name, Vars.player.team()).each(ob => mdl_draw.drawBuildArea(ob, valid));
      };
    };
    exports.drawPlace_restrict = drawPlace_restrict;


    const drawSelect_restrict = function(b, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name) : r;
      if(r_fi != null) {
        mdl_draw.drawSelectRect(b, r_fi, true);
      };
    };
    exports.drawSelect_restrict = drawSelect_restrict;
  // End


  // Part: Structure
    const _structPair = function(blk) {
      var val = null;
      var li = db_block.db["matrix"]["multiBlock"];
      var cap = li.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i++) {
          if(i % 3 != 0) continue;

          var nm = li.get(i);
          var nm_tg = li.get(i + 1);
          var plan = li.get(i + 2);

          var blk_tg = Vars.content.block(nm_tg);
          if(blk.name == nm && blk_tg != null) val = [blk_tg, plan];
        };
      };

      return val;
    };
    exports._structPair = _structPair;


    const li_77002519 = new Seq();
    const _structLiPlan = function(plan) {
      var li = li_77002519.clear();

      Vars.content.blocks().each(blk => {
        var count = plan.count(i => blk.name == i);
        if(count > 0) li.add(blk, count);
      });

      return li;
    };
    exports._structLiPlan = _structLiPlan;


    const isStructureComplete = function(t, plan) {
      if(t == null || plan == null) return false;

      var cond = true;
      var li = plan;
      var cap = plan.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i++) {
          if(i % 2 != 0) continue;

          var rPos = li.get(i);
          var nm = li.get(i + 1);
          var ot = t.nearby(rPos);

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

      var li = plan;
      var cap = plan.size;
      if(cap > 0) {
        for(let i = 0; i < cap; i++) {
          if(i % 2 != 0) continue;

          var rPos = li.get(i);
          var nm = li.get(i + 1);
          var blk = mdl_content._ct_nm(nm);
          var ot = t.nearby(rPos);

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
    const _terrain = function(t, size) {
      if(size == null) size = 1;
      if(t == null) return;

      var li_ot = mdl_game._liTileRect(t, 5, size);
      var count_t = li_ot.size;
      if(count_t == 0) return;
      var count_dirt = 0;
      var count_salt = 0;
      var count_sand = 0;
      var count_stone = 0;
      var count_water = 0;
      var count_sea = 0;
      li_ot.each(ot => {
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

      var terVal = "";

      switch(ter) {
        case "dirt" :
          terVal = Core.bundle.get("term.reind-term-terrain-dirt.name");
          break;
        case "salt" :
          terVal = Core.bundle.get("term.reind-term-terrain-salt.name");
          break;
        case "sand" :
          terVal = Core.bundle.get("term.reind-term-terrain-sand.name");
          break;
        case "stone" :
          terVal = Core.bundle.get("term.reind-term-terrain-stone.name");
          break;
        case "water" :
          terVal = Core.bundle.get("term.reind-term-terrain-water.name");
          break;
        case "sea" :
          terVal = Core.bundle.get("term.reind-term-terrain-sea.name");
          break;
        case "river" :
          terVal = Core.bundle.get("term.reind-term-terrain-river.name");
          break;
        case "beach" :
          terVal = Core.bundle.get("term.reind-term-terrain-beach.name");
          break;
        default :
          terVal = Core.bundle.get("term.reind-term-terrain-transition.name");
      };

      return terVal;
    };
    exports._terrainVal = _terrainVal;


    const setStats_terrain = function(blk, ter_sel, mode) {
      if(blk == null || ter_sel == null) return;
      if(mode != "enable" && mode != "disable") return;

      blk.stats.add((mode == "enable") ? db_stat.requiredTerrain : db_stat.disabledIn, _terrainVal(ter_sel));
    };
    exports.setStats_terrain = setStats_terrain;


    const canPlaceOn_terrain = function(blk, ter_sel, mode, t, team, rot, offTy) {
      if(offTy == null) offTy = 0;
      if(t == null) return false;
      if(mode != "enable" && mode != "disable") return false;

      var ter = _terrain(t, blk.size);
      var terVal = _terrainVal(ter);
      var valid = true;
      if(mode == "disable") {
        if(ter == ter_sel) {
          mdl_draw.drawPlaceText(blk, t, false, Core.bundle.get("info.reind-info-terrain-disabled.name") + mdl_text._space() + terVal, offTy);
          valid = false;
        };
      } else {
        if(ter != ter_sel) {
          mdl_draw.drawPlaceText(blk, t, false, Core.bundle.get("info.reind-info-terrain-mismatched.name") + mdl_text._space() + terVal, offTy);
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
    const setBars_was = function(blk, rcFi) {
      var cap = mdl_recipe._rcSize(rcFi);
      var cond_water = false;
      var cond_waterA = false;
      var cond_waterB = false;
      var cond_slurry = false;

      for(let i = 0; i < cap; i++) {
        if(frag_recipe.hasOutput(rcFi, i, "reind-liq-was-waste-water")) cond_water = true;
        if(frag_recipe.hasOutput(rcFi, i, "reind-liq-was-waste-water-acidic")) cond_waterA = true;
        if(frag_recipe.hasOutput(rcFi, i, "reind-liq-was-waste-water-basic")) cond_waterB = true;
        if(frag_recipe.hasOutput(rcFi, i, "reind-liq-was-waste-slurry")) cond_slurry = true;
      };

      if(cond_water) blk.addLiquidBar(Vars.content.liquid("reind-liq-was-waste-water"));
      if(cond_waterA) blk.addLiquidBar(Vars.content.liquid("reind-liq-was-waste-water-acidic"));
      if(cond_waterB) blk.addLiquidBar(Vars.content.liquid("reind-liq-was-waste-water-basic"));
      if(cond_slurry) blk.addLiquidBar(Vars.content.liquid("reind-liq-was-waste-slurry"));
    };
    exports.setBars_was = setBars_was;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_faci.js loaded.");
});
