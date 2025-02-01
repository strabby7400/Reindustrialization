/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_geometry = require("reind/mdl/mdl_geometry");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Status
    /* NOTE: Applies morale status when {count_unit >= limit} */
    const __legion = function(utp, limit, rad) {
      var abi_legion = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-legion.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text.getStatText(
            Stat.range.localized(),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text.getStatText(
            Core.bundle.get("term.reind-term-unit-count.name"),
            Strings.autoFixed(limit, 0),
          ));
        },


        displayBars(unit, bars) {
          bars.add(new Bar(
            "term.reind-term-unit-count.name",
            Pal.accent,
            () => Math.min(mdl_geometry.countUnits_self(unit, rad) / limit, 1.0),
          )).row();
        },


        update(unit) {
          if(Mathf.chance(0.99)) return;

          var count = mdl_geometry.countUnits_self(unit, rad);
          if(count >= limit) unit.apply(Vars.content.statusEffect("reind-sta-spec-morale"), 300.0);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-legion.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_legion));
    };
    exports.__legion = __legion;
  // End


  // Part: Misc
    /* NOTE: This unit contributes to EP count, the value is fetched from {db_unit.energizer} */
    const __energizer = function(utp) {
      var ep = mdl_database.read_1n1v(db_unit.energizer, utp.name);
      if(ep == null) ep = 0.0;

      var abi_energizer = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energizer.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text.getStatText(
            Core.bundle.get("term.reind-term-energy-points.name"),
            Strings.autoFixed(ep, 2),
          ));
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-energizer.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_energizer));
    };
    exports.__energizer = __energizer;
  // End
