/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_recipeFactory = require("reind/blk/blk_recipeFactory");

    const frag_facility = require("reind/frag/frag_facility");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Accessor
    const accB_rcFi = function(b, mode, val) {
      if(mode == "r") return b.rcFi;
      if(mode == "w") b.rcFi = val;
    };
    exports.accB_rcFi = accB_rcFi;


    const accB_id_rc = function(b, mode, val) {
      if(mode == "r") return b.id_rc;
      if(mode == "w") b.id_rc = val;
    };
    exports.accB_id_rc = accB_id_rc;


    const accB_needCheck = function(b, mode, val) {
      if(mode == "r") return b.needCheck;
      if(mode == "w") b.needCheck = val;
    };
    exports.accB_needCheck = accB_needCheck;


    const accB_ci = function(b, mode, val) {
      if(mode == "r") return b.ci;
      if(mode == "w") b.ci = val;
    };
    exports.accB_ci = accB_ci;


    const accB_bi = function(b, mode, val) {
      if(mode == "r") return b.bi;
      if(mode == "w") b.bi = val;
    };
    exports.accB_bi = accB_bi;


    const accB_opt = function(b, mode, val) {
      if(mode == "r") return b.opt;
      if(mode == "w") b.opt = val;
    };
    exports.accB_opt = accB_opt;


    const accB_co = function(b, mode, val) {
      if(mode == "r") return b.co;
      if(mode == "w") b.co = val;
    };
    exports.accB_co = accB_co;


    const accB_bo = function(b, mode, val) {
      if(mode == "r") return b.bo;
      if(mode == "w") b.bo = val;
    };
    exports.accB_bo = accB_bo;


    const accB_fo = function(b, mode, val) {
      if(mode == "r") return b.fo;
      if(mode == "w") b.fo = val;
    };
    exports.accB_fo = accB_fo;


    const accB_temp_effc = function(b, mode, val) {
      if(mode == "r") return b.temp_effc;
      if(mode == "w") b.temp_effc = val;
    };
    exports.accB_temp_effc = accB_temp_effc;
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-heat
    /* NOTE: Keep this on top! */


    /* <---------------- auxiliary ----------------> */


    const facHeat_temperatureControlUnit = extend(GenericCrafter, "fac-heat-temperature-control-unit", {
      rcFi: require("reind/rc/rc_facHeat_temperatureControlUnit"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facHeat_temperatureControlUnit.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facHeat_temperatureControlUnit, {
      rcFi: require("reind/rc/rc_facHeat_temperatureControlUnit"),
      id_rc: mdl_content.getConfig(facHeat_temperatureControlUnit, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facHeat_temperatureControlUnit = facHeat_temperatureControlUnit;


    /* <---------------- heater ----------------> */


    const facHeat_furnaceHeater = extend(GenericCrafter, "fac-heat-furnace-heater", {
      rcFi: require("reind/rc/rc_facHeat_furnaceHeater"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facHeat_furnaceHeater.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facHeat_furnaceHeater, {
      rcFi: require("reind/rc/rc_facHeat_furnaceHeater"),
      id_rc: mdl_content.getConfig(facHeat_furnaceHeater, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facHeat_furnaceHeater = facHeat_furnaceHeater;


    /* <---------------- heat exchanger ----------------> */


  // End


  // Part: fac-air


    /* <---------------- pressure pump ----------------> */


    const facAir_liquidRingPressurePump = extend(GenericCrafter, "fac-air-liquid-ring-pressure-pump", {
      rcFi: require("reind/rc/rc_facAir_liquidRingPressurePump"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facAir_liquidRingPressurePump.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facAir_liquidRingPressurePump, {
      rcFi: require("reind/rc/rc_facAir_liquidRingPressurePump"),
      id_rc: mdl_content.getConfig(facAir_liquidRingPressurePump, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facAir_liquidRingPressurePump = facAir_liquidRingPressurePump;


  // End


  // Part: fac-furn


    /* <---------------- special ----------------> */


    const facFurn_carbonizationKiln = extend(GenericCrafter, "fac-furn-carbonization-kiln", {
      rcFi: require("reind/rc/rc_facFurn_carbonizationKiln"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_carbonizationKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_carbonizationKiln, {
      rcFi: require("reind/rc/rc_facFurn_carbonizationKiln"),
      id_rc: mdl_content.getConfig(facFurn_carbonizationKiln, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_carbonizationKiln = facFurn_carbonizationKiln;


    const facFurn_primitiveBrickKiln = extend(GenericCrafter, "fac-furn-primitive-brick-kiln", {
      rcFi: require("reind/rc/rc_facFurn_primitiveBrickKiln"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_primitiveBrickKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveBrickKiln, {
      rcFi: require("reind/rc/rc_facFurn_primitiveBrickKiln"),
      id_rc: mdl_content.getConfig(facFurn_primitiveBrickKiln, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_primitiveBrickKiln = facFurn_primitiveBrickKiln;


    /* <---------------- smelter ----------------> */


    const facFurn_kiln = extend(GenericCrafter, "fac-furn-kiln", {
      rcFi: require("reind/rc/rc_facFurn_kiln"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_kiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_kiln, {
      rcFi: require("reind/rc/rc_facFurn_kiln"),
      id_rc: mdl_content.getConfig(facFurn_kiln, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_kiln = facFurn_kiln;


    const facFurn_bloomery = extend(GenericCrafter, "fac-furn-bloomery", {
      rcFi: require("reind/rc/rc_facFurn_bloomery"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_bloomery.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_bloomery, {
      rcFi: require("reind/rc/rc_facFurn_bloomery"),
      id_rc: mdl_content.getConfig(facFurn_bloomery, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_bloomery = facFurn_bloomery;


    const facFurn_brickedBlastFurnace = extend(GenericCrafter, "fac-furn-bricked-blast-furnace", {
      rcFi: require("reind/rc/rc_facFurn_brickedBlastFurnace"),
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_brickedBlastFurnace.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_brickedBlastFurnace, {
      rcFi: require("reind/rc/rc_facFurn_brickedBlastFurnace"),
      id_rc: mdl_content.getConfig(facFurn_brickedBlastFurnace, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_brickedBlastFurnace = facFurn_brickedBlastFurnace;


    /* <---------------- sintering furnace ----------------> */


    const facFurn_primitiveSinteringFurnace = extend(GenericCrafter, "fac-furn-primitive-sintering-furnace", {
      rcFi: require("reind/rc/rc_facFurn_primitiveSinteringFurnace"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_primitiveSinteringFurnace.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveSinteringFurnace, {
      rcFi: require("reind/rc/rc_facFurn_primitiveSinteringFurnace"),
      id_rc: mdl_content.getConfig(facFurn_primitiveSinteringFurnace, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_primitiveSinteringFurnace = facFurn_primitiveSinteringFurnace;


    /* <---------------- roasting furnace ----------------> */


    const facFurn_colossalKiln = extend(GenericCrafter, "fac-furn-colossal-kiln", {
      rcFi: require("reind/rc/rc_facFurn_colossalKiln"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_colossalKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_colossalKiln, {
      rcFi: require("reind/rc/rc_facFurn_colossalKiln"),
      id_rc: mdl_content.getConfig(facFurn_colossalKiln, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_colossalKiln = facFurn_colossalKiln;


    /* <---------------- coking oven ----------------> */


    const facFurn_primitiveCokeOven = extend(GenericCrafter, "fac-furn-primitive-coke-oven", {
      rcFi: require("reind/rc/rc_facFurn_primitiveCokeOven"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facFurn_primitiveCokeOven.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveCokeOven, {
      rcFi: require("reind/rc/rc_facFurn_primitiveCokeOven"),
      id_rc: mdl_content.getConfig(facFurn_primitiveCokeOven, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facFurn_primitiveCokeOven = facFurn_primitiveCokeOven;


  // End


  // Part: fac-mill


    /* <---------------- rock crusher ----------------> */


    const facMill_jawCrusher = extend(GenericCrafter, "fac-mill-jaw-crusher", {
      rcFi: require("reind/rc/rc_facMill_jawCrusher"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMill_jawCrusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_jawCrusher, {
      rcFi: require("reind/rc/rc_facMill_jawCrusher"),
      id_rc: mdl_content.getConfig(facMill_jawCrusher, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMill_jawCrusher = facMill_jawCrusher;


    const facMill_hammerCrusher = extend(GenericCrafter, "fac-mill-hammer-crusher", {
      rcFi: require("reind/rc/rc_facMill_hammerCrusher"),
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMill_hammerCrusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_hammerCrusher, {
      rcFi: require("reind/rc/rc_facMill_hammerCrusher"),
      id_rc: mdl_content.getConfig(facMill_hammerCrusher, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMill_hammerCrusher = facMill_hammerCrusher;


    /* <---------------- pulverizer ----------------> */


    const facMill_mechanicalMill = extend(GenericCrafter, "fac-mill-mechanical-mill", {
      rcFi: require("reind/rc/rc_facMill_mechanicalMill"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMill_mechanicalMill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_mechanicalMill, {
      rcFi: require("reind/rc/rc_facMill_mechanicalMill"),
      id_rc: mdl_content.getConfig(facMill_mechanicalMill, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMill_mechanicalMill = facMill_mechanicalMill;


    const facMill_ballMill = extend(GenericCrafter, "fac-mill-ball-mill", {
      rcFi: require("reind/rc/rc_facMill_ballMill"),
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMill_ballMill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_ballMill, {
      rcFi: require("reind/rc/rc_facMill_ballMill"),
      id_rc: mdl_content.getConfig(facMill_ballMill, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMill_ballMill = facMill_ballMill;


  // End


  // Part: fac-mix


    /* <---------------- dust mixer ----------------> */


    const facMix_vMixer = extend(GenericCrafter, "fac-mix-v-mixer", {
      rcFi: require("reind/rc/rc_facMix_vMixer"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMix_vMixer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMix_vMixer, {
      rcFi: require("reind/rc/rc_facMix_vMixer"),
      id_rc: mdl_content.getConfig(facMix_vMixer, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMix_vMixer = facMix_vMixer;


  // End


  // Part: fac-proc


    /* <---------------- misc ----------------> */


    const facProc_brickPress = extend(GenericCrafter, "fac-proc-brick-press", {
      rcFi: require("reind/rc/rc_facProc_brickPress"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facProc_brickPress.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_brickPress, {
      rcFi: require("reind/rc/rc_facProc_brickPress"),
      id_rc: mdl_content.getConfig(facProc_brickPress, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facProc_brickPress = facProc_brickPress;


    const facProc_charcoalRodMaker_m = extend(GenericCrafter, "fac-proc-charcoal-rod-maker-m", {
      rcFi: require("reind/rc/rc_facProc_charcoalRodMaker_m"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facProc_charcoalRodMaker_m.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_charcoalRodMaker_m, {
      rcFi: require("reind/rc/rc_facProc_charcoalRodMaker_m"),
      id_rc: mdl_content.getConfig(facProc_charcoalRodMaker_m, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facProc_charcoalRodMaker_m = facProc_charcoalRodMaker_m;


  // End


  // Part: fac-rmv


    /* <---------------- grain dryer ----------------> */


    const facRmv_hotAirDryer = extend(GenericCrafter, "fac-rmv-hot-air-dryer", {
      rcFi: require("reind/rc/rc_facRmv_hotAirDryer"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facRmv_hotAirDryer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facRmv_hotAirDryer, {
      rcFi: require("reind/rc/rc_facRmv_hotAirDryer"),
      id_rc: mdl_content.getConfig(facRmv_hotAirDryer, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facRmv_hotAirDryer = facRmv_hotAirDryer;


  // End


  // Part: fac-sep


    /* <---------------- purification ----------------> */


    const facSep_dryMagneticSeparator = extend(GenericCrafter, "fac-sep-dry-magnetic-separator", {
      rcFi: require("reind/rc/rc_facSep_dryMagneticSeparator"),
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      // Specific
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
        frag_facility.setStats_restrict(this);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
      // Specific
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!frag_facility.canPlaceOn_restrict(this, tile, team, rotation)) return false;
        return true;
      },
      // Specific
      drawPlace(tx, ty, rotation, valid) {
        this.super$drawPlace(tx, ty, rotation, valid);
        frag_facility.drawPlace_restrict(this, tx, ty, rotation, valid);
      },
    });
    facSep_dryMagneticSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_dryMagneticSeparator, {
      rcFi: require("reind/rc/rc_facSep_dryMagneticSeparator"),
      id_rc: mdl_content.getConfig(facSep_dryMagneticSeparator, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      // Specific
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
        frag_facility.drawSelect_restrict(this);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facSep_dryMagneticSeparator = facSep_dryMagneticSeparator;


    const facSep_mineralJig_m = extend(GenericCrafter, "fac-sep-mineral-jig-m", {
      rcFi: require("reind/rc/rc_facSep_mineralJig_m"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facSep_mineralJig_m.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_mineralJig_m, {
      rcFi: require("reind/rc/rc_facSep_mineralJig_m"),
      id_rc: mdl_content.getConfig(facSep_mineralJig_m, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facSep_mineralJig_m = facSep_mineralJig_m;


  // End


  // Part: fac-misc


    /* <---------------- inlet ----------------> */


    /* NOTE: Keep this on top! */
    const facMisc_genericInlet = extend(GenericCrafter, "fac-misc-generic-inlet", {
      rcFi: require("reind/rc/rc_facMisc_genericInlet"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMisc_genericInlet.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_genericInlet, {
      rcFi: require("reind/rc/rc_facMisc_genericInlet"),
      id_rc: mdl_content.getConfig(facMisc_genericInlet, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMisc_genericInlet = facMisc_genericInlet;


    const facMisc_fuelInlet = extend(GenericCrafter, "fac-misc-fuel-inlet", {
      rcFi: require("reind/rc/rc_facMisc_fuelInlet"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMisc_fuelInlet.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_fuelInlet, {
      rcFi: require("reind/rc/rc_facMisc_fuelInlet"),
      id_rc: mdl_content.getConfig(facMisc_fuelInlet, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMisc_fuelInlet = facMisc_fuelInlet;


    /* <---------------- crafting ----------------> */


    const facMisc_coreCrafter = extend(GenericCrafter, "fac-misc-core-crafter", {
      rcFi: require("reind/rc/rc_facMisc_coreCrafter"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    facMisc_coreCrafter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_coreCrafter, {
      rcFi: require("reind/rc/rc_facMisc_coreCrafter"),
      id_rc: mdl_content.getConfig(facMisc_coreCrafter, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.facMisc_coreCrafter = facMisc_coreCrafter;


  // End


  // Part: ileff-misc


    /* <---------------- trading ----------------> */


    const ileffMisc_bitBank = extend(GenericCrafter, "ileff-misc-bit-bank", {
      rcFi: require("reind/rc/rc_ileffMisc_bitBank"),
      setStats() {
        this.super$setStats();
        blk_recipeFactory.setStats(this, this.rcFi);
      },
      init() {
        this.super$init();
        blk_recipeFactory.init(this, this.rcFi);
      },
      setBars() {
        this.super$setBars();
        blk_recipeFactory.setBars(this, this.rcFi);
      },
      outputsItems() {
        return blk_recipeFactory.outputsItems(this, this.rcFi);
      },
      consumesLiquid(liquid) {
        return blk_recipeFactory.consumesLiquid(this, liquid, this.rcFi);
      },
    });
    ileffMisc_bitBank.buildType = () => extend(GenericCrafter.GenericCrafterBuild, ileffMisc_bitBank, {
      rcFi: require("reind/rc/rc_ileffMisc_bitBank"),
      id_rc: mdl_content.getConfig(ileffMisc_bitBank, 0),
      needCheck: true,
      ci: new Seq(),
      bi: new Seq(),
      opt: new Seq(),
      co: new Seq(),
      bo: new Seq(),
      fo: new Seq(),
      temp_effc: 0.0,
      updateTile() {
        blk_recipeFactory.updateTile(this, this.rcFi, this.id_rc);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        blk_recipeFactory.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        blk_recipeFactory.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!blk_recipeFactory.acceptItem(this, source, item, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!blk_recipeFactory.acceptLiquid(this, source, liquid, this.ci, this.bi, this.opt)) return false;
        return true;
      },
      shouldConsume() {
        if(!blk_recipeFactory.shouldConsume(this, this.co, this.bo, this.fo)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        blk_recipeFactory.drawSelect(this, this.rcFi, this.id_rc);
      },
      drawStatus() {
        blk_recipeFactory.drawStatus(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_rc);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_rc = read.f();
      },
    });
    exports.ileffMisc_bitBank = ileffMisc_bitBank;


  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_recipeFactory.js loaded.");
});
