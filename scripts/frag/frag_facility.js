/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: 2side
    /*
      PART NOTE:
      If both the front and back sides are blocked, halts production.
    */


    const isActive_2side = function(b) {
      if(mdl_geometry.isDirectionBlocked(b, 0) && mdl_geometry.isDirectionBlocked(b, 2)) return false;

      return true;
    };
    exports.isActive_2side = isActive_2side;


    const drawPlace_2side = function(blk, t, rot) {
      mdl_geometry.getTiles_2sideRot(t, rot, blk.size).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
    };
    exports.drawPlace_2side = drawPlace_2side;


    const drawSelect_2side = function(b) {
      mdl_geometry.getTiles_2sideRot(b.tile, b.rotation, b.block.size).each(ot => mdl_draw.drawTileIndicator(ot, !(ot.solid() || ot.block() instanceof LiquidJunction)));
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
      mdl_geometry.filter_team(mdl_geometry.getUnits(pos, rad, caller), team).each(unit => {
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
        (e instanceof Unit) ? mdl_geometry.poser_1u(e) : mdl_geometry.poser_1b(e),
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
        (e instanceof Unit) ? mdl_geometry.poser_1u(e) : mdl_geometry.poser_1b(e),
        rad,
        e.team,
        (e instanceof Unit) ? e : null,
      ).each(unit => {
        mdl_draw.drawFlickerLine(
          mdl_geometry.poser_1u(unit),
          (e instanceof Unit) ? mdl_geometry.poser_1u(e) : mdl_geometry.poser_1b(e),
          Pal.techBlue,
        );
      });
    };
    exports.draw_ep = draw_ep;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_facility.js loaded.");
});
