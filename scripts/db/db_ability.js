/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const env_depthOre = require("reind/env/env_depthOre");

    const frag_attack = require("reind/frag/frag_attack");
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


  // Part: Auxiliary
    function ax_setAbility(utp, abi) {
      Events.run(ClientLoadEvent, () => utp.abilities.add(abi));
    };


    function ax_dmg(dmg, unit) {
      return Math.max(dmg * unit.damageMultiplier, 0.1)
    };
  // End


  // Part: Visual
    const __shootDust = function(utp, id, radScl) {
      if(id == null) id = 0;
      if(radScl == null) radScl = 1.0;

      const abi = extend(Ability, {


        display: false,


        update(unit) {
          var mounts = unit.mounts;
          if(id < mounts.length - 0.9999 && mounts[id].recoil > 0.9999) {
            var rad = unit.hitSize * radScl;
            var cap = Mathf.round(Math.PI * Math.pow(rad, 2) * 0.01);
            mdl_effect.dustAt_ldm(unit, rad, cap);
          };
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__shootDust = __shootDust;
  // End


  // Part: Attack
    const __deathExplosion = function(utp, dmg, rad, sta, dur, sound_gn) {
      if(dmg == null) dmg = 160.0;
      if(rad == null) rad = 40.0;
      if(sta == null) sta = StatusEffects.none;
      if(dur == null) dur = 120.0;
      if(sound_gn == null) sound_gn = "se-shot-explosion";

      const abi = extend(Ability, {


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
              mdl_text._term("status"),
              sta.localizedName,
            ));
          };
        },


        death(unit) {
          Damage.damage(unit.team, unit.x, unit.y, rad, dmg);
          mdl_game._unitsEnemy(unit, rad, unit.team).forEach(ounit => {
            ounit.apply(sta, dur);
          });

          mdl_effect.showAt(unit, db_effect._commonExplosion(rad), 0.0);
          mdl_effect.playAt(unit, sound_gn);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-death-explosion.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__deathExplosion = __deathExplosion;


    const __energizedChainLightning = function(utp, p, rad0, rad, dmg, cap, dmgFact, bdmgMtp, color) {
      if(p == null) p = 0.03333333;
      if(rad0 == null) rad0 = 80.0;
      if(rad == null) rad = 40.0;
      if(dmg == null) dmg = 30.0;
      if(cap == null) cap = -1;
      if(dmgFact == null) dmgFact = 0.75;
      if(bdmgMtp == null) bdmgMtp = 0.3;
      if(color == null) color = Pal.techBlue;

      var r = mdl_data.read_1n1v(db_unit.db["ep"]["range"], utp.name, 5);
      var ep_req = mdl_data.read_1n1v(db_unit.db["ep"]["requirement"], utp.name, 0.0);

      const abi = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energized-chain-lightning.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Stat.damage.localized(),
            Strings.autoFixed(dmg, 2),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Stat.range.localized(),
            Strings.autoFixed(rad0 / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("chain-range"),
            Strings.autoFixed(rad / Vars.tilesize, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("chain-cap"),
            cap < 0 ? mdl_text._term("infinity") : Strings.autoFixed(cap, 0),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("frequency"),
            Strings.autoFixed(p * 60.0, 2),
            StatUnit.perSecond.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("damage-decay"),
            Strings.autoFixed(dmgFact * 100.0, 2) + "%",
          ));
          tb.row();
          tb.add(mdl_text._statMtpText(
            mdl_text._term("building-damage-multiplier"),
            bdmgMtp,
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("status"),
            StatusEffects.shocked.localizedName,
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("stat.reind-stat-ep-range.name"),
            Strings.autoFixed(r, 2),
            StatUnit.blocks.localized(),
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
          if(frag_faci._epFrac(unit) < 0.9999) return;

          var p_fi = Time.delta * p * unit.reloadMultiplier;
          if(Mathf.chance(p_fi)) {
            frag_attack.atk_chainLightning(unit, unit.team, 1, rad0, rad, ax_dmg(dmg, unit), cap, color, dmgFact, bdmgMtp, true);
            mdl_effect.flashAt(unit, Color.valueOf("ffffff80"));
          };
        },


        draw(unit) {
          frag_faci.draw_ep(unit);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-energized-chain-lightning.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__energizedChainLightning = __energizedChainLightning;


    const __lightningCore = function(utp, p, r, off_r, dmg, color) {
      if(p == null) p = 0.03333333;
      if(r == null) r = 5;
      if(off_r == null) off_r = 5;
      if(dmg == null) dmg = 20.0;
      if(color == null) color = Pal.techBlue;

      const abi = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-lightning-core.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Stat.damage.localized(),
            Strings.autoFixed(dmg, 2),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Stat.range.localized(),
            Strings.autoFixed(r + off_r * 0.5, 2),
            StatUnit.blocks.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("frequency"),
            Strings.autoFixed(p * 60.0, 2),
            StatUnit.perSecond.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("status"),
            StatusEffects.shocked.localizedName,
          ));
        },


        update(unit) {
          if(mdl_content.isMoving(unit)) return;

          var p_fi = Time.delta * p * unit.reloadMultiplier;
          if(Mathf.chance(p_fi % 1.0)) frag_attack.atk_lightning(unit, unit.team, Math.ceil(p_fi), r, off_r, ax_dmg(dmg, unit), color, false);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-lightning-core.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__lightningCore = __lightningCore;
  // End


  // Part: Status
    const __deterrence = function(utp, limit, rad) {
      const abi = extend(Ability, {


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
            mdl_text._term("max-health-limit"),
            Strings.autoFixed(limit, 0),
          ));
        },


        update(unit) {
          if(Mathf.chance(0.98)) return;

          var units = mdl_game._unitsEnemy(unit, rad, unit.team);
          if(units.length > 0) {
            var count_apply = 0;
            units.forEach(ounit => {
              if(ounit.maxHealth < limit + 0.0001) {
                ounit.apply(Vars.content.statusEffect("reind-sta-spec-terrorized"), 300.0);
                count_apply += 1;
              };
            });

            if(count_apply > 0) mdl_effect.showAt(unit, db_effect._scanCircle(rad, 0.5, Color.valueOf("ffffff40")), 0.0);
          };
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-deterrence.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__deterrence = __deterrence;


    const __legion = function(utp, limit, rad) {
      const abi = extend(Ability, {


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
            mdl_text._term("unit-count"),
            Strings.autoFixed(limit, 0),
          ));
        },


        displayBars(unit, bars) {
          bars.add(new Bar(
            "term.reind-term-unit-count.name",
            Pal.accent,
            () => Math.min(mdl_game._unitsSame(unit, rad, unit.type.name, unit.team).length / limit, 1.0),
          )).row();
        },


        update(unit) {
          if(Mathf.chance(0.98)) return;

          var count = mdl_game._unitsSame(unit, rad, unit.type.name, unit.team).length;
          if(count >= limit) unit.apply(Vars.content.statusEffect("reind-sta-spec-morale"), 300.0);
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-legion.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__legion = __legion;
  // End


  // Part: Misc
    const __energizedRegeneration = function(utp, hp_heal) {
      if(hp_heal == null) hp_heal = 30.0;

      var r = mdl_data.read_1n1v(db_unit.db["ep"]["range"], utp.name, 5);
      var ep_req = mdl_data.read_1n1v(db_unit.db["ep"]["requirement"], utp.name, 0.0);

      const abi = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energized-regeneration.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("stat.repairspeed"),
            Strings.autoFixed(hp_heal, 2),
            StatUnit.perSecond.localized(),
          ));
          tb.row();
          tb.add(mdl_text._statText(
            Core.bundle.get("stat.reind-stat-ep-range.name"),
            Strings.autoFixed(r, 2),
            StatUnit.blocks.localized(),
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

      ax_setAbility(utp, abi);
    };
    exports.__energizedRegeneration = __energizedRegeneration;


    const __energizer = function(utp) {
      var ep = mdl_data.read_1n1v(db_unit.db["ep"]["provided"], utp.name);
      if(ep == null) ep = 0.0;

      const abi = extend(Ability, {


        addStats(tb) {
          tb.add("\n\n[gray]" + Core.bundle.get("ability.reind-abi-energizer.description") + "[]\n\n").wrap().width(350.0);
          tb.row();
          tb.add(mdl_text._statText(
            mdl_text._term("energy-points"),
            Strings.autoFixed(ep, 2),
          ));
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-energizer.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__energizer = __energizer;


    const __portableOreScanner = function(utp, r, thr, scanColor) {
      if(r == null) r = 8;
      if(thr == null) thr = 180.0;
      if(scanColor == null) scanColor = Color.valueOf("cedef3");

      const abi = extend(Ability, {


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

              mdl_effect.showAt(t, db_effect._oreScannerScan(r, 1, scanColor, true), 0.0);
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
            mdl_game._tsRect(this.tMap.get(unit), r, 1).forEach(ot => {
              var ov = ot.overlay();

              if(mdl_content.isDepthOre(ov)) env_depthOre.drawBase(ov, ot, a);
            });
          };
        },


        localized() {
          return Core.bundle.get("ability.reind-abi-portable-ore-scanner.name");
        },


      });

      ax_setAbility(utp, abi);
    };
    exports.__portableOreScanner = __portableOreScanner;
  // End
