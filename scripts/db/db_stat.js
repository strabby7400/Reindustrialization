/*
  ========================================
  Section: Definition
  ========================================
*/


  /*
    ========================================
    Sub-section: Block
    ========================================
  */


    // Part: Generic
      const stat_type = new Stat("reind-stat-type.name", StatCat.function);
      exports.type = stat_type;

      const stat_faction = new Stat("reind-stat-faction.name", StatCat.function);
      exports.faction = stat_faction;

      const stat_connectionRange = new Stat("reind-stat-connection-range.name", StatCat.function);
      exports.connectionRange = stat_connectionRange;

      const stat_canExplode = new Stat("reind-stat-can-explode.name", StatCat.function);
      exports.canExplode = stat_canExplode;

      const stat_explosionRadius = new Stat("reind-stat-explosion-radius.name", StatCat.function);
      exports.explosionRadius = stat_explosionRadius;

      const stat_spreadLiquid = new Stat("reind-stat-spread-liquid.name", StatCat.function);
      exports.spreadLiquid = stat_spreadLiquid;

      const stat_impactRange = new Stat("reind-stat-impact-range.name", StatCat.function);
      exports.impactRange = stat_impactRange;

      const stat_restrictionRange = new Stat("reind-stat-restriction-range.name", StatCat.function);
      exports.restrictionRange = stat_restrictionRange;

      const stat_magneticDisturbance = new Stat("reind-stat-magnetic-disturbance.name", StatCat.function);
      exports.magneticDisturbance = stat_magneticDisturbance;

      const stat_magneticallyVulnerable = new Stat("reind-stat-magnetically-vulnerable.name", StatCat.function);
      exports.magneticallyVulnerable = stat_magneticallyVulnerable;

      const stat_magneticRange = new Stat("reind-stat-magnetic-range.name", StatCat.function);
      exports.magneticRange = stat_magneticRange;

      const stat_flammable = new Stat("reind-stat-flammable.name", StatCat.function);
      exports.flammable = stat_flammable;

      const stat_requiredTerrain = new Stat("reind-stat-required-terrain.name", StatCat.function);
      exports.requiredTerrain = stat_requiredTerrain;

      const stat_disabledIn = new Stat("reind-stat-disabled-in.name", StatCat.function);
      exports.disabledIn = stat_disabledIn;
    // End


    // Part: Miner
      /* Keep this at the top! */
      const stat_boostedDrillSpeed = new Stat("reind-stat-boosted-drill-speed.name", StatCat.crafting);
      exports.boostedDrillSpeed = stat_boostedDrillSpeed;

      const stat_mineTier = new Stat("reind-stat-mine-tier.name", StatCat.crafting);
      exports.mineTier = stat_mineTier;

      const stat_depthTierMultiplier = new Stat("reind-stat-depth-tier-multiplier.name", StatCat.crafting);
      exports.depthTierMultiplier = stat_depthTierMultiplier;

      const stat_mineableItem = new Stat("reind-stat-mineable-item.name", StatCat.crafting);
      exports.mineableItem = stat_mineableItem;

      const stat_blockedItem = new Stat("reind-stat-blocked-item.name", StatCat.crafting);
      exports.blockedItem = stat_blockedItem;
    // End


    // Part: Item Block
      const stat_unloadable = new Stat("reind-stat-unloadable.name", StatCat.items);
      exports.unloadable = stat_unloadable;

      const stat_exposedToAir = new Stat("reind-stat-exposed-to-air.name", StatCat.items);
      exports.exposedToAir = stat_exposedToAir;
    // End


    // Part: Liquid Block
      const stat_standardPumpSpeed = new Stat("reind-stat-standard-pump-speed.name", StatCat.liquids);
      exports.standardPumpSpeed = stat_standardPumpSpeed;

      const stat_pipeDiameter = new Stat("reind-stat-pipe-diameter.name", StatCat.liquids);
      exports.pipeDiameter = stat_pipeDiameter;

      const stat_pipeRoughness = new Stat("reind-stat-pipe-roughness.name", StatCat.liquids);
      exports.pipeRoughness = stat_pipeRoughness;

      const stat_fluidPressure = new Stat("reind-stat-fluid-pressure.name", StatCat.liquids);
      exports.fluidPressure = stat_fluidPressure;

      const stat_materialGroup = new Stat("reind-stat-material-group.name", StatCat.liquids);
      exports.materialGroup = stat_materialGroup;

      const stat_corrosionResistence = new Stat("reind-stat-corrosion-resistence.name", StatCat.liquids);
      exports.corrosionResistence = stat_corrosionResistence;

      const stat_cloggable = new Stat("reind-stat-cloggable.name", StatCat.liquids);
      exports.cloggable = stat_cloggable;

      const stat_fluidHeatCapacity = new Stat("reind-stat-fluid-heat-capacity.name", StatCat.liquids);
      exports.fluidHeatCapacity = stat_fluidHeatCapacity;

      const stat_storageType = new Stat("reind-stat-storage-type.name", StatCat.liquids);
      exports.storageType = stat_storageType;

      const stat_coreEffc = new Stat("reind-stat-core-effc.name", StatCat.liquids);
      exports.coreEffc = stat_coreEffc;
    // End


    // Part: Heat Block
      const stat_heatTransferCoefficient = new Stat("reind-stat-heat-transfer-coefficient.name", StatCat.function);
      exports.heatTransferCoefficient = stat_heatTransferCoefficient;

      const stat_heatLoss = new Stat("reind-stat-heat-loss.name", StatCat.function);
      exports.heatLoss = stat_heatLoss;

      const stat_heatLimit = new Stat("reind-stat-heat-limit.name", StatCat.function);
      exports.heatLimit = stat_heatLimit;
    // End


    // Part: Power Block
      const stat_conductsPower = new Stat("reind-stat-conducts-power.name", StatCat.power);
      exports.conductsPower = stat_conductsPower;

      const stat_connectable = new Stat("reind-stat-connectable.name", StatCat.power);
      exports.connectable = stat_connectable;

      const stat_canShortCircuit = new Stat("reind-stat-can-short-circuit.name", StatCat.power);
      exports.canShortCircuit = stat_canShortCircuit;

      const stat_voltageTier = new Stat("reind-stat-voltage-tier.name", StatCat.power);
      exports.voltageTier = stat_voltageTier;
    // End


    // Part: Factory
      const stat_recipes = new Stat("reind-stat-recipes.name", StatCat.crafting);
      exports.recipes = stat_recipes;

      const stat_attributeRequired = new Stat("reind-stat-attribute-required.name", StatCat.crafting);
      exports.attributeRequired = stat_attributeRequired;

      const stat_factoryFamily = new Stat("reind-stat-factory-family.name", StatCat.function);
      exports.factoryFamily = stat_factoryFamily;

      const stat_familyMembers = new Stat("reind-stat-family-members.name", StatCat.function);
      exports.familyMembers = stat_familyMembers;

      const stat_targetBlock = new Stat("reind-stat-target-block.name", StatCat.function);
      exports.targetBlock = stat_targetBlock;
    // End


    // Part: Payload
    // End


    // Part: Turret
      const stat_extinguishesFire = new Stat("reind-stat-extinguishes-fire.name", StatCat.function);
      exports.extinguishesFire = stat_extinguishesFire;
    // End


    // Part: Growth Block
      const stat_growTime = new Stat("reind-stat-grow-time.name", StatCat.crafting);
      exports.growTime = stat_growTime;

      const stat_growStages = new Stat("reind-stat-grow-stages.name", StatCat.crafting);
      exports.growStages = stat_growStages;

      const stat_cropYield = new Stat("reind-stat-crop-yield.name", StatCat.crafting);
      exports.cropYield = stat_cropYield;
    // End

  /*
    ========================================
    Sub-section: Resource
    ========================================
  */


    // Part: Item
      const stat_buildable = new Stat("reind-stat-buildable.name", StatCat.function);
      exports.buildable = stat_buildable;

      const stat_isIntermediate = new Stat("reind-stat-is-intermediate.name", StatCat.function);
      exports.isIntermediate = stat_isIntermediate;

      const stat_isConsumable = new Stat("reind-stat-is-consumable.name", StatCat.function);
      exports.isConsumable = stat_isConsumable;

      const stat_usedIn = new Stat("reind-stat-used-in.name", StatCat.function);
      exports.usedIn = stat_usedIn;

      const stat_isOre = new Stat("reind-stat-is-ore.name", StatCat.function);
      exports.isOre = stat_isOre;

      const stat_hardness = new Stat("reind-stat-hardness.name", StatCat.function);
      exports.hardness = stat_hardness;

      const stat_resourceTag = new Stat("reind-stat-resource-tag.name", StatCat.function);
      exports.resourceTag = stat_resourceTag;
    // End


    // Part: Fluid
      const stat_density = new Stat("reind-stat-density.name", StatCat.function);
      exports.density = stat_density;

      const stat_conductive = new Stat("reind-stat-conductive.name", StatCat.function);
      exports.conductive = stat_conductive;

      const stat_fluidGroup = new Stat("reind-stat-fluid-group.name", StatCat.function);
      exports.fluidGroup = stat_fluidGroup;

      const stat_fluidTags = new Stat("reind-stat-fluid-tags.name", StatCat.function);
      exports.fluidTags = stat_fluidTags;

      const stat_corrosion = new Stat("reind-stat-corrosion.name", StatCat.function);
      exports.corrosion = stat_corrosion;

      const stat_sticky = new Stat("reind-stat-sticky.name", StatCat.function);
      exports.sticky = stat_sticky;

      const stat_fluidHeat = new Stat("reind-stat-fluid-heat.name", StatCat.function);
      exports.fluidHeat = stat_fluidHeat;

      const stat_fluidStatus = new Stat("reind-stat-fluid-status.name", StatCat.function);
      exports.fluidStatus = stat_fluidStatus;
    // End


    // Part: Special
      const stat_isWaste = new Stat("reind-stat-is-waste.name", StatCat.function);
      exports.isWaste = stat_isWaste;

      const stat_transportable = new Stat("reind-stat-transportable.name", StatCat.function);
      exports.transportable = stat_transportable;
    // End


  /*
    ========================================
    Sub-section: Environment
    ========================================
  */


    // Part: Resource
      const stat_blockRelated = new Stat("reind-stat-block-related.name", StatCat.function);
      exports.blockRelated = stat_blockRelated;

      const stat_resourceRelated = new Stat("reind-stat-resource-related.name", StatCat.function);
      exports.resourceRelated = stat_resourceRelated;

      const stat_attributeSupplied = new Stat("reind-stat-attribute-supplied.name", StatCat.function);
      exports.attributeSupplied = stat_attributeSupplied;
    // End


    // Part: Map
      const stat_mapOnly = new Stat("reind-stat-map-only.name", StatCat.function);
      exports.mapOnly = stat_mapOnly;

      const stat_mapNote = new Stat("reind-stat-map-note.name", StatCat.function);
      exports.mapNote = stat_mapNote;
    // End


  /*
    ========================================
    Sub-section: Unit
    ========================================
  */


    // Part: Type
      const stat_notRobot = new Stat("reind-stat-not-robot.name", StatCat.function);
      exports.notRobot = stat_notRobot;
    // End


    // Part: Param
      const stat_epRange = new Stat("reind-stat-ep-range.name", StatCat.function);
      exports.epRange = stat_epRange;

      const stat_epRequired = new Stat("reind-stat-ep-required.name", StatCat.function);
      exports.epRequired = stat_epRequired;

      const stat_pollutionTolerance = new Stat("reind-stat-pollution-tolerance.name", StatCat.function);
      exports.pollutionTolerance = stat_pollutionTolerance;
    // End


  /*
    ========================================
    Sub-section: Status
    ========================================
  */


    // Part: Type
      const stat_robotOnly = new Stat("reind-stat-robot-only.name", StatCat.function);
      exports.robotOnly = stat_robotOnly;
    // End


    // Part: File
      const stat_drama = new Stat("reind-stat-drama.name", StatCat.function);
      exports.drama = stat_drama;
    // End


  /*
    ========================================
    Sub-section: Special
    ========================================
  */


    // Part: Pollution
      const stat_pollution = new Stat("reind-stat-pollution.name", StatCat.function);
      exports.pollution = stat_pollution;

      const stat_pollutionReduction = new Stat("reind-stat-pollution-reduction.name", StatCat.function);
      exports.pollutionReduction = stat_pollutionReduction;
    // End


  /*
    ========================================
    Sub-section: Stat Unit
    ========================================
  */


    // NOTE: Trival for another file.


    const statUnit_perBlock = new StatUnit("reind-statu-per-block.name", false);
    exports.perBlock = statUnit_perBlock;

    const statUnit_pollutionUnit = new StatUnit("reind-statu-pollution-unit.name");
    exports.pollutionUnit = statUnit_pollutionUnit;
