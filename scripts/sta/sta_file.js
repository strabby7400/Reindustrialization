/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_table = require("reind/mdl/mdl_table");

    const db_dialog = require("reind/db/db_dialog");
    const db_stat = require("reind/db/db_stat");
  // End


  // Part: Auxiliary
    function ax_buildStats(nm) {
      return function(tb) {
        tb.row();

        tb.table(Styles.none, tb1 => {
          tb1.left();
          mdl_table.__margin(tb1);

          tb1.button(new TextureRegionDrawable(Core.atlas.find("reind-icon-play")), db_dialog._dramaConfirm(nm)).padLeft(24.0).size(56.0);
        }).growX().row();
      };
    };
  // End


  // Part: Component
    function setStatsComp(sta) {
      sta.stats.add(db_stat.drama, ax_buildStats(sta.name));
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(sta) {
      setStatsComp(sta);
    };
    exports.setStats = setStats;


    const update = function(sta, unit, time) {

    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: sta_file.js loaded.");
});
