/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_database = require("reind/mdl/mdl_database");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_effect = require("reind/db/db_effect");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Status
    /* NOTE: Applies terrorized status to units with max health lower than {limit}. */
    const __deterrence = function(utp, limit, rad) {
      var abi_deterrence = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-deterrence.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text.getStatText(
            Stat.range.localized(),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text.getStatText(
            Core.bundle.get("term.reind-term-max-health-limit.name"),
            Strings.autoFixed(limit, 0),
          ));
        },


        update(unit) {
          if(Mathf.chance(0.98)) return;

          var li_ounit = mdl_game.getEnemies(mdl_game.poser_1u(unit), rad, unit.team);
          if(li_ounit.size > 0) {
            var count_apply = 0;
            li_ounit.each(ounit => {
              if(ounit.maxHealth < limit + 0.0001) {
                ounit.apply(Vars.content.statusEffect("reind-sta-spec-terrorized"), 300.0);
                count_apply += 1;
              };
            });

            if(count_apply > 0) mdl_effect.showAt_ldm(unit, db_effect._scanCircle(rad, 0.5, Color.valueOf("ffffff40")), 0.0);
          };
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-deterrence.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_deterrence));
    };
    exports.__deterrence = __deterrence;


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
            () => Math.min(mdl_game.getSameUnits(mdl_game.poser_1u(unit), rad, unit.type.name, unit.team).size / limit, 1.0),
          )).row();
        },


        update(unit) {
          if(Mathf.chance(0.98)) return;

          var count = mdl_game.getSameUnits(mdl_game.poser_1u(unit), rad, unit.type.name, unit.team).size;
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
