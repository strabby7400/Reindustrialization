/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_cable = require("reind/blk/blk_cable");
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
        blk_cable.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && blk_cable.canPlaceOn(this, tile, team, rotation);
      },
    });
    powWire_copperCable.buildType = () => extend(Battery.BatteryBuild, powWire_copperCable, {
      updateTile() {
        this.super$updateTile();
        blk_cable.updateTile(this);
      },
    });
    blk_cable.setup(powWire_copperCable, 2.25 / 60.0);
    exports.powWire_copperCable = powWire_copperCable;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_cable.js loaded.");
});
