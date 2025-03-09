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


  // Part: def-wall[building]
    const defWall_temperedGlassWall = extend(Wall, "def-wall-tempered-glass-wall", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_temperedGlassWall.buildType = () => extend(Wall.WallBuild, defWall_temperedGlassWall, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_temperedGlassWall = defWall_temperedGlassWall;


    /* brick */


    /* NOTE: Keep this on top! */
    const defWall_brickWallClay = extend(Wall, "def-wall-brick-wall-clay", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_brickWallClay.buildType = () => extend(Wall.WallBuild, defWall_brickWallClay, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_brickWallClay = defWall_brickWallClay;


    const defWall_brickWallCarbon = extend(Wall, "def-wall-brick-wall-carbon", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_brickWallCarbon.buildType = () => extend(Wall.WallBuild, defWall_brickWallCarbon, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_brickWallCarbon = defWall_brickWallCarbon;


    const defWall_brickWallHighAlumina = extend(Wall, "def-wall-brick-wall-high-alumina", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_brickWallHighAlumina.buildType = () => extend(Wall.WallBuild, defWall_brickWallHighAlumina, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_brickWallHighAlumina = defWall_brickWallHighAlumina;


    const defWall_brickWallMagnesia = extend(Wall, "def-wall-brick-wall-magnesia", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_brickWallMagnesia.buildType = () => extend(Wall.WallBuild, defWall_brickWallMagnesia, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_brickWallMagnesia = defWall_brickWallMagnesia;


    const defWall_brickWallMullite = extend(Wall, "def-wall-brick-wall-mullite", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_brickWallMullite.buildType = () => extend(Wall.WallBuild, defWall_brickWallMullite, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_brickWallMullite = defWall_brickWallMullite;


    const defWall_brickWallSilica = extend(Wall, "def-wall-brick-wall-silica", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_brickWallSilica.buildType = () => extend(Wall.WallBuild, defWall_brickWallSilica, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_brickWallSilica = defWall_brickWallSilica;


    /* plate */


    const defWall_plateWallCopper = extend(Wall, "def-wall-plate-wall-copper", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_plateWallCopper.buildType = () => extend(Wall.WallBuild, defWall_plateWallCopper, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_plateWallCopper = defWall_plateWallCopper;


    const defWall_plateWallSteel = extend(Wall, "def-wall-plate-wall-steel", {
      setStats() {
        this.super$setStats();
        blk_genericWall.setStats(this);
      },
    });
    defWall_plateWallSteel.buildType = () => extend(Wall.WallBuild, defWall_plateWallSteel, {
      updateTile() {
        this.super$updateTile();
        blk_genericWall.updateTile(this);
      },
    });
    exports.defWall_plateWallSteel = defWall_plateWallSteel;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_genericWall.js loaded.");
});
