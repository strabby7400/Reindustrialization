/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_nonBuildZone = require("reind/env/env_nonBuildZone");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: map-misc
    const mapMisc_nonBuildZone = extend(Floor, "map-misc-non-build-zone", {
      setStats() {
        this.super$setStats();
        env_nonBuildZone.setStats(this);
      },
    });
    exports.mapMisc_nonBuildZone = mapMisc_nonBuildZone;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_env_nonBuildZone.js loaded.");
});
