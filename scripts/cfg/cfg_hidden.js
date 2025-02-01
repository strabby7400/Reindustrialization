/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Methods
    const setup_hiddenItems = function() {
      var list_itm = new Seq();
      var list_itmInv = new Seq();
      Vars.content.items().each(itm => {
        if(itm.name.includes("reind-")) {
          list_itm.add(itm);
        } else {
          list_itmInv.add(itm);
        };
      });

      var list_pla = new Seq();
      var list_plaInv = new Seq();
      Vars.content.planets().each(pla => {
        if(pla.name.includes("reind-")) {
          list_pla.add(pla);
        } else {
          list_plaInv.add(pla);
        };
      });

      // Hide Reind items on non-Reind planets
      list_plaInv.each(pla => {
        pla.hiddenItems.addAll(list_itm);
      });

      // Hide non-Reind items on Reind planets
      list_pla.each(pla => {
        pla.hiddenItems.addAll(list_itmInv);
      });
    };
    exports.setup_hiddenItems = setup_hiddenItems;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:cfg_hidden.js loaded.");
});
