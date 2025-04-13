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
    const rs_genericResource = require("reind/rs/rs_genericResource");
    const unit_genericUnit = require("reind/unit/unit_genericUnit");

    const cfg_update = require("reind/cfg/cfg_update");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");

    const db_dialog = require("reind/db/db_dialog");
  // End


  // Part: Methods
    const loadSettings = function() {
      set_noob(Core.settings.getBool("reind-noob-mode", false));

      set_ldm(Core.settings.getBool("reind-ldm", false));
      set_p3dShadow(Core.settings.getBool("reind-p3d-shadow", true));
      set_efficiencyInterval(Core.settings.getInt("reind-efficiency-interval", 3));

      set_coreTimeControl(Core.settings.getBool("reind-core-time-control", true));

      set_treeAlpha(Core.settings.getInt("reind-tree-alpha", 20));
      set_treeTransparentization(Core.settings.getBool("reind-tree-transparentization", true));
      set_remainsLifetime(Core.settings.getInt("reind-remains-lifetime", 12));
      set_showIconTag(Core.settings.getBool("reind-show-icon-tag", true));
      set_iconTagInterval(Core.settings.getInt("reind-icon-tag-interval", 1));

      set_secretCode(Core.settings.getString("reind-secret-code", "<ohno>"));
    };
    exports.loadSettings = loadSettings;


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


    const set_efficiencyInterval = function(int) {
      var val = (int + 1) * 0.25 * 60.0;

      blk_impactDrill.set_efficiencyInterval(val);
      blk_recipeFactory.set_efficiencyInterval(val);
      blk_router.set_efficiencyInterval(val);
    };
    exports.set_efficiencyInterval = set_efficiencyInterval;


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


    const set_treeTransparentization = function(bool) {
      var val = bool;

      env_tree.set_treeTransparentization(val);
    };
    exports.set_treeTransparentization = set_treeTransparentization;


    const set_remainsLifetime = function(int) {
      var val = int * 5.0 * 60.0;

      mdl_effect.set_remainsLifetime(val);
    };
    exports.set_remainsLifetime = set_remainsLifetime;


    const set_showIconTag = function(bool) {
      var val = bool;

      rs_genericResource.set_showIconTag(val);
    };
    exports.set_showIconTag = set_showIconTag;


    const set_iconTagInterval = function(int) {
      var val = (int + 1) * 60.0 * 0.25;

      rs_genericResource.set_iconTagInterval(val);
    };
    exports.set_iconTagInterval = set_iconTagInterval;


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
