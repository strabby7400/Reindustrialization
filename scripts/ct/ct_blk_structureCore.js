/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_structureCore = require("reind/blk/blk_structureCore");
  // End


  // Part: Accessor
    const accB_cooldown = function(b, mode, val) {
      if(mode == "r") return b.cooldown;
      if(mode == "w") b.cooldown = val;
    };
    exports.accB_cooldown = accB_cooldown;


    const accB_needCheck = function(b, mode, val) {
      if(mode == "r") return b.needCheck;
      if(mode == "w") b.needCheck = val;
    };
    exports.accB_needCheck = accB_needCheck;


    const accB_plan = function(b, mode, val) {
      if(mode == "r") return b.plan;
      if(mode == "w") b.plan = val;
    };
    exports.accB_plan = accB_plan;
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
        blk_structureCore.setStats(this);
      },
      init() {
        this.super$init();
        blk_structureCore.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_structureCore.drawPlace(this, x, y, rotation, valid);
      },
    });
    facFurn_brickedBlastFurnaceController.buildType = () => extend(Wall.WallBuild, facFurn_brickedBlastFurnaceController, {
      cooldown: 480.0,
      needCheck: true,
      plan: new Seq(),
      updateTile() {
        this.super$updateTile();
        blk_structureCore.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_structureCore.buildConfiguration(this, table, this.plan);
      },
      configured(builder, value) {
        blk_structureCore.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        blk_structureCore.draw(this, this.plan);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_structureCore.drawSelect(this, this.plan);
      },
    });
    exports.facFurn_brickedBlastFurnaceController = facFurn_brickedBlastFurnaceController;
  // End


  // Part: fac-sep
    const facSep_highPressureCycloneSeparatorController = extend(Wall, "fac-sep-high-pressure-cyclone-separator-controller", {
      setStats() {
        this.super$setStats();
        blk_structureCore.setStats(this);
      },
      init() {
        this.super$init();
        blk_structureCore.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_structureCore.drawPlace(this, x, y, rotation, valid);
      },
    });
    facSep_highPressureCycloneSeparatorController.buildType = () => extend(Wall.WallBuild, facSep_highPressureCycloneSeparatorController, {
      cooldown: 480.0,
      needCheck: true,
      plan: new Seq(),
      updateTile() {
        this.super$updateTile();
        blk_structureCore.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_structureCore.buildConfiguration(this, table, this.plan);
      },
      configured(builder, value) {
        blk_structureCore.configured(this, builder, value);
      },
      draw() {
        this.super$draw();
        blk_structureCore.draw(this, this.plan);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_structureCore.drawSelect(this, this.plan);
      },
    });
    exports.facSep_highPressureCycloneSeparatorController = facSep_highPressureCycloneSeparatorController;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_structureCore.js loaded.");
});
