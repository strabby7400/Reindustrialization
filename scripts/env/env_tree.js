/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_genericProp = require("reind/env/env_genericProp");

    const db_env = require("reind/db/db_env");
    const db_stat = require("reind/db/db_stat");

    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
  // End


  // Part: Component
    function setStatsComp(blk) {
      // Get type
      var tpVal = (blk.name.includes("reind-env-tree-fungi-")) ? Core.bundle.get("term.reind-term-fungi.name") : Core.bundle.get("term.reind-term-tree.name");
      blk.stats.add(db_stat.type, tpVal);
    };


    function drawBaseComp(blk, t) {
      /* NOTE: Tree layers are assigned in {db_env.treeLayers} */
      var x = t.worldx();
      var y = t.worldy();
      var z = mdl_database.read_1n1v(db_env.treeLayers, blk.name);
      if(z == null) return;
      var w = blk.region.width * blk.region.scl();
      var h = blk.region.height * blk.region.scl();
      var rot = Mathf.randomSeed(t.pos(), 0, 4) * 90.0 + Mathf.sin(Time.time + x, 50.0, 0.5) + Mathf.sin(Time.time - y, 65.0, 0.9) + Mathf.sin(Time.time + y - x, 85.0, 0.9);
      var scl = 60.0;
      var mag = 0.5;
      var wobScl = 1.5;

      var reg = blk.region;

      // Bush
      if(blk.name.includes("reind-env-tree-bush-")) {
        scl *= 0.5;
        mag *= 1.5;
        wobScl *= 0.7;
      };

      // Fungi
      if(blk.name.includes("reind-env-tree-fungi-")) {
        scl *= 3.0;
        mag *= 0.4;
        wobScl *= 0.3;
      };

      // Alpha change
      var a = 1.0;
      var t_p;
      if(Vars.player.unit() != null && !Vars.player.unit().flying && Vars.player.unit().type.groundLayer < 76.0) t_p = Vars.player.unit().tileOn();
      if(t_p != null) {
        var d = mdl_geometry.getDistance_2t(t, t_p);
        var d_cr = reg.width * 0.15;
        if(d <= d_cr) a = 0.37;
      };

      // Shadow
      /* NOTE: Custom shadow is required. */
      var sha = blk.customShadowRegion;
      if(sha.found()) {
        Draw.z(Layer.power - 1);
        Draw.alpha(a);
        Draw.rect(sha, x + blk.shadowOffset, y + blk.shadowOffset, rot);
      };

      // Region
      /* NOTE: Variants are not supported. */
      Draw.z(z);
      Draw.alpha(a);
      Draw.rectv(reg, x, y, w, h, rot, vec => vec.add(
        (Mathf.sin(vec.y * 3 + Time.time, scl, mag) + Mathf.sin(vec.x * 3 - Time.time, 70, 0.8)) * wobScl,
        (Mathf.cos(vec.x * 3 + Time.time + 8, scl + 6, mag * 1.1) + Mathf.sin(vec.y * 3 - Time.time, 50, 0.2)) * wobScl,
      ));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      env_genericProp.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const drawBase = function(blk, t) {
      drawBaseComp(blk, t);
    };
    exports.drawBase = drawBase;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:env_tree.js loaded.");
});
