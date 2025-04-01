/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_crop");

    const frag_faci = require("reind/frag/frag_faci");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: min-crop


    /* <---------------- fungi ----------------> */


    const minCrop_aerthSmallShiitake = extend(Wall, "min-crop-aerth-small-shiitake", {
      ter: "dirt",
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    minCrop_aerthSmallShiitake.buildType = () => extend(Wall.WallBuild, minCrop_aerthSmallShiitake, {
      needCheck: true,
      growTime: 0.0, growStages: 1, cropYield: new Seq(), stageScr: new Seq(),
      growProg: 0.0, growStage: 0, growEffc: 0.0,
      timerCall: new Interval(1),
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
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.growProg);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.growProg = read.f();
      },
    });
    exports.minCrop_aerthSmallShiitake = minCrop_aerthSmallShiitake;


    /* <---------------- crop ----------------> */


    const minCrop_inkCorn = extend(Wall, "min-crop-ink-corn", {
      ter: "dirt",
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    minCrop_inkCorn.buildType = () => extend(Wall.WallBuild, minCrop_inkCorn, {
      needCheck: true,
      growTime: 0.0, growStages: 1, cropYield: new Seq(), stageScr: new Seq(),
      growProg: 0.0, growStage: 0, growEffc: 0.0,
      timerCall: new Interval(1),
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
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.growProg);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.growProg = read.f();
      },
    });
    exports.minCrop_inkCorn = minCrop_inkCorn;


    /* <---------------- tree ----------------> */



    /* <---------------- very specific zone ----------------> */


    const minCrop_thoriumReactorMine = extend(Wall, "min-crop-thorium-reactor-mine", {
      ter: "dirt",
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    minCrop_thoriumReactorMine.buildType = () => extend(Wall.WallBuild, minCrop_thoriumReactorMine, {
      needCheck: true,
      growTime: 0.0, growStages: 1, cropYield: new Seq(), stageScr: new Seq(),
      growProg: 0.0, growStage: 0, growEffc: 0.0,
      timerCall: new Interval(1),
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
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.growProg);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.growProg = read.f();
      },
    });
    exports.minCrop_thoriumReactorMine = minCrop_thoriumReactorMine;


  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_crop.js loaded.");
});
