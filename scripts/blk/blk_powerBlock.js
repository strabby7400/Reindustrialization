// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Import
    const db_power = require("db/db_power");
  // End


  // Start: Voltage
    const stat_voltageTier = new Stat("reind-stat-voltage-tier.name", StatCat.function);


    function modifyStats_voltageTier(obj, param) {
      var result;
      switch(param) {
        case "LV" :
          result = "@reindTerms.voltageLV.name";
          break;
        case "HV" :
          result = "@reindTerms.voltageHV.name";
          break;
      };
      obj.stats.add(stat_voltageTier, result);
    };


    Events.run(ClientLoadEvent, () => {
      Vars.content.blocks().each(b => {
        if(b.name.includes("reind-") && b.hasPower) {
          var param;
          if(db_power.tierHV.contains(b.name)) {
            param = "HV";
          } else {
            param = "LV";
          };
          modifyStats_voltageTier(b, param);
        };
      });
    });
  // End


  // Start: Modify
    function modify_powerBlock(obj, powerUse, powerCapacity) {
      Events.run(ClientLoadEvent, () => {
        obj.consumePower(powerUse);
        obj.stats.add(Stat.powerUse, powerUse * 60.0, StatUnit.perSecond);
        if(powerCapacity > 0) {
          obj.consumePowerBuffered(powerCapacity);
        };
        if(obj.name.toString().includes("cable")) {
          obj.addBar("power", PowerNode.makePowerBalance());
          obj.addBar("batteries", PowerNode.makeBatteryBalance());
        };
      });
    };
  // End


/*
    ==================================================
    Part: Application
    ==================================================
*/


  // Start: Intergration
    function setStats_extra(obj) {

    };


    function updateTile_extra(obj) {

    };
  // End


  // Start: Region
    /* pow-wire */
    const powWire_cableCopper = extend(Battery, "pow-wire-cable-copper", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    powWire_cableCopper.buildType = () => extend(Battery.BatteryBuild, powWire_cableCopper, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.powWire_cableCopper = powWire_cableCopper;
    modify_powerBlock(powWire_cableCopper, 2.25 / 60.0, 0.0);


    const powWire_wireRelayCopper = extend(BeamNode, "pow-wire-wire-relay-copper", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    powWire_wireRelayCopper.buildType = () => extend(BeamNode.BeamNodeBuild, powWire_wireRelayCopper, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.powWire_wireRelayCopper = powWire_wireRelayCopper;
    modify_powerBlock(powWire_wireRelayCopper, 30.0 / 60.0, 0.0);


    const powWire_wireNodeCopper = extend(PowerNode, "pow-wire-wire-node-copper", {
      setStats() {
        this.super$setStats();
        setStats_extra(this);
      },
    });
    powWire_wireNodeCopper.buildType = () => extend(PowerNode.PowerNodeBuild, powWire_wireNodeCopper, {
      updateTile() {
        this.super$updateTile();
        updateTile_extra(this);
      },
    });
    exports.powWire_wireNodeCopper = powWire_wireNodeCopper;
    modify_powerBlock(powWire_wireNodeCopper, 65.0 / 60.0, 0.0);
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_powerBlock.js loaded.");
});
