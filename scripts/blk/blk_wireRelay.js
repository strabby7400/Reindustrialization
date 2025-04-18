/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericWireBlock");

    const frag_power = require("reind/frag/frag_power");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function initComp(blk) {
      Events.run(MusicRegisterEvent, () => {
        var cons = mdl_data.read_1n1v(db_block.db["power"]["consumption"], blk.name);
        if(cons != null) {
          blk.consumePower(cons / 60.0);
          blk.stats.add(Stat.powerUse, cons, StatUnit.perSecond);
        };
      });
    };


    function canPlaceOnComp(blk, t, team, rot) {
      return frag_power.canPlaceOn_shortCircuit(blk, t, team, rot);
    };


    function drawLaserComp(blk, x1, y1, x2, y2, size1, size2) {
      var size = blk.size;
      var dst = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2)) / Vars.tilesize;
      var offSize = dst * Vars.tilesize - (size1 + size2) * Vars.tilesize * 0.5;
      if(dst > (size * 0.5 + 1.0)) {
        var pon2 = Geometry.d4[Tile.relativeTo(x1, y1, x2, y2)];
        var color = Pal.accent;
        mdl_draw.drawLaser(
          Tmp.v1.set(x1 + pon2.x * size * Vars.tilesize * 0.5, y1 + pon2.y * size * Vars.tilesize * 0.5),
          Tmp.v2.set(x1 + pon2.x * (size * Vars.tilesize * 0.5 + offSize), y1 + pon2.y * (size * Vars.tilesize * 0.5 + offSize)),
          color,
          0.7,
          Layer.power,
          false,
        );
      };
    };


    function drawComp(b) {
      mdl_draw.baseDraw_buildingComp(b);

      // NOTE: WTF is this bunch of codes.
      if(Mathf.zero(Vars.renderer.laserOpacity) || b.team == Team.derelict) return;
      for(let i = 0; i < 4; i++) {
        var ot = b.dests[i];
        var ob = b.links[i];
        if(ot == null || !ob.wasVisible) continue;
        if(ob.block instanceof BeamNode) {
          if(ob.tileX() != b.tileX() && ob.tileY() != b.tileY()) continue;
          if(ob.id > b.id && b.block.range < ob.block.range) continue;
          if(b.block.range > ob.block.range) continue;
        };

        b.block.drawLaser(b.x, b.y, ob.x, ob.y, b.block.size, ob.block.size);
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);
    };
    exports.updateTile = updateTile;


    const init = function(blk) {
      initComp(blk);
    };
    exports.init = init;


    const canPlaceOn = function(blk, t, team, rot) {
      return canPlaceOnComp(blk, t, team, rot);
    };
    exports.canPlaceOn = canPlaceOn;


    const drawLaser = function(blk, x1, y1, x2, y2, size1, size2) {
      drawLaserComp(blk, x1, y1, x2, y2, size1, size2);
    };
    exports.drawLaser = drawLaser;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_wireRelay.js loaded.");
});
