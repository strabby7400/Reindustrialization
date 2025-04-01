/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/sta/sta_file");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: sta-file
    const staFile_aerth_01a = extend(StatusEffect, "sta-file-aerth-01a", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staFile_aerth_01a = staFile_aerth_01a;


    const staFile_aerth_01b = extend(StatusEffect, "sta-file-aerth-01b", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
      update(unit, time) {
        this.super$update(unit, time);
        TEMPLATE.update(this, unit, time);
      },
    });
    exports.staFile_aerth_01b = staFile_aerth_01b;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_sta_file.js loaded.");
});
