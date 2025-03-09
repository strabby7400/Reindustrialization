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
      var li_itm = new Seq();
      var li_itmInv = new Seq();
      Vars.content.items().each(itm => {
        if(mdl_content.isReind(itm)) {
          li_itm.add(itm);
        } else {
          li_itmInv.add(itm);
        };
      });

      var li_pla = new Seq();
      var li_plaInv = new Seq();
      Vars.content.planets().each(pla => {
        if(mdl_content.isReind(pla)) {
          li_pla.add(pla);
        } else {
          li_plaInv.add(pla);
        };
      });

      // Hide Reind items on non-Reind planets
      li_plaInv.each(pla => {
        pla.hiddenItems.addAll(li_itm);
      });

      // Hide non-Reind items on Reind planets
      li_pla.each(pla => {
        pla.hiddenItems.addAll(li_itmInv);
      });
    };
    exports.setup_hiddenItems = setup_hiddenItems;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_hidden.js loaded.");
});
