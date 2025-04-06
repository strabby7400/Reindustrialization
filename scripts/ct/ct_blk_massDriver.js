/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_massDriver");

    const frag_faci = require("reind/frag/frag_faci");
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
      // Specific
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
        frag_faci.setStats_magnetic(this);
      },
      init() {
        this.super$init();
        TEMPLATE.init(this);
      },
      // Specific
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
        frag_faci.drawPlace_magnetic(this, x, y, rotation, valid);
      },
    });
    disMdr_standardMassDriver.buildType = () => extend(MassDriver.MassDriverBuild, disMdr_standardMassDriver, {
      needCheck: true,
      impactRad: 40.0,
      // Specific
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
        frag_faci.updateTile_magnetic(this);
      },
      // Specific
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
        frag_faci.drawSelect_magnetic(this);
      },
    });
    exports.disMdr_standardMassDriver = disMdr_standardMassDriver;
  // End



Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_massDriver.js loaded.");
});
