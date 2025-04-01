/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericWireBlock");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_power = require("reind/frag/frag_power");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_game = require("reind/mdl/mdl_game");

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

        blk.addBar("power", PowerNode.makePowerBalance());
        blk.addBar("batteries", PowerNode.makeBatteryBalance());
      });
    };


    function canPlaceOnComp(blk, t, team, rot) {
      if(!frag_power.canPlaceOn_shortCircuit(blk, t, team, rot)) return false;

      return true;
    };


    function unitOnComp(b, unit) {
      if(b.power != null && b.power.status > 0.1 && !mdl_content.isCoreUnit(unit.type) && mdl_content.isMoving(unit)) {
        var p = Math.pow(unit.hitSize / 4.0, 1.35) * 0.001;
        if(unit instanceof Tankc) p *= 3.0;
        if(unit.isBoss()) p *= 3.0;
        if(
          unit.hasEffect(StatusEffects.wet) ||
          unit.hasEffect(Vars.content.statusEffect("reind-sta-liq-brine-corrosion")) ||
          unit.hasEffect(Vars.content.statusEffect("reind-sta-liq-sea-water-corrosion")) ||
          unit.hasEffect(Vars.content.statusEffect("reind-sta-liq-slurry-slowed"))
        ) p *= 2.0;

        if(Mathf.chanceDelta(p)) frag_attack.atk_lightning_noob(b, Team.derelict, 1, 6, 4, null, Pal.accent);
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
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const unitOn = function(b, unit) {
      unitOnComp(b, unit);
    };
    exports.unitOn = unitOn;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_cable.js loaded.");
});
