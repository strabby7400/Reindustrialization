// Checked on 11-2-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Lighting Arc Generator
    /* Randomly generates clusters of lightning arcs around an unit */
    const modifyAbilities_lightningArcGenerator = function(obj, dmg, chance, amount, color, bdmtp) {
      var bullet_lightningArc = extend(LightningBulletType, {
        lightningColor: color,
        lightningLength: 4,
        lightningLengthRand: 8,
        collides: true,
        collidesAir: true,
        collidesGround: true,
        damage: dmg,
        buildingDamageMultiplier: bdmtp,
        status: StatusEffects.shocked,
      });

      var ability_lightningArcGenerator = extend(Ability, {
        update(unit) {
          this.super$update(unit);
          if(Mathf.chance(Time.delta * chance)) {
            for(let i = 0; i < amount; i++) {
              bullet_lightningArc.create(unit, unit.team, unit.x, unit.y, Mathf.random() * 360.0);
            };
          };
        },

        addStats(t) {
          t.add("[lightgray]" + Core.bundle.get("reindTerms.createChance.name") + ": [white]" + Strings.autoFixed(chance * 60.0, 2) + " " + StatUnit.perSecond.localized());
          t.row();
          t.add("[lightgray]" + Core.bundle.get("reindTerms.amount.name") + ": [white]" + amount);
          t.row();
          t.add(Core.bundle.format("bullet.damage", dmg));
          t.row();

          // Color change for BDM
          if(bdmtp >= 1) {
            t.add("[lightgray]" + Core.bundle.get("reindTerms.buildingDamageMultiplier.name") + ": [white]" + Strings.autoFixed(bdmtp * 100.0, 2) + "%");
          } else {
            t.add("[lightgray]" + Core.bundle.get("reindTerms.buildingDamageMultiplier.name") + ": [red]" + Strings.autoFixed(bdmtp * 100.0, 2) + "%");
          };
          t.row();
          t.add(StatusEffects.shocked.emoji() + StatusEffects.shocked.localizedName);
        },

        localized() {
          return Core.bundle.get("ability.reind-abi-lightning-arc-generator.name");
        },
      });

      Events.run(ClientLoadEvent, () => {
        obj.abilities.addAll(ability_lightningArcGenerator);
      });
    };
    exports.modifyAbilities_lightningArcGenerator = modifyAbilities_lightningArcGenerator;
  // End
