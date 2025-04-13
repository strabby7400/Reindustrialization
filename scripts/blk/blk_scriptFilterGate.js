/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const PARENT = require("reind/blk/blk_genericDistributionGate");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");

    const db_effect = require("reind/db/db_effect");
    const db_table = require("reind/db/db_table");
  // End


  // Part: Component
    function updateTileComp(b) {
      if(b.needCheck) {
        b.invReg = mdl_content._reg(b.block, "-inv");
        b.changeEff = db_effect._recipeChange(b.block.size, b.team.color);

        b.needCheck = false;
      };
    };


    function buildConfigurationComp(b, tb) {
      db_table.__toggle(tb, b, b.inv, "invert", true);
    };


    function configuredComp(b, builder, val) {
      if(val == null) return;

      var tup = mdl_data.handleConfigured(b, builder, val);

      if(tup[1] > -2) {
        b.inv = Boolean(tup[1]);

        mdl_effect.showAt(b, b.changeEff, 0.0);
      };
    };


    function getTileTargetComp(b, itm, ob, isFlip) {
      var rot_t = ob.relativeTo(b);
      var b_t = b.nearby(rot_t);

      var transEnd = null;
      if((b.filterScr(itm) != b.inv) == b.enabled) {
        if(b.isSame(ob) && b.isSame(b_t)) return transEnd;
        transEnd = b_t;
      } else {
        var b_s1 = b.nearby(Mathf.mod(rot_t - 1, 4));
        var b_s2 = b.nearby(Mathf.mod(rot_t + 1, 4));
        var cond1 = b_s1 != null && !(b_s1.block.instantTransfer && ob.block.instantTransfer) && b_s1.acceptItem(b, itm);
        var cond2 = b_s2 != null && !(b_s2.block.instantTransfer && ob.block.instantTransfer) && b_s2.acceptItem(b, itm);

        if(cond1 && !cond2) {
          transEnd = b_s1;
        } else if(!cond1 && cond2) {
          transEnd = b_s2;
        } else if(!cond2) {
          return transEnd;
        } else {
          transEnd = (b.rotation & (1 << rot_t)) == 0 ? b_s1 : b_s2;
          if(isFlip) b.rotation ^= (1 << rot_t);
        };
      };

      return transEnd;
    };


    function drawComp(b) {
      if(b.inv) mdl_draw.drawNormalRegion(b, b.invReg);
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
    };
    exports.setStats = setStats;


    const updateTile = function(b) {
      PARENT.updateTile(b);

      updateTileComp(b);
    };
    exports.updateTile = updateTile;


    const buildConfiguration = function(b, tb) {
      buildConfigurationComp(b, tb);
    };
    exports.buildConfiguration = buildConfiguration;


    const configured = function(b, builder, val) {
      configuredComp(b, builder, val);
    };
    exports.configured = configured;


    const getTileTarget = function(b, itm, ob, isFlip) {
      return getTileTargetComp(b, itm, ob, isFlip);
    };
    exports.getTileTarget = getTileTarget;


    const draw = function(b) {
      drawComp(b);
    };
    exports.draw = draw;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: blk_scriptFilterGate.js loaded.");
});
