/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_restrictionZone = require("reind/env/env_restrictionZone");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: map-misc
    const mapMisc_restrictionZone = extend(Floor, "map-misc-restriction-zone", {
      setStats() {
        this.super$setStats();
        env_restrictionZone.setStats(this);
      },
    });
    exports.mapMisc_restrictionZone = mapMisc_restrictionZone;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_restrictionZone.js loaded.");
});
