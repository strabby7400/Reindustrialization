/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_boiler = require("reind/blk/blk_boiler");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Accessor
    const accB_dryHeated = function(b, mode, val) {
      if(mode == "r") return b.dryHeated;
      if(mode == "w") b.dryHeated = val;
    };
    exports.accB_dryHeated = accB_dryHeated;


    const accB_instab = function(b, mode, val) {
      if(mode == "r") return b.instab;
      if(mode == "w") b.instab = val;
    };
    exports.accB_instab = accB_instab;
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: pow-boil
    const powBoil_steamBoiler = extend(GenericCrafter, "pow-boil-steam-boiler", {
      // Specific
      icons: function() {
        return [Core.atlas.find(this.name + "-icon")];
      },
      setStats() {
        this.super$setStats();
        blk_boiler.setStats(this);
      },
      setBars() {
        this.super$setBars();
        blk_boiler.setBars(this);
      },
      drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        blk_boiler.drawPlace(this, x, y, rotation, valid);
      },
    });
    powBoil_steamBoiler.buildType = () => extend(GenericCrafter.GenericCrafterBuild, powBoil_steamBoiler, {
      alertReg: mdl_content.getRegion(powBoil_steamBoiler, "-alert"),
      dryHeated: false,
      instab: 0.0,
      updateTile() {
        this.super$updateTile();
        blk_boiler.updateTile(this);
      },
      // Specific
      draw() {
        this.super$draw();
        mdl_draw.drawFadeAlert(
          mdl_game.poser_1b(this),
          this.alertReg,
          this.instab,
        );
      },
      drawSelect() {
        this.super$drawSelect();
        blk_boiler.drawSelect(this);
      },
      onDestroyed() {
        this.super$onDestroyed();
        blk_boiler.onDestroyed(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.bool(this.dryHeated);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.dryHeated = read.bool();
      },
    });
    exports.powBoil_steamBoiler = powBoil_steamBoiler;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:ct_blk_boiler.js loaded.");
});
