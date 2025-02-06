/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericFactory = require("reind/blk/blk_genericFactory");

    const frag_effect = require("reind/frag/frag_effect");
    const frag_facility = require("reind/frag/frag_facility");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-air
    const facAir_airCollector = extend(GenericCrafter, "fac-air-air-collector", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facAir_airCollector.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facAir_airCollector, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facAir_airCollector = facAir_airCollector;


    const facAir_airFilter = extend(GenericCrafter, "fac-air-air-filter", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facAir_airFilter.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facAir_airFilter, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facAir_airFilter = facAir_airFilter;


    const facAir_pistonPressurePump = extend(GenericCrafter, "fac-air-piston-pressure-pump", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
      // Specific
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        frag_facility.drawPlace_2side(this, Vars.world.tile(x, y), rotation);
      },
    });
    facAir_pistonPressurePump.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facAir_pistonPressurePump, {
      // Specific
      updateTile() {
        if(!frag_facility.isActive_2side(this)) return;
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
        frag_effect.updateTile_gasSideRelease(0.06, this, 0, 12.0, 10.0, 0.5, 5.0, false);
        frag_effect.updateTile_gasSideRelease(0.06, this, 2, 12.0, 10.0, 0.5, 5.0, true);
      },
      // Specific
      status() {
        if(!frag_facility.isActive_2side(this)) return BlockStatus.noInput;
        return this.super$status();
      },
      // Specific
      drawSelect() {
        this.super$drawSelect();
        frag_facility.drawSelect_2side(this);
      },
    });
    exports.facAir_pistonPressurePump = facAir_pistonPressurePump;
  // End


  // Part: fac-proc
    const facProc_sawmill = extend(GenericCrafter, "fac-proc-sawmill", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facProc_sawmill.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_sawmill, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facProc_sawmill = facProc_sawmill;
  // End


  // Part: fac-sep
    const facSep_cycloneSeparator = extend(GenericCrafter, "fac-sep-cyclone-separator", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facSep_cycloneSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_cycloneSeparator, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facSep_cycloneSeparator = facSep_cycloneSeparator;


    const facSep_vibrationScreen = extend(GenericCrafter, "fac-sep-vibration-screen", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facSep_vibrationScreen.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_vibrationScreen, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facSep_vibrationScreen = facSep_vibrationScreen;
  // End


  // Part: fac-misc
    const facMisc_basicChimney = extend(GenericCrafter, "fac-misc-basic-chimney", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facMisc_basicChimney.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_basicChimney, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facMisc_basicChimney = facMisc_basicChimney;


    const facMisc_motorPump = extend(GenericCrafter, "fac-misc-motor-pump", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    facMisc_motorPump.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facMisc_motorPump, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.facMisc_motorPump = facMisc_motorPump;
  // End


  // Part: ileff-misc
    const ileffMisc_idsEngine = extend(GenericCrafter, "ileff-misc-ids-engine", {
      setStats() {
        this.super$setStats();
        blk_genericFactory.setStats(this);
      },
    });
    ileffMisc_idsEngine.buildType = () => extend(GenericCrafter.GenericCrafterBuild, ileffMisc_idsEngine, {
      updateTile() {
        this.super$updateTile();
        blk_genericFactory.updateTile(this);
      },
    });
    exports.ileffMisc_idsEngine = ileffMisc_idsEngine;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_genericFactory.js loaded.");
});
