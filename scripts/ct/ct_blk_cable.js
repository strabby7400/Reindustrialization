/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_cable");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-wire[cable]
    const powWire_copperCable = extend(Battery, "pow-wire-copper-cable", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && TEMPLATE.canPlaceOn(this, tile, team, rotation);
      },
    });
    powWire_copperCable.buildType = () => extend(Battery.BatteryBuild, powWire_copperCable, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      unitOn(unit) {
        this.super$unitOn(unit);
        TEMPLATE.unitOn(this, unit);
      },
    });
    exports.powWire_copperCable = powWire_copperCable;


    /* very specific zone */


    const powWire_powerAlarm = extend(Battery, "pow-wire-power-alarm", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && TEMPLATE.canPlaceOn(this, tile, team, rotation);
      },
    });
    powWire_powerAlarm.buildType = () => extend(Battery.BatteryBuild, powWire_powerAlarm, {
      // Specific
      fadeReg: mdl_content._reg(powWire_powerAlarm, "-fade"),
      timerCall: new Interval(1), down: true,
      // Specific
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
        if(this.power.status < 0.96 && this.power.status > 0.01) {
          this.down = false;
          if(this.timerCall.get(60.0)) mdl_effect.playAt(this, "se-spec-alert");
        } else {
          this.down = true;
        };
      },
      // Specific
      unitOn(unit) {
        this.super$unitOn(unit);
      },
      // Specific
      draw() {
        this.super$draw();
        if(!this.down) mdl_draw.drawFadeRegion(this, this.fadeReg);
      },
    });
    exports.powWire_powerAlarm = powWire_powerAlarm;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_cable.js loaded.");
});
