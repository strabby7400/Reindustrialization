/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Methods
    const setup_hiddenItems = function() {
      var itms_reind = [];
      var itms_other = [];
      Vars.content.items().each(itm => {
        if(mdl_content.isReind(itm)) {
          itms_reind.push(itm);
        } else {
          itms_other.push(itm);
        };
      });

      var plas_reind = [];
      var plas_other = [];
      Vars.content.planets().each(pla => {
        if(mdl_content.isReind(pla)) {
          plas_reind.push(pla);
        } else {
          plas_other.push(pla);
        };
      });

      // Hide Reind items on non-Reind planets
      plas_other.forEach(pla => {
        pla.hiddenItems.addAll(itms_reind);
      });

      // Hide non-Reind items on Reind planets
      plas_reind.forEach(pla => {
        pla.hiddenItems.addAll(itms_other);
      });
    };
    exports.setup_hiddenItems = setup_hiddenItems;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_hidden.js loaded.");
});
