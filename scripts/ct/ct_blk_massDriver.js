/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_massDriver");
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
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    disMdr_localMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_localMassDriver, {
      needCheck: true,
      impactRad: 40.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.disMdr_localMassDriver = disMdr_localMassDriver;


    const disMdr_standardMassDriver = extend(MassDriver, "dis-mdr-standard-mass-driver", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    disMdr_standardMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_standardMassDriver, {
      needCheck: true,
      impactRad: 40.0,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.disMdr_standardMassDriver = disMdr_standardMassDriver;
  // End



Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_massDriver.js loaded.");
});
