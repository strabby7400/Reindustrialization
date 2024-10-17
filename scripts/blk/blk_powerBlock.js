// Checked on 10-10-2024


/*
    ==================================================
    Part: Definition
    ==================================================
*/


  // Start: Modify
    function modify_powerBlock(obj, powerUse, powerCapacity) {
      Events.run(ClientLoadEvent, () => {
        obj.consumePower(powerUse);
        obj.stats.add(Stat.powerUse, Mathf.round(powerUse * 60.0), StatUnit.perSecond);
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
    modify_powerBlock(powWire_cableCopper, 1.0 / 60.0, 0.0);


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
    modify_powerBlock(powWire_wireRelayCopper, 12.0 / 60.0, 0.0);


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
    modify_powerBlock(powWire_wireNodeCopper, 36.0 / 60.0, 0.0);
  // End




Events.run(ClientLoadEvent, () => {
    Log.info("reind:blk_powerBlock.js loaded.");
});
