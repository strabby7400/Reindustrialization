/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const cfg_setting = require("reind/cfg/cfg_setting");

    const mdl_content = require("reind/mdl/mdl_content");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Setting
    var noob = false;
    const set_noob = function(bool) {
      noob = bool;
    };
    exports.set_noob = set_noob;
  // End


  // Part: Noob
    function update_noob() {
      if(!Vars.state.isGame() || Mathf.chance(0.98)) return;

      if(Groups.player.size() > 1) {
        cfg_setting.set_noob(false);
      } else {
        cfg_setting.set_noob(Core.settings.getBool("reind-noob-mode", false));
      };

      if(noob) {
        Groups.unit.each(unit => {
          if(unit.team == Vars.player.team() && mdl_content.isReind(unit.type)) unit.apply(Vars.content.statusEffect("reind-sta-spec-earses-mark"), 240.0);
        });
      };
    };
  // End


  // Part: Suppressor
    var count_load = 0;
    const isSuppressed = function() {
      return count_load > 0;
    };
    exports.isSuppressed = isSuppressed;


    function onWorldLoad_suppressor() {
      count_load = glb_vars.update_suppressorTime;
    };


    function update_suppressor() {
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
      onWorldLoad_suppressor();
    });


    Events.run(Trigger.update, () => {
      update_noob();
      update_suppressor();
      update_timeControl();
    });
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: cfg_update.js loaded.");
});
