/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_wireNode = require("reind/blk/blk_wireNode");
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
        blk_wireNode.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && blk_wireNode.canPlaceOn(this, tile, team, rotation);
      },
      // Override
      drawPlace(x, y, rotation, valid) {
        blk_wireNode.drawPlace(this, x, y, rotation, valid);
      },
    });
    powWire_copperWireNode.buildType = () => extend(PowerNode.PowerNodeBuild, powWire_copperWireNode, {
      updateTile() {
        this.super$updateTile();
        blk_wireNode.updateTile(this);
      },
    });
    blk_wireNode.setup(powWire_copperWireNode, 50.0 / 60.0);
    exports.powWire_copperWireNode = powWire_copperWireNode;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_wireNode.js loaded.");
});
