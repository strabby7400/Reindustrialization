/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericDrill = require("reind/blk/blk_genericDrill");

    const ct_blk_impactDrill = require("reind/ct/ct_blk_impactDrill");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(db_stat.boostedDrillSpeed);

      var rad = mdl_data.read_1n1v(db_block.impactRange, blk.name);
      if(rad != null) blk.stats.add(db_stat.impactRange, rad / Vars.tilesize, StatUnit.blocks);

      var depthMtp = mdl_data.read_1n1v(db_block.depthTierMultiplier, blk.name);
      if(depthMtp != null) blk.stats.add(db_stat.depthTierMultiplier, depthMtp);
    };


    function updateTileComp(b) {
      if(b.invertTime == 1.0) {
        var rad = mdl_data.read_1n1v(db_block.impactRange, b.block.name);
        if(rad != null) {
          var dmg = b.block.size * b.block.drillTime * 1.2;
          var dur = b.block.drillTime * 0.5;

          frag_attack.attack_impact(mdl_game.poser_1b(b), rad, dmg, dur);
        };
      };

      var down = ct_blk_impactDrill.accB_down(b, "r");
      if(down) b.progress = 0.0;

      if(Mathf.chance(0.02)) {
        var ov = b.tile.overlay();
        var b_sc_fi = null;
        if(ov == null || !ov.name.includes("reind-env-ore-depth-")) {
          down = false;
        } else {
          var b_sc = Vars.indexer.findTile(b.team, b.x, b.y, 999.0, ob => ob.block.name.includes("reind-min-scan-"));
          if(b_sc == null) {
            down = true;
          } else {
            var r_sc = mdl_data.read_1n1v(db_block.genericRange, b_sc.block.name);
            if(r_sc == null) {
              down = true;
            } else {
              var d = mdl_game.getDistance(mdl_game.poser_1b(b), mdl_game.poser_1b(b_sc));
              var d_cr = (b_sc.block.size / 2 + r_sc) * Vars.tilesize * 1.275;
              if(d > d_cr) {
                down = true;
              } else {
                down = false;
                b_sc_fi = b_sc;
              };
            };
          };
        };

        ct_blk_impactDrill.accB_down(b, "w", down);
        ct_blk_impactDrill.accB_b_sc(b, "w", b_sc_fi);
      };
    };


    function canMineComp(blk, t) {
      if(t.overlay() != null && t.overlay().name.includes("reind-env-ore-depth-")) {
        var itm = t.overlay().itemDrop;
        if(itm == blk.blockedItem) return false;

        var hardness = t.overlay().itemDrop.hardness;
        var tier_depth = blk.tier * mdl_data.read_1n1v(db_block.depthTierMultiplier, blk.name);
        if(hardness > tier_depth) return false;
      };

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var rad = mdl_data.read_1n1v(db_block.impactRange, blk.name);
      if(rad != null) mdl_draw.drawCirclePulse(mdl_game.poser_1t(Vars.world.tile(tx, ty), blk.offset), rad);
    };


    function drawSelectComp(b) {
      var rad = mdl_data.read_1n1v(db_block.impactRange, b.block.name);
      if(rad != null) mdl_draw.drawCirclePulse(mdl_game.poser_1b(b), rad);

      var ov = b.tile.overlay();
      if(ov != null && ov.name.includes("reind-env-ore-depth-")) {
        var b_sc = ct_blk_impactDrill.accB_b_sc(b, "r");
        if(b_sc == null) {
          mdl_draw.drawSelectText(b, false, Core.bundle.get("info.reind-info-no-ore-scanner.name"));
        } else {
          mdl_draw.drawBuildRectConnector(b, b_sc);
        };
      };
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(blk) {
      blk_genericDrill.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      blk_genericDrill.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const canMine = function(blk, t) {
      return canMineComp(blk, t);
    };
    exports.canMine = canMine;


    const drawPlace = function(blk, tx, ty, rot, valid) {
      drawPlaceComp(blk, tx, ty, rot,valid);
    };
    exports.drawPlace = drawPlace;


    const drawSelect = function(b) {
      drawSelectComp(b);
    };
    exports.drawSelect = drawSelect;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_impactDrill.js loaded.");
});
