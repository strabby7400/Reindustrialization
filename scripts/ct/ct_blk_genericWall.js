/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericWall = require("reind/blk/blk_genericWall");

    const frag_facility = require("reind/frag/frag_facility");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: def-wall
    const defWall_woodenBarricade = extend(Wall, "def-wall-wooden-barricade", {
      // Specific
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
        frag_facility.setStats_flammable(this);
      },
    });
    defWall_woodenBarricade.buildType = () => extend(Wall.WallBuild, defWall_woodenBarricade, {
      // Specific
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
        frag_facility.updateTile_flammable(this);
      },
    });
    exports.defWall_woodenBarricade = defWall_woodenBarricade;


    const defWall_concreteBarricade = extend(Wall, "def-wall-concrete-barricade", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_concreteBarricade.buildType = () => extend(Wall.WallBuild, defWall_concreteBarricade, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_concreteBarricade = defWall_concreteBarricade;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_genericWall.js loaded.");
});
