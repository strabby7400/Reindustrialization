/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_content = require("reind/mdl/mdl_content");
  // End


  // Part: Methods
    const setup_hidden = function() {
      var cts_inter = [];
      Vars.content.items().each(i => {if(mdl_content.isIntermediate(i)) cts_inter.push(i)});
      Vars.content.liquids().each(i => {if(mdl_content.isIntermediate(i)) cts_inter.push(i)});

      cts_inter.forEach(i => {
        i.shownPlanets.add(Vars.content.planet("reind-pla-ter-uson"));
      });
    };
    exports.setup_hidden = setup_hidden;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_hidden.js loaded.");
});
