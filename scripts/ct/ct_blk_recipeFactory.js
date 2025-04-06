/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_recipeFactory");

    const frag_faci = require("reind/frag/frag_faci");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-heat
    // NOTE: Keep this on top!


    /* <---------------- auxiliary ----------------> */


    const facHeat_temperatureControlUnit = extend(GenericCrafter, "fac-heat-temperature-control-unit", {
      rcFi: require("reind/rc/rc_facHeat_temperatureControlUnit"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facHeat_temperatureControlUnit.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facHeat_temperatureControlUnit, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facHeat_temperatureControlUnit"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facHeat_furnaceHeater.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facHeat_furnaceHeater, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facHeat_furnaceHeater"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facAir_liquidRingPressurePump.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facAir_liquidRingPressurePump, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facAir_liquidRingPressurePump"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_carbonizationKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_carbonizationKiln, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_carbonizationKiln"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_primitiveBrickKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveBrickKiln, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_primitiveBrickKiln"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


    const facFurn_electrodeMelter = extend(GenericCrafter, "fac-furn-electrode-melter", {
      rcFi: require("reind/rc/rc_facFurn_electrodeMelter"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_electrodeMelter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_electrodeMelter, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_electrodeMelter"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facFurn_electrodeMelter = facFurn_electrodeMelter;


    /* <---------------- smelter ----------------> */


    const facFurn_kiln = extend(GenericCrafter, "fac-furn-kiln", {
      rcFi: require("reind/rc/rc_facFurn_kiln"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_kiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_kiln, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_kiln"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_bloomery.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_bloomery, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_bloomery"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_brickedBlastFurnace.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_brickedBlastFurnace, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_brickedBlastFurnace"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_primitiveSinteringFurnace.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveSinteringFurnace, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_primitiveSinteringFurnace"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_colossalKiln.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_colossalKiln, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_colossalKiln"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facFurn_primitiveCokeOven.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facFurn_primitiveCokeOven, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facFurn_primitiveCokeOven"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMill_jawCrusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_jawCrusher, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMill_jawCrusher"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMill_hammerCrusher.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_hammerCrusher, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMill_hammerCrusher"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMill_mechanicalMill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_mechanicalMill, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMill_mechanicalMill"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMill_ballMill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMill_ballMill, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMill_ballMill"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMix_vMixer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMix_vMixer, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMix_vMixer"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


    /* <---------------- liquid mixer ----------------> */


    const facMix_tankMixer = extend(GenericCrafter, "fac-mix-tank-mixer", {
      rcFi: require("reind/rc/rc_facMix_tankMixer"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMix_tankMixer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMix_tankMixer, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMix_tankMixer"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facMix_tankMixer = facMix_tankMixer;


  // End


  // Part: fac-proc


    /* <---------------- biotic ----------------> */


    const facProc_shredder = extend(GenericCrafter, "fac-proc-shredder", {
      rcFi: require("reind/rc/rc_facProc_shredder"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facProc_shredder.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_shredder, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facProc_shredder"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facProc_shredder = facProc_shredder;


    const facProc_charcoalRodMaker_m = extend(GenericCrafter, "fac-proc-charcoal-rod-maker-m", {
      rcFi: require("reind/rc/rc_facProc_charcoalRodMaker_m"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facProc_charcoalRodMaker_m.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_charcoalRodMaker_m, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facProc_charcoalRodMaker_m"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


    /* <---------------- misc ----------------> */


    const facProc_brickPress = extend(GenericCrafter, "fac-proc-brick-press", {
      rcFi: require("reind/rc/rc_facProc_brickPress"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facProc_brickPress.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_brickPress, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facProc_brickPress"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


  // End


  // Part: fac-rmv


    /* <---------------- grain dryer ----------------> */


    const facRmv_hotAirDryer = extend(GenericCrafter, "fac-rmv-hot-air-dryer", {
      rcFi: require("reind/rc/rc_facRmv_hotAirDryer"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facRmv_hotAirDryer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facRmv_hotAirDryer, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facRmv_hotAirDryer"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


    /* <---------------- auxiliary ----------------> */


    const facSep_highPressureCycloneSeparator = extend(GenericCrafter, "fac-sep-high-pressure-cyclone-separator", {
      rcFi: require("reind/rc/rc_facSep_highPressureCycloneSeparator"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facSep_highPressureCycloneSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_highPressureCycloneSeparator, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facSep_highPressureCycloneSeparator"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facSep_highPressureCycloneSeparator = facSep_highPressureCycloneSeparator;


    const facSep_largeVibrationScreen = extend(GenericCrafter, "fac-sep-large-vibration-screen", {
      rcFi: require("reind/rc/rc_facSep_largeVibrationScreen"),
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facSep_largeVibrationScreen.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_largeVibrationScreen, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facSep_largeVibrationScreen"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facSep_largeVibrationScreen = facSep_largeVibrationScreen;


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
        TEMPLATE.setStats(this);
        frag_faci.setStats_magnetic(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
      // Specific
      drawPlace(tx, ty, rotation, valid) {
        this.super$drawPlace(tx, ty, rotation, valid);
        frag_faci.drawPlace_magnetic(this, tx, ty, rotation, valid);
      },
    });
    facSep_dryMagneticSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_dryMagneticSeparator, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facSep_dryMagneticSeparator"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      // Specific
      updateTile() {
        TEMPLATE.updateTile(this);
        frag_faci.updateTile_magnetic(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      // Specific
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
        frag_faci.drawSelect_magnetic(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facSep_mineralJig_m.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_mineralJig_m, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facSep_mineralJig_m"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


    /* <---------------- special ----------------> */


    const facMisc_mechanicalCrank = extend(GenericCrafter, "fac-misc-mechanical-crank", {
      rcFi: require("reind/rc/rc_facMisc_mechanicalCrank"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMisc_mechanicalCrank.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_mechanicalCrank, {
      tag: "<manual>", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMisc_mechanicalCrank"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facMisc_mechanicalCrank = facMisc_mechanicalCrank;


    /* <---------------- inlet ----------------> */


    // NOTE: Keep this on top!
    const facMisc_genericInlet = extend(GenericCrafter, "fac-misc-generic-inlet", {
      rcFi: require("reind/rc/rc_facMisc_genericInlet"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMisc_genericInlet.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_genericInlet, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMisc_genericInlet"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMisc_fuelInlet.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_fuelInlet, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMisc_fuelInlet"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    facMisc_coreCrafter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_coreCrafter, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMisc_coreCrafter"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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


    const facMisc_manualCrafter = extend(GenericCrafter, "fac-misc-manual-crafter", {
      rcFi: require("reind/rc/rc_facMisc_manualCrafter"),
      // Specific
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
        frag_faci.setStats_terrain(this, "sand", "disable");
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
      // Specific
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!frag_faci.canPlaceOn_terrain(this, "sand", "disable", tile, team, rotation)) return false;
        return true;
      },
    });
    facMisc_manualCrafter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_manualCrafter, {
      tag: "<manual>", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_facMisc_manualCrafter"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.facMisc_manualCrafter = facMisc_manualCrafter;


  // End


  // Part: ilfac-misc


    /* <---------------- special ----------------> */


    const ilfacMisc_oreDictionaryConverter = extend(GenericCrafter, "ilfac-misc-ore-dictionary-converter", {
      rcFi: require("reind/rc/rc_ilfacMisc_oreDictionaryConverter"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    ilfacMisc_oreDictionaryConverter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, ilfacMisc_oreDictionaryConverter, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_ilfacMisc_oreDictionaryConverter"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
    exports.ilfacMisc_oreDictionaryConverter = ilfacMisc_oreDictionaryConverter;


  // End


  // Part: ileff-misc


    /* <---------------- trading ----------------> */


    const ileffMisc_bitBank = extend(GenericCrafter, "ileff-misc-bit-bank", {
      rcFi: require("reind/rc/rc_ileffMisc_bitBank"),
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      outputsItems() {
        return TEMPLATE.outputsItems(this);
      },
      consumesLiquid(liquid) {
        return TEMPLATE.consumesLiquid(this, liquid);
      },
    });
    ileffMisc_bitBank.buildType = () => extend(GenericCrafter.GenericCrafterBuild, ileffMisc_bitBank, {
      tag: "", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_ileffMisc_bitBank"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, rcTimeScale: 1.0,
      ci: new Seq(), bi: new Seq(), opt: new Seq(),
      co: new Seq(), bo: new Seq(), fo: new Seq(),
      tmpEffc: 0.0, progInc: 0.0, progInc1: 0.0, canAdd: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_rc;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      acceptItem(source, item) {
        if(!TEMPLATE.acceptItem(this, source, item)) return false;
        return true;
      },
      acceptLiquid(source, liquid) {
        if(!TEMPLATE.acceptLiquid(this, source, liquid)) return false;
        return true;
      },
      shouldConsume() {
        if(!TEMPLATE.shouldConsume(this)) return false;
        return true;
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      drawStatus() {
        TEMPLATE.drawStatus(this);
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
  Log.info("REIND: ct_blk_recipeFactory.js loaded.");
});
