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
      cd: 480.0,
      needCheck: true,
      plan: new Seq(),
      showPlan: false,
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
      cd: 480.0,
      needCheck: true,
      plan: new Seq(),
      showPlan: false,
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
      cd: 480.0,
      needCheck: true,
      plan: new Seq(),
      showPlan: false,
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
      cd: 480.0,
      needCheck: true,
      plan: new Seq(),
      showPlan: false,
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
