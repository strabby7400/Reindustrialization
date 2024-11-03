// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_tree = require("db/db_tree");
  // End


  // Start: Tree Layer
    function getLayer_tree(obj) {
      var z = Layer.power + 1;
      var list = db_tree.treeLayer;
      for(let i = 0; i < list.size - 1; i++) {
        var target = Vars.content.block(list.get(i));
        if(target != null && target == obj) {
          z = list.get(i + 1);
        };
      };
      return z;
    };


    function drawBase_tree(obj, tile) {
      var z = getLayer_tree(obj);
      var x = tile.worldx();
      var y = tile.worldy();
      var rot = Mathf.randomSeed(tile.pos(), 0, 4) * 90 + Mathf.sin(Time.time + x, 50.0, 0.5) + Mathf.sin(Time.time - y, 65.0, 0.9) + Mathf.sin(Time.time + y - x, 85.0, 0.9);
      var w = obj.region.width * obj.region.scl();
      var h = obj.region.height * obj.region.scl();
      var scl = 30.0;
      var mag = 0.2;

      // Draw Shadow
      var sha = obj.customShadowRegion;
      if(sha.found()) {
        Draw.z(Layer.power - 1);
        Draw.rect(sha, tile.worldx() + obj.shadowOffset, tile.worldy() + obj.shadowOffset, rot);
      };

      // Draw Region
      var reg = obj.region;
      Draw.z(z);
      Draw.rectv(reg, x, y, w, h, rot, vec => vec.add(
        Mathf.sin(vec.y * 3 + Time.time, scl, mag) + Mathf.sin(vec.x * 3 - Time.time, 70, 0.8),
        Mathf.cos(vec.x * 3 + Time.time + 8, scl + 6, mag * 1.1) + Mathf.sin(vec.y * 3 - Time.time, 50, 0.2),
      ));
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Region
    const propTree_algasus = extend(TreeBlock, "prop-tree-algasus", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_algasus = propTree_algasus;


    const propTree_brownSnake = extend(TreeBlock, "prop-tree-brown-snake", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_brownSnake = propTree_brownSnake;


    const propTree_cyanofall = extend(TreeBlock, "prop-tree-cyanofall", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_cyanofall = propTree_cyanofall;


    const propTree_depthSeeker = extend(TreeBlock, "prop-tree-depth-seeker", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_depthSeeker = propTree_depthSeeker;


    const propTree_duneShield = extend(TreeBlock, "prop-tree-dune-shield", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_duneShield = propTree_duneShield;


    const propTree_shell = extend(TreeBlock, "prop-tree-shell", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_shell = propTree_shell;


    const propTree_umbrella = extend(TreeBlock, "prop-tree-umbrella", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_umbrella = propTree_umbrella;


    const propTree_zenith = extend(TreeBlock, "prop-tree-zenith", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_zenith = propTree_zenith;


    const propTree_cliffside = extend(TreeBlock, "prop-tree-cliffside", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_cliffside = propTree_cliffside;


    const propTree_greenScale = extend(TreeBlock, "prop-tree-green-scale", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_greenScale = propTree_greenScale;


    const propTree_aerthCyst = extend(TreeBlock, "prop-tree-aerth-cyst", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_aerthCyst = propTree_aerthCyst;


    const propTree_marshCloud = extend(TreeBlock, "prop-tree-marsh-cloud", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_marshCloud = propTree_marshCloud;


    const propTree_salad = extend(TreeBlock, "prop-tree-salad", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTree_salad = propTree_salad;


    const propTreeMushroom_blueSpark = extend(TreeBlock, "prop-tree-mushroom-blue-spark", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTreeMushroom_blueSpark = propTreeMushroom_blueSpark;


    const propTreeMushroom_worm = extend(TreeBlock, "prop-tree-mushroom-worm", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTreeMushroom_worm = propTreeMushroom_worm;


    const propTreeMushroom_aquaticNightmare = extend(TreeBlock, "prop-tree-mushroom-aquatic-nightmare", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTreeMushroom_aquaticNightmare = propTreeMushroom_aquaticNightmare;


    const propTreeMushroom_parasiticAntenna = extend(TreeBlock, "prop-tree-mushroom-parasitic-antenna", {
      // Override
      drawBase(tile) {
        drawBase_tree(this, tile);
      },
    });
    exports.propTreeMushroom_parasiticAntenna = propTreeMushroom_parasiticAntenna;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_tree.js loaded.");
});
