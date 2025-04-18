/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_wireNode");
    const TEMPLATE_A = require("reind/blk/blk_remoteWireNode");
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
      linkValid(tile, link) {
        if(!this.super$linkValid(tile, link, true)) return false;
        if(!TEMPLATE.linkValid(tile, link, true)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
      drawLaser(x1, y1, x2, y2, size1, size2) {
        TEMPLATE.drawLaser(this, x1, y1, x2, y2, size1, size2);
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


  // Part: pow-wire[remote node]
    const powWire_copperRemoteWireNode = extend(PowerNode, "pow-wire-copper-remote-wire-node", {
      setStats() {
        this.super$setStats();
        TEMPLATE_A.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE_A.init(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE_A.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      linkValid(tile, link) {
        if(!this.super$linkValid(tile, link, true)) return false;
        if(!TEMPLATE_A.linkValid(tile, link, true)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        TEMPLATE_A.drawPlace(this, x, y, rotation, valid);
      },
      drawLaser(x1, y1, x2, y2, size1, size2) {
        TEMPLATE_A.drawLaser(this, x1, y1, x2, y2, size1, size2);
      },
    });
    powWire_copperRemoteWireNode.buildType = () => extend(PowerNode.PowerNodeBuild, powWire_copperRemoteWireNode, {
      needCheck: true,
      r: 5,
      updateTile() {
        this.super$updateTile();
        TEMPLATE_A.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE_A.drawSelect(this);
      },
      drawConfigure() {
        this.super$drawConfigure();
        TEMPLATE_A.drawConfigure(this);
      },
      drawLaser(x1, y1, x2, y2, size1, size2) {
        TEMPLATE_A.drawLaser(this, x1, y1, x2, y2, size1, size2);
      },
    });
    exports.powWire_copperRemoteWireNode = powWire_copperRemoteWireNode;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_wireNode.js loaded.");
});
