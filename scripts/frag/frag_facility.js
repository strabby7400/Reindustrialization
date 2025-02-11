/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_heat = require("reind/mdl/mdl_heat");
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
      if(mdl_game.isDirectionBlocked(b, 0) && mdl_game.isDirectionBlocked(b, 2)) return false;

      return true;
    };
    exports.isActive_2side = isActive_2side;


    const drawPlace_2side = function(blk, t, rot) {
      mdl_game.getTiles_2sideRot(t, rot, blk.size).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawPlace_2side = drawPlace_2side;


    const drawSelect_2side = function(b) {
      mdl_game.getTiles_2sideRot(b.tile, b.rotation, b.block.size).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawSelect_2side = drawSelect_2side;
  // End


  // Part: Energy Point
    /*
      PART NOTE:
      The building (or unit) is active only if there are enough EPs provided.
    */


    const getUnitMap_ep = function(pos, rad, team, caller) {
      if(pos == null || rad == null || team == null) return new Seq();

      var map = new Seq();
      mdl_game.filter_team(mdl_game.getUnits(pos, rad, caller), team).each(unit => {
        var ep = mdl_database.read_1n1v(db_unit.energizer, unit.type.name);
        if(ep != null) {
          map.add(unit);
          map.add(ep);
        };
      });

      return map;
    };
    exports.getUnitMap_ep = getUnitMap_ep;


    const getUnits_ep = function(pos, rad, team, caller) {
      var map = getUnitMap_ep(pos, rad, team, caller);
      if(map.size == 0) return new Seq();

      var li_unit = new Seq();
      for(let i = 0; i < map.size; i++) {
        if(i % 2 != 0) continue;

        li_unit.add(map.get(i));
      };

      return li_unit;
    };
    exports.getUnits_ep = getUnits_ep;


    const count_ep = function(pos, rad, team, caller) {
      var map = getUnitMap_ep(pos, rad, team, caller);
      if(map.size == 0) return 0.0;

      var ep_fi = 0.0;
      for(let i = 0; i < map.size; i++) {
        if(i % 2 != 0) continue;

        ep_fi += map.get(i + 1);
      };

      return ep_fi;
    };
    exports.count_ep = count_ep;


    const getFrac_ep = function(e) {
      var rad = (e instanceof Unit) ? mdl_database.read_1n1v(db_unit.epRange, e.type.name) : mdl_database.read_1n1v(db_block.epRange, e.block.name);
      if(rad == null) return true;
      var ep_req = (e instanceof Unit) ? mdl_database.read_1n1v(db_unit.epRequirement, e.type.name) : mdl_database.read_1n1v(db_block.epRequirement, e.block.name);
      if(ep_req == null) return true;

      var ep = count_ep(
        (e instanceof Unit) ? mdl_game.poser_1u(e) : mdl_game.poser_1b(e),
        rad,
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
      var rad = (ct instanceof UnitType) ? mdl_database.read_1n1v(db_unit.epRange, ct.name) : mdl_database.read_1n1v(db_block.epRange, ct.name);
      if(rad != null) ct.stats.add(db_stat.epRange, rad / Vars.tilesize, StatUnit.blocks);

      var ep_req = (ct instanceof UnitType) ? mdl_database.read_1n1v(db_unit.epRequirement, ct.name) : mdl_database.read_1n1v(db_block.epRequirement, ct.name);
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
      var rad = (e instanceof Unit) ? mdl_database.read_1n1v(db_unit.epRange, e.type.name) : mdl_database.read_1n1v(db_block.epRange, e.block.name);
      if(rad == null) return;

      getUnits_ep(
        (e instanceof Unit) ? mdl_game.poser_1u(e) : mdl_game.poser_1b(e),
        rad,
        e.team,
        (e instanceof Unit) ? e : null,
      ).each(unit => {
        mdl_draw.drawFlickerLine(
          mdl_game.poser_1u(unit),
          (e instanceof Unit) ? mdl_game.poser_1u(e) : mdl_game.poser_1b(e),
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

      var li_ot = mdl_game.getTiles_linked(b.tile);
      var rheat = 0.0;
      li_ot.each(ot => rheat += mdl_heat.getRangeHeat(ot));
      rheat /= li_ot.size;

      if(rheat > 6.0) Fires.create(li_ot.get(Math.round(Mathf.random(li_ot.size - 1) - 0.4999)));
    };
    exports.updateTile_flammable = updateTile_flammable;
  // End


  // Part: Terrain
    const getTerrain = function(t, size) {
      if(size == null) size = 1;
      if(t == null) return;

      var li_ot = mdl_game.getTiles_rect(t, 5, size);
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
      var terVal;

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


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_facility.js loaded.");
});
