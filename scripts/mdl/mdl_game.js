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


  // Part: Points
    const pon2_offset = [
      new Point2(0, 0),
      new Point2(1, 0),
      new Point2(0, 1),
      new Point2(1, 1),
    ];
    exports.pon2_offset = pon2_offset;
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
      if(pos_gn_0 == null) return;

      if(elev == null) elev = 0.0;

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
      if(rot == null) return;

      if(rots == null) rots = 4;

      return Mathf.mod(rot + rots / 2, rots);
    };
    exports._rotConj = _rotConj;


    const _rotDiv = function(rot, offRot, rots) {
      if(rot == null) return;

      if(offRot == null) offRot = 0;
      if(rots == null) rots = 4;

      return Mathf.mod(rot + offRot, rots);
    };
    exports._rotDiv = _rotDiv;


    /* <---------------- cond ----------------> */


    const isDirBlocked = function(b, offRot) {
      if(b == null) return false;

      if(offRot == null) offRot = 0;

      var count = 0;
      _tsRot(b.tile, _rotDiv(b.rotation, offRot), b.block.size).forEach(ot => {if(ot.solid() || (ot.build != null && ot.build.block instanceof LiquidJunction)) count += 1});

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


    const _tPos = function(pos_gn) {
      if(pos_gn == null) return;

      var pos = _pos(pos_gn);

      return Vars.world.tileWorld(pos.x, pos.y);
    };
    exports._tPos = _tPos;


    const _tRot = function(mode, t, rot) {
      if(t == null) return;
      if(mode != "f" && mode != "t") return;

      if(rot == null) rot = 0;

      var rot_fi = (mode == "f") ? _rotConj(rot) : rot;
      var points = Geometry.d4;
      var pos = points[rot_fi];

      return t.nearby(pos);
    };
    exports._tRot = _tRot;


    const _tRand = function(ts, scr, cap) {
      if(ts == null || ts.length == 0) return;
      if(scr == null) scr = function() {return true};
      if(cap == null) cap = ts.length;

      cap = Math.max(Math.min(cap, ts.length), 0);

      let i = 0;
      var t = null;
      while((i < cap && !scr.call(t)) || i == 0) {
        t = ts[mdl_math._randInt(cap - 1)];
        i++;
      };

      return t;
    };
    exports._tRand = _tRand;


    const _tRandGround = function(ts, cap) {
      var scr = function() {
        var cond = true;
        if(this.solid()) cond = false;
        if(this.floor().isLiquid && !this.floor().shallow) cond = false;
        return cond;
      };

      return _tRand(ts, scr, cap);
    };
    exports._tRandGround = _tRandGround;


    const _tRandNaval = function(ts, cap) {
      var scr = function() {
        var cond = true;
        if(this.solid()) cond = false;
        if(!this.floor().isLiquid) cond = false;
        return cond;
      };

      return _tRand(ts, scr, cap);
    };
    exports._tRandNaval = _tRandNaval;


    const _tRay = function(t, ang, rad) {
      if(t == null) return t;

      if(ang == null) ang = 0.0;
      if(rad == null) rad = 0.0;

      var pos = _posRay(t, ang, rad);
      var ot = _tPos(pos);

      return ot;
    };
    exports._tRay = _tRay;


    const _tMouse = function() {
      return _tPos(_pos("mouse"));
    };
    exports._tMouse = _tMouse;


    /* <---------------- tilePair ----------------> */


    const _tPairRot = function(t, rot) {
      var ot_f = _tRot("f", t, rot);
      var ot_t = _tRot("t", t, rot);

      if(ot_f == null || ot_t == null) return;

      return [ot_f, ot_t];
    };
    exports._tPairRot = _tPairRot;


    const _tPairRot_b = function(b) {
      if(b == null) return;

      return _tPairRot(b.tile, b.rotation);
    };
    exports._tPairRot_b = _tPairRot_b;


    /* <---------------- liTile ----------------> */


    const _tsRot = function(t, rot, size) {
      var arr = [];
      if(t == null) return arr;

      if(rot == null) rot = 0;
      if(size == null) size = 1;

      var ini = (size % 2 == 0) ? ((size / 2 - 1) * -1) : ((size - 1) / 2 * -1);
      var cap = (size % 2 == 0) ? (size / 2 + 1) : ((size - 1) / 2 + 1);
      var px = 0;
      var py = 0;
      for(let i = ini; i < cap; i++) {
        switch(rot) {
          case 0 :
            if(size % 2 == 0) {
              px = size / 2 + 1;
              py = i;
            } else {
              px = (size + 1) / 2;
              py = i;
            };
            break;
          case 1 :
            if(size % 2 == 0) {
              px = i;
              py = size / 2 + 1;
            } else {
              px = i;
              py = (size + 1) / 2;
            };
            break;
          case 2 :
            if(size % 2 == 0) {
              px = size / 2 * -1;
              py = i;
            } else {
              px = (size + 1) / 2 * -1;
              py = i;
            };
            break;
          case 3 :
            if(size % 2 == 0) {
              px = i;
              py = size / 2 * -1;
            } else {
              px = i;
              py = (size + 1) / 2 * -1;
            };
            break;
        };

        var ot = t.nearby(px, py);
        if(ot != null) arr.push(ot);
      };

      return arr;
    };
    exports._tsRot = _tsRot;


    const _tsRot_2side = function(t, rot, size) {
      var arr = [];
      if(t == null) return arr;

      if(rot == null) rot = 0;
      if(size == null) size = 1;

      arr.push.apply(_tsRot(t, rot, size));
      arr.push.apply(_tsRot(t, _rotDiv(rot, 2), size));

      return arr;
    };
    exports._tsRot_2side = _tsRot_2side;


    const _tsEdge = function(t, size) {
      var arr = [];
      if(t == null) return arr;

      if(size == null) size = 1;

      var cap = size * 4;
      var pons = Edges.getEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(pons[i]);
        if(ot != null) arr.push(ot);
      };

      return arr;
    };
    exports._tsEdge = _tsEdge;


    const _tsEdgeIns = function(t, size) {
      var arr = [];
      if(t == null) return arr;

      if(size == null) size = 1;

      var cap = size * 4;
      var pons = Edges.getInsideEdges(size);

      for(let i = 0; i < cap; i++) {
        var ot = t.nearby(pons[i]);
        if(ot != null && !arr.includes(ot)) arr.push(ot);
      };

      return arr;
    };
    exports._tsEdgeIns = _tsEdgeIns;


    const _tsLinked = function(t) {
      var arr = [];
      if(t == null) return arr;

      t.getLinkedTiles(ot => {if(ot != null) arr.push(ot)});

      return arr;
    };
    exports._tsLinked = _tsLinked;


    const _tsRect = function(t, r, size) {
      var arr = [];
      if(t == null) return arr;

      if(r == null) r = 0;
      if(size == null) size = 1;

      var left;
      var right;
      if(size % 2 != 0) {
        left = -((size - 1) / 2 + r);
        right = -left + 1;
      } else {
        left = -(size / 2 - 1 + r);
        right = -left + 2;
      };

      for(let i = left; i < right; i++) {
        for(let j = left; j < right; j++) {
          var ot = t.nearby(i, j);
          if(ot != null) arr.push(ot);
        };
      };

      return arr;
    };
    exports._tsRect = _tsRect;


    const _tsRectRot = function(t, r, rot, size) {
      var arr = [];
      if(t == null) return arr;

      if(r == null) r = 0;
      if(rot == null) rot = 0;
      if(size == null) size = 1;

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
      if(ct != null) arr.push.apply(_tsRect(ct, r, size));

      return arr;
    };
    exports._tsRectRot = _tsRectRot;



    const _tsCircle = function(t, r, size) {
      var arr = [];
      if(t == null) return arr;

      if(r == null) r = 0;
      if(size == null) size = 1;

      var w = Vars.world.width();
      var h = Vars.world.height();
      if(size % 2 != 0) {
        Geometry.circle(t.x, t.y, w, h, r, (tx, ty) => {
          var ot = Vars.world.tile(tx, ty);
          if(ot != null) arr.push(ot);
        });
      } else {
        for(let i = 0; i < 4; i++) {
          var ot0 = t.nearby(pon2_offset[i]);
          if(ot0 == null) continue;

          Geometry.circle(ot0.x, ot0.y, w, h, r, (tx, ty => {
            var ot = Vars.world.tile(tx, ty);
            if(ot != null && !arr.includes(ot)) arr.push(ot);
          }));
        };
      };

      return arr;
    };
    exports._tsCircle = _tsCircle;


  // End


  // Part: Side


    /* <---------------- count ----------------> */


    const _countSide = function(b, ob) {
      if(b == null || ob == null) return 0;

      var ts = b.block.rotate ? _tsRot(b.tile, b.rotation, b.block.size) : _tsEdge(b.tile, b.block.size);
      var count = 0;
      ts.forEach(ot => {if(ot.build == ob) count += 1});

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


    const _filterScr = function(es, scr) {
      if(scr == null) return es;

      return es.filter(e => scr.call(e));
    };
    exports._filterScr = _filterScr;


    const _filterNm = function(es, nm) {
      if(nm == null) return es;

      var scr = function() {
        if(this instanceof Building && this.block.name == nm) return true;
        if(this instanceof Unit && this.type.name == nm) return true;

        return false;
      };

      return _filterScr(es, scr);
    };
    exports._filterNm = _filterNm;


    const _filterTeam = function(es, team) {
      if(team == null) return es;

      var scr = function() {
        return this.team == team;
      };

      return _filterScr(es, scr);
    };
    exports._filterTeam = _filterTeam;


    const _filterEnemy = function(es, team) {
      if(team == null || team == Team.derelict) return es;

      var scr = function() {
        return (this.team != Team.derelict) && (this.team != team) && ((this instanceof Building) ? this.block.targetable : this.type.targetable);
      };

      return _filterScr(es, scr);
    };
    exports._filterEnemy = _filterEnemy;


    /* <---------------- liBuild ----------------> */


    const _bs = function(ts) {
      var arr = [];

      ts.forEach(ot => {if(ot.build != null && !arr.includes(ot.build)) arr.push(ot.build)});

      return arr;
    };
    exports._bs = _bs;


    const _bsAllied = function(ts, team) {
      return _filterTeam(_bs(ts), team);
    };
    exports._bsAllied = _bsAllied;


    const _bsEnemy = function(ts, team) {
      return _filterEnemy(_bs(ts), team);
    };
    exports._bsEnemy = _bsEnemy;


    const _bsSame = function(ts, nm_blk, team) {
      return _filterTeam(_filterNm(_bs(ts), nm_blk), team);
    };
    exports._bsSame = _bsSame;


    /* <---------------- liUnit ----------------> */


    const _units = function(pos_gn, rad, caller) {
      var arr = [];
      if(pos_gn == null || rad == null) return arr;

      var pos = _pos(pos_gn);
      Units.nearby(null, pos.x, pos.y, rad, unit => {if(unit != caller) arr.push(unit)});

      return arr;
    };
    exports._units = _units;


    const _unitsAllied = function(pos_gn, rad, team) {
      return _filterTeam(_units(_pos(pos_gn), rad), team);
    };
    exports._unitsAllied = _unitsAllied;


    const _unitsEnemy = function(pos_gn, rad, team) {
      return _filterEnemy(_units(_pos(pos_gn), rad), team);
    };
    exports._unitsEnemy = _unitsEnemy;


    const _unitsSame = function(pos_gn, rad, nm_utp, team) {
      return _filterTeam(_filterNm(_units(_pos(pos_gn), rad), nm_utp), team);
    };
    exports._unitsSame = _unitsSame;
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


    const _target = function(pos_gn, rad, team) {
      if(pos_gn == null || rad == null || team == null) return;

      var pos = _pos(pos_gn);

      return Units.closestTarget(team, pos.x, pos.y, rad);
    };
    exports._target = _target;


    const _targets = function(pos_gn, rad, team, size) {
      var arr = [];
      if(pos_gn == null || rad == null || team == null) return arr;

      if(size == null) size = 1;

      arr.push.apply(_unitsEnemy(pos_gn, rad, team));
      arr.push.apply(_bsEnemy(_tsCircle(_tPos(pos_gn), rad / Vars.tilesize, size), team));

      return arr;
    };
    exports._targets = _targets;


    const _targetChain = function(pos_gn, rad0, rad, team, size, cap) {
      var arr = [];
      if(pos_gn == null || rad0 == null) return arr;

      if(rad == null) rad = 40.0;
      if(team == null) team = Team.derelict;
      if(size == null) size = 1;
      if(cap == null) cap = -1;

      var pos = _pos(pos_gn);
      var seq = new Seq(_targets(pos, rad0 * 2.0, team, size));
      var tmpTg;
      var tmpPos = pos;
      var isFirst = true;
      var i = 0;
      while(cap < 0 ? true : i < cap) {
        tmpTg = Geometry.findClosest(tmpPos.x, tmpPos.y, seq);
        if(tmpTg == null) break;
        if(_dst(tmpPos, tmpTg) > (isFirst ? rad0 : rad) + 0.0001) break;

        arr.push(tmpTg);
        seq.remove(tmpTg);
        tmpPos = _pos(tmpTg);

        isFirst = false;
        i++;
      };

      return arr;
    };
    exports._targetChain = _targetChain;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_game.js loaded.");
});
