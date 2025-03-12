/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_tree = require("reind/env/env_tree");
    const unit_genericUnit = require("reind/unit/unit_genericUnit");

    const cfg_sector = require("reind/cfg/cfg_sector");
    const cfg_update = require("reind/cfg/cfg_update");

    const frag_attack = require("reind/frag/frag_attack");
    const frag_fluid = require("reind/frag/frag_fluid");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
  // End


  // Part: Methods
    const loadSettings = function() {
      set_beta(Core.settings.getBool("reind-beta-mode", false));
      set_noob(Core.settings.getBool("reind-noob-mode", false));

      set_ldm(Core.settings.getBool("reind-ldm", false));
      set_p3dShadow(Core.settings.getBool("reind-p3d-shadow", true));

      set_coreTimeControl(Core.settings.getBool("reind-core-time-control", true));

      set_treeAlpha(Core.settings.getInt("reind-tree-alpha", 20));
    };
    exports.loadSettings = loadSettings;


    const set_beta = function(bool) {
      mdl_game.set_beta(bool);
    };
    exports.set_beta = set_beta;


    const set_noob = function(bool) {
      cfg_update.set_noob(bool);
      frag_attack.set_noob(bool);
      frag_fluid.set_noob(bool);
    };
    exports.set_noob = set_noob;


    const set_ldm = function(bool) {
      cfg_sector.set_ldm(bool);
      mdl_effect.set_ldm(bool);
    };
    exports.set_ldm = set_ldm;


    const set_p3dShadow = function(bool) {
      unit_genericUnit.set_p3dShadow(bool);
    };
    exports.set_p3dShadow = set_p3dShadow;


    const set_coreTimeControl = function(bool) {
      Vars.content.blocks().each(blk => {if(mdl_content.isCore(blk)) blk.configurable = bool});
    };
    exports.set_coreTimeControl = set_coreTimeControl;


    const set_treeAlpha = function(int) {
      env_tree.set_treeAlpha(int);
    };
    exports.set_treeAlpha = set_treeAlpha;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_setting.js loaded.");
});
