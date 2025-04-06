/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Setting
    var beta = false;
    const set_beta = function(val) {
      beta = val;
    };
    exports.set_beta = set_beta;
  // End


  // Part: Radius
    const _radSize = function(size, off) {
      if(size == null) size = 2;
      if(off == null) off = 0.0;

      return (size * 0.5 + 1.0 + off) * Vars.tilesize;
    };
    exports._radSize = _radSize;
  // End


  // Part: Position


    /* <---------------- pos ----------------> */


    const _pos = function(pos_gn, param) {
      if(pos_gn == null) return;

      var vec2 = new Vec2();

      if(pos_gn instanceof Vec2) return vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Point2) return vec2.set(pos_gn.x, pos_gn.y);

      if(pos_gn instanceof Building) return vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Unit) return vec2.set(pos_gn.x, pos_gn.y);

      if(pos_gn instanceof Tile) {
        if(param == null) {vec2.set(pos_gn.worldx(), pos_gn.worldy())}
        else {vec2.set(pos_gn.worldx() + param, pos_gn.worldy() + param)};

        return vec2;
      };

      if(pos_gn instanceof Bullet) return vec2.set(pos_gn.x, pos_gn.y);
      if(pos_gn instanceof Puddle) return vec2.set(pos_gn.x, pos_gn.y);

      if(typeof pos_gn == "string") {
        if(pos_gn == "player" && Vars.player.unit() != null) return vec2.set(Vars.player.unit().x, Vars.player.unit().y);
        if(pos_gn == "mouse") return vec2.set(Core.input.mouseWorldX(), Core.input.mouseWorldY());
      };

      return;
    };
    exports._pos = _pos;


    const _posRay = function(pos_gn_0, ang, rad) {
      if(pos_gn_0 == null || angle == null || rad == null) return;

      var vec2 = new Vec2();
      var pos_0 = _pos(pos_gn_0);

      var x = pos_0.x;
      var y = pos_0.y;
      var dx = rad * Math.cos(ang);
      var dy = rad * Math.sin(ang);

      return vec2.set(x + dx, y + dy);
    };
    exports._posRay = _posRay;


    const _posP3d = function(pos_gn_0, elev) {
      if(elev == null) elev = 0.0;
      if(pos_gn_0 == null) return;

      var vec2 = new Vec2();
      var pos_0 = _pos(pos_gn_0);

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


    const _dst = function(pos_gn1, pos_gn2) {
      if(pos_gn1 == null || pos_gn2 == null) return 99999.0;

      return _pos(pos_gn1).dst(_pos(pos_gn2));
    };
    exports._dst = _dst;
  // End


  // Part: Rotation


    /* <---------------- rot ----------------> */


    const _rotConj = function(rot, rots) {
      if(rots == null) rots = 4;
      if(rot == null) return;

      return Mathf.mod(rot + rots / 2, rots);
    };
    exports._rotConj = _rotConj;


    const _rotDiv = function(rot, offRot, rots) {
      if(offRot == null) offRot = 0;
      if(rots == null) rots = 4;
      if(rot == null) return;

      return Mathf.mod(rot + offRot, rots);
    };
    exports._rotDiv = _rotDiv;


    /* <---------------- cond ----------------> */


    const isDirBlocked = function(b, offRot) {
      if(offRot == null) offRot = 0;
      if(b == null) return false;

      var count = 0;
      _liTileRot(b.tile, _rotDiv(b.rotation, offRot), b.block.size).each(ot => {if(ot.solid() || (ot.build != null && ot.build.block instanceof LiquidJunction)) count += 1});

      return count > 0;
    };
    exports.isDirBlocked = isDirBlocked;


    const isFacing = function(b, ob) {
      if(b == null || ob == null) return false;

      return count_sides(b, ob) > 0;
    };
    exports.isFacing = isFacing;
  // End


  // Part: Tile


    /* <---------------- tile ----------------> */


    const _tilePos = function(pos_gn) {
      if(pos_gn == null) return;

      var pos = _pos(pos_gn);

      return Vars.world.tileWorld(pos.x, pos.y);
    };
    exports._tilePos = _tilePos;


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


    const _tileRand = function(li_t, scr, cap) {
      if(scr == null) scr = function() {return true};
      if(cap == null) cap = li_t.size;
      if(li_t == null || li_t.size == 0) return;

      cap = Math.max(Math.min(cap, li_t.size), 0);

      let i = 0;
      var t = null;
      while((i < cap && !scr.call(t)) || i == 0) {
        t = li_t.get(mdl_math._randInt(cap - 1));
        i++;
      };

      return t;
    };
    exports._tileRand = _tileRand;


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


    const _tileRay = function(t, ang, rad) {
      if(ang == null) ang = 0.0;
      if(rad == null) rad = 0.0;
      if(t == null) return t;

      var pos = _posRay(t, ang, rad);
      var ot = _tilePos(pos);

      return ot;
    };
    exports._tileRay = _tileRay;


    const _tileMouse = function() {
      return _tilePos(_pos("mouse"));
    };
    exports._tileMouse = _tileMouse;


    /* <---------------- tilePair ----------------> */


    const _tilePairRot = function(t, rot) {
      var ot_f = _tileRot("f", t, rot);
      var ot_t = _tileRot("t", t, rot);

      if(ot_f == null || ot_t == null) return;

      return [ot_f, ot_t];
    };
    exports._tilePairRot = _tilePairRot;


    const _tilePairRot_b = function(b) {
      if(b == null) return;

      return _tilePairRot(b.tile, b.rotation);
    };
    exports._tilePairRot_b = _tilePairRot_b;


    /* <---------------- liTile ----------------> */


    const _liTileRot = function(t, rot, size) {
      var pon2 = new Point2();
      var li = new Seq();

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


    const _liTileRot_2side = function(t, rot, size) {
      var li = new Seq();

      if(rot == null) rot = 0;
      if(size == null) size = 1;
      if(t == null) return li;

      li.addAll(_liTileRot(t, rot, size));
      li.addAll(_liTileRot(t, _rotDiv(rot, 2), size));

      return li;
    };
    exports._liTileRot_2side = _liTileRot_2side;


    const _liTileEdge = function(t, size) {
      var li = new Seq();

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


    const _liTileEdgeIns = function(t, size) {
      var li = new Seq();

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


    const _liTileLinked = function(t) {
      var li = new Seq();

      if(t == null) return li;

      t.getLinkedTiles(ot => {if(ot != null) li.add(ot)});

      return li;
    };
    exports._liTileLinked = _liTileLinked;


    const _liTileRect = function(t, r, size) {
      var li = new Seq();

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


    const _liTileRectRot = function(t, r, rot, size) {
      var li = new Seq();

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


    const _liTileCircle = function(t, r, size) {
      var li = new Seq();

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


    const _countSide = function(b, ob) {
      if(b == null || ob == null) return 0;

      var li = b.block.rotate ? _liTileRot(b.tile, b.rotation, b.block.size) : _liTileEdge(b.tile, b.block.size);
      var count = 0;
      li.each(ot => {if(ot.build == ob) count += 1});

      return count;
    };
    exports._countSide = _countSide;


    /* <---------------- frac ----------------> */


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


    const li_22777861 = new Seq();
    const _filterScr = function(li_e, scr) {
      var li = li_22777861.clear();

      if(scr == null) return li_e;

      li_e.each(e => {if(scr.call(e)) li.add(e)});

      return li;
    };
    exports._filterScr = _filterScr;


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


    const li_70256100 = new Seq();
    const _liBuild = function(li_ot) {
      var li = li_70256100.clear();

      li_ot.each(ot => {if(ot.build != null && !li.contains(ot.build)) li.add(ot.build)});

      return li;
    };
    exports._liBuild = _liBuild;


    const _liBuildSame = function(li_ot, nm_blk, team) {
      return _filterTeam(_filterNm(_liBuild(li_ot), nm_blk), team);
    };
    exports._liBuildSame = _liBuildSame;


    /* <---------------- liUnit ----------------> */


    const _liUnit = function(pos_gn, rad, caller) {
      var li = new Seq();

      if(pos_gn == null || rad == null) return li;

      var pos = _pos(pos_gn);

      Units.nearby(null, pos.x, pos.y, rad, unit => {if(unit != caller) li.add(unit)});

      return li;
    };
    exports._liUnit = _liUnit;


    const _liUnitAllied = function(pos_gn, rad, team) {
      return _filterTeam(_liUnit(_pos(pos_gn), rad), team);
    };
    exports._liUnitAllied = _liUnitAllied;


    const _liUnitEnemy = function(pos_gn, rad, team) {
      return _filterEnemy(_liUnit(_pos(pos_gn), rad), team);
    };
    exports._liUnitEnemy = _liUnitEnemy;


    const _liUnitSame = function(pos_gn, rad, nm_utp, team) {
      return _filterTeam(_filterNm(_liUnit(_pos(pos_gn), rad), nm_utp), team);
    };
    exports._liUnitSame = _liUnitSame;
  // End


  // Part: Locate


    /* <---------------- env ----------------> */


    const _ore = function(pos_gn, itm) {
      if(pos_gn == null || itm == null) return;

      var pos = _pos(pos_gn);

      return Vars.indexer.findClosestOre(pos.x, pos.y, itm);
    };
    exports._ore = _ore;


    /* <---------------- build ----------------> */


    const _oreScanner = function(pos_gn, rad, team) {
      if(pos_gn == null || rad == null || team == null) return;

      var pos = _pos(pos_gn);
      var b = null;

      var b_sc = Vars.indexer.findTile(team, pos.x, pos.y, rad, ob => mdl_content.isOreScanner(ob.block));
      if(b_sc != null) {
        var r_sc = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b_sc.block.name, 5);
        var d_cr = (b_sc.block.size * 0.5 + r_sc) * Vars.tilesize * 1.275;

        if(_dst(pos, _pos(b_sc)) < d_cr + 0.0001) b = b_sc;
      };

      return b;
    };
    exports._oreScanner = _oreScanner;


    const _container = function(pos_gn, rad, team) {
      if(pos_gn == null || rad == null || team == null) return;

      var pos = _pos(pos_gn);

      return Vars.indexer.findTile(team, pos.x, pos.y, rad, ob => ob.block instanceof StorageBlock);
    };
    exports._container = _container;


    const _playerContainer = function(pos_gn, rad, team) {
      if(pos_gn == null || rad == null || team == null) return;

      var pos = _pos(pos_gn);
      var unit = null;
      var tmpRad = rad;
      Groups.player.each(pl => {
        var unit_pl = pl.unit();
        if(unit_pl.team == team) {
          var dst = _dst(pos, _pos(unit_pl));

          if(dst < tmpRad + 0.0001) {
            tmpRad = dst;
            unit = unit_pl;
          };
        };
      });

      return unit;
    };
    exports._playerContainer = _playerContainer;


    /* <---------------- entity ----------------> */


    const _closest = function(pos_gn, rad, team) {
      if(pos_gn == null || rad == null || team == null) return;

      var pos = _pos(pos_gn);

      return Units.closestTarget(team, pos.x, pos.y, rad);
    };
    exports._closest = _closest;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_game.js loaded.");
});
