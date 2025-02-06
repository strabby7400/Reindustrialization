/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_heat = require("reind/frag/frag_heat");
    const frag_unit = require("reind/frag/frag_unit");

    const mdl_database = require("reind/mdl/mdl_database");

    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Component
    function setStatsComp(utp) {
      if(db_unit.nonRobots.contains(utp.name)) utp.stats.add(db_stat.notRobot, true);

      var polTol = mdl_database.read_1n1v(db_unit.pollutionTolerance, utp.name);
      if(polTol != null) utp.stats.add(db_stat.pollutionTolerance, polTol, db_stat.pollutionUnit);
    };


    function updateComp(utp, unit) {
      frag_heat.update_unitHeat(utp, unit);

      frag_unit.update_surrounding(utp, unit);

      frag_unit.update_mouse(utp, unit);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats = function(utp) {
      setStatsComp(utp);
    };
    exports.setStats = setStats;


    const update = function(utp, unit) {
      updateComp(utp, unit);
    };
    exports.update = update;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_genericUnit.js loaded.");
});
