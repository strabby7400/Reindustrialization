/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fragmentFactory");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: fac-proc
    const facProc_charcoalRodMaker_r1 = extend(GenericCrafter, "fac-proc-charcoal-rod-maker-r1", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    facProc_charcoalRodMaker_r1.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_charcoalRodMaker_r1, {
      down: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      status() {
        return TEMPLATE.status(this);
      },
    });
    exports.facProc_charcoalRodMaker_r1 = facProc_charcoalRodMaker_r1;
  // End


  // Part: fac-sep
    const facSep_mineralJig_r1 = extend(GenericCrafter, "fac-sep-mineral-jig-r1", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    facSep_mineralJig_r1.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facSep_mineralJig_r1, {
      down: false,
      timerEffc: new Interval(1),
      updateTile() {
        TEMPLATE.updateTile(this);
      },
      status() {
        return TEMPLATE.status(this);
      },
    });
    exports.facSep_mineralJig_r1 = facSep_mineralJig_r1;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fragmentFactory.js loaded.");
});
