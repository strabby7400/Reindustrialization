// Checked on 10-12-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_block = require("db/db_block");
  // End


  // Start: Manual Generator
    function modifyStats_manualGenerator(obj, param) {
      obj.stats.add(Stat.range, param, StatUnit.blocks);
    };


    Events.run(ClientLoadEvent, () => {
      const list_manualGenerator = db_block.manualGenerator;
      for(let i = 0; i < list_manualGenerator.size - 1; i++) {
        if(typeof list_manualGenerator.get(i) == "string") {
          var target = Vars.content.block(list_manualGenerator.get(i));
          if(target != null) {
            modifyStats_manualGenerator(target,list_manualGenerator.get(i + 1));
          };
        };
      };
    });


    function sumAttribute_manualGenerator(obj, tx, ty) {
      var px;
      var py;
      var dsqr = 99999.0;
      var result;
      for(let i = 0; i < Groups.player.size(); i++) {
        var p = Groups.player.index(i);
        var pu = p.unit();
        if(pu != null && pu.canBuild()) {
          var px_temp = pu.tileX();
          var py_temp = pu.tileY();
          var dsqr_temp = Math.pow(px_temp - tx, 2) + Math.pow(py_temp - ty, 2);
          if(dsqr_temp < dsqr) {
            dsqr = dsqr_temp;
            px = px_temp;
            py = py_temp;
          };
        };
      };
      if(px != null && py != null) {
        var list = db_block.manualGenerator;
        var radius = 8.0;
        for(let i = 0; i < list.size - 1; i++) {
          if(obj.name == list.get(i)) {
            radius = list.get(i + 1);
          };
        };
        result = Math.max(1.0 - Math.pow(dsqr, 0.5) / radius, 0.0);
      } else {
        result = 0.0;
      };
      return result;
    };


    function updateTile_manualGenerator(obj) {
      if(Mathf.chance(0.9)) return;
      obj.sum = obj.block.sumAttribute(obj.block.attribute, obj.tile.x, obj.tile.y);
    };


    function draw_manualGenerator(obj) {
      var x = obj.tile.x * Vars.tilesize;
      var y = obj.tile.y * Vars.tilesize;
      var px;
      var py;
      var dsqr = 99999.0;
      var target;
      for(let i = 0; i < Groups.player.size(); i++) {
        var p = Groups.player.index(i);
        var pu = p.unit();
        if(pu != null && pu.canBuild()) {
          var px_temp = pu.x;
          var py_temp = pu.y;
          var dsqr_temp = Math.pow(px_temp - x, 2) + Math.pow(py_temp - y, 2);
          if(dsqr_temp < dsqr) {
            dsqr = dsqr_temp;
            px = px_temp;
            py = py_temp;
            target = p;
          };
        };
      };
      if(px != null && py != null && target != null) {
        var list = db_block.manualGenerator;
        var radius = 8.0;
        for(let i = 0; i < list.size - 1; i++) {
          if(obj.name == list.get(i)) {
            radius = list.get(i + 1);
          };
        };
        if(dsqr <= Math.pow(radius * Vars.tilesize, 2)) {
          var alpha = 1 - dsqr / Math.pow(radius * Vars.tilesize, 2);
          if(!Vars.state.paused && Mathf.chance(Time.delta * 0.02 * alpha)) {
            var effect_playerEfficiency = extend(ParticleEffect, {
              region: "reind-efr-triangle",
              interp: Interp.pow2Out,
              lifetime: 90.0,
              particles: 3,
              colorFrom: target.team().color,
              colorTo:  target.team().color,
              length: 12.0,
              spin: 4.0,
              sizeFrom: 4.0,
              sizeTo: 0.0,
              sizeInterp: Interp.sine,
              strokeFrom: 1.0,
              strokeTo: 0.0,
              lenFrom: 4.0,
              lenTo: 2.0,
            });
            effect_playerEfficiency.at(px, py, 0.0);
          };
          Draw.color(target.team().color);
          Draw.alpha(alpha);
          Draw.z(Layer.power + 1);
          Lines.stroke(1.5);
          Lines.line(x, y, px, py);
          Draw.reset();
        };
      };
    };


    function drawSelect_manualGenerator(obj) {
      if(obj.block.displayEfficiency) {
        obj.block.drawPlaceText(Core.bundle.formatFloat("bar.efficiency", sumAttribute_manualGenerator(obj.block, obj.tile.x, obj.tile.y) * 100, 1), obj.tile.x, obj.tile.y, true);
      };
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function setStats_extra(obj) {

    };


    function updateTile_extra(obj) {
      updateTile_manualGenerator(obj);
    };
  // End


  // Start: Region
    const powGen_manualGenerator = extend(ThermalGenerator, "pow-gen-manual-generator", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
      // Override
      sumAttribute(attr, x, y) {
        return sumAttribute_manualGenerator(this, x, y);
      },
    });
    powGen_manualGenerator.buildType = () => extend(ThermalGenerator.ThermalGeneratorBuild, powGen_manualGenerator, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
      // Override
      draw() {
        this.super$draw();
        draw_manualGenerator(this);
      },
      // Override
      drawSelect() {
        this.super$drawSelect();
        drawSelect_manualGenerator(this);
      },
    });
    exports.powGen_manualGenerator = powGen_manualGenerator;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_manualGenerator.js loaded.");
});
