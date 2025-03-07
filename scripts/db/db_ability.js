/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const frag_facility = require("reind/frag/frag_facility");

    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_effect = require("reind/db/db_effect");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Attack
    /* NOTE: Explodes when destroyed. */
    const __deathExplosion = function(utp, dmg, rad, sta, dur) {
      if(dmg == null) dmg = 160.0;
      if(rad == null) rad = 40.0;
      if(sta == null) sta = StatusEffects.none;
      if(dur == null) dur = 120.0;

      var abi_deathExplosion = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-death-explosion.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text.getStatText(
            Stat.damage.localized(),
            Strings.autoFixed(dmg, 2),
          ));
          tb.row();
          tb.add(mdl_text.getStatText(
            Stat.range.localized(),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          if(sta != StatusEffects.none) {
            tb.add(mdl_text.getStatText(
              Core.bundle.get("term.reind-term-status.name"),
              sta.localizedName,
            ));
          };
        },


        death(unit) {
          Damage.damage(unit.team, unit.x, unit.y, rad, dmg);
          mdl_game.getEnemies(mdl_game.poser_1u(unit), rad, unit.team).each(ounit => {
            ounit.apply(sta, dur);
          });

          var eff = db_effect._commonExplosion(rad);
          mdl_effect.showAt(unit, eff, 0.0);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-death-explosion.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_deathExplosion));
    };
    exports.__deathExplosion = __deathExplosion;
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
    /* NOTE: This unit will heal itself when supplied with enough EPs. */
    const __energizedRegeneration = function(utp, hp_heal) {
      if(hp_heal == null) hp_heal = 30.0;

      var r = mdl_data.read_1n1v(db_unit.epRange, utp.name);
      if(r == null) r = 5;
      var ep_req = mdl_data.read_1n1v(db_unit.epRequirement, utp.name);
      if(ep_req == null) ep_req = 0.0;

      var abi_energizedRegeneration = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energized-regeneration.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text.getStatText(
            Core.bundle.get("stat.repairspeed"),
            Strings.autoFixed(hp_heal, 2),
            Core.bundle.get("unit.persecond"),
          ));
          tb.row();
          tb.add(mdl_text.getStatText(
            Core.bundle.get("stat.reind-stat-ep-range.name"),
            Strings.autoFixed(r, 2),
            Core.bundle.get("unit.blocks"),
          ));
          tb.row();
          tb.add(mdl_text.getStatText(
            Core.bundle.get("stat.reind-stat-ep-required.name"),
            Strings.autoFixed(ep_req, 2),
          ));
        },


        displayBars(unit, bars) {
          bars.add(new Bar(
            "term.reind-term-energy-points.name",
            Pal.techBlue,
            () => Math.min(frag_facility.getFrac_ep(unit), 1.0),
          )).row();
        },


        update(unit) {
          if(!unit.damaged()) return;
          if(Mathf.chance(0.98)) return;
          if(frag_facility.getFrac_ep(unit) < 0.9999) return;

          unit.heal(hp_heal * 1.2);

          mdl_effect.showAt(unit, Fx.heal, 0.0);
        },


        draw(unit) {
          frag_facility.draw_ep(unit);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-energized-regeneration.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_energizedRegeneration));
    };
    exports.__energizedRegeneration = __energizedRegeneration;


    /* NOTE: This unit contributes to EP count, the value is fetched from {db_unit.energizer}. */
    const __energizer = function(utp) {
      var ep = mdl_data.read_1n1v(db_unit.energizer, utp.name);
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
