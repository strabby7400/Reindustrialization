/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/env/env_occupiedWall");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: map-wall
    const mapWall_occupiableBarricade = extend(Wall, "map-wall-occupiable-barricade", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    mapWall_occupiableBarricade.buildType = () => extend(Wall.WallBuild, mapWall_occupiableBarricade, {
      lastDamage: Team.derelict,
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      canPickup() {
        return false;
      },
      collision(other) {
        return TEMPLATE.collision(this, other);
      },
      onDestroyed() {
        TEMPLATE.onDestroyed(this);
      },
      afterDestroyed() {
        this.super$afterDestroyed();
        TEMPLATE.afterDestroyed(this);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
    });
    exports.mapWall_occupiableBarricade = mapWall_occupiableBarricade;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_env_occupiedWall.js loaded.");
});
