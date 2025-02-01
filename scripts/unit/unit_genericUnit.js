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
    function setStatsComp_genericUnit(utp) {
      // Get not robot
      if(db_unit.nonRobots.contains(utp.name)) utp.stats.add(db_stat.notRobot, true);

      // Get pollution tolerance
      var polTol = mdl_database.read_1n1v(db_unit.pollutionTolerance, utp.name);
      if(polTol != null) utp.stats.add(db_stat.pollutionTolerance, polTol, db_stat.pollutionUnit);
    };


    function updateComp_genericUnit(utp, unit) {
      // Update unit heat
      frag_heat.update_unitHeat(utp, unit);

      // Update surrounding
      frag_unit.updateFrag_surrounding(utp, unit);

      // Update mouse
      frag_unit.updateFrag_mouse(utp, unit);
    };
  // End


/*
  ========================================
  Section: Application
  ========================================
*/


  // Part: Integration
    const setStats_genericUnit = function(utp) {
      setStatsComp_genericUnit(utp);
    };
    exports.setStats = setStats_genericUnit;


    const update_genericUnit = function(utp, unit) {
      updateComp_genericUnit(utp, unit);
    };
    exports.update = update_genericUnit;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND:unit_genericUnit.js loaded.");
});
