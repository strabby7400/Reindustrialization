/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const blk_genericCore = require("reind/blk/blk_genericCore");
    const blk_impactDrill = require("reind/blk/blk_impactDrill");
    const blk_recipeFactory = require("reind/blk/blk_recipeFactory");
    const blk_router = require("reind/blk/blk_router");
    const env_tree = require("reind/env/env_tree");
    const unit_genericUnit = require("reind/unit/unit_genericUnit");

    const cfg_update = require("reind/cfg/cfg_update");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_dialog = require("reind/db/db_dialog");
  // End


  // Part: Methods
    const loadSettings = function() {
      set_beta(Core.settings.getBool("reind-beta-mode", false));
      set_noob(Core.settings.getBool("reind-noob-mode", false));

      set_ldm(Core.settings.getBool("reind-ldm", false));
      set_p3dShadow(Core.settings.getBool("reind-p3d-shadow", true));
      set_efficiencyUpdateInterval(Core.settings.getInt("reind-efficiency-update-interval", 4));

      set_coreTimeControl(Core.settings.getBool("reind-core-time-control", true));

      set_treeAlpha(Core.settings.getInt("reind-tree-alpha", 20));
      set_decalLifetime(Core.settings.getInt("reind-decal-lifetime", 60));

      set_secretCode(Core.settings.getString("reind-secret-code", "<ohno>"));
    };
    exports.loadSettings = loadSettings;


    const set_beta = function(bool) {
      var val = bool;

      mdl_game.set_beta(bool);
    };
    exports.set_beta = set_beta;


    const set_noob = function(bool) {
      var val = bool;

      cfg_update.set_noob(bool);
      frag_attack.set_noob(bool);
      frag_fluid.set_noob(bool);
    };
    exports.set_noob = set_noob;


    const set_ldm = function(bool) {
      var val = bool;

      mdl_draw.set_ldm(val);
      mdl_effect.set_ldm(val);
    };
    exports.set_ldm = set_ldm;


    const set_p3dShadow = function(bool) {
      var val = bool;

      unit_genericUnit.set_p3dShadow(val);
    };
    exports.set_p3dShadow = set_p3dShadow;


    const set_efficiencyUpdateInterval = function(int) {
      var val = int * 0.25 * 60.0;

      blk_impactDrill.set_efficiencyUpdateInterval(val);
      blk_recipeFactory.set_efficiencyUpdateInterval(val);
    };
    exports.set_efficiencyUpdateInterval = set_efficiencyUpdateInterval;


    const set_coreTimeControl = function(bool) {
      var val = bool;

      Vars.content.blocks().each(blk => {if(mdl_content.isCore(blk)) blk.configurable = val});
    };
    exports.set_coreTimeControl = set_coreTimeControl;


    const set_treeAlpha = function(int) {
      var val = int / 20.0;

      env_tree.set_treeAlpha(val);
    };
    exports.set_treeAlpha = set_treeAlpha;


    const set_decalLifetime = function(int) {
      var val = int * 60.0;

      mdl_effect.set_decalLifetime(val);
    };
    exports.set_decalLifetime = set_decalLifetime;


    const set_secretCode = function(str) {
      var val = str;

      blk_genericCore.set_secretCode(val);
      blk_router.set_secretCode(val);
      cfg_update.set_secretCode(val);
      db_dialog.set_secretCode(val);
    };
    exports.set_secretCode = set_secretCode;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_setting.js loaded.");
});
