/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericWireBlock = require("reind/blk/blk_genericWireBlock");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_power = require("reind/frag/frag_power");

    const mdl_game = require("reind/mdl/mdl_game");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Component
    function canPlaceOnComp(blk, t, team, rot) {
      if(!frag_power.canPlaceOn_shortCircuit(blk, t, team, rot)) return false;

      return true;
    };


    function unitOnComp(b, unit) {
      if(b.power != null && b.power.status > 0.1 && !unit.type.name.includes("reind-unit-core-") && unit.vel.len() > 0.0001) {
        var p = Math.pow(unit.hitSize / 4.0, 1.35) * 0.001;
        if(unit instanceof Tankc) p *= 3.0;
        if(unit.isBoss()) p *= 3.0;
        if(
          unit.hasEffect(StatusEffects.wet) ||
          unit.hasEffect(Vars.content.statusEffect("reind-sta-liq-brine-corrosion")) ||
          unit.hasEffect(Vars.content.statusEffect("reind-sta-liq-sea-water-corrosion")) ||
          unit.hasEffect(Vars.content.statusEffect("reind-sta-liq-slurry-slowed"))
        ) p *= 2.0;

        if(Mathf.chanceDelta(p)) frag_attack.attack_lightning(mdl_game.poser_1b(b), Team.derelict, 1, 6, 4, glb_vars.shortCircuit_lightningDamage, Pal.accent);
      };
    };


    function setupComp(blk, cons) {
      Events.run(ClientLoadEvent, () => {
        blk.consumePower(cons);
        blk.stats.add(Stat.powerUse, cons * 60.0, StatUnit.perSecond);
        blk.addBar("power", PowerNode.makePowerBalance());
        blk.addBar("batteries", PowerNode.makeBatteryBalance());
      });
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericWireBlock.setStats(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericWireBlock.updateTile(b);
    };
    exports.updateTile = updateTile;


    const canPlaceOn = function(blk, t, team, rot) {
      if(!canPlaceOnComp(blk, t, team, rot)) return false;

      return true;
    };
    exports.canPlaceOn = canPlaceOn;


    const unitOn = function(b, unit) {
      unitOnComp(b, unit);
    };
    exports.unitOn = unitOn;


    const setup = function(blk, cons) {
      setupComp(blk, cons);
    };
    exports.setup = setup;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_cable.js loaded.");
});
