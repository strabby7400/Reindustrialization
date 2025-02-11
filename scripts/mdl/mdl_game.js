/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Position


    /* <---------------- poser ----------------> */


    /* NOTE: Gets the position of the tile. */
    const poser_1t = function(t, off) {
      if(off == null) off = 0.0;
      if(t == null) return;

      return new Point2(t.worldx() + off, t.worldy() + off);
    };
    exports.poser_1t = poser_1t;


    /* NOTE: Get the center position of the building. */
    const poser_1b = function(b) {
      if(b == null) return;

      return poser_1t(b.tile, b.block.offset);
    };
    exports.poser_1b = poser_1b;


    /* NOTE: Get the position of the unit. */
    const poser_1u = function(unit) {
      if(unit == null) return;

      return new Point2(unit.x, unit.y);
    };
    exports.poser_1u = poser_1u;


    /* NOTE: I have to deal with {pos} */
    const poser_gn = function(pos_gn) {
      if(pos_gn == null) return;
      if(pos_gn instanceof Point2) return pos_gn;

      var pos;

      // Unit
      if(pos_gn instanceof Unit) {
        pos = poser_1u(pos_gn);
      };

      // Tile
      if(pos_gn instanceof Tile) {
        pos = poser_1t(pos_gn);
      };

      // Build
      if(pos_gn instanceof Building) {
        pos = poser_1b(pos_gn);
      };

      // Puddle
      if(pos_gn instanceof Puddle) {
        pos = poser_1t(pos_gn.tile);
      };

      // Special
      if(typeof pos_gn == "string") switch(pos_gn) {
        case "mouse" :
          pos = poser_mouse();
          break;
        case "player" :
          var unit_p = Vars.player.unit();
          if(unit_p != null) pos = new Point2(unit_p.x, unit_p.y);
          break;
      };

      return pos;
    };
    exports.poser_gn = poser_gn;


    /* NOTE: Gets a new position with a ray. */
    const poser_ray = function(pos_0, ang, rad) {
      if(angle == null) return pos_0;
      if(rad == null) return pos_0;

      var dx = rad * Math.cos(ang);
      var dy = rad * Math.sin(ang);
      var pos = new Point2(pos_0.x + dx, pos_0.y + dy);

      return pos;
    };
    exports.poser_ray = poser_ray;


    /* NOTE: Gets the position of the mouse. */
    const poser_mouse = function() {
      return new Point2(Core.input.mouseWorldX(), Core.input.mouseWorldY());
    };
    exports.poser_mouse = poser_mouse;
  // End


  // Part: Distance


    /* <---------------- getDistance ----------------> */


    /* NOTE: Gets the distance between two points. I know it's kind of trivial. */
    const getDistance = function(pos1, pos2) {
      if(pos1 == null || pos2 == null) return 99999.0;

      return pos1.dst(pos2);
    };
    exports.getDistance = getDistance;
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
      getTiles_rot(b.tile, getRotation_diver(b.rotation, off_rot), b.block.size).each(ot => {if(ot.solid() || (ot.build != null && ot.build.block instanceof LiquidJunction)) count += 1});

      return count > 0;
    };
    exports.isDirectionBlocked = isDirectionBlocked;


    /* NOTE: Checks if two buildings are facing each other. */
    const isFacing = function(b, ob) {
      if(b == null || ob == null) return false;

      return count_sides(b, ob) > 0;
    };
    exports.isFacing = isFacing;
  // End


  // Part: Tile
    /*
      PART NOTE:
      Most {li_ot} won't contain {null} at most occasions, since calling tile properties from {null} will crash the game.
    */


    /* <---------------- getTile ----------------> */


    /* NOTE: Gets a tile from a position. */
    const getTile_pos = function(pos) {
      if(pos == null) return;

      return Vars.world.tileWorld(pos.x, pos.y);
    };
    exports.getTile_pos = getTile_pos;


    /* NOTE: Gets a tile according to the assigned rotation. I know {nearby} can do this. */
    const getTile_rot = function(mode, t, rot) {
      if(rot == null) rot = 0;
      if(mode != "f" && mode != "t") return;
      if(t == null) return;

      var rot_fi = (mode == "f") ? getRotation_conj(rot) : rot;
      var points = Geometry.d4;
      var pos = points[rot_fi];

      return t.nearby(pos);
    };
    exports.getTile_rot = getTile_rot;


    /* NOTE: Gets a new tile with a ray. */
    const getTile_ray = function(t_0, ang, rad) {
      if(ang == null) ang = 0.0;
      if(rad == null) rad = 0.0;
      if(t_0 == null) return t_0;

      var pos_0 = poser_1t(t_0);
      var pos = poser_ray(t_0, ang, rad);
      var t = getTile_pos(pos);

      return t;
    };
    exports.getTile_ray = getTile_ray;


    /* NOTE: Gets the tile under the mouse. This is nullable! */
    const getTile_mouse = function() {
      return getTile_pos(poser_mouse());
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


    const getTilePair_rot_1b = function(b) {
      if(b == null) return;

      return getTilePair_rot(b.tile, b.rotation);
    };
    exports.getTilePair_rot_1b = getTilePair_rot_1b;


    /* <---------------- getTiles ----------------> */


    /* NOTE: Get a list of tiles according to rotation and size. */
    const getTiles_rot = function(t, rot, size) {
      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var li_ot = new Seq();
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
        if(ot != null) li_ot.add(ot);
      };

      return li_ot;
    };
    exports.getTiles_rot = getTiles_rot;


    /* NOTE: Gets both the front and back sides. */
    const getTiles_2sideRot = function(t, rot, size) {
      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var li_ot = new Seq();
      li_ot.addAll(getTiles_rot(t, rot, size));
      li_ot.addAll(getTiles_rot(t, getRotation_diver(rot, 2), size));

      return li_ot;
    };
    exports.getTiles_2sideRot = getTiles_2sideRot;


    /* NOTE: Gets a list of tiles from edges. */
    const getTiles_edge = function(t, size) {
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var li_ot = new Seq();
      var cap = size * 4;
      var points = Edges.getEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(points[i]);
        if(ot != null) li_ot.add(ot);
      };

      return li_ot;
    };
    exports.getTiles_edge = getTiles_edge;


    /* NOTE: Inner edges now, with no duplicates. */
    const getTiles_edgeIns = function(t, size) {
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var li_ot = new Seq();
      var cap = size * 4;
      var points = Edges.getInsideEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(points[i]);
        if(ot != null && !li_ot.contains(ot)) li_ot.add(ot);
      };

      return li_ot;
    };
    exports.getTiles_edgeIns = getTiles_edgeIns;


    /* NOTE: Simply {getLinkedTiles}. */
    const getTiles_linked = function(t) {
      if(t == null) return new Seq();

      var li_ot = new Seq();
      t.getLinkedTiles(ot => {if(ot != null) li_ot.add(ot)});

      return li_ot;
    };
    exports.getTiles_linked = getTiles_linked;


    /* NOTE: Get tiles from a rectangular range, {size} is simply the inner radius... is it radius? */
    const getTiles_rect = function(t, r, size) {
      if(r == null) r = 0;
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var li_ot = new Seq();
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
          if(ot != null) li_ot.add(ot);
        };
      };

      return li_ot;
    };
    exports.getTiles_rect = getTiles_rect;


    /* NOTE: Rotation is introduced, like assemblers. */
    const getTiles_rectRot = function(t, r, rot, size) {
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
        return getTiles_rect(ct, r, size);
      } else {
        return new Seq();
      };
    };
    exports.getTiles_rectRot = getTiles_rectRot;


    /* NOTE: Gets a list of tiles from a circular range. */
    const getTiles_circle = function(t, r, size) {
      if(r == null) r = 0;
      if(size == null) size = 1;
      if(t == null) return new Seq();

      var li_ot = new Seq();
      Geometry.circle(t.x, t.y, Vars.world.width(), Vars.world.height(), r, (tx, ty) => {
        var ot = Vars.world.tile(tx, ty);
        if(ot != null) li_ot.add(ot);
      });

      return li_ot;
    };
    exports.getTiles_circle = getTiles_circle;


  // End


  // Part: Side


    /* <---------------- count ----------------> */


    /* NOTE: Counts how many shared sides there are between two buildings. */
    const count_sides = function(b, ob) {
      if(b == null || ob == null) return 0;

      var li_ot = b.block.rotate ? getTiles_rot(b.tile, b.rotation, b.block.size) : getTiles_edge(b.tile, b.block.size);
      var count = 0;
      li_ot.each(ot => {if(ot.build == ob) count += 1});

      return count;
    };
    exports.count_sides = count_sides;


    /* <---------------- getFrac ----------------> */


    /* NOTE: Just like how heat works in vanilla game, {b} should be the giver. */
    const getFrac_side = function(b, ob) {
      if(b == null || ob == null) return 0.0;

      var cap = b.block.rotate ? b.block.size : b.block.size * 4;
      var frac = count_sides(b, ob) / cap;

      return frac;
    };
    exports.getFrac_side = getFrac_side;
  // End


  // Part: Entity (Builds & Units)


    /* <---------------- filter ----------------> */


    /* NOTE: Filters out some entities by customized scripts. */
    const filter_scr = function(li_e, scr) {
      if(scr == null) return li_e;

      var li_e1 = new Seq();
      li_e.each(e => {if(scr.call(e)) li_e1.add(e)});

      return li_e1;
    };
    exports.filter_scr = filter_scr;


    /* NOTE: Filters out some entities by name. */
    const filter_nm = function(li_e, nm) {
      if(nm == null) return li_e;

      var scr = function() {
        if(this instanceof Building && this.block.name == nm) return true;
        if(this instanceof Unit && this.type.name == nm) return true;

        return false;
      };

      return filter_scr(li_e, scr);
    };
    exports.filter_nm = filter_nm;


    /* NOTE: Filters out some entities by team. */
    const filter_team = function(li_e, team) {
      if(team == null) return li_e;

      var scr = function() {
        return this.team == team;
      };

      return filter_scr(li_e, scr);
    };
    exports.filter_team = filter_team;


    /* NOTE: Filters out some entities that is enemy to the assigned team. */
    const filter_enemy = function(li_e, team) {
      if(team == null || team == Team.derelict) return li_e;

      var scr = function() {
        return (this.team != Team.derelict) && (this.team != team);
      };

      return filter_scr(li_e, scr);
    };
    exports.filter_enemy = filter_enemy;


    /* <---------------- getBuild ----------------> */


    /* NOTE: Gets a list of buildings from a list of tiles, no duplicates for multi-blocks. */
    const getBuilds = function(li_ot) {
      var li_b = new Seq();
      li_ot.each(ot => {if(ot.build != null && !li_b.contains(ot.build)) li_b.add(ot.build)});

      return li_b;
    };
    exports.getBuilds = getBuilds;


    /* NOTE: Gets all buildings of the same type and team in range. */
    const getSameBuilds = function(li_ot, nm_blk, team) {
      return filter_team(filter_nm(getBuilds(li_ot), nm_blk), team);
    };
    exports.getSameBuilds = getSameBuilds;


    /* <---------------- getUnit ----------------> */


    /* NOTE: Gets a list of units in a circular range. Use {caller} if the a unit should be excluded. */
    const getUnits = function(pos, rad, caller) {
      if(pos == null || rad == null) return new Seq();

      var li_unit = new Seq();

      Units.nearby(null, pos.x, pos.y, rad, unit => {if(unit != caller) li_unit.add(unit)});

      return li_unit;
    };
    exports.getUnits = getUnits;


    /* NOTE: Gets a list of enemy units in range. Derelict team is excluded. */
    const getEnemies = function(pos, rad, team) {
      return filter_enemy(getUnits(pos, rad), team);
    };
    exports.getEnemies = getEnemies;


    /* NOTE: Gets all units of the same type and team in range. */
    const getSameUnits = function(pos, rad, nm_utp, team) {
      return filter_team(filter_nm(getUnits(pos, rad), nm_utp), team);
    };
    exports.getSameUnits = getSameUnits;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_game.js loaded.");
});
