/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericProjector");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(Stat.booster);
      blk.stats.remove(Stat.range);

      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      blk.stats.add(Stat.range, "[accent]" + Strings.autoFixed((blk.range - blk.size) / 2.0, 2) + " " + StatUnit.blocks.localized() + "[] / [#84f491]" + Strings.autoFixed(r, 2) + " " + StatUnit.blocks.localized() + "[]");
    };


    function updateTileComp(b) {
      // Initialize
      if(b.needCheck) {
        var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], b.block.name, 5);
        b.r = r;

        b.needCheck = false;
      };

      if(b.lastChange != Vars.world.tileChanges) {
        b.lastChange = Vars.world.tileChanges;
        b.updateTargets();
      };

      b.units.clear();
      mdl_game._liUnitAllied(b, b.r * Vars.tilesize).each(unit => {if(unit.damaged() && !b.units.contains(unit)) b.units.add(unit)});

      b.warmup = Mathf.approachDelta(b.warmup, b.didRegen ? 1.0 : 0.0, 1.0 / 120.0);
      b.totalTime += b.warmup * Time.delta;
      b.didRegen = false;
      b.anyTargets = false;

      if(b.checkSuppression()) return;

      if(b.efficiency > 0.0) {
        if((b.optionalTimer += Time.delta * b.optionalEfficiency) > b.block.optionalUseTime - 0.0001) {
          b.consume();
          b.optionalTimer = 0.0;
        };

        var amt = Mathf.lerp(1.0, b.block.optionalMultiplier, b.optionalEfficiency) * b.block.healPercent;
        b.targets.each(ob => {
          if(ob.damaged() && !ob.isHealSuppressed()) {
            b.didRegen = true;

            var tmpVal = b.repairMap.get(ob);
            if(tmpVal == null) tmpVal = 0.0;

            b.repairMap.put(ob, Mathf.clamp(tmpVal, amt * b.edelta() * ob.maxHealth * 0.01, ob.maxHealth - ob.health));

            if(tmpVal < 0.0001 && Mathf.chance(b.block.effectChance * Math.pow(ob.block.size, 2))) mdl_effect.showAround(ob, b.block.effect, ob.block.size * Vars.tilesize * 0.5 - 1.0, 0.0);
          };
        });

        b.units.each(unit => {
          if(unit.damaged()) {
            b.didRegen = true;

            var tmpVal = b.repairMap.get(unit);
            if(tmpVal == null) tmpVal = 0.0;

            b.repairMap.put(unit, Mathf.clamp(tmpVal, amt * b.edelta() * unit.maxHealth * 0.01, unit.maxHealth - unit.health));
          };
        });
      };

      if(b.lastUpdateFrame != Vars.state.updateId) {
        b.lastUpdateFrame = Vars.state.updateId;

        b.repairMap.each((key, val) => {
          if(key != null) {
            key.heal(val);
            if(key instanceof Building) key.recentlyHealed();
          };
        });
        b.repairMap.clear();
      };
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var r = mdl_data.read_1n1v(db_block.db["param"]["range"]["base"], blk.name, 5);
      mdl_draw.drawPlaceCircle(blk, Vars.world.tile(tx, ty), Pal.heal, r * Vars.tilesize, true);
    };


    function drawComp(b) {
      if(!b.shouldConsume() || b.efficiency < 0.0001) return;

      b.units.each(unit => mdl_draw.drawFlickerLine(b, unit, Pal.heal));
    };


    function drawSelectComp(b) {
      mdl_draw.drawSelectCircle(b, b.r * Vars.tilesize, true, Pal.heal);
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

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot, valid);
    };
    exports.drawPlace = drawPlace;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_projectiveMender.js loaded.");
});
