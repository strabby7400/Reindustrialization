/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_depthOre = require("reind/env/env_depthOre");

    const frag_faci = require("reind/frag/frag_faci");

    const mdl_content = require("reind/mdl/mdl_content");
    const mdl_data = require("reind/mdl/mdl_data");
    const mdl_draw = require("reind/mdl/mdl_draw");
    const mdl_effect = require("reind/mdl/mdl_effect");
    const mdl_game = require("reind/mdl/mdl_game");
    const mdl_text = require("reind/mdl/mdl_text");

    const db_effect = require("reind/db/db_effect");
    const db_unit = require("reind/db/db_unit");
  // End


  // Part: Visual
    const __shootDust = function(utp, index, radScl) {
      if(index == null) index = 0;
      if(radScl == null) radScl = 1.0;

      var abi_shootDust = extend(Ability, {


        display: false,


        update(unit) {
          var mounts = unit.mounts;
          if(index < mounts.length - 0.9999 && mounts[index].recoil > 0.9999) {
            var rad = unit.hitSize * radScl;
            var cap = Mathf.round(Math.PI * Math.pow(rad, 2) * 0.01);
            for(let i = 0; i < cap; i++) {mdl_effect.dustAt_ldm(unit, rad)};
          };
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_shootDust));
    };
    exports.__shootDust = __shootDust;
  // End


  // Part: Attack
    const __deathExplosion = function(utp, dmg, rad, sta, dur) {
      if(dmg == null) dmg = 160.0;
      if(rad == null) rad = 40.0;
      if(sta == null) sta = StatusEffects.none;
      if(dur == null) dur = 120.0;

      var abi_deathExplosion = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-death-explosion.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Stat.damage.localized(),
            Strings.autoFixed(dmg, 2),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Stat.range.localized(),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          if(sta != StatusEffects.none) {
            tb.add(mdl_text._statText(
              Core.bundle.get("term.reind-term-status.name"),
              sta.localizedName,
            ));
          };
        },


        death(unit) {
          Damage.damage(unit.team, unit.x, unit.y, rad, dmg);
          mdl_game._liUnitEnemy(unit, rad, unit.team).each(ounit => {
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
    const __deterrence = function(utp, limit, rad) {
      var abi_deterrence = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-deterrence.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Stat.range.localized(),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("term.reind-term-max-health-limit.name"),
            Strings.autoFixed(limit, 0),
          ));
        },


        update(unit) {
          if(Mathf.chance(0.98)) return;

          var li_ounit = mdl_game._liUnitEnemy(unit, rad, unit.team);
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


    const __legion = function(utp, limit, rad) {
      var abi_legion = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-legion.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Stat.range.localized(),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("term.reind-term-unit-count.name"),
            Strings.autoFixed(limit, 0),
          ));
        },


        displayBars(unit, bars) {
          bars.add(new Bar(
            "term.reind-term-unit-count.name",
            Pal.accent,
            () => Math.min(mdl_game._liUnitSame(unit, rad, unit.type.name, unit.team).size / limit, 1.0),
          )).row();
        },


        update(unit) {
          if(Mathf.chance(0.98)) return;

          var count = mdl_game._liUnitSame(unit, rad, unit.type.name, unit.team).size;
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
    const __energizedRegeneration = function(utp, hp_heal) {
      if(hp_heal == null) hp_heal = 30.0;

      var r = mdl_data.read_1n1v(db_unit.db["ep"]["range"], utp.name);
      if(r == null) r = 5;
      var ep_req = mdl_data.read_1n1v(db_unit.db["ep"]["requirement"], utp.name);
      if(ep_req == null) ep_req = 0.0;

      var abi_energizedRegeneration = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energized-regeneration.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("stat.repairspeed"),
            Strings.autoFixed(hp_heal, 2),
            Core.bundle.get("unit.persecond"),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("stat.reind-stat-ep-range.name"),
            Strings.autoFixed(r, 2),
            Core.bundle.get("unit.blocks"),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("stat.reind-stat-ep-required.name"),
            Strings.autoFixed(ep_req, 2),
          ));
        },


        displayBars(unit, bars) {
          bars.add(new Bar(
            "term.reind-term-energy-points.name",
            Pal.techBlue,
            () => Math.min(frag_faci._epFrac(unit), 1.0),
          )).row();
        },


        update(unit) {
          if(!unit.damaged()) return;
          if(Mathf.chance(0.98)) return;
          if(frag_faci._epFrac(unit) < 0.9999) return;

          unit.heal(hp_heal * 1.2);

          mdl_effect.showAt(unit, Fx.heal, 0.0);
        },


        draw(unit) {
          frag_faci.draw_ep(unit);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-energized-regeneration.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_energizedRegeneration));
    };
    exports.__energizedRegeneration = __energizedRegeneration;


    const __energizer = function(utp) {
      var ep = mdl_data.read_1n1v(db_unit.db["ep"]["provided"], utp.name);
      if(ep == null) ep = 0.0;

      var abi_energizer = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energizer.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
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


    const __portableOreScanner = function(utp, r, thr, scanColor) {
      if(r == null) r = 8;
      if(thr == null) thr = 180.0;
      if(scanColor == null) scanColor = Color.valueOf("cedef3");

      var abi_portableOreScanner = extend(Ability, {


        progMap: new ObjectMap(), aMap: new ObjectMap(), tMap: new ObjectMap(),


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-portable-ore-scanner.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Stat.range.localized(),
            Strings.autoFixed(r, 2),
            StatUnit.blocks.localized(),
          ));
        },


        update(unit) {
          // Initialize
          if(!this.progMap.containsKey(unit)) this.progMap.put(unit, Mathf.random(thr));
          if(!this.aMap.containsKey(unit)) this.aMap.put(unit, 0.0);
          if(!this.tMap.containsKey(unit)) this.tMap.put(unit, null);

          if(mdl_content.isMoving(unit) || unit.hasItem() || unit.mining() || unit.isBuilding()) {
            this.progMap.put(unit, 0.0);
          } else {
            var prog = this.progMap.get(unit) + Time.delta;

            if(prog > thr) {
              prog %= thr;

              this.aMap.put(unit, 1.0);

              var t = unit.tileOn();
              this.tMap.put(unit, t);

              mdl_effect.showAt_ldm(t, db_effect._oreScannerScan(r, 1, scanColor, true), 0.0);
              mdl_effect.playAt(t, "se-craft-ore-scanner", 1.0, 1.0, 0.1);
            };

            this.progMap.put(unit, prog);
          };

          var a = Mathf.approachDelta(this.aMap.get(unit), 0.0, 0.008);
          this.aMap.put(unit, a);
        },


        draw(unit) {
          var frac = Mathf.clamp(this.progMap.get(unit) / thr);
          if(!mdl_content.isMoving(unit)) {
            mdl_draw.drawProgressCircle(unit, frac, utp.hitSize * 1.2, scanColor, 0.0, true);
          };

          var a = this.aMap.get(unit);
          if(a > 0.01) {
            mdl_game._liTileRect(this.tMap.get(unit), r, 1).each(ot => {
              var ov = ot.overlay();

              if(mdl_content.isDepthOre(ov)) env_depthOre.drawBase(ov, ot, a);
            });
          };
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-portable-ore-scanner.name");
        },


      });

      Events.run(ClientLoadEvent, () => utp.abilities.addAll(abi_portableOreScanner));
    };
    exports.__portableOreScanner = __portableOreScanner;
  // End
