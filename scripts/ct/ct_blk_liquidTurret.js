/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_liquidTurret");
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
        TEMPLATE.setStats(this);
      },
      canPlaceOn(tile, team, rotation) {
        if(!this.super$canPlaceOn(tile, team, rotation)) return false;
        if(!TEMPLATE.canPlaceOn(this, tile, team, rotation)) return false;
        return true;
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        TEMPLATE.drawPlace(this, x, y, rotation, valid);
      },
    });
    defTur_extinguisherTurret.buildType = () => extend(LiquidTurret.LiquidTurretBuild, defTur_extinguisherTurret, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      hasAmmo() {
        if(!this.super$hasAmmo()) return false;
        if(!TEMPLATE.hasAmmo(this)) return false;

        return true;
      },
      status() {
        return TEMPLATE.status(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
    });
    exports.defTur_extinguisherTurret = defTur_extinguisherTurret;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_liquidTurret.js loaded.");
});
