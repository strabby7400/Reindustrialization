/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const unit_genericUnit = require("reind/unit/unit_genericUnit");

    const cfg_sector = require("reind/cfg/cfg_sector");

    const mdl_effect = require("reind/mdl/mdl_effect");
  // End


  // Part: Methods
    const set_ldm = function(bool) {
      cfg_sector.set_ldm(bool);
      mdl_effect.set_ldm(bool);
    };
    exports.set_ldm = set_ldm;


    const set_p3dShadow = function(bool) {
      unit_genericUnit.set_p3dShadow(bool);
    };
    exports.set_p3dShadow = set_p3dShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:cfg_setting.js loaded.");
});
