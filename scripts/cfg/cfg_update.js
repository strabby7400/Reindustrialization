/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Suppressor
    var count_load = 0;


    const isSuppressed = function() {
      return count_load > 0;
    };
    exports.isSuppressed = isSuppressed;


    function onWorldLoad_updateSuppressor() {
      count_load = glb_vars.update_suppressorTime;
    };


    function update_updateSuppressor() {
      if(count_load > 0) count_load -= 1;

      return count_load;
    };
  // End


  // Part: Time Control
    function update_timeControl() {
      if(Vars.state.isMenu()) Time.setDeltaProvider(() => Core.graphics.getDeltaTime() * 60.0 * 1.0);
    };
  // End


  /*
    ========================================
    Section: Application
    ========================================
  */


  // Part: Event
    Events.run(WorldLoadEvent, () => {
      onWorldLoad_updateSuppressor();
    });
    Events.run(Trigger.update, () => {
      update_updateSuppressor();
      update_timeControl();
    });
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:cfg_update.js loaded.");
});
