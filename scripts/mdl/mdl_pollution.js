/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Local
    const getLocalPollution = function(t, r) {
      // TODO: Add calculation
    };
    exports.getPollution_1t = getPollution_1t;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_pollution.js loaded.");
});
