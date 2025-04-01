/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_fluidUnloader");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: bliq-aux
    const bliqAux_fluidUnloader = extend(GenericCrafter, "bliq-aux-fluid-unloader", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    bliqAux_fluidUnloader.buildType = () => extend(GenericCrafter.GenericCrafterBuild, bliqAux_fluidUnloader, {
      id_sel: mdl_content._config(bliqAux_fluidUnloader, -1),
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        this.super$buildConfiguration(table);
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.id_sel;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      moveLiquid(next, liquid) {
        return TEMPLATE.moveLiquid(this, next, liquid);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      drawSelect() {
        this.super$drawSelect();
        TEMPLATE.drawSelect(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.f(this.id_sel);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.id_sel = read.f();
      },
    });
    exports.bliqAux_fluidUnloader = bliqAux_fluidUnloader;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_fluidUnloader.js loaded.");
});
