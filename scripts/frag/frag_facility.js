/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_item = require("reind/frag/frag_item");
    const frag_recipe = require("reind/frag/frag_recipe");

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

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: 2side
    /*
      PART NOTE:
      If both the front and back sides are blocked, halts production.
    */


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
      if(mdl_game._dst(mdl_game._pos(1, b), mdl_game._pos(2, b_core)) > rad) shouldCoreDump = false;
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
      if(mdl_game._dst(mdl_game._pos(1, b), mdl_game._pos(2, b_core)) > rad) return;
      mdl_draw.drawItemTransfer(mdl_game._pos(3, b), mdl_game._pos(4, b_core));
    };
    exports.draw_coreDump = draw_coreDump;


    const drawSelect_coreDump = function(b, rad) {
      if(rad == null) return;
      mdl_draw.drawSelectCircle(b, rad, false);

      var b_core = b.closestCore();
      if(mdl_game._dst(mdl_game._pos(1, b), mdl_game._pos(2, b_core)) > rad) return;
      mdl_draw.drawBuildRectConnector(b, b_core);
    };
    exports.drawSelect_coreDump = drawSelect_coreDump;
  // End


  // Part: Energy Point
    /*
      PART NOTE:
      The building (or unit) is active only if there are enough EPs provided.
    */


    const li_73097008 = new Seq();
    const getUnitMap_ep = function(pos, rad, team, caller) {
      var li = li_73097008.clear();

      if(pos == null || rad == null || team == null) return li;

      mdl_game._filterTeam(mdl_game._liUnit(pos, rad, caller), team).each(unit => {
        var ep = mdl_data.read_1n1v(db_unit.energizer, unit.type.name);
        if(ep != null) {
          li.add(unit);
          li.add(ep);
        };
      });

      return li;
    };
    exports.getUnitMap_ep = getUnitMap_ep;


    const li_95226458 = new Seq();
    const li_65225877 = new Seq();
    const getUnits_ep = function(pos, rad, team, caller) {
      var li = li_95226458.clear();
      var li1 = li_65225877.clear();

      li.addAll(getUnitMap_ep(pos, rad, team, caller));

      var cap = li.size;
      if(cap == 0) return li;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        li1.add(li.get(i));
      };

      return li1;
    };
    exports.getUnits_ep = getUnits_ep;


    const li_22579666 = new Seq();
    const count_ep = function(pos, rad, team, caller) {
      var li = li_22579666.clear();

      li.addAll(getUnitMap_ep(pos, rad, team, caller));

      var ep_fi = 0.0;
      var cap = li.size;
      if(cap == 0) return ep_fi;
      for(let i = 0; i < cap; i++) {
        if(i % 2 != 0) continue;

        ep_fi += li.get(i + 1);
      };

      return ep_fi;
    };
    exports.count_ep = count_ep;


    const getFrac_ep = function(e) {
      var r = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.epRange, e.type.name) : mdl_data.read_1n1v(db_block.epRange, e.block.name);
      if(r == null) return true;
      var ep_req = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.epRequirement, e.type.name) : mdl_data.read_1n1v(db_block.epRequirement, e.block.name);
      if(ep_req == null) return true;

      var ep = count_ep(
        mdl_game._pos(1, e),
        r * Vars.tilesize,
        e.team,
        (e instanceof Unit) ? e : null,
      );

      return ep / ep_req;
    };
    exports.getFrac_ep = getFrac_ep;


    const isActive_ep = function(e) {
      return getFrac_ep(e) > 0.99;
    };
    exports.isActive_ep = isActive_ep;


    const setStats_ep = function(ct) {
      var r = (ct instanceof UnitType) ? mdl_data.read_1n1v(db_unit.epRange, ct.name) : mdl_data.read_1n1v(db_block.epRange, ct.name);
      if(r != null) ct.stats.add(db_stat.epRange, r, StatUnit.blocks);

      var ep_req = (ct instanceof UnitType) ? mdl_data.read_1n1v(db_unit.epRequirement, ct.name) : mdl_data.read_1n1v(db_block.epRequirement, ct.name);
      if(ep_req != null) ct.stats.add(db_stat.epRequired, ep_req);
    };
    exports.setStats_ep = setStats_ep;


    const setBars_ep = function(blk) {
      blk.addBar("reind-ep", b => new Bar(
        "term.reind-term-energy-points.name",
        Pal.techBlue,
        () => Math.min(getFrac_ep(b), 1.0),
      ));
    };
    exports.setBars_ep = setBars_ep;


    const draw_ep = function(e) {
      var r = (e instanceof Unit) ? mdl_data.read_1n1v(db_unit.epRange, e.type.name) : mdl_data.read_1n1v(db_block.epRange, e.block.name);
      if(r == null) return;

      getUnits_ep(
        mdl_game._pos(1, e),
        r * Vars.tilesize,
        e.team,
        (e instanceof Unit) ? e : null,
      ).each(unit => {
        mdl_draw.drawFlickerLine(
          mdl_game._pos(2, unit),
          mdl_game._pos(3, unit),
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
      li_ot.each(ot => rheat += mdl_heat.getRangeHeat(ot));
      rheat /= li_ot.size;

      if(rheat > 6.0) Fires.create(li_ot.get(Math.round(Mathf.random(li_ot.size - 1) - 0.4999)));
    };
    exports.updateTile_flammable = updateTile_flammable;
  // End


  // Part: Restriction Range
    const setStats_restrict = function(blk, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.genericRange, blk.name) : r;
      if(r_fi != null) blk.stats.add(db_stat.restrictionRange, r_fi, StatUnit.blocks);
    };
    exports.setStats_restrict = setStats_restrict;


    const canPlaceOn_restrict = function(blk, t, team, rot, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.genericRange, blk.name) : r;
      if(r_fi != null && mdl_game._liBuildSame(mdl_game._liTileRect(t, r_fi, blk.size), blk.name, Vars.player.team()).size > 0) return false;

      return true;
    };
    exports.canPlaceOn_restrict = canPlaceOn_restrict;


    const drawPlace_restrict = function(blk, tx, ty, rot, valid, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.genericRange, blk.name) : r;
      if(r_fi != null) {
        var t = Vars.world.tile(tx, ty);
        mdl_draw.drawPlaceRect(blk, t, valid, r_fi, true);
        mdl_game._liBuildSame(mdl_game._liTileRect(t, r_fi, blk.size), blk.name, Vars.player.team()).each(ob => mdl_draw.drawBuildArea(ob, valid));
      };
    };
    exports.drawPlace_restrict = drawPlace_restrict;


    const drawSelect_restrict = function(b, r) {
      var r_fi = (r == null) ? mdl_data.read_1n1v(db_block.genericRange, b.block.name) : r;
      if(r_fi != null) {
        mdl_draw.drawSelectRect(b, r_fi, true);
      };
    };
    exports.drawSelect_restrict = drawSelect_restrict;
  // End


  // Part: Structure
    const getStructurePair = function(blk) {
      var val = null;
      var li = db_block.structure;
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
    exports.getStructurePair = getStructurePair;


    const li_77002519 = new Seq();
    const getPlanList = function(plan) {
      var li = li_77002519.clear();

      Vars.content.blocks().each(blk => {
        var count = plan.count(i => blk.name == i);
        if(count > 0) li.add(blk, count);
      });

      return li;
    };
    exports.getPlanList = getPlanList;


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
          var blk = mdl_content.getContent_nm(nm);
          var ot = t.nearby(rPos);

          if(blk != null && ot != null) {
            var reg = mdl_content.getBuildRegion(blk);
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
    const getTerrain = function(t, size) {
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

      var thr = glb_vars.terrain_floorThreshold;
      var ter = null;
      if(count_dirt / count_t > thr) ter = "dirt";
      if(count_salt / count_t > thr) ter = "salt";
      if(count_sand / count_t > thr) ter = "sand";
      if(count_stone / count_t > thr) ter = "stone";
      if(count_water / count_t > thr) ter = "water";
      if(count_sea / count_t > thr) ter = "sea";
      if(count_sea / count_t > thr * 0.3 && count_sand / count_t > thr * 0.7) ter = "beach";

      return ter;
    };
    exports.getTerrain = getTerrain;


    const getTerrainValue = function(ter) {
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
        case "beach" :
          terVal = Core.bundle.get("term.reind-term-terrain-beach.name");
          break;
        default :
          terVal = Core.bundle.get("term.reind-term-terrain-transition.name");
      };

      return terVal;
    };
    exports.getTerrainValue = getTerrainValue;


    const canPlaceOn_terrain = function(blk, ter_sel, mode, t, team, rot) {
      if(t == null) return;
      if(mode != "enable" && mode != "disable") return false;

      var ter = getTerrain(t, blk.size);
      var terVal = getTerrainValue(ter);
      var valid = true;
      if(mode == "disable") {
        if(ter == ter_sel) {
          mdl_draw.drawPlaceText(blk, t, false, Core.bundle.get("info.reind-info-terrain-disabled.name") + mdl_text.getSpace() + terVal);
          valid = false;
        };
      } else {
        if(ter != ter_sel) {
          mdl_draw.drawPlaceText(blk, t, false, Core.bundle.get("info.reind-info-terrain-mismatched.name") + mdl_text.getSpace() + terVal);
          valid = false;
        };
      };

      return valid;
    };
    exports.canPlaceOn_terrain = canPlaceOn_terrain;
  // End


  // Part: Total Progress
    const getTprogRate_effc = function(b) {
      return b.efficiency;
    };
    exports.getTprogRate_effc = getTprogRate_effc;


    const getTprogRate_liq = function(b, liq) {
      if(b.liquids == null || liq == null) return 0.0;

      return b.liquids.get(liq) / b.block.liquidCapacity;
    };
    exports.getTprogRate_liq = getTprogRate_liq;


    const getTprogRate_heat = function(b, cap) {
      if(cap == null) cap = mdl_heat.getHeatLimit(b.block);

      return Math.min(mdl_heat.getHeat(b) / cap, 1.0);
    };
    exports.getTprogRate_heat = getTprogRate_heat;


    const getTprogInc = function(b, mode, param, warmup) {
      if(mode != "effc" && mode != "liq" && mode != "heat") return 0.0;

      var inc = 0.0;
      switch(mode) {
        case "effc" :
          inc = Time.delta * getTprogRate_effc(b);
          break;
        case "liq" :
          inc = Time.delta * getTprogRate_liq(b, param);
          break;
        case "heat" :
          inc = Time.delta * getTprogRate_heat(b, param);
          break;
      };
      if(warmup != null) inc *= warmup;

      return inc;
    };
    exports.getTprogInc = getTprogInc;
  // End


  // Part: Waste
    const setBars_was = function(blk, rcFi) {
      var cap = mdl_recipe.getRecipeSize(rcFi);
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
  Log.info("REIND: frag_facility.js loaded.");
});
