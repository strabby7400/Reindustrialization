/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Debug
    const _beta = function() {
      return Core.settings.getBool("reind-beta-mode", false);
    };
    exports._beta = _beta;
  // End


  // Part: Warn
    const _w_contentNotFound = function(nm) {
      if(typeof nm != "string") nm = "!STR";

      Log.warn("REIND: Content not found: " + nm);
    };
    exports._w_contentNotFound = _w_contentNotFound;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_content.js loaded.");
});
