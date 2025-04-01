/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_wireNode");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-wire[node]
    const powWire_copperWireNode = extend(PowerNode, "pow-wire-copper-wire-node", {
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
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    powWire_copperWireNode.buildType = () => extend(PowerNode.PowerNodeBuild, powWire_copperWireNode, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
    });
    exports.powWire_copperWireNode = powWire_copperWireNode;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_wireNode.js loaded.");
});
