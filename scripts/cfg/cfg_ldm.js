/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const cfg_sector = require("reind/cfg/cfg_sector");

    const mdl_effect = require("reind/mdl/mdl_effect");
  // End


  // Part: Methods
    const setup_ldm = function(bool) {
      cfg_sector.setup_ldm(bool);

      mdl_effect.setup_ldm(bool);
    };
    exports.setup_ldm = setup_ldm;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:cfg_ldm.js loaded.");
});
