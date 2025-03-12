/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Setting
    var beta = false;
    const set_beta = function(bool) {
      beta = bool;
    };
    exports.set_beta = set_beta;
  // End


  // Part: Position


    /* <---------------- pos ----------------> */


    const arr_vec2_25663251 = [
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
    ];
    const _pos = function(chan, pos_gn, param) {
      if(chan == null || pos_gn == null) return;

      var vec2 = beta ? arr_vec2_25663251[chan].setZero() : new Vec2();

      if(pos_gn instanceof Vec2) vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Point2) vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Tile) {
        if(param == null) {vec2.set(pos_gn.worldx(), pos_gn.worldy())}
        else {vec2.set(pos_gn.worldx() + param, pos_gn.worldy() + param)};
      };
      if(pos_gn instanceof Building) vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Unit) vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Puddle) vec2.set(pos_gn.x, pos_gn.y);
      if(typeof pos_gn == "string") {
        if(pos_gn == "player" && Vars.player.unit() != null) vec2.set(Vars.player.unit().x, Vars.player.unit().y);
        if(pos_gn == "mouse") vec2.set(Core.input.mouseWorldX(), Core.input.mouseWorldY());
      };

      return vec2;
    };
    exports._pos = _pos;


    /* NOTE: Gets a new position with a ray. */
    const arr_vec2_25895656 = [
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
    ];
    const _posRay = function(chan, pos_0, ang, rad) {
      if(chan == null || pos_0 == null || angle == null || rad == null) return pos_0;

      var vec2 = beta ? arr_vec2_25895656[chan].setZero() : new Vec2();

      var x = pos_0.x;
      var y = pos_0.y;
      var dx = rad * Math.cos(ang);
      var dy = rad * Math.sin(ang);

      return vec.set(x + dx, y + dy);
    };
    exports._posRay = _posRay;


    /* NOTE: Gets a position used for pseudo-3D effects. */
    const arr_vec2_29856665 = [
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
      new Vec2(),
    ];
    const _posP3d = function(chan, pos_0, elev) {
      if(elev == null) elev = 0.0;
      if(chan == null || pos_0 == null) return pos_0;

      var vec2 = beta ? arr_vec2_29856665[chan].setZero() : new Vec2();

      var x = pos_0.x;
      var y = pos_0.y;
      var x_cam = Core.camera.position.x;
      var y_cam = Core.camera.position.y;
      var offsetScl = 0.06;
      var offsetMax = elev * 24.0;
      var offX = (x - x_cam + 16.0) * elev * offsetScl;
      var offY = (y - y_cam + 40.0) * elev * offsetScl;
      var x_fi = x - ((Math.abs(offX) > offsetMax) ? offsetMax * Mathf.sign(offX) : offX);
      var y_fi = y - ((Math.abs(offY) > offsetMax) ? offsetMax * Mathf.sign(offY) : offY);

      return vec2.set(x_fi, y_fi);
    };
    exports._posP3d = _posP3d;
  // End


  // Part: Distance


    /* <---------------- dst ----------------> */


    /* NOTE: Gets the distance between two points. I know it's kind of trivial. */
    const _dst = function(pos1, pos2) {
      if(pos1 == null || pos2 == null) return 99999.0;

      return pos1.dst(pos2);
    };
    exports._dst = _dst;
  // End


  // Part: Rotation


    /* <---------------- rot ----------------> */


    /* NOTE: Gets the opposite direction. */
    const _rotConj = function(rot, rots) {
      if(rots == null) rots = 4;
      if(rot == null) return;

      return Mathf.mod(rot + rots / 2, rots);
    };
    exports._rotConj = _rotConj;


    /* NOTE: Gets the offset direction. */
    const _rotDiv = function(rot, offRot, rots) {
      if(offRot == null) offRot = 0;
      if(rots == null) rots = 4;
      if(rot == null) return;

      return Mathf.mod(rot + offRot, rots);
    };
    exports._rotDiv = _rotDiv;


    /* <---------------- cond ----------------> */


    /* NOTE: Checks if the direction is blocked. */
    const isDirBlocked = function(b, offRot) {
      if(offRot == null) offRot = 0;
      if(b == null) return false;

      var count = 0;
      _liTileRot(b.tile, _rotDiv(b.rotation, offRot), b.block.size).each(ot => {if(ot.solid() || (ot.build != null && ot.build.block instanceof LiquidJunction)) count += 1});

      return count > 0;
    };
    exports.isDirBlocked = isDirBlocked;


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


    /* <---------------- tile ----------------> */


    /* NOTE: Gets a tile from a position. */
    const _tilePos = function(pos) {
      if(pos == null) return;

      return Vars.world.tileWorld(pos.x, pos.y);
    };
    exports._tilePos = _tilePos;


    /* NOTE: Gets a tile according to the assigned rotation. I know {nearby} can do this. */
    const _tileRot = function(mode, t, rot) {
      if(rot == null) rot = 0;
      if(mode != "f" && mode != "t") return;
      if(t == null) return;

      var rot_fi = (mode == "f") ? _rotConj(rot) : rot;
      var points = Geometry.d4;
      var pos = points[rot_fi];

      return t.nearby(pos);
    };
    exports._tileRot = _tileRot;


    /* NOTE: Gets a rand tile in a list, uses {scr} to filter some tiles out. */
    const _tileRand = function(li_t, scr, cap) {
      if(scr == null) scr = function() {return true};
      if(cap == null) cap = li_t.size;
      if(li_t == null || li_t.size == 0) return;

      cap = Math.max(Math.min(cap, li_t.size), 0);

      let i = 0;
      var t = null;
      while((i < cap && !scr.call(t)) || i == 0) {
        t = li_t.get(mdl_math.randInt(cap - 1));
        i++;
      };

      return t;
    };
    exports._tileRand = _tileRand;


    /* NOTE: Gets a random tile that is safe for ground units to spawn on. */
    const _tileRandGround = function(li_t, cap) {
      var scr = function() {
        var cond = true;
        if(this.solid()) cond = false;
        if(this.floor().isLiquid && !this.floor().shallow) cond = false;
        return cond;
      };

      return _tileRand(li_t, scr, cap);
    };
    exports._tileRandGround = _tileRandGround;


    /* NOTE: Safe for naval units instead. */
    const _tileRandNaval = function(li_t, cap) {
      var scr = function() {
        var cond = true;
        if(this.solid()) cond = false;
        if(!this.floor().isLiquid) cond = false;
        return cond;
      };

      return _tileRand(li_t, scr, cap);
    };
    exports._tileRandNaval = _tileRandNaval;


    /* NOTE: Gets a new tile with a ray. */
    const _tileRay = function(t, ang, rad) {
      if(ang == null) ang = 0.0;
      if(rad == null) rad = 0.0;
      if(t == null) return t;

      var pos = _posRay(0, t, ang, rad);
      var ot = _tilePos(pos);

      return ot;
    };
    exports._tileRay = _tileRay;


    /* NOTE: Gets the tile under the mouse. This is nullable! */
    const _tileMouse = function() {
      return _tilePos(_pos(0, "mouse"));
    };
    exports._tileMouse = _tileMouse;


    /* <---------------- tilePair ----------------> */


    /* NOTE: Gets a pair of tiles in aspect of rotation. From [0] to [1]. */
    const _tilePairRot = function(t, rot) {
      var ot_f = _tileRot("f", t, rot);
      var ot_t = _tileRot("t", t, rot);

      if(ot_f == null || ot_t == null) return;

      return [ot_f, ot_t];
    };
    exports._tilePairRot = _tilePairRot;


    /* NOTE: Works only for 1-sized blocks. */
    const _tilePairRot_b = function(b) {
      if(b == null) return;

      return _tilePairRot(b.tile, b.rotation);
    };
    exports._tilePairRot_b = _tilePairRot_b;


    /* <---------------- liTile ----------------> */


    /* NOTE: Get a list of tiles according to rotation and size. */
    const pon2_55875521 = new Point2();
    const li_70224930 = new Seq();
    const _liTileRot = function(t, rot, size) {
      var pon2 = pon2_55875521.set(0, 0);
      var li = li_70224930.clear();

      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return li;

      var start = (size % 2 == 0) ? ((size / 2 - 1) * -1) : ((size - 1) / 2 * -1);
      var cap = (size % 2 == 0) ? (size / 2 + 1) : ((size - 1) / 2 + 1);
      for(let i = start; i < cap; i++) {
        var pos;
        switch(rot) {
          case 0 :
            (size % 2 == 0) ? (pos = pon2.set(size / 2 + 1, i)) : (pos = pon2.set((size + 1) / 2, i));
            break;
          case 1 :
            (size % 2 == 0) ? (pos = pon2.set(i, size / 2 + 1)) : (pos = pon2.set(i, (size + 1) / 2));
            break;
          case 2 :
            (size % 2 == 0) ? (pos = pon2.set(size / 2 * -1, i)) : (pos = pon2.set((size + 1) / 2 * -1, i));
            break;
          case 3 :
            (size % 2 == 0) ? (pos = pon2.set(i, size / 2 * -1)) : (pos = pon2.set(i, (size + 1) / 2 * -1));
            break;
        };

        var ot = t.nearby(pos);
        if(ot != null) li.add(ot);
      };

      return li;
    };
    exports._liTileRot = _liTileRot;


    /* NOTE: Gets both the front and back sides. */
    const li_26854444 = new Seq();
    const _liTileRot_2side = function(t, rot, size) {
      var li = li_26854444.clear();

      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return li;

      li.addAll(_liTileRot(t, rot, size));
      li.addAll(_liTileRot(t, _rotDiv(rot, 2), size));

      return li;
    };
    exports._liTileRot_2side = _liTileRot_2side;


    /* NOTE: Gets a list of tiles from edges. */
    const li_26885125 = new Seq();
    const _liTileEdge = function(t, size) {
      var li = li_26885125.clear();

      if(size == null) size = 1;
      if(t == null) return li;

      var cap = size * 4;
      var points = Edges.getEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(points[i]);
        if(ot != null) li.add(ot);
      };

      return li;
    };
    exports._liTileEdge = _liTileEdge;


    /* NOTE: Inner edges now, with no duplicates. */
    const li_28885542 = new Seq();
    const _liTileEdgeIns = function(t, size) {
      var li = li_28885542.clear();

      if(size == null) size = 1;
      if(t == null) return li;

      var cap = size * 4;
      var points = Edges.getInsideEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(points[i]);
        if(ot != null && !li.contains(ot)) li.add(ot);
      };

      return li;
    };
    exports._liTileEdgeIns = _liTileEdgeIns;


    /* NOTE: Simply {getLinkedTiles}. */
    const li_87558861 = new Seq();
    const _liTileLinked = function(t) {
      var li = li_87558861.clear();

      if(t == null) return li;

      t.getLinkedTiles(ot => {if(ot != null) li.add(ot)});

      return li;
    };
    exports._liTileLinked = _liTileLinked;


    /* NOTE: Get tiles from a rectangular range, {size} is simply the inner radius... is it radius? */
    const li_26268851 = new Seq();
    const _liTileRect = function(t, r, size) {
      var li = li_26268851.clear();

      if(r == null) r = 0;
      if(size == null) size = 1;
      if(t == null) return li;

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
          if(ot != null) li.add(ot);
        };
      };

      return li;
    };
    exports._liTileRect = _liTileRect;


    /* NOTE: Rotation is introduced, like assemblers. */
    const li_77921834 = new Seq();
    const _liTileRectRot = function(t, r, rot, size) {
      var li = li_77921834.clear();

      if(r == null) r = 0;
      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return li;

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

      if(ct != null) li.addAll(_liTileRect(ct, r, size));

      return li;
    };
    exports._liTileRectRot = _liTileRectRot;


    /* NOTE: Gets a list of tiles from a circular range. */
    const li_76214589 = new Seq();
    const _liTileCircle = function(t, r, size) {
      var li = li_76214589.clear();

      if(r == null) r = 0;
      if(size == null) size = 1;
      if(t == null) return li;

      Geometry.circle(t.x, t.y, Vars.world.width(), Vars.world.height(), r, (tx, ty) => {
        var ot = Vars.world.tile(tx, ty);
        if(ot != null) li.add(ot);
      });

      return li;
    };
    exports._liTileCircle = _liTileCircle;


  // End


  // Part: Side


    /* <---------------- count ----------------> */


    /* NOTE: Counts how many shared sides there are between two buildings. */
    const _countSide = function(b, ob) {
      if(b == null || ob == null) return 0;

      var li = b.block.rotate ? _liTileRot(b.tile, b.rotation, b.block.size) : _liTileEdge(b.tile, b.block.size);
      var count = 0;
      li.each(ot => {if(ot.build == ob) count += 1});

      return count;
    };
    exports._countSide = _countSide;


    /* <---------------- frac ----------------> */


    /* NOTE: Just like how heat works in vanilla game, {b} should be the giver. */
    const _fracSide = function(b, ob) {
      if(b == null || ob == null) return 0.0;

      var cap = b.block.rotate ? b.block.size : b.block.size * 4;
      var frac = _countSide(b, ob) / cap;

      return frac;
    };
    exports._fracSide = _fracSide;
  // End


  // Part: Entity (Builds & Units)


    /* <---------------- filter ----------------> */


    /* NOTE: Filters out some entities by customized scripts. */
    const li_22777861 = new Seq();
    const _filterScr = function(li_e, scr) {
      var li = li_22777861.clear();

      if(scr == null) return li_e;

      li_e.each(e => {if(scr.call(e)) li.add(e)});

      return li;
    };
    exports._filterScr = _filterScr;


    /* NOTE: Filters out some entities by name. */
    const li_26986145 = new Seq();
    const _filterNm = function(li_e, nm) {
      var li = li_26986145.clear();

      if(nm == null) return li_e;

      var scr = function() {
        if(this instanceof Building && this.block.name == nm) return true;
        if(this instanceof Unit && this.type.name == nm) return true;

        return false;
      };
      li.addAll(_filterScr(li_e, scr));

      return li;
    };
    exports._filterNm = _filterNm;


    /* NOTE: Filters out some entities by team. */
    const li_83840097 = new Seq();
    const _filterTeam = function(li_e, team) {
      var li = li_83840097.clear();

      if(team == null) return li_e;

      var scr = function() {
        return this.team == team;
      };
      li.addAll(_filterScr(li_e, scr));

      return li;
    };
    exports._filterTeam = _filterTeam;


    /* NOTE: Filters out some entities that is enemy to the assigned team. */
    const li_70251302 = new Seq();
    const _filterEnemy = function(li_e, team) {
      var li = li_70251302.clear();

      if(team == null || team == Team.derelict) return li_e;

      var scr = function() {
        return (this.team != Team.derelict) && (this.team != team);
      };
      li.addAll(_filterScr(li_e, scr));

      return li;
    };
    exports._filterEnemy = _filterEnemy;


    /* <---------------- liBuild ----------------> */


    /* NOTE: Gets a list of buildings from a list of tiles, no duplicates for multi-blocks. */
    const li_70256100 = new Seq();
    const _liBuild = function(li_ot) {
      var li = li_70256100.clear();

      li_ot.each(ot => {if(ot.build != null && !li.contains(ot.build)) li.add(ot.build)});

      return li;
    };
    exports._liBuild = _liBuild;


    /* NOTE: Gets all buildings of the same type and team in range. */
    const _liBuildSame = function(li_ot, nm_blk, team) {
      return _filterTeam(_filterNm(_liBuild(li_ot), nm_blk), team);
    };
    exports._liBuildSame = _liBuildSame;


    /* <---------------- liUnit ----------------> */


    /* NOTE: Gets a list of units in a circular range. Use {caller} if the a unit should be excluded. */
    const li_77025433 = new Seq();
    const _liUnit = function(pos, rad, caller) {
      var li = li_77025433.clear();

      if(pos == null || rad == null) return li;

      Units.nearby(null, pos.x, pos.y, rad, unit => {if(unit != caller) li.add(unit)});

      return li;
    };
    exports._liUnit = _liUnit;


    /* NOTE: Gets a list of allied units in range. */
    const _liUnitAllied = function(pos, rad, team) {
      return _filterTeam(_liUnit(pos, rad), team);
    };
    exports._liUnitAllied = _liUnitAllied;


    /* NOTE: Gets a list of enemy units in range. Derelict team is excluded. */
    const _liUnitEnemy = function(pos, rad, team) {
      return _filterEnemy(_liUnit(pos, rad), team);
    };
    exports._liUnitEnemy = _liUnitEnemy;


    /* NOTE: Gets all units of the same type and team in range. */
    const _liUnitSame = function(pos, rad, nm_utp, team) {
      return _filterTeam(_filterNm(_liUnit(pos, rad), nm_utp), team);
    };
    exports._liUnitSame = _liUnitSame;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_game.js loaded.");
});
