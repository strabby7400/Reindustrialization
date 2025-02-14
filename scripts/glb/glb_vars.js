/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Update
    const update_suppressorTime = 400;
    exports.update_suppressorTime = update_suppressorTime;
  // End


  // Part: Fluid
    const corrosion_damageRatio = 0.0135;
    exports.corrosion_damageRatio = corrosion_damageRatio;

    const clogging_viscosity = 0.75;
    exports.clogging_viscosity = clogging_viscosity;

    const clogging_minDamage = 2.5;
    exports.clogging_minDamage = clogging_minDamage;

    const clogging_damageRatio = 0.02;
    exports.clogging_damageRatio = clogging_damageRatio;

    const gasCylinder_explosionRadius = 64.0;
    exports.gasCylinder_explosionRadius = gasCylinder_explosionRadius;

    const gasCylinder_explosionDamage = 2240.0;
    exports.gasCylinder_explosionDamage = gasCylinder_explosionDamage;
  // End


  // Part: Heat
    const heat_transferMultiplier = 2.2;
    exports.heat_transferMultiplier = heat_transferMultiplier;

    const overheat_damageRatio = 0.05;
    exports.overheat_damageRatio = overheat_damageRatio;

    const overheat_damageScale = 0.01;
    exports.overheat_damageScale = overheat_damageScale;

    const unitHeat_hoveringMultiplier = 0.7;
    exports.unitHeat_hoveringMultiplier = unitHeat_hoveringMultiplier;
  // End


  // Part: Power
    const shortCircuit_lightningDamage = 20.0;
    exports.shortCircuit_lightningDamage = shortCircuit_lightningDamage;
  // End


  // Part: Attack
    const impact_minDamage = 10.0;
    exports.impact_minDamage = impact_minDamage;

    const wall_penaltyLimit = 8.8;
    exports.wall_penaltyLimit = wall_penaltyLimit;
  // End


  // Part: Effect
    const effect_chanceCap = 0.16;
    exports.effect_chanceCap = effect_chanceCap;
  // End


  // Part: Environment
    const terrain_floorThreshold = 0.75;
    exports.terrain_floorThreshold = terrain_floorThreshold;
  // End


  // Part: Gameplay
    const time_maxTimeDelta = 2.5;
    exports.time_maxTimeDelta = time_maxTimeDelta;
  // End
