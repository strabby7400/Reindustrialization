/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: Param
    const getSizePair = function(pad, cap, offW, offH) {
      if(pad == null) pad = 20.0;
      if(cap == null) cap = 760.0;
      if(offW == null) offW = 0.0;
      if(offH == null) offH = 0.0;

      var w = Core.graphics.getWidth();
      var h = Core.graphics.getHeight();
      var w_fi = Math.max(Math.min(w - pad * 2.0, cap), 64.0) - offW;
      var h_fi = Math.max(Math.min(h - pad * 2.0, cap), 64.0) - offH;

      return [w_fi, h_fi];
    };
    exports.getSizePair = getSizePair;
  // End


  // Part: Info
    const showInfoFade = function(str, time) {
      if(time == null) time = 2.0;
      if(Vars.headless || str == null) return false;

      new UI().showInfoFade(str, time);

      return true;
    };
    exports.showInfoFade = showInfoFade;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_ui.js loaded.");
});
