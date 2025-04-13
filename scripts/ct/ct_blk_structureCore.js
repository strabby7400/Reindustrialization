/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_structureCore");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-heat
    const facHeat_primitiveEvaporationChamberController = extend(Wall, "fac-heat-primitive-evaporation-chamber-controller", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    facHeat_primitiveEvaporationChamberController.buildType = () => extend(Wall.WallBuild, facHeat_primitiveEvaporationChamberController, {
      needCheck: true,
      changeEff: null,
      cd: 0.0, showPlan: false, plan: [],
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.facHeat_primitiveEvaporationChamberController = facHeat_primitiveEvaporationChamberController;
  // End


  // Part: fac-furn
    const facFurn_brickedBlastFurnaceController = extend(Wall, "fac-furn-bricked-blast-furnace-controller", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    facFurn_brickedBlastFurnaceController.buildType = () => extend(Wall.WallBuild, facFurn_brickedBlastFurnaceController, {
      needCheck: true,
      changeEff: null,
      cd: 0.0, showPlan: false, plan: [],
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.facFurn_brickedBlastFurnaceController = facFurn_brickedBlastFurnaceController;
  // End


  // Part: fac-sep
    const facSep_highPressureCycloneSeparatorController = extend(Wall, "fac-sep-high-pressure-cyclone-separator-controller", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    facSep_highPressureCycloneSeparatorController.buildType = () => extend(Wall.WallBuild, facSep_highPressureCycloneSeparatorController, {
      needCheck: true,
      changeEff: null,
      cd: 0.0, showPlan: false, plan: [],
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.facSep_highPressureCycloneSeparatorController = facSep_highPressureCycloneSeparatorController;


    const facSep_largeVibrationScreenController = extend(Wall, "fac-sep-large-vibration-screen-controller", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    facSep_largeVibrationScreenController.buildType = () => extend(Wall.WallBuild, facSep_largeVibrationScreenController, {
      needCheck: true,
      changeEff: null,
      cd: 0.0, showPlan: false, plan: [],
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.facSep_largeVibrationScreenController = facSep_largeVibrationScreenController;
  // End


  // Part: fac-misc
    /* <---------------- very specific zone ----------------> */


    const facMisc_colossalRouterController = extend(Wall, "fac-misc-colossal-router-controller", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    facMisc_colossalRouterController.buildType = () => extend(Wall.WallBuild, facMisc_colossalRouterController, {
      needCheck: true,
      changeEff: null,
      cd: 0.0, showPlan: false, plan: [],
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.facMisc_colossalRouterController = facMisc_colossalRouterController;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_structureCore.js loaded.");
});
