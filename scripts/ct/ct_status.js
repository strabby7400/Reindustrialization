// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const ct_unit = require("ct/ct_unit");
    const db_fluid = require("db/db_fluid");
    const db_status = require("db/db_status");
  // End


  // Start: Non-robots Immunities
    const stat_affectsNonRobots = new Stat("reind-stat-affects-non-robots.name", StatCat.function);


    function modifyStats_nonRobots(obj) {
      obj.stats.add(stat_affectsNonRobots, false);
    };


    function modifyImmunities_nonRobots(obj) {
      const list = db_status.nonRobots;
      for(let i = 0; i < list.size; i++) {
        var unit = Vars.content.unit(list.get(i));
        if(unit != null) {
          unit.immunities.add(obj);
        };
      };
    };


    Events.run(ClientLoadEvent, () => {
      const list_botOnly = db_status.botOnly;
      for(let i = 0; i < list_botOnly.size; i++) {
        var target = Vars.content.statusEffect(list_botOnly.get(i));
        if(target != null) {
          modifyStats_nonRobots(target);
          modifyImmunities_nonRobots(target);
        };
      };
    });
  // End


  // Start: Parasite
    const effect_parasiteWave = extend(WaveEffect, {
      layer: Layer.effect + 0.01,
      lifetime: 30.0,
      sides: -1,
      colorFrom: Color.valueOf("ff7f7fff"),
      colorTo: Color.valueOf("ff7f7fff"),
      sizeFrom: 0.0,
      sizeTo: 48.0,
      strokeFrom: 4.0,
      strokeTo: 0.0,
    });
    const effect_parasiteMist = extend(ParticleEffect, {
      layer: Layer.effect + 0.015,
      region: "reind-efr-shadow-white",
      interp: Interp.pow10Out,
      lifetime: 600.0,
      particles: 64,
      colorFrom: Color.valueOf("ff7f7fff"),
      colorTo: Color.valueOf("ff7f7f00"),
      length: 96.0,
      sizeFrom: 6.0,
      sizeTo: 24.0,
      strokeFrom: 2.0,
      strokeTo: 0.0,
      lenFrom: 4.0,
      lenTo: 2.0,
    });
    const effect_parasiteExplosion = new MultiEffect(
      effect_parasiteWave,
      effect_parasiteMist,
    );


    function update_parasite(obj, unit) {
      var t = Vars.world.tile(unit.tileX(), unit.tileY());
      if(t != null && t.floor() != null && t.floor().liquidDrop != null && db_fluid.liquidAqueous.contains(t.floor().liquidDrop.name)) {
        var damage = 40.0 + unit.maxHealth * 0.004;
        if(Mathf.chance(Time.delta * 0.02)) {
          unit.damage(Time.delta * damage);
        };
      };

      if(unit.health / unit.maxHealth < 0.01) {
        unit.damage(Time.delta * unit.maxHealth * 0.015);
      };

      if(!unit.dead) return;
      var target = ct_unit.unitPara_llomea;
      var amountCap = 4;
      var offset = 8.0;
      var off_x;
      var off_y;

      var amount = Math.max(Math.round(Mathf.random(amountCap)), 1);
      unit.unapply(obj);
      effect_parasiteExplosion.at(unit.x, unit.y);
      Core.assets.get("sounds/se-spec-parasite-explosion.ogg").at(unit);

      for(let i = 0; i < amount; i++) {
        off_x = Mathf.random(offset);
        off_y = Mathf.random(offset);
        if(Mathf.chance(0.5)) off_x *= -1;
        if(Mathf.chance(0.5)) off_y *= -1;
        target.spawn(Vars.state.rules.waveTeam, unit.x + off_x, unit.y + off_y);
      };
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function update_extra(obj, unit, time) {

    };


    function setStats_extra(obj) {

    };
  // End


  // Start: Region
    /* sta-liq */
    const staLiq_brineCorrosion = extend(StatusEffect, "sta-liq-brine-corrosion", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_brineCorrosion = staLiq_brineCorrosion;


    const staLiq_wasteCorrosion = extend(StatusEffect, "sta-liq-waste-corrosion", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_wasteCorrosion = staLiq_wasteCorrosion;


    const staLiq_slurrySlowed = extend(StatusEffect, "sta-liq-slurry-slowed", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_slurrySlowed = staLiq_slurrySlowed;


    const staLiq_base = extend(StatusEffect, "sta-liq-base", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_base = staLiq_base;
    staLiq_base.init(() => {
      staLiq_base.opposite(
        staLiq_acid,
        staLiq_acidII,
        staLiq_acidIII,
        staLiq_acidIV,
      );
      staLiq_base.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_base, result.time = 600.0));
    });


    const staLiq_baseII = extend(StatusEffect, "sta-liq-base-ii", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_baseII = staLiq_baseII;
    staLiq_baseII.init(() => {
      staLiq_baseII.opposite(
        staLiq_acid,
        staLiq_acidII,
        staLiq_acidIII,
        staLiq_acidIV,
      );
      staLiq_baseII.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_baseII, result.time = 600.0));
    });


    const staLiq_baseIII = extend(StatusEffect, "sta-liq-base-iii", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_baseIII = staLiq_baseIII;
    staLiq_baseIII.init(() => {
      staLiq_baseIII.opposite(
        staLiq_acid,
        staLiq_acidII,
        staLiq_acidIII,
        staLiq_acidIV,
      );
      staLiq_baseIII.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_baseIII, result.time = 600.0));
    });


    const staLiq_baseIV = extend(StatusEffect, "sta-liq-base-iv", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_baseIV = staLiq_baseIV;
    staLiq_baseIV.init(() => {
      staLiq_baseIV.opposite(
        staLiq_acid,
        staLiq_acidII,
        staLiq_acidIII,
        staLiq_acidIV,
      );
      staLiq_baseIV.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_baseIV, result.time = 600.0));
    });


    const staLiq_acid = extend(StatusEffect, "sta-liq-acid", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_acid = staLiq_acid;
    staLiq_acid.init(() => {
      staLiq_acid.opposite(
        staLiq_base,
        staLiq_baseII,
        staLiq_baseIII,
        staLiq_baseIV,
      );
      staLiq_acid.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_acid, result.time = 600.0));
    });


    const staLiq_acidII = extend(StatusEffect, "sta-liq-acid-ii", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_acidII = staLiq_acidII;
    staLiq_acidII.init(() => {
      staLiq_acidII.opposite(
        staLiq_base,
        staLiq_baseII,
        staLiq_baseIII,
        staLiq_baseIV,
      );
      staLiq_acidII.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_acidII, result.time = 600.0));
    });


    const staLiq_acidIII = extend(StatusEffect, "sta-liq-acid-iii", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_acidIII = staLiq_acidIII;
    staLiq_acidIII.init(() => {
      staLiq_acidIII.opposite(
        staLiq_base,
        staLiq_baseII,
        staLiq_baseIII,
        staLiq_baseIV,
      );
      staLiq_acidIII.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_acidIII, result.time = 600.0));
    });


    const staLiq_acidIV = extend(StatusEffect, "sta-liq-acid-iv", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staLiq_acidIV = staLiq_acidIV;
    staLiq_acidIV.init(() => {
      staLiq_acidIV.opposite(
        staLiq_base,
        staLiq_baseII,
        staLiq_baseIII,
        staLiq_baseIV,
      );
      staLiq_acidIV.affinity(StatusEffects.melting, (unit, result, time) => result.set(staLiq_acidIV, result.time = 600.0));
    });


    /* sta-spec */
    const staSpec_hiddenWell = extend(StatusEffect, "sta-spec-hidden-well", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staSpec_hiddenWell = staSpec_hiddenWell;


    const staSpec_onFloor = extend(StatusEffect, "sta-spec-on-floor", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staSpec_onFloor = staSpec_onFloor;


    const staSpec_quicksand = extend(StatusEffect, "sta-spec-quicksand", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staSpec_quicksand = staSpec_quicksand;


    const staSpec_contaminated = extend(StatusEffect, "sta-spec-contaminated", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staSpec_contaminated = staSpec_contaminated;


    const staSpec_contaminatedMildly = extend(StatusEffect, "sta-spec-contaminated-mildly", {
      update(unit, time) {
        this.super$update(unit, time);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staSpec_contaminatedMildly = staSpec_contaminatedMildly;


    const staSpec_parasite = extend(StatusEffect, "sta-spec-parasite", {
      // Specific
      update(unit, time) {
        this.super$update(unit, time);
        update_parasite(this, unit);
        update_extra(this, unit, time);
      },
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    exports.staSpec_parasite = staSpec_parasite;
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_status.js loaded.");
});
