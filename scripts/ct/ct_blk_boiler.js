/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_boiler");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-boil
    const powBoil_steamBoiler = extend(GenericCrafter, "pow-boil-steam-boiler", {
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      setBars() {
        this.super$setBars();
        TEMPLATE.setBars(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    powBoil_steamBoiler.buildType = () => extend(GenericCrafter.GenericCrafterBuild, powBoil_steamBoiler, {
      alertReg: null,
      needCheck: true,
      r: 5,
      dryHeated: false, instab: 0.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      displayBars(table) {
        this.super$displayBars(table);
        TEMPLATE.displayBars(this, table);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      onDestroyed() {
        this.super$onDestroyed();
        TEMPLATE.onDestroyed(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.bool(this.dryHeated);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.dryHeated = read.bool();
      },
    });
    exports.powBoil_steamBoiler = powBoil_steamBoiler;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_boiler.js loaded.");
});
