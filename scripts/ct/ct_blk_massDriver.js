/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_massDriver = require("reind/blk/blk_massDriver");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: dis-mdr
    const disMdr_localMassDriver = extend(MassDriver, "dis-mdr-local-mass-driver", {
      setStats() {
        this.super$setStats();
        blk_massDriver.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_massDriver.drawPlace(this, x, y, rotation, valid);
      },
    });
    disMdr_localMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_localMassDriver, {
      updateTile() {
        this.super$updateTile();
        blk_massDriver.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_massDriver.drawSelect(this);
      },
    });
    blk_massDriver.setup(disMdr_localMassDriver);
    exports.disMdr_localMassDriver = disMdr_localMassDriver;


    const disMdr_standardMassDriver = extend(MassDriver, "dis-mdr-standard-mass-driver", {
      setStats() {
        this.super$setStats();
        blk_massDriver.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_massDriver.drawPlace(this, x, y, rotation, valid);
      },
    });
    disMdr_standardMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_standardMassDriver, {
      updateTile() {
        this.super$updateTile();
        blk_massDriver.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_massDriver.drawSelect(this);
      },
    });
    blk_massDriver.setup(disMdr_standardMassDriver);
    exports.disMdr_standardMassDriver = disMdr_standardMassDriver;
  // End



Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_massDriver.js loaded.");
});
