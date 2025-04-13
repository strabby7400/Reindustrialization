/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDrill");

    const frag_attack = require("reind/frag/frag_attack");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_block = require("reind/db/db_block");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Setting
    var efficiencyInterval = 90.0;
    const set_efficiencyInterval = function(val) {
      efficiencyInterval = val;
    };
    exports.set_efficiencyInterval = set_efficiencyInterval;
  // End


  // Part: Component
    function setStatsComp(blk) {
      blk.stats.remove(db_stat.boostedDrillSpeed);

      var impactRad = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], blk.name, 40.0);
      blk.stats.add(db_stat.impactRange, impactRad / Vars.tilesize, StatUnit.blocks);

      var depthMtp = mdl_data.read_1n1v(db_block.db["param"]["depthTierMultiplier"], blk.name, 1.0);
      blk.stats.add(db_stat.depthTierMultiplier, depthMtp);
    };


    function updateTileComp(b) {
      var size = b.block.size;
      var time = b.block.drillTime;

      // Initialize
      if(b.needCheck) {
        b.impactRad = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], b.block.name, 40.0);

        b.needCheck = false;
      };

      // Create Impact Wave
      if(b.invertTime > 0.9999) {
        frag_attack.atk_impact(b, b.impactRad, frag_attack._impactDmg(size, time), frag_attack._impactDur(time));

        mdl_effect.dustAt_ldm(b, frag_attack._impactDustRad(size), Math.pow(size, 2));
      };

      if(b.down) b.progress = 0.0;

      if(b.timerEffc.get(efficiencyInterval)) {
        var down = false;
        var b_sc_fi = null;

        if(!mdl_content.isDepthOre(b.tile.overlay())) {
          down = false;
        } else {
          var b_sc = mdl_game._oreScanner(b, 9999.0, b.team);

          if(b_sc == null) {
            down = true;
          } else {
            down = false;
            b_sc_fi = b_sc;
          };
        };

        b.down = down;
        b.b_sc = b_sc_fi;
      };
    };


    function canMineComp(blk, t) {
      var ov = t.overlay();
      if(mdl_content.isDepthOre(ov)) {
        var itm = ov.itemDrop;
        if(itm == blk.blockedItem) return false;

        var hardness = itm.hardness;
        var tier_depth = blk.tier * mdl_data.read_1n1v(db_block.db["param"]["depthTierMultiplier"], blk.name, 1.0);
        if(hardness > tier_depth) return false;
      };

      return true;
    };


    function drawPlaceComp(blk, tx, ty, rot, valid) {
      var impactRad = mdl_data.read_1n1v(db_block.db["param"]["range"]["impact"], blk.name, 40.0);
      mdl_draw.drawCirclePulse(mdl_game._pos(Vars.world.tile(tx, ty), blk.offset, true), impactRad);
    };


    function drawSelectComp(b) {
      mdl_draw.drawCirclePulse(b, b.impactRad);

      var ov = b.tile.overlay();
      if(mdl_content.isDepthOre(ov)) {
        if(b.b_sc == null) {
          mdl_draw.drawSelectText(b, false, mdl_text._info("no-ore-scanner"));
        } else {
          mdl_draw.drawBuildRectConnector(b, b.b_sc);
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
      PARENT.setStats(blk);

      setStatsComp(blk);
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

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
