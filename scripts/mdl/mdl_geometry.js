/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Position


    /* <---------------- getPos ----------------> */


    /* NOTE: Gets the position of the tile. */
    const getPos_1t = function(t, off) {
      if(off == null) off = 0.0;
      if(t == null) return;

      return new Point2(t.worldx() + off, t.worldy() + off);
    };
    exports.getPos_1t = getPos_1t;


    /* NOTE: Get the center position of the building. */
    const getPos_1b = function(b) {
      if(b == null) return;

      return getPos_1t(b.tile, b.block.offset);
    };
    exports.getPos_1b = getPos_1b;


    /* NOTE: Get the position of the unit. */
    const getPos_1u = function(unit) {
      if(unit == null) return;

      return new Point2(unit.x, unit.y);
    };
    exports.getPos_1u = getPos_1u;


    /* NOTE: I have to deal with {pos} */
    const getPos_gn = function(pos_gn) {
      if(pos_gn == null) return;
      if(pos_gn instanceof Point2) return pos_gn;

      var pos;

      // Unit
      if(pos_gn instanceof Unit) {
        pos = getPos_1u(pos_gn);
      };

      // Tile
      if(pos_gn instanceof Tile) {
        pos = getPos_1t(pos_gn);
      };

      // Build
      if(pos_gn instanceof Building) {
        pos = getPos_1b(pos_gn);
      };

      // Puddle
      if(pos_gn instanceof Puddle) {
        pos = getPos_1t(pos_gn.tile);
      };

      // Special
      if(typeof pos_gn == "string") switch(pos_gn) {
        case "mouse" :
          pos = getPos_mouse();
          break;
        case "player" :
          var unit_p = Vars.player.unit();
          if(unit_p != null) pos = new Point2(unit_p.x, unit_p.y);
          break;
      };

      return pos;
    };
    exports.getPos_gn = getPos_gn;


    /* NOTE: Gets a new position with a ray. */
    const getPos_ray = function(pos_0, ang, rad) {
      if(angle == null) return pos_0;
      if(rad == null) return pos_0;

      var dx = rad * Math.cos(ang);
      var dy = rad * Math.sin(ang);
      var pos = new Point2(pos_0.x + dx, pos_0.y + dy);

      return pos;
    };
    exports.getPos_ray = getPos_ray;


    /* NOTE: Gets the position of the mouse. */
    const getPos_mouse = function() {
      return new Point2(Core.input.mouseWorldX(), Core.input.mouseWorldY());
    };
    exports.getPos_mouse = getPos_mouse;
  // End


  // Part: Distance


    /* <---------------- getDistance ----------------> */


    /* NOTE: Gets the distance between two points. I know it's kind of trivial. */
    const getDistance_2pos = function(pos1, pos2) {
      return pos1.dst(pos2);
    };
    exports.getDistance_2pos = getDistance_2pos;


    const getDistance_2t = function(t1, t2, off1, off2) {
      if(off1 == null) off1 = 0.0;
      if(off2 == null) off2 = 0.0;

      var pos1 = new Point2(t1.worldx() + off1, t1.worldy() + off1);
      var pos2 = new Point2(t2.worldx() + off2, t2.worldy() + off2);

      return getDistance_2pos(pos1, pos2);
    };
    exports.getDistance_2t = getDistance_2t;


    const getDistance_2b = function(b1, b2) {
      return getDistance_2t(b1.tile, b2.tile, b1.block.offset, b2.block.offset);
    };
    exports.getDistance_2b = getDistance_2b;
  // End


  // Part: Rotation


    /* <---------------- getRotation ----------------> */


    /* NOTE: Gets the opposite direction. */
    const getRotation_conj = function(rot, rots) {
      if(rots == null) rots = 4;

      return Mathf.mod(rot + rots / 2, rots);
    };
    exports.getRotation_conj = getRotation_conj;


    /* NOTE: Gets the offset direction. */
    const getRotation_diver = function(rot, off_rot, rots) {
      if(rots == null) rots = 4;

      return Mathf.mod(rot + off_rot, rots);
    };
    exports.getRotation_diver = getRotation_diver;


    /* <---------------- is ----------------> */


    /* NOTE: Checks if the direction is blocked. */
    const isDirectionBlocked = function(b, off_rot) {
      if(off_rot == null) off_rot = 0;
      if(b == null) return false;

      var count = 0;
      getTiles_rotS(b.tile, getRotation_diver(b.rotation, off_rot), b.block.size).each(ot => {if(ot.solid() || (ot.build != null && ot.build.block instanceof LiquidJunction)) count += 1});

      return count > 0;
    };
    exports.isDirectionBlocked = isDirectionBlocked;


    /* NOTE: Checks if two buildings are facing each other. */
    const isFacing = function(b, ob) {
      if(b == null || ob == null) return false;

      return countSharedSides(b, ob) > 0;
    };
    exports.isFacing = isFacing;
  // End


  // Part: Tile
    /*
      PART NOTE:
      Most {list_ot} won't contain {null} at most occasions, since calling tile properties from {null} will crash the game.
    */


    /* <---------------- getTile ----------------> */


    /* NOTE: Gets a tile from a position. */
    const getTile_pos = function(pos) {
      return Vars.world.tileWorld(pos.x, pos.y);
    };
    exports.getTile_pos = getTile_pos;


    /* NOTE: Gets a tile according to the assigned rotation. I know {nearby} can do this. */
    const getTile_rot = function(mode, t, rot) {
      if(t == null) return;

      var rot_fi = (mode == "f") ? getRotation_conj(rot) : rot;
      var points = Geometry.d4;
      var pos = points[rot_fi];

      return t.nearby(pos);
    };
    exports.getTile_rot = getTile_rot;


    const getTile_rotB = function(mode, b) {
      if(b == null) return new Seq();

      return getTile_rot(mode, b.tile, b.rotation);
    };
    exports.getTile_rotB = getTile_rotB;


    /* NOTE: Gets a new tile with a ray. */
    const getTile_ray = function(t_0, ang, rad) {
      if(t_0 == null) return t_0;

      var pos_0 = getPos_1t(t_0);
      var pos = getPos_ray(t_0, ang, rad);
      var t = getTile_pos(pos);

      return t;
    };
    exports.getTile_ray = getTile_ray;


    /* NOTE: Gets the tile under the mouse. This is nullable! */
    const getTile_mouse = function() {
      return getTile_pos(getPos_mouse());
    };
    exports.getTile_mouse = getTile_mouse;


    /* <---------------- getTilePair ----------------> */


    /* NOTE: Gets a pair of tiles in aspect of rotation. From [0] to [1]. */
    const getTilePair_rot = function(t, rot) {
      var ot_f = getTile_rot("f", t, rot);
      var ot_t = getTile_rot("t", t, rot);

      if(ot_f == null || ot_t == null) return;

      return [ot_f, ot_t];
    };
    exports.getTilePair_rot = getTilePair_rot;


    const getTilePair_rotB = function(b) {
      if(b == null) return;

      return getTilePair_rot(b.tile, b.rotation);
    };
    exports.getTilePair_rotB = getTilePair_rotB;


    /* <---------------- getTiles ----------------> */


    /* NOTE: Get a list of tiles according to rotation and size. */
    const getTiles_rotS = function(t, rot, size) {
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var list_ot = new Seq();
      var start = (size % 2 == 0) ? ((size / 2 - 1) * -1) : ((size - 1) / 2 * -1);
      var cap = (size % 2 == 0) ? (size / 2 + 1) : ((size - 1) / 2 + 1);
      for(let i = start; i < cap; i++) {
        var pos;
        switch(rot) {
          case 0 :
            (size % 2 == 0) ? (pos = new Point2(size / 2 + 1, i)) : (pos = new Point2((size + 1) / 2, i));
            break;
          case 1 :
            (size % 2 == 0) ? (pos = new Point2(i, size / 2 + 1)) : (pos = new Point2(i, (size + 1) / 2));
            break;
          case 2 :
            (size % 2 == 0) ? (pos = new Point2(size / 2 * -1, i)) : (pos = new Point2((size + 1) / 2 * -1, i));
            break;
          case 3 :
            (size % 2 == 0) ? (pos = new Point2(i, size / 2 * -1)) : (pos = new Point2(i, (size + 1) / 2 * -1));
            break;
        };

        var ot = t.nearby(pos);
        if(ot != null) list_ot.add(ot);
      };

      return list_ot;
    };
    exports.getTiles_rotS = getTiles_rotS;


    const getTiles_rotBlk = function(blk, t, rot) {
      if(blk == null) return new Seq();

      return getTiles_rotS(t, rot, blk.size);
    };
    exports.getTiles_rotBlk = getTiles_rotBlk;


    const getTiles_rotB = function(b) {
      if(b == null) return new Seq();

      return getTiles_rotS(b.tile, b.rotation, b.block.size);
    };
    exports.getTiles_rotB = getTiles_rotB;


    /* NOTE: Gets both the front and back sides. */
    const getTiles_2sideRotS = function(t, rot, size) {
      var list_ot = new Seq();

      list_ot.addAll(getTiles_rotS(t, rot, size));
      list_ot.addAll(getTiles_rotS(t, getRotation_diver(rot, 2), size));

      return list_ot;
    };
    exports.getTiles_2sideRotS = getTiles_2sideRotS;


    const getTiles_2sideRotBlk = function(blk, t, rot) {
      if(blk == null) return new Seq();

      return getTiles_2sideRotS(t, rot, blk.size);
    };
    exports.getTiles_2sideRotBlk = getTiles_2sideRotBlk;


    const getTiles_2sideRotB = function(b) {
      if(b == null) return new Seq();

      return getTiles_2sideRotS(b.tile, b.rotation, b.block.size);
    };
    exports.getTiles_2sideRotB = getTiles_2sideRotB;


    /* NOTE: Gets a list of tiles from edges. */
    const getTiles_edgeS = function(t, size) {
      var list_ot = new Seq();
      var cap = size * 4;
      var points = Edges.getEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(points[i]);
        if(ot != null) list_ot.add(ot);
      };

      return list_ot;
    };
    exports.getTiles_edgeS = getTiles_edgeS;


    const getTiles_edgeB = function(b) {
      if(b == null) return new Seq();

      var list_ot = getTiles_edgeS(b.tile, b.block.size);

      return list_ot;
    };
    exports.getTiles_edgeB = getTiles_edgeB;


    /* NOTE: Inner edges now, with no duplicates. */
    const getTiles_edgeInsideS = function(t, size) {
      var list_ot = new Seq();
      var cap = size * 4;
      var points = Edges.getInsideEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(points[i]);
        if(ot != null && !list_ot.contains(ot)) list_ot.add(ot);
      };

      return list_ot;
    };
    exports.getTiles_edgeInsideS = getTiles_edgeInsideS;


    const getTiles_edgeInsideB = function(b) {
      if(b == null) return new Seq();

      var list_ot = getTiles_edgeInsideS(b.tile, b.block.size);

      return list_ot;
    };
    exports.getTiles_edgeInsideB = getTiles_edgeInsideB;


    /* NOTE: Simply {getLinkedTiles}. */
    const getTiles_linked = function(t) {
      if(t == null) return new Seq();

      var list_ot = new Seq();
      t.getLinkedTiles(ot => {if(ot != null) list_ot.add(ot)});

      return list_ot;
    };
    exports.getTiles_linked = getTiles_linked;


    /* NOTE: Gets a list of tiles from a rectangular range. */
    const getTiles_rect = function(t, r) {
      if(t == null) return new Seq();

      var list_ot = new Seq();
      for(let i = -r; i <= r; i++) {
        for(let j = -r; j <= r; j++) {
          var ot = t.nearby(i, j);
          if(ot != null) list_ot.add(ot);
        };
      };

      return list_ot;
    };
    exports.getTiles_rect = getTiles_rect;


    /* NOTE: {size} is simply the inner radius... is it radius? */
    const getTiles_rectS = function(t, r, size) {
      if(r == null) r = 0;
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var list_ot = new Seq();
      var left;
      var right;
      if(size % 2 != 0) {
        left = -((size - 1) / 2 + r);
        right = -left;
      } else {
        left = -(size / 2 - 1 + r);
        right = -left + 1;
      };

      for(let i = left; i <= right; i++) {
        for(let j = left; j <= right; j++) {
          var ot = t.nearby(i, j);
          if(ot != null) list_ot.add(ot);
        };
      };

      return list_ot;
    };
    exports.getTiles_rectS = getTiles_rectS;


    /* NOTE: Rotation is introduced, like assemblers. */
    const getTiles_rectRS = function(t, r, rot, size) {
      if(r == null) r = 0;
      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var ctx = 0;
      var cty = 0;
      switch(rot) {
        case 0 :
          ctx = r + size;
          break;
        case 1 :
          cty = r + size;
          break;
        case 2 :
          if(size % 2 != 0) {
            ctx = -(r + size);
          } else {
            ctx = -(r + size) + 1;
          };
          break;
        case 3 :
          if(size % 2 != 0) {
            cty = -(r + size);
          } else {
            cty = -(r + size) + 1;
          };
          break;
      };
      var ct = t.nearby(ctx, cty);

      if(ct != null) {
        return getTiles_rectS(ct, r, size);
      } else {
        return new Seq();
      };
    };
    exports.getTiles_rectRS = getTiles_rectRS;


    /* NOTE: Gets a list of tiles from a circular range. */
    const getTiles_circle = function(t, r) {
      if(r == null) r = 0;
      if(t == null) return new Seq();

      var list_ot = new Seq();
      Geometry.circle(t.x, t.y, Vars.world.width(), Vars.world.height(), r, (tx, ty) => {
        var ot = Vars.world.tile(tx, ty);
        if(ot != null) list_ot.add(ot);
      });

      return list_ot;
    };
    exports.getTiles_circle = getTiles_circle;


    // const getTiles_circleS


    /* NOTE: Gets a list of tiles only based on size. */
    const getTiles_size = function(t, size) {
      return getTiles_rectS(t, 0, size);
    };
    exports.getTiles_size = getTiles_size;


  // End


  // Part: Side


    /* <---------------- count ----------------> */


    /* NOTE: Counts how many shared side there are between two buildings. */
    const countSharedSides = function(b, ob) {
      var list_ot = b.block.rotate ? getTiles_rotB(b) : getTiles_edgeB(b);
      var count = 0;

      list_ot.each(ot => {if(ot.build == ob) count += 1});

      return count;
    };
    exports.countSharedSides = countSharedSides;


    /* <---------------- getFrac ----------------> */


    /* NOTE: Just like how heat works in vanilla game, {b} should be the giver. */
    const getFrac_side = function(b, ob) {
      var cap = b.block.rotate ? b.block.size : b.block.size * 4;
      var frac = countSharedSides(b, ob) / cap;

      return frac;
    };
    exports.getFrac_side = getFrac_side;
  // End


  // Part: Entity (Builds & Units)


    /* <---------------- getBuild ----------------> */


    /* NOTE: Gets a list of buildings from a list of tiles, no replicates. */
    const getBuilds_list = function(list_ot) {
      var list_b = new Seq();
      list_ot.each(ot => {if(ot.build != null && !list_b.contains(ot.build)) list_b.add(ot.build)});

      return list_b;
    };
    exports.getBuilds_list = getBuilds_list;


    const selectBuilds_list = function(list_ot, nm_blk, team) {
      var list_b = new Seq();
      list_b.addAll(filterTeam_list(filterName_list(getBuilds_list(list_ot), nm_blk), team));

      return list_b;
    };
    exports.selectBuilds_list = selectBuilds_list;


    /* <---------------- filter ----------------> */


    /* NOTE: Filters out some entities by name. */
    const filterName_list = function(list_e, nm) {
      if(nm == null) return list_e;

      var list_e1 = new Seq();
      list_e.each(e => {
        if(e instanceof Building && e.block.name == nm) list_e1.add(e);
        if(e instanceof Unit && e.type.name == nm) list_e1.add(e);
      });

      return list_e1;
    };
    exports.filterName_list = filterName_list;


    /* NOTE: Filters out some entities by team. */
    const filterTeam_list = function(list_e, team) {
      if(team == null) return list_e;

      var list_e1 = new Seq();
      list_e.each(e => {if(e.team == team) list_e1.add(e)});

      return list_e1;
    };
    exports.filterTeam_list = filterTeam_list;


    /* <---------------- count ----------------> */


    /* NOTE: Simply counts buildings in a list of tiles. */
    const countBuilds_list = function(list_ot, nm_blk, team) {
      return selectBuilds_list(list_ot, nm_blk, team).size;
    };
    exports.countBuilds_list = countBuilds_list;
  // End


  // Part: Unit


    /* <---------------- getUnits ----------------> */


    /* NOTE: Gets a list of units in a circular range. */
    const getUnits_1pos = function(pos, rad) {
      var list_unit = new Seq();

      Units.nearby(null, pos.x, pos.y, rad, unit => list_unit.add(unit));

      return list_unit;
    };
    exports.getUnits_1pos = getUnits_1pos;


    const getUnits_1t = function(t, off, rad) {
      if(off == null) off = 0.0;
      if(t == null) return new Seq();

      var pos = getPos_1t(t, off);

      return getUnits_1pos(pos, rad);
    };
    exports.getUnits_1t = getUnits_1t;


    const getUnits_1b = function(b, rad) {
      if(b == null) return new Seq();

      return getUnits_1t(b.tile, b.block.offset, rad);
    };
    exports.getUnits_1b = getUnits_1b;


    const getUnits_1u = function(unit, rad) {
      if(unit == null) return new Seq();

      var pos = new Point2(unit.x, unit.y);

      return getUnits_1pos(pos, rad);
    };
    exports.getUnits_1u = getUnits_1u;


    /* <---------------- count ----------------> */


    /* NOTE: Counts units in a list, uses name to find the targets. {team} is optional. */
    const countUnits_list = function(list_unit, nm_utp, team) {
      var count = 0;

      list_unit.each(ounit => {
        if(team == null) {
          if(ounit.type.name == nm_utp) count += 1;
        } else {
          if(ounit.type.name == nm_utp && ounit.team == team) count += 1;
        };
      });

      return count;
    };
    exports.countUnits_list = countUnits_list;


    /* NOTE: Counts other allied units of the same type. */
    const countUnits_self = function(unit, rad) {
      return countUnits_list(getUnits_1u(unit, rad), unit.type.name, unit.team);
    };
    exports.countUnits_self = countUnits_self;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_geometry.js loaded.");
});
