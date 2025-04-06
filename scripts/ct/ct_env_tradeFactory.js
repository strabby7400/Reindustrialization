/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_tradeFactory");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: map-fac
    const mapFac_idsTradeDock_rimBuilder = extend(GenericCrafter, "map-fac-ids-trade-dock-rim-builder", {
      rcFi: require("reind/rc/rc_mapFac_idsTradeDock_rimBuilder"),
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
    mapFac_idsTradeDock_rimBuilder.buildType = () => extend(GenericCrafter.GenericCrafterBuild, mapFac_idsTradeDock_rimBuilder, {
      lastDamage: Team.derelict,
      tag: "<impact>", param: 0.0, param1: 0.0, param2: 0.0,
      rcFi: require("reind/rc/rc_mapFac_idsTradeDock_rimBuilder"),
      id_rc: 0,
      needCheck: true, modified: false, craftSound: null, timeScale: 1.0,
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
      canPickup() {
        return false;
      },
      collision(other) {
        return TEMPLATE.collision(this, other);
      },
      onDestroyed() {
        TEMPLATE.onDestroyed(this);
      },
      afterDestroyed() {
        this.super$afterDestroyed();
        TEMPLATE.afterDestroyed(this);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
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
    exports.mapFac_idsTradeDock_rimBuilder = mapFac_idsTradeDock_rimBuilder;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_tradeFactory.js loaded.");
});
