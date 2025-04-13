/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const db_effect = require("reind/db/db_effect");
  // End


  // Part: Meta
    const update_suppressorTime = 300.0;
    exports.update_suppressorTime = update_suppressorTime;

    const layer_bullet = 74.0;
    exports.layer_bullet = layer_bullet;

    const layer_bulletHigh = 86.0;
    exports.layer_bulletHigh = layer_bulletHigh;
  // End


  // Part: Miner
    const crop_harvestRadius = 128.0;
    exports.crop_harvestRadius = crop_harvestRadius;
  // End


  // Part: Item
    const transfer_junctionMaxConsecutive = 6;
    exports.transfer_junctionMaxConsecutive = transfer_junctionMaxConsecutive;
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

    const gas_explosionRadius = 64.0;
    exports.gas_explosionRadius = gas_explosionRadius;

    const gas_explosionDamage = 2240.0;
    exports.gas_explosionDamage = gas_explosionDamage;

    const flow_pipeDiameter = 100.0;
    exports.flow_pipeDiameter = flow_pipeDiameter;

    const effc_cap = 5.0;
    exports.effc_cap = effc_cap;
  // End


  // Part: Heat
    const heat_transferMultiplier = 0.95;
    exports.heat_transferMultiplier = heat_transferMultiplier;

    const heat_lossMultiplier = 1.5;
    exports.heat_lossMultiplier = heat_lossMultiplier;

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


  // Part: Factory
    const struct_cooldown = 600.0;
    exports.struct_cooldown = struct_cooldown;
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

    const eff_blackSmog = db_effect._craftBlackSmog();
    exports.eff_blackSmog = eff_blackSmog;

    const eff_heatSmog = db_effect._heatSmog();
    exports.eff_heatSmog = eff_heatSmog;

    const eff_invalid = db_effect._invalidPlacement();
    exports.eff_invalid = eff_invalid;
  // End


  // Part: Environment
    const terrain_floorThreshold = 0.75;
    exports.terrain_floorThreshold = terrain_floorThreshold;
  // End


  // Part: Gameplay
    const time_maxTimeDelta = 2.5;
    exports.time_maxTimeDelta = time_maxTimeDelta;
  // End
