/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const TEMPLATE = require("reind/blk/blk_scriptFilterGate");

    const mdl_content = require("reind/mdl/mdl_content");
  // End


/*
  ========================================
  Section: Region
  ========================================
*/


  // Part: dis-aux
    const disAux_wasteFilterGate = extend(Sorter, "dis-aux-waste-filter-gate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    disAux_wasteFilterGate.buildType = () => extend(Sorter.SorterBuild, disAux_wasteFilterGate, {
      inv: false,
      needCheck: true,
      invReg: null, changeEff: null,
      // Specific
      filterScr: function(itm) {return mdl_content.isWaste(itm)},
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.inv;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      getTileTarget(item, source, flip) {
        return TEMPLATE.getTileTarget(this, item, source, flip);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.bool(this.inv);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.inv = read.bool();
      },
    });
    exports.disAux_wasteFilterGate = disAux_wasteFilterGate;


    const disAux_intermediateFilterGate = extend(Sorter, "dis-aux-intermediate-filter-gate", {
      setStats() {
        this.super$setStats();
        TEMPLATE.setStats(this);
      },
    });
    disAux_intermediateFilterGate.buildType = () => extend(Sorter.SorterBuild, disAux_intermediateFilterGate, {
      inv: false,
      needCheck: true,
      invReg: null, changeEff: null,
      // Specific
      filterScr: function(itm) {return mdl_content.isIntermediate(itm)},
      updateTile() {
        this.super$updateTile();
        TEMPLATE.updateTile(this);
      },
      buildConfiguration(table) {
        TEMPLATE.buildConfiguration(this, table);
      },
      config() {
        return this.inv;
      },
      configured(builder, value) {
        TEMPLATE.configured(this, builder, value);
      },
      getTileTarget(item, source, flip) {
        return TEMPLATE.getTileTarget(this, item, source, flip);
      },
      draw() {
        this.super$draw();
        TEMPLATE.draw(this);
      },
      // RW
      write(write) {
        this.super$write(write);
        write.bool(this.inv);
      },
      // RW
      read(read, revision) {
        this.super$read(read, revision);
        this.inv = read.bool();
      },
    });
    exports.disAux_intermediateFilterGate = disAux_intermediateFilterGate;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: ct_blk_scriptFilterGate.js loaded.");
});
