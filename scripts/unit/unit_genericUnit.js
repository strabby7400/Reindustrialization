/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_heat = require("reind/frag/frag_heat");
    const frag_unit = require("reind/frag/frag_unit");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_game = require("reind/mdl/mdl_game");

    const db_stat = require("reind/db/db_stat");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Setting
    var p3dShadow = true;
    const set_p3dShadow = function(bool) {
      p3dShadow = bool;
    };
    exports.set_p3dShadow = set_p3dShadow;
  // End


  // Part: Component
    function setStatsComp(utp) {
      utp.stats.remove(Stat.mineTier);

      if(db_unit.nonRobots.contains(utp.name)) utp.stats.add(db_stat.notRobot, true);

      var polTol = mdl_data.read_1n1v(db_unit.pollutionTolerance, utp.name);
      if(polTol != null) utp.stats.add(db_stat.pollutionTolerance, polTol, db_stat.pollutionUnit);
    };


    function updateComp(utp, unit) {
      frag_heat.update_unitHeat(utp, unit);
      frag_unit.update_surrounding(utp, unit);
      frag_unit.update_mouse(utp, unit);
    };


    function drawShadowComp(utp, unit) {
      if(!p3dShadow) {
        utp.super$drawShadow(unit);

        return;
      };

      var elev = Mathf.clamp(unit.elevation, utp.shadowElevation, 1.0) * utp.shadowElevationScl * (1.0 - unit.drownTime);
      if(!utp.lowAltitude && unit.flying) elev *= 1.5;

      mdl_draw.drawPseudo3dShadow(mdl_game.poser_1u(unit), utp.region, elev, unit.rotation - 90.0);
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


    const drawShadow = function(utp, unit) {
      drawShadowComp(utp, unit);
    };
    exports.drawShadow = drawShadow;
  // End




Events.run(ClientLoadEvent, () => {
  Log.info("REIND: unit_genericUnit.js loaded.");
});
