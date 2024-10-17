// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_status = require("db/db_status");
  // End


  // Start: Non-robots Immunities
    const stat_affectsNonRobots = new Stat("reind-stat-affects-non-robots.name", StatCat.function);


    function setStats_nonRobots(obj) {
      obj.stats.add(stat_affectsNonRobots, false);
    };


    function immuneAdd_nonRobots(obj) {
      const list = db_status.nonRobots;
      for(let i = 0; i < list.size; i++) {
        var unit = Vars.content.unit(list.get(i));
        if(unit != null) {
          unit.immunities.add(obj);
        };
      };
    };


    Events.run(ClientLoadEvent, () => {
      const list_robotOnlyStatus = db_status.robotOnlyStatus;
      for(let i = 0; i < list_robotOnlyStatus.size; i++) {
        var target = Vars.content.statusEffect(list_robotOnlyStatus.get(i));
        if(target != null) {
          setStats_nonRobots(target);
          immuneAdd_nonRobots(target);
        };
      };
    });
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
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:ct_status.js loaded.");
});
