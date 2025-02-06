/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_wireRelay = require("reind/blk/blk_wireRelay");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-wire[relay]
    const powWire_copperWireRelay = extend(BeamNode, "pow-wire-copper-wire-relay", {
      setStats() {
        this.super$setStats();
        blk_wireRelay.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!blk_wireRelay.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
    });
    powWire_copperWireRelay.buildType = () => extend(BeamNode.BeamNodeBuild, powWire_copperWireRelay, {
      updateTile() {
        this.super$updateTile();
        blk_wireRelay.updateTile(this);
      },
    });
    blk_wireRelay.setup(powWire_copperWireRelay, 25.0 / 60.0);
    exports.powWire_copperWireRelay = powWire_copperWireRelay;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_wireRelay.js loaded.");
});
