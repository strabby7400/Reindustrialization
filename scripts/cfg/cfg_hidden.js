/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Methods
    const setup_hiddenItems = function() {
      var li_itm = new Seq();
      var li_itmInv = new Seq();
      Vars.content.items().each(itm => {
        if(itm.name.includes("reind-")) {
          li_itm.add(itm);
        } else {
          li_itmInv.add(itm);
        };
      });

      var li_pla = new Seq();
      var li_plaInv = new Seq();
      Vars.content.planets().each(pla => {
        if(pla.name.includes("reind-")) {
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
  Log.info("REIND:cfg_hidden.js loaded.");
});
