/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_geometry = require("reind/mdl/mdl_geometry");

    const db_block = require("reind/db/db_block");
    const db_env = require("reind/db/db_env");

    const glb_vars = require("reind/glb/glb_vars");
  // End


  // Part: Update Unit
    const updateFrag_surrounding = function(utp, unit) {
      if(Mathf.chance(0.85)) return;

      var onFloor = !unit.flying;

      var t = unit.tileOn();
      if(t == null) return;

      // Beneath
      if(onFloor) {
        /* quicksand */
        if(db_env.quicksand.contains(t.floor().name)) unit.apply(Vars.content.statusEffect("reind-sta-spec-quicksand"), 60.0);

        /* parasite fluid */
        if(db_env.parasiteFluids.contains(t.floor().name)) /*unit.apply(Vars.content.statusEffect("reind-sta-spec-parasite"), 1800.0)*/;
      };

      // Range
      var list_ot = mdl_geometry.getTiles_rect(t, 4);
      var count_wall = 0.0;
      list_ot.each(ot => {
        /* tree */
        if(!unit.flying && utp.hitSize <= 28.0 && ot.block().name.includes("reind-env-tree-")) {
          var z = mdl_database.read_1n1v(db_env.treeLayers, ot.block().name);
          /* NOTE: z over 80.0 disables hidding ability of the tree, i.e. not enough leaves. */
          if(z > 76.0 && z < 80.0) {
            unit.apply(Vars.content.statusEffect("reind-sta-spec-hidden-well"), 60.0);
            ot.block().drawBase(ot);
          };
        };

        /* core */
        /* NOTE: Emergency mode ON */
        if(ot.block() instanceof CoreBlock && ot.build.team == unit.team) unit.apply(Vars.content.statusEffect("reind-sta-spec-core-overdrive"), 60.0);

        /* wall */
        /* NOTE: An attempt to ban wall spamming */
        if(!unit.flying && !(unit instanceof Legsc) && ot.block().name.includes("reind-def-wall-") && ot.build.team == unit.team) count_wall += 8.0 / mdl_geometry.getDistance_2t(t, ot);
      });

      // Post-detection
      /* wall */
      if(count_wall > glb_vars.wall_penaltyLimit) unit.apply(Vars.content.statusEffect("reind-sta-spec-over-protected"), 60.0);
    };
    exports.updateFrag_surrounding = updateFrag_surrounding;


    const updateFrag_mouse = function(utp, unit) {
      if(unit != Vars.player.unit()) return;

      var ot = mdl_geometry.getTile_mouse();
      if(ot == null) return;

      var ui = new UI();
      var nm_flr = ot.floor().name;
      var nm_blk = ot.block().name;

      if(Core.input.touched) {
        // Non-build Zone
        if(nm_flr == "reind-map-misc-non-build-zone") ui.showInfoFade("@info.reind-info-non-build-zone.name", 2.0);
      };
    };
    exports.updateFrag_mouse = updateFrag_mouse;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND:frag_unit.js loaded.");
});
