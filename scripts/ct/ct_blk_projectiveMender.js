/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_projectiveMender = require("reind/blk/blk_projectiveMender");
  // End


  // Part: Accessor
    const accB_down = function(b, mode, val) {
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


  // Part: def-proj
    const defProj_basicRepairProjector = extend(RegenProjector, "def-proj-basic-repair-projector", {
      setStats() {
        this.super$setStats();
        blk_projectiveMender.setStats(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_projectiveMender.drawPlace(this, x, y, rotation, valid);
      },
    });
    defProj_basicRepairProjector.buildType = () => extend(RegenProjector.RegenProjectorBuild, defProj_basicRepairProjector, {
      down: true,
      updateTile() {
        this.super$updateTile();
        blk_projectiveMender.updateTile(this);
      },
      shouldConsume() {
        return this.anyTargets || !this.down;
      },
      draw() {
        this.super$draw();
        blk_projectiveMender.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_projectiveMender.drawSelect(this);
      },
    });
    exports.defProj_basicRepairProjector = defProj_basicRepairProjector;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_projectiveMender.js loaded.");
});
