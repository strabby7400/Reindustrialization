/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/env/env_genericProp");

    const db_env = require("reind/db/db_env");
    const db_stat = require("reind/db/db_stat");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_text = require("reind/mdl/mdl_text");
  // End


  // Part: Setting
    var treeAlpha = 1.0;
    const set_treeAlpha = function(val) {
      treeAlpha = val;
    };
    exports.set_treeAlpha = set_treeAlpha;
  // End


  // Part: Component
    function setStatsComp(blk) {
      var tpVal = (blk.name.includes("reind-env-tree-fungi-")) ? mdl_text._term("fungi") : mdl_text._term("tree");
      blk.stats.add(db_stat.type, tpVal);
    };


    function drawBaseComp(blk, t) {
      if(treeAlpha < 0.0001) return;

      // NOTE: {treeLayer} is stored in {armor}, well that sucks.
      var z = blk.armor;
      var z_sha = z - 0.0005;

      var pos_sha = mdl_game._pos(t, blk.shadowOffset);
      var reg = blk.region;
      var ang = Mathf.randomSeed(t.pos(), 0, 4) * 90.0;

      var scl = 1.0;
      var mag = 1.0;
      var wobScl = 1.0;
      if(blk.name.includes("reind-env-tree-bush-")) {
        scl = 0.5;
        mag = 1.5;
        wobScl = 0.7;
      };
      if(blk.name.includes("reind-env-tree-fungi-")) {
        scl = 3.0;
        mag = 0.4;
        wobScl = 0.3;
      };

      var a = (Groups.player.size() > 1) ? 1.0 : treeAlpha;
      if(a < 0.0001) return;
      if(mdl_content.isCoverable(Vars.player.unit())) {
        var pos_pl = mdl_game._pos("player");
        if(pos_pl != null) {
          var d = mdl_game._dst(t, pos_pl);
          if(d < reg.width * 0.15) a *= 0.37;
        };
      };

      mdl_draw.drawBlurredShadow(pos_sha, reg, ang, a, 1.05, Color.white, z_sha);
      mdl_draw.drawWobbleRegion(t, reg, ang, a, 1.0, Color.white, scl, mag, wobScl, wobScl, z);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const editorIcon = function(blk) {
      return editorIconComp(blk);
    };
    exports.editorIcon = editorIcon;


    const drawBase = function(blk, t) {
      drawBaseComp(blk, t);
    };
    exports.drawBase = drawBase;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: env_tree.js loaded.");
});
