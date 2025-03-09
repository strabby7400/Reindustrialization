/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_liquidTurret = require("reind/blk/blk_liquidTurret");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: def-tur
    const defTur_extinguisherTurret = extend(LiquidTurret, "def-tur-extinguisher-turret", {
      setStats() {
        this.super$setStats();
        blk_liquidTurret.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!blk_liquidTurret.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_liquidTurret.drawPlace(this, x, y, rotation, valid);
      },
    });
    defTur_extinguisherTurret.buildType = () => extend(LiquidTurret.LiquidTurretBuild, defTur_extinguisherTurret, {
      updateTile() {
        this.super$updateTile();
        blk_liquidTurret.updateTile(this);
      },
      hasAmmo() {
        if(!this.super$hasAmmo()) return false;
        if(!blk_liquidTurret.hasAmmo(this)) return false;

        return true;
      },
      status() {
        return blk_liquidTurret.status(this);
      },
      drawSelect() {
        this.super$drawSelect();
        blk_liquidTurret.drawSelect(this);
      },
    });
    exports.defTur_extinguisherTurret = defTur_extinguisherTurret;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_liquidTurret.js loaded.");
});
