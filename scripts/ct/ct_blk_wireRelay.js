/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_wireRelay");
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
    });
    powWire_copperWireRelay.buildType = () => extend(BeamNode.BeamNodeBuild, powWire_copperWireRelay, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    exports.powWire_copperWireRelay = powWire_copperWireRelay;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_wireRelay.js loaded.");
});
