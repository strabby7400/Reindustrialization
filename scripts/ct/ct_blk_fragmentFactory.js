/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_fragmentFactory = require("reind/blk/blk_fragmentFactory");
  // End


  // Part: Accessor
    const accB_down = function(b, mode, val) {
      if(val === undefined) val = 0;

      if(mode == "r") return b.down;
      if(mode == "w") b.down = val;
    };
    exports.accB_down = accB_down;
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
        blk_fragmentFactory.setStats(this);
      },
    });
    facProc_charcoalRodMaker_r1.buildType = () => extend(GenericCrafter.GenericCrafterBuild, facProc_charcoalRodMaker_r1, {
      down: false,
      updateTile() {
        blk_fragmentFactory.updateTile(this);
        if(this.down) return;
        this.super$updateTile();
      },
      status() {
        if(this.down) return BlockStatus.noInput;
        return this.super$status();
      },
    });
    exports.facProc_charcoalRodMaker_r1 = facProc_charcoalRodMaker_r1;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_fragmentFactory.js loaded.");
});
