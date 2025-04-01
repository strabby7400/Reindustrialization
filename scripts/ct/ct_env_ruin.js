/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_ruin");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: map-ruin
    const mapRuin_ruinWall_1x = extend(Wall, "map-ruin-ruin-wall-1x", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    mapRuin_ruinWall_1x.buildType = () => extend(Wall.WallBuild, mapRuin_ruinWall_1x, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      canPickup() {
        return false;
      },
    });
    exports.mapRuin_ruinWall_1x = mapRuin_ruinWall_1x;


    const mapRuin_ruinWall_2x = extend(Wall, "map-ruin-ruin-wall-2x", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    mapRuin_ruinWall_2x.buildType = () => extend(Wall.WallBuild, mapRuin_ruinWall_2x, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      canPickup() {
        return false;
      },
    });
    exports.mapRuin_ruinWall_2x = mapRuin_ruinWall_2x;


    const mapRuin_ruinWall_3x = extend(Wall, "map-ruin-ruin-wall-3x", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    mapRuin_ruinWall_3x.buildType = () => extend(Wall.WallBuild, mapRuin_ruinWall_3x, {
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      canPickup() {
        return false;
      },
    });
    exports.mapRuin_ruinWall_3x = mapRuin_ruinWall_3x;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_ruin.js loaded.");
});
