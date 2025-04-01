/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
  // End


  // Part: Event
    const update_countdown = function(sta, unit, time, scr) {
      if(scr == null) return;

      if(time < 10.0) {
        unit.unapply(sta);
        scr.call();
      };
    };
    exports.update_countdown = update_countdown;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: frag_status.js loaded.");
});
