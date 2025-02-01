/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: Info
    const showInfoFade = function(str, time) {
      if(time == null) time = 2.0;
      if(str == null) return false;

      new UI().showInfoFade(str, time);

      return true;
    };
    exports.showInfoFade = showInfoFade;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:mdl_ui.js loaded.");
});
